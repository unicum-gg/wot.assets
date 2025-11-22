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
                    n.d(t, { mouse: () => u, off: () => l, on: () => o, onResize: () => s, onScaleUpdated: () => i }));
                var a = n(472),
                    r = n(176);
                const s = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const u = (function () {
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
                    const s = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        i = c[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(s, o),
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
                    return Object.assign({}, s, {
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = n(527),
                    r = n(493);
                function s(e = 'px') {
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
                n.d(t, { O: () => i });
                var a = n(959),
                    r = n(698),
                    s = n(514);
                const i = { view: n(641), client: a, sound: s.ZP, intl: r.N };
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
                n.d(t, { ZP: () => i });
                var a = n(959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => T,
                        children: () => r,
                        displayStatus: () => s.W,
                        displayStatusIs: () => I,
                        enableFullScreenModeSupported: () => L,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => N,
                        getScale: () => f,
                        getSize: () => g,
                        getViewGlobalPosition: () => p,
                        initExternalPaddings: () => D,
                        isEventHandled: () => k,
                        isFocused: () => w,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => R,
                    }));
                var a = n(690),
                    r = n(722),
                    s = n(112),
                    i = n(538),
                    o = n(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function k() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const N = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = a.cg;
                function x() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const I = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function D(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            a = t.right,
                            r = t.bottom,
                            s = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${s}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
                    s = 16,
                    i = 32,
                    o = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, a);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = s),
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
                    c = {
                        close(e) {
                            l('popover' === e ? r : i);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(s, { isMouseEvent: !0, on: e });
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
                n.d(t, { cg: () => s });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function s(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += a[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
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
                        const s = a.O.view.addModelObserver(e, n, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                const s = r;
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
                n.d(t, { Sw: () => s.Z, Gr: () => u, Z5: () => o.Z5, B0: () => l, lw: () => i, ry: () => b });
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
                var s = n(358);
                function i(e) {
                    const t = {};
                    if ('object' != typeof e) return e;
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            const a = Object.prototype.toString.call(e[n]);
                            if (a.startsWith('[object CoherentArrayProxy]')) {
                                const a = e[n];
                                t[n] = [];
                                for (let e = 0; e < a.length; e++) t[n].push({ value: i(a[e].value) });
                            } else a.startsWith('[object class BW::WULF::ViewModel') ? (t[n] = i(e[n])) : (t[n] = e[n]);
                        }
                    return t;
                }
                var o = n(613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = n(521),
                    _ = n(138);
                const p = ['args'];
                function v(e, t, n, a, r, s, i) {
                    try {
                        var o = e[s](i),
                            l = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        var s = e.apply(t, n);
                                        function i(e) {
                                            v(s, a, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            v(s, a, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, p);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    E = () => h(l.CLOSE),
                    w = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var y = n(572);
                const k = r.instance,
                    C = {
                        DataTracker: s.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => h(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => h(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), s) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                c = o.x,
                                u = o.y,
                                d = o.width,
                                m = o.height,
                                g = {
                                    x: _.O.view.pxToRem(c) + i.x,
                                    y: _.O.view.pxToRem(u) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            h(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: f(g),
                                on: !0,
                                args: s,
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
                            w(e, E);
                        },
                        handleViewEvent: h,
                        onBindingsReady: b,
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
                        dumpViewModel: i,
                        ClickOutsideManager: k,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = C;
            },
            613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
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
            119: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => Zs,
                        Bar: () => Ks,
                        DefaultScroll: () => Xs,
                        Direction: () => Ls,
                        defaultSettings: () => Ds,
                        useHorizontalScrollApi: () => As,
                    }));
                var r = {};
                (n.r(r), n.d(r, { Area: () => pi, Bar: () => mi, Default: () => _i, useVerticalScrollApi: () => Qs }));
                var s = n(483),
                    i = n.n(s);
                function o(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const l = {
                    playHighlight() {
                        o('highlight');
                    },
                    playClick() {
                        o('play');
                    },
                    playYes() {
                        o('yes1');
                    },
                };
                var c = n(363),
                    u = n.n(c);
                const d = {
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
                let m, g;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(m || (m = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(g || (g = {})));
                const _ = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: a,
                        onMouseEnter: r,
                        onMouseMove: s,
                        onMouseDown: l,
                        onMouseUp: g,
                        onMouseLeave: _,
                        onClick: p,
                        isFocused: v = !1,
                        type: f = m.primary,
                        soundHover: b = 'highlight',
                        soundClick: h = 'play',
                    }) => {
                        const E = (0, c.useRef)(null),
                            w = (0, c.useState)(v),
                            y = w[0],
                            k = w[1],
                            C = (0, c.useState)(!1),
                            S = C[0],
                            N = C[1];
                        return (
                            (0, c.useEffect)(() => {
                                function e(e) {
                                    y && null !== E.current && !E.current.contains(e.target) && k(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [y]),
                            (0, c.useEffect)(() => {
                                k(v);
                            }, [v]),
                            u().createElement(
                                'div',
                                {
                                    ref: E,
                                    className: i()(
                                        d.base,
                                        d[`base__${f}`],
                                        n && d.base__disabled,
                                        t && d[`base__${t}`],
                                        y && d.base__focus,
                                        S && d.base__highlightActive,
                                        a,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== b && o(b), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (g && g(e), N(!1));
                                    },
                                    onMouseDown: function (e) {
                                        n ||
                                            (null !== h && o(h),
                                            l && l(e),
                                            v && (n || (E.current && (E.current.focus(), k(!0)))),
                                            N(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (_ && _(e), N(!1));
                                    },
                                    onClick: function (e) {
                                        n || (p && p(e));
                                    },
                                },
                                f !== m.ghost &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: d.back }),
                                        u().createElement('span', { className: d.texture }),
                                    ),
                                u().createElement(
                                    'span',
                                    { className: i()(d.state, d.state__default) },
                                    u().createElement('span', { className: d.stateDisabled }),
                                    u().createElement('span', { className: d.stateHighlightHover }),
                                    u().createElement('span', { className: d.stateHighlightActive }),
                                ),
                                u().createElement(
                                    'span',
                                    { className: d.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    p = {
                        base: 'ErrorBoundary_base_46',
                        message: 'ErrorBoundary_message_33',
                        heading: 'ErrorBoundary_heading_ba',
                        button: 'ErrorBoundary_button_74',
                        errorStack: 'ErrorBoundary_errorStack_fe',
                        errorInfo: 'ErrorBoundary_errorInfo_f1',
                    };
                class v extends u().Component {
                    constructor(e) {
                        (super(e),
                            (this.clearError = () => {
                                this.setState({ error: void 0 });
                            }),
                            (this.state = { error: void 0 }));
                    }
                    static getDerivedStateFromError(e) {
                        return { error: e };
                    }
                    render() {
                        const e = this.state.error,
                            t = this.props,
                            n = t.errorMessage,
                            a = void 0 === n ? R.strings.dogtags.error.message() : n,
                            r = t.retryLabel,
                            s = void 0 === r ? R.strings.dogtags.error.retry() : r;
                        return e
                            ? u().createElement(
                                  'div',
                                  { className: p.base },
                                  u().createElement(
                                      'div',
                                      { className: p.message },
                                      u().createElement('div', { className: p.heading }, a),
                                      u().createElement(_, { mixClass: p.retry, onClick: this.clearError }, s),
                                  ),
                              )
                            : this.props.children;
                    }
                }
                const f = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var b = n(138);
                const h = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function w(e = b.O.client.getSize('rem')) {
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
                                s = Math.min(a, r);
                            return {
                                extraLarge: s === n.extraLarge.weight,
                                large: s === n.large.weight,
                                medium: s === n.medium.weight,
                                small: s === n.small.weight,
                                extraSmall: s === n.extraSmall.weight,
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
                        })(t, n, h),
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
                })(E || (E = {}));
                const y = w(),
                    k = (0, c.createContext)(y),
                    C = ['children'];
                (0, c.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, C);
                    const a = (0, c.useContext)(k),
                        r = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        o = a.small,
                        l = a.extraSmall,
                        u = a.extraLargeWidth,
                        d = a.largeWidth,
                        m = a.mediumWidth,
                        g = a.smallWidth,
                        _ = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        v = a.largeHeight,
                        b = a.mediumHeight,
                        h = a.smallHeight,
                        E = a.extraSmallHeight,
                        w = { extraLarge: p, large: v, medium: b, small: h, extraSmall: E };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && s) return t;
                        if (n.medium && i) return t;
                        if (n.small && o) return t;
                        if (n.extraSmall && l) return t;
                    } else {
                        if (n.extraLargeWidth && u) return f(t, n, w);
                        if (n.largeWidth && d) return f(t, n, w);
                        if (n.mediumWidth && m) return f(t, n, w);
                        if (n.smallWidth && g) return f(t, n, w);
                        if (n.extraSmallWidth && _) return f(t, n, w);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && b) return t;
                            if (n.smallHeight && h) return t;
                            if (n.extraSmallHeight && E) return t;
                        }
                    }
                    return null;
                });
                const S = ({ children: e }) => {
                    const t = (0, c.useState)(w),
                        n = t[0],
                        a = t[1],
                        r = (0, c.useState)(!1),
                        s = r[0],
                        i = r[1];
                    return (
                        (0, c.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = b.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : w(t);
                                });
                            }
                            return (
                                e(),
                                i(!0),
                                b.O.client.events.on('clientResized', e),
                                b.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (b.O.client.events.off('clientResized', e),
                                        b.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        u().createElement(k.Provider, { value: n }, s && e)
                    );
                };
                var N = n(926),
                    T = n.n(N);
                let x, I, O;
                (!(function (e) {
                    ((e[(e.ExtraSmall = h.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = h.small.width)] = 'Small'),
                        (e[(e.Medium = h.medium.width)] = 'Medium'),
                        (e[(e.Large = h.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = h.extraLarge.width)] = 'ExtraLarge'));
                })(x || (x = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = h.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = h.small.width)] = 'Small'),
                            (e[(e.Medium = h.medium.width)] = 'Medium'),
                            (e[(e.Large = h.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = h.extraLarge.width)] = 'ExtraLarge'));
                    })(I || (I = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = h.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = h.small.height)] = 'Small'),
                            (e[(e.Medium = h.medium.height)] = 'Medium'),
                            (e[(e.Large = h.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = h.extraLarge.height)] = 'ExtraLarge'));
                    })(O || (O = {})));
                const L = () => {
                        const e = (0, c.useContext)(k),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return x.ExtraLarge;
                                    case e.large:
                                        return x.Large;
                                    case e.medium:
                                        return x.Medium;
                                    case e.small:
                                        return x.Small;
                                    case e.extraSmall:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return I.ExtraLarge;
                                    case e.largeWidth:
                                        return I.Large;
                                    case e.mediumWidth:
                                        return I.Medium;
                                    case e.smallWidth:
                                        return I.Small;
                                    case e.extraSmallWidth:
                                        return I.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), I.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return O.ExtraLarge;
                                    case e.largeHeight:
                                        return O.Large;
                                    case e.mediumHeight:
                                        return O.Medium;
                                    case e.smallHeight:
                                        return O.Small;
                                    case e.extraSmallHeight:
                                        return O.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), O.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    D = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const A = {
                        [I.ExtraSmall]: '',
                        [I.Small]: T().SMALL_WIDTH,
                        [I.Medium]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH}`,
                        [I.Large]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH}`,
                        [I.ExtraLarge]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH} ${T().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [O.ExtraSmall]: '',
                        [O.Small]: T().SMALL_HEIGHT,
                        [O.Medium]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT}`,
                        [O.Large]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT} ${T().EXTRA_LARGE_HEIGHT}`,
                    },
                    B = {
                        [x.ExtraSmall]: '',
                        [x.Small]: T().SMALL,
                        [x.Medium]: `${T().SMALL} ${T().MEDIUM}`,
                        [x.Large]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE}`,
                        [x.ExtraLarge]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE} ${T().EXTRA_LARGE}`,
                    },
                    H = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, D);
                        const r = L(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            l = r.mediaSize;
                        return u().createElement('div', M({ className: i()(n, A[s], P[o], B[l]) }, a), t);
                    },
                    $ = ['children'];
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, $);
                    return u().createElement(S, null, u().createElement(H, n, t));
                };
                var z = n(533),
                    j = n.n(z),
                    F = n(6);
                const G = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        ('function' == typeof n && n(), clearTimeout(a));
                    };
                };
                var V = n(521),
                    U = n(916);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = V.n.NONE, t = q, n = !1, a = !1) {
                    (0, c.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && b.O.view.isEventHandled()) return;
                                (b.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, a]);
                }
                const Y = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            a = R.invalid('resId'),
                            r = '';
                        var s;
                        t &&
                            ((r = (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) || ''),
                            (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id));
                        return { callerUrl: r, caller: n, stack: t, resId: a };
                    },
                    X = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Z = (e) => {
                        const t = (0, c.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    J = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ee = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = X(`${e}.${n}`, window);
                                return Q(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    te = (e) => {
                        const t = ((e) => {
                                const t = Y(),
                                    n = t.caller,
                                    a = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: J(r, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const r = X(J(n, `${t}.${a}`), window);
                                    return Q(r) ? (e.push(r.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ne = () => (window.injected || (window.injected = new Map()), window.injected);
                const ae = U.Sw.instance;
                let re;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(re || (re = {}));
                const se = (e = 'model', t = re.Deep) => {
                        const n = (0, c.useState)(0),
                            a = (n[0], n[1]),
                            r = (0, c.useMemo)(() => Y(), []),
                            s = r.callerUrl,
                            i = r.caller,
                            o = r.resId,
                            l = (0, c.useMemo)(() => {
                                const t = (function (e) {
                                    return ne().has(e);
                                })(s.replace('.js', '.html'));
                                return window.__feature && window.__feature !== i && !t ? `subViews.${i}.${e}` : e;
                            }, [s, i, e]),
                            u = (0, c.useState)(() =>
                                ((e) => {
                                    const t = X(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return Q(t) ? t.value : t;
                                })(ee(l)),
                            ),
                            d = u[0],
                            m = u[1],
                            g = (0, c.useRef)(-1);
                        return (
                            Z(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? re.Deep : re.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== re.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === re.Deep
                                                ? (e === d && a((e) => e + 1), m(e))
                                                : m(Object.assign([], e));
                                        },
                                        r = te(e);
                                    g.current = ae.addCallback(r, n, o, t === re.Deep);
                                }
                            }),
                            (0, c.useEffect)(() => {
                                if (t !== re.None)
                                    return () => {
                                        ae.removeCallback(g.current, o);
                                    };
                            }, [o, t]),
                            d
                        );
                    },
                    ie = ['children', 'top', 'bottom'];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const le = (e) => {
                    let t = e.children,
                        n = e.top,
                        a = e.bottom,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, ie);
                    return u().createElement(
                        'div',
                        oe({}, r, { style: Object.assign({ marginTop: `${n}rem`, marginBottom: `${a}rem` }, r.style) }),
                        t,
                    );
                };
                var ce = n(30);
                const ue = 'Onboarding_base_56',
                    de = 'Onboarding_header_61',
                    me = 'Onboarding_center_c4',
                    ge = 'Onboarding_closeBtn_61',
                    _e = 'Onboarding_body_17',
                    pe = 'Onboarding_overlayReveal_0a',
                    ve = 'Onboarding_overlay_30',
                    fe = 'Onboarding_playBtnWrapper_84',
                    be = 'Onboarding_playBtn_1e',
                    he = 'Onboarding_footer_d2',
                    Ee = 'Onboarding_pagination_79',
                    we = 'Onboarding_paginationBtn_e6',
                    ye = 'Onboarding_selected_2d',
                    ke = 'Onboarding_replay_39',
                    Ce = 'Onboarding_replayIcon_f1',
                    Se = 'Onboarding_overlayInnerWrapper_e7',
                    Ne = 'Onboarding_overlayTitle_95',
                    Te = 'Onboarding_overlayText_7e',
                    xe = {
                        slideOut: 'Reveal_slideOut_22',
                        slideIn: 'Reveal_slideIn_cb',
                        slideLeftOut: 'Reveal_slideLeftOut_d4',
                        slideLeftIn: 'Reveal_slideLeftIn_be',
                        slideRightOut: 'Reveal_slideRightOut_16',
                        slideRightIn: 'Reveal_slideRightIn_17',
                        fadeOut: 'Reveal_fadeOut_74',
                        fadeIn: 'Reveal_fadeIn_a3',
                        bg_fadeOut: 'Reveal_bg_fadeOut_a9',
                        fadeOutBlur: 'Reveal_fadeOutBlur_b1',
                        bg_fadeIn: 'Reveal_bg_fadeIn_bc',
                        fadeInBlur: 'Reveal_fadeInBlur_66',
                        fadeDownIn: 'Reveal_fadeDownIn_29',
                        fadeInUp: 'Reveal_fadeInUp_fe',
                        fadeDownOut: 'Reveal_fadeDownOut_8a',
                        fadeInDown: 'Reveal_fadeInDown_38',
                    },
                    Ie = (0, c.memo)(
                        ({
                            children: e,
                            type: t = 'slide',
                            duration: n = 200,
                            className: a,
                            isOut: r = !1,
                            delayIn: s = '0ms',
                            delayOut: o = '0ms',
                            isDisabled: l = !1,
                            onAnimationComplete: d,
                        }) => {
                            const m = (0, c.useMemo)(
                                    () => ({ animationDelay: r ? o : s, animationDuration: `${n}ms` }),
                                    [r, s, o, n],
                                ),
                                g = i()(xe[`${t}${r ? 'Out' : 'In'}`], a);
                            return l
                                ? u().createElement('div', { className: a }, e)
                                : u().createElement('div', { onAnimationEnd: d, className: g, style: m }, e);
                        },
                    ),
                    Oe = {
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
                    Re = [
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
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const De = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        a = e.goto,
                        r = e.classNames,
                        s = e.onMouseEnter,
                        o = e.onMouseLeave,
                        l = e.onMouseDown,
                        d = e.onMouseUp,
                        m = e.side,
                        g = void 0 === m ? 'left' : m,
                        _ = e.type,
                        p = void 0 === _ ? 'back' : _,
                        v = e.soundHover,
                        f = void 0 === v ? 'highlight' : v,
                        h = e.soundClick,
                        E = void 0 === h ? 'play' : h,
                        w = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Re);
                    const y = (0, c.useCallback)(
                            (e) => {
                                (null == s || s(e), b.O.sound.play.sound(f));
                            },
                            [s, f],
                        ),
                        k = (0, c.useCallback)(
                            (e) => {
                                null == o || o(e);
                            },
                            [o],
                        ),
                        C = (0, c.useCallback)(
                            (e) => {
                                (null == l || l(e), b.O.sound.play.sound(E));
                            },
                            [l, E],
                        ),
                        S = (0, c.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        );
                    return u().createElement(
                        'div',
                        Le(
                            {
                                className: i()(
                                    Oe.base,
                                    Oe[`base__${p}`],
                                    Oe[`base__${g}`],
                                    null == r ? void 0 : r.base,
                                ),
                                onMouseEnter: y,
                                onMouseLeave: k,
                                onMouseDown: C,
                                onMouseUp: S,
                                onClick: n,
                            },
                            w,
                        ),
                        'info' !== p && u().createElement('div', { className: Oe.shine }),
                        u().createElement(
                            'div',
                            {
                                className: i()(
                                    Oe.icon,
                                    Oe[`icon__${p}`],
                                    Oe[`icon__${g}`],
                                    null == r ? void 0 : r.icon,
                                ),
                            },
                            u().createElement('div', { className: i()(Oe.glow, null == r ? void 0 : r.glow) }),
                        ),
                        u().createElement(
                            'div',
                            { className: i()(Oe.caption, Oe[`caption__${p}`], null == r ? void 0 : r.caption) },
                            t,
                        ),
                        a && u().createElement('div', { className: i()(Oe.goto, null == r ? void 0 : r.goto) }, a),
                    );
                };
                var Me;
                !(function (e) {
                    ((e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second'));
                })(Me || (Me = {}));
                const Ae = R.strings.dogtags.onboarding.header.title(),
                    Pe = R.strings.dogtags.onboarding.header.close(),
                    Be = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    He = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    $e = R.strings.dogtags.onboarding.overlay.replay(),
                    We = (0, c.memo)(({ onClose: e }) => {
                        const t = se('model', re.None).onPlayVideo,
                            n = (0, c.useState)(!1),
                            a = n[0],
                            r = n[1],
                            s = (0, c.useState)(!1),
                            l = s[0],
                            d = s[1],
                            m = (0, c.useState)(Me.First),
                            g = m[0],
                            p = m[1],
                            v = (e) => () => (o(R.sounds.play()), p(e)),
                            f = (0, c.useCallback)((t) => (g === Me.First ? p(Me.Second) : e(t)), [g, e]),
                            b = (0, c.useCallback)(
                                () => (
                                    o(R.sounds.play()),
                                    g === Me.First
                                        ? (setTimeout(() => r(!0), 500), t({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => d(!0), 500), t({ urlKey: 'onboardingVideo2' }))
                                ),
                                [g, t],
                            ),
                            h = (0, c.useCallback)(() => o(R.sounds.highlight()), []),
                            E = ((w = a),
                            (y = l),
                            {
                                [Me.First]: {
                                    title: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [Me.Second]: {
                                    title: y
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.title(),
                                    text: y
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.affirmative(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_2(),
                                },
                            })[g];
                        var w, y;
                        const k = ((e) => ({ backgroundImage: `url(${e.background})` }))(E),
                            C = i()(we, g === Me.First && ye),
                            S = i()(we, g === Me.Second && ye);
                        return u().createElement(
                            'div',
                            { className: ue },
                            u().createElement(
                                'div',
                                { className: de },
                                u().createElement('div', { className: me }, Ae),
                                u().createElement(
                                    'div',
                                    { className: ge },
                                    u().createElement(De, {
                                        caption: Pe,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: h,
                                    }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: _e, style: k },
                                u().createElement(
                                    Ie,
                                    { type: 'fade', className: pe },
                                    u().createElement(
                                        'div',
                                        { className: ve },
                                        ((!a && g === Me.First) || (!l && g === Me.Second)) &&
                                            u().createElement(
                                                'div',
                                                { className: fe, onClick: b, onMouseEnter: h },
                                                u().createElement('div', { className: be }),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: Se },
                                            u().createElement('div', { className: Ne }, E.title),
                                            u().createElement('div', { className: Te }, E.text),
                                            ((g === Me.First && a) || (g === Me.Second && l)) &&
                                                u().createElement(
                                                    _,
                                                    { type: 'main', size: 'medium', onClick: f, onMouseEnter: h },
                                                    E.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: he },
                                ((g === Me.First && a) || (g === Me.Second && l)) &&
                                    u().createElement(
                                        'div',
                                        { className: ke, onClick: b, onMouseEnter: h },
                                        u().createElement('div', { className: Ce }),
                                        $e,
                                    ),
                                u().createElement(
                                    'div',
                                    { className: Ee },
                                    u().createElement(
                                        'div',
                                        { className: C, onClick: v(Me.First), onMouseEnter: h },
                                        Be,
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: S, onClick: v(Me.Second), onMouseEnter: h },
                                        He,
                                    ),
                                ),
                            ),
                        );
                    });
                var ze = n(664);
                const je = 'Flame_base_90',
                    Fe = 'Flame_slides_58',
                    Ge = 'Flame_frame_29',
                    Ve = (0, c.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, n) => {
                                    const a = `flame_${`0${n}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return u().createElement(
                            'div',
                            { className: i()(je, e), 'data-testid': 'Flame' },
                            u().createElement(
                                'div',
                                { className: Fe },
                                t.map((e) => u().createElement('img', { key: e, src: e, className: Ge })),
                            ),
                        );
                    });
                let Ue, qe, Ke, Ye, Xe;
                (!(function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(Ue || (Ue = {})),
                    (function (e) {
                        ((e[(e.Equipped = 0)] = 'Equipped'),
                            (e[(e.Locked = 1)] = 'Locked'),
                            (e[(e.Open = 2)] = 'Open'));
                    })(qe || (qe = {})),
                    (function (e) {
                        ((e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all'));
                    })(Ke || (Ke = {})),
                    (function (e) {
                        ((e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base'));
                    })(Ye || (Ye = {})),
                    (function (e) {
                        ((e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season'));
                    })(Xe || (Xe = {})));
                const Ze = {
                        [Xe.Dedication]: [Ye.Dedication],
                        [Xe.Triumph]: [Ye.Triumph],
                        [Xe.Season]: [Ye.Skill, Ye.RankedSkill],
                    },
                    Qe = 10;
                let Je;
                function et(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return tt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return tt(e, t);
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
                function tt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                !(function (e) {
                    ((e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE'));
                })(Je || (Je = {}));
                const nt = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    at = (e, t) => {
                        const n = e.id;
                        return n === t.background.id || n === t.engraving.id;
                    },
                    rt = R.images.gui.maps.icons.dogtags,
                    st = 'R.images.gui.maps.icons.dogtags',
                    it = R.strings.dogtags.component,
                    ot = 'R.strings.dogtags.component',
                    lt = (e, t, n, a = 0, r = 'big', s = rt, i = it) => {
                        s &&
                            !(r in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${st}`,
                            );
                        const o = r in s ? s[r] : void 0,
                            l = `${t}s`;
                        o &&
                            !(l in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[st, r].join('.')}`,
                            );
                        const c = o && l in o ? o[l] : void 0,
                            u = `${t}_${e}_${t === Ke.Engraving ? a : '0'}`;
                        c &&
                            !(u in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${u}" does not exist in ${[st, r, l].join('.')}`,
                            );
                        const d = c && u in c ? c[u]() : s.big.backgrounds.background_66_0();
                        i &&
                            !(t in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${ot}`,
                            );
                        const m = t in i ? i[t] : void 0;
                        m &&
                            !(n in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[ot, t].join('.')}`,
                            );
                        const g = m && n in m ? m[n] : void 0,
                            _ = `c_${e}`;
                        g &&
                            !(_ in g) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${_}" does not exist in ${[ot, t, n].join('.')}`,
                            );
                        return { image: d, strings: g && _ in g ? g[_] : void 0 };
                    },
                    ct = (e) => e.filter((e) => e.value.items.length > 0),
                    ut = (e, t) => {
                        const n = ((e) => Object.keys(e).filter((t) => e[t]))(t),
                            a = n.reduce((e, t) => (e.push(...Ze[t]), e), []);
                        return ct(
                            e.map((e) => ({
                                value: Object.assign({}, e.value, {
                                    items: e.value.items.filter((e) => a.includes(e.value.purpose)),
                                }),
                            })),
                        );
                    },
                    dt = { [Ue.Engraving]: 'engravingGrid', [Ue.Background]: 'backgroundGrid' },
                    mt = { [Ue.Engraving]: 'engraving', [Ue.Background]: 'background' },
                    gt = (e, t) => {
                        for (var n, a = et(e.values()); !(n = a()).done; ) {
                            for (var r, s = et(n.value.value.items.values()); !(r = s()).done; ) {
                                const e = r.value;
                                if (e.value.id === t) return e.value;
                            }
                        }
                    },
                    _t = (e) => e.reduce((e, t) => e + t.value.items.length, 0),
                    pt = (e, t = Je.NUMBER) => {
                        const n = U.Z5.getRealFormat(e, U.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                        return t === Je.PERCENTAGE ? `${n} %` : n;
                    },
                    vt = {
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
                    },
                    ft = R.images.gui.maps.icons.dogtags.big.digits,
                    bt = (e, t = ft) => {
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
                    ht = (e) => ({ backgroundImage: `url(${e})` });
                let Et;
                !(function (e) {
                    ((e.x300 = 'x300'), (e.x400 = 'x400'));
                })(Et || (Et = {}));
                const wt = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(wt))
                    .filter((e) => '$' !== e[0])
                    .map((e) => wt[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const yt = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        ((e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex'));
                    },
                    kt = {
                        appear: vt.flameAnimation__appear,
                        appearActive: vt.flameAnimation__appearActive,
                        appearDone: vt.flameAnimation__appearDone,
                        enter: vt.flameAnimation__enter,
                        enterActive: vt.flameAnimation__enterActive,
                        enterDone: vt.flameAnimation__enterDone,
                        exit: vt.flameAnimation__exit,
                        exitActive: vt.flameAnimation__exitActive,
                        exitDone: vt.flameAnimation__exitDone,
                    },
                    Ct = ({
                        playerName: e,
                        clanTag: t,
                        background: n,
                        engraving: a,
                        isHighlighted: r,
                        size: s = Et.x300,
                    }) => {
                        const l = n.currentGrade,
                            d = a.currentGrade,
                            m = lt(n.id, Ke.Background, n.purpose || 'default', l || 0, 'big'),
                            g = lt(a.id, Ke.Engraving, a.purpose || 'dedication', d || 0, 'big'),
                            _ = a.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const a = n % 2 == 1;
                                return (e.push(...(a ? [t] : t.split(''))), e);
                            }, []);
                        const p = g.strings ? g.strings.title() : null,
                            v = ht(m.image),
                            f = ht(g.image),
                            b = ((e) => {
                                const t = (0, c.useRef)(!1);
                                return (
                                    (0, c.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(r);
                        return (
                            (0, c.useEffect)(() => {
                                r && !b ? o(R.sounds.dt_flame_start()) : b && !r && o(R.sounds.dt_flame_stop());
                            }, [r, b]),
                            u().createElement(
                                'div',
                                { className: i()(vt.base, vt[`base__${s}`]) },
                                u().createElement(
                                    ze.Z,
                                    {
                                        in: r,
                                        timeout: 400,
                                        className: vt.flameAnimation,
                                        classNames: kt,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    u().createElement(Ve, null),
                                ),
                                u().createElement(
                                    'div',
                                    { className: vt.dogtags_top },
                                    u().createElement('div', { className: vt.background, style: v }),
                                    u().createElement('div', { className: vt.shadow }),
                                    u().createElement('div', { className: vt.playerInfoShadow }),
                                    u().createElement('div', { className: vt.name }, e),
                                    u().createElement('div', { className: vt.clan }, t),
                                    u().createElement('div', { className: vt.engraving, style: f }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: vt.dogtags_bottom },
                                    u().createElement(
                                        'div',
                                        { className: vt.trackerInfoWrapper },
                                        u().createElement('div', { className: vt.trackerText }, p),
                                        u().createElement(
                                            'div',
                                            { className: vt.trackerValue },
                                            _.map((e, t) => {
                                                if (' ' === e)
                                                    return u().createElement('div', {
                                                        key: e + t,
                                                        className: vt.spaceDigit,
                                                    });
                                                const n = bt(e, wt);
                                                return u().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: yt,
                                                    className: vt.trackerDigit,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    St = {
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
                            const t = Math.sqrt,
                                n = Math.pow;
                            return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const t = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                        },
                        bezier: (e, t, n, a) => (r) =>
                            (1 - r) * (1 - r) * (1 - r) * e +
                            3 * (1 - r) * (1 - r) * r * t +
                            3 * (1 - r) * r * r * n +
                            r * r * r * a,
                    };
                let Nt;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(Nt || (Nt = {}));
                let Tt;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
                })(Tt || (Tt = {}));
                const xt = 'metrics',
                    It = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    Ot = (e, t) => {
                        const n = (0, c.useCallback)(
                            (n, a = Nt.Info, r) => {
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
                    Rt = (e) => {
                        const t = Ot(e, xt),
                            n = (0, c.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, It(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    Lt = 'dog_tags';
                let Dt, Mt, At, Pt;
                (!(function (e) {
                    ((e.Click = 'click'), (e.Display = 'display'));
                })(Dt || (Dt = {})),
                    (function (e) {
                        ((e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog'));
                    })(Mt || (Mt = {})),
                    (function (e) {
                        ((e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button'));
                    })(At || (At = {})),
                    (function (e) {
                        ((e.Lock = 'lock'), (e.Unlock = 'unlock'));
                    })(Pt || (Pt = {})));
                const Bt = { engraving: At.CancelEngraving, background: At.CancelBackground, all: At.DiscardChanges },
                    Ht = () => {
                        const e = Rt(Lt);
                        return (t) => {
                            e({ action: Dt.Click, parentScreen: Mt.DogTags, item: Bt[t] });
                        };
                    },
                    $t = {
                        base: 'Customization_base_4e',
                        status: 'Customization_status_c1',
                        checkIcon: 'Customization_checkIcon_bf',
                        allEquipped: 'Customization_allEquipped_ed',
                        buttonsWrapper: 'Customization_buttonsWrapper_6d',
                        buttonWrapper: 'Customization_buttonWrapper_c3',
                        button: 'Customization_button_c3',
                    },
                    Wt = ({ text: e, isEquippingDisabled: t, onEquip: n, classNames: a }) =>
                        u().createElement(
                            'div',
                            { className: null == a ? void 0 : a.base },
                            u().createElement(
                                _,
                                {
                                    type: m.primary,
                                    size: g.medium,
                                    mixClass: null == a ? void 0 : a.button,
                                    onClick: () => {
                                        t || (n(), o(R.sounds.ach_dog_tag_equip()));
                                    },
                                    disabled: t,
                                },
                                e,
                            ),
                        ),
                    zt = 'Selection_base_7b',
                    jt = 'Selection_selection_24',
                    Ft = 'Selection_resetBtn_1b',
                    Gt = R.strings.dogtags.customization,
                    Vt = ({ selectedItems: e, isBackgroundEquipped: t, isEngravingEquipped: n, onItemReset: a }) => {
                        const r = Ht(),
                            s = (e) => () => {
                                (o(R.sounds.dt_locked_reset_button()), a(e), r(e));
                            };
                        return u().createElement(
                            'div',
                            { className: zt },
                            !t &&
                                e.background.isLocked &&
                                u().createElement(
                                    'div',
                                    { className: jt, onClick: s(Ke.Background), onMouseEnter: l.playHighlight },
                                    Gt.pills.background(),
                                    u().createElement('div', { className: Ft }),
                                ),
                            !n &&
                                e.engraving.isLocked &&
                                u().createElement(
                                    'div',
                                    { className: jt, onClick: s(Ke.Engraving), onMouseEnter: l.playHighlight },
                                    Gt.pills.engraving(),
                                    u().createElement('div', { className: Ft }),
                                ),
                        );
                    },
                    Ut = R.strings.dogtags.customization;
                let qt;
                !(function (e) {
                    ((e.Equipped = 'equipped'),
                        (e.Unequipped = 'unequipped'),
                        (e.AnimatedEquipped = 'animatedEquipped'));
                })(qt || (qt = {}));
                const Kt = { base: $t.buttonWrapper, button: $t.button },
                    Yt = (0, c.memo)(
                        ({
                            selectedItems: e,
                            equippedItems: t,
                            onItemReset: n,
                            isAnimatedDogTagSelected: a,
                            onEquip: r,
                        }) => {
                            const s = e.engraving.id === t.engraving.id,
                                o = e.background.id === t.background.id,
                                l = ((e, t, n) => {
                                    switch (!0) {
                                        case e:
                                            return qt.AnimatedEquipped;
                                        case t && n:
                                            return qt.Equipped;
                                        default:
                                            return qt.Unequipped;
                                    }
                                })(a, o, s),
                                c = (0, ce.useTransition)(l, {
                                    initial: { transform: 'translateY(0rem)', opacity: 1 },
                                    from: { transform: 'translateY(-20rem)', opacity: 0 },
                                    enter: { transform: 'translateY(0rem)', opacity: 1 },
                                    leave: { transform: 'translateY(20rem)', opacity: 0 },
                                    config: { duration: 300, easing: St.easeOutCubic },
                                }),
                                d = L().mediaSize >= x.Large ? g.medium : g.small,
                                p = Ht(),
                                v = (() => {
                                    const e = Rt(Lt);
                                    return () => {
                                        e({ action: Dt.Click, parentScreen: Mt.DogTags, item: At.ConfirmChanges });
                                    };
                                })(),
                                f = () => {
                                    (n(Ke.Background), n(Ke.Engraving), p(Ke.All));
                                },
                                b = () => {
                                    (v(), r());
                                },
                                h = e.engraving.isLocked || e.background.isLocked;
                            return u().createElement(
                                'div',
                                { className: i()($t.base, $t[`base__${l}`]) },
                                c((t, a) =>
                                    u().createElement(
                                        ce.animated.div,
                                        { className: $t.status, style: t },
                                        (() => {
                                            switch (a) {
                                                case qt.AnimatedEquipped:
                                                    return u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement(Wt, {
                                                            text: Ut.button.equip(),
                                                            isEquippingDisabled: h,
                                                            onEquip: b,
                                                            classNames: Kt,
                                                        }),
                                                        u().createElement(Vt, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: o,
                                                            isEngravingEquipped: s,
                                                            onItemReset: n,
                                                        }),
                                                    );
                                                case qt.Equipped:
                                                    return u().createElement(
                                                        'div',
                                                        { className: $t.allEquipped },
                                                        u().createElement('div', { className: $t.checkIcon }),
                                                        Ut.equipped(),
                                                    );
                                                case qt.Unequipped:
                                                    return u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement(
                                                            'div',
                                                            { className: $t.buttonsWrapper },
                                                            u().createElement(Wt, {
                                                                text: Ut.button.equipNew(),
                                                                isEquippingDisabled: h,
                                                                onEquip: b,
                                                                classNames: Kt,
                                                            }),
                                                            u().createElement(
                                                                'div',
                                                                { className: $t.buttonWrapper },
                                                                u().createElement(
                                                                    _,
                                                                    {
                                                                        type: m.secondary,
                                                                        size: d,
                                                                        onClick: f,
                                                                        mixClass: $t.button,
                                                                    },
                                                                    Ut.button.discard(),
                                                                ),
                                                            ),
                                                        ),
                                                        u().createElement(Vt, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: o,
                                                            isEngravingEquipped: s,
                                                            onItemReset: n,
                                                        }),
                                                    );
                                            }
                                        })(),
                                    ),
                                ),
                            );
                        },
                    ),
                    Xt = 'DogtagsInfo_base_68',
                    Zt = 'DogtagsInfo_title_02',
                    Qt = 'DogtagsInfo_progressBarWrapper_48',
                    Jt = 'DogtagsInfo_currentLevel_14',
                    en = 'DogtagsInfo_nextLevel_53',
                    tn = 'DogtagsInfo_valuesWrapper_ac',
                    nn = 'DogtagsInfo_valuesWrapper_inner_55',
                    an = 'DogtagsInfo_valuesWrapper__locked_59',
                    rn = 'DogtagsInfo_currentValue_25',
                    sn = 'DogtagsInfo_totalValue_47',
                    on = 'DogtagsInfo_valuesSeparator_db',
                    ln = 'DogtagsInfo_medalInfo_0d',
                    cn = 'DogtagsInfo_skillInfo_13',
                    un = 'DogtagsInfo_skillInfoIcon_f9',
                    dn = 'DogtagsInfo_shieldLevelWrapper_fa',
                    mn = 'DogtagsInfo_single_86',
                    gn = 'DogtagsInfo_currentShieldWrapper_b0',
                    _n = 'DogtagsInfo_nextShieldWrapper_7e',
                    pn = 'DogtagsInfo_currentLevelShield_60',
                    vn = 'DogtagsInfo_currentLevelValue_d5',
                    fn = 'DogtagsInfo_nextLevelValue_d5',
                    bn = 'DogtagsInfo_arrowLock_6a',
                    hn = 'DogtagsInfo_nextLevelShield_22',
                    En = 'DogtagsInfo_infoSeparator_d7',
                    wn = 'DogtagsInfo_lockedText_9d',
                    yn = 'DogtagsInfo_lockedIcon_04',
                    kn = 'DogtagsInfo_skillDescriptionWrapper_dc',
                    Cn = 'DogtagsInfo_skillDescription_94',
                    Sn = 'DogtagsInfo_skillInfoBorderTop_62',
                    Nn = 'DogtagsInfo_skillInfoBorderBottom_50',
                    Tn = (0, c.memo)(({ infoTitle: e, infoText: t, isLocked: n, unlockText: a }) =>
                        u().createElement(
                            'div',
                            { className: Xt },
                            u().createElement('div', { className: Zt }, e),
                            u().createElement('div', { className: ln }, t),
                            n &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: En }),
                                    u().createElement(
                                        'div',
                                        { className: wn },
                                        u().createElement('div', { className: yn }),
                                        a,
                                    ),
                                ),
                        ),
                    ),
                    xn = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let In, On;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(In || (In = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(On || (On = {})));
                const Rn = ({ size: e = In.Default }) => {
                        const t = i()(xn.background, xn[`background__${e}`]);
                        return u().createElement('div', { className: t });
                    },
                    Ln = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Dn = ({ size: e }) => {
                        const t = i()(Ln.base, Ln[`base__${e}`]);
                        return u().createElement('div', { className: t });
                    },
                    Mn = {
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
                    An = (0, c.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const o = i()(
                                    Mn.base,
                                    Mn[`base__${e}`],
                                    n && Mn.base__disabled,
                                    r && Mn.base__finished,
                                    s && Mn.base__withoutBounce,
                                ),
                                l = !n && !r;
                            return u().createElement(
                                'div',
                                { className: o, style: a, ref: t },
                                u().createElement('div', { className: Mn.pattern }),
                                u().createElement('div', { className: Mn.gradient }),
                                l && u().createElement(Dn, { size: e }),
                            );
                        },
                    );
                let Pn, Bn;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Pn || (Pn = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Bn || (Bn = {})));
                const Hn = 'ProgressBarDeltaGrow_base_7e',
                    $n = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Wn = 'ProgressBarDeltaGrow_glow_68',
                    zn = (e) => (e ? { left: 0 } : { right: 0 }),
                    jn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Fn = (e) => ({ transitionDuration: `${e}ms` }),
                    Gn = (0, c.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: d,
                        }) => {
                            const m = s < a,
                                g = (0, c.useState)(Pn.Idle),
                                _ = g[0],
                                p = g[1],
                                v = _ === Pn.End,
                                f = _ === Pn.Idle,
                                b = _ === Pn.Grow,
                                h = _ === Pn.Shrink,
                                E = (0, c.useCallback)(
                                    (e) => {
                                        (p(e), l && l(e));
                                    },
                                    [l],
                                ),
                                w = (0, c.useCallback)(
                                    (e, t) =>
                                        G(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, c.useEffect)(() => {
                                if (!n)
                                    return f
                                        ? w(Pn.Grow, t)
                                        : b
                                          ? w(Pn.Shrink, e)
                                          : h
                                            ? w(Pn.End, e)
                                            : void (v && o && o());
                            }, [w, n, v, b, f, h, o, t, e]);
                            const y = (0, c.useMemo)(() => Object.assign({ width: '100%' }, Fn(e), zn(m)), [m, e]),
                                k = (0, c.useMemo)(() => Object.assign({ width: '0%' }, Fn(e), zn(m)), [m, e]),
                                C = (0, c.useMemo)(() => Object.assign({ width: '0%' }, jn(m, a), Fn(e)), [a, m, e]),
                                S = (0, c.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, jn(m, a), Fn(e)),
                                    [a, m, s, e],
                                );
                            if (v) return null;
                            const N = i()(Hn, d, m && 0 === s && $n);
                            return u().createElement(
                                'div',
                                { style: f ? C : S, className: N },
                                u().createElement(
                                    'div',
                                    { style: h ? k : y, className: Wn },
                                    u().createElement(Dn, { size: r }),
                                ),
                            );
                        },
                    ),
                    Vn = (0, c.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const d = e < n,
                                m = (0, c.useState)(!1),
                                g = m[0],
                                _ = m[1],
                                p = (0, c.useCallback)(
                                    (e) => {
                                        (e === Pn.Shrink && _(!0), l && l(e));
                                    },
                                    [l],
                                ),
                                v = (0, c.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                f = (0, c.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(An, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: g ? f : v,
                                }),
                                n >= 0 &&
                                    u().createElement(Gn, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: i.freezed,
                                        onEndAnimation: o,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Un = 'ProgressBarDeltaSimple_base_6c',
                    qn = 'ProgressBarDeltaSimple_delta_99',
                    Kn = (0, c.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                        }) => {
                            const l = s < a,
                                d = (0, c.useState)(Bn.Idle),
                                m = d[0],
                                g = d[1],
                                _ = m === Bn.In,
                                p = m === Bn.End,
                                v = m === Bn.Idle,
                                f = (0, c.useCallback)(
                                    (e) => {
                                        (g(e), o && o(e));
                                    },
                                    [o],
                                );
                            ((0, c.useEffect)(() => {
                                if (v && !n) {
                                    return G(() => {
                                        f(Bn.In);
                                    }, t);
                                }
                            }, [f, n, v, t]),
                                (0, c.useEffect)(() => {
                                    if (_) {
                                        return G(() => {
                                            (i && i(), f(Bn.End));
                                        }, e + t);
                                    }
                                }, [f, _, i, t, e]));
                            const b = (0, c.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                h = (0, c.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                E = (0, c.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${l ? s : a}%` }),
                                    [a, l, s],
                                );
                            return p
                                ? null
                                : u().createElement(
                                      'div',
                                      { className: Un, style: E },
                                      u().createElement(
                                          'div',
                                          { style: v ? b : h, className: qn },
                                          u().createElement(Dn, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Yn = (0, c.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: i,
                            onChangeAnimationState: o,
                            onEndAnimation: l,
                        }) => {
                            const d = (0, c.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(An, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                n >= 0 &&
                                    u().createElement(Kn, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: o,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    Xn = ['onComplete', 'onEndAnimation'];
                function Zn() {
                    return (
                        (Zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Zn.apply(this, arguments)
                    );
                }
                const Qn = (0, c.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Xn);
                        const r = (0, c.useState)(!1),
                            s = r[0],
                            i = r[1],
                            o = (0, c.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== s && i(e), e && t && t(), n && n());
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case On.Simple:
                                return u().createElement(Yn, Zn({}, a, { onEndAnimation: o, isComplete: s }));
                            case On.Growing:
                                return u().createElement(Vn, Zn({}, a, { onEndAnimation: o, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Jn = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: r }) => {
                        const s = (0, c.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, c.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            u().createElement(An, { size: e, disabled: a, baseStyles: s, isComplete: i, lineRef: n })
                        );
                    },
                    ea = ['onEndAnimation'];
                function ta() {
                    return (
                        (ta =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ta.apply(this, arguments)
                    );
                }
                const na = (0, c.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, ea);
                    const a = (0, c.useRef)({}),
                        r = (0, c.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        u().createElement(
                            Qn,
                            ta({}, n, {
                                onEndAnimation: r,
                                key: `${s}-${n.to}-${null == n ? void 0 : n.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function aa() {
                    return (
                        (aa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        aa.apply(this, arguments)
                    );
                }
                const ra = (0, c.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: s,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === t)
                                return u().createElement(Jn, {
                                    key: `${r}-${t}-${s}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const d = {
                                from: r,
                                to: t,
                                size: e,
                                additionalKey: s,
                                lineRef: n,
                                disabled: a,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? u().createElement(na, d)
                                : u().createElement(Qn, aa({ key: `${r}-${t}-${s}` }, d));
                        },
                    ),
                    sa = (e) => {
                        var t, n, a, r, s, i, o, l, c, u, d, m, g, _, p, v, f, b, h, E;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (n = e.bg) ? void 0 : n.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (r = e.bg) ? void 0 : r.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (s = e.line.filter) ? s : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (l = e.pattern.gradient)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (c = e.pattern.gradientFinished)
                                    ? c
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (u = e.pattern.mixBlendMode) ? u : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (d = null == (m = e.glowSettings) ? void 0 : m.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (g = null == (_ = e.glowSettings) ? void 0 : _.height) ? g : '100rem',
                            '--progress-glow-small-width':
                                null != (p = null == (v = e.glowSettings) ? void 0 : v.smallWidth) ? p : '44rem',
                            '--progress-glow-small-height':
                                null != (f = null == (b = e.glowSettings) ? void 0 : b.smallHeight) ? f : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (h = null == (E = e.glowSettings) ? void 0 : E.mixBlendMode) ? h : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    ia = (e, t, n) => (n < e ? e : n > t ? t : n),
                    oa = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (ia(0, t, n) / t) * 100;
                        }
                        return e;
                    };
                const la = {
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
                    ca = {
                        freezed: !1,
                        withStack: !1,
                        type: On.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ua = (0, c.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = la,
                            size: n = In.Default,
                            animationSettings: a = ca,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: d,
                            lineRef: m,
                            onChangeAnimationState: g,
                            onEndAnimation: _,
                            onComplete: p,
                            className: v,
                        }) => {
                            const f = (function (e, t, n) {
                                return (0, c.useMemo)(() => {
                                    const a = (ia(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: oa(a, t, n) };
                                }, [n, t, e]);
                            })(o, e, l);
                            return u().createElement(
                                'div',
                                { className: i()(xn.base, v, xn[`base__${n}`]), style: sa(t) },
                                !s && u().createElement(Rn, { size: n }),
                                u().createElement(ra, {
                                    size: n,
                                    lineRef: m,
                                    disabled: r,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    additionalKey: d,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: g,
                                    onComplete: p,
                                }),
                            );
                        },
                    ),
                    da = [
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
                function ma(e) {
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
                const ga = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    _a = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            u = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            g = e.decoratorId,
                            _ = void 0 === g ? 0 : g,
                            p = e.isEnabled,
                            v = void 0 === p || p,
                            f = e.targetId,
                            b = void 0 === f ? 0 : f,
                            h = e.onShow,
                            E = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, da);
                        const y = (0, c.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, c.useMemo)(() => b || Y().resId, [b]),
                            C = (0, c.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (ga(n, _, { isMouseEvent: !0, on: !0, arguments: ma(a) }, k),
                                    h && h(),
                                    (y.current.isVisible = !0));
                            }, [n, _, a, k, h]),
                            S = (0, c.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        ga(n, _, { on: !1 }, k),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1));
                                }
                            }, [n, _, k, E]),
                            N = (0, c.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, c.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, c.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return v
                            ? (0, c.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(y.current.timeoutId),
                                                      (y.current.timeoutId = window.setTimeout(C, u ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === m && S(), null == o || o(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === m && S(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    pa = R.strings.dogtags.customization,
                    va = (0, c.memo)(
                        ({
                            id: e,
                            infoTitle: t,
                            infoText: n,
                            isLocked: a,
                            currentGrade: r,
                            currentProgress: s,
                            currentGradeValue: o,
                            nextGradeValue: l,
                            unlockText: d,
                            progressNumberType: m,
                            isExternalUnlockOnly: g,
                        }) => {
                            const _ = r + 1,
                                p = (0, c.useMemo)(() => ({ componentId: e }), [e]),
                                v = g && !a;
                            return u().createElement(
                                'div',
                                { className: Xt },
                                u().createElement('div', { className: Zt }, t),
                                u().createElement('div', { className: cn }, n),
                                a &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: En }),
                                        u().createElement(
                                            'div',
                                            { className: wn },
                                            u().createElement('div', { className: yn }),
                                            d,
                                        ),
                                    ),
                                u().createElement(
                                    _a,
                                    {
                                        contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                        isEnabled: !a,
                                        args: p,
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        (!g || v) &&
                                            u().createElement(
                                                'div',
                                                { className: nn },
                                                u().createElement('div', { className: rn }, pt(s)),
                                                _ < Qe &&
                                                    u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement('div', { className: on }, '/'),
                                                        u().createElement('div', { className: sn }, pt(a ? o : l, m)),
                                                    ),
                                            ),
                                        !a &&
                                            u().createElement(
                                                'div',
                                                { className: Qt },
                                                u().createElement(ua, {
                                                    size: In.Medium,
                                                    value: s - o,
                                                    maxValue: l - o,
                                                    animationSettings: ca,
                                                }),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: i()(tn, a && an) },
                                            !a &&
                                                u().createElement(
                                                    'div',
                                                    { className: Jt },
                                                    `${pa.currentLevel()} ${nt[r]}`,
                                                ),
                                            !a && _ < Qe && u().createElement('div', { className: en }, nt[r + 1]),
                                            !a && _ === Qe && u().createElement('div', { className: en }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    fa = (0, c.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: o,
                            unlockText: l,
                            isDemoted: d,
                            progressNumberType: m,
                        }) => {
                            const g = R.images.gui.maps.icons.dogtags,
                                _ = r + 1,
                                p = r + 2,
                                v = g.level_shields[`Level_${_}`](),
                                f = (0, c.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                b = g.level_shields[`Level_gr_${p <= Qe ? p : 1}`](),
                                h = (0, c.useMemo)(() => ({ backgroundImage: `url(${b})` }), [b]),
                                E = t || d,
                                w = i()(dn, _ === Qe && mn),
                                y = (0, c.useMemo)(() => ({ componentId: e }), [e]);
                            return u().createElement(
                                'div',
                                { className: Xt },
                                u().createElement('div', { className: Zt }, n),
                                u().createElement('div', { className: cn }, a),
                                !E &&
                                    u().createElement(
                                        _a,
                                        {
                                            contentId: R.views.lobby.dog_tags.ThreeMonthsTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: kn },
                                            u().createElement('div', { className: Sn }),
                                            u().createElement(
                                                'div',
                                                { className: Cn },
                                                R.strings.dogtags.customization.skill_info(),
                                                u().createElement('div', { className: un }),
                                            ),
                                            u().createElement('div', { className: Nn }),
                                        ),
                                    ),
                                E &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: En }),
                                        u().createElement(
                                            'div',
                                            { className: wn },
                                            u().createElement('div', { className: yn }),
                                            l,
                                        ),
                                    ),
                                !E &&
                                    u().createElement(
                                        _a,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: w },
                                            u().createElement(
                                                'div',
                                                { className: gn },
                                                u().createElement('div', { className: pn, style: f }),
                                                u().createElement('div', { className: vn }, pt(s, m)),
                                            ),
                                            _ < Qe &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('div', { className: bn }),
                                                    u().createElement(
                                                        'div',
                                                        { className: _n },
                                                        u().createElement('div', { className: hn, style: h }),
                                                        u().createElement('div', { className: fn }, pt(o, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ba = R.images.gui.maps.icons.dogtags,
                    ha = (0, c.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: o,
                            unlockText: l,
                            progressNumberType: d,
                        }) => {
                            const m = r + 1,
                                g = r + 2,
                                _ = ba.level_shields[`Level_${m}`](),
                                p = (0, c.useMemo)(() => ({ backgroundImage: `url(${_})` }), [_]),
                                v = g < Qe ? ba.level_shields[`Level_gr_${g}`]() : '',
                                f = (0, c.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                b = i()(dn, { [mn]: 4 === r }),
                                h = (0, c.useMemo)(() => ({ componentId: e }), [e]);
                            return u().createElement(
                                'div',
                                { className: Xt },
                                u().createElement('div', { className: Zt }, n),
                                u().createElement('div', { className: cn }, a),
                                t &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: En }),
                                        u().createElement(
                                            'div',
                                            { className: wn },
                                            u().createElement('div', { className: yn }),
                                            l,
                                        ),
                                    ),
                                !t &&
                                    u().createElement(
                                        _a,
                                        {
                                            contentId: R.views.lobby.dog_tags.TriumphTooltip('resId'),
                                            isEnabled: !0,
                                            args: h,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: b },
                                            u().createElement(
                                                'div',
                                                { className: gn },
                                                u().createElement('div', { className: pn, style: p }),
                                                u().createElement('div', { className: vn }, pt(s, d)),
                                            ),
                                            m < 4 && u().createElement('div', { className: bn }),
                                            m < 4 &&
                                                u().createElement(
                                                    'div',
                                                    { className: _n },
                                                    u().createElement('div', { className: hn, style: f }),
                                                    u().createElement('div', { className: fn }, pt(o, d)),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Ea = R.images.gui.maps.icons.dogtags,
                    wa = (0, c.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: o,
                            unlockText: l,
                            isDemoted: d,
                            progressNumberType: m,
                        }) => {
                            const g = r + 1,
                                _ = r + 2,
                                p = Ea.level_shields[`Level_${g}`](),
                                v = (0, c.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                                f = Ea.level_shields[`Level_gr_${_ <= Qe ? _ : 1}`](),
                                b = (0, c.useMemo)(() => ({ backgroundImage: `url(${f})` }), [f]),
                                h = t || d,
                                E = i()(dn, g === Qe && mn),
                                w = (0, c.useMemo)(() => ({ componentId: e }), [e]),
                                y = g < Qe;
                            return u().createElement(
                                'div',
                                { className: Xt },
                                u().createElement('div', { className: Zt }, n),
                                u().createElement('div', { className: cn }, a),
                                !h &&
                                    u().createElement(
                                        _a,
                                        {
                                            contentId: R.views.lobby.dog_tags.RankedEfficiencyTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: kn },
                                            u().createElement('div', { className: Sn }),
                                            u().createElement(
                                                'div',
                                                { className: Cn },
                                                R.strings.dogtags.customization.ranked_skill_info(),
                                                u().createElement('div', { className: un }),
                                            ),
                                            u().createElement('div', { className: Nn }),
                                        ),
                                    ),
                                h &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: En }),
                                        u().createElement(
                                            'div',
                                            { className: wn },
                                            u().createElement('div', { className: yn }),
                                            l,
                                        ),
                                    ),
                                !h &&
                                    u().createElement(
                                        _a,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: E },
                                            u().createElement(
                                                'div',
                                                { className: gn },
                                                u().createElement('div', { className: pn, style: v }),
                                                u().createElement('div', { className: vn }, pt(s, m)),
                                            ),
                                            y &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('div', { className: bn }),
                                                    u().createElement(
                                                        'div',
                                                        { className: _n },
                                                        u().createElement('div', { className: hn, style: b }),
                                                        u().createElement('div', { className: fn }, pt(o, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    );
                function ya() {
                    return (
                        (ya =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ya.apply(this, arguments)
                    );
                }
                const ka = ({ currentItem: e }) => {
                        const t = e.id,
                            n = e.purpose,
                            a = e.currentGrade,
                            r = e.type,
                            s = e.currentGradeValue,
                            i = lt(t, r, n, a).strings;
                        if (!i) return (console.warn(`Component ${t} is missing translation info.`), null);
                        const o = i.description_locked(),
                            l = i.title(),
                            c = i.description(),
                            d = o.replace('{unlock_value}', String(pt(s))),
                            m = {
                                [Ye.Dedication]: va,
                                [Ye.Skill]: fa,
                                [Ye.RankedSkill]: wa,
                                [Ye.Triumph]: ha,
                                [Ye.Medal]: Tn,
                                [Ye.Base]: Tn,
                            },
                            g = { infoTitle: l, infoText: c, unlockText: d },
                            _ = m[n];
                        return _
                            ? u().createElement(_, ya({}, e, g))
                            : (console.warn(
                                  `Invalid component purpose ${n}. Available component purposes ${Object.keys(m).join(', ')}.`,
                              ),
                              null);
                    },
                    Ca = 'FilterBar_base_66',
                    Sa = 'FilterBar_purposeGroups_85',
                    Na = 'FilterBar_buttonWrapper_c2',
                    Ta = 'FilterBar_buttonLabelSpacing_6c',
                    xa = 'FilterBar_bubbleWrapper_27',
                    Ia = 'FilterBar_availableItems_4d',
                    Oa = 'FilterBar_availableItemsCount_a1',
                    Ra = 'FilterBar_newCount_c9',
                    La = 'ToggleButton_base_66',
                    Da = 'ToggleButton_content_2f',
                    Ma = 'ToggleButton_overlay_49',
                    Aa = 'ToggleButton_base__active_c6',
                    Pa = 'ToggleButton_indicator_c1',
                    Ba = ['active', 'className', 'children', 'size'];
                function Ha() {
                    return (
                        (Ha =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ha.apply(this, arguments)
                    );
                }
                const $a = (0, c.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        a = e.children,
                        r = e.size,
                        s = void 0 === r ? g.small : r,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Ba);
                    const l = i()(La, n, t && Aa);
                    return u().createElement(
                        'div',
                        { className: l },
                        u().createElement(
                            _,
                            Ha({}, o, { type: 'secondary', size: s }),
                            u().createElement('span', { className: Da }, a),
                        ),
                        u().createElement('div', { className: Ma }),
                        u().createElement('div', { className: Pa }),
                    );
                });
                let Wa, za, ja, Fa;
                (!(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Wa || (Wa = {})),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(za || (za = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(ja || (ja = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(Fa || (Fa = {})));
                const Ga = {
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
                    Va = [
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
                function Ua() {
                    return (
                        (Ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ua.apply(this, arguments)
                    );
                }
                const qa = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            r = e.isDisabled,
                            s = void 0 !== r && r,
                            l = e.isAlert,
                            d = void 0 !== l && l,
                            m = e.size,
                            g = void 0 === m ? za.medium : m,
                            _ = e.type,
                            p = void 0 === _ ? ja.primary : _,
                            v = e.soundHover,
                            f = void 0 === v ? 'highlight' : v,
                            b = e.soundClick,
                            h = void 0 === b ? 'play' : b,
                            E = e.onMouseEnter,
                            w = e.onMouseLeave,
                            y = e.onMouseUp,
                            k = e.onMouseDown,
                            C = e.onClick,
                            S = e.onChange,
                            N = e.onFocus,
                            T = e.onBlur,
                            x = e.text,
                            I = e.contentStyles,
                            O = e.children,
                            R = e.alignment,
                            L = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Va);
                        const D = (0, c.useState)(!1),
                            M = D[0],
                            A = D[1],
                            P = (0, c.useState)(!1),
                            B = (P[0], P[1]),
                            H = (0, c.useCallback)(
                                (e) => {
                                    s || (S && S(), C && C(e));
                                },
                                [s, S, C],
                            ),
                            $ = (0, c.useCallback)(
                                (e) => {
                                    const t = e.button === Wa.LEFT;
                                    s || (t && A(!0), t && k && k(e), h && o(h));
                                },
                                [s, k, h],
                            ),
                            W = (0, c.useCallback)(
                                (e) => {
                                    s || (A(!1), y && y(e));
                                },
                                [s, y],
                            ),
                            z = (0, c.useCallback)(
                                (e) => {
                                    s || (E && E(e), f && o(f));
                                },
                                [s, E, f],
                            ),
                            j = (0, c.useCallback)(
                                (e) => {
                                    s || (A(!1), w && w(e));
                                },
                                [s, w],
                            ),
                            F = (0, c.useCallback)(
                                (e) => {
                                    s || (B(!0), N && N(e));
                                },
                                [s, N],
                            ),
                            G = (0, c.useCallback)(
                                (e) => {
                                    s || (B(!1), T && T(e));
                                },
                                [s, T],
                            ),
                            V = u().createElement(
                                'div',
                                { className: Ga.label },
                                u().createElement(
                                    'div',
                                    { className: i()(Ga.labelContent, 's-labelContent'), style: I },
                                    x || O,
                                ),
                            );
                        return u().createElement(
                            'div',
                            Ua(
                                {
                                    id: t,
                                    className: i()(Ga.base, Ga[`base__${g}`], Ga[`base__${p}`], {
                                        [Ga.base__checked]: a,
                                        [Ga.base__disabled]: s,
                                        [Ga.base__mouseDown]: M,
                                        [Ga.base__alert]: d,
                                        [Ga.base__center]: R === Fa.Center,
                                        [Ga.base__bottom]: R === Fa.Bottom,
                                    }),
                                    onClick: H,
                                    onMouseEnter: z,
                                    onMouseLeave: j,
                                    onMouseDown: $,
                                    onMouseUp: W,
                                    onFocus: F,
                                    onBlur: G,
                                },
                                L,
                            ),
                            u().createElement(
                                'div',
                                { className: Ga.input },
                                u().createElement('div', { className: Ga.alertOverlay }),
                                u().createElement('div', { className: Ga.inputHoverOverlay }),
                                u().createElement('div', { className: Ga.highlight }),
                            ),
                            u().createElement('div', { className: Ga.checkmark }),
                            ((x || O) && V) || null,
                        );
                    },
                    Ka = {
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
                    Ya = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function Xa() {
                    return (
                        (Xa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Xa.apply(this, arguments)
                    );
                }
                const Za = (e) => {
                        let t = e.value,
                            n = e.isEmpty,
                            a = e.className,
                            r = e.size,
                            s = void 0 === r ? 'normal' : r,
                            o = e.fadeInAnimation,
                            l = void 0 !== o && o,
                            c = e.hide,
                            d = void 0 !== c && c,
                            m = e.maximumNumber,
                            g = void 0 === m ? 99 : m,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Ya);
                        const p = n ? null : t,
                            v = 'string' == typeof p;
                        if ((p && !v && p < 0) || 0 === p) return null;
                        const f = p && !v && p > g,
                            b = i()(
                                Ka.base,
                                Ka[`base__${s}`],
                                l && Ka.base__animated,
                                d && Ka.base__hidden,
                                !p && Ka.base__pattern,
                                n && Ka.base__empty,
                                a,
                            );
                        return u().createElement(
                            'div',
                            Xa({ className: b }, _),
                            u().createElement('div', { className: Ka.bg }),
                            u().createElement('div', { className: Ka.pattern }),
                            u().createElement(
                                'div',
                                { className: i()(Ka.value, v && Ka.value__text) },
                                f ? g : p,
                                f && u().createElement('span', { className: Ka.plus }, '+'),
                            ),
                        );
                    },
                    Qa = R.strings.dogtags.component.purposeGroup,
                    Ja = (0, c.memo)(
                        ({
                            availablePurposeGroups: e,
                            purposeGroupFilters: t,
                            setPurposeGroupFilters: n,
                            showOnlyAvailableItems: a,
                            setShowOnlyAvailableItems: r,
                            availableItemsCount: s,
                            newEngravingSkillCount: i = 0,
                            newEngravingDedicationCount: o = 0,
                            newEngravingTriumphCount: l = 0,
                        }) => {
                            const d = (0, c.useCallback)(
                                    (e) => () => {
                                        n((t) => Object.assign({}, t, { [e]: !t[e] }));
                                    },
                                    [n],
                                ),
                                m = (0, c.useCallback)(() => r((e) => !e), [r]),
                                g = { [Xe.Dedication]: o, [Xe.Triumph]: l, [Xe.Season]: i };
                            return u().createElement(
                                'div',
                                { className: Ca },
                                e.length > 0 &&
                                    u().createElement(
                                        'div',
                                        { className: Sa },
                                        e.map((e) => {
                                            const n = t[e],
                                                a = e in Qa ? Qa[e]() : Qa.dedication(),
                                                r = g[e] || 0;
                                            return u().createElement(
                                                'div',
                                                { className: Na, key: e },
                                                u().createElement(
                                                    $a,
                                                    { active: n, onClick: d(e) },
                                                    u().createElement('span', { className: Ta }, a),
                                                ),
                                                r > 0 &&
                                                    u().createElement(
                                                        'div',
                                                        { className: xa },
                                                        u().createElement(
                                                            'div',
                                                            { className: Ra },
                                                            u().createElement(Za, { value: r }),
                                                        ),
                                                    ),
                                            );
                                        }),
                                    ),
                                u().createElement(
                                    'div',
                                    { className: Ia },
                                    u().createElement(qa, {
                                        isChecked: a,
                                        size: 'medium',
                                        text: R.strings.dogtags.customization.showAvailable(),
                                        type: 'main',
                                        soundHover: 'highlight',
                                        soundClick: 'play',
                                        onChange: m,
                                    }),
                                    u().createElement('span', { className: Oa }, s),
                                ),
                            );
                        },
                    ),
                    er = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function tr() {
                    return (
                        (tr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        tr.apply(this, arguments)
                    );
                }
                const nr = R.views.common.tooltip_window.simple_tooltip_content,
                    ar = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            r = e.note,
                            s = e.alert,
                            i = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, er);
                        const l = (0, c.useMemo)(() => {
                            const e = Object.assign({}, i, { body: n, header: a, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, r, i]);
                        return u().createElement(
                            _a,
                            tr(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? nr.SimpleTooltipHtmlContent('resId') : nr.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                o,
                            ),
                            t,
                        );
                        var d;
                    },
                    rr = 'Item_base_13',
                    sr = 'Item_mainWrapper_0c',
                    ir = 'Item_base__locked_59',
                    or = 'Item_hoverWrapper_2e',
                    lr = 'Item_componentImage_03',
                    cr = 'Item_componentImage__engravingBackground_19',
                    ur = 'Item_statusIcon_69',
                    dr = 'Item_statusIcon_check_0c',
                    mr = 'Item_statusIcon_lock_5b',
                    gr = 'Item_statusIcon_selectedLocked_ca',
                    _r = 'Item_levelBadge_13',
                    pr = 'Item_selectedBg_7c',
                    vr = 'Item_base__selected_f0',
                    fr = 'Item_slotBg_3d',
                    br = 'Item_hoverBg_8d',
                    hr = 'Item_hoverInfo_05',
                    Er = 'Item_itemCounter_cb',
                    wr = ['selected', 'isEquipped', 'onNewComponentHover', 'isAnimatedDogTagSelected'];
                const yr = (0, c.memo)((e) => {
                        const t = e.selected,
                            n = e.isEquipped,
                            a = e.onNewComponentHover,
                            r = e.isAnimatedDogTagSelected,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, wr),
                            l = s.id,
                            d = s.type,
                            m = s.isLocked,
                            g = s.currentGrade,
                            _ = s.currentProgress,
                            p = s.progressNumberType,
                            v = s.onClick,
                            f = s.purpose,
                            b = s.isNew,
                            h = g,
                            E = lt(l, d, f, h, 'small'),
                            w = E.image,
                            y = E.strings,
                            k = d === Ke.Engraving,
                            C = (0, c.useCallback)(() => {
                                (o(m ? R.sounds.dt_element_locked_click() : R.sounds.dt_element_click()), v(s));
                            }, [m, v, s]),
                            S = (0, c.useCallback)(() => {
                                b && a({ compId: l });
                            }, [l, a, b]),
                            N = (0, c.useCallback)(() => {
                                o(R.sounds.highlight());
                            }, []);
                        if (!y) return (console.warn(`Component ${l} is missing translation info.`), null);
                        const T = i()(ur, { [dr]: n && !m && !r, [mr]: !t && m, [gr]: t && m }),
                            x = !m && k;
                        return u().createElement(
                            'div',
                            {
                                className: i()(rr, t && vr, m && ir),
                                onClick: C,
                                onMouseOver: S,
                                onMouseEnter: N,
                                id: 'item-' + l,
                            },
                            u().createElement(
                                'div',
                                { className: sr },
                                u().createElement('div', { className: fr }),
                                u().createElement('div', { className: pr }),
                                h >= 0 && x && u().createElement('div', { className: _r }, nt[h]),
                                u().createElement(
                                    'div',
                                    { className: i()(lr, k && cr) },
                                    u().createElement('div', {
                                        className: lr,
                                        style: { backgroundImage: `url(${w})` },
                                    }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: or },
                                    u().createElement('div', { className: br }),
                                    u().createElement(
                                        'div',
                                        { className: hr },
                                        y.title(),
                                        x && u().createElement('span', null, pt(_, p)),
                                    ),
                                ),
                            ),
                            u().createElement('div', { className: T }),
                            b && u().createElement('div', { className: Er }, u().createElement(Za, { isEmpty: !0 })),
                        );
                    }),
                    kr = 'Grid_base_2f',
                    Cr = 'Grid_sectionWrapper_fa',
                    Sr = 'Grid_emptyBlock_30',
                    Nr = 'Grid_sectionTitle_79',
                    Tr = 'Grid_sectionTitle_text_63',
                    xr = 'Grid_sectionTitle_unlockedCount_fb',
                    Ir = 'Grid_sectionTitle_count_ac',
                    Or = 'Grid_sectionTitle_infoIcon_d7';
                function Rr() {
                    return (
                        (Rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Rr.apply(this, arguments)
                    );
                }
                const Lr = (0, c.memo)(
                        ({
                            data: e,
                            onItemSelect: t,
                            onNewComponentHover: n,
                            selectedItems: a,
                            equippedItems: r,
                            isAnimatedDogTagSelected: s,
                        }) =>
                            u().createElement(
                                'div',
                                { className: kr },
                                e.map((e, i) => {
                                    const o = e.value.items.length,
                                        l = (3 - (o % 3)) % 3,
                                        c = Array.from(Array(l)).map((e, t) =>
                                            u().createElement('div', { key: 'emptyBlock-' + t, className: Sr }),
                                        ),
                                        d = e.value.items.reduce((e, t) => (t.value.isLocked ? e : e + 1), 0),
                                        m = e.value.title ? systemLocale.toUpperCase(e.value.title) : '';
                                    return u().createElement(
                                        'div',
                                        { key: `${e.value.title}-${i}`, className: Cr },
                                        m &&
                                            u().createElement(
                                                'div',
                                                { className: Nr },
                                                u().createElement('div', { className: Tr }, m),
                                                u().createElement(
                                                    'div',
                                                    { className: Ir },
                                                    '(',
                                                    u().createElement('div', { className: xr }, d),
                                                    '/',
                                                    o,
                                                    ')',
                                                ),
                                                e.value.tooltipDescription &&
                                                    u().createElement(
                                                        ar,
                                                        {
                                                            header: e.value.tooltipTitle || void 0,
                                                            body: e.value.tooltipDescription,
                                                        },
                                                        u().createElement('div', { className: Or }),
                                                    ),
                                            ),
                                        e.value.items.map((e) => {
                                            const i = e.value,
                                                o = at(i, r),
                                                l = at(i, a);
                                            return u().createElement(
                                                yr,
                                                Rr({ key: i.id }, i, {
                                                    onClick: t,
                                                    selected: l,
                                                    isEquipped: o,
                                                    onNewComponentHover: n,
                                                    isAnimatedDogTagSelected: s,
                                                }),
                                            );
                                        }),
                                        c,
                                    );
                                }),
                            ),
                    ),
                    Dr = 'Tabs_base_d9',
                    Mr = 'Tabs_base__vertical_c0',
                    Ar = 'Tabs_list_0a',
                    Pr = 'Tabs_list__centered_dc',
                    Br = 'Tabs_wrapper_2d',
                    Hr = 'Tabs_wrapper__centered_d8',
                    $r = 'Tabs_wrapper__vertical_a5';
                function Wr() {
                    return (
                        (Wr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Wr.apply(this, arguments)
                    );
                }
                const zr = 'tabs-role';
                var jr;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(jr || (jr = {}));
                class Fr extends c.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[jr.TAB]);
                                return t && t.props[jr.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = u().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[zr] === jr.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(u().Children.toArray(e[t].props.children));
                        ((e[t] = u().cloneElement(e[t], {
                            children: u()
                                .Children.toArray(e[t].props.children)
                                .map((e) => u().cloneElement(e, { key: e.props[jr.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n));
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = u().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            r =
                                ((s = this.tabsProps),
                                (l = a),
                                !(
                                    Object.keys(s).length === Object.keys(l).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(l, e) && s[e] === l[e],
                                    )
                                ));
                        var s, l;
                        const c = i()(
                                Br,
                                n.props.className,
                                this.props.isTabsCentered && Hr,
                                this.props.isVerticalTabs && $r,
                            ),
                            d = i()(Ar, this.props.isTabsCentered && Pr);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[zr] === jr.CONTENT)
                                        return e.props[jr.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                r = t[0].props.children,
                                s = r.map((e, t) =>
                                    u().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[jr.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === r.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][jr.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && o(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            o(this.props.onMouseEnterSound));
                                                },
                                            },
                                        ),
                                    ),
                                );
                            ((this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        u().createElement(
                                            'div',
                                            { className: d, key: jr.LIST },
                                            u().createElement('div', Wr({}, n.props, { className: c }), s),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = i()(Dr, this.props.isVerticalTabs && Mr);
                        return u().createElement('div', { className: t }, e);
                    }
                }
                Fr.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Gr = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function Vr() {
                    return (
                        (Vr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Vr.apply(this, arguments)
                    );
                }
                const Ur = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            r = e.onClickSound,
                            s = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Gr);
                        return u().createElement(
                            'div',
                            Vr({ className: n }, o),
                            u().createElement(
                                Fr,
                                { activeKey: a, onClickSound: r, onMouseEnterSound: s, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    qr = ({ children: e, component: t, props: n = {} }) => (t ? u().createElement(t, n, e) : e || null),
                    Kr = 'Tab_base_dd',
                    Yr = 'Tab_base__first_4a',
                    Xr = 'Tab_base__last_96',
                    Zr = 'Tab_base__medium_ec',
                    Qr = 'Tab_base__active_5d',
                    Jr = 'Tab_divider_ca',
                    es = 'Tab_divider__show_62',
                    ts = 'Tab_state_6c',
                    ns = 'Tab_stateHighlight_1e',
                    as = 'Tab_stateBorder_64',
                    rs = 'Tab_stateBorder__positionLeft_e7',
                    ss = 'Tab_stateBorder__positionRight_db',
                    is = 'Tab_counter_e1',
                    os = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function ls() {
                    return (
                        (ls =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ls.apply(this, arguments)
                    );
                }
                const cs = (0, c.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            r = void 0 !== a && a,
                            s = e.isLast,
                            o = void 0 !== s && s,
                            l = e.isMedium,
                            c = void 0 !== l && l,
                            d = e.isNotified,
                            m = void 0 !== d && d,
                            g = e.children,
                            _ = void 0 === g ? 'Tab' : g,
                            p = e.wrapper,
                            v = void 0 === p ? {} : p,
                            f = e.counter,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, os);
                        return u().createElement(
                            qr,
                            v,
                            u().createElement(
                                'div',
                                ls({ className: i()(Kr, { [Qr]: n }, { [Yr]: r }, { [Xr]: o }, { [Zr]: c }) }, b),
                                u().createElement(
                                    'span',
                                    { className: ts },
                                    u().createElement('span', { className: ns }),
                                    u().createElement('span', { className: i()(as, rs) }),
                                    u().createElement('span', { className: i()(as, ss) }),
                                ),
                                _,
                                !o && !n && u().createElement('span', { className: i()(Jr, es) }),
                                (Boolean(f) || m) &&
                                    u().createElement(
                                        'div',
                                        { className: is },
                                        u().createElement(Za, { value: f, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    us = 'Header_base_eb',
                    ds = 'Header_titleWrapper_ab',
                    ms = 'Header_title_e8',
                    gs = 'Header_infoButtonWrapper_e1',
                    _s = 'Header_infoIcon_8c',
                    ps = Object.keys(Ue)
                        .filter((e) => !isNaN(Number(e)))
                        .map((e) => Number(e)),
                    vs = {
                        [Ue.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [Ue.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    fs = systemLocale.toUpperCase(R.strings.dogtags.customization.mainTitle()),
                    bs = R.strings.dogtags.customization.infoTooltip(),
                    hs = {
                        width: 10 * Math.max(...ps.map((e) => vs[e].length)) + 'rem',
                        padding: '0 5rem',
                        flex: '0 0 150rem',
                        justifyContent: 'center',
                    },
                    Es = (0, c.memo)(({ onTabClick: e, onInfoClick: t, className: n }) => {
                        const a = se('model'),
                            r = a.tab,
                            s = a.newBackgroundComponentCount,
                            o = a.newEngravingComponentCount;
                        return u().createElement(
                            'div',
                            { className: i()(us, n) },
                            u().createElement(
                                'div',
                                { className: ds },
                                u().createElement('p', { className: ms }, fs),
                                u().createElement(
                                    'div',
                                    { className: gs },
                                    u().createElement(
                                        ar,
                                        { body: bs },
                                        u().createElement(
                                            _,
                                            { type: 'ghost', onClick: t },
                                            u().createElement('div', { className: _s }),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                Ur,
                                { key: r, activeKey: String(r), onClickSound: R.sounds.dt_tab() },
                                u().createElement(
                                    'div',
                                    { 'tabs-role': jr.LIST },
                                    ps.map((t) => {
                                        const n = { [Ue.Engraving]: o, [Ue.Background]: s }[t] || 0;
                                        return u().createElement(
                                            cs,
                                            {
                                                key: String(t),
                                                'tabs-role': jr.TAB,
                                                'tab-key': String(t),
                                                onClick: e,
                                                style: hs,
                                                counter: n,
                                            },
                                            vs[t],
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    ws = 'NoResults_base_35',
                    ys = 'NoResults_message_41',
                    ks = 'NoResults_message_icon_a4',
                    Cs = ({ className: e, clearFilters: t }) => {
                        const n = i()(ws, e);
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement(
                                'p',
                                { className: ys },
                                u().createElement('img', {
                                    src: R.images.gui.maps.icons.dogtags.icons.alert(),
                                    className: ks,
                                }),
                                R.strings.dogtags.customization.filter.noResults(),
                            ),
                            u().createElement(
                                _,
                                { type: 'secondary', size: g.medium, onClick: t },
                                R.strings.dogtags.customization.filter.restoreFilter(),
                            ),
                        );
                    },
                    Ss = (e) => {
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
                    },
                    Ns = [];
                function Ts(e) {
                    const t = (0, c.useRef)(e);
                    return (
                        (0, c.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, c.useCallback)((...e) => (0, t.current)(...e), Ns)
                    );
                }
                function xs(e, t, n = []) {
                    const a = (0, c.useRef)(0),
                        r = (0, c.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, c.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, c.useCallback)((n) => {
                            ((a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, s),
                        r,
                    ];
                }
                function Is(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Os(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Os(e, t);
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
                function Os(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Rs(e, t, n) {
                    const a = (0, c.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    s = !1,
                                    i = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function l(...l) {
                                    const c = this,
                                        u = Date.now() - i;
                                    function d() {
                                        ((i = Date.now()), n.apply(c, l));
                                    }
                                    s ||
                                        (a && !r && d(),
                                        o(),
                                        void 0 === a && u > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  a
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === a ? e - u : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (l.cancel = function () {
                                        (o(), (s = !0));
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, c.useEffect)(() => a.cancel, [a]), a);
                }
                let Ls;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Ls || (Ls = {}));
                const Ds = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ms = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        forceTriggerMouseMove: s,
                    }) => {
                        const i = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : ia(r, s, n);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                u = void 0 === l ? Ds : l,
                                d = (0, c.useRef)(null),
                                m = (0, c.useRef)(null),
                                g = (0, c.useRef)(!1),
                                _ = (() => {
                                    const e = (0, c.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var a, r = Is(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, c.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                p = Rs(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                v = (0, ce.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), _.trigger('change', e), s && g.current && p());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                f = v[0],
                                b = v[1],
                                h = (0, c.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = f.scrollPosition.get(),
                                            s = (null != (a = f.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, t * n + s + r);
                                    },
                                    [f.scrollPosition],
                                ),
                                E = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            b.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: u.animationConfig,
                                                from: { scrollPosition: i(a, f.scrollPosition.get()) },
                                            });
                                    },
                                    [b, u.animationConfig, f.scrollPosition],
                                ),
                                w = (0, c.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, u.step),
                                            s = h(t, e, a);
                                        E(s);
                                    },
                                    [E, h, u.step],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && w(a(e)),
                                            d.current && _.trigger('mouseWheel', e, f.scrollPosition, t(d.current)));
                                    },
                                    [f.scrollPosition, w, _],
                                ),
                                k = ((e, t = []) => {
                                    const n = (0, c.useRef)(),
                                        a = (0, c.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, c.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Ss(() => {
                                            const e = d.current;
                                            e &&
                                                (E(i(e, f.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [E, f.scrollPosition.goal],
                                ),
                                C = Ts(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, f.scrollPosition.goal);
                                    (t !== f.scrollPosition.goal && E(t, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            ((0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            ),
                                (0, c.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const t = () => {
                                            g.current = !0;
                                        },
                                        n = () => {
                                            g.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', n),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n));
                                        }
                                    );
                                }, [d]));
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: u.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: y,
                                    applyScroll: E,
                                    applyStepTo: w,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: b,
                                    animationScroll: f,
                                    recalculateContent: C,
                                    events: { on: _.on, off: _.off },
                                }),
                                [f.scrollPosition, E, w, _.off, _.on, C, y, b, u.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    As = Ms({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var n;
                            e.style.transform = `translateX(-${0 | (null != (n = t.value.scrollPosition) ? n : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ls.Next : Ls.Prev),
                        forceTriggerMouseMove: b.O.view.forceTriggerMouseMove,
                    }),
                    Ps = 'HorizontalBar_base_49',
                    Bs = 'HorizontalBar_base__active_5e',
                    Hs = 'HorizontalBar_leftButton_5f',
                    $s = 'HorizontalBar_rightButton_03',
                    Ws = 'HorizontalBar_track_0d',
                    zs = 'HorizontalBar_thumb_fd',
                    js = 'HorizontalBar_rail_32',
                    Fs = 'disable',
                    Gs = { pending: !1, offset: 0 },
                    Vs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Us = () => {},
                    qs = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ks = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Vs, onDrag: a = Us }) => {
                        const r = (0, c.useRef)(null),
                            s = (0, c.useRef)(null),
                            l = (0, c.useRef)(null),
                            d = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, c.useState)(Gs),
                            p = _[0],
                            v = _[1],
                            f = (0, c.useCallback)(
                                (e) => {
                                    (v(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            h = () => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    c = ia(0, 1, i / (r - a)),
                                    u = (t.offsetWidth - qs(t, o)) * c;
                                ((n.style.transform = `translateX(${0 | u}px)`),
                                    ((e) => {
                                        if (s.current && l.current && d.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Fs),
                                                    void l.current.classList.remove(Fs)
                                                );
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Fs),
                                                    void l.current.classList.add(Fs)
                                                );
                                            var t, n;
                                            (s.current.classList.remove(Fs), l.current.classList.remove(Fs));
                                        }
                                    })(u));
                            },
                            E = Ts(() => {
                                ((() => {
                                    const t = m.current,
                                        n = d.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const i = Math.min(1, a / s);
                                    ((t.style.width = `${qs(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== i ? r.current.classList.add(Bs) : r.current.classList.remove(Bs)));
                                })(),
                                    h());
                            });
                        ((0, c.useEffect)(() => Ss(E)),
                            (0, c.useEffect)(
                                () =>
                                    Ss(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Us;
                                        const a = () => {
                                            (n(), (n = Ss(E)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', E),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', E),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!p.pending) return;
                                const t = b.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const o = d.current,
                                            l = m.current;
                                        if (!o || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - p.offset - o.getBoundingClientRect().x,
                                            u = (c / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u }));
                                    }),
                                    n = b.O.client.events.mouse.up(() => {
                                        (t(), f(Gs));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, p.offset, p.pending, a, f]));
                        const w = xs((t) => e.applyStepTo(t), g, [e]),
                            y = w[0],
                            k = w[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Fs) || o('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: i()(Ps, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: i()(Hs, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fs) || 0 !== e.button || (o('play'), y(Ls.Next));
                                },
                                onMouseUp: k,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: i()(Ws, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((o('play'), t.target === a))
                                                f({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = m.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Ls.Prev : Ls.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: C,
                                },
                                u().createElement('div', { ref: m, className: i()(zs, t.thumb) }),
                                u().createElement('div', { className: i()(js, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: i()($s, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fs) || 0 !== e.button || (o('play'), y(Ls.Prev));
                                },
                                onMouseUp: k,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Ys = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Xs = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const m = (0, c.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: i()(Ys.base, e.base) });
                            }, [a]),
                            g = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: i()(Ys.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: i()(Ys.defaultScrollArea, r) },
                                u().createElement(Zs, { className: o, api: g, classNames: s }, e),
                            ),
                            u().createElement(Ks, { getStepByRailClick: l, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Zs = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, c.useEffect)(() => Ss(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: i()(Ys.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: i()(Ys.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: i()(Ys.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Zs.Bar = Ks), (Zs.Default = Xs));
                const Qs = Ms({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ls.Next : Ls.Prev),
                    }),
                    Js = 'VerticalBar_base_f3',
                    ei = 'VerticalBar_base__active_72',
                    ti = 'VerticalBar_topButton_d7',
                    ni = 'VerticalBar_bottomButton_06',
                    ai = 'VerticalBar_track_df',
                    ri = 'VerticalBar_thumb_32',
                    si = 'VerticalBar_rail_43',
                    ii = 'disable',
                    oi = () => {},
                    li = { pending: !1, offset: 0 },
                    ci = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ui = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    di = (e, t) => Math.max(20, e.offsetHeight * t),
                    mi = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ci, onDrag: a = oi }) => {
                        const r = (0, c.useRef)(null),
                            s = (0, c.useRef)(null),
                            l = (0, c.useRef)(null),
                            d = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, c.useState)(li),
                            p = _[0],
                            v = _[1],
                            f = (0, c.useCallback)(
                                (e) => {
                                    (v(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            h = Ts(() => {
                                const t = m.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const i = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${di(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== i ? r.current.classList.add(ei) : r.current.classList.remove(ei)),
                                    i
                                );
                            }),
                            E = Ts(() => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    c = ia(0, 1, i / (r - a)),
                                    u = (t.offsetHeight - di(t, o)) * c;
                                ((n.style.transform = `translateY(${0 | u}px)`),
                                    ((e) => {
                                        if (s.current && l.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    s.current.classList.add(ii),
                                                    void l.current.classList.remove(ii)
                                                );
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(ii),
                                                    void l.current.classList.add(ii)
                                                );
                                            var t, n;
                                            (s.current.classList.remove(ii), l.current.classList.remove(ii));
                                        }
                                    })(u));
                            }),
                            w = Ts(() => {
                                ui(e, () => {
                                    (h(), E());
                                });
                            });
                        ((0, c.useEffect)(() => Ss(w)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    ui(e, () => {
                                        E();
                                    });
                                };
                                let n = oi;
                                const a = () => {
                                    (n(), (n = Ss(w)));
                                };
                                return (
                                    e.events.on('recalculateContent', w),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', w),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!p.pending) return;
                                const t = b.O.client.events.mouse.up(() => {
                                        f(li);
                                    }),
                                    n = b.O.client.events.mouse.move(([t]) => {
                                        ui(e, (n) => {
                                            const r = d.current,
                                                s = m.current,
                                                i = e.getContainerSize();
                                            if (!r || !s || !i) return;
                                            const o = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                l = (o / r.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: l }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, p.offset, p.pending, a, f]));
                        const y = xs((t) => e.applyStepTo(t), g, [e]),
                            k = y[0],
                            C = y[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const S = (e) => {
                            e.target.classList.contains(ii) || o('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: i()(Js, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: i()(ti, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ii) || 0 !== e.button || (o('play'), k(Ls.Next));
                                },
                                ref: s,
                                onMouseEnter: S,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: i()(ai, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((o('play'), t.target === a))
                                                f({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        ui(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Ls.Prev : Ls.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: S,
                                },
                                u().createElement('div', { ref: m, className: i()(ri, t.thumb) }),
                                u().createElement('div', { className: i()(si, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: i()(ni, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ii) || 0 !== e.button || (o('play'), k(Ls.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    gi = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    _i = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const m = (0, c.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: i()(gi.base, e.base) });
                            }, [a]),
                            g = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: i()(gi.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: i()(gi.area, r) },
                                u().createElement(pi, { className: s, classNames: o, api: g }, e),
                            ),
                            u().createElement(mi, { getStepByRailClick: l, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    pi = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, c.useEffect)(() => Ss(a.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: i()(gi.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: i()(gi.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                pi.Default = _i;
                const vi = { Vertical: r, Horizontal: a },
                    fi = (e, t) => {
                        const n = t.split('.'),
                            a = n[0];
                        if (!e || 'object' != typeof e)
                            return (
                                console.warn(`Reference "${JSON.stringify(e, null, 2)}" is not a valid object.`),
                                !1
                            );
                        if (!a) return (console.warn(`Invalid key "${a}" in path ${t}.`), !1);
                        if (!(a in e))
                            return (
                                console.warn(`Key "${a}" was not found in reference "${JSON.stringify(e, null, 2)}".`),
                                !1
                            );
                        const r = n.slice(1);
                        return 0 === r.length || fi(e[a], r.join('.'));
                    },
                    bi = [
                        'model.equippedDogTag',
                        'model.equippedDogTag.background',
                        'model.equippedDogTag.engraving',
                        'model.engravingGrid',
                        'model.backgroundGrid',
                    ];
                bi.forEach((e) => fi(window, e));
                const hi = () => (
                        se(bi[0]),
                        se(bi[1]),
                        se(bi[2]),
                        se(bi[3]),
                        se(bi[4]),
                        ((e, t = !0) => {
                            if (!fi(window, e)) throw Error(`Path "${e}" does not exist.`);
                            const n = se(e, t ? re.Deep : re.None);
                            return 'object' == typeof n && null !== n
                                ? (0, U.lw)(n)
                                : (t &&
                                      console.warn(
                                          `Tracking of primitive value ${String(n)} in ${e} is not supported.`,
                                      ),
                                  n);
                        })('model')
                    ),
                    Ei = 'Router_base_17',
                    wi = 'Router_innerWrapper_d8',
                    yi = 'Router_gridWrapper_c2',
                    ki = 'Router_infoWrapper_95',
                    Ci = 'Router_dogtagsInfoWrapper_b7',
                    Si = 'Router_scrollContainer_f2',
                    Ni = 'Router_scrollBar_c1',
                    Ti = 'Router_scrollAreaContainer_3e',
                    xi = 'Router_customizationWrapper_05',
                    Ii = 'Router_scrollAreaWrapper_93',
                    Oi = 'Router_scrollAreaWrapper_bottomMask_63',
                    Ri = 'Router_gridTitle_a2',
                    Li = 'Router_subNavigation_b2',
                    Di = 'Router_topDivider_23',
                    Mi = 'Router_gridBottomSeparator_13',
                    Ai = 'Router_alertMessage_ad',
                    Pi = 'Router_alertIcon_84',
                    Bi = { dedication: !0, season: !0, triumph: !0 },
                    Hi = {
                        [Ue.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [Ue.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    $i = () => {
                        const e = hi(),
                            t = Qs(),
                            n = Qs(),
                            a = L().mediaSize,
                            r = e.onUpdateSelectedDT,
                            s = e.onEquip,
                            o = e.onNewComponentHover,
                            l = e.tab,
                            d = e.equippedDogTag,
                            m = d.playerName,
                            g = d.clanTag,
                            _ = d.engraving.id,
                            p = d.background.id,
                            v = e.engravingGrid,
                            f = e.backgroundGrid,
                            b = e.newEngravingSkillCount,
                            h = e.newEngravingDedicationCount,
                            E = e.newEngravingTriumphCount,
                            w = e.isAnimatedDogTagSelected,
                            y = (0, c.useState)({ background: p, engraving: _ }),
                            k = y[0],
                            C = y[1],
                            S = {
                                background: gt(f, k.background) || f[0].value.items[0].value,
                                engraving: gt(v, k.engraving) || v[0].value.items[0].value,
                            },
                            N = {
                                engraving: gt(v, _) || v[0].value.items[0].value,
                                background: gt(f, p) || f[0].value.items[0].value,
                            },
                            T = (0, c.useState)(Bi),
                            I = T[0],
                            O = T[1],
                            D = (0, c.useState)(!1),
                            M = D[0],
                            A = D[1],
                            P = (0, c.useState)(!0),
                            B = P[0],
                            H = P[1],
                            $ = ((e, t) => e[mt[t]])(S, l),
                            W = Hi[l],
                            z = ((e, t) => e[dt[t]])({ backgroundGrid: f, engravingGrid: v }, l),
                            j = l === Ue.Engraving ? ut(z, I) : z,
                            F = ct(
                                j.map((e) => ({
                                    value: Object.assign({}, e.value, {
                                        items: e.value.items.filter((e) => !e.value.isLocked),
                                    }),
                                })),
                            );
                        const G = _t(F),
                            V =
                                l === Ue.Engraving
                                    ? ((e) =>
                                          [Xe.Dedication, Xe.Season, Xe.Triumph].filter((t) => {
                                              for (let n = 0; n < e.length; n++) {
                                                  const a = e[n].value.items[0];
                                                  if (a && Ze[t].includes(a.value.purpose)) return !0;
                                              }
                                              return !1;
                                          }))(z)
                                    : [],
                            U = (0, c.useMemo)(() => ({ gridData: M ? F : j, totalItems: _t(j) }), [F, j, M]),
                            q = U.gridData,
                            K = U.totalItems,
                            Y = (0, c.useCallback)((e) => {
                                C(
                                    (t) => (
                                        r(Object.assign({}, t, { [e.type]: e.id })),
                                        Object.assign({}, t, { [e.type]: e.id })
                                    ),
                                );
                            }, []),
                            X = (0, c.useCallback)(
                                (e) => {
                                    C(
                                        (t) => (
                                            r(Object.assign({}, t, { [e]: N[e].id })),
                                            Object.assign({}, t, { [e]: N[e].id })
                                        ),
                                    );
                                },
                                [N],
                            ),
                            Z = Ts(() => {
                                const e = t.getBounds()[1],
                                    n = t.animationScroll.scrollPosition.get();
                                H(n < e);
                            });
                        ((0, c.useEffect)(
                            () => (
                                t.events.on('change', Z),
                                t.events.on('recalculateContent', Z),
                                () => {
                                    (t.events.off('change', Z), t.events.off('recalculateContent', Z));
                                }
                            ),
                            [t.events, Z],
                        ),
                            (0, c.useEffect)(() => {
                                const e = () => {
                                    n.applyScroll(0);
                                };
                                return (
                                    n.events.on('recalculateContent', e),
                                    () => {
                                        n.events.off('recalculateContent', e);
                                    }
                                );
                            }, []));
                        const Q = (0, c.useCallback)(() => {
                                (O({ dedication: !0, season: !0, triumph: !0 }), A(!1));
                            }, []),
                            J = ((e) => {
                                const t = e.background,
                                    n = e.engraving,
                                    a = t.currentGrade + 1,
                                    r = n.currentGrade + 1;
                                return (n.purpose === Ye.Triumph && 4 === r) || r === Qe || a === Qe;
                            })(S);
                        return u().createElement(
                            'div',
                            { className: Ei },
                            u().createElement(
                                'div',
                                { className: wi },
                                u().createElement(
                                    'div',
                                    { className: yi },
                                    u().createElement(
                                        'div',
                                        { className: Li },
                                        u().createElement('div', { className: Ri }, systemLocale.toUpperCase(W)),
                                        u().createElement(Ja, {
                                            newEngravingSkillCount: b,
                                            newEngravingDedicationCount: h,
                                            newEngravingTriumphCount: E,
                                            availablePurposeGroups: V,
                                            setPurposeGroupFilters: O,
                                            purposeGroupFilters: I,
                                            showOnlyAvailableItems: M,
                                            setShowOnlyAvailableItems: A,
                                            availableItemsCount: G,
                                        }),
                                        u().createElement('div', { className: Di }),
                                    ),
                                    q.length > 0
                                        ? u().createElement(
                                              'div',
                                              { className: i()(Ii, B && Oi) },
                                              u().createElement(
                                                  vi.Vertical.Area.Default,
                                                  { api: t },
                                                  u().createElement(Lr, {
                                                      data: q,
                                                      count: K,
                                                      onItemSelect: Y,
                                                      onNewComponentHover: o,
                                                      selectedItems: S,
                                                      equippedItems: N,
                                                      isAnimatedDogTagSelected: w,
                                                  }),
                                              ),
                                          )
                                        : u().createElement(Cs, { clearFilters: Q }),
                                    u().createElement('div', { className: Mi }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ki },
                                    u().createElement(Ct, {
                                        playerName: m,
                                        clanTag: g,
                                        background: S.background,
                                        engraving: S.engraving,
                                        isHighlighted: J,
                                        size: a >= x.Large ? Et.x400 : Et.x300,
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: Ci },
                                        u().createElement(
                                            vi.Vertical.Area.Default,
                                            { api: n, className: Si, barClassNames: { base: Ni }, areaClassName: Ti },
                                            u().createElement(ka, { currentItem: $ }),
                                        ),
                                    ),
                                    (S.engraving.isDeprecated || S.background.isDeprecated) &&
                                        u().createElement(
                                            'div',
                                            { className: Ai },
                                            u().createElement('div', { className: Pi }),
                                            R.strings.dogtags.customization.deprecated(),
                                        ),
                                    u().createElement(
                                        'div',
                                        { className: xi },
                                        u().createElement(Yt, {
                                            selectedItems: S,
                                            equippedItems: N,
                                            onItemReset: X,
                                            isAnimatedDogTagSelected: w,
                                            onEquip: s,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Wi = 300,
                    zi = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: Wi } },
                    ji = {
                        from: { opacity: 0 },
                        enter: { opacity: 1, delay: 300 },
                        leave: { opacity: 0 },
                        config: { duration: Wi },
                    },
                    Fi = 'DogTagsApp_base_c2',
                    Gi = 'DogTagsApp_base__topView_03',
                    Vi = 'DogTagsApp_base__emptyPadding_2a',
                    Ui = 'DogTagsApp_dogTags_30',
                    qi = 'DogTagsApp_dogTags__blur_6c',
                    Ki = 'DogTagsApp_dogTags__padding_90',
                    Yi = 'DogTagsApp_onboardingWrapper_b7',
                    Xi = 'DogTagsApp_customizationWrapper_95',
                    Zi = 'DogTagsApp_routerReveal_45',
                    Qi = 'DogTagsApp_header_40',
                    Ji = () => {
                        const e = se('model', re.Shallow),
                            t = e.onTabSelect,
                            n = e.onboardingEnabled,
                            a = e.onOnboardingCloseClick,
                            r = e.onInfoButtonClick,
                            s = e.isTopView,
                            o = e.onBack,
                            l = (0, c.useState)(null),
                            d = l[0],
                            m = l[1],
                            g = (0, c.useState)(n),
                            _ = g[0],
                            p = g[1],
                            v = (function () {
                                const e = (0, c.useState)({ top: 0, bottom: 0, left: 0, right: 0 }),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, c.useEffect)(() => {
                                        const e = () => {
                                            n(b.O.view.getExternalPaddingsRem());
                                        };
                                        return (
                                            e(),
                                            engine.on('self.onPaddingsUpdated', e),
                                            () => {
                                                engine.off('self.onPaddingsUpdated', e);
                                            }
                                        );
                                    }, []),
                                    { paddings: t, externalPaddingsExisted: 0 !== t.top || 0 !== t.bottom }
                                );
                            })(),
                            f = (0, c.useCallback)((e) => {
                                const t = Number(e.currentTarget.getAttribute('tab-key'));
                                m(t);
                            }, []);
                        (0, c.useEffect)(() => {
                            if (null !== d)
                                return G(() => {
                                    (m(null), t({ newTab: d }));
                                }, Wi);
                        }, [d, t]);
                        const h = (0, ce.useSpring)(zi),
                            E = (0, ce.useTransition)(
                                _,
                                Object.assign({}, ji, { leave: Object.assign({}, ji.leave, { onRest: () => a() }) }),
                            ),
                            w = (0, c.useCallback)(() => {
                                r();
                            }, [r]),
                            y = (0, c.useCallback)(() => {
                                p(!1);
                            }, []),
                            k = (0, c.useCallback)(() => {
                                o();
                            }, [o]);
                        var C;
                        return (
                            (C = _ ? y : k),
                            K(V.n.ESCAPE, C),
                            u().createElement(
                                'div',
                                { className: i()(Fi, s && Gi, v.externalPaddingsExisted && Vi) },
                                u().createElement(
                                    F.animated.div,
                                    { className: i()(Ui, _ && qi, v.externalPaddingsExisted && Ki), style: h },
                                    u().createElement(
                                        'div',
                                        { className: Xi },
                                        u().createElement(
                                            le,
                                            { top: v.paddings.top },
                                            u().createElement(Es, {
                                                className: i()(v.externalPaddingsExisted && Qi),
                                                onTabClick: f,
                                                onInfoClick: w,
                                            }),
                                        ),
                                        u().createElement(
                                            Ie,
                                            { className: Zi, type: 'slide', isOut: null !== d, duration: Wi },
                                            u().createElement($i, null),
                                        ),
                                    ),
                                ),
                                E(
                                    (e, t) =>
                                        t &&
                                        u().createElement(
                                            F.animated.div,
                                            { className: Yi, style: e },
                                            u().createElement(We, { onClose: y }),
                                        ),
                                ),
                            )
                        );
                    };
                ((window.onload = () => {
                    document.body.setAttribute('style', 'margin: 0;');
                }),
                    engine.whenReady.then(() => {
                        j().render(
                            u().createElement(W, null, u().createElement(v, null, u().createElement(Ji, null))),
                            document.getElementById('root'),
                        );
                    }));
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
                    for (var [t, n, a] = deferred[l], s = !0, i = 0; i < t.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), a < r && (r = a));
                    if (s) {
                        deferred.splice(l--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 589),
        (() => {
            var e = { 589: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [s, i, o] = n,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(n); l < s.length; l++)
                        ((r = s[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(119));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
