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
            527: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, { mouse: () => d, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o }));
                var a = n(472),
                    r = n(176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
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
            959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = n(527),
                    r = n(493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var a = n(959),
                    r = n(698),
                    i = n(514);
                const o = { view: n(641), client: a, sound: i.ZP, intl: r.N };
            },
            698: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o });
                var a = n(959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        arabic2roman: () => S,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => M,
                        enableFullScreenModeSupported: () => R,
                        events: () => o.U,
                        extraSize: () => D,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => L,
                        getExternalPaddingsRem: () => O,
                        getFontNames: () => k,
                        getScale: () => v,
                        getSize: () => g,
                        getViewGlobalPosition: () => h,
                        initExternalPaddings: () => C,
                        isEventHandled: () => y,
                        isFocused: () => w,
                        pxToRem: () => E,
                        remToPx: () => f,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => A,
                    }));
                var a = n(690),
                    r = n(722),
                    i = n(112),
                    o = n(538),
                    s = n(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function L() {
                    return viewEnv.getShowingStatus();
                }
                const k = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = a.cg;
                function O() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const M = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    D = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    A = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function R() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function C(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            a = t.right,
                            r = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? r : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, n) => {
                'use strict';
                let a, r;
                (n.d(t, { n: () => a }),
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
                    })(r || (r = {})));
            },
            690: (e, t, n) => {
                'use strict';
                n.d(t, { cg: () => i });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += a[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, r);
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
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
                n.d(t, { ry: () => v });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
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
                        const n = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                const r = a;
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    g = n(138);
                const m = ['args'];
                function h(e, t, n, a, r, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (a, r) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            h(i, a, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, a, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    f = () => E(s.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var w = n(572);
                const x = r.instance,
                    y = {
                        DataTracker: i.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), i) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                m = {
                                    x: g.O.view.pxToRem(c) + o.x,
                                    y: g.O.view.pxToRem(d) + o.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(_),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, f);
                        },
                        handleViewEvent: E,
                        onBindingsReady: v,
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
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, n = 2) => systemLocale.getRealFormat(e, t, n),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            898: (e, t, n) => {
                'use strict';
                var a = n(363),
                    r = n.n(a);
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
                var o = n(138);
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
                                })(e, n),
                                r = (function (e, t) {
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
                                i = Math.min(a, r);
                            return {
                                extraLarge: i === n.extraLarge.weight,
                                large: i === n.large.weight,
                                medium: i === n.medium.weight,
                                small: i === n.small.weight,
                                extraSmall: i === n.extraSmall.weight,
                                extraLargeWidth: a === n.extraLarge.weight,
                                largeWidth: a === n.large.weight,
                                mediumWidth: a === n.medium.weight,
                                smallWidth: a === n.small.weight,
                                extraSmallWidth: a === n.extraSmall.weight,
                                extraLargeHeight: r === n.extraLarge.weight,
                                largeHeight: r === n.large.weight,
                                mediumHeight: r === n.medium.weight,
                                smallHeight: r === n.small.weight,
                                extraSmallHeight: r === n.extraSmall.weight,
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
                const d = c(),
                    u = (0, a.createContext)(d),
                    _ = ['children'];
                (0, a.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, _);
                    const r = (0, a.useContext)(u),
                        o = r.extraLarge,
                        s = r.large,
                        l = r.medium,
                        c = r.small,
                        d = r.extraSmall,
                        g = r.extraLargeWidth,
                        m = r.largeWidth,
                        h = r.mediumWidth,
                        p = r.smallWidth,
                        v = r.extraSmallWidth,
                        E = r.extraLargeHeight,
                        f = r.largeHeight,
                        b = r.mediumHeight,
                        w = r.smallHeight,
                        x = r.extraSmallHeight,
                        y = { extraLarge: E, large: f, medium: b, small: w, extraSmall: x };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && s) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && g) return i(t, n, y);
                        if (n.largeWidth && m) return i(t, n, y);
                        if (n.mediumWidth && h) return i(t, n, y);
                        if (n.smallWidth && p) return i(t, n, y);
                        if (n.extraSmallWidth && v) return i(t, n, y);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && E) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && b) return t;
                            if (n.smallHeight && w) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const t = (0, a.useState)(c),
                        n = t[0],
                        i = t[1],
                        s = (0, a.useState)(!1),
                        l = s[0],
                        d = s[1];
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
                                d(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        r().createElement(u.Provider, { value: n }, l && e)
                    );
                };
                var m = n(483),
                    h = n.n(m),
                    p = n(926),
                    v = n.n(p);
                let E, f, b;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(E || (E = {})),
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
                    })(b || (b = {})));
                const w = () => {
                        const e = (0, a.useContext)(u),
                            t = e.width,
                            n = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return E.ExtraLarge;
                                    case e.large:
                                        return E.Large;
                                    case e.medium:
                                        return E.Medium;
                                    case e.small:
                                        return E.Small;
                                    case e.extraSmall:
                                        return E.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), E.ExtraSmall);
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
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    x = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL_WIDTH,
                        [f.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [f.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL_HEIGHT,
                        [b.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [b.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [E.ExtraSmall]: '',
                        [E.Small]: v().SMALL,
                        [E.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [E.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [E.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, x);
                        const i = w(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return r().createElement('div', y({ className: h()(n, T[o], L[s], k[l]) }, a), t);
                    },
                    O = ['children'];
                const M = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, O);
                    return r().createElement(g, null, r().createElement(S, n, t));
                };
                var D = n(533),
                    A = n.n(D);
                let C;
                function H(e) {
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
                })(C || (C = {}));
                const P = {
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
                let N, I;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(N || (N = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(I || (I = {})));
                const W = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: i,
                        onMouseEnter: o,
                        onMouseMove: s,
                        onMouseDown: l,
                        onMouseUp: c,
                        onMouseLeave: d,
                        onClick: u,
                        isFocused: _ = !1,
                        type: g = N.primary,
                        soundHover: m = 'highlight',
                        soundClick: p = 'play',
                    }) => {
                        const v = (0, a.useRef)(null),
                            E = (0, a.useState)(_),
                            f = E[0],
                            b = E[1],
                            w = (0, a.useState)(!1),
                            x = w[0],
                            y = w[1];
                        return (
                            (0, a.useEffect)(() => {
                                function e(e) {
                                    f && null !== v.current && !v.current.contains(e.target) && b(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [f]),
                            (0, a.useEffect)(() => {
                                b(_);
                            }, [_]),
                            r().createElement(
                                'div',
                                {
                                    ref: v,
                                    className: h()(
                                        P.base,
                                        P[`base__${g}`],
                                        n && P.base__disabled,
                                        t && P[`base__${t}`],
                                        f && P.base__focus,
                                        x && P.base__highlightActive,
                                        i,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== m && H(m), o && o(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (c && c(e), y(!1));
                                    },
                                    onMouseDown: function (e) {
                                        if (n) return;
                                        const t = e.button === C.LEFT;
                                        (null !== p && t && H(p),
                                            l && l(e),
                                            _ && (n || (v.current && (v.current.focus(), b(!0)))),
                                            t && y(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (d && d(e), y(!1));
                                    },
                                    onClick: function (e) {
                                        n || (u && u(e));
                                    },
                                },
                                g !== N.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: P.back }),
                                        r().createElement('span', { className: P.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: h()(P.state, P.state__default) },
                                    r().createElement('span', { className: P.stateDisabled }),
                                    r().createElement('span', { className: P.stateHighlightHover }),
                                    r().createElement('span', { className: P.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: P.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    B = {
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
                    $ = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                const G = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        i = e.goto,
                        s = e.classNames,
                        l = e.onMouseEnter,
                        c = e.onMouseLeave,
                        d = e.onMouseDown,
                        u = e.onMouseUp,
                        _ = e.side,
                        g = void 0 === _ ? 'left' : _,
                        m = e.type,
                        p = void 0 === m ? 'back' : m,
                        v = e.soundHover,
                        E = void 0 === v ? 'highlight' : v,
                        f = e.soundClick,
                        b = void 0 === f ? 'play' : f,
                        w = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, $);
                    const x = (0, a.useCallback)(
                            (e) => {
                                (null == l || l(e), o.O.sound.play.sound(E));
                            },
                            [l, E],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                (null == d || d(e), o.O.sound.play.sound(b));
                            },
                            [d, b],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                null == u || u(e);
                            },
                            [u],
                        );
                    return r().createElement(
                        'div',
                        U(
                            {
                                className: h()(B.base, B[`base__${p}`], B[`base__${g}`], null == s ? void 0 : s.base),
                                onMouseEnter: x,
                                onMouseLeave: y,
                                onMouseDown: T,
                                onMouseUp: L,
                                onClick: n,
                            },
                            w,
                        ),
                        'info' !== p && r().createElement('div', { className: B.shine }),
                        r().createElement(
                            'div',
                            { className: h()(B.icon, B[`icon__${p}`], B[`icon__${g}`], null == s ? void 0 : s.icon) },
                            r().createElement('div', { className: h()(B.glow, null == s ? void 0 : s.glow) }),
                        ),
                        r().createElement(
                            'div',
                            { className: h()(B.caption, B[`caption__${p}`], null == s ? void 0 : s.caption) },
                            t,
                        ),
                        i && r().createElement('div', { className: h()(B.goto, null == s ? void 0 : s.goto) }, i),
                    );
                };
                var F = n(521);
                n(916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = F.n.NONE, t = j, n = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== F.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(a), n && a.stopPropagation());
                            }
                        }
                    }, [t, e, n, r]);
                }
                var V = n(403);
                let z, K, Y, X, Z;
                (!(function (e) {
                    ((e.Click = 'click'), (e.Display = 'display'));
                })(z || (z = {})),
                    (function (e) {
                        ((e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog'));
                    })(K || (K = {})),
                    (function (e) {
                        ((e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button'));
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e.Lock = 'lock'), (e.Unlock = 'unlock'));
                    })(X || (X = {})),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })(Z || (Z = {})));
                let Q;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
                })(Q || (Q = {}));
                const J = 'metrics',
                    ee = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    te = (e, t) => {
                        const n = (0, a.useCallback)(
                            (n, a = Z.Info, r) => {
                                (r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        }));
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    ne =
                        (Y.CancelEngraving,
                        Y.CancelBackground,
                        Y.DiscardChanges,
                        () => {
                            const e = ((e) => {
                                const t = te(e, J),
                                    n = (0, a.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, ee(e));
                                        },
                                        [t],
                                    );
                                return (e) => n(e);
                            })('dog_tags');
                            return (t) => {
                                e({ action: z.Click, parentScreen: K.ConfirmDialog, item: t });
                            };
                        });
                var ae = n(664);
                const re = 'Flame_base_90',
                    ie = 'Flame_slides_58',
                    oe = 'Flame_frame_29',
                    se = (0, a.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, n) => {
                                    const a = `flame_${`0${n}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return r().createElement(
                            'div',
                            { className: h()(re, e), 'data-testid': 'Flame' },
                            r().createElement(
                                'div',
                                { className: ie },
                                t.map((e) => r().createElement('img', { key: e, src: e, className: oe })),
                            ),
                        );
                    });
                let le, ce, de, ue, _e;
                (!(function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(le || (le = {})),
                    (function (e) {
                        ((e[(e.Equipped = 0)] = 'Equipped'),
                            (e[(e.Locked = 1)] = 'Locked'),
                            (e[(e.Open = 2)] = 'Open'));
                    })(ce || (ce = {})),
                    (function (e) {
                        ((e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all'));
                    })(de || (de = {})),
                    (function (e) {
                        ((e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base'));
                    })(ue || (ue = {})),
                    (function (e) {
                        ((e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season'));
                    })(_e || (_e = {})));
                (_e.Dedication, ue.Dedication, _e.Triumph, ue.Triumph, _e.Season, ue.Skill, ue.RankedSkill);
                let ge;
                !(function (e) {
                    ((e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE'));
                })(ge || (ge = {}));
                const me = R.images.gui.maps.icons.dogtags,
                    he = 'R.images.gui.maps.icons.dogtags',
                    pe = R.strings.dogtags.component,
                    ve = 'R.strings.dogtags.component',
                    Ee = (e, t, n, a = 0, r = 'big', i = me, o = pe) => {
                        i &&
                            !(r in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${he}`,
                            );
                        const s = r in i ? i[r] : void 0,
                            l = `${t}s`;
                        s &&
                            !(l in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[he, r].join('.')}`,
                            );
                        const c = s && l in s ? s[l] : void 0,
                            d = `${t}_${e}_${t === de.Engraving ? a : '0'}`;
                        c &&
                            !(d in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${d}" does not exist in ${[he, r, l].join('.')}`,
                            );
                        const u = c && d in c ? c[d]() : i.big.backgrounds.background_66_0();
                        o &&
                            !(t in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${ve}`,
                            );
                        const _ = t in o ? o[t] : void 0;
                        _ &&
                            !(n in _) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[ve, t].join('.')}`,
                            );
                        const g = _ && n in _ ? _[n] : void 0,
                            m = `c_${e}`;
                        g &&
                            !(m in g) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${m}" does not exist in ${[ve, t, n].join('.')}`,
                            );
                        return { image: u, strings: g && m in g ? g[m] : void 0 };
                    },
                    fe =
                        (le.Engraving,
                        le.Background,
                        le.Engraving,
                        le.Background,
                        {
                            base: 'DogTags_base_4b',
                            base__x400: 'DogTags_base__x400_00',
                            dogtags_top: 'DogTags_dogtags_top_a9',
                            dogtags_bottom: 'DogTags_dogtags_bottom_20',
                            background: 'DogTags_background_e7',
                            playerInfoShadow: 'DogTags_playerInfoShadow_30',
                            name: 'DogTags_name_36',
                            clan: 'DogTags_clan_05',
                            engraving: 'DogTags_engraving_7f',
                            score: 'DogTags_score_ac',
                            shadow: 'DogTags_shadow_03',
                            trackerInfoWrapper: 'DogTags_trackerInfoWrapper_5f',
                            trackerText: 'DogTags_trackerText_a4',
                            trackerValue: 'DogTags_trackerValue_b3',
                            trackerDigit: 'DogTags_trackerDigit_c3',
                            spaceDigit: 'DogTags_spaceDigit_c8',
                            flameAnimation: 'DogTags_flameAnimation_dd',
                            flameAnimation__appear: 'DogTags_flameAnimation__appear_86',
                            flameAnimation__appearActive: 'DogTags_flameAnimation__appearActive_fc',
                            flameAnimation__appearDone: 'DogTags_flameAnimation__appearDone_6b',
                            flameAnimation__enter: 'DogTags_flameAnimation__enter_3b',
                            flameAnimation__enterActive: 'DogTags_flameAnimation__enterActive_7f',
                            flameAnimation__enterDone: 'DogTags_flameAnimation__enterDone_57',
                            flameAnimation__exit: 'DogTags_flameAnimation__exit_57',
                            flameAnimation__exitActive: 'DogTags_flameAnimation__exitActive_0d',
                            flameAnimation__exitDone: 'DogTags_flameAnimation__exitDone_c3',
                        }),
                    be = R.images.gui.maps.icons.dogtags.big.digits,
                    we = (e, t = be) => {
                        const n = `c_${e}`;
                        return n in t
                            ? t[n]()
                            : e in t
                              ? t[e]()
                              : void (
                                    'invalidTestDigit' !== e &&
                                    console.error(
                                        `getDigitUri error at digit: ${e}. No properties "${n}" nor "${e}" exist in R.images.gui.maps.icons.dogtags.big.digits`,
                                    )
                                );
                    },
                    xe = (e) => ({ backgroundImage: `url(${e})` });
                let ye;
                !(function (e) {
                    ((e.x300 = 'x300'), (e.x400 = 'x400'));
                })(ye || (ye = {}));
                const Te = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(Te))
                    .filter((e) => '$' !== e[0])
                    .map((e) => Te[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const Le = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        ((e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex'));
                    },
                    ke = {
                        appear: fe.flameAnimation__appear,
                        appearActive: fe.flameAnimation__appearActive,
                        appearDone: fe.flameAnimation__appearDone,
                        enter: fe.flameAnimation__enter,
                        enterActive: fe.flameAnimation__enterActive,
                        enterDone: fe.flameAnimation__enterDone,
                        exit: fe.flameAnimation__exit,
                        exitActive: fe.flameAnimation__exitActive,
                        exitDone: fe.flameAnimation__exitDone,
                    },
                    Se = ({
                        playerName: e,
                        clanTag: t,
                        background: n,
                        engraving: i,
                        isHighlighted: o,
                        size: s = ye.x300,
                    }) => {
                        const l = n.currentGrade,
                            c = i.currentGrade,
                            d = Ee(n.id, de.Background, n.purpose || 'default', l || 0, 'big'),
                            u = Ee(i.id, de.Engraving, i.purpose || 'dedication', c || 0, 'big'),
                            _ = i.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const a = n % 2 == 1;
                                return (e.push(...(a ? [t] : t.split(''))), e);
                            }, []);
                        const g = u.strings ? u.strings.title() : null,
                            m = xe(d.image),
                            p = xe(u.image),
                            v = ((e) => {
                                const t = (0, a.useRef)(!1);
                                return (
                                    (0, a.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(o);
                        return (
                            (0, a.useEffect)(() => {
                                o && !v ? H(R.sounds.dt_flame_start()) : v && !o && H(R.sounds.dt_flame_stop());
                            }, [o, v]),
                            r().createElement(
                                'div',
                                { className: h()(fe.base, fe[`base__${s}`]) },
                                r().createElement(
                                    ae.Z,
                                    {
                                        in: o,
                                        timeout: 400,
                                        className: fe.flameAnimation,
                                        classNames: ke,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    r().createElement(se, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: fe.dogtags_top },
                                    r().createElement('div', { className: fe.background, style: m }),
                                    r().createElement('div', { className: fe.shadow }),
                                    r().createElement('div', { className: fe.playerInfoShadow }),
                                    r().createElement('div', { className: fe.name }, e),
                                    r().createElement('div', { className: fe.clan }, t),
                                    r().createElement('div', { className: fe.engraving, style: p }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: fe.dogtags_bottom },
                                    r().createElement(
                                        'div',
                                        { className: fe.trackerInfoWrapper },
                                        r().createElement('div', { className: fe.trackerText }, g),
                                        r().createElement(
                                            'div',
                                            { className: fe.trackerValue },
                                            _.map((e, t) => {
                                                if (' ' === e)
                                                    return r().createElement('div', {
                                                        key: e + t,
                                                        className: fe.spaceDigit,
                                                    });
                                                const n = we(e, Te);
                                                return r().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: Le,
                                                    className: fe.trackerDigit,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                function Oe() {
                    return !1;
                }
                console.log;
                var Me = n(174);
                function De(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ae(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ae(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ae(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Re = (e) => (0 === e ? window : window.subViews.get(e));
                const Ce = ((e, t) => {
                        const n = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const d = (0, a.useRef)([]),
                                    u = (n, a, r) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Re,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = r.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = n(t),
                                                        i = a.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const l = 'string' == typeof i ? `${a}.${i}` : a,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return (r.set(c, n), e && n(s(i)), c);
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
                                                        for (var e, n = De(r.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            l =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            _ = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = c(e),
                                                            a = Me.LO.box(t, { equals: Oe });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Me.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            r = Me.LO.box(a, { equals: Oe });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Me.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            r = Me.LO.box(a, { equals: Oe });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Me.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = c(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Me.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Me.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                i = Object.entries(r),
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = Me.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Me.aD)((e) => {
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
                                                cleanup: u,
                                            }),
                                            g = { mode: n, model: _, externalModel: l, cleanup: u };
                                        return {
                                            model: _,
                                            controls: 'mocks' === n && r ? r.controls(g) : t(g),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    g = (0, a.useState)(i),
                                    m = g[0],
                                    h = g[1],
                                    p = (0, a.useState)(() => u(i, s, c)),
                                    v = p[0],
                                    E = p[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? E(u(m, s, c)) : (_.current = !0);
                                    }, [c, m, s]),
                                    (0, a.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    r().createElement(n.Provider, { value: v }, l)
                                );
                            },
                            () => (0, a.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            equippedDogTag: e.object('equippedDogTag'),
                            engraving: e.object('equippedDogTag.engraving'),
                            background: e.object('equippedDogTag.background'),
                        }),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            onDiscard: e.createCallbackNoArgs('onDiscard'),
                        }),
                    ),
                    He = Ce[0],
                    Pe = Ce[1],
                    Ne = 'App_base_fd',
                    Ie = 'App_close_fa',
                    We = 'App_content_6b',
                    Be = 'App_container_0f',
                    $e = 'App_dogTag_bc',
                    Ue = 'App_container__unavailable_ee',
                    Ge = 'App_lock_be',
                    Fe = 'App_title_5d',
                    je = 'App_separator_2e',
                    qe = 'App_buttons_11',
                    Ve = 'App_button_30',
                    ze = R.strings.dogtags.customizationConfirmDialog,
                    Ke = (0, V.Pi)(() => {
                        const e = Pe(),
                            t = e.model,
                            n = e.controls,
                            a = t.equippedDogTag.get(),
                            i = a.playerName,
                            o = a.clanTag,
                            s = t.engraving.get(),
                            l = t.background.get(),
                            c = s.isLocked || l.isLocked,
                            d = ne();
                        var u;
                        ((u = n.close), q(F.n.ESCAPE, u));
                        return r().createElement(
                            'div',
                            { className: Ne },
                            r().createElement(
                                'div',
                                { className: Ie },
                                r().createElement(G, {
                                    caption: ze.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: n.close,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: We },
                                r().createElement(
                                    'div',
                                    { className: h()(Be, c && Ue) },
                                    r().createElement(
                                        'div',
                                        { className: $e },
                                        r().createElement(Se, {
                                            playerName: i,
                                            clanTag: o,
                                            engraving: s,
                                            background: l,
                                            isHighlighted: !1,
                                        }),
                                    ),
                                    r().createElement('div', { className: Ge }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Fe },
                                    c ? ze.title.unavailable() : ze.title.available(),
                                ),
                                r().createElement('div', { className: je }),
                                r().createElement(
                                    'div',
                                    { className: qe },
                                    r().createElement(
                                        'div',
                                        { className: Ve },
                                        c
                                            ? r().createElement(
                                                  W,
                                                  { type: N.primary, size: I.medium, onClick: n.close },
                                                  ze.back(),
                                              )
                                            : r().createElement(
                                                  W,
                                                  {
                                                      type: N.primary,
                                                      size: I.medium,
                                                      onClick: () => {
                                                          (d(Y.ConfirmDogTag), n.confirm());
                                                      },
                                                  },
                                                  ze.equip(),
                                              ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Ve },
                                        r().createElement(
                                            W,
                                            {
                                                type: N.secondary,
                                                size: I.medium,
                                                onClick: () => {
                                                    (d(Y.DiscardDogTag), n.onDiscard());
                                                },
                                            },
                                            ze.discard(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    A().render(
                        r().createElement(He, null, r().createElement(M, null, r().createElement(Ke, null))),
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
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, a];
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
        (__webpack_require__.j = 495),
        (() => {
            var e = { 495: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        ((r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(898));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
