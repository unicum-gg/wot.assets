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
                    n.d(t, { mouse: () => u, off: () => l, on: () => i, onResize: () => s, onScaleUpdated: () => o }));
                var a = n(472),
                    r = n(176);
                const s = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
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
                                        o = c[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, i),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(s, i),
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => s,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = n(527),
                    r = n(493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                    s = n(514);
                const o = { view: n(641), client: a, sound: s.ZP, intl: r.N };
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
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, s, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        events: () => o.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => N,
                        getScale: () => b,
                        getSize: () => g,
                        getViewGlobalPosition: () => p,
                        initExternalPaddings: () => D,
                        isEventHandled: () => k,
                        isFocused: () => w,
                        pxToRem: () => f,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => R,
                    }));
                var a = n(690),
                    r = n(722),
                    s = n(112),
                    o = n(538),
                    i = n(566);
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
                function b() {
                    return viewEnv.getScale();
                }
                function f(e) {
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
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
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
                    o = 32,
                    i = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                o = (function (e, t) {
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
                                      Object.assign({ __Type: n, type: e }, o, {
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
                            l(i);
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
                n.d(t, { Sw: () => s.Z, Gr: () => u, Z5: () => i.Z5, B0: () => l, lw: () => o, ry: () => f });
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
                function o(e) {
                    const t = {};
                    if ('object' != typeof e) return e;
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            const a = Object.prototype.toString.call(e[n]);
                            if (a.startsWith('[object CoherentArrayProxy]')) {
                                const a = e[n];
                                t[n] = [];
                                for (let e = 0; e < a.length; e++) t[n].push({ value: o(a[e].value) });
                            } else a.startsWith('[object class BW::WULF::ViewModel') ? (t[n] = o(e[n])) : (t[n] = e[n]);
                        }
                    return t;
                }
                var i = n(613);
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
                function v(e, t, n, a, r, s, o) {
                    try {
                        var i = e[s](o),
                            l = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                        function o(e) {
                                            v(s, a, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            v(s, a, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
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
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => h(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => h(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), s) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                i = n.getBoundingClientRect(),
                                c = i.x,
                                u = i.y,
                                d = i.width,
                                m = i.height,
                                g = {
                                    x: _.O.view.pxToRem(c) + o.x,
                                    y: _.O.view.pxToRem(u) + o.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            h(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: b(g),
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
                        onBindingsReady: f,
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
                        dumpViewModel: o,
                        ClickOutsideManager: k,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = C;
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
            119: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => Qs,
                        Bar: () => Ys,
                        DefaultScroll: () => Zs,
                        Direction: () => Ds,
                        defaultSettings: () => Ms,
                        useHorizontalScrollApi: () => Ps,
                    }));
                var r = {};
                (n.r(r), n.d(r, { Area: () => bo, Bar: () => _o, Default: () => vo, useVerticalScrollApi: () => Js }));
                var s = n(483),
                    o = n.n(s);
                let i;
                function l(e) {
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
                })(i || (i = {}));
                const c = {
                    playHighlight() {
                        l('highlight');
                    },
                    playClick() {
                        l('play');
                    },
                    playYes() {
                        l('yes1');
                    },
                };
                var u = n(363),
                    d = n.n(u);
                const m = {
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
                let g, _;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(g || (g = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(_ || (_ = {})));
                const p = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: a,
                        onMouseEnter: r,
                        onMouseMove: s,
                        onMouseDown: c,
                        onMouseUp: _,
                        onMouseLeave: p,
                        onClick: v,
                        isFocused: b = !1,
                        type: f = g.primary,
                        soundHover: h = 'highlight',
                        soundClick: E = 'play',
                    }) => {
                        const w = (0, u.useRef)(null),
                            y = (0, u.useState)(b),
                            k = y[0],
                            C = y[1],
                            S = (0, u.useState)(!1),
                            N = S[0],
                            T = S[1];
                        return (
                            (0, u.useEffect)(() => {
                                function e(e) {
                                    k && null !== w.current && !w.current.contains(e.target) && C(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [k]),
                            (0, u.useEffect)(() => {
                                C(b);
                            }, [b]),
                            d().createElement(
                                'div',
                                {
                                    ref: w,
                                    className: o()(
                                        m.base,
                                        m[`base__${f}`],
                                        n && m.base__disabled,
                                        t && m[`base__${t}`],
                                        k && m.base__focus,
                                        N && m.base__highlightActive,
                                        a,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== h && l(h), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (_ && _(e), T(!1));
                                    },
                                    onMouseDown: function (e) {
                                        if (n) return;
                                        const t = e.button === i.LEFT;
                                        (null !== E && t && l(E),
                                            c && c(e),
                                            b && (n || (w.current && (w.current.focus(), C(!0)))),
                                            t && T(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (p && p(e), T(!1));
                                    },
                                    onClick: function (e) {
                                        n || (v && v(e));
                                    },
                                },
                                f !== g.ghost &&
                                    d().createElement(
                                        d().Fragment,
                                        null,
                                        d().createElement('div', { className: m.back }),
                                        d().createElement('span', { className: m.texture }),
                                    ),
                                d().createElement(
                                    'span',
                                    { className: o()(m.state, m.state__default) },
                                    d().createElement('span', { className: m.stateDisabled }),
                                    d().createElement('span', { className: m.stateHighlightHover }),
                                    d().createElement('span', { className: m.stateHighlightActive }),
                                ),
                                d().createElement(
                                    'span',
                                    { className: m.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    v = {
                        base: 'ErrorBoundary_base_46',
                        message: 'ErrorBoundary_message_33',
                        heading: 'ErrorBoundary_heading_ba',
                        button: 'ErrorBoundary_button_74',
                        errorStack: 'ErrorBoundary_errorStack_fe',
                        errorInfo: 'ErrorBoundary_errorInfo_f1',
                    };
                class b extends d().Component {
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
                            ? d().createElement(
                                  'div',
                                  { className: v.base },
                                  d().createElement(
                                      'div',
                                      { className: v.message },
                                      d().createElement('div', { className: v.heading }, a),
                                      d().createElement(p, { mixClass: v.retry, onClick: this.clearError }, s),
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
                var h = n(138);
                const E = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var w;
                function y(e = h.O.client.getSize('rem')) {
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
                        })(t, n, E),
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
                })(w || (w = {}));
                const k = y(),
                    C = (0, u.createContext)(k),
                    S = ['children'];
                (0, u.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, S);
                    const a = (0, u.useContext)(C),
                        r = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        i = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
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
                        if (n.medium && o) return t;
                        if (n.small && i) return t;
                        if (n.extraSmall && l) return t;
                    } else {
                        if (n.extraLargeWidth && c) return f(t, n, w);
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
                const N = ({ children: e }) => {
                    const t = (0, u.useState)(y),
                        n = t[0],
                        a = t[1],
                        r = (0, u.useState)(!1),
                        s = r[0],
                        o = r[1];
                    return (
                        (0, u.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = h.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : y(t);
                                });
                            }
                            return (
                                e(),
                                o(!0),
                                h.O.client.events.on('clientResized', e),
                                h.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (h.O.client.events.off('clientResized', e),
                                        h.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        d().createElement(C.Provider, { value: n }, s && e)
                    );
                };
                var T = n(926),
                    x = n.n(T);
                let I, O, L;
                (!(function (e) {
                    ((e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = E.small.width)] = 'Small'),
                        (e[(e.Medium = E.medium.width)] = 'Medium'),
                        (e[(e.Large = E.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge'));
                })(I || (I = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.width)] = 'Small'),
                            (e[(e.Medium = E.medium.width)] = 'Medium'),
                            (e[(e.Large = E.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge'));
                    })(O || (O = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = E.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.height)] = 'Small'),
                            (e[(e.Medium = E.medium.height)] = 'Medium'),
                            (e[(e.Large = E.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.height)] = 'ExtraLarge'));
                    })(L || (L = {})));
                const D = () => {
                        const e = (0, u.useContext)(C),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return I.ExtraLarge;
                                    case e.large:
                                        return I.Large;
                                    case e.medium:
                                        return I.Medium;
                                    case e.small:
                                        return I.Small;
                                    case e.extraSmall:
                                        return I.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), I.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return O.ExtraLarge;
                                    case e.largeWidth:
                                        return O.Large;
                                    case e.mediumWidth:
                                        return O.Medium;
                                    case e.smallWidth:
                                        return O.Small;
                                    case e.extraSmallWidth:
                                        return O.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), O.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return L.ExtraLarge;
                                    case e.largeHeight:
                                        return L.Large;
                                    case e.mediumHeight:
                                        return L.Medium;
                                    case e.smallHeight:
                                        return L.Small;
                                    case e.extraSmallHeight:
                                        return L.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), L.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    M = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const P = {
                        [O.ExtraSmall]: '',
                        [O.Small]: x().SMALL_WIDTH,
                        [O.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [O.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [O.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    B = {
                        [L.ExtraSmall]: '',
                        [L.Small]: x().SMALL_HEIGHT,
                        [L.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [L.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [L.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [I.ExtraSmall]: '',
                        [I.Small]: x().SMALL,
                        [I.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [I.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [I.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    $ = (e) => {
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
                            })(e, M);
                        const r = D(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            l = r.mediaSize;
                        return d().createElement('div', A({ className: o()(n, P[s], B[i], H[l]) }, a), t);
                    },
                    W = ['children'];
                const z = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, W);
                    return d().createElement(N, null, d().createElement($, n, t));
                };
                var F = n(533),
                    j = n.n(F),
                    G = n(6);
                const V = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        ('function' == typeof n && n(), clearTimeout(a));
                    };
                };
                var U = n(521),
                    q = n(916);
                const K = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = U.n.NONE, t = K, n = !1, a = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== U.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && h.O.view.isEventHandled()) return;
                                (h.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, a]);
                }
                const X = (e = 1) => {
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
                    Z = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Q = (e) => {
                        const t = (0, u.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    J = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ee = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    te = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = Z(`${e}.${n}`, window);
                                return J(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ne = (e) => {
                        const t = ((e) => {
                                const t = X(),
                                    n = t.caller,
                                    a = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: ee(r, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const r = Z(ee(n, `${t}.${a}`), window);
                                    return J(r) ? (e.push(r.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ae = () => (window.injected || (window.injected = new Map()), window.injected);
                const re = q.Sw.instance;
                let se;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(se || (se = {}));
                const oe = (e = 'model', t = se.Deep) => {
                        const n = (0, u.useState)(0),
                            a = (n[0], n[1]),
                            r = (0, u.useMemo)(() => X(), []),
                            s = r.callerUrl,
                            o = r.caller,
                            i = r.resId,
                            l = (0, u.useMemo)(() => {
                                const t = (function (e) {
                                    return ae().has(e);
                                })(s.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !t ? `subViews.${o}.${e}` : e;
                            }, [s, o, e]),
                            c = (0, u.useState)(() =>
                                ((e) => {
                                    const t = Z(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return J(t) ? t.value : t;
                                })(te(l)),
                            ),
                            d = c[0],
                            m = c[1],
                            g = (0, u.useRef)(-1);
                        return (
                            Q(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? se.Deep : se.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== se.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === se.Deep
                                                ? (e === d && a((e) => e + 1), m(e))
                                                : m(Object.assign([], e));
                                        },
                                        r = ne(e);
                                    g.current = re.addCallback(r, n, i, t === se.Deep);
                                }
                            }),
                            (0, u.useEffect)(() => {
                                if (t !== se.None)
                                    return () => {
                                        re.removeCallback(g.current, i);
                                    };
                            }, [i, t]),
                            d
                        );
                    },
                    ie = ['children', 'top', 'bottom'];
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = (e) => {
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
                    return d().createElement(
                        'div',
                        le({}, r, { style: Object.assign({ marginTop: `${n}rem`, marginBottom: `${a}rem` }, r.style) }),
                        t,
                    );
                };
                var ue = n(30);
                const de = 'Onboarding_base_56',
                    me = 'Onboarding_header_61',
                    ge = 'Onboarding_center_c4',
                    _e = 'Onboarding_closeBtn_61',
                    pe = 'Onboarding_body_17',
                    ve = 'Onboarding_overlayReveal_0a',
                    be = 'Onboarding_overlay_30',
                    fe = 'Onboarding_playBtnWrapper_84',
                    he = 'Onboarding_playBtn_1e',
                    Ee = 'Onboarding_footer_d2',
                    we = 'Onboarding_pagination_79',
                    ye = 'Onboarding_paginationBtn_e6',
                    ke = 'Onboarding_selected_2d',
                    Ce = 'Onboarding_replay_39',
                    Se = 'Onboarding_replayIcon_f1',
                    Ne = 'Onboarding_overlayInnerWrapper_e7',
                    Te = 'Onboarding_overlayTitle_95',
                    xe = 'Onboarding_overlayText_7e',
                    Ie = {
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
                    Oe = (0, u.memo)(
                        ({
                            children: e,
                            type: t = 'slide',
                            duration: n = 200,
                            className: a,
                            isOut: r = !1,
                            delayIn: s = '0ms',
                            delayOut: i = '0ms',
                            isDisabled: l = !1,
                            onAnimationComplete: c,
                        }) => {
                            const m = (0, u.useMemo)(
                                    () => ({ animationDelay: r ? i : s, animationDuration: `${n}ms` }),
                                    [r, s, i, n],
                                ),
                                g = o()(Ie[`${t}${r ? 'Out' : 'In'}`], a);
                            return l
                                ? d().createElement('div', { className: a }, e)
                                : d().createElement('div', { onAnimationEnd: c, className: g, style: m }, e);
                        },
                    ),
                    Re = {
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
                    Le = [
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
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const Me = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        a = e.goto,
                        r = e.classNames,
                        s = e.onMouseEnter,
                        i = e.onMouseLeave,
                        l = e.onMouseDown,
                        c = e.onMouseUp,
                        m = e.side,
                        g = void 0 === m ? 'left' : m,
                        _ = e.type,
                        p = void 0 === _ ? 'back' : _,
                        v = e.soundHover,
                        b = void 0 === v ? 'highlight' : v,
                        f = e.soundClick,
                        E = void 0 === f ? 'play' : f,
                        w = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Le);
                    const y = (0, u.useCallback)(
                            (e) => {
                                (null == s || s(e), h.O.sound.play.sound(b));
                            },
                            [s, b],
                        ),
                        k = (0, u.useCallback)(
                            (e) => {
                                null == i || i(e);
                            },
                            [i],
                        ),
                        C = (0, u.useCallback)(
                            (e) => {
                                (null == l || l(e), h.O.sound.play.sound(E));
                            },
                            [l, E],
                        ),
                        S = (0, u.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        );
                    return d().createElement(
                        'div',
                        De(
                            {
                                className: o()(
                                    Re.base,
                                    Re[`base__${p}`],
                                    Re[`base__${g}`],
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
                        'info' !== p && d().createElement('div', { className: Re.shine }),
                        d().createElement(
                            'div',
                            {
                                className: o()(
                                    Re.icon,
                                    Re[`icon__${p}`],
                                    Re[`icon__${g}`],
                                    null == r ? void 0 : r.icon,
                                ),
                            },
                            d().createElement('div', { className: o()(Re.glow, null == r ? void 0 : r.glow) }),
                        ),
                        d().createElement(
                            'div',
                            { className: o()(Re.caption, Re[`caption__${p}`], null == r ? void 0 : r.caption) },
                            t,
                        ),
                        a && d().createElement('div', { className: o()(Re.goto, null == r ? void 0 : r.goto) }, a),
                    );
                };
                var Ae;
                !(function (e) {
                    ((e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second'));
                })(Ae || (Ae = {}));
                const Pe = R.strings.dogtags.onboarding.header.title(),
                    Be = R.strings.dogtags.onboarding.header.close(),
                    He = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    $e = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    We = R.strings.dogtags.onboarding.overlay.replay(),
                    ze = (0, u.memo)(({ onClose: e }) => {
                        const t = oe('model', se.None).onPlayVideo,
                            n = (0, u.useState)(!1),
                            a = n[0],
                            r = n[1],
                            s = (0, u.useState)(!1),
                            i = s[0],
                            c = s[1],
                            m = (0, u.useState)(Ae.First),
                            g = m[0],
                            _ = m[1],
                            v = (e) => () => (l(R.sounds.play()), _(e)),
                            b = (0, u.useCallback)((t) => (g === Ae.First ? _(Ae.Second) : e(t)), [g, e]),
                            f = (0, u.useCallback)(
                                () => (
                                    l(R.sounds.play()),
                                    g === Ae.First
                                        ? (setTimeout(() => r(!0), 500), t({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => c(!0), 500), t({ urlKey: 'onboardingVideo2' }))
                                ),
                                [g, t],
                            ),
                            h = (0, u.useCallback)(() => l(R.sounds.highlight()), []),
                            E = ((w = a),
                            (y = i),
                            {
                                [Ae.First]: {
                                    title: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [Ae.Second]: {
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
                            C = o()(ye, g === Ae.First && ke),
                            S = o()(ye, g === Ae.Second && ke);
                        return d().createElement(
                            'div',
                            { className: de },
                            d().createElement(
                                'div',
                                { className: me },
                                d().createElement('div', { className: ge }, Pe),
                                d().createElement(
                                    'div',
                                    { className: _e },
                                    d().createElement(Me, {
                                        caption: Be,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: h,
                                    }),
                                ),
                            ),
                            d().createElement(
                                'div',
                                { className: pe, style: k },
                                d().createElement(
                                    Oe,
                                    { type: 'fade', className: ve },
                                    d().createElement(
                                        'div',
                                        { className: be },
                                        ((!a && g === Ae.First) || (!i && g === Ae.Second)) &&
                                            d().createElement(
                                                'div',
                                                { className: fe, onClick: f, onMouseEnter: h },
                                                d().createElement('div', { className: he }),
                                            ),
                                        d().createElement(
                                            'div',
                                            { className: Ne },
                                            d().createElement('div', { className: Te }, E.title),
                                            d().createElement('div', { className: xe }, E.text),
                                            ((g === Ae.First && a) || (g === Ae.Second && i)) &&
                                                d().createElement(
                                                    p,
                                                    { type: 'main', size: 'medium', onClick: b, onMouseEnter: h },
                                                    E.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            d().createElement(
                                'div',
                                { className: Ee },
                                ((g === Ae.First && a) || (g === Ae.Second && i)) &&
                                    d().createElement(
                                        'div',
                                        { className: Ce, onClick: f, onMouseEnter: h },
                                        d().createElement('div', { className: Se }),
                                        We,
                                    ),
                                d().createElement(
                                    'div',
                                    { className: we },
                                    d().createElement(
                                        'div',
                                        { className: C, onClick: v(Ae.First), onMouseEnter: h },
                                        He,
                                    ),
                                    d().createElement(
                                        'div',
                                        { className: S, onClick: v(Ae.Second), onMouseEnter: h },
                                        $e,
                                    ),
                                ),
                            ),
                        );
                    });
                var Fe = n(664);
                const je = 'Flame_base_90',
                    Ge = 'Flame_slides_58',
                    Ve = 'Flame_frame_29',
                    Ue = (0, u.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, n) => {
                                    const a = `flame_${`0${n}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return d().createElement(
                            'div',
                            { className: o()(je, e), 'data-testid': 'Flame' },
                            d().createElement(
                                'div',
                                { className: Ge },
                                t.map((e) => d().createElement('img', { key: e, src: e, className: Ve })),
                            ),
                        );
                    });
                let qe, Ke, Ye, Xe, Ze;
                (!(function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(qe || (qe = {})),
                    (function (e) {
                        ((e[(e.Equipped = 0)] = 'Equipped'),
                            (e[(e.Locked = 1)] = 'Locked'),
                            (e[(e.Open = 2)] = 'Open'));
                    })(Ke || (Ke = {})),
                    (function (e) {
                        ((e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all'));
                    })(Ye || (Ye = {})),
                    (function (e) {
                        ((e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base'));
                    })(Xe || (Xe = {})),
                    (function (e) {
                        ((e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season'));
                    })(Ze || (Ze = {})));
                const Qe = {
                        [Ze.Dedication]: [Xe.Dedication],
                        [Ze.Triumph]: [Xe.Triumph],
                        [Ze.Season]: [Xe.Skill, Xe.RankedSkill],
                    },
                    Je = 10;
                let et;
                function tt(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return nt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return nt(e, t);
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
                function nt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                !(function (e) {
                    ((e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE'));
                })(et || (et = {}));
                const at = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    rt = (e, t) => {
                        const n = e.id;
                        return n === t.background.id || n === t.engraving.id;
                    },
                    st = R.images.gui.maps.icons.dogtags,
                    ot = 'R.images.gui.maps.icons.dogtags',
                    it = R.strings.dogtags.component,
                    lt = 'R.strings.dogtags.component',
                    ct = (e, t, n, a = 0, r = 'big', s = st, o = it) => {
                        s &&
                            !(r in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${ot}`,
                            );
                        const i = r in s ? s[r] : void 0,
                            l = `${t}s`;
                        i &&
                            !(l in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[ot, r].join('.')}`,
                            );
                        const c = i && l in i ? i[l] : void 0,
                            u = `${t}_${e}_${t === Ye.Engraving ? a : '0'}`;
                        c &&
                            !(u in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${u}" does not exist in ${[ot, r, l].join('.')}`,
                            );
                        const d = c && u in c ? c[u]() : s.big.backgrounds.background_66_0();
                        o &&
                            !(t in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${lt}`,
                            );
                        const m = t in o ? o[t] : void 0;
                        m &&
                            !(n in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[lt, t].join('.')}`,
                            );
                        const g = m && n in m ? m[n] : void 0,
                            _ = `c_${e}`;
                        g &&
                            !(_ in g) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${_}" does not exist in ${[lt, t, n].join('.')}`,
                            );
                        return { image: d, strings: g && _ in g ? g[_] : void 0 };
                    },
                    ut = (e) => e.filter((e) => e.value.items.length > 0),
                    dt = (e, t) => {
                        const n = ((e) => Object.keys(e).filter((t) => e[t]))(t),
                            a = n.reduce((e, t) => (e.push(...Qe[t]), e), []);
                        return ut(
                            e.map((e) => ({
                                value: Object.assign({}, e.value, {
                                    items: e.value.items.filter((e) => a.includes(e.value.purpose)),
                                }),
                            })),
                        );
                    },
                    mt = { [qe.Engraving]: 'engravingGrid', [qe.Background]: 'backgroundGrid' },
                    gt = { [qe.Engraving]: 'engraving', [qe.Background]: 'background' },
                    _t = (e, t) => {
                        for (var n, a = tt(e.values()); !(n = a()).done; ) {
                            for (var r, s = tt(n.value.value.items.values()); !(r = s()).done; ) {
                                const e = r.value;
                                if (e.value.id === t) return e.value;
                            }
                        }
                    },
                    pt = (e) => e.reduce((e, t) => e + t.value.items.length, 0),
                    vt = (e, t = et.NUMBER) => {
                        const n = q.Z5.getRealFormat(e, q.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                        return t === et.PERCENTAGE ? `${n} %` : n;
                    },
                    bt = {
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
                    ht = (e, t = ft) => {
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
                    Et = (e) => ({ backgroundImage: `url(${e})` });
                let wt;
                !(function (e) {
                    ((e.x300 = 'x300'), (e.x400 = 'x400'));
                })(wt || (wt = {}));
                const yt = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(yt))
                    .filter((e) => '$' !== e[0])
                    .map((e) => yt[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const kt = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        ((e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex'));
                    },
                    Ct = {
                        appear: bt.flameAnimation__appear,
                        appearActive: bt.flameAnimation__appearActive,
                        appearDone: bt.flameAnimation__appearDone,
                        enter: bt.flameAnimation__enter,
                        enterActive: bt.flameAnimation__enterActive,
                        enterDone: bt.flameAnimation__enterDone,
                        exit: bt.flameAnimation__exit,
                        exitActive: bt.flameAnimation__exitActive,
                        exitDone: bt.flameAnimation__exitDone,
                    },
                    St = ({
                        playerName: e,
                        clanTag: t,
                        background: n,
                        engraving: a,
                        isHighlighted: r,
                        size: s = wt.x300,
                    }) => {
                        const i = n.currentGrade,
                            c = a.currentGrade,
                            m = ct(n.id, Ye.Background, n.purpose || 'default', i || 0, 'big'),
                            g = ct(a.id, Ye.Engraving, a.purpose || 'dedication', c || 0, 'big'),
                            _ = a.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const a = n % 2 == 1;
                                return (e.push(...(a ? [t] : t.split(''))), e);
                            }, []);
                        const p = g.strings ? g.strings.title() : null,
                            v = Et(m.image),
                            b = Et(g.image),
                            f = ((e) => {
                                const t = (0, u.useRef)(!1);
                                return (
                                    (0, u.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(r);
                        return (
                            (0, u.useEffect)(() => {
                                r && !f ? l(R.sounds.dt_flame_start()) : f && !r && l(R.sounds.dt_flame_stop());
                            }, [r, f]),
                            d().createElement(
                                'div',
                                { className: o()(bt.base, bt[`base__${s}`]) },
                                d().createElement(
                                    Fe.Z,
                                    {
                                        in: r,
                                        timeout: 400,
                                        className: bt.flameAnimation,
                                        classNames: Ct,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    d().createElement(Ue, null),
                                ),
                                d().createElement(
                                    'div',
                                    { className: bt.dogtags_top },
                                    d().createElement('div', { className: bt.background, style: v }),
                                    d().createElement('div', { className: bt.shadow }),
                                    d().createElement('div', { className: bt.playerInfoShadow }),
                                    d().createElement('div', { className: bt.name }, e),
                                    d().createElement('div', { className: bt.clan }, t),
                                    d().createElement('div', { className: bt.engraving, style: b }),
                                ),
                                d().createElement(
                                    'div',
                                    { className: bt.dogtags_bottom },
                                    d().createElement(
                                        'div',
                                        { className: bt.trackerInfoWrapper },
                                        d().createElement('div', { className: bt.trackerText }, p),
                                        d().createElement(
                                            'div',
                                            { className: bt.trackerValue },
                                            _.map((e, t) => {
                                                if (' ' === e)
                                                    return d().createElement('div', {
                                                        key: e + t,
                                                        className: bt.spaceDigit,
                                                    });
                                                const n = ht(e, yt);
                                                return d().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: kt,
                                                    className: bt.trackerDigit,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Nt = {
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
                let Tt;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(Tt || (Tt = {}));
                let xt;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
                })(xt || (xt = {}));
                const It = 'metrics',
                    Ot = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    Rt = (e, t) => {
                        const n = (0, u.useCallback)(
                            (n, a = Tt.Info, r) => {
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
                    Lt = (e) => {
                        const t = Rt(e, It),
                            n = (0, u.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, Ot(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    Dt = 'dog_tags';
                let Mt, At, Pt, Bt;
                (!(function (e) {
                    ((e.Click = 'click'), (e.Display = 'display'));
                })(Mt || (Mt = {})),
                    (function (e) {
                        ((e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog'));
                    })(At || (At = {})),
                    (function (e) {
                        ((e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button'));
                    })(Pt || (Pt = {})),
                    (function (e) {
                        ((e.Lock = 'lock'), (e.Unlock = 'unlock'));
                    })(Bt || (Bt = {})));
                const Ht = { engraving: Pt.CancelEngraving, background: Pt.CancelBackground, all: Pt.DiscardChanges },
                    $t = () => {
                        const e = Lt(Dt);
                        return (t) => {
                            e({ action: Mt.Click, parentScreen: At.DogTags, item: Ht[t] });
                        };
                    },
                    Wt = {
                        base: 'Customization_base_4e',
                        status: 'Customization_status_c1',
                        checkIcon: 'Customization_checkIcon_bf',
                        allEquipped: 'Customization_allEquipped_ed',
                        buttonsWrapper: 'Customization_buttonsWrapper_6d',
                        buttonWrapper: 'Customization_buttonWrapper_c3',
                        button: 'Customization_button_c3',
                    },
                    zt = ({ text: e, isEquippingDisabled: t, onEquip: n, classNames: a }) =>
                        d().createElement(
                            'div',
                            { className: null == a ? void 0 : a.base },
                            d().createElement(
                                p,
                                {
                                    type: g.primary,
                                    size: _.medium,
                                    mixClass: null == a ? void 0 : a.button,
                                    onClick: () => {
                                        t || (n(), l(R.sounds.ach_dog_tag_equip()));
                                    },
                                    disabled: t,
                                },
                                e,
                            ),
                        ),
                    Ft = 'Selection_base_7b',
                    jt = 'Selection_selection_24',
                    Gt = 'Selection_resetBtn_1b',
                    Vt = R.strings.dogtags.customization,
                    Ut = ({ selectedItems: e, isBackgroundEquipped: t, isEngravingEquipped: n, onItemReset: a }) => {
                        const r = $t(),
                            s = (e) => () => {
                                (l(R.sounds.dt_locked_reset_button()), a(e), r(e));
                            };
                        return d().createElement(
                            'div',
                            { className: Ft },
                            !t &&
                                e.background.isLocked &&
                                d().createElement(
                                    'div',
                                    { className: jt, onClick: s(Ye.Background), onMouseEnter: c.playHighlight },
                                    Vt.pills.background(),
                                    d().createElement('div', { className: Gt }),
                                ),
                            !n &&
                                e.engraving.isLocked &&
                                d().createElement(
                                    'div',
                                    { className: jt, onClick: s(Ye.Engraving), onMouseEnter: c.playHighlight },
                                    Vt.pills.engraving(),
                                    d().createElement('div', { className: Gt }),
                                ),
                        );
                    },
                    qt = R.strings.dogtags.customization;
                let Kt;
                !(function (e) {
                    ((e.Equipped = 'equipped'),
                        (e.Unequipped = 'unequipped'),
                        (e.AnimatedEquipped = 'animatedEquipped'));
                })(Kt || (Kt = {}));
                const Yt = { base: Wt.buttonWrapper, button: Wt.button },
                    Xt = (0, u.memo)(
                        ({
                            selectedItems: e,
                            equippedItems: t,
                            onItemReset: n,
                            isAnimatedDogTagSelected: a,
                            onEquip: r,
                        }) => {
                            const s = e.engraving.id === t.engraving.id,
                                i = e.background.id === t.background.id,
                                l = ((e, t, n) => {
                                    switch (!0) {
                                        case e:
                                            return Kt.AnimatedEquipped;
                                        case t && n:
                                            return Kt.Equipped;
                                        default:
                                            return Kt.Unequipped;
                                    }
                                })(a, i, s),
                                c = (0, ue.useTransition)(l, {
                                    initial: { transform: 'translateY(0rem)', opacity: 1 },
                                    from: { transform: 'translateY(-20rem)', opacity: 0 },
                                    enter: { transform: 'translateY(0rem)', opacity: 1 },
                                    leave: { transform: 'translateY(20rem)', opacity: 0 },
                                    config: { duration: 300, easing: Nt.easeOutCubic },
                                }),
                                u = D().mediaSize >= I.Large ? _.medium : _.small,
                                m = $t(),
                                v = (() => {
                                    const e = Lt(Dt);
                                    return () => {
                                        e({ action: Mt.Click, parentScreen: At.DogTags, item: Pt.ConfirmChanges });
                                    };
                                })(),
                                b = () => {
                                    (n(Ye.Background), n(Ye.Engraving), m(Ye.All));
                                },
                                f = () => {
                                    (v(), r());
                                },
                                h = e.engraving.isLocked || e.background.isLocked;
                            return d().createElement(
                                'div',
                                { className: o()(Wt.base, Wt[`base__${l}`]) },
                                c((t, a) =>
                                    d().createElement(
                                        ue.animated.div,
                                        { className: Wt.status, style: t },
                                        (() => {
                                            switch (a) {
                                                case Kt.AnimatedEquipped:
                                                    return d().createElement(
                                                        d().Fragment,
                                                        null,
                                                        d().createElement(zt, {
                                                            text: qt.button.equip(),
                                                            isEquippingDisabled: h,
                                                            onEquip: f,
                                                            classNames: Yt,
                                                        }),
                                                        d().createElement(Ut, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: i,
                                                            isEngravingEquipped: s,
                                                            onItemReset: n,
                                                        }),
                                                    );
                                                case Kt.Equipped:
                                                    return d().createElement(
                                                        'div',
                                                        { className: Wt.allEquipped },
                                                        d().createElement('div', { className: Wt.checkIcon }),
                                                        qt.equipped(),
                                                    );
                                                case Kt.Unequipped:
                                                    return d().createElement(
                                                        d().Fragment,
                                                        null,
                                                        d().createElement(
                                                            'div',
                                                            { className: Wt.buttonsWrapper },
                                                            d().createElement(zt, {
                                                                text: qt.button.equipNew(),
                                                                isEquippingDisabled: h,
                                                                onEquip: f,
                                                                classNames: Yt,
                                                            }),
                                                            d().createElement(
                                                                'div',
                                                                { className: Wt.buttonWrapper },
                                                                d().createElement(
                                                                    p,
                                                                    {
                                                                        type: g.secondary,
                                                                        size: u,
                                                                        onClick: b,
                                                                        mixClass: Wt.button,
                                                                    },
                                                                    qt.button.discard(),
                                                                ),
                                                            ),
                                                        ),
                                                        d().createElement(Ut, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: i,
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
                    Zt = 'DogtagsInfo_base_68',
                    Qt = 'DogtagsInfo_title_02',
                    Jt = 'DogtagsInfo_progressBarWrapper_48',
                    en = 'DogtagsInfo_currentLevel_14',
                    tn = 'DogtagsInfo_nextLevel_53',
                    nn = 'DogtagsInfo_valuesWrapper_ac',
                    an = 'DogtagsInfo_valuesWrapper_inner_55',
                    rn = 'DogtagsInfo_valuesWrapper__locked_59',
                    sn = 'DogtagsInfo_currentValue_25',
                    on = 'DogtagsInfo_totalValue_47',
                    ln = 'DogtagsInfo_valuesSeparator_db',
                    cn = 'DogtagsInfo_medalInfo_0d',
                    un = 'DogtagsInfo_skillInfo_13',
                    dn = 'DogtagsInfo_skillInfoIcon_f9',
                    mn = 'DogtagsInfo_shieldLevelWrapper_fa',
                    gn = 'DogtagsInfo_single_86',
                    _n = 'DogtagsInfo_currentShieldWrapper_b0',
                    pn = 'DogtagsInfo_nextShieldWrapper_7e',
                    vn = 'DogtagsInfo_currentLevelShield_60',
                    bn = 'DogtagsInfo_currentLevelValue_d5',
                    fn = 'DogtagsInfo_nextLevelValue_d5',
                    hn = 'DogtagsInfo_arrowLock_6a',
                    En = 'DogtagsInfo_nextLevelShield_22',
                    wn = 'DogtagsInfo_infoSeparator_d7',
                    yn = 'DogtagsInfo_lockedText_9d',
                    kn = 'DogtagsInfo_lockedIcon_04',
                    Cn = 'DogtagsInfo_skillDescriptionWrapper_dc',
                    Sn = 'DogtagsInfo_skillDescription_94',
                    Nn = 'DogtagsInfo_skillInfoBorderTop_62',
                    Tn = 'DogtagsInfo_skillInfoBorderBottom_50',
                    xn = (0, u.memo)(({ infoTitle: e, infoText: t, isLocked: n, unlockText: a }) =>
                        d().createElement(
                            'div',
                            { className: Zt },
                            d().createElement('div', { className: Qt }, e),
                            d().createElement('div', { className: cn }, t),
                            n &&
                                d().createElement(
                                    d().Fragment,
                                    null,
                                    d().createElement('div', { className: wn }),
                                    d().createElement(
                                        'div',
                                        { className: yn },
                                        d().createElement('div', { className: kn }),
                                        a,
                                    ),
                                ),
                        ),
                    ),
                    In = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let On, Rn;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(On || (On = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Rn || (Rn = {})));
                const Ln = ({ size: e = On.Default }) => {
                        const t = o()(In.background, In[`background__${e}`]);
                        return d().createElement('div', { className: t });
                    },
                    Dn = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Mn = ({ size: e }) => {
                        const t = o()(Dn.base, Dn[`base__${e}`]);
                        return d().createElement('div', { className: t });
                    },
                    An = {
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
                    Pn = (0, u.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const i = o()(
                                    An.base,
                                    An[`base__${e}`],
                                    n && An.base__disabled,
                                    r && An.base__finished,
                                    s && An.base__withoutBounce,
                                ),
                                l = !n && !r;
                            return d().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                d().createElement('div', { className: An.pattern }),
                                d().createElement('div', { className: An.gradient }),
                                l && d().createElement(Mn, { size: e }),
                            );
                        },
                    );
                let Bn, Hn;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Bn || (Bn = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Hn || (Hn = {})));
                const $n = 'ProgressBarDeltaGrow_base_7e',
                    Wn = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    zn = 'ProgressBarDeltaGrow_glow_68',
                    Fn = (e) => (e ? { left: 0 } : { right: 0 }),
                    jn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Gn = (e) => ({ transitionDuration: `${e}ms` }),
                    Vn = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = s < a,
                                g = (0, u.useState)(Bn.Idle),
                                _ = g[0],
                                p = g[1],
                                v = _ === Bn.End,
                                b = _ === Bn.Idle,
                                f = _ === Bn.Grow,
                                h = _ === Bn.Shrink,
                                E = (0, u.useCallback)(
                                    (e) => {
                                        (p(e), l && l(e));
                                    },
                                    [l],
                                ),
                                w = (0, u.useCallback)(
                                    (e, t) =>
                                        V(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, u.useEffect)(() => {
                                if (!n)
                                    return b
                                        ? w(Bn.Grow, t)
                                        : f
                                          ? w(Bn.Shrink, e)
                                          : h
                                            ? w(Bn.End, e)
                                            : void (v && i && i());
                            }, [w, n, v, f, b, h, i, t, e]);
                            const y = (0, u.useMemo)(() => Object.assign({ width: '100%' }, Gn(e), Fn(m)), [m, e]),
                                k = (0, u.useMemo)(() => Object.assign({ width: '0%' }, Gn(e), Fn(m)), [m, e]),
                                C = (0, u.useMemo)(() => Object.assign({ width: '0%' }, jn(m, a), Gn(e)), [a, m, e]),
                                S = (0, u.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, jn(m, a), Gn(e)),
                                    [a, m, s, e],
                                );
                            if (v) return null;
                            const N = o()($n, c, m && 0 === s && Wn);
                            return d().createElement(
                                'div',
                                { style: b ? C : S, className: N },
                                d().createElement(
                                    'div',
                                    { style: h ? k : y, className: zn },
                                    d().createElement(Mn, { size: r }),
                                ),
                            );
                        },
                    ),
                    Un = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = e < n,
                                m = (0, u.useState)(!1),
                                g = m[0],
                                _ = m[1],
                                p = (0, u.useCallback)(
                                    (e) => {
                                        (e === Bn.Shrink && _(!0), l && l(e));
                                    },
                                    [l],
                                ),
                                v = (0, u.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                b = (0, u.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return d().createElement(
                                d().Fragment,
                                null,
                                d().createElement(Pn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: c && 0 === e,
                                    baseStyles: g ? b : v,
                                }),
                                n >= 0 &&
                                    d().createElement(Vn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: o.freezed,
                                        onEndAnimation: i,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    qn = 'ProgressBarDeltaSimple_base_6c',
                    Kn = 'ProgressBarDeltaSimple_delta_99',
                    Yn = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                        }) => {
                            const l = s < a,
                                c = (0, u.useState)(Hn.Idle),
                                m = c[0],
                                g = c[1],
                                _ = m === Hn.In,
                                p = m === Hn.End,
                                v = m === Hn.Idle,
                                b = (0, u.useCallback)(
                                    (e) => {
                                        (g(e), i && i(e));
                                    },
                                    [i],
                                );
                            ((0, u.useEffect)(() => {
                                if (v && !n) {
                                    return V(() => {
                                        b(Hn.In);
                                    }, t);
                                }
                            }, [b, n, v, t]),
                                (0, u.useEffect)(() => {
                                    if (_) {
                                        return V(() => {
                                            (o && o(), b(Hn.End));
                                        }, e + t);
                                    }
                                }, [b, _, o, t, e]));
                            const f = (0, u.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                h = (0, u.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                E = (0, u.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${l ? s : a}%` }),
                                    [a, l, s],
                                );
                            return p
                                ? null
                                : d().createElement(
                                      'div',
                                      { className: qn, style: E },
                                      d().createElement(
                                          'div',
                                          { style: v ? f : h, className: Kn },
                                          d().createElement(Mn, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Xn = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: i,
                            onEndAnimation: l,
                        }) => {
                            const c = (0, u.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return d().createElement(
                                d().Fragment,
                                null,
                                d().createElement(Pn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: c,
                                }),
                                n >= 0 &&
                                    d().createElement(Yn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: i,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    Zn = ['onComplete', 'onEndAnimation'];
                function Qn() {
                    return (
                        (Qn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Qn.apply(this, arguments)
                    );
                }
                const Jn = (0, u.memo)((e) => {
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
                            })(e, Zn);
                        const r = (0, u.useState)(!1),
                            s = r[0],
                            o = r[1],
                            i = (0, u.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== s && o(e), e && t && t(), n && n());
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case Rn.Simple:
                                return d().createElement(Xn, Qn({}, a, { onEndAnimation: i, isComplete: s }));
                            case Rn.Growing:
                                return d().createElement(Un, Qn({}, a, { onEndAnimation: i, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    ea = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: r }) => {
                        const s = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, u.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            d().createElement(Pn, { size: e, disabled: a, baseStyles: s, isComplete: o, lineRef: n })
                        );
                    },
                    ta = ['onEndAnimation'];
                function na() {
                    return (
                        (na =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        na.apply(this, arguments)
                    );
                }
                const aa = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, ta);
                    const a = (0, u.useRef)({}),
                        r = (0, u.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        d().createElement(
                            Jn,
                            na({}, n, {
                                onEndAnimation: r,
                                key: `${s}-${n.to}-${null == n ? void 0 : n.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function ra() {
                    return (
                        (ra =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ra.apply(this, arguments)
                    );
                }
                const sa = (0, u.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: s,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === t)
                                return d().createElement(ea, {
                                    key: `${r}-${t}-${s}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const u = {
                                from: r,
                                to: t,
                                size: e,
                                additionalKey: s,
                                lineRef: n,
                                disabled: a,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: i,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? d().createElement(aa, u)
                                : d().createElement(Jn, ra({ key: `${r}-${t}-${s}` }, u));
                        },
                    ),
                    oa = (e) => {
                        var t, n, a, r, s, o, i, l, c, u, d, m, g, _, p, v, b, f, h, E;
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
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
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
                                null != (b = null == (f = e.glowSettings) ? void 0 : f.smallHeight) ? b : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (h = null == (E = e.glowSettings) ? void 0 : E.mixBlendMode) ? h : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    ia = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_bg_base',
                        bg: { height: '22rem', heightSmall: '4rem' },
                        glowSettings: {
                            width: '34rem',
                            height: '54rem',
                            mixBlendMode: 'normal',
                            smallWidth: '34rem',
                            smallHeight: '36rem',
                        },
                        line: {
                            bgColorBase: 'rgba(191, 232, 255, 0.6)',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'rgba(191, 232, 255, 0.6)',
                            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.16)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.24))',
                        },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            bgImageDisabled:
                                'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            size: '4rem 22rem',
                            borderSize: '0',
                            gradient: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            gradientFinished: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            mixBlendMode: 'normal',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow_small',
                        delta: {
                            color: '#fff',
                            shadow: ' 0 0 4px 1px rgba(120, 180, 255, 0.4), 0 0 9px 1px rgba(100, 160, 255, 0.4), 0 0 12px 2px rgba(80, 140, 255, 0.4), 0 0 12px 4px rgba(60, 120, 255, 0.4)',
                        },
                    },
                    la =
                        (Object.assign({}, ia, {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                            line: Object.assign({}, ia.line, {
                                bgColorBase: '#83C6A5',
                                bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                            }),
                            pattern: Object.assign({}, ia.pattern, {
                                bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                                bgImageDisabled:
                                    'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                                bgImageFinished:
                                    'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                            }),
                        }),
                        (e, t, n) => (n < e ? e : n > t ? t : n)),
                    ca = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (la(0, t, n) / t) * 100;
                        }
                        return e;
                    };
                const ua = {
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
                    da = {
                        freezed: !1,
                        withStack: !1,
                        type: Rn.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ma = (0, u.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ua,
                            size: n = On.Default,
                            animationSettings: a = da,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            value: i,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: m,
                            onChangeAnimationState: g,
                            onEndAnimation: _,
                            onComplete: p,
                            className: v,
                        }) => {
                            const b = (function (e, t, n) {
                                return (0, u.useMemo)(() => {
                                    const a = (la(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: ca(a, t, n) };
                                }, [n, t, e]);
                            })(i, e, l);
                            return d().createElement(
                                'div',
                                { className: o()(In.base, v, In[`base__${n}`]), style: oa(t) },
                                !s && d().createElement(Ln, { size: n }),
                                d().createElement(sa, {
                                    size: n,
                                    lineRef: m,
                                    disabled: r,
                                    value: b.value,
                                    deltaFrom: b.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: g,
                                    onComplete: p,
                                }),
                            );
                        },
                    ),
                    ga = [
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
                function _a(e) {
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
                const pa = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    va = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            g = e.decoratorId,
                            _ = void 0 === g ? 0 : g,
                            p = e.isEnabled,
                            v = void 0 === p || p,
                            b = e.targetId,
                            f = void 0 === b ? 0 : b,
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
                            })(e, ga);
                        const y = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, u.useMemo)(() => f || X().resId, [f]),
                            C = (0, u.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (pa(n, _, { isMouseEvent: !0, on: !0, arguments: _a(a) }, k),
                                    h && h(),
                                    (y.current.isVisible = !0));
                            }, [n, _, a, k, h]),
                            S = (0, u.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        pa(n, _, { on: !1 }, k),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1));
                                }
                            }, [n, _, k, E]),
                            N = (0, u.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, u.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return v
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(y.current.timeoutId),
                                                      (y.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === m && S(), null == i || i(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === m && S(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    ba = R.strings.dogtags.customization,
                    fa = (0, u.memo)(
                        ({
                            id: e,
                            infoTitle: t,
                            infoText: n,
                            isLocked: a,
                            currentGrade: r,
                            currentProgress: s,
                            currentGradeValue: i,
                            nextGradeValue: l,
                            unlockText: c,
                            progressNumberType: m,
                            isExternalUnlockOnly: g,
                        }) => {
                            const _ = r + 1,
                                p = (0, u.useMemo)(() => ({ componentId: e }), [e]),
                                v = g && !a;
                            return d().createElement(
                                'div',
                                { className: Zt },
                                d().createElement('div', { className: Qt }, t),
                                d().createElement('div', { className: un }, n),
                                a &&
                                    d().createElement(
                                        d().Fragment,
                                        null,
                                        d().createElement('div', { className: wn }),
                                        d().createElement(
                                            'div',
                                            { className: yn },
                                            d().createElement('div', { className: kn }),
                                            c,
                                        ),
                                    ),
                                d().createElement(
                                    va,
                                    {
                                        contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                        isEnabled: !a,
                                        args: p,
                                    },
                                    d().createElement(
                                        'div',
                                        null,
                                        (!g || v) &&
                                            d().createElement(
                                                'div',
                                                { className: an },
                                                d().createElement('div', { className: sn }, vt(s)),
                                                _ < Je &&
                                                    d().createElement(
                                                        d().Fragment,
                                                        null,
                                                        d().createElement('div', { className: ln }, '/'),
                                                        d().createElement('div', { className: on }, vt(a ? i : l, m)),
                                                    ),
                                            ),
                                        !a &&
                                            d().createElement(
                                                'div',
                                                { className: Jt },
                                                d().createElement(ma, {
                                                    size: On.Medium,
                                                    value: s - i,
                                                    maxValue: l - i,
                                                    animationSettings: da,
                                                }),
                                            ),
                                        d().createElement(
                                            'div',
                                            { className: o()(nn, a && rn) },
                                            !a &&
                                                d().createElement(
                                                    'div',
                                                    { className: en },
                                                    `${ba.currentLevel()} ${at[r]}`,
                                                ),
                                            !a && _ < Je && d().createElement('div', { className: tn }, at[r + 1]),
                                            !a && _ === Je && d().createElement('div', { className: tn }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ha = (0, u.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: l,
                            isDemoted: c,
                            progressNumberType: m,
                        }) => {
                            const g = R.images.gui.maps.icons.dogtags,
                                _ = r + 1,
                                p = r + 2,
                                v = g.level_shields[`Level_${_}`](),
                                b = (0, u.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                f = g.level_shields[`Level_gr_${p <= Je ? p : 1}`](),
                                h = (0, u.useMemo)(() => ({ backgroundImage: `url(${f})` }), [f]),
                                E = t || c,
                                w = o()(mn, _ === Je && gn),
                                y = (0, u.useMemo)(() => ({ componentId: e }), [e]);
                            return d().createElement(
                                'div',
                                { className: Zt },
                                d().createElement('div', { className: Qt }, n),
                                d().createElement('div', { className: un }, a),
                                !E &&
                                    d().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.ThreeMonthsTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        d().createElement(
                                            'div',
                                            { className: Cn },
                                            d().createElement('div', { className: Nn }),
                                            d().createElement(
                                                'div',
                                                { className: Sn },
                                                R.strings.dogtags.customization.skill_info(),
                                                d().createElement('div', { className: dn }),
                                            ),
                                            d().createElement('div', { className: Tn }),
                                        ),
                                    ),
                                E &&
                                    d().createElement(
                                        d().Fragment,
                                        null,
                                        d().createElement('div', { className: wn }),
                                        d().createElement(
                                            'div',
                                            { className: yn },
                                            d().createElement('div', { className: kn }),
                                            l,
                                        ),
                                    ),
                                !E &&
                                    d().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        d().createElement(
                                            'div',
                                            { className: w },
                                            d().createElement(
                                                'div',
                                                { className: _n },
                                                d().createElement('div', { className: vn, style: b }),
                                                d().createElement('div', { className: bn }, vt(s, m)),
                                            ),
                                            _ < Je &&
                                                d().createElement(
                                                    d().Fragment,
                                                    null,
                                                    d().createElement('div', { className: hn }),
                                                    d().createElement(
                                                        'div',
                                                        { className: pn },
                                                        d().createElement('div', { className: En, style: h }),
                                                        d().createElement('div', { className: fn }, vt(i, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Ea = R.images.gui.maps.icons.dogtags,
                    wa = (0, u.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: l,
                            progressNumberType: c,
                        }) => {
                            const m = r + 1,
                                g = r + 2,
                                _ = Ea.level_shields[`Level_${m}`](),
                                p = (0, u.useMemo)(() => ({ backgroundImage: `url(${_})` }), [_]),
                                v = g < Je ? Ea.level_shields[`Level_gr_${g}`]() : '',
                                b = (0, u.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                f = o()(mn, { [gn]: 4 === r }),
                                h = (0, u.useMemo)(() => ({ componentId: e }), [e]);
                            return d().createElement(
                                'div',
                                { className: Zt },
                                d().createElement('div', { className: Qt }, n),
                                d().createElement('div', { className: un }, a),
                                t &&
                                    d().createElement(
                                        d().Fragment,
                                        null,
                                        d().createElement('div', { className: wn }),
                                        d().createElement(
                                            'div',
                                            { className: yn },
                                            d().createElement('div', { className: kn }),
                                            l,
                                        ),
                                    ),
                                !t &&
                                    d().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.TriumphTooltip('resId'),
                                            isEnabled: !0,
                                            args: h,
                                        },
                                        d().createElement(
                                            'div',
                                            { className: f },
                                            d().createElement(
                                                'div',
                                                { className: _n },
                                                d().createElement('div', { className: vn, style: p }),
                                                d().createElement('div', { className: bn }, vt(s, c)),
                                            ),
                                            m < 4 && d().createElement('div', { className: hn }),
                                            m < 4 &&
                                                d().createElement(
                                                    'div',
                                                    { className: pn },
                                                    d().createElement('div', { className: En, style: b }),
                                                    d().createElement('div', { className: fn }, vt(i, c)),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ya = R.images.gui.maps.icons.dogtags,
                    ka = (0, u.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: l,
                            isDemoted: c,
                            progressNumberType: m,
                        }) => {
                            const g = r + 1,
                                _ = r + 2,
                                p = ya.level_shields[`Level_${g}`](),
                                v = (0, u.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                                b = ya.level_shields[`Level_gr_${_ <= Je ? _ : 1}`](),
                                f = (0, u.useMemo)(() => ({ backgroundImage: `url(${b})` }), [b]),
                                h = t || c,
                                E = o()(mn, g === Je && gn),
                                w = (0, u.useMemo)(() => ({ componentId: e }), [e]),
                                y = g < Je;
                            return d().createElement(
                                'div',
                                { className: Zt },
                                d().createElement('div', { className: Qt }, n),
                                d().createElement('div', { className: un }, a),
                                !h &&
                                    d().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.RankedEfficiencyTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        d().createElement(
                                            'div',
                                            { className: Cn },
                                            d().createElement('div', { className: Nn }),
                                            d().createElement(
                                                'div',
                                                { className: Sn },
                                                R.strings.dogtags.customization.ranked_skill_info(),
                                                d().createElement('div', { className: dn }),
                                            ),
                                            d().createElement('div', { className: Tn }),
                                        ),
                                    ),
                                h &&
                                    d().createElement(
                                        d().Fragment,
                                        null,
                                        d().createElement('div', { className: wn }),
                                        d().createElement(
                                            'div',
                                            { className: yn },
                                            d().createElement('div', { className: kn }),
                                            l,
                                        ),
                                    ),
                                !h &&
                                    d().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        d().createElement(
                                            'div',
                                            { className: E },
                                            d().createElement(
                                                'div',
                                                { className: _n },
                                                d().createElement('div', { className: vn, style: v }),
                                                d().createElement('div', { className: bn }, vt(s, m)),
                                            ),
                                            y &&
                                                d().createElement(
                                                    d().Fragment,
                                                    null,
                                                    d().createElement('div', { className: hn }),
                                                    d().createElement(
                                                        'div',
                                                        { className: pn },
                                                        d().createElement('div', { className: En, style: f }),
                                                        d().createElement('div', { className: fn }, vt(i, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    );
                function Ca() {
                    return (
                        (Ca =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ca.apply(this, arguments)
                    );
                }
                const Sa = ({ currentItem: e }) => {
                        const t = e.id,
                            n = e.purpose,
                            a = e.currentGrade,
                            r = e.type,
                            s = e.currentGradeValue,
                            o = ct(t, r, n, a).strings;
                        if (!o) return (console.warn(`Component ${t} is missing translation info.`), null);
                        const i = o.description_locked(),
                            l = o.title(),
                            c = o.description(),
                            u = i.replace('{unlock_value}', String(vt(s))),
                            m = {
                                [Xe.Dedication]: fa,
                                [Xe.Skill]: ha,
                                [Xe.RankedSkill]: ka,
                                [Xe.Triumph]: wa,
                                [Xe.Medal]: xn,
                                [Xe.Base]: xn,
                            },
                            g = { infoTitle: l, infoText: c, unlockText: u },
                            _ = m[n];
                        return _
                            ? d().createElement(_, Ca({}, e, g))
                            : (console.warn(
                                  `Invalid component purpose ${n}. Available component purposes ${Object.keys(m).join(', ')}.`,
                              ),
                              null);
                    },
                    Na = 'FilterBar_base_66',
                    Ta = 'FilterBar_purposeGroups_85',
                    xa = 'FilterBar_buttonWrapper_c2',
                    Ia = 'FilterBar_buttonLabelSpacing_6c',
                    Oa = 'FilterBar_bubbleWrapper_27',
                    Ra = 'FilterBar_availableItems_4d',
                    La = 'FilterBar_availableItemsCount_a1',
                    Da = 'FilterBar_newCount_c9',
                    Ma = 'ToggleButton_base_66',
                    Aa = 'ToggleButton_content_2f',
                    Pa = 'ToggleButton_overlay_49',
                    Ba = 'ToggleButton_base__active_c6',
                    Ha = 'ToggleButton_indicator_c1',
                    $a = ['active', 'className', 'children', 'size'];
                function Wa() {
                    return (
                        (Wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Wa.apply(this, arguments)
                    );
                }
                const za = (0, u.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        a = e.children,
                        r = e.size,
                        s = void 0 === r ? _.small : r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, $a);
                    const l = o()(Ma, n, t && Ba);
                    return d().createElement(
                        'div',
                        { className: l },
                        d().createElement(
                            p,
                            Wa({}, i, { type: 'secondary', size: s }),
                            d().createElement('span', { className: Aa }, a),
                        ),
                        d().createElement('div', { className: Pa }),
                        d().createElement('div', { className: Ha }),
                    );
                });
                let Fa, ja, Ga;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Fa || (Fa = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(ja || (ja = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(Ga || (Ga = {})));
                const Va = {
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
                    Ua = [
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
                function qa() {
                    return (
                        (qa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        qa.apply(this, arguments)
                    );
                }
                const Ka = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            r = e.isDisabled,
                            s = void 0 !== r && r,
                            c = e.isAlert,
                            m = void 0 !== c && c,
                            g = e.size,
                            _ = void 0 === g ? Fa.medium : g,
                            p = e.type,
                            v = void 0 === p ? ja.primary : p,
                            b = e.soundHover,
                            f = void 0 === b ? 'highlight' : b,
                            h = e.soundClick,
                            E = void 0 === h ? 'play' : h,
                            w = e.onMouseEnter,
                            y = e.onMouseLeave,
                            k = e.onMouseUp,
                            C = e.onMouseDown,
                            S = e.onClick,
                            N = e.onChange,
                            T = e.onFocus,
                            x = e.onBlur,
                            I = e.text,
                            O = e.contentStyles,
                            R = e.children,
                            L = e.alignment,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Ua);
                        const M = (0, u.useState)(!1),
                            A = M[0],
                            P = M[1],
                            B = (0, u.useState)(!1),
                            H = (B[0], B[1]),
                            $ = (0, u.useCallback)(
                                (e) => {
                                    s || (N && N(), S && S(e));
                                },
                                [s, N, S],
                            ),
                            W = (0, u.useCallback)(
                                (e) => {
                                    const t = e.button === i.LEFT;
                                    s || (t && P(!0), t && C && C(e), E && l(E));
                                },
                                [s, C, E],
                            ),
                            z = (0, u.useCallback)(
                                (e) => {
                                    s || (P(!1), k && k(e));
                                },
                                [s, k],
                            ),
                            F = (0, u.useCallback)(
                                (e) => {
                                    s || (w && w(e), f && l(f));
                                },
                                [s, w, f],
                            ),
                            j = (0, u.useCallback)(
                                (e) => {
                                    s || (P(!1), y && y(e));
                                },
                                [s, y],
                            ),
                            G = (0, u.useCallback)(
                                (e) => {
                                    s || (H(!0), T && T(e));
                                },
                                [s, T],
                            ),
                            V = (0, u.useCallback)(
                                (e) => {
                                    s || (H(!1), x && x(e));
                                },
                                [s, x],
                            ),
                            U = d().createElement(
                                'div',
                                { className: Va.label },
                                d().createElement(
                                    'div',
                                    { className: o()(Va.labelContent, 's-labelContent'), style: O },
                                    I || R,
                                ),
                            );
                        return d().createElement(
                            'div',
                            qa(
                                {
                                    id: t,
                                    className: o()(Va.base, Va[`base__${_}`], Va[`base__${v}`], {
                                        [Va.base__checked]: a,
                                        [Va.base__disabled]: s,
                                        [Va.base__mouseDown]: A,
                                        [Va.base__alert]: m,
                                        [Va.base__center]: L === Ga.Center,
                                        [Va.base__bottom]: L === Ga.Bottom,
                                    }),
                                    onClick: $,
                                    onMouseEnter: F,
                                    onMouseLeave: j,
                                    onMouseDown: W,
                                    onMouseUp: z,
                                    onFocus: G,
                                    onBlur: V,
                                },
                                D,
                            ),
                            d().createElement(
                                'div',
                                { className: Va.input },
                                d().createElement('div', { className: Va.alertOverlay }),
                                d().createElement('div', { className: Va.inputHoverOverlay }),
                                d().createElement('div', { className: Va.highlight }),
                            ),
                            d().createElement('div', { className: Va.checkmark }),
                            ((I || R) && U) || null,
                        );
                    },
                    Ya = {
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
                    Xa = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function Za() {
                    return (
                        (Za =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Za.apply(this, arguments)
                    );
                }
                const Qa = (e) => {
                        let t = e.value,
                            n = e.isEmpty,
                            a = void 0 !== n && n,
                            r = e.className,
                            s = e.size,
                            i = void 0 === s ? 'normal' : s,
                            l = e.fadeInAnimation,
                            c = void 0 !== l && l,
                            u = e.hide,
                            m = void 0 !== u && u,
                            g = e.maximumNumber,
                            _ = void 0 === g ? 99 : g,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Xa);
                        const v = a ? null : t,
                            b = 'string' == typeof v;
                        if ((v && !b && v < 0) || 0 === v) return null;
                        const f = v && !b && v > _,
                            h = o()(
                                Ya.base,
                                Ya[`base__${i}`],
                                c && Ya.base__animated,
                                m && Ya.base__hidden,
                                !v && Ya.base__pattern,
                                a && Ya.base__empty,
                                r,
                            );
                        return d().createElement(
                            'div',
                            Za({ className: h }, p),
                            d().createElement('div', { className: Ya.bg }),
                            d().createElement('div', { className: Ya.pattern }),
                            d().createElement(
                                'div',
                                { className: o()(Ya.value, b && Ya.value__text) },
                                f ? _ : v,
                                f && d().createElement('span', { className: Ya.plus }, '+'),
                            ),
                        );
                    },
                    Ja = R.strings.dogtags.component.purposeGroup,
                    er = (0, u.memo)(
                        ({
                            availablePurposeGroups: e,
                            purposeGroupFilters: t,
                            setPurposeGroupFilters: n,
                            showOnlyAvailableItems: a,
                            setShowOnlyAvailableItems: r,
                            availableItemsCount: s,
                            newEngravingSkillCount: o = 0,
                            newEngravingDedicationCount: i = 0,
                            newEngravingTriumphCount: l = 0,
                        }) => {
                            const c = (0, u.useCallback)(
                                    (e) => () => {
                                        n((t) => Object.assign({}, t, { [e]: !t[e] }));
                                    },
                                    [n],
                                ),
                                m = (0, u.useCallback)(() => r((e) => !e), [r]),
                                g = { [Ze.Dedication]: i, [Ze.Triumph]: l, [Ze.Season]: o };
                            return d().createElement(
                                'div',
                                { className: Na },
                                e.length > 0 &&
                                    d().createElement(
                                        'div',
                                        { className: Ta },
                                        e.map((e) => {
                                            const n = t[e],
                                                a = e in Ja ? Ja[e]() : Ja.dedication(),
                                                r = g[e] || 0;
                                            return d().createElement(
                                                'div',
                                                { className: xa, key: e },
                                                d().createElement(
                                                    za,
                                                    { active: n, onClick: c(e) },
                                                    d().createElement('span', { className: Ia }, a),
                                                ),
                                                r > 0 &&
                                                    d().createElement(
                                                        'div',
                                                        { className: Oa },
                                                        d().createElement(
                                                            'div',
                                                            { className: Da },
                                                            d().createElement(Qa, { value: r }),
                                                        ),
                                                    ),
                                            );
                                        }),
                                    ),
                                d().createElement(
                                    'div',
                                    { className: Ra },
                                    d().createElement(Ka, {
                                        isChecked: a,
                                        size: 'medium',
                                        text: R.strings.dogtags.customization.showAvailable(),
                                        type: 'main',
                                        soundHover: 'highlight',
                                        soundClick: 'play',
                                        onChange: m,
                                    }),
                                    d().createElement('span', { className: La }, s),
                                ),
                            );
                        },
                    ),
                    tr = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                const ar = R.views.common.tooltip_window.simple_tooltip_content,
                    rr = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, tr);
                        const l = (0, u.useMemo)(() => {
                            const e = Object.assign({}, o, { body: n, header: a, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, r, o]);
                        return d().createElement(
                            va,
                            nr(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? ar.SimpleTooltipHtmlContent('resId') : ar.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                i,
                            ),
                            t,
                        );
                        var c;
                    },
                    sr = 'Item_base_13',
                    or = 'Item_mainWrapper_0c',
                    ir = 'Item_base__locked_59',
                    lr = 'Item_hoverWrapper_2e',
                    cr = 'Item_componentImage_03',
                    ur = 'Item_componentImage__engravingBackground_19',
                    dr = 'Item_statusIcon_69',
                    mr = 'Item_statusIcon_check_0c',
                    gr = 'Item_statusIcon_lock_5b',
                    _r = 'Item_statusIcon_selectedLocked_ca',
                    pr = 'Item_levelBadge_13',
                    vr = 'Item_selectedBg_7c',
                    br = 'Item_base__selected_f0',
                    fr = 'Item_slotBg_3d',
                    hr = 'Item_hoverBg_8d',
                    Er = 'Item_hoverInfo_05',
                    wr = 'Item_itemCounter_cb',
                    yr = ['selected', 'isEquipped', 'onNewComponentHover', 'isAnimatedDogTagSelected'];
                const kr = (0, u.memo)((e) => {
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
                            })(e, yr),
                            i = s.id,
                            c = s.type,
                            m = s.isLocked,
                            g = s.currentGrade,
                            _ = s.currentProgress,
                            p = s.progressNumberType,
                            v = s.onClick,
                            b = s.purpose,
                            f = s.isNew,
                            h = g,
                            E = ct(i, c, b, h, 'small'),
                            w = E.image,
                            y = E.strings,
                            k = c === Ye.Engraving,
                            C = (0, u.useCallback)(() => {
                                (l(m ? R.sounds.dt_element_locked_click() : R.sounds.dt_element_click()), v(s));
                            }, [m, v, s]),
                            S = (0, u.useCallback)(() => {
                                f && a({ compId: i });
                            }, [i, a, f]),
                            N = (0, u.useCallback)(() => {
                                l(R.sounds.highlight());
                            }, []);
                        if (!y) return (console.warn(`Component ${i} is missing translation info.`), null);
                        const T = o()(dr, { [mr]: n && !m && !r, [gr]: !t && m, [_r]: t && m }),
                            x = !m && k;
                        return d().createElement(
                            'div',
                            {
                                className: o()(sr, t && br, m && ir),
                                onClick: C,
                                onMouseOver: S,
                                onMouseEnter: N,
                                id: 'item-' + i,
                            },
                            d().createElement(
                                'div',
                                { className: or },
                                d().createElement('div', { className: fr }),
                                d().createElement('div', { className: vr }),
                                h >= 0 && x && d().createElement('div', { className: pr }, at[h]),
                                d().createElement(
                                    'div',
                                    { className: o()(cr, k && ur) },
                                    d().createElement('div', {
                                        className: cr,
                                        style: { backgroundImage: `url(${w})` },
                                    }),
                                ),
                                d().createElement(
                                    'div',
                                    { className: lr },
                                    d().createElement('div', { className: hr }),
                                    d().createElement(
                                        'div',
                                        { className: Er },
                                        y.title(),
                                        x && d().createElement('span', null, vt(_, p)),
                                    ),
                                ),
                            ),
                            d().createElement('div', { className: T }),
                            f && d().createElement('div', { className: wr }, d().createElement(Qa, { isEmpty: !0 })),
                        );
                    }),
                    Cr = 'Grid_base_2f',
                    Sr = 'Grid_sectionWrapper_fa',
                    Nr = 'Grid_emptyBlock_30',
                    Tr = 'Grid_sectionTitle_79',
                    xr = 'Grid_sectionTitle_text_63',
                    Ir = 'Grid_sectionTitle_unlockedCount_fb',
                    Or = 'Grid_sectionTitle_count_ac',
                    Rr = 'Grid_sectionTitle_infoIcon_d7';
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Dr = (0, u.memo)(
                        ({
                            data: e,
                            onItemSelect: t,
                            onNewComponentHover: n,
                            selectedItems: a,
                            equippedItems: r,
                            isAnimatedDogTagSelected: s,
                        }) =>
                            d().createElement(
                                'div',
                                { className: Cr },
                                e.map((e, o) => {
                                    const i = e.value.items.length,
                                        l = (3 - (i % 3)) % 3,
                                        c = Array.from(Array(l)).map((e, t) =>
                                            d().createElement('div', { key: 'emptyBlock-' + t, className: Nr }),
                                        ),
                                        u = e.value.items.reduce((e, t) => (t.value.isLocked ? e : e + 1), 0),
                                        m = e.value.title ? systemLocale.toUpperCase(e.value.title) : '';
                                    return d().createElement(
                                        'div',
                                        { key: `${e.value.title}-${o}`, className: Sr },
                                        m &&
                                            d().createElement(
                                                'div',
                                                { className: Tr },
                                                d().createElement('div', { className: xr }, m),
                                                d().createElement(
                                                    'div',
                                                    { className: Or },
                                                    '(',
                                                    d().createElement('div', { className: Ir }, u),
                                                    '/',
                                                    i,
                                                    ')',
                                                ),
                                                e.value.tooltipDescription &&
                                                    d().createElement(
                                                        rr,
                                                        {
                                                            header: e.value.tooltipTitle || void 0,
                                                            body: e.value.tooltipDescription,
                                                        },
                                                        d().createElement('div', { className: Rr }),
                                                    ),
                                            ),
                                        e.value.items.map((e) => {
                                            const o = e.value,
                                                i = rt(o, r),
                                                l = rt(o, a);
                                            return d().createElement(
                                                kr,
                                                Lr({ key: o.id }, o, {
                                                    onClick: t,
                                                    selected: l,
                                                    isEquipped: i,
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
                    Mr = 'Tabs_base_d9',
                    Ar = 'Tabs_base__vertical_c0',
                    Pr = 'Tabs_list_0a',
                    Br = 'Tabs_list__centered_dc',
                    Hr = 'Tabs_wrapper_2d',
                    $r = 'Tabs_wrapper__centered_d8',
                    Wr = 'Tabs_wrapper__vertical_a5';
                function zr() {
                    return (
                        (zr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        zr.apply(this, arguments)
                    );
                }
                const Fr = 'tabs-role';
                var jr;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(jr || (jr = {}));
                class Gr extends u.Component {
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
                        const e = d().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Fr] === jr.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(d().Children.toArray(e[t].props.children));
                        ((e[t] = d().cloneElement(e[t], {
                            children: d()
                                .Children.toArray(e[t].props.children)
                                .map((e) => d().cloneElement(e, { key: e.props[jr.TAB] })),
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
                        const n = d().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            r =
                                ((s = this.tabsProps),
                                (i = a),
                                !(
                                    Object.keys(s).length === Object.keys(i).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && s[e] === i[e],
                                    )
                                ));
                        var s, i;
                        const c = o()(
                                Hr,
                                n.props.className,
                                this.props.isTabsCentered && $r,
                                this.props.isVerticalTabs && Wr,
                            ),
                            u = o()(Pr, this.props.isTabsCentered && Br);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Fr] === jr.CONTENT)
                                        return e.props[jr.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                r = t[0].props.children,
                                s = r.map((e, t) =>
                                    d().cloneElement(
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
                                                        this.props.onClickSound && l(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            l(this.props.onMouseEnterSound));
                                                },
                                            },
                                        ),
                                    ),
                                );
                            ((this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        d().createElement(
                                            'div',
                                            { className: u, key: jr.LIST },
                                            d().createElement('div', zr({}, n.props, { className: c }), s),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = o()(Mr, this.props.isVerticalTabs && Ar);
                        return d().createElement('div', { className: t }, e);
                    }
                }
                Gr.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Vr = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function Ur() {
                    return (
                        (Ur =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ur.apply(this, arguments)
                    );
                }
                const qr = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            r = e.onClickSound,
                            s = e.onMouseEnterSound,
                            o = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Vr);
                        return d().createElement(
                            'div',
                            Ur({ className: n }, i),
                            d().createElement(
                                Gr,
                                { activeKey: a, onClickSound: r, onMouseEnterSound: s, isTabsCentered: o },
                                t,
                            ),
                        );
                    },
                    Kr = ({ children: e, component: t, props: n = {} }) => (t ? d().createElement(t, n, e) : e || null),
                    Yr = 'Tab_base_dd',
                    Xr = 'Tab_base__first_4a',
                    Zr = 'Tab_base__last_96',
                    Qr = 'Tab_base__medium_ec',
                    Jr = 'Tab_base__active_5d',
                    es = 'Tab_divider_ca',
                    ts = 'Tab_divider__show_62',
                    ns = 'Tab_state_6c',
                    as = 'Tab_stateHighlight_1e',
                    rs = 'Tab_stateBorder_64',
                    ss = 'Tab_stateBorder__positionLeft_e7',
                    os = 'Tab_stateBorder__positionRight_db',
                    is = 'Tab_counter_e1',
                    ls = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function cs() {
                    return (
                        (cs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cs.apply(this, arguments)
                    );
                }
                const us = (0, u.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            r = void 0 !== a && a,
                            s = e.isLast,
                            i = void 0 !== s && s,
                            l = e.isMedium,
                            c = void 0 !== l && l,
                            u = e.isNotified,
                            m = void 0 !== u && u,
                            g = e.children,
                            _ = void 0 === g ? 'Tab' : g,
                            p = e.wrapper,
                            v = void 0 === p ? {} : p,
                            b = e.counter,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, ls);
                        return d().createElement(
                            Kr,
                            v,
                            d().createElement(
                                'div',
                                cs({ className: o()(Yr, { [Jr]: n }, { [Xr]: r }, { [Zr]: i }, { [Qr]: c }) }, f),
                                d().createElement(
                                    'span',
                                    { className: ns },
                                    d().createElement('span', { className: as }),
                                    d().createElement('span', { className: o()(rs, ss) }),
                                    d().createElement('span', { className: o()(rs, os) }),
                                ),
                                _,
                                !i && !n && d().createElement('span', { className: o()(es, ts) }),
                                (Boolean(b) || m) &&
                                    d().createElement(
                                        'div',
                                        { className: is },
                                        d().createElement(Qa, { value: b, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    ds = 'Header_base_eb',
                    ms = 'Header_titleWrapper_ab',
                    gs = 'Header_title_e8',
                    _s = 'Header_infoButtonWrapper_e1',
                    ps = 'Header_infoIcon_8c',
                    vs = Object.keys(qe)
                        .filter((e) => !isNaN(Number(e)))
                        .map((e) => Number(e)),
                    bs = {
                        [qe.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [qe.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    fs = systemLocale.toUpperCase(R.strings.dogtags.customization.mainTitle()),
                    hs = R.strings.dogtags.customization.infoTooltip(),
                    Es = {
                        width: 10 * Math.max(...vs.map((e) => bs[e].length)) + 'rem',
                        padding: '0 5rem',
                        flex: '0 0 150rem',
                        justifyContent: 'center',
                    },
                    ws = (0, u.memo)(({ onTabClick: e, onInfoClick: t, className: n }) => {
                        const a = oe('model'),
                            r = a.tab,
                            s = a.newBackgroundComponentCount,
                            i = a.newEngravingComponentCount;
                        return d().createElement(
                            'div',
                            { className: o()(ds, n) },
                            d().createElement(
                                'div',
                                { className: ms },
                                d().createElement('p', { className: gs }, fs),
                                d().createElement(
                                    'div',
                                    { className: _s },
                                    d().createElement(
                                        rr,
                                        { body: hs },
                                        d().createElement(
                                            p,
                                            { type: 'ghost', onClick: t },
                                            d().createElement('div', { className: ps }),
                                        ),
                                    ),
                                ),
                            ),
                            d().createElement(
                                qr,
                                { key: r, activeKey: String(r), onClickSound: R.sounds.dt_tab() },
                                d().createElement(
                                    'div',
                                    { 'tabs-role': jr.LIST },
                                    vs.map((t) => {
                                        const n = { [qe.Engraving]: i, [qe.Background]: s }[t] || 0;
                                        return d().createElement(
                                            us,
                                            {
                                                key: String(t),
                                                'tabs-role': jr.TAB,
                                                'tab-key': String(t),
                                                onClick: e,
                                                style: Es,
                                                counter: n,
                                            },
                                            bs[t],
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    ys = 'NoResults_base_35',
                    ks = 'NoResults_message_41',
                    Cs = 'NoResults_message_icon_a4',
                    Ss = ({ className: e, clearFilters: t }) => {
                        const n = o()(ys, e);
                        return d().createElement(
                            'div',
                            { className: n },
                            d().createElement(
                                'p',
                                { className: ks },
                                d().createElement('img', {
                                    src: R.images.gui.maps.icons.dogtags.icons.alert(),
                                    className: Cs,
                                }),
                                R.strings.dogtags.customization.filter.noResults(),
                            ),
                            d().createElement(
                                p,
                                { type: 'secondary', size: _.medium, onClick: t },
                                R.strings.dogtags.customization.filter.restoreFilter(),
                            ),
                        );
                    },
                    Ns = (e) => {
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
                    Ts = [];
                function xs(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), Ts)
                    );
                }
                function Is(e, t, n = []) {
                    const a = (0, u.useRef)(0),
                        r = (0, u.useCallback)(() => {
                            (window.clearInterval(a.current), (a.current = 0));
                        }, n || []);
                    (0, u.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, u.useCallback)((n) => {
                            (0 !== a.current && r(), (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, s),
                        r,
                    ];
                }
                function Os(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Rs(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Rs(e, t);
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
                function Rs(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ls(e, t, n) {
                    const a = (0, u.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    s = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function l(...l) {
                                    const c = this,
                                        u = Date.now() - o;
                                    function d() {
                                        ((o = Date.now()), n.apply(c, l));
                                    }
                                    s ||
                                        (a && !r && d(),
                                        i(),
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
                                        (i(), (s = !0));
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, u.useEffect)(() => a.cancel, [a]), a);
                }
                let Ds;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Ds || (Ds = {}));
                const Ms = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    As = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        forceTriggerMouseMove: s,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : la(r, s, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Ms : l,
                                d = (0, u.useRef)(null),
                                m = (0, u.useRef)(null),
                                g = (0, u.useRef)(!1),
                                _ = (() => {
                                    const e = (0, u.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var a, r = Os(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, u.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                p = Ls(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                v = (0, ue.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), _.trigger('change', e), s && g.current && p());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                b = v[0],
                                f = v[1],
                                h = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = b.scrollPosition.get(),
                                            s = (null != (a = b.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + s + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                E = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            f.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, b.scrollPosition.get()) },
                                            });
                                    },
                                    [f, c.animationConfig, b.scrollPosition],
                                ),
                                w = (0, u.useCallback)(
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
                                            })(n, c.step),
                                            s = h(t, e, a);
                                        E(s);
                                    },
                                    [E, h, c.step],
                                ),
                                y = (0, u.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && w(a(e)),
                                            d.current && _.trigger('mouseWheel', e, b.scrollPosition, t(d.current)));
                                    },
                                    [b.scrollPosition, w, _],
                                ),
                                k = ((e, t = []) => {
                                    const n = (0, u.useRef)(),
                                        a = (0, u.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, u.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Ns(() => {
                                            const e = d.current;
                                            e &&
                                                (E(o(e, b.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [E, b.scrollPosition.goal],
                                ),
                                C = xs(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && E(t, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            ((0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            ),
                                (0, u.useEffect)(() => {
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
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: y,
                                    applyScroll: E,
                                    applyStepTo: w,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: f,
                                    animationScroll: b,
                                    recalculateContent: C,
                                    events: { on: _.on, off: _.off },
                                }),
                                [b.scrollPosition, E, w, _.off, _.on, C, y, f, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ps = As({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ds.Next : Ds.Prev),
                        forceTriggerMouseMove: h.O.view.forceTriggerMouseMove,
                    }),
                    Bs = 'HorizontalBar_base_49',
                    Hs = 'HorizontalBar_base__active_5e',
                    $s = 'HorizontalBar_leftButton_5f',
                    Ws = 'HorizontalBar_rightButton_03',
                    zs = 'HorizontalBar_track_0d',
                    Fs = 'HorizontalBar_thumb_fd',
                    js = 'HorizontalBar_rail_32',
                    Gs = 'disable',
                    Vs = { pending: !1, offset: 0 },
                    Us = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    qs = () => {},
                    Ks = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ys = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Us, onDrag: a = qs }) => {
                        const r = (0, u.useRef)(null),
                            s = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            m = (0, u.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, u.useState)(Vs),
                            p = _[0],
                            v = _[1],
                            b = (0, u.useCallback)(
                                (e) => {
                                    (v(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            f = () => {
                                const t = c.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / r),
                                    u = la(0, 1, o / (r - a)),
                                    d = (t.offsetWidth - Ks(t, l)) * u;
                                ((n.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(Gs),
                                                    void i.current.classList.remove(Gs)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = m.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Gs),
                                                    void i.current.classList.add(Gs)
                                                );
                                            var t, n;
                                            (s.current.classList.remove(Gs), i.current.classList.remove(Gs));
                                        }
                                    })(d));
                            },
                            E = xs(() => {
                                ((() => {
                                    const t = m.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const o = Math.min(1, a / s);
                                    ((t.style.width = `${Ks(n, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== o ? r.current.classList.add(Hs) : r.current.classList.remove(Hs)));
                                })(),
                                    f());
                            });
                        ((0, u.useEffect)(() => Ns(E)),
                            (0, u.useEffect)(
                                () =>
                                    Ns(() => {
                                        const t = () => {
                                            f();
                                        };
                                        let n = qs;
                                        const a = () => {
                                            (n(), (n = Ns(E)));
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
                            (0, u.useEffect)(() => {
                                if (!p.pending) return;
                                const t = h.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!s || !o) return;
                                        const i = c.current,
                                            l = m.current;
                                        if (!i || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const u = t.clientX - p.offset - i.getBoundingClientRect().x,
                                            d = (u / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: u, contentOffset: d }));
                                    }),
                                    n = h.O.client.events.mouse.up(() => {
                                        (t(), b(Vs));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, p.offset, p.pending, a, b]));
                        const w = Is((t) => e.applyStepTo(t), g, [e]),
                            y = w[0],
                            k = w[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Gs) || l('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: o()(Bs, t.base), ref: r, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: o()($s, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gs) || 0 !== e.button || (l('play'), y(Ds.Next));
                                },
                                onMouseUp: k,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: o()(zs, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((l('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = m.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Ds.Prev : Ds.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                d().createElement('div', { ref: m, className: o()(Fs, t.thumb) }),
                                d().createElement('div', { className: o()(js, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: o()(Ws, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gs) || 0 !== e.button || (l('play'), y(Ds.Prev));
                                },
                                onMouseUp: k,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Xs = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Zs = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: o()(Xs.base, e.base) });
                            }, [a]),
                            g = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return d().createElement(
                            'div',
                            { className: o()(Xs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            d().createElement(
                                'div',
                                { className: o()(Xs.defaultScrollArea, r) },
                                d().createElement(Qs, { className: i, api: g, classNames: s }, e),
                            ),
                            d().createElement(Ys, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Qs = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, u.useEffect)(() => Ns(e.recalculateContent)),
                        d().createElement(
                            'div',
                            { className: o()(Xs.base, t) },
                            d().createElement(
                                'div',
                                {
                                    className: o()(Xs.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                d().createElement(
                                    'div',
                                    { className: o()(Xs.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Qs.Bar = Ys), (Qs.Default = Zs));
                const Js = As({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ds.Next : Ds.Prev),
                    }),
                    eo = 'VerticalBar_base_f3',
                    to = 'VerticalBar_base__active_72',
                    no = 'VerticalBar_topButton_d7',
                    ao = 'VerticalBar_bottomButton_06',
                    ro = 'VerticalBar_track_df',
                    so = 'VerticalBar_thumb_32',
                    oo = 'VerticalBar_rail_43',
                    io = 'disable',
                    lo = () => {},
                    co = { pending: !1, offset: 0 },
                    uo = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    mo = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    go = (e, t) => Math.max(20, e.offsetHeight * t),
                    _o = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = uo, onDrag: a = lo }) => {
                        const r = (0, u.useRef)(null),
                            s = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            m = (0, u.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, u.useState)(co),
                            p = _[0],
                            v = _[1],
                            b = (0, u.useCallback)(
                                (e) => {
                                    (v(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            f = xs(() => {
                                const t = m.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const o = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${go(n, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== o ? r.current.classList.add(to) : r.current.classList.remove(to)),
                                    o
                                );
                            }),
                            E = xs(() => {
                                const t = c.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / r),
                                    u = la(0, 1, o / (r - a)),
                                    d = (t.offsetHeight - go(t, l)) * u;
                                ((n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && c.current && m.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    s.current.classList.add(io),
                                                    void i.current.classList.remove(io)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = m.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(io),
                                                    void i.current.classList.add(io)
                                                );
                                            var t, n;
                                            (s.current.classList.remove(io), i.current.classList.remove(io));
                                        }
                                    })(d));
                            }),
                            w = xs(() => {
                                mo(e, () => {
                                    (f(), E());
                                });
                            });
                        ((0, u.useEffect)(() => Ns(w)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    mo(e, () => {
                                        E();
                                    });
                                };
                                let n = lo;
                                const a = () => {
                                    (n(), (n = Ns(w)));
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
                            (0, u.useEffect)(() => {
                                if (!p.pending) return;
                                const t = h.O.client.events.mouse.up(() => {
                                        b(co);
                                    }),
                                    n = h.O.client.events.mouse.move(([t]) => {
                                        mo(e, (n) => {
                                            const r = c.current,
                                                s = m.current,
                                                o = e.getContainerSize();
                                            if (!r || !s || !o) return;
                                            const i = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                l = (i / r.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: l }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, p.offset, p.pending, a, b]));
                        const y = Is((t) => e.applyStepTo(t), g, [e]),
                            k = y[0],
                            C = y[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const S = (e) => {
                            e.target.classList.contains(io) || l('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: o()(eo, t.base), ref: r, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: o()(no, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(io) || 0 !== e.button || (l('play'), k(Ds.Next));
                                },
                                ref: s,
                                onMouseEnter: S,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: o()(ro, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((l('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        mo(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Ds.Prev : Ds.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: S,
                                },
                                d().createElement('div', { ref: m, className: o()(so, t.thumb) }),
                                d().createElement('div', { className: o()(oo, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: o()(ao, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(io) || 0 !== e.button || (l('play'), k(Ds.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    po = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    vo = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: o()(po.base, e.base) });
                            }, [a]),
                            g = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return d().createElement(
                            'div',
                            { className: o()(po.defaultScroll, n), onWheel: t.handleMouseWheel },
                            d().createElement(
                                'div',
                                { className: o()(po.area, r) },
                                d().createElement(bo, { className: s, classNames: i, api: g }, e),
                            ),
                            d().createElement(_o, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    bo = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, u.useEffect)(() => Ns(a.recalculateContent)),
                        d().createElement(
                            'div',
                            { className: o()(po.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            d().createElement(
                                'div',
                                { className: o()(po.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                bo.Default = vo;
                const fo = { Vertical: r, Horizontal: a },
                    ho = (e, t) => {
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
                        return 0 === r.length || ho(e[a], r.join('.'));
                    },
                    Eo = [
                        'model.equippedDogTag',
                        'model.equippedDogTag.background',
                        'model.equippedDogTag.engraving',
                        'model.engravingGrid',
                        'model.backgroundGrid',
                    ];
                Eo.forEach((e) => ho(window, e));
                const wo = () => (
                        oe(Eo[0]),
                        oe(Eo[1]),
                        oe(Eo[2]),
                        oe(Eo[3]),
                        oe(Eo[4]),
                        ((e, t = !0) => {
                            if (!ho(window, e)) throw Error(`Path "${e}" does not exist.`);
                            const n = oe(e, t ? se.Deep : se.None);
                            return 'object' == typeof n && null !== n
                                ? (0, q.lw)(n)
                                : (t &&
                                      console.warn(
                                          `Tracking of primitive value ${String(n)} in ${e} is not supported.`,
                                      ),
                                  n);
                        })('model')
                    ),
                    yo = 'Router_base_17',
                    ko = 'Router_innerWrapper_d8',
                    Co = 'Router_gridWrapper_c2',
                    So = 'Router_infoWrapper_95',
                    No = 'Router_dogtagsInfoWrapper_b7',
                    To = 'Router_scrollContainer_f2',
                    xo = 'Router_scrollBar_c1',
                    Io = 'Router_scrollAreaContainer_3e',
                    Oo = 'Router_customizationWrapper_05',
                    Ro = 'Router_scrollAreaWrapper_93',
                    Lo = 'Router_scrollAreaWrapper_bottomMask_63',
                    Do = 'Router_gridTitle_a2',
                    Mo = 'Router_subNavigation_b2',
                    Ao = 'Router_topDivider_23',
                    Po = 'Router_gridBottomSeparator_13',
                    Bo = 'Router_alertMessage_ad',
                    Ho = 'Router_alertIcon_84',
                    $o = { dedication: !0, season: !0, triumph: !0 },
                    Wo = {
                        [qe.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [qe.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    zo = () => {
                        const e = wo(),
                            t = Js(),
                            n = Js(),
                            a = D().mediaSize,
                            r = e.onUpdateSelectedDT,
                            s = e.onEquip,
                            i = e.onNewComponentHover,
                            l = e.tab,
                            c = e.equippedDogTag,
                            m = c.playerName,
                            g = c.clanTag,
                            _ = c.engraving.id,
                            p = c.background.id,
                            v = e.engravingGrid,
                            b = e.backgroundGrid,
                            f = e.newEngravingSkillCount,
                            h = e.newEngravingDedicationCount,
                            E = e.newEngravingTriumphCount,
                            w = e.isAnimatedDogTagSelected,
                            y = (0, u.useState)({ background: p, engraving: _ }),
                            k = y[0],
                            C = y[1],
                            S = {
                                background: _t(b, k.background) || b[0].value.items[0].value,
                                engraving: _t(v, k.engraving) || v[0].value.items[0].value,
                            },
                            N = {
                                engraving: _t(v, _) || v[0].value.items[0].value,
                                background: _t(b, p) || b[0].value.items[0].value,
                            },
                            T = (0, u.useState)($o),
                            x = T[0],
                            O = T[1],
                            L = (0, u.useState)(!1),
                            M = L[0],
                            A = L[1],
                            P = (0, u.useState)(!0),
                            B = P[0],
                            H = P[1],
                            $ = ((e, t) => e[gt[t]])(S, l),
                            W = Wo[l],
                            z = ((e, t) => e[mt[t]])({ backgroundGrid: b, engravingGrid: v }, l),
                            F = l === qe.Engraving ? dt(z, x) : z,
                            j = ut(
                                F.map((e) => ({
                                    value: Object.assign({}, e.value, {
                                        items: e.value.items.filter((e) => !e.value.isLocked),
                                    }),
                                })),
                            );
                        const G = pt(j),
                            V =
                                l === qe.Engraving
                                    ? ((e) =>
                                          [Ze.Dedication, Ze.Season, Ze.Triumph].filter((t) => {
                                              for (let n = 0; n < e.length; n++) {
                                                  const a = e[n].value.items[0];
                                                  if (a && Qe[t].includes(a.value.purpose)) return !0;
                                              }
                                              return !1;
                                          }))(z)
                                    : [],
                            U = (0, u.useMemo)(() => ({ gridData: M ? j : F, totalItems: pt(F) }), [j, F, M]),
                            q = U.gridData,
                            K = U.totalItems,
                            Y = (0, u.useCallback)((e) => {
                                C(
                                    (t) => (
                                        r(Object.assign({}, t, { [e.type]: e.id })),
                                        Object.assign({}, t, { [e.type]: e.id })
                                    ),
                                );
                            }, []),
                            X = (0, u.useCallback)(
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
                            Z = xs(() => {
                                const e = t.getBounds()[1],
                                    n = t.animationScroll.scrollPosition.get();
                                H(n < e);
                            });
                        ((0, u.useEffect)(
                            () => (
                                t.events.on('change', Z),
                                t.events.on('recalculateContent', Z),
                                () => {
                                    (t.events.off('change', Z), t.events.off('recalculateContent', Z));
                                }
                            ),
                            [t.events, Z],
                        ),
                            (0, u.useEffect)(() => {
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
                        const Q = (0, u.useCallback)(() => {
                                (O({ dedication: !0, season: !0, triumph: !0 }), A(!1));
                            }, []),
                            J = ((e) => {
                                const t = e.background,
                                    n = e.engraving,
                                    a = t.currentGrade + 1,
                                    r = n.currentGrade + 1;
                                return (n.purpose === Xe.Triumph && 4 === r) || r === Je || a === Je;
                            })(S);
                        return d().createElement(
                            'div',
                            { className: yo },
                            d().createElement(
                                'div',
                                { className: ko },
                                d().createElement(
                                    'div',
                                    { className: Co },
                                    d().createElement(
                                        'div',
                                        { className: Mo },
                                        d().createElement('div', { className: Do }, systemLocale.toUpperCase(W)),
                                        d().createElement(er, {
                                            newEngravingSkillCount: f,
                                            newEngravingDedicationCount: h,
                                            newEngravingTriumphCount: E,
                                            availablePurposeGroups: V,
                                            setPurposeGroupFilters: O,
                                            purposeGroupFilters: x,
                                            showOnlyAvailableItems: M,
                                            setShowOnlyAvailableItems: A,
                                            availableItemsCount: G,
                                        }),
                                        d().createElement('div', { className: Ao }),
                                    ),
                                    q.length > 0
                                        ? d().createElement(
                                              'div',
                                              { className: o()(Ro, B && Lo) },
                                              d().createElement(
                                                  fo.Vertical.Area.Default,
                                                  { api: t },
                                                  d().createElement(Dr, {
                                                      data: q,
                                                      count: K,
                                                      onItemSelect: Y,
                                                      onNewComponentHover: i,
                                                      selectedItems: S,
                                                      equippedItems: N,
                                                      isAnimatedDogTagSelected: w,
                                                  }),
                                              ),
                                          )
                                        : d().createElement(Ss, { clearFilters: Q }),
                                    d().createElement('div', { className: Po }),
                                ),
                                d().createElement(
                                    'div',
                                    { className: So },
                                    d().createElement(St, {
                                        playerName: m,
                                        clanTag: g,
                                        background: S.background,
                                        engraving: S.engraving,
                                        isHighlighted: J,
                                        size: a >= I.Large ? wt.x400 : wt.x300,
                                    }),
                                    d().createElement(
                                        'div',
                                        { className: No },
                                        d().createElement(
                                            fo.Vertical.Area.Default,
                                            { api: n, className: To, barClassNames: { base: xo }, areaClassName: Io },
                                            d().createElement(Sa, { currentItem: $ }),
                                        ),
                                    ),
                                    (S.engraving.isDeprecated || S.background.isDeprecated) &&
                                        d().createElement(
                                            'div',
                                            { className: Bo },
                                            d().createElement('div', { className: Ho }),
                                            R.strings.dogtags.customization.deprecated(),
                                        ),
                                    d().createElement(
                                        'div',
                                        { className: Oo },
                                        d().createElement(Xt, {
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
                    Fo = 300,
                    jo = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: Fo } },
                    Go = {
                        from: { opacity: 0 },
                        enter: { opacity: 1, delay: 300 },
                        leave: { opacity: 0 },
                        config: { duration: Fo },
                    },
                    Vo = 'DogTagsApp_base_c2',
                    Uo = 'DogTagsApp_base__topView_03',
                    qo = 'DogTagsApp_base__emptyPadding_2a',
                    Ko = 'DogTagsApp_dogTags_30',
                    Yo = 'DogTagsApp_dogTags__blur_6c',
                    Xo = 'DogTagsApp_dogTags__padding_90',
                    Zo = 'DogTagsApp_onboardingWrapper_b7',
                    Qo = 'DogTagsApp_customizationWrapper_95',
                    Jo = 'DogTagsApp_routerReveal_45',
                    ei = 'DogTagsApp_header_40',
                    ti = () => {
                        const e = oe('model', se.Shallow),
                            t = e.onTabSelect,
                            n = e.onboardingEnabled,
                            a = e.onOnboardingCloseClick,
                            r = e.onInfoButtonClick,
                            s = e.isTopView,
                            i = e.onBack,
                            l = (0, u.useState)(null),
                            c = l[0],
                            m = l[1],
                            g = (0, u.useState)(n),
                            _ = g[0],
                            p = g[1],
                            v = (function () {
                                const e = (0, u.useState)({ top: 0, bottom: 0, left: 0, right: 0 }),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        const e = () => {
                                            n(h.O.view.getExternalPaddingsRem());
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
                            b = (0, u.useCallback)((e) => {
                                const t = Number(e.currentTarget.getAttribute('tab-key'));
                                m(t);
                            }, []);
                        (0, u.useEffect)(() => {
                            if (null !== c)
                                return V(() => {
                                    (m(null), t({ newTab: c }));
                                }, Fo);
                        }, [c, t]);
                        const f = (0, ue.useSpring)(jo),
                            E = (0, ue.useTransition)(
                                _,
                                Object.assign({}, Go, { leave: Object.assign({}, Go.leave, { onRest: () => a() }) }),
                            ),
                            w = (0, u.useCallback)(() => {
                                r();
                            }, [r]),
                            y = (0, u.useCallback)(() => {
                                p(!1);
                            }, []),
                            k = (0, u.useCallback)(() => {
                                i();
                            }, [i]);
                        var C;
                        return (
                            (C = _ ? y : k),
                            Y(U.n.ESCAPE, C),
                            d().createElement(
                                'div',
                                { className: o()(Vo, s && Uo, v.externalPaddingsExisted && qo) },
                                d().createElement(
                                    G.animated.div,
                                    { className: o()(Ko, _ && Yo, v.externalPaddingsExisted && Xo), style: f },
                                    d().createElement(
                                        'div',
                                        { className: Qo },
                                        d().createElement(
                                            ce,
                                            { top: v.paddings.top },
                                            d().createElement(ws, {
                                                className: o()(v.externalPaddingsExisted && ei),
                                                onTabClick: b,
                                                onInfoClick: w,
                                            }),
                                        ),
                                        d().createElement(
                                            Oe,
                                            { className: Jo, type: 'slide', isOut: null !== c, duration: Fo },
                                            d().createElement(zo, null),
                                        ),
                                    ),
                                ),
                                E(
                                    (e, t) =>
                                        t &&
                                        d().createElement(
                                            G.animated.div,
                                            { className: Zo, style: e },
                                            d().createElement(ze, { onClose: y }),
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
                            d().createElement(z, null, d().createElement(b, null, d().createElement(ti, null))),
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
                    for (var [t, n, a] = deferred[l], s = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((s = !1), a < r && (r = a));
                    if (s) {
                        deferred.splice(l--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
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
                        [s, o, i] = n,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (i) var c = i(__webpack_require__);
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
