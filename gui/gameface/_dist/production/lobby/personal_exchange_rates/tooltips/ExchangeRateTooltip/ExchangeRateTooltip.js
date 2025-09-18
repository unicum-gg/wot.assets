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
            294: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => _e });
                var a = {};
                (r.r(a),
                    r.d(a, { mouse: () => m, off: () => d, on: () => _, onResize: () => c, onScaleUpdated: () => u }));
                var n = {};
                (r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => w,
                        getSize: () => E,
                        graphicsQuality: () => f,
                        playSound: () => h,
                        setRTPC: () => v,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => C, getTextureUrl: () => T }));
                var o = {};
                function l(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (r.r(o),
                    r.d(o, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => G,
                        arabic2roman: () => ne,
                        children: () => i,
                        displayStatus: () => M,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => ce,
                        events: () => P,
                        extraSize: () => le,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => re,
                        getExternalPaddingsRem: () => ie,
                        getFontNames: () => ae,
                        getScale: () => X,
                        getSize: () => q,
                        getViewGlobalPosition: () => $,
                        initExternalPaddings: () => ue,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => B,
                        sendEvent: () => N,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => se,
                    }));
                const c = l('clientResized'),
                    u = l('self.onScaleUpdated'),
                    _ = (e, t) => engine.on(e, t),
                    d = (e, t) => engine.off(e, t),
                    g = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') };
                const m = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && s(!1);
                    }
                    function r() {
                        e.enabled && s(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : s(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        o = g[t]((e) => r([e, 'outside']));
                                    function l(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(i, l),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
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
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function v(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(b).reduce((e, t) => ((e[t] = () => h(b[t])), e), {}),
                    x = { play: Object.assign({}, y, { sound: h }), setRTPC: v },
                    L = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    S = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function O(e) {
                    let t = '';
                    for (let r = S.length - 1; r >= 0; r--) for (; e >= S[r]; ) ((t += L[r]), (e -= S[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function T(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function C(e, t, r) {
                    return `url(${T(e, t, r)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const A = 2,
                    H = 16,
                    D = 32,
                    I = 64,
                    W = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                    return n;
                                })(t, k);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    N = {
                        close(e) {
                            W('popover' === e ? A : D);
                        },
                        minimize() {
                            W(I);
                        },
                        move(e) {
                            W(H, { isMouseEvent: !0, on: e });
                        },
                    };
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function F(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function V(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function $(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function K(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ne = O;
                function ie() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(M).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === M[t]), e), {}),
                    le = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ce() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ue(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            r = t.top,
                            a = t.right,
                            n = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${r}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const _e = { view: o, client: n, sound: x, intl: p };
            },
            521: (e, t, r) => {
                'use strict';
                let a, n;
                (r.d(t, { n: () => a }),
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
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var a = r(294);
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
                    addCallback(e, t, r = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, r, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const a = this._callbacks[r];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
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
            916: (e, t, r) => {
                'use strict';
                r.d(t, { B3: () => s, Z5: () => o.Z5, ry: () => E });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    r();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const r = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== a)),
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
                var i = r(358);
                var o = r(613);
                let l;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = r(521),
                    g = r(294);
                const m = ['args'];
                function h(e, t, r, a, n, i, o) {
                    try {
                        var l = e[i](o),
                            s = l.value;
                    } catch (e) {
                        return void r(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(a, n);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                        r = arguments;
                                    return new Promise(function (a, n) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            h(i, a, n, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            h(i, a, n, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                    return n;
                                })(t, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    f = () => w(l.CLOSE),
                    p = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var b = r(572);
                const y = n.instance,
                    x = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => w(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => w(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, a, n = R.invalid('resId'), i) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                _ = s.width,
                                d = s.height,
                                m = {
                                    x: g.O.view.pxToRem(c) + o.x,
                                    y: g.O.view.pxToRem(u) + o.y,
                                    width: g.O.view.pxToRem(_),
                                    height: g.O.view.pxToRem(d),
                                };
                            w(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: w,
                        onBindingsReady: E,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        r[a] = [];
                                        for (let t = 0; t < n.length; t++) r[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[a] = e(t[a]))
                                            : (r[a] = t[a]);
                                }
                            return r;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
            },
            613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            710: (e, t, r) => {
                'use strict';
                var a = r(363),
                    n = r.n(a);
                const i = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(294);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function c(e = o.O.client.getSize('rem')) {
                    const t = e.width,
                        r = e.height;
                    return Object.assign(
                        { width: t, height: r },
                        (function (e, t, r) {
                            const a = (function (e, t) {
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
                                })(e, r),
                                n = (function (e, t) {
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
                                })(t, r),
                                i = Math.min(a, n);
                            return {
                                extraLarge: i === r.extraLarge.weight,
                                large: i === r.large.weight,
                                medium: i === r.medium.weight,
                                small: i === r.small.weight,
                                extraSmall: i === r.extraSmall.weight,
                                extraLargeWidth: a === r.extraLarge.weight,
                                largeWidth: a === r.large.weight,
                                mediumWidth: a === r.medium.weight,
                                smallWidth: a === r.small.weight,
                                extraSmallWidth: a === r.extraSmall.weight,
                                extraLargeHeight: n === r.extraLarge.weight,
                                largeHeight: n === r.large.weight,
                                mediumHeight: n === r.medium.weight,
                                smallHeight: n === r.small.weight,
                                extraSmallHeight: n === r.extraSmall.weight,
                            };
                        })(t, r, l),
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
                })(s || (s = {}));
                const u = c(),
                    _ = (0, a.createContext)(u),
                    d = ['children'];
                (0, a.memo)((e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                            return n;
                        })(e, d);
                    const n = (0, a.useContext)(_),
                        o = n.extraLarge,
                        l = n.large,
                        s = n.medium,
                        c = n.small,
                        u = n.extraSmall,
                        g = n.extraLargeWidth,
                        m = n.largeWidth,
                        h = n.mediumWidth,
                        v = n.smallWidth,
                        E = n.extraSmallWidth,
                        w = n.extraLargeHeight,
                        f = n.largeHeight,
                        p = n.mediumHeight,
                        b = n.smallHeight,
                        y = n.extraSmallHeight,
                        x = { extraLarge: w, large: f, medium: p, small: b, extraSmall: y };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && l) return t;
                        if (r.medium && s) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && g) return i(t, r, x);
                        if (r.largeWidth && m) return i(t, r, x);
                        if (r.mediumWidth && h) return i(t, r, x);
                        if (r.smallWidth && v) return i(t, r, x);
                        if (r.extraSmallWidth && E) return i(t, r, x);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && p) return t;
                            if (r.smallHeight && b) return t;
                            if (r.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const t = (0, a.useState)(c),
                        r = t[0],
                        i = t[1],
                        l = (0, a.useState)(!1),
                        s = l[0],
                        u = l[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
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
                        n().createElement(_.Provider, { value: r }, s && e)
                    );
                };
                var m = r(483),
                    h = r.n(m),
                    v = r(926),
                    E = r.n(v);
                let w, f, p;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const b = () => {
                        const e = (0, a.useContext)(_),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
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
                                        return p.ExtraLarge;
                                    case e.largeHeight:
                                        return p.Large;
                                    case e.mediumHeight:
                                        return p.Medium;
                                    case e.smallHeight:
                                        return p.Small;
                                    case e.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: E().SMALL_WIDTH,
                        [f.Medium]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH}`,
                        [f.Large]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH} ${E().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [p.ExtraSmall]: '',
                        [p.Small]: E().SMALL_HEIGHT,
                        [p.Medium]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT}`,
                        [p.Large]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT} ${E().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [w.ExtraSmall]: '',
                        [w.Small]: E().SMALL,
                        [w.Medium]: `${E().SMALL} ${E().MEDIUM}`,
                        [w.Large]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE}`,
                        [w.ExtraLarge]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE} ${E().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, y);
                        const i = b(),
                            o = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return n().createElement('div', x({ className: h()(r, L[o], S[l], O[s]) }, a), t);
                    },
                    C = ['children'];
                const M = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                            return n;
                        })(e, C);
                    return n().createElement(g, null, n().createElement(T, r, t));
                };
                var P = r(533),
                    k = r.n(P);
                function A() {
                    const e = (0, a.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useEffect)(() => t, []),
                        (0, a.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (t(), (e.current = 0));
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
                const H = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    D = ['children', 'className', 'theme'];
                function I() {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                }
                const W = n().forwardRef(function (e, t) {
                    let r = e.children,
                        i = e.className,
                        l = e.theme,
                        s = void 0 === l ? 'default' : l,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                            return n;
                        })(e, D);
                    const u = A(),
                        _ = n().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            u.run(() => {
                                const e = _.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    r = e.scrollHeight;
                                o.O.view.resize(t, r);
                                const a = window.getComputedStyle(e);
                                o.O.view.setSidePaddingsRem({
                                    left: parseInt(a.getPropertyValue('padding-left'), 10),
                                    top: parseInt(a.getPropertyValue('padding-top'), 10),
                                    right: parseInt(a.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(a.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, a.useEffect)(d, []),
                        n().createElement(
                            'div',
                            I({}, c, {
                                className: h()(H.base, H[`base__theme-${s}`], i),
                                ref: function (e) {
                                    ((_.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                },
                            }),
                            n().createElement('div', { className: H.decorator }, r),
                        )
                    );
                });
                var N = r(515),
                    G = r(916);
                const U = ({ value: e, format: t = 'integral' }) => {
                        const r = (function (e) {
                                return 'gold' === e ? G.B3.GOLD : G.B3.INTEGRAL;
                            })(t),
                            a = G.Z5.getNumberFormat(e, r);
                        return void 0 !== e && void 0 !== a ? a : null;
                    },
                    F = {
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
                let V, j, q;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(V || (V = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(j || (j = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(q || (q = {})));
                const B = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: r,
                            type: a,
                            value: i,
                            discountValue: o,
                            showPlus: l,
                            isEnough: s = !0,
                            stockBackgroundName: c = q.Red,
                            className: u,
                            classNames: _,
                        }) =>
                            n().createElement(
                                'span',
                                { className: h()(F.base, F[`base__${r}`], u) },
                                n().createElement(
                                    'span',
                                    {
                                        className: h()(
                                            F.value,
                                            F[`value__${a}`],
                                            !s && F.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    l && i > 0 && '+',
                                    n().createElement(U, { value: i, format: a === j.gold ? 'gold' : 'integral' }),
                                ),
                                n().createElement('span', {
                                    className: h()(F.icon, F[`icon__${a}-${r}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    n().createElement(
                                        'span',
                                        {
                                            className: h()(
                                                F.stock,
                                                o && F.stock__indent,
                                                t && F.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        n().createElement('span', {
                                            className: F.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    $ = 'Rates_base_c7',
                    z = 'Rates_row_92',
                    X = 'Rates_equal_40',
                    K = 'Rates_text_f3',
                    Y = R.strings.personal_exchange_rates.tooltip.common,
                    Z = (e, t) => e.goldRateValue === t.goldRateValue && e.resourceRateValue === t.resourceRateValue,
                    Q = ({
                        className: e,
                        defaultExchangeRate: t,
                        commonExchangeRate: r,
                        personalExchangeRate: a,
                        currencyTypes: i,
                    }) => {
                        let o = [];
                        return (
                            (o = Z(r, a)
                                ? [
                                      { title: Y.generalRate(), rate: r },
                                      { title: Y.basicRate(), rate: t },
                                  ]
                                : Z(t, r)
                                  ? [
                                        { title: Y.personalRate(), rate: a },
                                        { title: Y.basicRate(), rate: t },
                                    ]
                                  : [
                                        { title: Y.personalRate(), rate: a },
                                        { title: Y.generalRate(), rate: r },
                                        { title: Y.basicRate(), rate: t },
                                    ]),
                            n().createElement(
                                'div',
                                { className: h()($, e) },
                                o.map((e, t) => {
                                    const r =
                                            i.from === j.gold
                                                ? { from: e.rate.goldRateValue, to: e.rate.resourceRateValue }
                                                : { from: e.rate.resourceRateValue, to: e.rate.goldRateValue },
                                        a = r.from,
                                        o = r.to;
                                    return n().createElement(
                                        'div',
                                        { className: z, key: t },
                                        n().createElement('span', { className: K }, e.title),
                                        n().createElement(B, { size: 'small', type: i.from, value: a }),
                                        n().createElement('span', { className: X }, '='),
                                        n().createElement(B, { size: 'small', type: i.to, value: o }),
                                    );
                                }),
                            )
                        );
                    };
                function J() {}
                function ee() {
                    return !1;
                }
                console.log;
                var te = r(174);
                function re(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ae(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return ae(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ae(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const ne = (e) => (0 === e ? window : window.subViews.get(e));
                const ie = ((e, t) => {
                        const r = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: l, children: s, mocks: c }) {
                                const u = (0, a.useRef)([]),
                                    _ = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = ne,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = n.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const n = r(t),
                                                        i = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const s = 'string' == typeof i ? `${a}.${i}` : a,
                                                            c = o.O.view.addModelObserver(s, t, !0);
                                                        return (n.set(c, r), e && r(l(i)), c);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const r = l(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = re(n.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            s =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === r ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            _ = (e) => u.current.push(e),
                                            d = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = c(e),
                                                            a = te.LO.box(t, { equals: ee });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            n = te.LO.box(a, { equals: ee });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, te.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            n = te.LO.box(a, { equals: ee });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, te.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = c(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = te.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, te.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                i = Object.entries(n),
                                                                o = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = te.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            g = { mode: r, model: d, externalModel: s, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === r && n ? n.controls(g) : t(g),
                                            externalModel: s,
                                            mode: r,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    g = (0, a.useState)(i),
                                    m = g[0],
                                    h = g[1],
                                    v = (0, a.useState)(() => _(i, l, c)),
                                    E = v[0],
                                    w = v[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? w(_(m, l, c)) : (d.current = !0);
                                    }, [c, m, l]),
                                    (0, a.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (E.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [E],
                                    ),
                                    n().createElement(r.Provider, { value: E }, s)
                                );
                            },
                            () => (0, a.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            defaultExchangeRate: e.object('defaultExchangeRate'),
                            commonExchangeRate: e.object('commonExchangeRate'),
                            personalExchangeRate: e.object('personalExchangeRate'),
                        }),
                        J,
                    ),
                    oe = ie[0],
                    le = ie[1],
                    se = 'App_base_34',
                    ce = 'App_title_85',
                    ue = R.strings.personal_exchange_rates.tooltip.exchangeRate.title,
                    _e = (0, N.Pi)(() => {
                        const e = le().model,
                            t = e.root.get(),
                            r = t.isTemporary,
                            a = t.currencyTypeFrom,
                            i = t.currencyTypeTo;
                        return n().createElement(
                            W,
                            null,
                            n().createElement(
                                'div',
                                { className: se },
                                n().createElement('div', { className: ce }, r ? ue.temporary() : ue.favorable()),
                                n().createElement(Q, {
                                    defaultExchangeRate: e.defaultExchangeRate.get(),
                                    commonExchangeRate: e.commonExchangeRate.get(),
                                    personalExchangeRate: e.personalExchangeRate.get(),
                                    currencyTypes: { from: a, to: i },
                                }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        n().createElement(M, null, n().createElement(oe, null, n().createElement(_e, null))),
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
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](r, r.exports, __webpack_require__), r.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, a) => {
            if (!t) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, r, a] = deferred[s], i = !0, o = 0; o < t.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(s--, 1);
                        var l = r();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, r, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 803),
        (() => {
            var e = { 803: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        n,
                        [i, o, l] = r,
                        s = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (l) var c = l(__webpack_require__);
                    }
                    for (t && t(r); s < i.length; s++)
                        ((n = i[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [674], () => __webpack_require__(710));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
