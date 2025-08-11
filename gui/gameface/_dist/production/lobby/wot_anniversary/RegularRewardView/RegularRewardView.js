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
            527: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o }));
                var n = r(472),
                    a = r(176);
                const i = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => r([e, 'outside']));
                                    function s(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
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
            959: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = r(527),
                    a = r(493);
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
            176: (e, t, r) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => n });
            },
            493: (e, t, r) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => a, G: () => n });
            },
            472: (e, t, r) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => n });
            },
            138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => i });
                var n = r(959),
                    a = r(514);
                const i = { view: r(641), client: n, sound: a.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var n = r(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            722: (e, t, r) => {
                'use strict';
                function n(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function a(e, t, r) {
                    return `url(${n(e, t, r)})`;
                }
                (r.r(t), r.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => a });
                var n = r(472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => P,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => o.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => x,
                        getFontNames: () => y,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => R,
                        isFocused: () => b,
                        pxToRem: () => w,
                        remToPx: () => v,
                        resize: () => g,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => T,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => M,
                    }));
                var n = r(690),
                    a = r(722),
                    i = r(112),
                    o = r(538),
                    s = r(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function d(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function T() {
                    return viewEnv.setEventHandled();
                }
                function R() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    P = n.cg,
                    O = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    L = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => c });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? a : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, r) => {
                'use strict';
                let n, a;
                (r.d(t, { n: () => n }),
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
                    })(n || (n = {})),
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
            690: (e, t, r) => {
                'use strict';
                r.d(t, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let r = a.length - 1; r >= 0; r--) for (; e >= a[r]; ) ((t += n[r]), (e -= a[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var n = r(138);
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
                    addCallback(e, t, r = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, r, a);
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
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
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
            916: (e, t, r) => {
                'use strict';
                r.d(t, { B3: () => l, Z5: () => o.Z5, B0: () => s, ry: () => p });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const r = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                var i = r(358);
                var o = r(613);
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
                var _ = r(521),
                    m = r(138);
                const g = ['args'];
                function h(e, t, r, n, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        r = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            h(i, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, n, a, o, s, 'throw', e);
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
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    v = () => w(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = r(572);
                const T = a.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, a = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
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
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: E(g),
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
                            f(e, v);
                        },
                        handleViewEvent: w,
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
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < a.length; t++) r[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = S;
            },
            613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            996: (e, t, r) => {
                'use strict';
                var n = r(363),
                    a = r.n(n);
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
                var o = r(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, r) {
                    const n = (function (e, t) {
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
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
                    };
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
                const u = o.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, s)),
                    g = (0, n.createContext)(m),
                    h = ['children'];
                const E = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, h);
                    const a = (0, n.useContext)(g),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        c = a.small,
                        u = a.extraSmall,
                        d = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        E = a.smallWidth,
                        p = a.extraSmallWidth,
                        w = a.extraLargeHeight,
                        v = a.largeHeight,
                        f = a.mediumHeight,
                        b = a.smallHeight,
                        T = a.extraSmallHeight,
                        R = { extraLarge: w, large: v, medium: f, small: b, extraSmall: T };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && s) return t;
                        if (r.medium && l) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && d) return i(t, r, R);
                        if (r.largeWidth && _) return i(t, r, R);
                        if (r.mediumWidth && m) return i(t, r, R);
                        if (r.smallWidth && E) return i(t, r, R);
                        if (r.extraSmallWidth && p) return i(t, r, R);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && v) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && b) return t;
                            if (r.extraSmallHeight && T) return t;
                        }
                    }
                    return null;
                };
                E.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, n.memo)(E);
                const p = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    w = ({ children: e }) => {
                        const t = (0, n.useContext)(g),
                            r = (0, n.useState)(t),
                            i = r[0],
                            l = r[1],
                            u = (0, n.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                l(Object.assign({ width: r, height: n }, c(r, n, s)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                u(e.width, e.height);
                            }, [u]);
                        (p(() => {
                            (o.O.client.events.on('clientResized', u), o.O.client.events.on('self.onScaleUpdated', d));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (o.O.client.events.off('clientResized', u),
                                        o.O.client.events.off('self.onScaleUpdated', d));
                                },
                                [u, d],
                            ));
                        const _ = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(g.Provider, { value: _ }, e);
                    };
                var v = r(483),
                    f = r.n(v),
                    b = r(926),
                    T = r.n(b);
                let S, x, y;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(x || (x = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(y || (y = {})));
                const P = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return S.ExtraLarge;
                                    case e.large:
                                        return S.Large;
                                    case e.medium:
                                        return S.Medium;
                                    case e.small:
                                        return S.Small;
                                    case e.extraSmall:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return x.ExtraLarge;
                                    case e.largeWidth:
                                        return x.Large;
                                    case e.mediumWidth:
                                        return x.Medium;
                                    case e.smallWidth:
                                        return x.Small;
                                    case e.extraSmallWidth:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    O = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const M = {
                        [x.ExtraSmall]: '',
                        [x.Small]: T().SMALL_WIDTH,
                        [x.Medium]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH}`,
                        [x.Large]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH} ${T().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [y.ExtraSmall]: '',
                        [y.Small]: T().SMALL_HEIGHT,
                        [y.Medium]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT}`,
                        [y.Large]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT} ${T().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [S.ExtraSmall]: '',
                        [S.Small]: T().SMALL,
                        [S.Medium]: `${T().SMALL} ${T().MEDIUM}`,
                        [S.Large]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE}`,
                        [S.ExtraLarge]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE} ${T().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, O);
                        const i = P(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', L({ className: f()(r, M[o], A[s], k[l]) }, n), t);
                    },
                    D = ['children'];
                const N = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, D);
                    return a().createElement(w, null, a().createElement(I, r, t));
                };
                var C = r(533),
                    U = r.n(C);
                function B() {}
                function G() {
                    return !1;
                }
                console.log;
                var H = r(521),
                    W = r(916);
                const F = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = H.n.NONE, t = F, r = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', n, r),
                                () => {
                                    window.removeEventListener('keydown', n, r);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(n), r && n.stopPropagation());
                            }
                        }
                    }, [t, e, r, a]);
                }
                const z = (e) => {
                    (0, n.useEffect)(e, []);
                };
                var q = r(403),
                    Y = r(30);
                const j = {
                        0: { box: { top: 416, left: 285, width: 267, height: 187 } },
                        1: { box: { top: 443, left: 616, width: 214, height: 240 } },
                        2: { box: { top: 392, left: 894, width: 307, height: 268 } },
                        3: { box: { top: 707, left: 264, width: 240, height: 294 } },
                        4: { box: { top: 741, left: 568, width: 374, height: 347 } },
                        5: { box: { top: 809, left: 1006, width: 214, height: 240 } },
                        6: { box: { top: 349, left: 1341, width: 267, height: 187 } },
                        7: { box: { top: 375, left: 1723, width: 280, height: 320 } },
                        8: { box: { top: 424, left: 2067, width: 214, height: 240 } },
                        9: { box: { top: 601, left: 1373, width: 286, height: 200 } },
                        10: { box: { top: 878, left: 1341, width: 200, height: 200 } },
                        11: { box: { top: 865, left: 1611, width: 266, height: 226 } },
                        12: { box: { top: 759, left: 1947, width: 360, height: 320 } },
                    },
                    X = {
                        13: { box: { top: 410, left: 286, width: 280, height: 266 } },
                        14: { box: { top: 458, left: 630, width: 267, height: 187 } },
                        15: { box: { top: 422, left: 961, width: 214, height: 240 } },
                        16: { box: { top: 764, left: 253, width: 280, height: 320 } },
                        17: { box: { top: 732, left: 597, width: 320, height: 320 } },
                        18: { box: { top: 777, left: 981, width: 240, height: 294 } },
                        19: { box: { top: 390, left: 1375, width: 400, height: 294 } },
                        20: { box: { top: 364, left: 1839, width: 374, height: 347 } },
                        21: { box: { top: 821, left: 1341, width: 213, height: 213 } },
                        22: { box: { top: 774, left: 1618, width: 294, height: 307 } },
                        23: { box: { top: 807, left: 1976, width: 320, height: 240 } },
                    },
                    V =
                        (Math.max(...Object.keys(j).map((e) => Number(e))),
                        Math.max(...Object.keys(X).map((e) => Number(e))),
                        { [S.ExtraSmall]: 0.5, [S.Small]: 0.5, [S.Medium]: 0.625, [S.Large]: 0.75, [S.ExtraLarge]: 1 }),
                    K = 400,
                    Q = 280,
                    Z = 838,
                    J = 398,
                    ee = 'ev_bday_2025_envelope_rewards_appear',
                    te = 'ev_bday_2025_envelope_rewards_disappear',
                    re = (e) => Math.sin((e * Math.PI) / 2),
                    ne = (e) => 1 - Math.cos((e * Math.PI) / 2),
                    ae = (e) => 1 - Math.pow(1 - e, 3),
                    ie = (e) => {
                        const t = 1.70158;
                        return 2.70158 * e * e * e - t * e * e;
                    },
                    oe = (e, t, r, n, a) => {
                        const i = 1 - e;
                        return (
                            Math.pow(i, 3) * t +
                            3 * Math.pow(i, 2) * e * r +
                            3 * i * Math.pow(e, 2) * n +
                            Math.pow(e, 3) * a
                        );
                    },
                    se = (e, t, r, n, a) => {
                        const i = 1 - e;
                        return 3 * Math.pow(i, 2) * (r - t) + 6 * i * e * (n - r) + 3 * Math.pow(e, 2) * (a - n);
                    };
                ((le = 0.33), (ce = 0), (ue = 0.25), (de = 0));
                var le, ce, ue, de;
                function _e(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return me(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return me(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function me(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const ge = () =>
                        (() => {
                            const e = (0, n.useMemo)(() => ({}), []),
                                t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                r = (e, r) => (t(e).set(r, r), () => i(e, r)),
                                a = (e, r) => (
                                    t(e).set(r, (...t) => {
                                        (r(...t), i(e, r));
                                    }),
                                    () => i(e, r)
                                ),
                                i = (e, r) => {
                                    t(e).delete(r);
                                },
                                o = (e, ...r) => {
                                    for (var n, a = _e(t(e).values()); !(n = a()).done; ) (0, n.value)(...r);
                                };
                            return (0, n.useMemo)(() => ({ on: r, once: a, off: i, trigger: o }), []);
                        })(),
                    he = a().createContext({ on: () => B, once: () => B, off: B, trigger: B }),
                    Ee = ({ children: e }) => {
                        const t = ge();
                        return a().createElement(he.Provider, { value: t }, e);
                    },
                    pe = () => (0, n.useContext)(he);
                var we = r(174);
                function ve(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return fe(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return fe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const be = (e) => (0 === e ? window : window.subViews.get(e));
                const Te = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const u = (0, n.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = be,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = r(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const l = 'string' == typeof i ? `${n}.${i}` : n,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return (a.set(c, r), e && r(s(i)), c);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const r = s(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = ve(a.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            l =
                                                'real' === r
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = we.LO.box(n, { equals: G });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = we.LO.box(n, { equals: G });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = we.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = we.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            m = { mode: r, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === r && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: r,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(i),
                                    g = m[0],
                                    h = m[1],
                                    E = (0, n.useState)(() => d(i, s, c)),
                                    p = E[0],
                                    w = E[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? w(d(g, s, c)) : (_.current = !0);
                                    }, [c, g, s]),
                                    (0, n.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    a().createElement(r.Provider, { value: p }, l)
                                );
                            },
                            () => (0, n.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['animationEnabled']), { bonuses: e.array('bonuses') }),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            setBlur: e.createCallback((e) => ({ setBlur: e }), 'onSetBlur'),
                        }),
                    ),
                    Re = Te[0],
                    Se = Te[1],
                    xe = 'App_base_b4',
                    ye = 'App_background_4a',
                    Pe = 'App_rewards_13';
                let Oe, Le, Me, Ae, ke, Ie, De, Ne;
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
                })(Oe || (Oe = {})),
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
                    })(Le || (Le = {})),
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
                    })(Me || (Me = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Ae || (Ae = {})),
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
                    })(ke || (ke = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ie || (Ie = {})),
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
                    })(De || (De = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Ne || (Ne = {})));
                const Ce = [Oe.Attachment];
                class Ue extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = W.B3.GOLD;
                        else e = W.B3.INTEGRAL;
                        const t = W.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Ue.defaultProps = { format: 'integral' };
                const Be = [
                        Oe.Items,
                        Oe.Equipment,
                        Oe.Xp,
                        Oe.XpFactor,
                        Oe.Blueprints,
                        Oe.BlueprintsAny,
                        Oe.Goodies,
                        Oe.Berths,
                        Oe.Slots,
                        Oe.Tokens,
                        Oe.CrewSkins,
                        Oe.CrewBooks,
                        Oe.Customizations,
                        Oe.CreditsFactor,
                        Oe.TankmenXp,
                        Oe.TankmenXpFactor,
                        Oe.FreeXpFactor,
                        Oe.BattleToken,
                        Oe.LootBox,
                        Oe.PremiumUniversal,
                        Oe.NaturalCover,
                        Oe.BpCoin,
                        Oe.BattlePassSelectToken,
                        Oe.BattlaPassFinalAchievement,
                        Oe.BattleBadge,
                        Oe.BattlePassTicket,
                        Oe.BonusX5,
                        Oe.CrewBonusX3,
                        Oe.EpicSelectToken,
                        Oe.Comp7TokenWeeklyReward,
                        Oe.DeluxeGift,
                        Oe.ModernizedDevicesT1Gift,
                        Oe.ModernizedDevicesT2Gift,
                        Oe.ModernizedDevicesT3Gift,
                        Oe.BattleBoosterGift,
                        Oe.OptionalDevice,
                        Oe.Attachment,
                    ],
                    Ge = [Oe.Gold, Oe.Credits, Oe.Crystal, Oe.FreeXp],
                    He = [Oe.BattlePassPoints, Oe.EquipCoin],
                    We = [Oe.PremiumPlus, Oe.Premium],
                    Fe = (e) =>
                        Be.includes(e)
                            ? Ae.MULTI
                            : Ge.includes(e)
                              ? Ae.CURRENCY
                              : He.includes(e)
                                ? Ae.NUMBER
                                : We.includes(e)
                                  ? Ae.PREMIUM_PLUS
                                  : Ae.STRING,
                    $e = ['engravings', 'backgrounds'],
                    ze = ['engraving', 'background'],
                    qe = (e, t = Me.Small) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            i = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case Me.S600x450:
                                        return 'c_600x450';
                                    case Me.S400x300:
                                        return 'c_400x300';
                                    case Me.S296x222:
                                        return 'c_296x222';
                                    case Me.S232x174:
                                        return 'c_232x174';
                                    case Me.Big:
                                        return 'c_80x80';
                                    case Me.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
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
                                return ((e, t, r) => {
                                    const n = $e[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            i = a.$dyn(r);
                                        return i ? `${i}` : `${a.$dyn(ze[e])}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                        }
                    },
                    Ye = [Me.Small, Me.Big],
                    je = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case Ae.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case Ae.CURRENCY:
                            case Ae.NUMBER:
                                return a().createElement(Ue, { format: 'integral', value: Number(e) });
                            case Ae.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    Xe = [
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
                function Ve(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const Ke = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    Qe = (e) => {
                        let t = e.children,
                            r = e.contentId,
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
                            h = e.isEnabled,
                            E = void 0 === h || h,
                            p = e.targetId,
                            w = void 0 === p ? 0 : p,
                            v = e.onShow,
                            f = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Xe);
                        const T = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(
                                () =>
                                    w ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let r,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var i;
                                        return (
                                            t &&
                                                ((a =
                                                    (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== r &&
                                                    window.subViews[r] &&
                                                    (n = window.subViews[r].id)),
                                            { callerUrl: a, caller: r, stack: t, resId: n }
                                        );
                                    })().resId,
                                [w],
                            ),
                            x = (0, n.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (Ke(r, g, { isMouseEvent: !0, on: !0, arguments: Ve(a) }, S),
                                    v && v(),
                                    (T.current.isVisible = !0));
                            }, [r, g, a, S, v]),
                            y = (0, n.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        Ke(r, g, { on: !1 }, S),
                                        T.current.isVisible && f && f(),
                                        (T.current.isVisible = !1));
                                }
                            }, [r, g, S, f]),
                            P = (0, n.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === E && y();
                            }, [E, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ));
                        return E
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((O = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(x, u ? 100 : 400)),
                                                      i && i(e),
                                                      O && O(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (y(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && y(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && y(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var O;
                    },
                    Ze = ['children'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const et = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Ze);
                        return a().createElement(
                            Qe,
                            Je(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                r,
                            ),
                            t,
                        );
                    },
                    tt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const nt = R.views.common.tooltip_window.simple_tooltip_content,
                    at = (e) => {
                        let t = e.children,
                            r = e.body,
                            i = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, tt);
                        const u = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: r, header: i, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, r, i, o, l]);
                        return a().createElement(
                            Qe,
                            rt(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? nt.SimpleTooltipHtmlContent('resId') : nt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function it() {
                    return (
                        (it =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        it.apply(this, arguments)
                    );
                }
                const ot = ({ children: e, tooltipArgs: t, className: r }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: r }, e);
                        if (t.header || t.body) return a().createElement(at, t, n);
                        const i = t.contentId;
                        return i ? a().createElement(Qe, it({}, t, { contentId: i }), n) : a().createElement(et, t, n);
                    },
                    st = {
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
                    lt = ({
                        name: e,
                        image: t,
                        isPeriodic: r = !1,
                        size: n = Me.Big,
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
                                if (void 0 === t || !Ye.includes(e)) return null;
                                switch (t) {
                                    case ke.BATTLE_BOOSTER:
                                    case ke.BATTLE_BOOSTER_REPLACE:
                                        return Ie.BATTLE_BOOSTER;
                                }
                            })(n, i),
                            h = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ke.BATTLE_BOOSTER:
                                        return De.BATTLE_BOOSTER;
                                    case ke.BATTLE_BOOSTER_REPLACE:
                                        return De.BATTLE_BOOSTER_REPLACE;
                                    case ke.BUILT_IN_EQUIPMENT:
                                        return De.BUILT_IN_EQUIPMENT;
                                    case ke.EQUIPMENT_PLUS:
                                        return De.EQUIPMENT_PLUS;
                                    case ke.EQUIPMENT_TROPHY_BASIC:
                                        return De.EQUIPMENT_TROPHY_BASIC;
                                    case ke.EQUIPMENT_TROPHY_UPGRADED:
                                        return De.EQUIPMENT_TROPHY_UPGRADED;
                                    case ke.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return De.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ke.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return De.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ke.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return De.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ke.PROGRESSION_STYLE_UPGRADED_1:
                                        return De.PROGRESSION_STYLE_UPGRADED_1;
                                    case ke.PROGRESSION_STYLE_UPGRADED_2:
                                        return De.PROGRESSION_STYLE_UPGRADED_2;
                                    case ke.PROGRESSION_STYLE_UPGRADED_3:
                                        return De.PROGRESSION_STYLE_UPGRADED_3;
                                    case ke.PROGRESSION_STYLE_UPGRADED_4:
                                        return De.PROGRESSION_STYLE_UPGRADED_4;
                                    case ke.PROGRESSION_STYLE_UPGRADED_5:
                                        return De.PROGRESSION_STYLE_UPGRADED_5;
                                    case ke.PROGRESSION_STYLE_UPGRADED_6:
                                        return De.PROGRESSION_STYLE_UPGRADED_6;
                                    case ke.ATTACHMENT_RARE:
                                        return De.ATTACHMENT_RARE;
                                    case ke.ATTACHMENT_EPIC:
                                        return De.ATTACHMENT_EPIC;
                                    case ke.ATTACHMENT_LEGENDARY:
                                        return De.ATTACHMENT_LEGENDARY;
                                }
                            })(i),
                            E = je(o, s);
                        return a().createElement(
                            'div',
                            {
                                className: f()(st.base, st[`base__${n}`], Ce.includes(e) && st.base__normalize, u),
                                style: c,
                            },
                            a().createElement(
                                ot,
                                { tooltipArgs: _, className: st.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: f()(st.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: f()(st.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: f()(st.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        h &&
                                            a().createElement('div', {
                                                className: f()(st.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${h}_overlay)`,
                                                },
                                            }),
                                    ),
                                    E &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    st.info,
                                                    st[`info__${e}`],
                                                    s === Ae.MULTI && st.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            E,
                                        ),
                                    l && a().createElement('div', { className: st.title }, l),
                                ),
                            ),
                            r &&
                                a().createElement(
                                    ot,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: f()(st.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function ct() {
                    const e = (0, n.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useEffect)(() => t, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, r) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), t());
                                        }, r)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var ut;
                !(function (e) {
                    ((e.GiftMachineToken = 'battleToken'),
                        (e.LootBox = 'lootBox'),
                        (e.Tman = 'tmanToken'),
                        (e.WdrCoin = 'wdrcoin'),
                        (e.Toys = 'ny25Toys'),
                        (e.AchievementReward = 'dossier_achievement'),
                        (e.Customizations = 'customizations'),
                        (e.VariadicDiscount = 'variadicDiscount'),
                        (e.AddcEconomicBonuses = 'addcEconomicBonuses'),
                        (e.Vehicles = 'vehicles'),
                        (e.MarketplaceToken = 'ny_marketplace'),
                        (e.RandomBooklet = 'randomNyBooklet'),
                        (e.RandomGuide = 'randomNyGuide'),
                        (e.RandomDecoration = 'randomNyToy'),
                        (e.RandomInstruction = 'randomNyInstruction'));
                })(ut || (ut = {}));
                const dt = (e) => {
                        switch (e) {
                            case ut.Tman:
                            case ut.GiftMachineToken:
                            case ut.LootBox:
                            case ut.AddcEconomicBonuses:
                            case ut.RandomBooklet:
                            case ut.RandomGuide:
                            case ut.RandomDecoration:
                            case ut.RandomInstruction:
                            case ut.WdrCoin:
                            case ut.Toys:
                                return Ae.MULTI;
                            default:
                                return Fe(e);
                        }
                    },
                    _t = {
                        base: 'Reward_base_32',
                        shadow: 'Reward_shadow_5e',
                        base__s400x300: 'Reward_base__s400x300_e8',
                        base__s296x222: 'Reward_base__s296x222_53',
                        info: 'Reward_info_fc',
                        info__credits: 'Reward_info__credits_b3',
                        info__gold: 'Reward_info__gold_3d',
                        info__crystal: 'Reward_info__crystal_9b',
                        info__premiumTank: 'Reward_info__premiumTank_b2',
                        base__highlight: 'Reward_base__highlight_61',
                        counter: 'Reward_counter_a9',
                        label: 'Reward_label_ab',
                    };
                function mt(e, t, r, n, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const gt = (0, q.Pi)(({ bonus: e, index: t, size: r }) => {
                        const i = Se().model,
                            s = P().mediaSize,
                            l = pe(),
                            c = l.once,
                            u = l.trigger,
                            d = (0, n.useRef)(null),
                            _ = (0, n.useRef)(!1),
                            m = ct(),
                            g = (0, Y.useSpring)(() => ({ opacity: 0, scale: 0.25, x: '-50%', y: '-50%' })),
                            h = g[0],
                            E = g[1],
                            p = (0, Y.useSpring)(() => ({
                                x: '0rem',
                                y: '0rem',
                                opacity: 0,
                                scale: 0.25,
                                brightness: 3,
                                onChange: ({ value: { opacity: e, x: t, y: r, scale: n, brightness: a } }) => {
                                    const i = d.current;
                                    i &&
                                        ((i.style.opacity = e),
                                        (i.style.transform = `translateX(${t}) translateY(${r}) scale(${n})`),
                                        (i.style.filter = `brightness(${a * a})`));
                                },
                            }))[1],
                            w = (0, Y.useSpring)(() => ({ opacity: 0, y: '2rem' })),
                            v = w[0],
                            b = w[1],
                            T = () => {
                                const e = ((e) => {
                                        switch (e) {
                                            case Me.S296x222:
                                                return { width: 296, height: 222 };
                                            case Me.S400x300:
                                                return { width: 400, height: 300 };
                                            default:
                                                return (
                                                    console.error(`[ImageSize] Unknown size! (${e})`),
                                                    { width: 296, height: 222 }
                                                );
                                        }
                                    })(r),
                                    n = viewEnv.remToPx(e.width),
                                    a = viewEnv.remToPx(e.height),
                                    o = viewEnv.getClientSizePx(),
                                    s = o.width;
                                return {
                                    width: n,
                                    height: a,
                                    top: o.height / 2 - a / 2,
                                    left: s / 2 - (n * i.bonuses.get().length) / 2 + n * t,
                                };
                            },
                            R = () => {
                                const e = (() => {
                                    const e = T(),
                                        t = e.width,
                                        r = e.height,
                                        n = e.top,
                                        a = e.left,
                                        i = viewEnv.getClientSizePx(),
                                        o = i.width,
                                        l = i.height,
                                        c = a + t / 2,
                                        u = n + r / 2,
                                        d = o / 2 + viewEnv.remToPx((Z + K / 2) * V[s]),
                                        _ = l / 2 + viewEnv.remToPx(J + 0.25 * Q) * V[s];
                                    return {
                                        startX: `${viewEnv.pxToRem(d - c)}rem`,
                                        startY: `${viewEnv.pxToRem(_ - u)}rem`,
                                        endX: `${viewEnv.pxToRem(o - c)}rem`,
                                        endY: `${viewEnv.pxToRem(l - u)}rem`,
                                    };
                                })();
                                e &&
                                    p.start({
                                        from: { x: e.startX, y: e.startY },
                                        to: { opacity: 1, scale: 0.35 },
                                        config: { duration: 100, easing: re },
                                        delay: 300 * t,
                                        onStart: () => {
                                            E.start({
                                                to: { opacity: 1, scale: 1 },
                                                config: { duration: 1e3, easing: re },
                                            });
                                        },
                                        onRest: () => {
                                            var e, r;
                                            _.current ||
                                                p.start({
                                                    to: { opacity: 1, scale: 1, brightness: 1, x: '0rem', y: '0rem' },
                                                    config: { duration: 800, easing: ae },
                                                    delay: 100,
                                                    onStart: () => {
                                                        (0 === t && o.O.sound.play.sound(ee),
                                                            i.bonuses.get().length - 1 === t &&
                                                                u('onLastRewardAnimationStart'));
                                                    },
                                                    onRest:
                                                        ((e = function* () {
                                                            _.current ||
                                                                (b.start({
                                                                    to: { opacity: 1, y: '0rem' },
                                                                    config: { duration: 100, easing: re },
                                                                }),
                                                                m.run(() => {
                                                                    u('onCloseStart');
                                                                }, 2e3));
                                                        }),
                                                        (r = function () {
                                                            var t = this,
                                                                r = arguments;
                                                            return new Promise(function (n, a) {
                                                                var i = e.apply(t, r);
                                                                function o(e) {
                                                                    mt(i, n, a, o, s, 'next', e);
                                                                }
                                                                function s(e) {
                                                                    mt(i, n, a, o, s, 'throw', e);
                                                                }
                                                                o(void 0);
                                                            });
                                                        }),
                                                        function () {
                                                            return r.apply(this, arguments);
                                                        }),
                                                });
                                        },
                                    });
                            };
                        return (
                            z(
                                () => (
                                    i.animationEnabled.get()
                                        ? R()
                                        : p.start({
                                              from: { opacity: -2, scale: 0.35, brightness: 1, x: '0rem', y: '100%' },
                                              to: { opacity: 1, scale: 1, brightness: 1, x: '0rem', y: '0rem' },
                                              config: { duration: 800, easing: ae },
                                              onStart: () => {
                                                  (0 === t && o.O.sound.play.sound(ee),
                                                      i.bonuses.get().length - 1 === t &&
                                                          u('onLastRewardAnimationStart'));
                                              },
                                              onRest: () => {
                                                  _.current ||
                                                      b.start({
                                                          to: { opacity: 1, y: '0rem' },
                                                          config: { duration: 100, easing: re },
                                                      });
                                              },
                                          }),
                                    c('onCloseStart', () => {
                                        ((_.current = !0),
                                            b.start({
                                                to: { opacity: -0.1 },
                                                config: { duration: 100, easing: ne },
                                                delay: 200 * t,
                                                onRest: () => {
                                                    p.start({
                                                        to: { opacity: 0, scale: 1, x: '0', y: '100%' },
                                                        config: { duration: 800, easing: ie },
                                                        onRest: () => {
                                                            i.bonuses.get().length - 1 === t && u('onCloseEnd');
                                                        },
                                                    });
                                                },
                                            }));
                                    })
                                ),
                            ),
                            a().createElement(
                                'div',
                                {
                                    ref: d,
                                    className: f()(_t.base, _t[`base__${r}`], _t.base__highlight),
                                    style: { zIndex: i.bonuses.get().length - t },
                                },
                                a().createElement(Y.animated.div, { className: _t.shadow, style: h }),
                                a().createElement(lt, {
                                    name: e.name,
                                    image: qe(e, r),
                                    special: e.overlayType,
                                    valueType: Fe(e.name),
                                    size: r,
                                }),
                                a().createElement(
                                    Y.animated.div,
                                    { className: f()(_t.info, _t[`info__${e.name}`]), style: v },
                                    a().createElement(
                                        'div',
                                        { className: _t.label },
                                        ((e) => {
                                            const t = dt(e.name);
                                            return [Ae.MULTI, Ae.PREMIUM_PLUS, Ae.STRING].includes(t)
                                                ? e.label
                                                : je(e.value, t);
                                        })(e),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: _t.counter },
                                        dt((S = e).name) === Ae.MULTI ? je(S.value, Ae.MULTI) : null,
                                    ),
                                ),
                            )
                        );
                        var S;
                    }),
                    ht = 'Rewards_base_e3',
                    Et = (0, q.Pi)(({ className: e }) => {
                        const t = Se().model,
                            r = P().mediaSize;
                        return a().createElement(
                            'div',
                            { className: f()(ht, e) },
                            ((n = t.bonuses.get()),
                            (i = (e, t) =>
                                a().createElement(gt, {
                                    key: t,
                                    bonus: e,
                                    index: t,
                                    size: r >= S.Medium ? Me.S400x300 : Me.S296x222,
                                })),
                            Array.isArray(n) ? n.map(i) : n.map((e, t, r) => i(null == e ? void 0 : e.value, t, r))),
                        );
                        var n, i;
                    }),
                    pt = (0, q.Pi)(() => {
                        const e = Se(),
                            t = e.model,
                            r = e.controls,
                            n = pe(),
                            i = n.once,
                            s = n.on,
                            l = (0, Y.useSpring)(() => ({ opacity: 0 })),
                            c = l[0],
                            u = l[1];
                        var d;
                        return (
                            (d = B),
                            $(H.n.ESCAPE, d),
                            z(() => {
                                if (!t.bonuses.get().length) return r.close();
                            }),
                            z(() =>
                                s('onLastRewardAnimationStart', () => {
                                    (r.setBlur(!0),
                                        u.start({ to: { opacity: 1 }, config: { duration: 1e3, easing: ae } }));
                                }),
                            ),
                            z(() => {
                                const e = [
                                    i('onCloseStart', () => {
                                        (r.setBlur(!1),
                                            o.O.sound.play.sound(te),
                                            u.start({
                                                to: { opacity: 0 },
                                                config: {
                                                    duration: 200 * (t.bonuses.get().length - 1) + 800,
                                                    easing: ne,
                                                },
                                            }));
                                    }),
                                    s('onCloseEnd', () => {
                                        r.close();
                                    }),
                                ];
                                return () => e.forEach((e) => e());
                            }),
                            a().createElement(
                                'div',
                                { className: xe, lang: R.strings.settings.LANGUAGE_CODE() },
                                a().createElement(Y.animated.div, { className: ye, style: c }),
                                a().createElement(Et, { className: Pe }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    U().render(
                        a().createElement(
                            N,
                            null,
                            a().createElement(Re, null, a().createElement(Ee, null, a().createElement(pt, null))),
                        ),
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
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
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
        (__webpack_require__.j = 573),
        (() => {
            var e = { 573: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        a,
                        [i, o, s] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        ((a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [46], () => __webpack_require__(996));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
