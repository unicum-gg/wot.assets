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
            236: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => le });
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => g, off: () => _, on: () => d, onResize: () => c, onScaleUpdated: () => u }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => v,
                        getSize: () => p,
                        graphicsQuality: () => f,
                        playSound: () => E,
                        setRTPC: () => h,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => O, getTextureUrl: () => S }));
                var o = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (n.r(o),
                    n.d(o, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => D,
                        arabic2roman: () => te,
                        children: () => i,
                        displayStatus: () => L.W,
                        displayStatusIs: () => re,
                        enableFullScreenModeSupported: () => oe,
                        events: () => P,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => H,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => ne,
                        getFontNames: () => ee,
                        getScale: () => j,
                        getSize: () => F,
                        getViewGlobalPosition: () => $,
                        initExternalPaddings: () => se,
                        isEventHandled: () => Q,
                        isFocused: () => X,
                        pxToRem: () => q,
                        remToPx: () => z,
                        resize: () => W,
                        sendEvent: () => A,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => ie,
                    }));
                const c = s('clientResized'),
                    u = s('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = m[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    w = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(b).reduce((e, t) => ((e[t] = () => E(b[t])), e), {}),
                    y = { play: Object.assign({}, T, { sound: E }), setRTPC: h };
                var R = n(690);
                function S(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function O(e, t, n) {
                    return `url(${S(e, t, n)})`;
                }
                var L = n(112);
                const P = {
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
                    x = ['args'];
                const M = 2,
                    k = 16,
                    C = 32,
                    N = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(t, x);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    A = {
                        close(e) {
                            I('popover' === e ? M : C);
                        },
                        minimize() {
                            I(N);
                        },
                        move(e) {
                            I(k, { isMouseEvent: !0, on: e });
                        },
                    };
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function H(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function $(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: z(t.x), y: z(t.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Q() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const ee = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    te = R.cg;
                function ne() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const re = Object.keys(L.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L.W[t]), e),
                        {},
                    ),
                    ae = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ie = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function oe() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function se(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const le = { view: o, client: a, sound: y, intl: w };
            },
            112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, n) => {
                'use strict';
                let r, a;
                (n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
            690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => s, cg: () => i });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = a.length - 1; n >= 0; n--) for (; e >= a[n]; ) ((t += r[n]), (e -= a[n]));
                    return t;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (o ? `${e}` : i(e));
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var r = n(236);
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
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, n, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            916: (e, t, n) => {
                'use strict';
                n.d(t, { B3: () => l, Z5: () => o.Z5, B0: () => s, ry: () => p });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                const a = r;
                var i = n(358);
                var o = n(613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(236);
                const g = ['args'];
                function E(e, t, n, r, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            E(i, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(i, r, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    f = () => v(s.CLOSE),
                    w = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = n(572);
                const T = a.instance,
                    y = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                _ = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(u) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: h(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: v,
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
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => a });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, n = 2) => systemLocale.getRealFormat(e, t, n),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            94: (e, t, n) => {
                'use strict';
                var r = n(363),
                    a = n.n(r);
                const i = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(236);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e = o.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign(
                        { width: t, height: n },
                        (function (e, t, n) {
                            const r = (function (e, t) {
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
                                })(e, n),
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
                                })(t, n),
                                i = Math.min(r, a);
                            return {
                                extraLarge: i === n.extraLarge.weight,
                                large: i === n.large.weight,
                                medium: i === n.medium.weight,
                                small: i === n.small.weight,
                                extraSmall: i === n.extraSmall.weight,
                                extraLargeWidth: r === n.extraLarge.weight,
                                largeWidth: r === n.large.weight,
                                mediumWidth: r === n.medium.weight,
                                smallWidth: r === n.small.weight,
                                extraSmallWidth: r === n.extraSmall.weight,
                                extraLargeHeight: a === n.extraLarge.weight,
                                largeHeight: a === n.large.weight,
                                mediumHeight: a === n.medium.weight,
                                smallHeight: a === n.small.weight,
                                extraSmallHeight: a === n.extraSmall.weight,
                            };
                        })(t, n, s),
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
                })(l || (l = {}));
                const u = c(),
                    d = (0, r.createContext)(u),
                    _ = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, _);
                    const a = (0, r.useContext)(d),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        c = a.small,
                        u = a.extraSmall,
                        m = a.extraLargeWidth,
                        g = a.largeWidth,
                        E = a.mediumWidth,
                        h = a.smallWidth,
                        p = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        f = a.largeHeight,
                        w = a.mediumHeight,
                        b = a.smallHeight,
                        T = a.extraSmallHeight,
                        y = { extraLarge: v, large: f, medium: w, small: b, extraSmall: T };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && s) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && u) return t;
                    } else {
                        if (n.extraLargeWidth && m) return i(t, n, y);
                        if (n.largeWidth && g) return i(t, n, y);
                        if (n.mediumWidth && E) return i(t, n, y);
                        if (n.smallWidth && h) return i(t, n, y);
                        if (n.extraSmallWidth && p) return i(t, n, y);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && v) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && w) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && T) return t;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const t = (0, r.useState)(c),
                        n = t[0],
                        i = t[1],
                        s = (0, r.useState)(!1),
                        l = s[0],
                        u = s[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                i((e) => {
                                    const t = o.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : c(t);
                                });
                            }
                            return (
                                e(),
                                u(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        a().createElement(d.Provider, { value: n }, l && e)
                    );
                };
                var g = n(483),
                    E = n.n(g),
                    h = n(926),
                    p = n.n(h);
                let v, f, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const b = () => {
                        const e = (0, r.useContext)(d),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    T = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    O = {
                        [w.ExtraSmall]: '',
                        [w.Small]: p().SMALL_HEIGHT,
                        [w.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [w.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL,
                        [v.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [v.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [v.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, T);
                        const i = b(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', y({ className: E()(n, S[o], O[s], L[l]) }, r), t);
                    },
                    x = ['children'];
                const M = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, x);
                    return a().createElement(m, null, a().createElement(P, n, t));
                };
                var k = n(533),
                    C = n.n(k);
                const N = 'App_base_35',
                    I = 'App_closeButton_43',
                    A = 'Body_base_20',
                    D = 'Body_header_c1',
                    B = 'Body_main_9b';
                let H;
                function U(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(H || (H = {}));
                const G = {
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
                let F, W;
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
                    })(W || (W = {})));
                const $ = ({
                    children: e,
                    size: t,
                    disabled: n,
                    mixClass: i,
                    onMouseEnter: o,
                    onMouseMove: s,
                    onMouseDown: l,
                    onMouseUp: c,
                    onMouseLeave: u,
                    onClick: d,
                    isFocused: _ = !1,
                    type: m = F.primary,
                    soundHover: g = 'highlight',
                    soundClick: h = 'play',
                }) => {
                    const p = (0, r.useRef)(null),
                        v = (0, r.useState)(_),
                        f = v[0],
                        w = v[1],
                        b = (0, r.useState)(!1),
                        T = b[0],
                        y = b[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                f && null !== p.current && !p.current.contains(e.target) && w(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, r.useEffect)(() => {
                            w(_);
                        }, [_]),
                        a().createElement(
                            'div',
                            {
                                ref: p,
                                className: E()(
                                    G.base,
                                    G[`base__${m}`],
                                    n && G.base__disabled,
                                    t && G[`base__${t}`],
                                    f && G.base__focus,
                                    T && G.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== g && U(g), o && o(e));
                                },
                                onMouseMove: function (e) {
                                    s && s(e);
                                },
                                onMouseUp: function (e) {
                                    n || (c && c(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    if (n) return;
                                    const t = e.button === H.LEFT;
                                    (null !== h && t && U(h),
                                        l && l(e),
                                        _ && (n || (p.current && (p.current.focus(), w(!0)))),
                                        t && y(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (u && u(e), y(!1));
                                },
                                onClick: function (e) {
                                    n || (d && d(e));
                                },
                            },
                            m !== F.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: G.back }),
                                    a().createElement('span', { className: G.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: E()(G.state, G.state__default) },
                                a().createElement('span', { className: G.stateDisabled }),
                                a().createElement('span', { className: G.stateHighlightHover }),
                                a().createElement('span', { className: G.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: G.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                var V = n(515),
                    j = n(946);
                function q() {}
                function z() {
                    return !1;
                }
                console.log;
                var Y = n(174);
                function X(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return K(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function K(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Q = (e) => (0 === e ? window : window.subViews.get(e));
                const Z = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const u = (0, r.useRef)([]),
                                    d = (n, r, a) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Q,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const l = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return (a.set(c, n), e && n(s(i)), c);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = X(a.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = c(e),
                                                            r = Y.LO.box(t, { equals: z });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Y.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = Y.LO.box(r, { equals: z });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Y.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = Y.LO.box(r, { equals: z });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Y.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = Y.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Y.aD)((t) => {
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
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = Y.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Y.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: n, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === n && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    m = (0, r.useState)(i),
                                    g = m[0],
                                    E = m[1],
                                    h = (0, r.useState)(() => d(i, s, c)),
                                    p = h[0],
                                    v = h[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? v(d(g, s, c)) : (_.current = !0);
                                    }, [c, g, s]),
                                    (0, r.useEffect)(() => {
                                        E(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    a().createElement(n.Provider, { value: p }, l)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                rewards: e.array('rewards'),
                                additionalRewards: e.array('additionalRewards'),
                                isFooterShown: Y.LO.box(!1),
                                isCButtonOpensPreview: Y.LO.box(!1),
                            };
                            return Object.assign({}, t, {
                                computes: {
                                    hasAdditionalRewards: (0, j.Om)(() => Boolean(t.additionalRewards.get().length)),
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            showFooter: (0, Y.aD)(() => {
                                t.isFooterShown.set(!0);
                            }),
                            changeCButtonToVehiclePreview: (0, Y.aD)(() => {
                                t.isCButtonOpensPreview.set(!0);
                            }),
                        }),
                    ),
                    J = Z[0],
                    ee = Z[1],
                    te = 'Footer_base_56',
                    ne = 'Footer_base__shown_f7',
                    re = 'Footer_button_ec',
                    ae = R.strings.clan_supply.rewardsView.button,
                    ie = (0, V.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            n = e.controls,
                            r = t.isFooterShown.get(),
                            i = t.isCButtonOpensPreview.get();
                        return a().createElement(
                            'div',
                            { className: E()(te, r && ne) },
                            a().createElement(
                                $,
                                {
                                    disabled: !r,
                                    mixClass: re,
                                    type: 'primary',
                                    soundClick: 'yes',
                                    onClick: () => {
                                        i ? n.goToHangar() : n.close();
                                    },
                                },
                                i ? ae.showInHangar() : ae.confirm(),
                            ),
                        );
                    }),
                    oe = 'Header_base_d2',
                    se = 'Header_subheading_6a',
                    le = 'Header_heading_98',
                    ce = R.strings.clan_supply.rewardsView,
                    ue = () =>
                        a().createElement(
                            'div',
                            { className: oe },
                            a().createElement('div', { className: se }, ce.subheading()),
                            a().createElement('div', { className: le }, ce.heading()),
                        );
                let de;
                !(function (e) {
                    ((e[(e.COMMON = 0)] = 'COMMON'),
                        (e[(e.ELITE = 1)] = 'ELITE'),
                        (e[(e.ELITE_WITH_VEHICLE = 2)] = 'ELITE_WITH_VEHICLE'));
                })(de || (de = {}));
                const _e = 'Main_base_5e',
                    me = 'Main_ribbonWrapper_dd',
                    ge = 'Main_ribbon_0a',
                    Ee = 'Main_base__includesVehicle_de',
                    he = 'Main_glow_6e',
                    pe = 'Main_radialLinesWrapper_55',
                    ve = 'Main_radialLinesFadeInWrapper_10',
                    fe = 'Main_radialLines_54',
                    we = 'Main_rewards_f4';
                let be, Te, ye, Re, Se, Oe, Le, Pe;
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
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.BattlePassTicket = 'lootBox_commonTicket'),
                        (e.BattlePassTaler = 'bptaler'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'),
                        (e.Attachment = 'attachment'));
                })(be || (be = {})),
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
                    })(Te || (Te = {})),
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
                    })(ye || (ye = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Re || (Re = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                    })(Se || (Se = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Oe || (Oe = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                    })(Le || (Le = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Pe || (Pe = {})));
                const xe = [be.Attachment];
                var Me = n(916);
                const ke = ({ value: e, format: t = 'integral' }) => {
                        const n = (function (e) {
                                return 'gold' === e ? Me.B3.GOLD : Me.B3.INTEGRAL;
                            })(t),
                            r = Me.Z5.getNumberFormat(e, n);
                        return void 0 !== e && void 0 !== r ? r : null;
                    },
                    Ce = [
                        be.Items,
                        be.Equipment,
                        be.Xp,
                        be.XpFactor,
                        be.Blueprints,
                        be.BlueprintsAny,
                        be.Goodies,
                        be.Berths,
                        be.Slots,
                        be.Tokens,
                        be.CrewSkins,
                        be.CrewBooks,
                        be.Customizations,
                        be.CreditsFactor,
                        be.TankmenXp,
                        be.TankmenXpFactor,
                        be.FreeXpFactor,
                        be.BattleToken,
                        be.LootBox,
                        be.PremiumUniversal,
                        be.NaturalCover,
                        be.BpCoin,
                        be.BattlePassSelectToken,
                        be.BattlaPassFinalAchievement,
                        be.BattleBadge,
                        be.BattlePassTicket,
                        be.BonusX5,
                        be.CrewBonusX3,
                        be.EpicSelectToken,
                        be.Comp7TokenWeeklyReward,
                        be.DeluxeGift,
                        be.ModernizedDevicesT1Gift,
                        be.ModernizedDevicesT2Gift,
                        be.ModernizedDevicesT3Gift,
                        be.BattleBoosterGift,
                        be.OptionalDevice,
                        be.Attachment,
                    ],
                    Ne = [be.Gold, be.Credits, be.Crystal, be.FreeXp],
                    Ie = [be.BattlePassPoints, be.EquipCoin],
                    Ae = [be.PremiumPlus, be.Premium],
                    De = (e) =>
                        Ce.includes(e)
                            ? Re.MULTI
                            : Ne.includes(e)
                              ? Re.CURRENCY
                              : Ie.includes(e)
                                ? Re.NUMBER
                                : Ae.includes(e)
                                  ? Re.PREMIUM_PLUS
                                  : Re.STRING,
                    Be = ['engravings', 'backgrounds'],
                    He = ['engraving', 'background'],
                    Ue = (e, t = ye.Small) => {
                        const n = e.name,
                            r = e.type,
                            a = e.value,
                            i = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case ye.S600x450:
                                        return 'c_600x450';
                                    case ye.S400x300:
                                        return 'c_400x300';
                                    case ye.S296x222:
                                        return 'c_296x222';
                                    case ye.S232x174:
                                        return 'c_232x174';
                                    case ye.Big:
                                        return 'c_80x80';
                                    case ye.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (n) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'dogTagComponents':
                                return ((e, t, n) => {
                                    const r = Be[e];
                                    if (r) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            i = a.$dyn(n);
                                        return i ? `${i}` : `${a.$dyn(He[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${i}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${i}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${i}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${i}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                        }
                    },
                    Ge = (e, t, n) => {
                        const r = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            r,
                            n,
                        );
                    },
                    Fe = [ye.Small, ye.Big],
                    We = [
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
                function $e(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const Ve = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Me.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    je = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            h = void 0 === E || E,
                            p = e.targetId,
                            v = void 0 === p ? 0 : p,
                            f = e.onShow,
                            w = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, We);
                        const T = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId'),
                                            a = '';
                                        var i;
                                        return (
                                            t &&
                                                ((a =
                                                    (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { callerUrl: a, caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [v],
                            ),
                            S = (0, r.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (Ve(n, g, { isMouseEvent: !0, on: !0, arguments: $e(a) }, y),
                                    f && f(),
                                    (T.current.isVisible = !0));
                            }, [n, g, a, y, f]),
                            O = (0, r.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        Ve(n, g, { on: !1 }, y),
                                        T.current.isVisible && w && w(),
                                        (T.current.isVisible = !1));
                                }
                            }, [n, g, y, w]),
                            L = (0, r.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && O();
                            }, [h, O]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        (window.removeEventListener('mouseleave', O), O());
                                    }
                                ),
                                [O],
                            ));
                        return h
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((P = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(T.current.timeoutId),
                                                      (T.current.timeoutId = window.setTimeout(S, u ? 100 : 400)),
                                                      i && i(e),
                                                      P && P(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (O(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && O(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && O(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var P;
                    },
                    qe = ['children'];
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const Ye = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, qe);
                        return a().createElement(
                            je,
                            ze(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                n,
                            ),
                            t,
                        );
                    },
                    Xe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                const Qe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ze = (e) => {
                        let t = e.children,
                            n = e.body,
                            i = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, Xe);
                        const u = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: i, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, i, o, l]);
                        return a().createElement(
                            je,
                            Ke(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? Qe.SimpleTooltipHtmlContent('resId') : Qe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const et = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const r = a().createElement('div', { className: n }, e);
                        if (t.header || t.body) return a().createElement(Ze, t, r);
                        const i = t.contentId;
                        return i ? a().createElement(je, Je({}, t, { contentId: i }), r) : a().createElement(Ye, t, r);
                    },
                    tt = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        base__normalize: 'Reward_base__normalize_a6',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    nt = ({
                        name: e,
                        image: t,
                        isPeriodic: n = !1,
                        size: r = ye.Big,
                        special: i,
                        value: o,
                        valueType: s,
                        title: l,
                        style: c,
                        className: u,
                        classNames: d,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !Fe.includes(e)) return null;
                                switch (t) {
                                    case Se.BATTLE_BOOSTER:
                                    case Se.BATTLE_BOOSTER_REPLACE:
                                        return Oe.BATTLE_BOOSTER;
                                }
                            })(r, i),
                            h = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Se.BATTLE_BOOSTER:
                                        return Le.BATTLE_BOOSTER;
                                    case Se.BATTLE_BOOSTER_REPLACE:
                                        return Le.BATTLE_BOOSTER_REPLACE;
                                    case Se.BUILT_IN_EQUIPMENT:
                                        return Le.BUILT_IN_EQUIPMENT;
                                    case Se.EQUIPMENT_PLUS:
                                        return Le.EQUIPMENT_PLUS;
                                    case Se.EQUIPMENT_TROPHY_BASIC:
                                        return Le.EQUIPMENT_TROPHY_BASIC;
                                    case Se.EQUIPMENT_TROPHY_UPGRADED:
                                        return Le.EQUIPMENT_TROPHY_UPGRADED;
                                    case Se.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Le.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Se.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Le.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Se.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Le.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Se.PROGRESSION_STYLE_UPGRADED_1:
                                        return Le.PROGRESSION_STYLE_UPGRADED_1;
                                    case Se.PROGRESSION_STYLE_UPGRADED_2:
                                        return Le.PROGRESSION_STYLE_UPGRADED_2;
                                    case Se.PROGRESSION_STYLE_UPGRADED_3:
                                        return Le.PROGRESSION_STYLE_UPGRADED_3;
                                    case Se.PROGRESSION_STYLE_UPGRADED_4:
                                        return Le.PROGRESSION_STYLE_UPGRADED_4;
                                    case Se.PROGRESSION_STYLE_UPGRADED_5:
                                        return Le.PROGRESSION_STYLE_UPGRADED_5;
                                    case Se.PROGRESSION_STYLE_UPGRADED_6:
                                        return Le.PROGRESSION_STYLE_UPGRADED_6;
                                    case Se.ATTACHMENT_RARE:
                                        return Le.ATTACHMENT_RARE;
                                    case Se.ATTACHMENT_EPIC:
                                        return Le.ATTACHMENT_EPIC;
                                    case Se.ATTACHMENT_LEGENDARY:
                                        return Le.ATTACHMENT_LEGENDARY;
                                }
                            })(i),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Re.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Re.CURRENCY:
                                    case Re.NUMBER:
                                        return a().createElement(ke, { format: 'integral', value: Number(e) });
                                    case Re.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, s);
                        return a().createElement(
                            'div',
                            {
                                className: E()(tt.base, tt[`base__${r}`], xe.includes(e) && tt.base__normalize, u),
                                style: c,
                            },
                            a().createElement(
                                et,
                                { tooltipArgs: _, className: tt.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: E()(tt.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: E()(tt.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: E()(tt.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        h &&
                                            a().createElement('div', {
                                                className: E()(tt.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${h}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: E()(
                                                    tt.info,
                                                    tt[`info__${e}`],
                                                    s === Re.MULTI && tt.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            p,
                                        ),
                                    l && a().createElement('div', { className: tt.title }, l),
                                ),
                            ),
                            n &&
                                a().createElement(
                                    et,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: E()(tt.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function rt(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
                }
                var at = n(30);
                const it = 'AnimatedReward_base_f5',
                    ot = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    st = 800,
                    lt = 400,
                    ct = 'equipCoin',
                    ut = ({ index: e = 0, delay: t = 0, onEnd: n, isCompensation: r, children: i }) => {
                        const o = (0, at.useSpring)({
                            from: { transform: 'translateY(20rem) scale(1.2)', opacity: 0 },
                            to: { transform: 'translateY(0rem) scale(1)', opacity: 1 },
                            delay: t + 200 * e,
                            config: { duration: lt, easing: ot },
                            onStart: () => {
                                (U('gui_random_reward_appear'), r && U('gui_reward_screen_compensation'));
                            },
                            onRest: n,
                        });
                        return a().createElement(at.animated.div, { className: it, style: o }, i);
                    },
                    dt = (e, t, n) => () => {
                        e === t.length - 1 && n();
                    },
                    _t = {
                        base: 'Rewards_base_a4',
                        labelWrapper: 'Rewards_labelWrapper_05',
                        label: 'Rewards_label_bb',
                        info: 'Rewards_info_60',
                        info__currency: 'Rewards_info__currency_fe',
                        info__compensation: 'Rewards_info__compensation_1b',
                        info__hidden: 'Rewards_info__hidden_13',
                        overlay: 'Rewards_overlay_90',
                        overlay__battleBooster: 'Rewards_overlay__battleBooster_57',
                    },
                    mt = 'CommonRewards_base_bd';
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const Et = (0, V.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            n = e.controls,
                            r = ((e) => {
                                switch (e) {
                                    case v.ExtraSmall:
                                    case v.Small:
                                        return ye.S232x174;
                                    case v.Medium:
                                        return ye.S296x222;
                                    case v.Large:
                                    case v.ExtraLarge:
                                        return ye.S400x300;
                                }
                            })(b().mediaSize);
                        return a().createElement(
                            'div',
                            { className: mt },
                            rt(t.rewards.get(), (e, t, i) => {
                                const o = e.tooltipId,
                                    s = Ge({ tooltipId: o }, Number(e.tooltipContentId)),
                                    l = De(e.name),
                                    c = l === Re.CURRENCY || e.name === ct;
                                return a().createElement(
                                    ut,
                                    { key: t, index: t, delay: st, onEnd: dt(t, i, n.showFooter) },
                                    a().createElement(
                                        nt,
                                        gt({}, e, {
                                            image: Ue(e, r),
                                            size: r,
                                            special: e.overlayType,
                                            valueType: l,
                                            tooltipArgs: s,
                                            classNames: {
                                                info: E()(_t.info, c && _t.info__currency),
                                                overlay: E()(_t.overlay, _t[`overlay__${e.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !c &&
                                        a().createElement(
                                            'div',
                                            { className: _t.labelWrapper },
                                            a().createElement('div', { className: _t.label }, e.label),
                                        ),
                                );
                            }),
                        );
                    }),
                    ht = 'StyleReward_base_16',
                    pt = 'StyleReward_image_4f',
                    vt = 'StyleReward_text_ed',
                    ft = R.strings.clan_supply.rewardsView.style,
                    wt = ({ id: e, size: t, tooltipArgs: n }) => {
                        const r = R.images.gui.maps.icons.clanSupply.rewardsView.rewards.$dyn(`c_${e}`);
                        return a().createElement(
                            et,
                            { tooltipArgs: n },
                            a().createElement(
                                'div',
                                { className: ht },
                                t &&
                                    a().createElement('div', {
                                        className: pt,
                                        style: { backgroundImage: `url(${r.$dyn(t)})` },
                                    }),
                                a().createElement('div', { className: vt }, ft.$dyn(`c_${e}`)),
                            ),
                        );
                    },
                    bt = 'EliteRewards_base_df';
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const yt = (0, V.Pi)(() => {
                    const e = ee(),
                        t = e.model,
                        n = e.controls,
                        r = ((e) => {
                            switch (e) {
                                case v.ExtraSmall:
                                case v.Small:
                                    return ye.S232x174;
                                case v.Medium:
                                case v.Large:
                                case v.ExtraLarge:
                                    return ye.S400x300;
                            }
                        })(b().mediaSize);
                    return a().createElement(
                        'div',
                        { className: bt },
                        rt(t.rewards.get(), (e, t, i) => {
                            const o = e.tooltipId,
                                s = Ge({ tooltipId: o }, Number(e.tooltipContentId)),
                                l = De(e.name),
                                c = l === Re.CURRENCY || e.name === ct,
                                u = e.name === be.Customizations;
                            return a().createElement(
                                ut,
                                { key: t, index: t, delay: st, onEnd: dt(t, i, n.showFooter) },
                                u
                                    ? a().createElement(wt, { id: e.value, tooltipArgs: s, size: r })
                                    : a().createElement(
                                          nt,
                                          Tt({}, e, {
                                              image: Ue(e, r),
                                              size: r,
                                              special: e.overlayType,
                                              valueType: l,
                                              tooltipArgs: s,
                                              classNames: {
                                                  info: E()(_t.info, c && _t.info__currency),
                                                  overlay: E()(_t.overlay, _t[`overlay__${e.overlayType}`]),
                                              },
                                          }),
                                      ),
                                !c &&
                                    !u &&
                                    a().createElement(
                                        'div',
                                        { className: _t.labelWrapper },
                                        a().createElement('div', { className: _t.label }, e.label),
                                    ),
                            );
                        }),
                    );
                });
                var Rt = n(690);
                const St = 'VehicleReward_base_60',
                    Ot = 'VehicleReward_image_85',
                    Lt = 'VehicleReward_name_0d',
                    Pt = 'VehicleReward_typeIcon_ae',
                    xt = ({ tooltipArgs: e }) =>
                        a().createElement(
                            et,
                            { tooltipArgs: e },
                            a().createElement(
                                'div',
                                { className: St },
                                a().createElement('div', { className: Ot }),
                                a().createElement(
                                    'div',
                                    { className: Lt },
                                    (0, Rt.HG)(10),
                                    a().createElement('div', { className: Pt }),
                                    R.strings.italy_vehicles.It20_Carro_Combattimento_45t(),
                                ),
                            ),
                        ),
                    Mt = 'EliteWithVehicleRewards_base_49',
                    kt = 'EliteWithVehicleRewards_wrapper_65',
                    Ct = 'EliteWithVehicleRewards_iconCompensation_9e',
                    Nt = 'EliteWithVehicleRewards_mainRewards_ee',
                    It = 'EliteWithVehicleRewards_additionalRewards_f5',
                    At = 'AdditionalRewards_base_f6',
                    Dt = 'AdditionalRewards_title_ab',
                    Bt = 'AdditionalRewards_content_f9';
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const Ut = (0, V.Pi)(({ showDelay: e }) => {
                    const t = ee(),
                        n = t.model,
                        r = t.controls,
                        i = ((e) => {
                            switch (e) {
                                case v.ExtraSmall:
                                case v.Small:
                                    return ye.Small;
                                case v.Medium:
                                case v.Large:
                                case v.ExtraLarge:
                                    return ye.Big;
                            }
                        })(b().mediaSize);
                    return a().createElement(
                        'div',
                        { className: At },
                        a().createElement(
                            'div',
                            {
                                className: Dt,
                                style: {
                                    '--additionalTitleDelay': `${e + 200}ms`,
                                    '--additionalTitleDuration': '400ms',
                                },
                            },
                            R.strings.clan_supply.rewardsView.additionalRewards(),
                        ),
                        a().createElement(
                            'div',
                            { className: Bt },
                            rt(n.additionalRewards.get(), (t, n, o) => {
                                const s = t.tooltipId,
                                    l = Ge({ tooltipId: s }, Number(t.tooltipContentId)),
                                    c = De(t.name),
                                    u = c === Re.CURRENCY || t.name === ct,
                                    d = t.name === be.Customizations;
                                return a().createElement(
                                    ut,
                                    { key: n, index: n, delay: e + 200 + lt, onEnd: dt(n, o, r.showFooter) },
                                    a().createElement(
                                        nt,
                                        Ht({}, t, {
                                            image: Ue(t, i),
                                            size: i,
                                            special: t.overlayType,
                                            valueType: c,
                                            tooltipArgs: l,
                                            classNames: {
                                                info: E()(_t.info, u && _t.info__currency, d && _t.info__hidden),
                                                overlay: E()(_t.overlay, _t[`overlay__${t.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !u &&
                                        !d &&
                                        a().createElement(
                                            'div',
                                            { className: _t.labelWrapper },
                                            a().createElement('div', { className: _t.label }, t.label),
                                        ),
                                );
                            }),
                        ),
                    );
                });
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const Ft = (e) => {
                        switch (e) {
                            case 0:
                                return 1;
                            case 1:
                                return 0;
                            default:
                                return e;
                        }
                    },
                    Wt = R.views.common.tooltip_window,
                    $t = (0, V.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            n = e.controls,
                            r = t.computes.hasAdditionalRewards(),
                            i = ((e) => {
                                switch (e) {
                                    case v.ExtraSmall:
                                    case v.Small:
                                    case v.Medium:
                                        return ye.S400x300;
                                    case v.Large:
                                    case v.ExtraLarge:
                                        return ye.S600x450;
                                }
                            })(b().mediaSize),
                            o = ((s = t.rewards.get().length), st + s * lt);
                        var s;
                        return a().createElement(
                            'div',
                            { className: Mt },
                            a().createElement(
                                'div',
                                { className: Nt },
                                rt(t.rewards.get(), (e, t, o) => {
                                    const s = e.tooltipId,
                                        l = ((e, t) => {
                                            const n = Number(e),
                                                r =
                                                    n ===
                                                    Wt.loot_box_compensation_tooltip.LootBoxVehicleCompensationTooltipContent(
                                                        'resId',
                                                    )
                                                        ? Wt.tooltip_window.TooltipWindow('resId')
                                                        : void 0;
                                            return Ge({ tooltipId: t }, n, { decoratorId: r, ignoreShowDelay: !0 });
                                        })(e.tooltipContentId, s),
                                        c = e.name === be.Vehicles;
                                    return (
                                        c && n.changeCButtonToVehiclePreview(),
                                        a().createElement(
                                            ut,
                                            {
                                                key: t,
                                                index: Ft(t),
                                                delay: st,
                                                onEnd: r ? void 0 : dt(t, o, n.showFooter),
                                                isCompensation: e.isCompensation,
                                            },
                                            c
                                                ? a().createElement(xt, { tooltipArgs: l })
                                                : a().createElement(
                                                      'div',
                                                      { className: kt },
                                                      a().createElement(
                                                          nt,
                                                          Gt({}, e, {
                                                              image: Ue(e, i),
                                                              size: i,
                                                              valueType: De(e.name),
                                                              tooltipArgs: l,
                                                              classNames: {
                                                                  info: E()(
                                                                      _t.info,
                                                                      e.isCompensation && _t.info__compensation,
                                                                  ),
                                                                  overlay: E()(
                                                                      _t.overlay,
                                                                      _t[`overlay__${e.overlayType}`],
                                                                  ),
                                                              },
                                                          }),
                                                      ),
                                                      e.isCompensation && a().createElement('div', { className: Ct }),
                                                  ),
                                        )
                                    );
                                }),
                            ),
                            r && a().createElement('div', { className: It }, a().createElement(Ut, { showDelay: o })),
                        );
                    }),
                    Vt = (0, V.Pi)(() => {
                        switch (ee().model.root.get().type) {
                            case de.COMMON:
                                return a().createElement(Et, null);
                            case de.ELITE_WITH_VEHICLE:
                                return a().createElement($t, null);
                            case de.ELITE:
                                return a().createElement(yt, null);
                            default:
                                return null;
                        }
                    }),
                    jt = (0, V.Pi)(() => {
                        const e = ee().model.root.get().type === de.ELITE_WITH_VEHICLE;
                        return a().createElement(
                            'div',
                            { className: E()(_e, e && Ee) },
                            a().createElement(
                                'div',
                                { className: me },
                                a().createElement('div', { className: he }),
                                a().createElement('div', { className: ge }),
                                a().createElement(
                                    'div',
                                    { className: ve },
                                    a().createElement(
                                        'div',
                                        { className: pe },
                                        a().createElement('div', { className: fe }),
                                    ),
                                ),
                                a().createElement('div', { className: we }, a().createElement(Vt, null)),
                            ),
                        );
                    }),
                    qt = () =>
                        a().createElement(
                            'div',
                            { className: A },
                            a().createElement('div', { className: D }, a().createElement(ue, null)),
                            a().createElement('div', { className: B }, a().createElement(jt, null)),
                            a().createElement(ie, null),
                        ),
                    zt = {
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
                    Yt = [
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
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const Kt = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        i = e.goto,
                        s = e.classNames,
                        l = e.onMouseEnter,
                        c = e.onMouseLeave,
                        u = e.onMouseDown,
                        d = e.onMouseUp,
                        _ = e.side,
                        m = void 0 === _ ? 'left' : _,
                        g = e.type,
                        h = void 0 === g ? 'back' : g,
                        p = e.soundHover,
                        v = void 0 === p ? 'highlight' : p,
                        f = e.soundClick,
                        w = void 0 === f ? 'play' : f,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, Yt);
                    const T = (0, r.useCallback)(
                            (e) => {
                                (null == l || l(e), o.O.sound.play.sound(v));
                            },
                            [l, v],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        ),
                        R = (0, r.useCallback)(
                            (e) => {
                                (null == u || u(e), o.O.sound.play.sound(w));
                            },
                            [u, w],
                        ),
                        S = (0, r.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        );
                    return a().createElement(
                        'div',
                        Xt(
                            {
                                className: E()(
                                    zt.base,
                                    zt[`base__${h}`],
                                    zt[`base__${m}`],
                                    null == s ? void 0 : s.base,
                                ),
                                onMouseEnter: T,
                                onMouseLeave: y,
                                onMouseDown: R,
                                onMouseUp: S,
                                onClick: n,
                            },
                            b,
                        ),
                        'info' !== h && a().createElement('div', { className: zt.shine }),
                        a().createElement(
                            'div',
                            {
                                className: E()(
                                    zt.icon,
                                    zt[`icon__${h}`],
                                    zt[`icon__${m}`],
                                    null == s ? void 0 : s.icon,
                                ),
                            },
                            a().createElement('div', { className: E()(zt.glow, null == s ? void 0 : s.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: E()(zt.caption, zt[`caption__${h}`], null == s ? void 0 : s.caption) },
                            t,
                        ),
                        i && a().createElement('div', { className: E()(zt.goto, null == s ? void 0 : s.goto) }, i),
                    );
                };
                var Qt = n(521);
                const Zt = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Jt(e = Qt.n.NONE, t = Zt, n = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Qt.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, a]);
                }
                const en = (0, V.Pi)(() => {
                    const e = ee().controls;
                    var t;
                    return (
                        (t = e.close),
                        Jt(Qt.n.ESCAPE, t),
                        a().createElement(Kt, {
                            type: 'close',
                            side: 'right',
                            caption: R.strings.clan_supply.rewardsView.button.close(),
                            onClick: e.close,
                        })
                    );
                });
                var tn = n(112);
                const nn = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function rn() {
                    return (
                        (rn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        rn.apply(this, arguments)
                    );
                }
                const an = (0, r.forwardRef)(function (e, t) {
                        let n = e.src,
                            i = e.className,
                            s = e.autoplay,
                            l = void 0 !== s && s,
                            c = e.style,
                            u = e.loop,
                            d = void 0 !== u && u,
                            _ = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            g = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, nn);
                        const h = t,
                            p = (0, r.useRef)(null);
                        var v;
                        return (
                            (v = () =>
                                o.O.view.events.onDisplayChanged((e, t) => {
                                    var n, r;
                                    (t === tn.W.hidden && (null == (n = p.current) || n.pause()),
                                        t === tn.W.shown && (null == (r = p.current) || r.play()));
                                })),
                            (0, r.useEffect)(v, []),
                            (0, r.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            n = null;
                                        return (
                                            (n = requestAnimationFrame(() => {
                                                n = requestAnimationFrame(() => {
                                                    ((n = null), (t = e()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                                            }
                                        );
                                    })(() => {
                                        const e = p.current;
                                        if (!h || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, h],
                            ),
                            (0, r.useEffect)(() => {
                                if (h && p.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: q },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function n() {
                                                            (e(), (t = requestAnimationFrame(n)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (p.current) {
                                                        const n = p.current,
                                                            r = n.currentTime,
                                                            a = n.duration;
                                                        if (
                                                            (t !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: a }),
                                                                ),
                                                                (t = r)),
                                                            p.current.paused || !h || !_)
                                                        )
                                                            return;
                                                        const i = p.current.cohGetKeyframeTimestamps();
                                                        i.forEach((t, n) => {
                                                            r > i[n] - 0.02 &&
                                                                r < i[n] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != m ? m : {})[n];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${m ? r : `Point_${n}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = n[0],
                                                a = n[1];
                                            return (r(), a);
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        r = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            var t, n, r;
                                            p.current &&
                                                (p.current.currentTime =
                                                    ((t = 0),
                                                    (n = p.current.duration),
                                                    (r = e) < t ? t : r > n ? n : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        l = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            (l(), o(0));
                                        },
                                        u = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = p.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (o(e), s());
                                        },
                                        g = (e) => {
                                            (o(e), l());
                                        },
                                        E = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        v = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = p.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = p.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        f = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = p.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = p.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (h.current = {
                                            on: v,
                                            off: f,
                                            play: s,
                                            pause: l,
                                            stop: c,
                                            cleanup: E,
                                            getCurrentTime: a,
                                            getDuration: i,
                                            getCachedKeyframes: u,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: o,
                                            domRef: p.current,
                                            onChangeTime: n,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            (E(), (h.current = null));
                                        }
                                    );
                                }
                            }, [m, h, _]),
                            (0, r.useEffect)(() => {
                                p.current && l && p.current.play();
                            }, [l, d]),
                            (0, r.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                rn({ src: n, className: i, style: c, loop: d, ref: p, onClick: g }, E),
                            )
                        );
                    }),
                    on = (0, r.memo)(an),
                    sn = 'VideoBack_base_e2',
                    ln = 'VideoBack_video_ac',
                    cn = (e, t) => {
                        const n = e.$dyn(t);
                        if ('string' == typeof n) return n;
                        throw new Error(`Video filename ${t} is invalid`);
                    },
                    un = () => {
                        const e = b().mediaWidth;
                        return a().createElement(
                            'div',
                            { className: sn, key: e },
                            a().createElement(on, {
                                className: ln,
                                src: cn(R.videos.clan_supply, `clouds_${e}`),
                                loop: !0,
                                autoplay: !0,
                            }),
                        );
                    },
                    dn = 'Background_base_f5',
                    _n = 'Background_base__2x_1b',
                    mn = 'Background_base__shaded_0f',
                    gn = 'Background_shadow_ba',
                    En = 'Background_videoBack_d9',
                    hn = ({ isShaded: e = !1, withVideo: t = !1 }) => {
                        const n = 2 === o.O.view.getScale();
                        return a().createElement(
                            'div',
                            { className: E()(dn, n && _n, e && mn) },
                            e && a().createElement('div', { className: gn }),
                            t && a().createElement('div', { className: En }, a().createElement(un, null)),
                        );
                    },
                    pn = () =>
                        a().createElement(
                            'div',
                            { className: N },
                            a().createElement(hn, { isShaded: !0 }),
                            a().createElement('div', { className: I }, a().createElement(en, null)),
                            a().createElement(qt, null),
                        );
                engine.whenReady.then(() => {
                    C().render(
                        a().createElement(J, null, a().createElement(M, null, a().createElement(pn, null))),
                        document.getElementById('root'),
                    );
                });
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), r < a && (a = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 477),
        (() => {
            var e = { 477: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        ((a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [687], () => __webpack_require__(94));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
