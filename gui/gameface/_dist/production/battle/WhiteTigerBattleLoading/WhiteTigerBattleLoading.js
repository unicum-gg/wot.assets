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
                    n.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o }));
                var r = n(2472),
                    a = n(1176);
                const i = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, a.R)(!0);
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
                                : (0, a.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            o = d[t]((e) => n([e, 'outside']));
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
                        return Object.assign({}, i, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var r = n(527),
                    a = n(2493);
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
            1176: (e, t, n) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => a, G: () => r });
            },
            2472: (e, t, n) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var r = n(5959),
                    a = n(7698),
                    i = n(514);
                const o = { view: n(7641), client: r, sound: i.ZP, intl: a.N };
            },
            7698: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => o });
                var r = n(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, r.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => a });
                var r = n(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        arabic2roman: () => T,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => R,
                        enableFullScreenModeSupported: () => A,
                        events: () => o.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => M,
                        getFontNames: () => O,
                        getScale: () => b,
                        getSize: () => g,
                        getViewGlobalPosition: () => h,
                        initExternalPaddings: () => P,
                        isEventHandled: () => L,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => C,
                    }));
                var r = n(9690),
                    a = n(3722),
                    i = n(6112),
                    o = n(6538),
                    s = n(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
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
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const O = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = r.cg;
                function M() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const R = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    C = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function A() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function P(e) {
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
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => i });
                const r = ['args'],
                    a = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    i = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
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
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { cg: () => i });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = a.length - 1; n >= 0; n--) for (; e >= a[n]; ) ((t += r[n]), (e -= a[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var r = n(3138);
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
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, { ry: () => E });
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
                var i = n(1358),
                    o = n(8613);
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = n(5521),
                    _ = n(3138);
                const h = ['args'];
                function p(e, t, n, r, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            p(i, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(i, r, a, o, s, 'throw', e);
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
                                })(t, h);
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
                    w = () => v(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var y = n(7572);
                const L = a.instance,
                    x = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: d,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: m,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                d = l.x,
                                c = l.y,
                                u = l.width,
                                m = l.height,
                                g = {
                                    x: _.O.view.pxToRem(d) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(u),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: b(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, w);
                        },
                        handleViewEvent: v,
                        onBindingsReady: E,
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
                        ClickOutsideManager: L,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => a });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
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
            6073: (e, t, n) => {
                'use strict';
                var r = n(7363),
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
                var o = n(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e = o.O.client.getSize('rem')) {
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
                const c = d(),
                    u = (0, r.createContext)(c),
                    m = ['children'];
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
                        })(e, m);
                    const a = (0, r.useContext)(u),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        d = a.small,
                        c = a.extraSmall,
                        g = a.extraLargeWidth,
                        _ = a.largeWidth,
                        h = a.mediumWidth,
                        p = a.smallWidth,
                        b = a.extraSmallWidth,
                        E = a.extraLargeHeight,
                        v = a.largeHeight,
                        w = a.mediumHeight,
                        f = a.smallHeight,
                        y = a.extraSmallHeight,
                        L = { extraLarge: E, large: v, medium: w, small: f, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && s) return t;
                        if (n.medium && l) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && c) return t;
                    } else {
                        if (n.extraLargeWidth && g) return i(t, n, L);
                        if (n.largeWidth && _) return i(t, n, L);
                        if (n.mediumWidth && h) return i(t, n, L);
                        if (n.smallWidth && p) return i(t, n, L);
                        if (n.extraSmallWidth && b) return i(t, n, L);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && E) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && w) return t;
                            if (n.smallHeight && f) return t;
                            if (n.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const t = (0, r.useState)(d),
                        n = t[0],
                        i = t[1],
                        s = (0, r.useState)(!1),
                        l = s[0],
                        c = s[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                i((e) => {
                                    const t = o.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : d(t);
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
                        a().createElement(u.Provider, { value: n }, l && e)
                    );
                };
                var _ = n(6483),
                    h = n.n(_),
                    p = n(926),
                    b = n.n(p);
                let E, v, w;
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
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const f = ['children', 'className'];
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
                const L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_HEIGHT,
                        [w.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [w.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [E.ExtraSmall]: '',
                        [E.Small]: b().SMALL,
                        [E.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [E.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [E.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let t = e.children,
                            n = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, f);
                        const o = (() => {
                                const e = (0, r.useContext)(u),
                                    t = e.width,
                                    n = e.height,
                                    a = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    E.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return v.ExtraLarge;
                                            case e.largeWidth:
                                                return v.Large;
                                            case e.mediumWidth:
                                                return v.Medium;
                                            case e.smallWidth:
                                                return v.Small;
                                            case e.extraSmallWidth:
                                                return v.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    v.ExtraSmall
                                                );
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    w.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: i,
                                    mediaHeight: o,
                                    remScreenWidth: t,
                                    remScreenHeight: n,
                                };
                            })(),
                            s = o.mediaWidth,
                            l = o.mediaHeight,
                            d = o.mediaSize;
                        return a().createElement('div', y({ className: h()(n, L[s], x[l], S[d]) }, i), t);
                    },
                    T = ['children'],
                    M = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, T);
                        return a().createElement(g, null, a().createElement(O, n, t));
                    };
                var k = n(1533),
                    C = n.n(k);
                const A = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let P, I;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(P || (P = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(I || (I = {})));
                const H = ({ size: e = P.Default }) => {
                        const t = h()(A.background, A[`background__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    D = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    W = ({ size: e }) => {
                        const t = h()(D.base, D[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    N = {
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
                    B = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: i, withoutBounce: o }) => {
                            const s = h()(
                                    N.base,
                                    N[`base__${e}`],
                                    n && N.base__disabled,
                                    i && N.base__finished,
                                    o && N.base__withoutBounce,
                                ),
                                l = !n && !i;
                            return a().createElement(
                                'div',
                                { className: s, style: r, ref: t },
                                a().createElement('div', { className: N.pattern }),
                                a().createElement('div', { className: N.gradient }),
                                l && a().createElement(W, { size: e }),
                            );
                        },
                    ),
                    $ = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            ('function' == typeof n && n(), clearTimeout(r));
                        };
                    };
                let G, z;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(G || (G = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(z || (z = {})));
                const F = (e) => (e ? { left: 0 } : { right: 0 }),
                    U = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    j = (e) => ({ transitionDuration: `${e}ms` }),
                    V = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                            className: c,
                        }) => {
                            const u = s < i,
                                m = (0, r.useState)(G.Idle),
                                g = m[0],
                                _ = m[1],
                                p = g === G.End,
                                b = g === G.Idle,
                                E = g === G.Grow,
                                v = g === G.Shrink,
                                w = (0, r.useCallback)(
                                    (e) => {
                                        (_(e), d && d(e));
                                    },
                                    [d],
                                ),
                                f = (0, r.useCallback)(
                                    (e, t) =>
                                        $(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, r.useEffect)(() => {
                                if (!n)
                                    return b
                                        ? f(G.Grow, t)
                                        : E
                                          ? f(G.Shrink, e)
                                          : v
                                            ? f(G.End, e)
                                            : void (p && l && l());
                            }, [f, n, p, E, b, v, l, t, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, j(e), F(u)), [u, e]),
                                L = (0, r.useMemo)(() => Object.assign({ width: '0%' }, j(e), F(u)), [u, e]),
                                x = (0, r.useMemo)(() => Object.assign({ width: '0%' }, U(u, i), j(e)), [i, u, e]),
                                S = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - i)}%` }, U(u, i), j(e)),
                                    [i, u, s, e],
                                );
                            if (p) return null;
                            const O = h()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                u && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: b ? x : S, className: O },
                                a().createElement(
                                    'div',
                                    { style: v ? L : y, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(W, { size: o }),
                                ),
                            );
                        },
                    ),
                    K = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: d,
                            onChangeAnimationState: c,
                        }) => {
                            const u = e < n,
                                m = (0, r.useState)(!1),
                                g = m[0],
                                _ = m[1],
                                h = (0, r.useCallback)(
                                    (e) => {
                                        (e === G.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                b = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(B, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: g ? b : p,
                                }),
                                n >= 0 &&
                                    a().createElement(V, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: h,
                                        freezed: l.freezed,
                                        onEndAnimation: d,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    q = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                        }) => {
                            const c = s < i,
                                u = (0, r.useState)(z.Idle),
                                m = u[0],
                                g = u[1],
                                _ = m === z.In,
                                h = m === z.End,
                                p = m === z.Idle,
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (g(e), d && d(e));
                                    },
                                    [d],
                                );
                            ((0, r.useEffect)(() => {
                                if (p && !n)
                                    return $(() => {
                                        b(z.In);
                                    }, t);
                            }, [b, n, p, t]),
                                (0, r.useEffect)(() => {
                                    if (_)
                                        return $(() => {
                                            (l && l(), b(z.End));
                                        }, e + t);
                                }, [b, _, l, t, e]));
                            const E = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                w = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(i - s)}%`, left: `${c ? s : i}%` }),
                                    [i, c, s],
                                );
                            return h
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: w },
                                      a().createElement(
                                          'div',
                                          { style: p ? E : v, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(W, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    Y = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: d,
                            onEndAnimation: c,
                        }) => {
                            const u = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(B, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    a().createElement(q, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: d,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    X = ['onComplete', 'onEndAnimation'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const Q = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                return a;
                            })(e, X);
                        const o = (0, r.useState)(!1),
                            s = o[0],
                            l = o[1],
                            d = (0, r.useCallback)(() => {
                                const e = 100 === i.to;
                                (e !== s && l(e), e && t && t(), n && n());
                            }, [s, t, n, i.to]);
                        switch (i.animationSettings.type) {
                            case I.Simple:
                                return a().createElement(Y, Z({}, i, { onEndAnimation: d, isComplete: s }));
                            case I.Growing:
                                return a().createElement(K, Z({}, i, { onEndAnimation: d, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    J = ({ size: e, value: t, lineRef: n, disabled: i, onComplete: o }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            a().createElement(B, { size: e, disabled: i, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    ee = ['onEndAnimation'];
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ne = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, ee);
                    const i = (0, r.useRef)({}),
                        o = (0, r.useCallback)(() => {
                            ((i.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof i.current.from ? i.current.from : n.from;
                    return (
                        (i.current.from = s),
                        a().createElement(
                            Q,
                            te({}, n, {
                                onEndAnimation: o,
                                key: `${s}-${n.to}-${null == n ? void 0 : n.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ae = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: i,
                            additionalKey: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                            onComplete: c,
                        }) => {
                            if (i === t)
                                return a().createElement(J, {
                                    key: `${i}-${t}-${o}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const u = {
                                from: i,
                                to: t,
                                size: e,
                                additionalKey: o,
                                lineRef: n,
                                disabled: r,
                                animationSettings: s,
                                onComplete: c,
                                onEndAnimation: l,
                                onChangeAnimationState: d,
                            };
                            return s.withStack
                                ? a().createElement(ne, u)
                                : a().createElement(Q, re({ key: `${i}-${t}-${o}` }, u));
                        },
                    ),
                    ie = (e) => {
                        var t, n, r, a, i, o, s, l, d, c, u, m, g, _, h, p, b, E, v, w;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (n = e.bg) ? void 0 : n.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (r = null == (a = e.bg) ? void 0 : a.heightSmall) ? r : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (i = e.line.filter) ? i : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (s = e.pattern.borderSize) ? s : '1rem',
                            '--progress-pattern-gradient':
                                null != (l = e.pattern.gradient)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (d = e.pattern.gradientFinished)
                                    ? d
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (u = null == (m = e.glowSettings) ? void 0 : m.width) ? u : '60rem',
                            '--progress-glow-height':
                                null != (g = null == (_ = e.glowSettings) ? void 0 : _.height) ? g : '100rem',
                            '--progress-glow-small-width':
                                null != (h = null == (p = e.glowSettings) ? void 0 : p.smallWidth) ? h : '44rem',
                            '--progress-glow-small-height':
                                null != (b = null == (E = e.glowSettings) ? void 0 : E.smallHeight) ? b : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (v = null == (w = e.glowSettings) ? void 0 : w.mixBlendMode) ? v : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    oe = (e, t, n) => (n < e ? e : n > t ? t : n),
                    se = (e, t, n) => ('number' == typeof n ? (oe(0, t, n) / t) * 100 : e),
                    le = {
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
                    de = {
                        freezed: !1,
                        withStack: !1,
                        type: I.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ce = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = le,
                            size: n = P.Default,
                            animationSettings: i = de,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: d,
                            additionalKey: c,
                            lineRef: u,
                            onChangeAnimationState: m,
                            onEndAnimation: g,
                            onComplete: _,
                            className: p,
                        }) => {
                            const b = (function (e, t, n) {
                                return (0, r.useMemo)(() => {
                                    const r = (oe(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: se(r, t, n) };
                                }, [n, t, e]);
                            })(l, e, d);
                            return a().createElement(
                                'div',
                                { className: h()(A.base, p, A[`base__${n}`]), style: ie(t) },
                                !s && a().createElement(H, { size: n }),
                                a().createElement(ae, {
                                    size: n,
                                    lineRef: u,
                                    disabled: o,
                                    value: b.value,
                                    deltaFrom: b.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: i,
                                    onEndAnimation: g,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                var ue = n(5521);
                n(9916);
                const me = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ge(e = ue.n.NONE, t = me, n = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ue.n.NONE)
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
                var _e = n(3282);
                let he;
                !(function (e) {
                    ((e.Hunter = 'hunter'), (e.Boss = 'boss'));
                })(he || (he = {}));
                const pe = {
                    bgImageBase: 'R.images.white_tiger.gui.maps.icons.battleLoading.pattern_base',
                    line: { bgColorBase: '#8f0808', bgColorDisabled: '#C0C0C0', bgColorFinished: '#8f0808' },
                    pattern: {
                        bgImageBase: 'R.images.white_tiger.gui.maps.icons.battleLoading.pattern_red',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                        bgImageFinished: 'R.images.white_tiger.gui.maps.icons.battleLoading.pattern_red',
                    },
                    glow: 'R.invalid',
                    glowSmall: 'R.images.white_tiger.gui.maps.icons.battleLoading.glowSmallRed',
                    delta: {
                        color: '#ffc',
                        shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                    },
                };
                function be() {
                    return !1;
                }
                console.log;
                var Ee = n(3915);
                function ve(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const we = (e) => (0 === e ? window : window.subViews.get(e)),
                    fe = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: s, mocks: l }) {
                                const d = (0, r.useRef)([]),
                                    c = (e, n, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = we,
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
                                                            d = o.O.view.addModelObserver(l, t, !0);
                                                        return (a.set(d, n), e && n(s(i)), d);
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
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return ve(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? ve(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            c = (e) => d.current.push(e),
                                            u = (({ observableModel: e }) => ({
                                                primitives: e.primitives(['currentProgress', 'playerType']),
                                            }))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const n = l(t),
                                                            r = Ee.observable.box(n, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Ee.action)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            a = Ee.observable.box(r, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Ee.action)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            a = Ee.observable.box(r, { equals: be });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Ee.action)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = l(n);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = Ee.observable.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Ee.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                i = Object.entries(a),
                                                                o = i.reduce(
                                                                    (e, [t, n]) => (
                                                                        (e[n] = Ee.observable.box(r[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Ee.action)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && r ? r.controls(m) : t(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, r.useRef)(!1),
                                    m = (0, r.useState)(e),
                                    g = m[0],
                                    _ = m[1],
                                    h = (0, r.useState)(() => c(e, i, l)),
                                    p = h[0],
                                    b = h[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        u.current ? b(c(g, i, l)) : (u.current = !0);
                                    }, [l, g, i]),
                                    (0, r.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    a().createElement(n.Provider, { value: p }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(0, function () {}),
                    ye = fe[0],
                    Le = fe[1],
                    xe = {
                        bg: 'Button_bg_26',
                        hover: 'Button_hover_6d',
                        base: 'Button_base_aa',
                        base__left: 'Button_base__left_2c',
                    };
                let Se;
                !(function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(Se || (Se = {}));
                const Oe = a().memo(({ type: e, className: t, onClick: n }) =>
                        a().createElement(
                            'div',
                            {
                                className: h()(xe.base, xe[`base__${e}`], t),
                                onClick: n,
                                onMouseEnter: o.O.sound.play.highlight,
                            },
                            a().createElement('div', { className: xe.bg }),
                            a().createElement('div', { className: xe.hover }),
                        ),
                    ),
                    Te = a().memo(({ index: e, activeIndex: t, className: n, onClick: r }) =>
                        a().createElement(
                            'div',
                            {
                                className: h()('NavButton_base_bb', n),
                                onClick: () => {
                                    r(e);
                                },
                                onMouseEnter: o.O.sound.play.highlight,
                            },
                            a().createElement('div', {
                                className: h()('NavButton_navImg_61', e === t && 'NavButton_navImg__active_37'),
                            }),
                        ),
                    ),
                    Me = {
                        base: 'WhiteTigerBattleLoadingApp_base_97',
                        vignette: 'WhiteTigerBattleLoadingApp_vignette_b5',
                        shadow: 'WhiteTigerBattleLoadingApp_shadow_5e',
                        bgImage: 'WhiteTigerBattleLoadingApp_bgImage_03',
                        block: 'WhiteTigerBattleLoadingApp_block_2c',
                        hintContainer: 'WhiteTigerBattleLoadingApp_hintContainer_31',
                        hintText: 'WhiteTigerBattleLoadingApp_hintText_a6',
                        row__active: 'WhiteTigerBattleLoadingApp_row__active_f9',
                        progressBar: 'WhiteTigerBattleLoadingApp_progressBar_e9',
                        progressBorder: 'WhiteTigerBattleLoadingApp_progressBorder_b8',
                        container: 'WhiteTigerBattleLoadingApp_container_5a',
                        button: 'WhiteTigerBattleLoadingApp_button_04',
                        button__left: 'WhiteTigerBattleLoadingApp_button__left_ee',
                        button__right: 'WhiteTigerBattleLoadingApp_button__right_32',
                        navigation: 'WhiteTigerBattleLoadingApp_navigation_5b',
                    },
                    Re = R.images.white_tiger.gui.maps.icons.battleLoading.hints,
                    ke = {
                        [he.Hunter]: R.strings.white_tiger_battle.loading.hunter,
                        [he.Boss]: R.strings.white_tiger_battle.loading.boss,
                    },
                    Ce = ['hint1', 'hint2', 'hint3', 'hint4'],
                    Ae = (e, t, n) => (e + n + t) % t,
                    Pe = (0, _e.observer)(() => {
                        const e = Le().model,
                            t = e.primitives.playerType.get(),
                            n = e.primitives.currentProgress.get(),
                            i = (0, r.useState)(0),
                            s = i[0],
                            l = i[1],
                            d = Ce[s],
                            c = (0, r.useCallback)(() => {
                                (l(Ae(s, Ce.length, -1)), o.O.sound.play.click());
                            }, [s]),
                            u = (0, r.useCallback)(() => {
                                (l(Ae(s, Ce.length, 1)), o.O.sound.play.click());
                            }, [s]),
                            m = (0, r.useCallback)((e) => {
                                (l(e), o.O.sound.play.click());
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = setInterval(() => {
                                    u();
                                }, 7e3);
                                return () => clearInterval(e);
                            }, [s, u]),
                            ge(ue.n.ARROW_RIGHT, u),
                            ge(ue.n.ARROW_LEFT, c),
                            a().createElement(
                                'div',
                                { className: Me.base },
                                a().createElement('div', {
                                    className: Me.bgImage,
                                    style: { backgroundImage: `url(${Re[t][d]()})` },
                                }),
                                a().createElement('div', { className: Me.vignette }),
                                a().createElement('div', { className: Me.shadow }),
                                a().createElement(
                                    'div',
                                    { className: Me.block },
                                    Ce.map((e, n) =>
                                        a().createElement(
                                            'div',
                                            { className: h()(Me.row, n === s && Me.row__active), key: `row_${n}` },
                                            a().createElement(
                                                'div',
                                                { className: Me.hintContainer },
                                                a().createElement(
                                                    'div',
                                                    { className: Me.hintText },
                                                    `${ke[t][Ce[n]]().replace(/(\d+)\.\s+/g, '$1. ')}`,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Me.container },
                                    a().createElement(Oe, {
                                        type: Se.Left,
                                        className: h()(Me.button, Me.button__left),
                                        onClick: c,
                                    }),
                                    a().createElement(Oe, {
                                        type: Se.Right,
                                        className: h()(Me.button, Me.button__right),
                                        onClick: u,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Me.navigation },
                                    Ce.map((e, t) =>
                                        a().createElement(Te, {
                                            key: `hint_${t}`,
                                            onClick: m,
                                            index: t,
                                            activeIndex: s,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Me.progressBar },
                                    a().createElement('div', { className: Me.progressBorder }),
                                    a().createElement(ce, { value: n, maxValue: 100, size: P.Small, theme: pe }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    C().render(
                        a().createElement(M, null, a().createElement(ye, null, a().createElement(Pe, null))),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
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
        return (__webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports);
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
        (() => {
            var e = { 'battle/WhiteTigerBattleLoading/WhiteTigerBattleLoading': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        ((a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(d);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/white_tiger.vendors'], () =>
        __webpack_require__(6073),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
