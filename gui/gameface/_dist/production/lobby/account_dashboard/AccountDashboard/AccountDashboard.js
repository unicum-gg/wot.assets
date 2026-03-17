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
            294: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => de });
                var a = {};
                (t.r(a),
                    t.d(a, { mouse: () => _, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => B,
                        getSize: () => D,
                        graphicsQuality: () => g,
                        playSound: () => A,
                        setRTPC: () => F,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => x, getTextureUrl: () => y }));
                var o = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(o),
                    t.d(o, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => H,
                        arabic2roman: () => ne,
                        children: () => r,
                        displayStatus: () => k,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => le,
                        events: () => T,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => te,
                        getExternalPaddingsRem: () => re,
                        getFontNames: () => ae,
                        getScale: () => V,
                        getSize: () => G,
                        getViewGlobalPosition: () => z,
                        initExternalPaddings: () => ce,
                        isEventHandled: () => ee,
                        isFocused: () => Z,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => U,
                        sendEvent: () => I,
                        setAnimateWindow: () => Q,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => ie,
                    }));
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
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
                            : i(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        o = m[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function F(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(p).reduce((e, u) => ((e[u] = () => A(p[u])), e), {}),
                    b = { play: Object.assign({}, h, { sound: A }), setRTPC: F },
                    v = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    f = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function w(e) {
                    let u = '';
                    for (let t = f.length - 1; t >= 0; t--) for (; e >= f[t]; ) ((u += v[t]), (e -= f[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function y(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function x(e, u, t) {
                    return `url(${y(e, u, t)})`;
                }
                const k = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    T = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    P = ['args'];
                const N = 2,
                    S = 16,
                    L = 32,
                    M = 64,
                    O = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, P);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    I = {
                        close(e) {
                            O('popover' === e ? N : L);
                        },
                        minimize() {
                            O(M);
                        },
                        move(e) {
                            O(S, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function $(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function j(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function z(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: Y(u.x), y: Y(u.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function K(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Q(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function ue() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ne = w;
                function re() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(k).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === k[u]), e), {}),
                    se = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ie = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : T.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function le() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ce(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            a = u.right,
                            n = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const de = { view: o, client: n, sound: b, intl: C };
            },
            521: (e, u, t) => {
                'use strict';
                let a, n;
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
                    })(n || (n = {})));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(294);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Sw: () => r.Z,
                    B3: () => i,
                    Z5: () => o.Z5,
                    B0: () => s,
                    wU: () => b,
                    ry: () => D,
                    Eu: () => B,
                    SW: () => p,
                    P3: () => h,
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
                const n = a;
                var r = t(358);
                var o = t(613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    m = t(294);
                const _ = ['args'];
                function A(e, u, t, a, n, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            A(r, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, a, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
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
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, _);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => g(s.CLOSE),
                    p = () => g(s.POP_OVER, { on: !1 }),
                    h = (e, u, t, a, n = R.invalid('resId'), r) => {
                        const o = m.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            E = i.height,
                            _ = {
                                x: m.O.view.pxToRem(l) + o.x,
                                y: m.O.view.pxToRem(c) + o.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(E),
                            };
                        g(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: F(_),
                            on: !0,
                            args: r,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    v = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(572);
                const w = n.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: D,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: b,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            712: (e, u, t) => {
                'use strict';
                var a = t(363),
                    n = t.n(a);
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(294);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e = o.O.client.getSize('rem')) {
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
                                n = (function (e, u) {
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
                                r = Math.min(a, n);
                            return {
                                extraLarge: r === t.extraLarge.weight,
                                large: r === t.large.weight,
                                medium: r === t.medium.weight,
                                small: r === t.small.weight,
                                extraSmall: r === t.extraSmall.weight,
                                extraLargeWidth: a === t.extraLarge.weight,
                                largeWidth: a === t.large.weight,
                                mediumWidth: a === t.medium.weight,
                                smallWidth: a === t.small.weight,
                                extraSmallWidth: a === t.extraSmall.weight,
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(u, t, s),
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
                })(i || (i = {}));
                const c = l(),
                    d = (0, a.createContext)(c),
                    E = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, E);
                    const n = (0, a.useContext)(d),
                        o = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        m = n.extraLargeWidth,
                        _ = n.largeWidth,
                        A = n.mediumWidth,
                        F = n.smallWidth,
                        D = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: B, large: g, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && m) return r(u, t, b);
                        if (t.largeWidth && _) return r(u, t, b);
                        if (t.mediumWidth && A) return r(u, t, b);
                        if (t.smallWidth && F) return r(u, t, b);
                        if (t.extraSmallWidth && D) return r(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const u = (0, a.useState)(l),
                        t = u[0],
                        r = u[1],
                        s = (0, a.useState)(!1),
                        i = s[0],
                        c = s[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const u = o.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : l(u);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        n().createElement(d.Provider, { value: t }, i && e)
                    );
                };
                var _ = t(483),
                    A = t.n(_),
                    F = t(926),
                    D = t.n(F);
                let B, g, C;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(g || (g = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(C || (C = {})));
                const p = () => {
                        const e = (0, a.useContext)(d),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return g.ExtraLarge;
                                    case e.largeWidth:
                                        return g.Large;
                                    case e.mediumWidth:
                                        return g.Medium;
                                    case e.smallWidth:
                                        return g.Small;
                                    case e.extraSmallWidth:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    h = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const v = {
                        [g.ExtraSmall]: '',
                        [g.Small]: D().SMALL_WIDTH,
                        [g.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [g.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [g.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    f = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL_HEIGHT,
                        [C.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [C.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [C.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL,
                        [B.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [B.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [B.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    y = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, h);
                        const r = p(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return n().createElement('div', b({ className: A()(t, v[o], f[s], w[i]) }, a), u);
                    },
                    x = ['children'];
                const k = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, x);
                    return n().createElement(m, null, n().createElement(y, t, u));
                };
                var T = t(533),
                    P = t.n(T);
                var N = t(797);
                let S;
                function L(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(S || (S = {}));
                const M = (e) => e.replace(/&nbsp;/g, ' '),
                    O = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    I = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    H = (e, u, t = S.left) => e.split(u).reduce(t === S.left ? O : I, []),
                    W = (() => {
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
                    $ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    j = (e, u = S.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if ($.includes(t)) return W(e);
                        if ('ja' === t) {
                            return (0, N.D4)()
                                .parse(e)
                                .map((e) => M(e));
                        }
                        return ((e, u = S.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = M(e);
                            return (H(n, /( )/, u).forEach((e) => (t = t.concat(H(e, a, S.left)))), t);
                        })(e, u);
                    };
                var X = t(916),
                    G = t(613);
                const U = 1e3,
                    z = 60,
                    q = 3600,
                    V = 86400;
                (Date.now(), G.Ew.getRegionalDateTime, G.Ew.getFormattedDateTime);
                function K(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / V);
                    u -= t * V;
                    const a = Math.trunc(u / q);
                    u -= a * q;
                    const n = Math.trunc(u / z);
                    return ((u -= n * z), { days: t, hours: a, minutes: n, seconds: u });
                }
                const Y = () => {},
                    Q = (e = 0, u, t = 0, n = Y) => {
                        const r = (0, a.useState)(e),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / U);
                                                null !== t && u <= t ? (s(t), n && n(), clearInterval(r)) : s(u);
                                            },
                                            (u || (e > 120 ? z : 1)) * U,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, n]),
                            o
                        );
                    },
                    Z = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId'),
                            n = '';
                        var r;
                        u &&
                            ((n = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id));
                        return { callerUrl: n, caller: t, stack: u, resId: a };
                    },
                    J = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    ee = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    ue = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    te = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    ae = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = J(`${e}.${t}`, window);
                                return ue(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    ne = (e) => {
                        const u = ((e) => {
                                const u = Z(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: te(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = J(te(t, `${u}.${a}`), window);
                                    return ue(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const re = () => (window.injected || (window.injected = new Map()), window.injected);
                const oe = X.Sw.instance;
                let se;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(se || (se = {}));
                const ie = (e = 'model', u = se.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => Z(), []),
                            o = r.callerUrl,
                            s = r.caller,
                            i = r.resId,
                            l = (0, a.useMemo)(() => {
                                const u = (function (e) {
                                    return re().has(e);
                                })(o.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !u ? `subViews.${s}.${e}` : e;
                            }, [o, s, e]),
                            c = (0, a.useState)(() =>
                                ((e) => {
                                    const u = J(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return ue(u) ? u.value : u;
                                })(ae(l)),
                            ),
                            d = c[0],
                            E = c[1],
                            m = (0, a.useRef)(-1);
                        return (
                            ee(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? se.Deep : se.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== se.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === se.Deep
                                                ? (e === d && n((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        a = ne(e);
                                    m.current = oe.addCallback(a, t, i, u === se.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== se.None)
                                    return () => {
                                        oe.removeCallback(m.current, i);
                                    };
                            }, [i, u]),
                            d
                        );
                    },
                    le = (X.Sw.instance, Q),
                    ce = {};
                function de(e, u, t, a = se.Deep) {
                    const r = (r) => {
                        const o = r.path || u || void 0,
                            s = ie(o, (o && ce[o]) || !1 ? se.None : a),
                            i = Object.assign({}, t(s, r), r);
                        return n().createElement(e, i);
                    };
                    var o;
                    return ((r.displayName = `WithModel(${((o = e), o.displayName || o.name || 'Component')})`), r);
                }
                const Ee = (e) => {
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
                var me = t(521);
                const _e = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Ae(e = me.n.NONE, u = _e, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== me.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Fe = 'display',
                    De = (e, u) => {
                        const t = ie('tutorialModel.effects.items').filter((t) => {
                            if (!t) return !1;
                            const a = t.value,
                                n = window.__featureId.toString();
                            return a.componentId === e && a.type === u && a.viewId === n;
                        });
                        if (0 === t.length) return null;
                        const a = Object.assign({}, t[0].value);
                        return {
                            effect: a,
                            completeEffect: () => {
                                (tutorialModel.onEffectCompleted({
                                    componentId: e,
                                    viewId: window.__featureId.toFixed(0),
                                    effectType: u,
                                    effectBuilder: a.builder,
                                }),
                                    u === Fe && window.tutorialApi && window.tutorialApi.updateComponents());
                            },
                        };
                    },
                    Be = 'visible_change',
                    ge = Be,
                    Ce = (e, u) => {
                        const t = ie('tutorialModel.triggers.items').filter((t) => {
                            if (!t) return !1;
                            const a = t.value,
                                n = a.triggers.filter((e) => e.value === u);
                            return a.componentId === e && n.length > 0;
                        });
                        if (0 === t.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e))
                            return null;
                        return {
                            trigger: t[0].value,
                            runTrigger: (t) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: u, state: t });
                            },
                        };
                    },
                    pe = 'FormatText_base_d0',
                    he = ({ binding: e, text: u = '', classMix: t, alignment: r = S.left, formatWithBrackets: o }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = o && e ? L(u, e) : u;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, o) =>
                                n().createElement(
                                    'div',
                                    { className: A()(pe, t), key: `${u}-${o}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : j(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => n().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function be(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const ve = {
                        playHighlight() {
                            be('highlight');
                        },
                        playClick() {
                            be('play');
                        },
                        playYes() {
                            be('yes1');
                        },
                    },
                    fe = 'BonusXpBlock_base_91',
                    we = 'BonusXpBlock_base__locked_c9',
                    ye = 'BonusXpBlock_lock_1f',
                    xe = 'BonusXpBlock_locked_overlay_e2',
                    ke = 'BonusXpBlock_base__disabled_a6',
                    Te = 'BonusXpBlock_disabled_overlay_9b',
                    Pe = 'BonusXpBlock_xp_1c',
                    Ne = 'BonusXpBlock_xp__x1_8c',
                    Se = 'BonusXpBlock_xp__x2_a5',
                    Le = 'BonusXpBlock_xp__x3_8a',
                    Re = 'BonusXpBlock_xp__x4_36',
                    Me = 'BonusXpBlock_xp__x5_16',
                    Oe = 'BonusXpBlock_xp__wotPlus_dd',
                    Ie = 'BonusXpBlock_xp__locked_7a',
                    He = 'BonusXpBlock_hover_43',
                    We = 'BonusXpBlock_text_97',
                    $e = 'BonusXpBlock_heading_a4',
                    je = 'BonusXpBlock_multiplier_value_50',
                    Xe = 'BonusXpBlock_multiplier_unavailable_0c',
                    Ge = 'BonusXpBlock_uses_f2',
                    Ue = 'BonusXpBlock_usesLeft_fb',
                    ze = 'BonusXpBlock_alert_b3',
                    qe = 'BonusXpBlock_alertIcon_6c',
                    Ve = 'BonusXpBlock_xpIconContainer_87',
                    Ke = 'BonusXpBlock_xpIcon_ce',
                    Ye = 'BonusXpBlock_daily_applied_xp_c4',
                    Qe = 'BonusXpBlock_plus_sign_b9',
                    Ze = {
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
                    Je = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    eu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    uu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    tu = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, a.useMemo)(() => u || {}, [u]);
                        let s = Je.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = eu.exec(t),
                                c = uu.exec(t),
                                d = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + l++ + e;
                                ((i = i.replace(t, `%(${s})`)),
                                    (o[s] = Ze[e]
                                        ? n().createElement(
                                              'span',
                                              { className: Ze[e] },
                                              n().createElement(he, { text: d, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(e) },
                                              n().createElement(he, { text: d, binding: u }),
                                          )));
                            }
                            s = Je.exec(e);
                        }
                        return n().createElement(he, { text: i, classMix: t, binding: o });
                    });
                const au = ({ value: e, format: u = 'integral' }) => {
                        const t = (function (e) {
                                return 'gold' === e ? X.B3.GOLD : X.B3.INTEGRAL;
                            })(u),
                            a = X.Z5.getNumberFormat(e, t);
                        return void 0 !== e && void 0 !== a ? a : null;
                    },
                    nu = {
                        get heading() {
                            return R.strings.account_dashboard.bonusXp.heading();
                        },
                        get description() {
                            return R.strings.account_dashboard.bonusXp.descriptionWotPremium();
                        },
                        get descriptionDailyRemaining() {
                            return R.strings.account_dashboard.bonusXp.descriptionDailyRemaining();
                        },
                        get descriptionMoreWotPlus() {
                            return R.strings.account_dashboard.bonusXp.descriptionMoreWotPlus();
                        },
                        get descriptionMoreWotPremium() {
                            return R.strings.account_dashboard.bonusXp.descriptionMoreWotPremium();
                        },
                        get descriptionWotPremium() {
                            return R.strings.account_dashboard.bonusXp.descriptionWotPremium();
                        },
                        get unavailable() {
                            return R.strings.account_dashboard.bonusXp.unavailable();
                        },
                        get wotPlusLabel() {
                            return R.strings.account_dashboard.bonusXp.wotPlusLabel();
                        },
                        get wotPremiumLabel() {
                            return R.strings.account_dashboard.bonusXp.wotPremiumLabel();
                        },
                        get descriptionWotPlus() {
                            return R.strings.account_dashboard.bonusXp.descriptionWotPlus();
                        },
                        get descriptionDailyEarning() {
                            return R.strings.account_dashboard.bonusXp.descriptionDailyEarning();
                        },
                        get xpAddSign() {
                            return R.strings.account_dashboard.bonusXp.xpAddSign();
                        },
                    },
                    ru = [Ne, Se, Le, Re, Me],
                    ou = ({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }, r) => {
                        if (e && u && t && a) {
                            const e = {
                                xp: n().createElement(
                                    'div',
                                    { className: Ye },
                                    n().createElement('span', { className: Qe }, nu.xpAddSign),
                                    n().createElement(au, { value: r }),
                                ),
                                icon: n().createElement(
                                    'div',
                                    { className: Ve },
                                    n().createElement('div', { className: Ke }),
                                ),
                            };
                            return su(nu.descriptionDailyEarning, je, e);
                        }
                        const o = (({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }) => {
                                if (t) {
                                    if (e && !u) return { text: nu.descriptionMoreWotPremium, classMix: je };
                                    if (!e && u)
                                        return a
                                            ? { text: nu.descriptionMoreWotPlus, classMix: je }
                                            : { text: nu.descriptionDailyRemaining, classMix: je };
                                }
                                return { text: nu.descriptionDailyRemaining, classMix: je };
                            })({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }),
                            s = o.text,
                            i = o.classMix;
                        return n().createElement(he, { text: s, classMix: i });
                    },
                    su = (e, u, t) => n().createElement(tu, { text: e, classMix: u, binding: t }),
                    iu = de(
                        (e) => {
                            const u = e.className,
                                t = e.isEnabled,
                                r = e.multiplier,
                                o = e.totalUses,
                                s = e.usesLeft,
                                i = e.onClick,
                                l = e.isWotPlusBonusEnabled,
                                c = e.isWotPlus,
                                d = e.isWotPremium,
                                E = e.dailyAppliedXP,
                                m = t && ((!d && !c) || (!l && !d)),
                                _ = !m && t,
                                F = !t,
                                D = _ && 0 === s,
                                B = (0, a.useCallback)(() => {
                                    t && (i(), be('play'));
                                }, [i, t]),
                                g = (0, a.useCallback)(() => {
                                    t && be('highlight');
                                }, [t]);
                            return n().createElement(
                                'div',
                                {
                                    className: A()(u, fe, m && we, F && ke),
                                    'data-testid': 'BonusXpBlock',
                                    onClick: B,
                                    onMouseEnter: g,
                                },
                                n().createElement('div', { className: Te }),
                                n().createElement('div', { className: He }),
                                n().createElement('div', { className: A()(Pe, l ? Oe : ru[r - 1] || ru[0], m && Ie) }),
                                m &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: xe }),
                                        n().createElement(
                                            'div',
                                            { className: We },
                                            n().createElement('div', { className: ye }),
                                            n().createElement('h3', { className: $e }, nu.heading),
                                            (({ isWotPlusBonusEnabled: e }) =>
                                                e
                                                    ? su(nu.descriptionWotPlus, Xe, {
                                                          wotPlus: nu.wotPlusLabel,
                                                          wotPremium: nu.wotPremiumLabel,
                                                      })
                                                    : su(nu.descriptionWotPremium, Xe, {
                                                          wotPremium: nu.wotPremiumLabel,
                                                      }))({ isWotPlusBonusEnabled: l }),
                                        ),
                                    ),
                                _ &&
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        n().createElement('h3', { className: $e }, nu.heading),
                                        n().createElement(
                                            'h2',
                                            { className: Ge },
                                            n().createElement('span', { className: Ue }, s),
                                            ' / ',
                                            o,
                                        ),
                                        ou(
                                            { isWotPlus: c, isWotPremium: d, isExhausted: D, isWotPlusBonusEnabled: l },
                                            E,
                                        ),
                                    ),
                                F &&
                                    n().createElement(
                                        'div',
                                        { className: We },
                                        n().createElement('h3', { className: $e }, nu.heading),
                                        n().createElement(he, { text: nu.unavailable, classMix: Xe }),
                                        n().createElement(
                                            'div',
                                            { className: ze },
                                            n().createElement('div', { className: qe }),
                                        ),
                                    ),
                            );
                        },
                        'model.bonusXp',
                        (e, u) => Object.assign({}, e, u),
                    );
                var lu = t(515);
                const cu = {
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
                    du = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const mu = (e) => {
                        let u = e.value,
                            t = e.isEmpty,
                            a = void 0 !== t && t,
                            r = e.className,
                            o = e.size,
                            s = void 0 === o ? 'normal' : o,
                            i = e.fadeInAnimation,
                            l = void 0 !== i && i,
                            c = e.hide,
                            d = void 0 !== c && c,
                            E = e.maximumNumber,
                            m = void 0 === E ? 99 : E,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, du);
                        const F = a ? null : u,
                            D = 'string' == typeof F;
                        if ((F && !D && F < 0) || 0 === F) return null;
                        const B = F && !D && F > m,
                            g = A()(
                                cu.base,
                                cu[`base__${s}`],
                                l && cu.base__animated,
                                d && cu.base__hidden,
                                !F && cu.base__pattern,
                                a && cu.base__empty,
                                r,
                            );
                        return n().createElement(
                            'div',
                            Eu({ className: g }, _),
                            n().createElement('div', { className: cu.bg }),
                            n().createElement('div', { className: cu.pattern }),
                            n().createElement(
                                'div',
                                { className: A()(cu.value, D && cu.value__text) },
                                B ? m : F,
                                B && n().createElement('span', { className: cu.plus }, '+'),
                            ),
                        );
                    },
                    _u = 'Flame_base_90',
                    Au = 'Flame_slides_58',
                    Fu = 'Flame_frame_29',
                    Du = (0, a.memo)(({ className: e }) => {
                        const u = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((u, t) => {
                                    const a = `flame_${`0${t}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return n().createElement(
                            'div',
                            { className: A()(_u, e), 'data-testid': 'Flame' },
                            n().createElement(
                                'div',
                                { className: Au },
                                u.map((e) => n().createElement('img', { key: e, src: e, className: Fu })),
                            ),
                        );
                    }),
                    Bu = 'DogTag_base_f8',
                    gu = 'DogTag_engraving_34',
                    Cu = 'DogTag_background_64',
                    pu = 'DogTag_highlight_d5',
                    hu = ({ background: e, engraving: u, isHighlighted: t, className: a }) =>
                        n().createElement(
                            'div',
                            { className: A()(Bu, a) },
                            n().createElement('div', {
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(e)})`,
                                },
                                className: Cu,
                            }),
                            n().createElement('div', {
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(u)})`,
                                },
                                className: gu,
                            }),
                            t && n().createElement(Du, { className: pu }),
                        ),
                    bu = {
                        base: 'PersonalDogTagBlock_base_3c',
                        background: 'PersonalDogTagBlock_background_88',
                        gradient: 'PersonalDogTagBlock_gradient_f5',
                        shadow: 'PersonalDogTagBlock_shadow_1b',
                        hover: 'PersonalDogTagBlock_hover_79',
                        heading: 'PersonalDogTagBlock_heading_8e',
                        dogTag: 'PersonalDogTagBlock_dogTag_d8',
                        base__selected: 'PersonalDogTagBlock_base__selected_67',
                        counter: 'PersonalDogTagBlock_counter_7c',
                        glow: 'PersonalDogTagBlock_glow_ac',
                        check: 'PersonalDogTagBlock_check_a6',
                    },
                    vu = ({
                        id: e,
                        className: u,
                        isSelected: t,
                        isHighlighted: r,
                        background: o,
                        engraving: s,
                        counter: i,
                        isEmptyCounter: l,
                        title: c,
                        onClick: d,
                    }) => {
                        const E = (0, a.useCallback)(() => {
                            (d(), be('play'));
                        }, [d]);
                        return n().createElement(
                            'div',
                            {
                                id: e,
                                className: A()(bu.base, r && bu.base__highlighted, t && bu.base__selected, u),
                                onClick: E,
                                onMouseEnter: ve.playHighlight,
                            },
                            n().createElement('div', { className: bu.background }),
                            n().createElement(hu, {
                                className: bu.dogTag,
                                background: o,
                                engraving: s,
                                isHighlighted: r,
                            }),
                            n().createElement('div', { className: bu.shadow }),
                            n().createElement('div', { className: bu.gradient }),
                            n().createElement('div', { className: bu.heading }, c),
                            t &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: bu.glow }),
                                    n().createElement('div', { className: bu.check }),
                                ),
                            i > 0 &&
                                n().createElement(
                                    'div',
                                    { className: bu.counter },
                                    n().createElement(mu, { value: i, isEmpty: l }),
                                ),
                            n().createElement('div', { className: bu.hover }),
                        );
                    },
                    fu = 'DogTagsBlock_base_84',
                    wu = 'DogTagsBlock_dogTag_12',
                    yu = 'DogTagsBlock_unavailable_4f',
                    xu = 'DogTagsBlock_alert_29';
                function ku() {
                    return !1;
                }
                console.log;
                var Tu = t(174);
                function Pu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Nu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Nu(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Nu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Su = (e) => (0 === e ? window : window.subViews.get(e));
                const Lu = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Su,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        r = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return (n.set(l, t), e && t(s(r)), l);
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
                                                        for (var e, t = Pu(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            a = Tu.LO.box(u, { equals: ku });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Tu.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = Tu.LO.box(a, { equals: ku });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Tu.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            n = Tu.LO.box(a, { equals: ku });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Tu.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = Tu.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Tu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                o = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Tu.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Tu.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && n ? n.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    m = (0, a.useState)(r),
                                    _ = m[0],
                                    A = m[1],
                                    F = (0, a.useState)(() => d(r, s, l)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? B(d(_, s, l)) : (E.current = !0);
                                    }, [l, _, s]),
                                    (0, a.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    n().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            customizableDogTag: e.object('customizableDogTag'),
                            animatedDogTag: e.object('animatedDogTag'),
                        }),
                        ({ externalModel: e }) => ({
                            openCustomizableDogTag: e.createCallbackNoArgs('customizableDogTag.onClick'),
                            openAnimatedDogTag: e.createCallbackNoArgs('animatedDogTag.onClick'),
                        }),
                    ),
                    Ru = Lu[0],
                    Mu = Lu[1];
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Iu = (0, lu.Pi)(({ className: e }) => {
                        const u = Mu(),
                            t = u.model,
                            a = u.controls,
                            r = t.root.get().isEnabled;
                        return n().createElement(
                            'div',
                            { id: 'dashboard-dogtag-block', className: A()(fu, e) },
                            r
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement(
                                          vu,
                                          Ou(
                                              {
                                                  id: 'animated-dogtag-card',
                                                  className: wu,
                                                  title: R.strings.account_dashboard.animatedDogTag.heading(),
                                              },
                                              t.animatedDogTag.get(),
                                              { onClick: a.openAnimatedDogTag },
                                          ),
                                      ),
                                      n().createElement(
                                          vu,
                                          Ou(
                                              {
                                                  className: wu,
                                                  title: R.strings.account_dashboard.personalDogTag.heading(),
                                              },
                                              t.customizableDogTag.get(),
                                              { onClick: a.openCustomizableDogTag },
                                          ),
                                      ),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: yu },
                                      n().createElement('div', { className: xu }),
                                      R.strings.account_dashboard.dogTags.unavailable(),
                                  ),
                        );
                    }),
                    Hu = (e) =>
                        n().createElement(Ru, { options: { context: 'model.dogTags' } }, n().createElement(Iu, e)),
                    Wu = 'ExcludedMapsBlock_base_6b',
                    $u = 'ExcludedMapsBlock_base__disabled_68',
                    ju = 'ExcludedMapsBlock_header_d4',
                    Xu = 'ExcludedMapsBlock_base_background_03',
                    Gu = 'ExcludedMapsBlock_disabledPattern_09',
                    Uu = 'ExcludedMapsBlock_lock_e8',
                    zu = 'ExcludedMapsBlock_hover_b0',
                    qu = 'ExcludedMapsBlock_disabledContent_b4',
                    Vu = 'ExcludedMapsBlock_unavailableText_d6',
                    Ku = 'ExcludedMapsBlock_slotContainer_b6';
                let Yu, Qu;
                (!(function (e) {
                    ((e.empty = 'empty'), (e.selected = 'selected'), (e.disabled = 'disabled'));
                })(Yu || (Yu = {})),
                    (function (e) {
                        ((e.none = 'none'), (e.premium = 'premium'), (e.wotplus = 'wotplus'));
                    })(Qu || (Qu = {})));
                const Zu = [
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
                function Ju(e) {
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
                const et = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: X.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ut = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Zu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => B || Z().resId, [B]),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (et(t, _, { isMouseEvent: !0, on: !0, arguments: Ju(n) }, b),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, b, g]),
                            f = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        et(t, _, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, b, C]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && f(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && f(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    tt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const nt = R.views.common.tooltip_window.simple_tooltip_content,
                    rt = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, tt);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return n().createElement(
                            ut,
                            at(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? nt.SimpleTooltipHtmlContent('resId') : nt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    ot = 'SlotItem_base_5b',
                    st = 'SlotItem_base__reducedSize_7c',
                    it = 'SlotItem_mapImage_6b',
                    lt = 'SlotItem_base__select_15',
                    ct = 'SlotItem_base__disabled_88',
                    dt = 'SlotItem_base__replace_c5',
                    Et = 'SlotItem_base__wotPlus_7e',
                    mt = 'SlotItem_mapTitle_a4',
                    _t = 'SlotItem_base__premium_85',
                    At = 'SlotItem_base__cooldown_6a',
                    Ft = 'SlotItem_removeButton_25',
                    Dt = 'SlotItem_removeButton_icon_7e',
                    Bt = 'SlotItem_lock_fd',
                    gt = 'SlotItem_timerContainer_91',
                    Ct = 'SlotItem_timerIcon_7c',
                    pt = 'SlotItem_timerText_11',
                    ht = R.strings.excluded_maps.notSelected(),
                    bt = ({
                        isEnabled: e = !0,
                        isMapNameDisplayed: u,
                        tooltipStrings: t,
                        isReducedSize: a,
                        slotType: r,
                    }) => {
                        const o = r === Qu.wotplus,
                            s = r === Qu.premium,
                            i = o || s;
                        return e
                            ? n().createElement(
                                  rt,
                                  {
                                      header: (null == t ? void 0 : t.disabledTooltipHeader) || Ht.selectTooltipHeader,
                                      body: (null == t ? void 0 : t.selectTooltipBody) || Ht.selectTooltipBody,
                                  },
                                  n().createElement(
                                      'div',
                                      { className: A()(ot, lt, a && st), 'data-testid': 'slot' },
                                      u && n().createElement('div', { className: mt }, ht),
                                  ),
                              )
                            : n().createElement(
                                  rt,
                                  {
                                      header:
                                          (null == t ? void 0 : t.disabledTooltipHeader) || Ht.disabledTooltipHeader,
                                      body: o
                                          ? (null == t ? void 0 : t.disabledTooltipBodyWotplus) ||
                                            Ht.disabledTooltipBodyWotplus
                                          : (null == t ? void 0 : t.disabledTooltipBodyPremium) ||
                                            Ht.disabledTooltipBodyPremium,
                                  },
                                  n().createElement(
                                      'div',
                                      { className: A()(ot, ct, o && Et, s && _t, a && st), 'data-testid': 'slot' },
                                      i && n().createElement('div', { className: Bt }),
                                      u &&
                                          o &&
                                          n().createElement(
                                              'div',
                                              { className: mt },
                                              R.strings.excluded_maps.wotplus(),
                                          ),
                                      u &&
                                          s &&
                                          n().createElement(
                                              'div',
                                              { className: mt },
                                              R.strings.excluded_maps.premium(),
                                          ),
                                  ),
                              );
                    };
                let vt;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(vt || (vt = {}));
                const ft = {
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
                let wt, yt;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(wt || (wt = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(yt || (yt = {})));
                const xt = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: r,
                        onMouseEnter: o,
                        onMouseMove: s,
                        onMouseDown: i,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: d,
                        isFocused: E = !1,
                        type: m = wt.primary,
                        soundHover: _ = 'highlight',
                        soundClick: F = 'play',
                    }) => {
                        const D = (0, a.useRef)(null),
                            B = (0, a.useState)(E),
                            g = B[0],
                            C = B[1],
                            p = (0, a.useState)(!1),
                            h = p[0],
                            b = p[1];
                        return (
                            (0, a.useEffect)(() => {
                                function e(e) {
                                    g && null !== D.current && !D.current.contains(e.target) && C(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [g]),
                            (0, a.useEffect)(() => {
                                C(E);
                            }, [E]),
                            n().createElement(
                                'div',
                                {
                                    ref: D,
                                    className: A()(
                                        ft.base,
                                        ft[`base__${m}`],
                                        t && ft.base__disabled,
                                        u && ft[`base__${u}`],
                                        g && ft.base__focus,
                                        h && ft.base__highlightActive,
                                        r,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== _ && be(_), o && o(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (l && l(e), b(!1));
                                    },
                                    onMouseDown: function (e) {
                                        if (t) return;
                                        const u = e.button === vt.LEFT;
                                        (null !== F && u && be(F),
                                            i && i(e),
                                            E && (t || (D.current && (D.current.focus(), C(!0)))),
                                            u && b(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (c && c(e), b(!1));
                                    },
                                    onClick: function (e) {
                                        t || (d && d(e));
                                    },
                                },
                                m !== wt.ghost &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: ft.back }),
                                        n().createElement('span', { className: ft.texture }),
                                    ),
                                n().createElement(
                                    'span',
                                    { className: A()(ft.state, ft.state__default) },
                                    n().createElement('span', { className: ft.stateDisabled }),
                                    n().createElement('span', { className: ft.stateHighlightHover }),
                                    n().createElement('span', { className: ft.stateHighlightActive }),
                                ),
                                n().createElement(
                                    'span',
                                    { className: ft.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    kt = (e) =>
                        e.days > 0
                            ? L(R.strings.common.duration.days(), { days: e.days })
                            : e.hours > 0
                              ? L(R.strings.common.duration.hours(), { hours: e.hours })
                              : e.minutes > 0
                                ? L(R.strings.common.duration.minutes(), { minutes: e.minutes })
                                : L(R.strings.common.duration.seconds(), { seconds: e.seconds }),
                    Tt =
                        ((0, a.memo)(({ duration: e }) => {
                            const u = e >= 0 ? kt(K(e)) : R.strings.common.duration.unlimited();
                            return n().createElement('span', null, u);
                        }),
                        (e) => {
                            const u = R.images.gui.maps.icons.map;
                            return u[`c_${e.mapId}`] ? u[`c_${e.mapId}`]() : '';
                        }),
                    Pt = (e) => {
                        const u = Object.assign({}, e);
                        return (
                            u.hours > 0 && u.minutes > 0 && u.hours++,
                            u.seconds > 0 && u.minutes++,
                            u.seconds < 0 && u.seconds,
                            kt(u)
                        );
                    },
                    Nt = (e) =>
                        e.hours > 0 && e.minutes > 0
                            ? `${L(R.strings.common.duration.hours(), { hours: e.hours })} ${L(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : Pt(e),
                    St = ({
                        map: e,
                        isMapNameDisplayed: u,
                        onRemoveButtonClick: t,
                        tooltipStrings: a,
                        isReducedSize: r,
                    }) => {
                        const o = Math.floor(e.cooldownEndTimeInSecs - Date.now() / U),
                            s = o <= 0 && '' !== e.mapId,
                            i = o > 0,
                            l = A()(ot, s && dt, i && At, r && st),
                            c = ((e) => {
                                const u = R.strings.arenas;
                                return u[`c_${e.mapId}`] && u[`c_${e.mapId}`].name() ? u[`c_${e.mapId}`].name() : '';
                            })(e);
                        if (i) {
                            const t = K(o),
                                a = Pt(t),
                                r = L(Ht.cooldownTooltipBody, { cooldownStr: Nt(t) });
                            return n().createElement(
                                rt,
                                { header: Ht.cooldownTooltipHeader, body: r },
                                n().createElement(
                                    'div',
                                    { className: l, 'data-testid': 'slot' },
                                    n().createElement('img', { src: Tt(e), className: it }),
                                    n().createElement(
                                        'div',
                                        { className: gt, 'data-testid': 'timer' },
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.account_dashboard.excluded_maps.icon_cooldown_slot(),
                                            className: Ct,
                                        }),
                                        n().createElement('div', { className: pt }, a),
                                    ),
                                    u && n().createElement('div', { className: mt }, c),
                                ),
                            );
                        }
                        return n().createElement(
                            rt,
                            {
                                header: (null == a ? void 0 : a.replaceTooltipHeader) || Ht.replaceTooltipHeader,
                                body: (null == a ? void 0 : a.replaceTooltipBody) || Ht.replaceTooltipBody,
                            },
                            n().createElement(
                                'div',
                                { className: l, 'data-testid': 'slot' },
                                t &&
                                    n().createElement(
                                        xt,
                                        { type: 'ghost', mixClass: Ft, onClick: () => t(e.mapId) },
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.library.cross(),
                                            className: Dt,
                                        }),
                                    ),
                                n().createElement('img', { src: Tt(e), className: it }),
                                u && n().createElement('div', { className: mt }, c),
                            ),
                        );
                    },
                    Lt = ['map'];
                const Rt = (e) => {
                        let u = e.map,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Lt);
                        const a = Math.floor(u.cooldownEndTimeInSecs - Date.now() / U);
                        return (Q(a), n().createElement(St, Object.assign({ map: u }, t)));
                    },
                    Mt = ({
                        slotState: e,
                        cooldownEndTimeInSecs: u,
                        mapId: t,
                        slotType: a,
                        isMapNameDisplayed: r,
                        onRemoveButtonClick: o,
                        tooltipStrings: s,
                        MapSlotComponent: i = Rt,
                        isReducedSize: l,
                    }) => {
                        if (e === Yu.selected)
                            return n().createElement(i, {
                                map: { slotState: e, cooldownEndTimeInSecs: u, mapId: t, slotType: a },
                                isMapNameDisplayed: r,
                                onRemoveButtonClick: o,
                                tooltipStrings: s,
                                isReducedSize: l,
                            });
                        const c = e !== Yu.disabled;
                        return n().createElement(bt, {
                            isEnabled: c,
                            isMapNameDisplayed: r,
                            tooltipStrings: s,
                            isReducedSize: l,
                            slotType: a,
                        });
                    },
                    Ot = de(
                        ({ className: e, path: u, excludedMaps: t }) => {
                            const a = t.length > 3;
                            return n().createElement(
                                'div',
                                { className: e },
                                t.map(
                                    ({ value: { cooldownEndTimeInSecs: e, mapId: t, slotState: r, slotType: o } }, s) =>
                                        n().createElement(Mt, {
                                            cooldownEndTimeInSecs: e,
                                            mapId: t,
                                            slotState: r,
                                            key: `${u}.${s}.id`,
                                            isReducedSize: a,
                                            slotType: o,
                                        }),
                                ),
                            );
                        },
                        null,
                        (e, u) => Object.assign({}, u, { excludedMaps: e }),
                    );
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Ht = {
                        get header() {
                            return R.strings.account_dashboard.excludedMaps.header();
                        },
                        get disabledTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipHeader();
                        },
                        get disabledTooltipBodyWotplus() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBodyWotplus();
                        },
                        get disabledTooltipBodyPremium() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBodyPremium();
                        },
                        get selectTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipHeader();
                        },
                        get selectTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipBody();
                        },
                        get cooldownTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipHeader();
                        },
                        get cooldownTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipBody();
                        },
                        get replaceTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipHeader();
                        },
                        get replaceTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipBody();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    Wt = de(
                        ({ className: e, isEnabled: u, onClick: t }) => {
                            const r = (0, a.useCallback)(() => {
                                    (t(), be('play'));
                                }, [t]),
                                o = (0, a.useCallback)(() => {
                                    be('highlight');
                                }, []);
                            return u
                                ? n().createElement(
                                      'div',
                                      { className: A()(Wu, e), onClick: r, onMouseEnter: o },
                                      n().createElement('div', { className: Xu }),
                                      n().createElement('div', { className: zu }),
                                      n().createElement('div', { className: ju }, Ht.header),
                                      n().createElement(Ot, { path: 'model.excludedMaps.excludedMaps', className: Ku }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: A()(Wu, $u) },
                                      n().createElement('div', { className: Xu }),
                                      n().createElement('div', { className: Gu }),
                                      n().createElement(
                                          'div',
                                          { className: qu },
                                          n().createElement('img', {
                                              src: R.images.gui.maps.icons.account_dashboard.premium_missions.lock(),
                                              alt: '',
                                              className: Uu,
                                          }),
                                          n().createElement('div', { className: ju }, Ht.header),
                                          n().createElement('div', { className: Vu }, Ht.temporarilyUnavailable),
                                      ),
                                  );
                        },
                        'model.excludedMaps',
                        (e, u) => {
                            let t = It({}, e);
                            return Object.assign({}, t, u, {
                                excludedMaps: t.excludedMaps ? t.excludedMaps.map((e) => e.value) : [],
                            });
                        },
                    ),
                    $t = 'TextOverflow_base_3b',
                    jt = ['content', 'classMix', 'className'];
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const Gt = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            r = e.className,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, jt);
                        const s = (0, a.useRef)(null),
                            i = (0, a.useState)(!0),
                            l = i[0],
                            c = i[1];
                        return (
                            (0, a.useEffect)(() =>
                                Ee(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            n().createElement(
                                rt,
                                { isEnabled: l, body: u },
                                n().createElement('div', Xt({}, o, { ref: s, className: A()($t, r, t) }), u),
                            )
                        );
                    },
                    Ut = 'Header_base_5a',
                    zt = 'Header_accountTitleBlock_dc',
                    qt = 'Header_base__withSubtitle_20',
                    Vt = 'Header_accountName_41',
                    Kt = 'Header_suffixBadge_c8',
                    Yt = 'Header_header_da',
                    Qt = 'Header_badge_86',
                    Zt = 'Header_badge_overlay_6c',
                    Jt = 'Header_hover_a2',
                    ea = 'Header_suffixBadgeShadow_4d',
                    ua = 'Header_plusIcon_69',
                    ta = 'Header_accountName__teamKiller_8c',
                    aa = 'Header_accountName__overflow_dc',
                    na = 'Header_subtitle_3f',
                    ra = 'Header_alertIcon_c6',
                    oa = 'Header_clanSubtitle_c0',
                    sa = 'PendingInfoBlock_button_9e',
                    ia = ({ emailButtonLabel: e, onClick: u }) =>
                        n().createElement(xt, { type: 'main', mixClass: sa, size: 'small', onClick: u }, e),
                    la = R.images.gui.maps.icons;
                function ca(e) {
                    return `url(${e})`;
                }
                function da(e, u, t) {
                    const a = e.$dyn(u);
                    return 'string' == typeof a ? ca(a) : t(e);
                }
                const Ea = () => {},
                    ma = (e) => ca(e.badge_empty()),
                    _a = (e) => da(la.library.badges.c_80x80, `badge_${e}`, ma),
                    Aa = (e) => da(la.library.badges.c_80x80, `badge_${e}`, Ea),
                    Fa = (e) => da(la.library.badges.c_48x48, `badge_${e}`, Ea),
                    Da = (e) => da(la.library.badges.strips.c_100x40, `strip_${e}`, Ea),
                    Ba = (e) => da(la.library.badges.strips.c_68x28, `strip_${e}`, Ea);
                const ga = R.strings.account_dashboard.header.clanSubtitle(),
                    Ca = R.strings.account_dashboard.header.badgeTooltip(),
                    pa = de(
                        ({
                            badgeID: e,
                            userName: u,
                            isInClan: t,
                            className: r,
                            suffixBadgeID: o,
                            roleInClan: s,
                            clanAbbrev: i,
                            isTeamKiller: l,
                            isEmailPending: c,
                            emailButtonLabel: d,
                            onShowBadges: E,
                            onAccountInfoButtonClick: m,
                        }) => {
                            const _ = t || c,
                                F = A()(Vt, l && ta, c && aa),
                                D = ((B = m), () => B());
                            var B;
                            const g = (0, a.useCallback)(() => {
                                    (E(), be('play'));
                                }, [E]),
                                C = (0, a.useCallback)(() => {
                                    be('highlight');
                                }, []),
                                p = n().createElement(
                                    ut,
                                    {
                                        contentId: R.views.lobby.tooltips.clans.ClanShortInfoTooltipContent('resId'),
                                        decoratorId:
                                            R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    },
                                    n().createElement('span', null, i),
                                );
                            return n().createElement(
                                'div',
                                {
                                    className: A()(Ut, _ && qt, r),
                                    style:
                                        ((h = e),
                                        (b = o),
                                        {
                                            '--badge-image-large': _a(h),
                                            '--badge-image-small': _a(h),
                                            '--suffix-image-large': Aa(b),
                                            '--suffix-image-small': Fa(b),
                                            '--shadow-image-large': Da(b),
                                            '--shadow-image-small': Ba(b),
                                        }),
                                },
                                n().createElement(
                                    rt,
                                    { body: Ca },
                                    n().createElement(
                                        'div',
                                        { className: Qt, onClick: g, onMouseEnter: C, id: 'dashboard-header-badge' },
                                        n().createElement('div', { className: Zt }),
                                        n().createElement('div', { className: Jt }),
                                        0 === e.length && n().createElement('div', { className: ua }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: zt },
                                    c
                                        ? n().createElement(
                                              ut,
                                              {
                                                  contentId:
                                                      R.views.lobby.account_completion.tooltips.HangarTooltip('resId'),
                                              },
                                              n().createElement(
                                                  'div',
                                                  { className: Yt },
                                                  n().createElement('div', { className: F }, u),
                                                  c && n().createElement('div', { className: ra }),
                                                  o.length > 0 &&
                                                      n().createElement(
                                                          'div',
                                                          { className: Kt },
                                                          n().createElement('div', { className: ea }),
                                                      ),
                                              ),
                                          )
                                        : n().createElement(
                                              'div',
                                              { className: Yt },
                                              n().createElement(Gt, { content: u, classMix: F }),
                                              c && n().createElement('div', { className: ra }),
                                              o.length > 0 &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Kt },
                                                      n().createElement('div', { className: ea }),
                                                  ),
                                          ),
                                    n().createElement(
                                        'div',
                                        { className: na },
                                        c && n().createElement(ia, { emailButtonLabel: d, onClick: D }),
                                        t &&
                                            n().createElement(he, {
                                                classMix: oa,
                                                binding: {
                                                    position: R.strings.menu.profile.header.clan.position.$dyn(s),
                                                    clanTag: p,
                                                },
                                                text: ga,
                                            }),
                                    ),
                                ),
                            );
                            var h, b;
                        },
                        'model.header',
                        (e, u) => Object.assign({}, u, e),
                    ),
                    ha = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    ba = {
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
                function va() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
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
                var fa;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(fa || (fa = {}));
                const wa = ['__left', '__right', '__top', '__bottom'],
                    ya =
                        ((0, a.forwardRef)(
                            (
                                {
                                    children: e,
                                    disableAutoSizeUpdate: u,
                                    onOutsideClick: t,
                                    className: r,
                                    customStyles: s = {},
                                },
                                i,
                            ) => {
                                const l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    d = (0, a.useRef)(null),
                                    E = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    m = E[0],
                                    _ = E[1],
                                    F = (0, a.useCallback)(() => {
                                        (ve.playClick(), o.O.view.sendEvent.close());
                                    }, []),
                                    D = (0, a.useCallback)(() => {
                                        ve.playHighlight();
                                    }, []),
                                    B = A()(ba.arrow, ba[`arrow${wa[m]}`]);
                                ha(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const g = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === l.current || u === d.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const a = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = o.O.client.getMouseGlobalPosition(),
                                                    u = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < a.boundX ||
                                                        e.x > a.boundX + a.boundWidth ||
                                                        e.y > a.boundY + a.boundHeight ||
                                                        e.y < a.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : o.O.view.sendEvent.close('popover');
                                        },
                                        [l, d, t],
                                    ),
                                    C = (0, a.useCallback)(() => {
                                        _(window.decorator.directionType);
                                    }, []),
                                    p = va(),
                                    h = (0, a.useCallback)(() => {
                                        const e = c.current;
                                        if (e)
                                            return (
                                                o.O.view.freezeTextureBeforeResize(),
                                                p.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    (o.O.view.resize(u, t), C());
                                                })
                                            );
                                    }, [p, C]);
                                return (
                                    (0, a.useImperativeHandle)(
                                        i,
                                        () => ({ updateSize: h, updateDirection: C, elementRef: c }),
                                        [h, C],
                                    ),
                                    ha(() => {
                                        o.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', g, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, a) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && a(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, X.Eu)());
                                        return (
                                            !u && e.promise.then(() => h()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', g));
                                            }
                                        );
                                    }, [h, g, u]),
                                    n().createElement(
                                        'div',
                                        { className: A()(ba.base, r), ref: c },
                                        n().createElement(
                                            'div',
                                            { className: ba.decorator },
                                            n().createElement(
                                                'div',
                                                { className: ba.content, ref: l },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        rt,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: ba.closeBtn,
                                                            onClick: F,
                                                            onMouseEnter: D,
                                                            ref: d,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: B, style: s.arrow }),
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
                function xa() {
                    return (
                        (xa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        xa.apply(this, arguments)
                    );
                }
                const ka = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            o = void 0 === r ? fa.Top : r,
                            s = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ya);
                        const _ = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                if ((0, X.wU)()) return (0, X.SW)();
                                _.current && (0, X.P3)(u, o, _.current, t, s, i);
                            }, [u, o, i, t, s]);
                        return n().createElement(
                            'div',
                            xa(
                                {
                                    ref: _,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    Ta = {
                        base: 'ParentalControlBlock_base_0c',
                        text: 'ParentalControlBlock_text_82',
                        heading: 'ParentalControlBlock_heading_f6',
                        icon: 'ParentalControlBlock_icon_9c',
                        description: 'ParentalControlBlock_description_38',
                        infoIcon: 'ParentalControlBlock_infoIcon_79',
                        glow: 'ParentalControlBlock_glow_d5',
                    },
                    Pa = de(
                        ({ className: e, popoverContentId: u }) =>
                            n().createElement(
                                'div',
                                { className: A()(Ta.base, e) },
                                n().createElement('img', {
                                    className: Ta.icon,
                                    src: R.images.gui.maps.icons.account_dashboard.parental_control.parental_icon(),
                                }),
                                n().createElement(
                                    'div',
                                    { className: Ta.text },
                                    n().createElement(
                                        'h2',
                                        { className: Ta.heading },
                                        R.strings.account_dashboard.parentalControl.important(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ta.description },
                                        n().createElement(
                                            'div',
                                            { className: Ta.description_text },
                                            R.strings.account_dashboard.parentalControl.limitEnabled(),
                                        ),
                                        n().createElement(
                                            ka,
                                            {
                                                contentId: u,
                                                decoratorId:
                                                    R.views.common.pop_over_window.pop_over_window.PopOverWindow(
                                                        'resId',
                                                    ),
                                            },
                                            n().createElement('img', {
                                                src: R.images.gui.maps.icons.library.info(),
                                                className: Ta.infoIcon,
                                            }),
                                        ),
                                    ),
                                ),
                                n().createElement('div', { className: Ta.glow }),
                            ),
                        'model.parentalControl',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Na = 'PlayerSubscriptionsBlock_base_47',
                    Sa = 'PlayerSubscriptionsBlock_base__disabled_aa',
                    La = 'PlayerSubscriptionsBlock_title_3b',
                    Ra = 'PlayerSubscriptionsBlock_base_background_0b',
                    Ma = 'PlayerSubscriptionsBlock_subtitle_5f',
                    Oa = 'PlayerSubscriptionsBlock_hover_7a',
                    Ia = 'PlayerSubscriptionsBlock_disabledPattern_92',
                    Ha = de(
                        ({ className: e, isEnabled: u, onClick: t }) => {
                            const r = (0, a.useCallback)(() => {
                                    u && (t(), be('play'));
                                }, [t, u]),
                                o = (0, a.useCallback)(() => {
                                    u && be('highlight');
                                }, [u]);
                            return n().createElement(
                                'div',
                                { className: A()(Na, !u && Sa, e), onClick: r, onMouseEnter: o },
                                n().createElement('div', { className: Ra }),
                                n().createElement('div', { className: Oa }),
                                !u && n().createElement('div', { className: Ia }),
                                n().createElement(
                                    'div',
                                    { className: La },
                                    R.strings.player_subscriptions.dashboard.title(),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ma },
                                    u
                                        ? R.strings.player_subscriptions.dashboard.activate()
                                        : R.strings.player_subscriptions.dashboard.unavailable(),
                                ),
                            );
                        },
                        'model.subscriptions',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Wa = {
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
                let $a, ja, Xa;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })($a || ($a = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(ja || (ja = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(Xa || (Xa = {})));
                const Ga = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: a,
                            value: r,
                            discountValue: o,
                            showPlus: s,
                            isEnough: i = !0,
                            stockBackgroundName: l = Xa.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            n().createElement(
                                'span',
                                { className: A()(Wa.base, Wa[`base__${t}`], c) },
                                n().createElement(
                                    'span',
                                    {
                                        className: A()(
                                            Wa.value,
                                            Wa[`value__${a}`],
                                            !i && Wa.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    s && r > 0 && '+',
                                    n().createElement(au, { value: r, format: a === ja.gold ? 'gold' : 'integral' }),
                                ),
                                n().createElement('span', {
                                    className: A()(Wa.icon, Wa[`icon__${a}-${t}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    n().createElement(
                                        'span',
                                        {
                                            className: A()(
                                                Wa.stock,
                                                o && Wa.stock__indent,
                                                u && Wa.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        n().createElement('span', {
                                            className: Wa.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    Ua = {
                        base: 'PremiumAccountBlock_base_2e',
                        base__wotPremiumActive: 'PremiumAccountBlock_base__wotPremiumActive_89',
                        base__onlyWgPremiumActive: 'PremiumAccountBlock_base__onlyWgPremiumActive_0d',
                        hover: 'PremiumAccountBlock_hover_95',
                        base__disabled: 'PremiumAccountBlock_base__disabled_69',
                        emblem: 'PremiumAccountBlock_emblem_89',
                        emblem_symbol: 'PremiumAccountBlock_emblem_symbol_5c',
                        header: 'PremiumAccountBlock_header_fd',
                        wotPremiumTimeLeft: 'PremiumAccountBlock_wotPremiumTimeLeft_7c',
                        wgPremiumTimeLeft: 'PremiumAccountBlock_wgPremiumTimeLeft_f1',
                        wotPremiumBenefits: 'PremiumAccountBlock_wotPremiumBenefits_be',
                        upgradeExperience: 'PremiumAccountBlock_upgradeExperience_b0',
                        upgradeCreditReserve: 'PremiumAccountBlock_upgradeCreditReserve_4f',
                        upgradePremiumMissions: 'PremiumAccountBlock_upgradePremiumMissions_96',
                        upgradeExcludeMapSlot: 'PremiumAccountBlock_upgradeExcludeMapSlot_23',
                        upgradePlatoonBonusCredits: 'PremiumAccountBlock_upgradePlatoonBonusCredits_70',
                        mainBenefits: 'PremiumAccountBlock_mainBenefits_68',
                        xpBonus: 'PremiumAccountBlock_xpBonus_bb',
                        creditBonus: 'PremiumAccountBlock_creditBonus_28',
                        platoonBonus: 'PremiumAccountBlock_platoonBonus_63',
                        otherBenefits: 'PremiumAccountBlock_otherBenefits_6a',
                        table: 'PremiumAccountBlock_table_39',
                        standardAccount: 'PremiumAccountBlock_standardAccount_ab',
                        premiumAccount: 'PremiumAccountBlock_premiumAccount_85',
                    };
                function za() {
                    return (
                        (za =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        za.apply(this, arguments)
                    );
                }
                const qa = R.strings.account_dashboard.premiumAccount,
                    Va = (e) => {
                        const u = K(e),
                            t = ['days', 'hours'].find((e) => u[e] > 0);
                        return t ? L(R.strings.common.duration[t](), { [t]: u[t] + 1 }) : qa.minimumTimeLeft();
                    },
                    Ka = (e) =>
                        e
                            .split('\n')
                            .reduce(
                                (e, u, t) => (
                                    t > 0 && e.push(n().createElement('br', { key: `br-${t}` })),
                                    e.push(n().createElement('div', { className: Ua.header_line, key: t }, u)),
                                    e
                                ),
                                [],
                            ),
                    Ya = de(
                        ({
                            className: e,
                            wotPremiumSecondsLeft: u,
                            wgPremiumSecondsLeft: t,
                            xpBonus: r,
                            creditBonus: o,
                            platoonBonus: s,
                            standardAccountCredits: i,
                            standardAccountXp: l,
                            premiumAccountCredits: c,
                            premiumAccountXp: d,
                            onClick: E,
                        }) => {
                            const m = Q(u),
                                _ = Q(t),
                                F = u > 0,
                                D = t > 0,
                                B = !F && !D,
                                g = D && !F,
                                C = (0, a.useCallback)(() => {
                                    (E(), be('play'));
                                }, [E]),
                                p = (0, a.useCallback)(() => {
                                    be('highlight');
                                }, []);
                            return n().createElement(
                                'div',
                                {
                                    className: A()(
                                        Ua.base,
                                        e,
                                        F && Ua.base__wotPremiumActive,
                                        g && Ua.base__onlyWgPremiumActive,
                                    ),
                                    onClick: C,
                                    onMouseEnter: p,
                                },
                                n().createElement('div', { className: Ua.hover }),
                                F &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: Ua.emblem },
                                            n().createElement('div', { className: Ua.emblem_symbol }),
                                        ),
                                        n().createElement('h2', { className: Ua.header }, qa.WoTPremiumAccount()),
                                        n().createElement('div', { className: Ua.wotPremiumTimeLeft }, Va(m)),
                                        D &&
                                            n().createElement(
                                                'div',
                                                { className: Ua.wgPremiumTimeLeft, 'data-testid': 'wgPremiumTimeLeft' },
                                                qa.WGPremium(),
                                                ' ',
                                                Va(_),
                                            ),
                                    ),
                                g &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: Ua.header, 'data-testid': 'onlyWgHeader' },
                                            Ka(qa.upgrade.toWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ua.wotPremiumBenefits },
                                            n().createElement(
                                                'div',
                                                { className: Ua.upgradeExperience },
                                                qa.upgrade.experience(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Ua.upgradeCreditReserve },
                                                qa.upgrade.creditReserve(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Ua.upgradePremiumMissions },
                                                qa.upgrade.premiumMissions(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Ua.upgradeExcludeMapSlot },
                                                qa.upgrade.excludeMapSlot(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Ua.upgradePlatoonBonusCredits },
                                                qa.upgrade.platoonBonusCredits(),
                                            ),
                                        ),
                                    ),
                                B &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: Ua.header, 'data-testid': 'header' },
                                            Ka(qa.tryWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ua.mainBenefits },
                                            n().createElement('div', { className: Ua.xpBonus }, '+', r, '%'),
                                            n().createElement('div', { className: Ua.creditBonus }, '+', o, '%'),
                                            n().createElement('div', { className: Ua.platoonBonus }, '+', s, '%'),
                                        ),
                                        n().createElement('div', { className: Ua.otherBenefits }, qa.otherBenefits()),
                                    ),
                                !g &&
                                    n().createElement(
                                        'div',
                                        { className: Ua.table },
                                        n().createElement(
                                            'div',
                                            { className: Ua.standardAccount },
                                            n().createElement('p', null, qa.standardAccount()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Ga, { type: ja.credits, size: $a.small, value: i }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Ga, { type: ja.xp, size: $a.small, value: l }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ua.premiumAccount },
                                            n().createElement('p', null, qa.WoTPremium()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Ga, { type: ja.credits, size: $a.small, value: c }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Ga, { type: ja.xp, size: $a.small, value: d }),
                                            ),
                                        ),
                                    ),
                            );
                        },
                        'model.premiumAccount',
                        (e, u) => {
                            let t = za({}, e);
                            return Object.assign({}, t, u);
                        },
                    ),
                    Qa = 'PremiumQuestsBlock_base_1a',
                    Za = 'PremiumQuestsBlock_base__locked_e0',
                    Ja = 'PremiumQuestsBlock_base__disabled_07',
                    en = 'PremiumQuestsBlock_base_background_a4',
                    un = 'PremiumQuestsBlock_hover_ff',
                    tn = 'PremiumQuestsBlock_heading_e0',
                    an = 'PremiumQuestsBlock_quests_9f',
                    nn = 'PremiumQuestsBlock_quest1_63',
                    rn = 'PremiumQuestsBlock_quest2_27',
                    on = 'PremiumQuestsBlock_quest3_ce',
                    sn = 'PremiumQuestsBlock_line_b0',
                    ln = 'PremiumQuestsBlock_temporarilyUnavailable_ef',
                    cn = ['className'];
                const dn = {
                        get heading() {
                            return R.strings.account_dashboard.premiumQuests.heading();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    En = [
                        'PremiumQuestsBlock_quests__completed0_5d',
                        'PremiumQuestsBlock_quests__completed1_97',
                        'PremiumQuestsBlock_quests__completed2_0a',
                        'PremiumQuestsBlock_quests__completed3_fc',
                    ],
                    mn = de(
                        (e) => {
                            let u = e.className,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(e, cn);
                            const r = t.isEnabled,
                                o = t.completedMissionsCount,
                                s = t.onClick,
                                i = !r,
                                l = o > -1 && r,
                                c = o <= -1 && r,
                                d = (0, a.useCallback)(() => {
                                    r && (s(), be('play'));
                                }, [s, r]),
                                E = (0, a.useCallback)(() => {
                                    r && be('highlight');
                                }, [r]);
                            return n().createElement(
                                'div',
                                { className: A()(Qa, c && Za, i && Ja, u), onClick: d, onMouseEnter: E },
                                n().createElement('div', { className: en }),
                                n().createElement('div', { className: un }),
                                n().createElement('h2', { className: tn }, dn.heading),
                                l &&
                                    n().createElement(
                                        'div',
                                        { className: A()(an, En[o]), 'data-testid': 'quests' },
                                        n().createElement('div', { className: nn }),
                                        n().createElement('div', { className: sn }),
                                        n().createElement('div', { className: rn }),
                                        n().createElement('div', { className: sn }),
                                        n().createElement('div', { className: on }),
                                    ),
                                i && n().createElement('p', { className: ln }, dn.temporarilyUnavailable),
                            );
                        },
                        'model.premiumQuests',
                        (e, u) => Object.assign({}, e, u),
                    );
                let _n, An;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(_n || (_n = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(An || (An = {})));
                const Fn = 'Countdown_base_fe',
                    Dn = 'Countdown_icon_8b',
                    Bn = 'Countdown_description_8d',
                    gn = (e) => e.toString().padStart(2, '0'),
                    Cn = (e, u) => {
                        switch (u) {
                            case An.Description:
                                return ((e, u = !0) =>
                                    e.days > 7 && u
                                        ? L(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? L(R.strings.common.duration.days(), { days: e.days })
                                              : `${L(R.strings.common.duration.days(), { days: e.days })} ${L(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? L(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${L(R.strings.common.duration.hours(), { hours: e.hours })} ${L(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : L(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case An.Short:
                                return `${gn(e.minutes)}:${gn(e.seconds)}`;
                            case An.Long:
                                return `${gn(e.hours)}:${gn(e.minutes)}:${gn(e.seconds)}`;
                            case An.Extended:
                                return `${L(R.strings.common.duration.days(), { days: e.days })} | ${gn(e.hours)}:${gn(e.minutes)}:${gn(e.seconds)}`;
                        }
                    },
                    pn = R.images.gui.maps.icons.components.countdown,
                    hn = (e, u) => {
                        const t = 2 === u ? pn.big : pn;
                        switch (e) {
                            case _n.Timer:
                                return t.clock();
                            case _n.Countdown:
                                return t.hourglass();
                            case _n.Cooldown:
                                return t.lock();
                        }
                    },
                    bn = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = _n.Timer,
                            style: t = An.Description,
                            onTimeReached: r,
                            refreshRate: s,
                            className: i = '',
                            classNames: l = {},
                        }) => {
                            const c = null != s ? s : t !== An.Description ? 1 : void 0,
                                d = le(e, c),
                                E = (() => {
                                    const e = (0, a.useState)(o.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(o.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            r && r[d] && r[d]();
                            const m = Cn(K(d), t);
                            return n().createElement(
                                'div',
                                { className: A()(Fn, i) },
                                u !== _n.None &&
                                    n().createElement('div', {
                                        className: A()(Dn, l.icon),
                                        style: { backgroundImage: `url('${hn(u, E)}')` },
                                    }),
                                n().createElement('div', { className: A()(Bn, l.text) }, m),
                            );
                        },
                    ),
                    vn = 'ReserveStockBlock_base_68',
                    fn = 'ReserveStockBlock_base_background_ee',
                    wn = 'ReserveStockBlock_base__allLocked_35',
                    yn = 'ReserveStockBlock_hover_9c',
                    xn = 'ReserveStockBlock_title_15',
                    kn = 'ReserveStockBlock_text__locked_77',
                    Tn = 'ReserveStockBlock_text_93',
                    Pn = 'ReserveStockBlock_lock_6e',
                    Nn = 'ReserveStockBlock_lockGlow_70',
                    Sn = 'ReserveStockBlock_alertContainer_c9',
                    Ln = 'ReserveStockBlock_alertIcon_3f',
                    Rn = 'ReserveStockBlock_alertGlow_88',
                    Mn = 'ReserveStockBlock_cornerHighlight_74',
                    On = 'ReserveStockBlock_currencyContainer_ed',
                    In = 'ReserveStockBlock_countdownContainer_45',
                    Hn = 'ReserveStockBlock_checkmark_6f',
                    Wn = 'ReserveStockBlock_textContainer_24',
                    $n = 'ReserveStockBlock_divider_64',
                    jn = ({
                        className: e,
                        currentAmount: u,
                        isFeatureEnabled: t,
                        isLocked: a,
                        currencyType: r,
                        maxAmount: o,
                        title: s,
                    }) => {
                        const i = u >= o;
                        return n().createElement(
                            'div',
                            { className: A()(Tn, (a || !t) && kn, e) },
                            n().createElement('div', { className: xn }, s),
                            t &&
                                a &&
                                n().createElement(
                                    'div',
                                    { className: Pn },
                                    n().createElement('div', { className: Nn }),
                                ),
                            t
                                ? n().createElement(
                                      'div',
                                      { className: On, 'data-testid': 'footer' },
                                      i && n().createElement('div', { className: Hn }),
                                      n().createElement(Ga, { size: 'small', type: r, value: i ? o : u }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: Sn },
                                      n().createElement(
                                          'div',
                                          { className: Ln },
                                          n().createElement('div', { className: Rn }),
                                      ),
                                  ),
                        );
                    },
                    Xn = {
                        get creditBlockTitle() {
                            return R.strings.account_dashboard.reserveStock.creditBlockTitle();
                        },
                        get goldBlockTitle() {
                            return R.strings.account_dashboard.reserveStock.goldBlockTitle();
                        },
                    },
                    Gn = de(
                        ({
                            className: e,
                            creditCurrentAmount: u,
                            goldCurrentAmount: t,
                            goldMaxAmount: r,
                            creditMaxAmount: o,
                            openingTime: s,
                            openingSoonThreshold: i,
                            isPremiumActive: l,
                            isWotPlusActive: c,
                            isCreditReserveEnabled: d,
                            isGoldReserveEnabled: E,
                            onClick: m,
                        }) => {
                            const _ = s - Math.floor(Date.now() / 1e3),
                                F = _ > 0 ? _ : 0,
                                D = F <= i,
                                B = A()(vn, d && E && !l && !c && wn, e),
                                g = (0, a.useCallback)(() => {
                                    (m(), be('play'));
                                }, [m]),
                                C = (0, a.useCallback)(() => {
                                    be('highlight');
                                }, []);
                            return n().createElement(
                                'div',
                                { className: B, onClick: g, onMouseEnter: C, 'data-testid': 'block' },
                                n().createElement('div', { className: fn }),
                                n().createElement('div', { className: yn }),
                                n().createElement('div', { className: $n }),
                                n().createElement('div', { className: In }, n().createElement(bn, { duration: F })),
                                D && n().createElement('div', { className: Mn, 'data-testid': 'openingSoon' }),
                                n().createElement(
                                    'div',
                                    { className: Wn },
                                    n().createElement(jn, {
                                        currencyType: 'credits',
                                        currentAmount: u,
                                        maxAmount: o,
                                        isFeatureEnabled: d,
                                        isLocked: !l,
                                        title: Xn.creditBlockTitle,
                                    }),
                                    n().createElement(jn, {
                                        currencyType: 'gold',
                                        currentAmount: t,
                                        maxAmount: r,
                                        isFeatureEnabled: E,
                                        isLocked: !c,
                                        title: Xn.goldBlockTitle,
                                    }),
                                ),
                            );
                        },
                        'model.reserveStock',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Un = 'AccountDashboardApp_base_b3',
                    zn = 'AccountDashboardApp_header_0f',
                    qn = 'AccountDashboardApp_cards_eb',
                    Vn = 'AccountDashboardApp_mainBlock_0a',
                    Kn = 'AccountDashboardApp_footer_56',
                    Yn = 'AccountDashboardApp_block_19',
                    Qn = 'AccountDashboardApp_block__header_21',
                    Zn = 'AccountDashboardApp_block__playerSubscriptions_de',
                    Jn = 'AccountDashboardApp_block__premiumAccount_f0',
                    er = 'AccountDashboardApp_block__bonusXp_b3',
                    ur = 'AccountDashboardApp_block__reserveStock_c6',
                    tr = 'AccountDashboardApp_block__personalDogTag_03',
                    ar = 'AccountDashboardApp_block__premiumQuests_1a',
                    nr = 'AccountDashboardApp_block__bannedMaps_68',
                    rr = 'AccountDashboardApp_block__parentalControl_42',
                    or = ['onClose'];
                function sr() {
                    return (
                        (sr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        sr.apply(this, arguments)
                    );
                }
                const ir = de(
                    (e) => {
                        let u = e.onClose,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, or);
                        const r = t.isParentalControlEnabled,
                            o = t.isPlayerSubscriptionsEntrypointHidden;
                        var s;
                        ((s = () => u()), Ae(me.n.ESCAPE, s));
                        const i = De('DogTagsWidget', Fe),
                            l = De('NewBadgeHintBtn', Fe);
                        ((0, a.useEffect)(
                            () =>
                                Ee(() => {
                                    null !== i && i.completeEffect();
                                }),
                            [i],
                        ),
                            (0, a.useEffect)(
                                () =>
                                    Ee(() => {
                                        null !== l && l.completeEffect();
                                    }),
                                [l],
                            ));
                        const c = Ce('DogTagsWidget', ge);
                        (0, a.useEffect)(() => {
                            c && c.runTrigger(!0);
                        }, [c]);
                        const d = Ce('NewBadgeHintBtn', ge);
                        return (
                            (0, a.useEffect)(() => {
                                d && d.runTrigger(!0);
                            }, [d]),
                            n().createElement(
                                'div',
                                { className: Un },
                                n().createElement(
                                    'div',
                                    { className: Vn },
                                    n().createElement(
                                        'div',
                                        { className: zn },
                                        n().createElement(pa, { className: A()(Yn, Qn) }),
                                        !o && n().createElement(Ha, { className: A()(Yn, Zn) }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: qn },
                                        n().createElement(Ya, { className: A()(Yn, Jn) }),
                                        n().createElement(iu, { className: A()(Yn, er) }),
                                        n().createElement(Gn, { className: A()(Yn, ur) }),
                                        n().createElement(Hu, { className: A()(Yn, tr) }),
                                        n().createElement(mn, { className: A()(Yn, ar) }),
                                        n().createElement(Wt, { className: A()(Yn, nr) }),
                                    ),
                                ),
                                r &&
                                    n().createElement(
                                        'div',
                                        { className: Kn },
                                        n().createElement(Pa, { className: A()(Yn, rr) }),
                                    ),
                            )
                        );
                    },
                    'model',
                    (e, u) => {
                        let t = sr({}, e);
                        return Object.assign({}, t, u);
                    },
                );
                engine.whenReady
                    .then(() => {
                        P().render(
                            n().createElement(k, null, n().createElement(ir, null)),
                            document.getElementById('root'),
                        );
                    })
                    .then(() => viewEnv.setFullscreenModeSupported(!0));
            },
            363: (e) => {
                'use strict';
                e.exports = React;
            },
            533: (e) => {
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
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
            var e = { 430: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [507], () => __webpack_require__(712));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
