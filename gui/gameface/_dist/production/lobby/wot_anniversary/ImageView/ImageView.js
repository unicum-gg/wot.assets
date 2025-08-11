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
                    r.d(t, { mouse: () => c, off: () => s, on: () => l, onResize: () => n, onScaleUpdated: () => o }));
                var i = r(472),
                    a = r(176);
                const n = (0, i.E)('clientResized'),
                    o = (0, i.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    d = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function i() {
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
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${t}`,
                                        o = d[t]((e) => r([e, 'outside']));
                                    function l(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, l),
                                        i(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(n, l),
                                                (e.listeners -= 1),
                                                i(),
                                                (a = !1));
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
                            ((e.enabled = !1), i());
                        },
                        enable() {
                            ((e.enabled = !0), i());
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
                        events: () => i,
                        getMouseGlobalPosition: () => o,
                        getSize: () => n,
                        graphicsQuality: () => l,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var i = r(527),
                    a = r(493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, r) => {
                'use strict';
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => i });
            },
            493: (e, t, r) => {
                'use strict';
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => a, G: () => i });
            },
            472: (e, t, r) => {
                'use strict';
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => i });
            },
            138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => n });
                var i = r(959),
                    a = r(514);
                const n = { view: r(641), client: i, sound: a.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var i = r(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, i.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, n, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            722: (e, t, r) => {
                'use strict';
                function i(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function a(e, t, r) {
                    return `url(${i(e, t, r)})`;
                }
                (r.r(t), r.d(t, { getBgUrl: () => a, getTextureUrl: () => i }));
            },
            112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => a });
                var i = r(472);
                const a = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        arabic2roman: () => T,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => M,
                        events: () => o.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => O,
                        getFontNames: () => y,
                        getScale: () => w,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => L,
                        isFocused: () => p,
                        pxToRem: () => v,
                        remToPx: () => f,
                        resize: () => g,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => h,
                        whenTutorialReady: () => k,
                    }));
                var i = r(690),
                    a = r(722),
                    n = r(112),
                    o = r(538),
                    l = r(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, r, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, i);
                }
                function u(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function h(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function _(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = i.cg,
                    M = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => d });
                const i = ['args'];
                const a = 2,
                    n = 16,
                    o = 32,
                    l = 64,
                    s = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        a = {},
                                        n = Object.keys(e);
                                    for (i = 0; i < n.length; i++) ((r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, i);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    d = {
                        close(e) {
                            s('popover' === e ? a : o);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, r) => {
                'use strict';
                let i, a;
                (r.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
                r.d(t, { cg: () => n });
                const i = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let t = '';
                    for (let r = a.length - 1; r >= 0; r--) for (; e >= a[r]; ) ((t += i[r]), (e -= a[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => n });
                var i = r(138);
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
                        const n = i.O.view.addModelObserver(e, r, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(n) : (this._views[r] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const i = this._callbacks[r];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const n = a;
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
                r.d(t, { ry: () => w });
                class i {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    r();
                                });
                            }));
                    }
                    static get instance() {
                        return (i.__instance || (i.__instance = new i()), i.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const r = e,
                            i = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== i)),
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
                i.__instance = void 0;
                const a = i;
                var n = r(358);
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
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = r(521),
                    m = r(138);
                const g = ['args'];
                function _(e, t, r, i, a, n, o) {
                    try {
                        var l = e[n](o),
                            s = l.value;
                    } catch (e) {
                        return void r(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(i, a);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                    return new Promise(function (i, a) {
                                        var n = e.apply(t, r);
                                        function o(e) {
                                            _(n, i, a, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            _(n, i, a, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        a = {},
                                        n = Object.keys(e);
                                    for (i = 0; i < n.length; i++) ((r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, n, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var i;
                    },
                    f = () => v(l.CLOSE),
                    b = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var p = r(572);
                const x = a.instance,
                    L = {
                        DataTracker: n.Z,
                        ViewModel: p.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: d,
                        TimeFormatType: c,
                        DateFormatType: u,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, i, a = R.invalid('resId'), n) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                d = s.x,
                                c = s.y,
                                u = s.width,
                                h = s.height,
                                g = {
                                    x: m.O.view.pxToRem(d) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(h),
                                };
                            v(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: E(g),
                                on: !0,
                                args: n,
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
                        handleViewEvent: v,
                        onBindingsReady: w,
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
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const a = Object.prototype.toString.call(t[i]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[i];
                                        r[i] = [];
                                        for (let t = 0; t < a.length; t++) r[i].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[i] = e(t[i]))
                                            : (r[i] = t[i]);
                                }
                            return r;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = L;
            },
            613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => i, cy: () => a });
                const i = {
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
            880: (e, t, r) => {
                'use strict';
                var i = r(363),
                    a = r.n(i);
                const n = (e, t, r) =>
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function d(e, t, r) {
                    const i = (function (e, t) {
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
                        n = Math.min(i, a);
                    return {
                        extraLarge: n === r.extraLarge.weight,
                        large: n === r.large.weight,
                        medium: n === r.medium.weight,
                        small: n === r.small.weight,
                        extraSmall: n === r.extraSmall.weight,
                        extraLargeWidth: i === r.extraLarge.weight,
                        largeWidth: i === r.large.weight,
                        mediumWidth: i === r.medium.weight,
                        smallWidth: i === r.small.weight,
                        extraSmallWidth: i === r.extraSmall.weight,
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
                })(s || (s = {}));
                const c = o.O.client.getSize('rem'),
                    u = c.width,
                    h = c.height,
                    m = Object.assign({ width: u, height: h }, d(u, h, l)),
                    g = (0, i.createContext)(m),
                    _ = ['children'];
                const E = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                i,
                                a = {},
                                n = Object.keys(e);
                            for (i = 0; i < n.length; i++) ((r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, _);
                    const a = (0, i.useContext)(g),
                        o = a.extraLarge,
                        l = a.large,
                        s = a.medium,
                        d = a.small,
                        c = a.extraSmall,
                        u = a.extraLargeWidth,
                        h = a.largeWidth,
                        m = a.mediumWidth,
                        E = a.smallWidth,
                        w = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        f = a.largeHeight,
                        b = a.mediumHeight,
                        p = a.smallHeight,
                        x = a.extraSmallHeight,
                        L = { extraLarge: v, large: f, medium: b, small: p, extraSmall: x };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && l) return t;
                        if (r.medium && s) return t;
                        if (r.small && d) return t;
                        if (r.extraSmall && c) return t;
                    } else {
                        if (r.extraLargeWidth && u) return n(t, r, L);
                        if (r.largeWidth && h) return n(t, r, L);
                        if (r.mediumWidth && m) return n(t, r, L);
                        if (r.smallWidth && E) return n(t, r, L);
                        if (r.extraSmallWidth && w) return n(t, r, L);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && b) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && x) return t;
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
                (0, i.memo)(E);
                const w = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = ({ children: e }) => {
                        const t = (0, i.useContext)(g),
                            r = (0, i.useState)(t),
                            n = r[0],
                            s = r[1],
                            c = (0, i.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    i = o.O.view.pxToRem(t);
                                s(Object.assign({ width: r, height: i }, d(r, i, l)));
                            }, []),
                            u = (0, i.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        (w(() => {
                            (o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', u));
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    (o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', u));
                                },
                                [c, u],
                            ));
                        const h = (0, i.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(g.Provider, { value: h }, e);
                    };
                var f = r(483),
                    b = r.n(f),
                    p = r(926),
                    x = r.n(p);
                let L, S, O;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(L || (L = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(O || (O = {})));
                const y = () => {
                        const e = (0, i.useContext)(g),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return L.ExtraLarge;
                                    case e.large:
                                        return L.Large;
                                    case e.medium:
                                        return L.Medium;
                                    case e.small:
                                        return L.Small;
                                    case e.extraSmall:
                                        return L.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), L.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    T = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const R = {
                        [S.ExtraSmall]: '',
                        [S.Small]: x().SMALL_WIDTH,
                        [S.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [S.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [O.ExtraSmall]: '',
                        [O.Small]: x().SMALL_HEIGHT,
                        [O.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [O.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [L.ExtraSmall]: '',
                        [L.Small]: x().SMALL,
                        [L.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [L.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [L.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let t = e.children,
                            r = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    a = {},
                                    n = Object.keys(e);
                                for (i = 0; i < n.length; i++) ((r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, T);
                        const n = y(),
                            o = n.mediaWidth,
                            l = n.mediaHeight,
                            s = n.mediaSize;
                        return a().createElement('div', M({ className: b()(r, R[o], k[l], H[s]) }, i), t);
                    },
                    A = ['children'];
                const C = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                i,
                                a = {},
                                n = Object.keys(e);
                            for (i = 0; i < n.length; i++) ((r = n[i]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, A);
                    return a().createElement(v, null, a().createElement(P, r, t));
                };
                var W = r(533),
                    D = r.n(W),
                    I = r(521);
                r(916);
                const N = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = I.n.NONE, t = N, r = !1, a = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== I.n.NONE)
                            return (
                                window.addEventListener('keydown', i, r),
                                () => {
                                    window.removeEventListener('keydown', i, r);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(i), r && i.stopPropagation());
                            }
                        }
                    }, [t, e, r, a]);
                }
                var U = r(403);
                const F = {
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
                    j = {
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
                        (Math.max(...Object.keys(F).map((e) => Number(e))),
                        Math.max(...Object.keys(j).map((e) => Number(e))),
                        L.ExtraSmall,
                        L.Small,
                        L.Medium,
                        L.Large,
                        L.ExtraLarge,
                        'ev_bday_2025_card_zoom');
                function z() {
                    return !1;
                }
                console.log;
                var B = r(174);
                function $(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return q(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function q(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
                    return i;
                }
                const K = (e) => (0 === e ? window : window.subViews.get(e));
                const Y = ((e, t) => {
                        const r = (0, i.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: l, children: s, mocks: d }) {
                                const c = (0, i.useRef)([]),
                                    u = (r, i, a) => {
                                        var n;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = K,
                                                context: i = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function n(e, t = 0) {
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
                                                const l = (e) => {
                                                    const a = r(t),
                                                        n = i.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (r, n) => {
                                                        const s = 'string' == typeof n ? `${i}.${n}` : i,
                                                            d = o.O.view.addModelObserver(s, t, !0);
                                                        return (a.set(d, r), e && r(l(n)), d);
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
                                                        for (var e, r = $(a.keys()); !(e = r()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(i),
                                            s =
                                                'real' === r
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            d = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            u = (e) => c.current.push(e),
                                            h = e({
                                                mode: r,
                                                readByPath: d,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const i = null != t ? t : d(e),
                                                            a = B.LO.box(i, { equals: z });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, B.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const i = null != t ? t : d(e),
                                                            a = B.LO.box(i, { equals: z });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, B.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const i = d(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = B.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, B.aD)((t) => {
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
                                                                n = Object.entries(a),
                                                                o = n.reduce(
                                                                    (e, [t, r]) => ((e[r] = B.LO.box(i[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, B.aD)((e) => {
                                                                            n.forEach(([t, r]) => {
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
                                                cleanup: u,
                                            }),
                                            m = { mode: r, model: h, externalModel: s, cleanup: u };
                                        return {
                                            model: h,
                                            controls: 'mocks' === r && a ? a.controls(m) : t(m),
                                            externalModel: s,
                                            mode: r,
                                        };
                                    },
                                    h = (0, i.useRef)(!1),
                                    m = (0, i.useState)(n),
                                    g = m[0],
                                    _ = m[1],
                                    E = (0, i.useState)(() => u(n, l, d)),
                                    w = E[0],
                                    v = E[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        h.current ? v(u(g, l, d)) : (h.current = !0);
                                    }, [d, g, l]),
                                    (0, i.useEffect)(() => {
                                        _(n);
                                    }, [n]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (w.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [w],
                                    ),
                                    a().createElement(r.Provider, { value: w }, s)
                                );
                            },
                            () => (0, i.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    X = Y[0],
                    Z = Y[1],
                    Q = 'App_base_74',
                    J = 'App_close_9a',
                    ee = 'App_closeImage_0b',
                    te = 'App_closeImage__default_98',
                    re = 'App_closeImage__hover_2c',
                    ie = {
                        [L.ExtraSmall]: { width: 1024, height: 576 },
                        [L.Small]: { width: 1024, height: 576 },
                        [L.Medium]: { width: 1280, height: 720 },
                        [L.Large]: { width: 1600, height: 900 },
                        [L.ExtraLarge]: { width: 1920, height: 1080 },
                    },
                    ae = (0, U.Pi)(() => {
                        const e = Z(),
                            t = e.model,
                            r = e.controls,
                            n = t.root.get().imageSrc,
                            l = (() => {
                                const e = (0, i.useRef)(null),
                                    t = (0, i.useState)({ width: 0, height: 0 }),
                                    r = t[0],
                                    a = t[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        const t = e.current;
                                        if (t) {
                                            const r = () => {
                                                e.current && a({ width: e.current.width, height: e.current.height });
                                            };
                                            return (
                                                r(),
                                                t.addEventListener('load', r),
                                                () => t.removeEventListener('load', r)
                                            );
                                        }
                                    }, []),
                                    { ref: e, box: r }
                                );
                            })(),
                            s = l.ref,
                            d = l.box,
                            c = y().mediaSize;
                        var u, h;
                        ((u = r.close),
                            G(I.n.ESCAPE, u),
                            (h = () => {
                                o.O.sound.play.sound(V);
                            }),
                            (0, i.useEffect)(h, []));
                        const m = d.width / d.height,
                            g = Math.min(d.width, ie[c].width),
                            _ = Math.min(d.height, ie[c].height),
                            E = Math.min(g, _ * m),
                            w = Math.min(_, g / m);
                        return a().createElement(
                            'div',
                            { className: Q },
                            a().createElement('img', {
                                ref: s,
                                src: n,
                                style: { width: `${E}rem`, height: `${w}rem` },
                            }),
                            a().createElement(
                                'div',
                                { className: J, onClick: r.close },
                                a().createElement('div', { className: b()(ee, te) }),
                                a().createElement('div', { className: b()(ee, re) }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    D().render(
                        a().createElement(C, null, a().createElement(X, null, a().createElement(ae, null))),
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
        (__webpack_require__.O = (e, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, r, i] = deferred[s], n = !0, o = 0; o < t.length; o++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((n = !1), i < a && (a = i));
                    if (n) {
                        deferred.splice(s--, 1);
                        var l = r();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > i; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, r, i];
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
        (__webpack_require__.j = 998),
        (() => {
            var e = { 998: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var i,
                        a,
                        [n, o, l] = r,
                        s = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (l) var d = l(__webpack_require__);
                    }
                    for (t && t(r); s < n.length; s++)
                        ((a = n[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [46], () => __webpack_require__(880));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
