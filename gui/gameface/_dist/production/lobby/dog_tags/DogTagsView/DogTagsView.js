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
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => o, onResize: () => s, onScaleUpdated: () => i });
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
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
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
                n.d(t, { O: () => s });
                var a = n(959),
                    r = n(514);
                const s = { view: n(641), client: a, sound: r.ZP };
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
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
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
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        events: () => s.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => S,
                        getFontNames: () => N,
                        getScale: () => f,
                        getSize: () => g,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => k,
                        isFocused: () => w,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => I,
                    });
                var a = n(722),
                    r = n(112),
                    s = n(538),
                    i = n(566);
                const o = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function u(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
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
                    T = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    x = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    I = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
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
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
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
                n.d(t, { n: () => a }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            916: (e, t, n) => {
                'use strict';
                n.d(t, { Sw: () => s.Z, Gr: () => u, Z5: () => o.Z5, B0: () => l, lw: () => i, ry: () => h });
                class a {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
                            this.removeMouseListener();
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
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
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
                    h = (function () {
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
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
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
                    E = () => b(l.CLOSE),
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
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
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
                            b(l.POP_OVER, {
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
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, E);
                        },
                        handleViewEvent: b,
                        onBindingsReady: h,
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
            394: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => Js,
                        Bar: () => Xs,
                        DefaultScroll: () => Qs,
                        Direction: () => Ms,
                        defaultSettings: () => As,
                        useHorizontalScrollApi: () => Bs,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => fi, Bar: () => _i, Default: () => vi, useVerticalScrollApi: () => ei });
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
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(m || (m = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(g || (g = {}));
                const _ = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: r,
                    mixClass: s,
                    soundHover: l,
                    soundClick: g,
                    onMouseEnter: _,
                    onMouseMove: p,
                    onMouseDown: v,
                    onMouseUp: f,
                    onMouseLeave: h,
                    onClick: b,
                }) => {
                    const E = (0, c.useRef)(null),
                        w = (0, c.useState)(n),
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
                            k(n);
                        }, [n]),
                        u().createElement(
                            'div',
                            {
                                ref: E,
                                className: i()(
                                    d.base,
                                    d[`base__${a}`],
                                    r && d.base__disabled,
                                    t && d[`base__${t}`],
                                    y && d.base__focus,
                                    S && d.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== l && o(l), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    p && p(e);
                                },
                                onMouseUp: function (e) {
                                    r || (f && f(e), N(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== g && o(g),
                                        v && v(e),
                                        n && (r || (E.current && (E.current.focus(), k(!0)))),
                                        N(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (h && h(e), N(!1));
                                },
                                onClick: function (e) {
                                    r || (b && b(e));
                                },
                            },
                            a !== m.ghost &&
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
                };
                _.defaultProps = { type: m.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const p = _,
                    v = {
                        base: 'ErrorBoundary_base_46',
                        message: 'ErrorBoundary_message_33',
                        heading: 'ErrorBoundary_heading_ba',
                        button: 'ErrorBoundary_button_74',
                        errorStack: 'ErrorBoundary_errorStack_fe',
                        errorInfo: 'ErrorBoundary_errorInfo_f1',
                    };
                class f extends u().Component {
                    constructor(e) {
                        super(e),
                            (this.clearError = () => {
                                this.setState({ error: void 0 });
                            }),
                            (this.state = { error: void 0 });
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
                                  { className: v.base },
                                  u().createElement(
                                      'div',
                                      { className: v.message },
                                      u().createElement('div', { className: v.heading }, a),
                                      u().createElement(p, { mixClass: v.retry, onClick: this.clearError }, s),
                                  ),
                              )
                            : this.props.children;
                    }
                }
                const h = (e, t, n) =>
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
                const E = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var w;
                function y(e, t, n) {
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
                }
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
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
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(w || (w = {}));
                const k = b.O.client.getSize('rem'),
                    C = k.width,
                    S = k.height,
                    N = Object.assign({ width: C, height: S }, y(C, S, E)),
                    T = (0, c.createContext)(N),
                    x = ['children'];
                const I = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, x);
                    const a = (0, c.useContext)(T),
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
                        f = a.mediumHeight,
                        b = a.smallHeight,
                        E = a.extraSmallHeight,
                        w = { extraLarge: p, large: v, medium: f, small: b, extraSmall: E };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && s) return t;
                        if (n.medium && i) return t;
                        if (n.small && o) return t;
                        if (n.extraSmall && l) return t;
                    } else {
                        if (n.extraLargeWidth && u) return h(t, n, w);
                        if (n.largeWidth && d) return h(t, n, w);
                        if (n.mediumWidth && m) return h(t, n, w);
                        if (n.smallWidth && g) return h(t, n, w);
                        if (n.extraSmallWidth && _) return h(t, n, w);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && E) return t;
                        }
                    }
                    return null;
                };
                I.defaultProps = {
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
                (0, c.memo)(I);
                const O = (e) => {
                        const t = (0, c.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    L = ({ children: e }) => {
                        const t = (0, c.useContext)(T),
                            n = (0, c.useState)(t),
                            a = n[0],
                            r = n[1],
                            s = (0, c.useCallback)((e, t) => {
                                const n = b.O.view.pxToRem(e),
                                    a = b.O.view.pxToRem(t);
                                r(Object.assign({ width: n, height: a }, y(n, a, E)));
                            }, []),
                            i = (0, c.useCallback)(() => {
                                const e = b.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        O(() => {
                            b.O.client.events.on('clientResized', s), b.O.client.events.on('self.onScaleUpdated', i);
                        }),
                            (0, c.useEffect)(
                                () => () => {
                                    b.O.client.events.off('clientResized', s),
                                        b.O.client.events.off('self.onScaleUpdated', i);
                                },
                                [s, i],
                            );
                        const o = (0, c.useMemo)(() => Object.assign({}, a), [a]);
                        return u().createElement(T.Provider, { value: o }, e);
                    };
                var D = n(926),
                    M = n.n(D);
                let A, P, B;
                !(function (e) {
                    (e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = E.small.width)] = 'Small'),
                        (e[(e.Medium = E.medium.width)] = 'Medium'),
                        (e[(e.Large = E.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                })(A || (A = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.width)] = 'Small'),
                            (e[(e.Medium = E.medium.width)] = 'Medium'),
                            (e[(e.Large = E.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                    })(P || (P = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = E.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = E.small.height)] = 'Small'),
                            (e[(e.Medium = E.medium.height)] = 'Medium'),
                            (e[(e.Large = E.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = E.extraLarge.height)] = 'ExtraLarge');
                    })(B || (B = {}));
                const H = () => {
                        const e = (0, c.useContext)(T),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return A.ExtraLarge;
                                    case e.large:
                                        return A.Large;
                                    case e.medium:
                                        return A.Medium;
                                    case e.small:
                                        return A.Small;
                                    case e.extraSmall:
                                        return A.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), A.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return P.ExtraLarge;
                                    case e.largeWidth:
                                        return P.Large;
                                    case e.mediumWidth:
                                        return P.Medium;
                                    case e.smallWidth:
                                        return P.Small;
                                    case e.extraSmallWidth:
                                        return P.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), P.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return B.ExtraLarge;
                                    case e.largeHeight:
                                        return B.Large;
                                    case e.mediumHeight:
                                        return B.Medium;
                                    case e.smallHeight:
                                        return B.Small;
                                    case e.extraSmallHeight:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    W = ['children', 'className'];
                function $() {
                    return (
                        ($ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        $.apply(null, arguments)
                    );
                }
                const z = {
                        [P.ExtraSmall]: '',
                        [P.Small]: M().SMALL_WIDTH,
                        [P.Medium]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH}`,
                        [P.Large]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH} ${M().LARGE_WIDTH}`,
                        [P.ExtraLarge]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH} ${M().LARGE_WIDTH} ${M().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [B.ExtraSmall]: '',
                        [B.Small]: M().SMALL_HEIGHT,
                        [B.Medium]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT}`,
                        [B.Large]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT} ${M().LARGE_HEIGHT}`,
                        [B.ExtraLarge]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT} ${M().LARGE_HEIGHT} ${M().EXTRA_LARGE_HEIGHT}`,
                    },
                    G = {
                        [A.ExtraSmall]: '',
                        [A.Small]: M().SMALL,
                        [A.Medium]: `${M().SMALL} ${M().MEDIUM}`,
                        [A.Large]: `${M().SMALL} ${M().MEDIUM} ${M().LARGE}`,
                        [A.ExtraLarge]: `${M().SMALL} ${M().MEDIUM} ${M().LARGE} ${M().EXTRA_LARGE}`,
                    },
                    j = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, W);
                        const r = H(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            l = r.mediaSize;
                        return u().createElement('div', $({ className: i()(n, z[s], F[o], G[l]) }, a), t);
                    },
                    V = ['children'];
                const U = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, V);
                    return u().createElement(L, null, u().createElement(j, n, t));
                };
                var q = n(533),
                    K = n.n(q),
                    Y = n(6);
                const X = {
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
                    Z = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function Q() {
                    return (
                        (Q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Q.apply(null, arguments)
                    );
                }
                class J extends u().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && o(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && o(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            r = e.side,
                            s = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(e, Z)),
                            _ = i()(X.base, X[`base__${s}`], X[`base__${r}`], null == o ? void 0 : o.base),
                            p = i()(X.icon, X[`icon__${s}`], X[`icon__${r}`], null == o ? void 0 : o.icon),
                            v = i()(X.glow, null == o ? void 0 : o.glow),
                            f = i()(X.caption, X[`caption__${s}`], null == o ? void 0 : o.caption),
                            h = i()(X.goto, null == o ? void 0 : o.goto);
                        return u().createElement(
                            'div',
                            Q(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                g,
                            ),
                            'info' !== s && u().createElement('div', { className: X.shine }),
                            u().createElement('div', { className: p }, u().createElement('div', { className: v })),
                            u().createElement('div', { className: f }, t),
                            a && u().createElement('div', { className: h }, a),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const ee = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        'function' == typeof n && n(), clearTimeout(a);
                    };
                };
                var te = n(521),
                    ne = n(916);
                const ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function re(e = te.n.NONE, t = ae, n = !1, a = !1) {
                    (0, c.useEffect)(() => {
                        if (e !== te.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                const se = (e = 1) => {
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
                    ie = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    oe = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    le = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ce = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = ie(`${e}.${n}`, window);
                                return oe(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ue = (e) => {
                        const t = ((e) => {
                                const t = se(),
                                    n = t.caller,
                                    a = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: le(r, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const r = ie(le(n, `${t}.${a}`), window);
                                    return oe(r) ? (e.push(r.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const de = () => (window.injected || (window.injected = new Map()), window.injected);
                const me = ne.Sw.instance;
                let ge;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(ge || (ge = {}));
                const _e = (e = 'model', t = ge.Deep) => {
                    const n = (0, c.useState)(0),
                        a = (n[0], n[1]),
                        r = (0, c.useMemo)(() => se(), []),
                        s = r.callerUrl,
                        i = r.caller,
                        o = r.resId,
                        l = (0, c.useMemo)(() => {
                            const t = (function (e) {
                                return de().has(e);
                            })(s.replace('.js', '.html'));
                            return window.__feature && window.__feature !== i && !t ? `subViews.${i}.${e}` : e;
                        }, [s, i, e]),
                        u = (0, c.useState)(() =>
                            ((e) => {
                                const t = ie(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return oe(t) ? t.value : t;
                            })(ce(l)),
                        ),
                        d = u[0],
                        m = u[1],
                        g = (0, c.useRef)(-1);
                    return (
                        O(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? ge.Deep : ge.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== ge.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === ge.Deep
                                            ? (e === d && a((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    r = ue(e);
                                g.current = me.addCallback(r, n, o, t === ge.Deep);
                            }
                        }),
                        (0, c.useEffect)(() => {
                            if (t !== ge.None)
                                return () => {
                                    me.removeCallback(g.current, o);
                                };
                        }, [o, t]),
                        d
                    );
                };
                var pe = n(30);
                const ve = 'Onboarding_base_56',
                    fe = 'Onboarding_header_61',
                    he = 'Onboarding_center_c4',
                    be = 'Onboarding_closeBtn_61',
                    Ee = 'Onboarding_body_17',
                    we = 'Onboarding_overlayReveal_0a',
                    ye = 'Onboarding_overlay_30',
                    ke = 'Onboarding_playBtnWrapper_84',
                    Ce = 'Onboarding_playBtn_1e',
                    Se = 'Onboarding_footer_d2',
                    Ne = 'Onboarding_pagination_79',
                    Te = 'Onboarding_paginationBtn_e6',
                    xe = 'Onboarding_selected_2d',
                    Ie = 'Onboarding_replay_39',
                    Oe = 'Onboarding_replayIcon_f1',
                    Re = 'Onboarding_overlayInnerWrapper_e7',
                    Le = 'Onboarding_overlayTitle_95',
                    De = 'Onboarding_overlayText_7e',
                    Me = {
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
                    Ae = (0, c.memo)(
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
                                g = i()(Me[`${t}${r ? 'Out' : 'In'}`], a);
                            return l
                                ? u().createElement('div', { className: a }, e)
                                : u().createElement('div', { onAnimationEnd: d, className: g, style: m }, e);
                        },
                    );
                var Pe;
                !(function (e) {
                    (e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second');
                })(Pe || (Pe = {}));
                const Be = R.strings.dogtags.onboarding.header.title(),
                    He = R.strings.dogtags.onboarding.header.close(),
                    We = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    $e = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    ze = R.strings.dogtags.onboarding.overlay.replay(),
                    Fe = (0, c.memo)(({ onClose: e }) => {
                        const t = _e('model', ge.None).onPlayVideo,
                            n = (0, c.useState)(!1),
                            a = n[0],
                            r = n[1],
                            s = (0, c.useState)(!1),
                            l = s[0],
                            d = s[1],
                            m = (0, c.useState)(Pe.First),
                            g = m[0],
                            _ = m[1],
                            v = (e) => () => (o(R.sounds.play()), _(e)),
                            f = (0, c.useCallback)((t) => (g === Pe.First ? _(Pe.Second) : e(t)), [g, e]),
                            h = (0, c.useCallback)(
                                () => (
                                    o(R.sounds.play()),
                                    g === Pe.First
                                        ? (setTimeout(() => r(!0), 500), t({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => d(!0), 500), t({ urlKey: 'onboardingVideo2' }))
                                ),
                                [g, t],
                            ),
                            b = (0, c.useCallback)(() => o(R.sounds.highlight()), []),
                            E = ((w = a),
                            (y = l),
                            {
                                [Pe.First]: {
                                    title: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [Pe.Second]: {
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
                            C = i()(Te, g === Pe.First && xe),
                            S = i()(Te, g === Pe.Second && xe);
                        return u().createElement(
                            'div',
                            { className: ve },
                            u().createElement(
                                'div',
                                { className: fe },
                                u().createElement('div', { className: he }, Be),
                                u().createElement(
                                    'div',
                                    { className: be },
                                    u().createElement(J, {
                                        caption: He,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: b,
                                    }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Ee, style: k },
                                u().createElement(
                                    Ae,
                                    { type: 'fade', className: we },
                                    u().createElement(
                                        'div',
                                        { className: ye },
                                        ((!a && g === Pe.First) || (!l && g === Pe.Second)) &&
                                            u().createElement(
                                                'div',
                                                { className: ke, onClick: h, onMouseEnter: b },
                                                u().createElement('div', { className: Ce }),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: Re },
                                            u().createElement('div', { className: Le }, E.title),
                                            u().createElement('div', { className: De }, E.text),
                                            ((g === Pe.First && a) || (g === Pe.Second && l)) &&
                                                u().createElement(
                                                    p,
                                                    { type: 'main', size: 'medium', onClick: f, onMouseEnter: b },
                                                    E.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Se },
                                ((g === Pe.First && a) || (g === Pe.Second && l)) &&
                                    u().createElement(
                                        'div',
                                        { className: Ie, onClick: h, onMouseEnter: b },
                                        u().createElement('div', { className: Oe }),
                                        ze,
                                    ),
                                u().createElement(
                                    'div',
                                    { className: Ne },
                                    u().createElement(
                                        'div',
                                        { className: C, onClick: v(Pe.First), onMouseEnter: b },
                                        We,
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: S, onClick: v(Pe.Second), onMouseEnter: b },
                                        $e,
                                    ),
                                ),
                            ),
                        );
                    });
                var Ge = n(664);
                const je = 'Flame_base_90',
                    Ve = 'Flame_slides_58',
                    Ue = 'Flame_frame_29',
                    qe = (0, c.memo)(({ className: e }) => {
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
                                { className: Ve },
                                t.map((e) => u().createElement('img', { key: e, src: e, className: Ue })),
                            ),
                        );
                    });
                let Ke, Ye, Xe, Ze, Qe;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(Ke || (Ke = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(Ye || (Ye = {})),
                    (function (e) {
                        (e.Engraving = 'engraving'), (e.Background = 'background'), (e.All = 'all');
                    })(Xe || (Xe = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base');
                    })(Ze || (Ze = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season');
                    })(Qe || (Qe = {}));
                const Je = {
                        [Qe.Dedication]: [Ze.Dedication],
                        [Qe.Triumph]: [Ze.Triumph],
                        [Qe.Season]: [Ze.Skill, Ze.RankedSkill],
                    },
                    et = 10;
                let tt;
                function nt(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return at(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? at(e, t)
                                          : void 0
                                );
                            }
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
                function at(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                !(function (e) {
                    (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                })(tt || (tt = {}));
                const rt = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    st = (e, t) => {
                        const n = e.id;
                        return n === t.background.id || n === t.engraving.id;
                    },
                    it = R.images.gui.maps.icons.dogtags,
                    ot = 'R.images.gui.maps.icons.dogtags',
                    lt = R.strings.dogtags.component,
                    ct = 'R.strings.dogtags.component',
                    ut = (e, t, n, a = 0, r = 'big', s = it, i = lt) => {
                        s &&
                            !(r in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${ot}`,
                            );
                        const o = r in s ? s[r] : void 0,
                            l = `${t}s`;
                        o &&
                            !(l in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[ot, r].join('.')}`,
                            );
                        const c = o && l in o ? o[l] : void 0,
                            u = `${t}_${e}_${t === Xe.Engraving ? a : '0'}`;
                        c &&
                            !(u in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${u}" does not exist in ${[ot, r, l].join('.')}`,
                            );
                        const d = c && u in c ? c[u]() : s.big.backgrounds.background_66_0();
                        i &&
                            !(t in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${ct}`,
                            );
                        const m = t in i ? i[t] : void 0;
                        m &&
                            !(n in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[ct, t].join('.')}`,
                            );
                        const g = m && n in m ? m[n] : void 0,
                            _ = `c_${e}`;
                        g &&
                            !(_ in g) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${_}" does not exist in ${[ct, t, n].join('.')}`,
                            );
                        return { image: d, strings: g && _ in g ? g[_] : void 0 };
                    },
                    dt = (e) => e.filter((e) => e.value.items.length > 0),
                    mt = (e, t) => {
                        const n = ((e) => Object.keys(e).filter((t) => e[t]))(t),
                            a = n.reduce((e, t) => (e.push(...Je[t]), e), []);
                        return dt(
                            e.map((e) => ({
                                value: Object.assign({}, e.value, {
                                    items: e.value.items.filter((e) => a.includes(e.value.purpose)),
                                }),
                            })),
                        );
                    },
                    gt = { [Ke.Engraving]: 'engravingGrid', [Ke.Background]: 'backgroundGrid' },
                    _t = { [Ke.Engraving]: 'engraving', [Ke.Background]: 'background' },
                    pt = (e, t) => {
                        for (var n, a = nt(e.values()); !(n = a()).done; ) {
                            for (var r, s = nt(n.value.value.items.values()); !(r = s()).done; ) {
                                const e = r.value;
                                if (e.value.id === t) return e.value;
                            }
                        }
                    },
                    vt = (e) => e.reduce((e, t) => e + t.value.items.length, 0),
                    ft = (e, t = tt.NUMBER) => {
                        const n = ne.Z5.getRealFormat(e, ne.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                        return t === tt.PERCENTAGE ? `${n} %` : n;
                    },
                    ht = {
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
                    bt = R.images.gui.maps.icons.dogtags.big.digits,
                    Et = (e, t = bt) => {
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
                    wt = (e) => ({ backgroundImage: `url(${e})` });
                let yt;
                !(function (e) {
                    (e.x300 = 'x300'), (e.x400 = 'x400');
                })(yt || (yt = {}));
                const kt = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(kt))
                    .filter((e) => '$' !== e[0])
                    .map((e) => kt[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const Ct = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        (e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex');
                    },
                    St = {
                        appear: ht.flameAnimation__appear,
                        appearActive: ht.flameAnimation__appearActive,
                        appearDone: ht.flameAnimation__appearDone,
                        enter: ht.flameAnimation__enter,
                        enterActive: ht.flameAnimation__enterActive,
                        enterDone: ht.flameAnimation__enterDone,
                        exit: ht.flameAnimation__exit,
                        exitActive: ht.flameAnimation__exitActive,
                        exitDone: ht.flameAnimation__exitDone,
                    },
                    Nt = ({
                        playerName: e,
                        clanTag: t,
                        background: n,
                        engraving: a,
                        isHighlighted: r,
                        size: s = yt.x300,
                    }) => {
                        const l = n.currentGrade,
                            d = a.currentGrade,
                            m = ut(n.id, Xe.Background, n.purpose || 'default', l || 0, 'big'),
                            g = ut(a.id, Xe.Engraving, a.purpose || 'dedication', d || 0, 'big'),
                            _ = a.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const a = n % 2 == 1;
                                return e.push(...(a ? [t] : t.split(''))), e;
                            }, []);
                        const p = g.strings ? g.strings.title() : null,
                            v = wt(m.image),
                            f = wt(g.image),
                            h = ((e) => {
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
                                r && !h ? o(R.sounds.dt_flame_start()) : h && !r && o(R.sounds.dt_flame_stop());
                            }, [r, h]),
                            u().createElement(
                                'div',
                                { className: i()(ht.base, ht[`base__${s}`]) },
                                u().createElement(
                                    Ge.Z,
                                    {
                                        in: r,
                                        timeout: 400,
                                        className: ht.flameAnimation,
                                        classNames: St,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    u().createElement(qe, null),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ht.dogtags_top },
                                    u().createElement('div', { className: ht.background, style: v }),
                                    u().createElement('div', { className: ht.shadow }),
                                    u().createElement('div', { className: ht.playerInfoShadow }),
                                    u().createElement('div', { className: ht.name }, e),
                                    u().createElement('div', { className: ht.clan }, t),
                                    u().createElement('div', { className: ht.engraving, style: f }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ht.dogtags_bottom },
                                    u().createElement(
                                        'div',
                                        { className: ht.trackerInfoWrapper },
                                        u().createElement('div', { className: ht.trackerText }, p),
                                        u().createElement(
                                            'div',
                                            { className: ht.trackerValue },
                                            _.map((e, t) => {
                                                if (' ' === e)
                                                    return u().createElement('div', {
                                                        key: e + t,
                                                        className: ht.spaceDigit,
                                                    });
                                                const n = Et(e, kt);
                                                return u().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: Ct,
                                                    className: ht.trackerDigit,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Tt = {
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
                let xt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(xt || (xt = {}));
                let It;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(It || (It = {}));
                const Ot = 'metrics',
                    Rt = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    Lt = (e, t) => {
                        const n = (0, c.useCallback)(
                            (n, a = xt.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    Dt = (e) => {
                        const t = Lt(e, Ot),
                            n = (0, c.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, Rt(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    Mt = 'dog_tags';
                let At, Pt, Bt, Ht;
                !(function (e) {
                    (e.Click = 'click'), (e.Display = 'display');
                })(At || (At = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.DogTags = 'dog_tag_view'),
                            (e.AccountDashboard = 'account_dashboard'),
                            (e.AnimatedDogTag = 'animated_dog_tag'),
                            (e.ConfirmDialog = 'confirm_dialog');
                    })(Pt || (Pt = {})),
                    (function (e) {
                        (e.DiscardChanges = 'discard_change_button'),
                            (e.CancelEngraving = 'cancel_engraving_button'),
                            (e.CancelBackground = 'cancel_background_button'),
                            (e.SliderItem = 'slider_item'),
                            (e.ConfirmDogTag = 'confirm_dog_tag_button'),
                            (e.DiscardDogTag = 'discard_dog_tag_button'),
                            (e.ConfirmChanges = 'confirm_button');
                    })(Bt || (Bt = {})),
                    (function (e) {
                        (e.Lock = 'lock'), (e.Unlock = 'unlock');
                    })(Ht || (Ht = {}));
                const Wt = { engraving: Bt.CancelEngraving, background: Bt.CancelBackground, all: Bt.DiscardChanges },
                    $t = () => {
                        const e = Dt(Mt);
                        return (t) => {
                            e({ action: At.Click, parentScreen: Pt.DogTags, item: Wt[t] });
                        };
                    },
                    zt = {
                        base: 'Customization_base_4e',
                        status: 'Customization_status_c1',
                        checkIcon: 'Customization_checkIcon_bf',
                        allEquipped: 'Customization_allEquipped_ed',
                        buttonsWrapper: 'Customization_buttonsWrapper_6d',
                        buttonWrapper: 'Customization_buttonWrapper_c3',
                        button: 'Customization_button_c3',
                    },
                    Ft = ({ text: e, isEquippingDisabled: t, onEquip: n, classNames: a }) =>
                        u().createElement(
                            'div',
                            { className: null == a ? void 0 : a.base },
                            u().createElement(
                                p,
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
                    Gt = 'Selection_base_7b',
                    jt = 'Selection_selection_24',
                    Vt = 'Selection_resetBtn_1b',
                    Ut = R.strings.dogtags.customization,
                    qt = ({ selectedItems: e, isBackgroundEquipped: t, isEngravingEquipped: n, onItemReset: a }) => {
                        const r = $t(),
                            s = (e) => () => {
                                o(R.sounds.dt_locked_reset_button()), a(e), r(e);
                            };
                        return u().createElement(
                            'div',
                            { className: Gt },
                            !t &&
                                e.background.isLocked &&
                                u().createElement(
                                    'div',
                                    { className: jt, onClick: s(Xe.Background), onMouseEnter: l.playHighlight },
                                    Ut.pills.background(),
                                    u().createElement('div', { className: Vt }),
                                ),
                            !n &&
                                e.engraving.isLocked &&
                                u().createElement(
                                    'div',
                                    { className: jt, onClick: s(Xe.Engraving), onMouseEnter: l.playHighlight },
                                    Ut.pills.engraving(),
                                    u().createElement('div', { className: Vt }),
                                ),
                        );
                    },
                    Kt = R.strings.dogtags.customization;
                let Yt;
                !(function (e) {
                    (e.Equipped = 'equipped'), (e.Unequipped = 'unequipped'), (e.AnimatedEquipped = 'animatedEquipped');
                })(Yt || (Yt = {}));
                const Xt = { base: zt.buttonWrapper, button: zt.button },
                    Zt = (0, c.memo)(
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
                                            return Yt.AnimatedEquipped;
                                        case t && n:
                                            return Yt.Equipped;
                                        default:
                                            return Yt.Unequipped;
                                    }
                                })(a, o, s),
                                c = (0, pe.useTransition)(l, {
                                    initial: { transform: 'translateY(0rem)', opacity: 1 },
                                    from: { transform: 'translateY(-20rem)', opacity: 0 },
                                    enter: { transform: 'translateY(0rem)', opacity: 1 },
                                    leave: { transform: 'translateY(20rem)', opacity: 0 },
                                    config: { duration: 300, easing: Tt.easeOutCubic },
                                }),
                                d = H().mediaSize >= A.Large ? g.medium : g.small,
                                _ = $t(),
                                v = (() => {
                                    const e = Dt(Mt);
                                    return () => {
                                        e({ action: At.Click, parentScreen: Pt.DogTags, item: Bt.ConfirmChanges });
                                    };
                                })(),
                                f = () => {
                                    n(Xe.Background), n(Xe.Engraving), _(Xe.All);
                                },
                                h = () => {
                                    v(), r();
                                },
                                b = e.engraving.isLocked || e.background.isLocked;
                            return u().createElement(
                                'div',
                                { className: i()(zt.base, zt[`base__${l}`]) },
                                c((t, a) =>
                                    u().createElement(
                                        pe.animated.div,
                                        { className: zt.status, style: t },
                                        (() => {
                                            switch (a) {
                                                case Yt.AnimatedEquipped:
                                                    return u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement(Ft, {
                                                            text: Kt.button.equip(),
                                                            isEquippingDisabled: b,
                                                            onEquip: h,
                                                            classNames: Xt,
                                                        }),
                                                        u().createElement(qt, {
                                                            selectedItems: e,
                                                            isBackgroundEquipped: o,
                                                            isEngravingEquipped: s,
                                                            onItemReset: n,
                                                        }),
                                                    );
                                                case Yt.Equipped:
                                                    return u().createElement(
                                                        'div',
                                                        { className: zt.allEquipped },
                                                        u().createElement('div', { className: zt.checkIcon }),
                                                        Kt.equipped(),
                                                    );
                                                case Yt.Unequipped:
                                                    return u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement(
                                                            'div',
                                                            { className: zt.buttonsWrapper },
                                                            u().createElement(Ft, {
                                                                text: Kt.button.equipNew(),
                                                                isEquippingDisabled: b,
                                                                onEquip: h,
                                                                classNames: Xt,
                                                            }),
                                                            u().createElement(
                                                                'div',
                                                                { className: zt.buttonWrapper },
                                                                u().createElement(
                                                                    p,
                                                                    {
                                                                        type: m.secondary,
                                                                        size: d,
                                                                        onClick: f,
                                                                        mixClass: zt.button,
                                                                    },
                                                                    Kt.button.discard(),
                                                                ),
                                                            ),
                                                        ),
                                                        u().createElement(qt, {
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
                    Qt = 'DogtagsInfo_base_68',
                    Jt = 'DogtagsInfo_title_02',
                    en = 'DogtagsInfo_progressBarWrapper_48',
                    tn = 'DogtagsInfo_currentLevel_14',
                    nn = 'DogtagsInfo_nextLevel_53',
                    an = 'DogtagsInfo_valuesWrapper_ac',
                    rn = 'DogtagsInfo_valuesWrapper_inner_55',
                    sn = 'DogtagsInfo_valuesWrapper__locked_59',
                    on = 'DogtagsInfo_currentValue_25',
                    ln = 'DogtagsInfo_totalValue_47',
                    cn = 'DogtagsInfo_valuesSeparator_db',
                    un = 'DogtagsInfo_medalInfo_0d',
                    dn = 'DogtagsInfo_skillInfo_13',
                    mn = 'DogtagsInfo_skillInfoIcon_f9',
                    gn = 'DogtagsInfo_shieldLevelWrapper_fa',
                    _n = 'DogtagsInfo_single_86',
                    pn = 'DogtagsInfo_currentShieldWrapper_b0',
                    vn = 'DogtagsInfo_nextShieldWrapper_7e',
                    fn = 'DogtagsInfo_currentLevelShield_60',
                    hn = 'DogtagsInfo_currentLevelValue_d5',
                    bn = 'DogtagsInfo_nextLevelValue_d5',
                    En = 'DogtagsInfo_arrowLock_6a',
                    wn = 'DogtagsInfo_nextLevelShield_22',
                    yn = 'DogtagsInfo_infoSeparator_d7',
                    kn = 'DogtagsInfo_lockedText_9d',
                    Cn = 'DogtagsInfo_lockedIcon_04',
                    Sn = 'DogtagsInfo_skillDescriptionWrapper_dc',
                    Nn = 'DogtagsInfo_skillDescription_94',
                    Tn = 'DogtagsInfo_skillInfoBorderTop_62',
                    xn = 'DogtagsInfo_skillInfoBorderBottom_50',
                    In = (0, c.memo)(({ infoTitle: e, infoText: t, isLocked: n, unlockText: a }) =>
                        u().createElement(
                            'div',
                            { className: Qt },
                            u().createElement('div', { className: Jt }, e),
                            u().createElement('div', { className: un }, t),
                            n &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: yn }),
                                    u().createElement(
                                        'div',
                                        { className: kn },
                                        u().createElement('div', { className: Cn }),
                                        a,
                                    ),
                                ),
                        ),
                    ),
                    On = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Rn, Ln;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Rn || (Rn = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ln || (Ln = {}));
                const Dn = ({ size: e = Rn.Default }) => {
                    const t = i()(On.background, On[`background__${e}`]);
                    return u().createElement('div', { className: t });
                };
                let Mn, An;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Mn || (Mn = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(An || (An = {}));
                const Pn = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Bn = ({ size: e }) => {
                        const t = i()(Pn.base, Pn[`base__${e}`]);
                        return u().createElement('div', { className: t });
                    },
                    Hn = 'ProgressBarDeltaSimple_base_6c',
                    Wn = 'ProgressBarDeltaSimple_delta_99',
                    $n = (0, c.memo)(
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
                                d = (0, c.useState)(An.Idle),
                                m = d[0],
                                g = d[1],
                                _ = m === An.In,
                                p = m === An.End,
                                v = m === An.Idle,
                                f = (0, c.useCallback)(
                                    (e) => {
                                        g(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, c.useEffect)(() => {
                                if (v && !n) {
                                    return ee(() => {
                                        f(An.In);
                                    }, t);
                                }
                            }, [f, n, v, t]),
                                (0, c.useEffect)(() => {
                                    if (_) {
                                        return ee(() => {
                                            i && i(), f(An.End);
                                        }, e + t);
                                    }
                                }, [f, _, i, t, e]);
                            const h = (0, c.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                b = (0, c.useMemo)(
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
                                      { className: Hn, style: E },
                                      u().createElement(
                                          'div',
                                          { style: v ? h : b, className: Wn },
                                          u().createElement(Bn, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    zn = {
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
                    Fn = (0, c.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const o = i()(
                                    zn.base,
                                    zn[`base__${e}`],
                                    n && zn.base__disabled,
                                    r && zn.base__finished,
                                    s && zn.base__withoutBounce,
                                ),
                                l = !n && !r;
                            return u().createElement(
                                'div',
                                { className: o, style: a, ref: t },
                                u().createElement('div', { className: zn.pattern }),
                                u().createElement('div', { className: zn.gradient }),
                                l && u().createElement(Bn, { size: e }),
                            );
                        },
                    ),
                    Gn = (0, c.memo)(
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
                                u().createElement(Fn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                n >= 0 &&
                                    u().createElement($n, {
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
                    jn = 'ProgressBarDeltaGrow_base_7e',
                    Vn = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Un = 'ProgressBarDeltaGrow_glow_68',
                    qn = (e) => (e ? { left: 0 } : { right: 0 }),
                    Kn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Yn = (e) => ({ transitionDuration: `${e}ms` }),
                    Xn = (0, c.memo)(
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
                                g = (0, c.useState)(Mn.Idle),
                                _ = g[0],
                                p = g[1],
                                v = _ === Mn.End,
                                f = _ === Mn.Idle,
                                h = _ === Mn.Grow,
                                b = _ === Mn.Shrink,
                                E = (0, c.useCallback)(
                                    (e) => {
                                        p(e), l && l(e);
                                    },
                                    [l],
                                ),
                                w = (0, c.useCallback)(
                                    (e, t) =>
                                        ee(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, c.useEffect)(() => {
                                if (!n)
                                    return f
                                        ? w(Mn.Grow, t)
                                        : h
                                          ? w(Mn.Shrink, e)
                                          : b
                                            ? w(Mn.End, e)
                                            : void (v && o && o());
                            }, [w, n, v, h, f, b, o, t, e]);
                            const y = (0, c.useMemo)(() => Object.assign({ width: '100%' }, Yn(e), qn(m)), [m, e]),
                                k = (0, c.useMemo)(() => Object.assign({ width: '0%' }, Yn(e), qn(m)), [m, e]),
                                C = (0, c.useMemo)(() => Object.assign({ width: '0%' }, Kn(m, a), Yn(e)), [a, m, e]),
                                S = (0, c.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, Kn(m, a), Yn(e)),
                                    [a, m, s, e],
                                );
                            if (v) return null;
                            const N = i()(jn, d, m && 0 === s && Vn);
                            return u().createElement(
                                'div',
                                { style: f ? C : S, className: N },
                                u().createElement(
                                    'div',
                                    { style: b ? k : y, className: Un },
                                    u().createElement(Bn, { size: r }),
                                ),
                            );
                        },
                    ),
                    Zn = (0, c.memo)(
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
                                        e === Mn.Shrink && _(!0), l && l(e);
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
                                u().createElement(Fn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: g ? f : v,
                                }),
                                n >= 0 &&
                                    u().createElement(Xn, {
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
                    Qn = ['onComplete', 'onEndAnimation'];
                function Jn() {
                    return (
                        (Jn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Jn.apply(null, arguments)
                    );
                }
                const ea = (0, c.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Qn);
                        const r = (0, c.useState)(!1),
                            s = r[0],
                            i = r[1],
                            o = (0, c.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== s && i(e), e && t && t(), n && n();
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case Ln.Simple:
                                return u().createElement(Gn, Jn({}, a, { onEndAnimation: o, isComplete: s }));
                            case Ln.Growing:
                                return u().createElement(Zn, Jn({}, a, { onEndAnimation: o, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    ta = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: r }) => {
                        const s = (0, c.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, c.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            u().createElement(Fn, { size: e, disabled: a, baseStyles: s, isComplete: i, lineRef: n })
                        );
                    },
                    na = ['onEndAnimation'];
                function aa() {
                    return (
                        (aa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        aa.apply(null, arguments)
                    );
                }
                const ra = (0, c.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, na);
                    const a = (0, c.useRef)({}),
                        r = (0, c.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        u().createElement(
                            ea,
                            aa({}, n, {
                                onEndAnimation: r,
                                key: `${s}-${n.to}-${null == n ? void 0 : n.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function sa() {
                    return (
                        (sa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        sa.apply(null, arguments)
                    );
                }
                const ia = (0, c.memo)(
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
                                return u().createElement(ta, {
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
                                ? u().createElement(ra, d)
                                : u().createElement(ea, sa({ key: `${r}-${t}-${s}` }, d));
                        },
                    ),
                    oa = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    la = (e, t, n) => (n < e ? e : n > t ? t : n),
                    ca = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (la(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ua = {
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
                        type: Ln.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ma = (0, c.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ua,
                            size: n = Rn.Default,
                            animationSettings: a = da,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: d,
                            lineRef: m,
                            onChangeAnimationState: g,
                            onEndAnimation: _,
                            onComplete: p,
                        }) => {
                            const v = ((e, t, n) =>
                                (0, c.useMemo)(() => {
                                    const a = (la(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: ca(a, t, n) };
                                }, [n, t, e]))(o, e, l);
                            return u().createElement(
                                'div',
                                { className: i()(On.base, On[`base__${n}`]), style: oa(t) },
                                !s && u().createElement(Dn, { size: n }),
                                u().createElement(ia, {
                                    size: n,
                                    lineRef: m,
                                    disabled: r,
                                    value: v.value,
                                    deltaFrom: v.deltaFrom,
                                    additionalKey: d,
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
                                    type: ne.B0.TOOLTIP,
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
                            h = void 0 === f ? 0 : f,
                            b = e.onShow,
                            E = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, ga);
                        const y = (0, c.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, c.useMemo)(() => h || se().resId, [h]),
                            C = (0, c.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (pa(n, _, { isMouseEvent: !0, on: !0, arguments: _a(a) }, k),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [n, _, a, k, b]),
                            S = (0, c.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        pa(n, _, { on: !1 }, k),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1);
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
                        (0, c.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e);
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
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
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
                                                      ((y.current.timeoutId = window.setTimeout(C, u ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && S(), null == o || o(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && S(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    fa = R.strings.dogtags.customization,
                    ha = (0, c.memo)(
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
                                { className: Qt },
                                u().createElement('div', { className: Jt }, t),
                                u().createElement('div', { className: dn }, n),
                                a &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: yn }),
                                        u().createElement(
                                            'div',
                                            { className: kn },
                                            u().createElement('div', { className: Cn }),
                                            d,
                                        ),
                                    ),
                                u().createElement(
                                    va,
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
                                                { className: rn },
                                                u().createElement('div', { className: on }, ft(s)),
                                                _ < et &&
                                                    u().createElement(
                                                        u().Fragment,
                                                        null,
                                                        u().createElement('div', { className: cn }, '/'),
                                                        u().createElement('div', { className: ln }, ft(a ? o : l, m)),
                                                    ),
                                            ),
                                        !a &&
                                            u().createElement(
                                                'div',
                                                { className: en },
                                                u().createElement(ma, {
                                                    size: Rn.Medium,
                                                    value: s - o,
                                                    maxValue: l - o,
                                                    animationSettings: da,
                                                }),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: i()(an, a && sn) },
                                            !a &&
                                                u().createElement(
                                                    'div',
                                                    { className: tn },
                                                    `${fa.currentLevel()} ${rt[r]}`,
                                                ),
                                            !a && _ < et && u().createElement('div', { className: nn }, rt[r + 1]),
                                            !a && _ === et && u().createElement('div', { className: nn }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ba = (0, c.memo)(
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
                                h = g.level_shields[`Level_gr_${p <= et ? p : 1}`](),
                                b = (0, c.useMemo)(() => ({ backgroundImage: `url(${h})` }), [h]),
                                E = t || d,
                                w = i()(gn, _ === et && _n),
                                y = (0, c.useMemo)(() => ({ componentId: e }), [e]);
                            return u().createElement(
                                'div',
                                { className: Qt },
                                u().createElement('div', { className: Jt }, n),
                                u().createElement('div', { className: dn }, a),
                                !E &&
                                    u().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.ThreeMonthsTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: Sn },
                                            u().createElement('div', { className: Tn }),
                                            u().createElement(
                                                'div',
                                                { className: Nn },
                                                R.strings.dogtags.customization.skill_info(),
                                                u().createElement('div', { className: mn }),
                                            ),
                                            u().createElement('div', { className: xn }),
                                        ),
                                    ),
                                E &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: yn }),
                                        u().createElement(
                                            'div',
                                            { className: kn },
                                            u().createElement('div', { className: Cn }),
                                            l,
                                        ),
                                    ),
                                !E &&
                                    u().createElement(
                                        va,
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
                                                { className: pn },
                                                u().createElement('div', { className: fn, style: f }),
                                                u().createElement('div', { className: hn }, ft(s, m)),
                                            ),
                                            _ < et &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('div', { className: En }),
                                                    u().createElement(
                                                        'div',
                                                        { className: vn },
                                                        u().createElement('div', { className: wn, style: b }),
                                                        u().createElement('div', { className: bn }, ft(o, m)),
                                                    ),
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
                            progressNumberType: d,
                        }) => {
                            const m = r + 1,
                                g = r + 2,
                                _ = Ea.level_shields[`Level_${m}`](),
                                p = (0, c.useMemo)(() => ({ backgroundImage: `url(${_})` }), [_]),
                                v = g < et ? Ea.level_shields[`Level_gr_${g}`]() : '',
                                f = (0, c.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                h = i()(gn, { [_n]: 4 === r }),
                                b = (0, c.useMemo)(() => ({ componentId: e }), [e]);
                            return u().createElement(
                                'div',
                                { className: Qt },
                                u().createElement('div', { className: Jt }, n),
                                u().createElement('div', { className: dn }, a),
                                t &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: yn }),
                                        u().createElement(
                                            'div',
                                            { className: kn },
                                            u().createElement('div', { className: Cn }),
                                            l,
                                        ),
                                    ),
                                !t &&
                                    u().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.TriumphTooltip('resId'),
                                            isEnabled: !0,
                                            args: b,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: h },
                                            u().createElement(
                                                'div',
                                                { className: pn },
                                                u().createElement('div', { className: fn, style: p }),
                                                u().createElement('div', { className: hn }, ft(s, d)),
                                            ),
                                            m < 4 && u().createElement('div', { className: En }),
                                            m < 4 &&
                                                u().createElement(
                                                    'div',
                                                    { className: vn },
                                                    u().createElement('div', { className: wn, style: f }),
                                                    u().createElement('div', { className: bn }, ft(o, d)),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ya = R.images.gui.maps.icons.dogtags,
                    ka = (0, c.memo)(
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
                                p = ya.level_shields[`Level_${g}`](),
                                v = (0, c.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                                f = ya.level_shields[`Level_gr_${_ <= et ? _ : 1}`](),
                                h = (0, c.useMemo)(() => ({ backgroundImage: `url(${f})` }), [f]),
                                b = t || d,
                                E = i()(gn, g === et && _n),
                                w = (0, c.useMemo)(() => ({ componentId: e }), [e]),
                                y = g < et;
                            return u().createElement(
                                'div',
                                { className: Qt },
                                u().createElement('div', { className: Jt }, n),
                                u().createElement('div', { className: dn }, a),
                                !b &&
                                    u().createElement(
                                        va,
                                        {
                                            contentId: R.views.lobby.dog_tags.RankedEfficiencyTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: Sn },
                                            u().createElement('div', { className: Tn }),
                                            u().createElement(
                                                'div',
                                                { className: Nn },
                                                R.strings.dogtags.customization.ranked_skill_info(),
                                                u().createElement('div', { className: mn }),
                                            ),
                                            u().createElement('div', { className: xn }),
                                        ),
                                    ),
                                b &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: yn }),
                                        u().createElement(
                                            'div',
                                            { className: kn },
                                            u().createElement('div', { className: Cn }),
                                            l,
                                        ),
                                    ),
                                !b &&
                                    u().createElement(
                                        va,
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
                                                { className: pn },
                                                u().createElement('div', { className: fn, style: v }),
                                                u().createElement('div', { className: hn }, ft(s, m)),
                                            ),
                                            y &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('div', { className: En }),
                                                    u().createElement(
                                                        'div',
                                                        { className: vn },
                                                        u().createElement('div', { className: wn, style: h }),
                                                        u().createElement('div', { className: bn }, ft(o, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    );
                function Ca() {
                    return (
                        (Ca = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ca.apply(null, arguments)
                    );
                }
                const Sa = ({ currentItem: e }) => {
                        const t = e.id,
                            n = e.purpose,
                            a = e.currentGrade,
                            r = e.type,
                            s = e.currentGradeValue,
                            i = ut(t, r, n, a).strings;
                        if (!i) return console.warn(`Component ${t} is missing translation info.`), null;
                        const o = i.description_locked(),
                            l = i.title(),
                            c = i.description(),
                            d = o.replace('{unlock_value}', String(ft(s))),
                            m = {
                                [Ze.Dedication]: ha,
                                [Ze.Skill]: ba,
                                [Ze.RankedSkill]: ka,
                                [Ze.Triumph]: wa,
                                [Ze.Medal]: In,
                                [Ze.Base]: In,
                            },
                            g = { infoTitle: l, infoText: c, unlockText: d },
                            _ = m[n];
                        return _
                            ? u().createElement(_, Ca({}, e, g))
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
                    Wa = ['active', 'className', 'children', 'size'];
                function $a() {
                    return (
                        ($a = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        $a.apply(null, arguments)
                    );
                }
                const za = (0, c.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        a = e.children,
                        r = e.size,
                        s = void 0 === r ? g.small : r,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Wa);
                    const l = i()(Ma, n, t && Ba);
                    return u().createElement(
                        'div',
                        { className: l },
                        u().createElement(
                            p,
                            $a({}, o, { type: 'secondary', size: s }),
                            u().createElement('span', { className: Aa }, a),
                        ),
                        u().createElement('div', { className: Pa }),
                        u().createElement('div', { className: Ha }),
                    );
                });
                let Fa, Ga, ja, Va;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Fa || (Fa = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(Ga || (Ga = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(ja || (ja = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Va || (Va = {}));
                const Ua = {
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
                    qa = [
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
                function Ka() {
                    return (
                        (Ka = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ka.apply(null, arguments)
                    );
                }
                const Ya = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            r = e.isDisabled,
                            s = void 0 !== r && r,
                            l = e.isAlert,
                            d = void 0 !== l && l,
                            m = e.size,
                            g = void 0 === m ? Ga.medium : m,
                            _ = e.type,
                            p = void 0 === _ ? ja.primary : _,
                            v = e.soundHover,
                            f = void 0 === v ? 'highlight' : v,
                            h = e.soundClick,
                            b = void 0 === h ? 'play' : h,
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
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, qa);
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
                            W = (0, c.useCallback)(
                                (e) => {
                                    const t = e.button === Fa.LEFT;
                                    s || (t && A(!0), t && k && k(e), b && o(b));
                                },
                                [s, k, b],
                            ),
                            $ = (0, c.useCallback)(
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
                            F = (0, c.useCallback)(
                                (e) => {
                                    s || (A(!1), w && w(e));
                                },
                                [s, w],
                            ),
                            G = (0, c.useCallback)(
                                (e) => {
                                    s || (B(!0), N && N(e));
                                },
                                [s, N],
                            ),
                            j = (0, c.useCallback)(
                                (e) => {
                                    s || (B(!1), T && T(e));
                                },
                                [s, T],
                            ),
                            V = u().createElement(
                                'div',
                                { className: Ua.label },
                                u().createElement(
                                    'div',
                                    { className: i()(Ua.labelContent, 's-labelContent'), style: I },
                                    x || O,
                                ),
                            );
                        return u().createElement(
                            'div',
                            Ka(
                                {
                                    id: t,
                                    className: i()(Ua.base, Ua[`base__${g}`], Ua[`base__${p}`], {
                                        [Ua.base__checked]: a,
                                        [Ua.base__disabled]: s,
                                        [Ua.base__mouseDown]: M,
                                        [Ua.base__alert]: d,
                                        [Ua.base__center]: R === Va.Center,
                                        [Ua.base__bottom]: R === Va.Bottom,
                                    }),
                                    onClick: H,
                                    onMouseEnter: z,
                                    onMouseLeave: F,
                                    onMouseDown: W,
                                    onMouseUp: $,
                                    onFocus: G,
                                    onBlur: j,
                                },
                                L,
                            ),
                            u().createElement(
                                'div',
                                { className: Ua.input },
                                u().createElement('div', { className: Ua.alertOverlay }),
                                u().createElement('div', { className: Ua.inputHoverOverlay }),
                                u().createElement('div', { className: Ua.highlight }),
                            ),
                            u().createElement('div', { className: Ua.checkmark }),
                            ((x || O) && V) || null,
                        );
                    },
                    Xa = {
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
                    Za = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Qa() {
                    return (
                        (Qa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Qa.apply(null, arguments)
                    );
                }
                const Ja = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        s = e.hide,
                        o = e.maximumNumber,
                        l = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Za);
                    const d = a ? null : n,
                        m = 'string' == typeof d;
                    if ((d && !m && d < 0) || 0 === d) return null;
                    const g = d && !m && d > o,
                        _ = i()(
                            Xa.base,
                            Xa[`base__${t}`],
                            r && Xa.base__animated,
                            s && Xa.base__hidden,
                            !d && Xa.base__pattern,
                            a && Xa.base__empty,
                            l,
                        );
                    return u().createElement(
                        'div',
                        Qa({ className: _ }, c),
                        u().createElement('div', { className: Xa.bg }),
                        u().createElement('div', { className: Xa.pattern }),
                        u().createElement(
                            'div',
                            { className: i()(Xa.value, m && Xa.value__text) },
                            g ? o : d,
                            g && u().createElement('span', { className: Xa.plus }, '+'),
                        ),
                    );
                };
                Ja.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const er = R.strings.dogtags.component.purposeGroup,
                    tr = (0, c.memo)(
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
                                g = { [Qe.Dedication]: o, [Qe.Triumph]: l, [Qe.Season]: i };
                            return u().createElement(
                                'div',
                                { className: Na },
                                e.length > 0 &&
                                    u().createElement(
                                        'div',
                                        { className: Ta },
                                        e.map((e) => {
                                            const n = t[e],
                                                a = e in er ? er[e]() : er.dedication(),
                                                r = g[e] || 0;
                                            return u().createElement(
                                                'div',
                                                { className: xa, key: e },
                                                u().createElement(
                                                    za,
                                                    { active: n, onClick: d(e) },
                                                    u().createElement('span', { className: Ia }, a),
                                                ),
                                                r > 0 &&
                                                    u().createElement(
                                                        'div',
                                                        { className: Oa },
                                                        u().createElement(
                                                            'div',
                                                            { className: Da },
                                                            u().createElement(Ja, { value: r }),
                                                        ),
                                                    ),
                                            );
                                        }),
                                    ),
                                u().createElement(
                                    'div',
                                    { className: Ra },
                                    u().createElement(Ya, {
                                        isChecked: a,
                                        size: 'medium',
                                        text: R.strings.dogtags.customization.showAvailable(),
                                        type: 'main',
                                        soundHover: 'highlight',
                                        soundClick: 'play',
                                        onChange: m,
                                    }),
                                    u().createElement('span', { className: La }, s),
                                ),
                            );
                        },
                    ),
                    nr = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ar() {
                    return (
                        (ar = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ar.apply(null, arguments)
                    );
                }
                const rr = R.views.common.tooltip_window.simple_tooltip_content,
                    sr = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            r = e.note,
                            s = e.alert,
                            i = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, nr);
                        const l = (0, c.useMemo)(() => {
                            const e = Object.assign({}, i, { body: n, header: a, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, r, i]);
                        return u().createElement(
                            va,
                            ar(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? rr.SimpleTooltipHtmlContent('resId') : rr.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                o,
                            ),
                            t,
                        );
                        var d;
                    },
                    ir = 'Item_base_13',
                    or = 'Item_mainWrapper_0c',
                    lr = 'Item_base__locked_59',
                    cr = 'Item_hoverWrapper_2e',
                    ur = 'Item_componentImage_03',
                    dr = 'Item_componentImage__engravingBackground_19',
                    mr = 'Item_statusIcon_69',
                    gr = 'Item_statusIcon_check_0c',
                    _r = 'Item_statusIcon_lock_5b',
                    pr = 'Item_statusIcon_selectedLocked_ca',
                    vr = 'Item_levelBadge_13',
                    fr = 'Item_selectedBg_7c',
                    hr = 'Item_base__selected_f0',
                    br = 'Item_slotBg_3d',
                    Er = 'Item_hoverBg_8d',
                    wr = 'Item_hoverInfo_05',
                    yr = 'Item_itemCounter_cb',
                    kr = ['selected', 'isEquipped', 'onNewComponentHover', 'isAnimatedDogTagSelected'];
                const Cr = (0, c.memo)((e) => {
                        const t = e.selected,
                            n = e.isEquipped,
                            a = e.onNewComponentHover,
                            r = e.isAnimatedDogTagSelected,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, kr),
                            l = s.id,
                            d = s.type,
                            m = s.isLocked,
                            g = s.currentGrade,
                            _ = s.currentProgress,
                            p = s.progressNumberType,
                            v = s.onClick,
                            f = s.purpose,
                            h = s.isNew,
                            b = g,
                            E = ut(l, d, f, b, 'small'),
                            w = E.image,
                            y = E.strings,
                            k = d === Xe.Engraving,
                            C = (0, c.useCallback)(() => {
                                o(m ? R.sounds.dt_element_locked_click() : R.sounds.dt_element_click()), v(s);
                            }, [m, v, s]),
                            S = (0, c.useCallback)(() => {
                                h && a({ compId: l });
                            }, [l, a, h]),
                            N = (0, c.useCallback)(() => {
                                o(R.sounds.highlight());
                            }, []);
                        if (!y) return console.warn(`Component ${l} is missing translation info.`), null;
                        const T = i()(mr, { [gr]: n && !m && !r, [_r]: !t && m, [pr]: t && m }),
                            x = !m && k;
                        return u().createElement(
                            'div',
                            {
                                className: i()(ir, t && hr, m && lr),
                                onClick: C,
                                onMouseOver: S,
                                onMouseEnter: N,
                                id: 'item-' + l,
                            },
                            u().createElement(
                                'div',
                                { className: or },
                                u().createElement('div', { className: br }),
                                u().createElement('div', { className: fr }),
                                b >= 0 && x && u().createElement('div', { className: vr }, rt[b]),
                                u().createElement(
                                    'div',
                                    { className: i()(ur, k && dr) },
                                    u().createElement('div', {
                                        className: ur,
                                        style: { backgroundImage: `url(${w})` },
                                    }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: cr },
                                    u().createElement('div', { className: Er }),
                                    u().createElement(
                                        'div',
                                        { className: wr },
                                        y.title(),
                                        x && u().createElement('span', null, ft(_, p)),
                                    ),
                                ),
                            ),
                            u().createElement('div', { className: T }),
                            h && u().createElement('div', { className: yr }, u().createElement(Ja, { isEmpty: !0 })),
                        );
                    }),
                    Sr = 'Grid_base_2f',
                    Nr = 'Grid_sectionWrapper_fa',
                    Tr = 'Grid_emptyBlock_30',
                    xr = 'Grid_sectionTitle_79',
                    Ir = 'Grid_sectionTitle_text_63',
                    Or = 'Grid_sectionTitle_unlockedCount_fb',
                    Rr = 'Grid_sectionTitle_count_ac',
                    Lr = 'Grid_sectionTitle_infoIcon_d7';
                function Dr() {
                    return (
                        (Dr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Dr.apply(null, arguments)
                    );
                }
                const Mr = (0, c.memo)(
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
                                { className: Sr },
                                e.map((e, i) => {
                                    const o = e.value.items.length,
                                        l = (3 - (o % 3)) % 3,
                                        c = Array.from(Array(l)).map((e, t) =>
                                            u().createElement('div', { key: 'emptyBlock-' + t, className: Tr }),
                                        ),
                                        d = e.value.items.reduce((e, t) => (t.value.isLocked ? e : e + 1), 0),
                                        m = e.value.title ? systemLocale.toUpperCase(e.value.title) : '';
                                    return u().createElement(
                                        'div',
                                        { key: `${e.value.title}-${i}`, className: Nr },
                                        m &&
                                            u().createElement(
                                                'div',
                                                { className: xr },
                                                u().createElement('div', { className: Ir }, m),
                                                u().createElement(
                                                    'div',
                                                    { className: Rr },
                                                    '(',
                                                    u().createElement('div', { className: Or }, d),
                                                    '/',
                                                    o,
                                                    ')',
                                                ),
                                                e.value.tooltipDescription &&
                                                    u().createElement(
                                                        sr,
                                                        {
                                                            header: e.value.tooltipTitle || void 0,
                                                            body: e.value.tooltipDescription,
                                                        },
                                                        u().createElement('div', { className: Lr }),
                                                    ),
                                            ),
                                        e.value.items.map((e) => {
                                            const i = e.value,
                                                o = st(i, r),
                                                l = st(i, a);
                                            return u().createElement(
                                                Cr,
                                                Dr({ key: i.id }, i, {
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
                    Ar = 'Tabs_base_d9',
                    Pr = 'Tabs_base__vertical_c0',
                    Br = 'Tabs_list_0a',
                    Hr = 'Tabs_list__centered_dc',
                    Wr = 'Tabs_wrapper_2d',
                    $r = 'Tabs_wrapper__centered_d8',
                    zr = 'Tabs_wrapper__vertical_a5';
                function Fr() {
                    return (
                        (Fr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Fr.apply(null, arguments)
                    );
                }
                const Gr = 'tabs-role';
                var jr;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(jr || (jr = {}));
                class Vr extends c.Component {
                    constructor(...e) {
                        super(...e),
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
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = u().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Gr] === jr.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(u().Children.toArray(e[t].props.children));
                        (e[t] = u().cloneElement(e[t], {
                            children: u()
                                .Children.toArray(e[t].props.children)
                                .map((e) => u().cloneElement(e, { key: e.props[jr.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
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
                                Wr,
                                n.props.className,
                                this.props.isTabsCentered && $r,
                                this.props.isVerticalTabs && zr,
                            ),
                            d = i()(Br, this.props.isTabsCentered && Hr);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Gr] === jr.CONTENT)
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
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && o(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        u().createElement(
                                            'div',
                                            { className: d, key: jr.LIST },
                                            u().createElement('div', Fr({}, n.props, { className: c }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = i()(Ar, this.props.isVerticalTabs && Pr);
                        return u().createElement('div', { className: t }, e);
                    }
                }
                Vr.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Ur = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function qr() {
                    return (
                        (qr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        qr.apply(null, arguments)
                    );
                }
                const Kr = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            r = e.onClickSound,
                            s = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Ur);
                        return u().createElement(
                            'div',
                            qr({ className: n }, o),
                            u().createElement(
                                Vr,
                                { activeKey: a, onClickSound: r, onMouseEnterSound: s, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    Yr = ({ children: e, component: t, props: n = {} }) => (t ? u().createElement(t, n, e) : e || null),
                    Xr = 'Tab_base_dd',
                    Zr = 'Tab_base__first_4a',
                    Qr = 'Tab_base__last_96',
                    Jr = 'Tab_base__medium_ec',
                    es = 'Tab_base__active_5d',
                    ts = 'Tab_divider_ca',
                    ns = 'Tab_divider__show_62',
                    as = 'Tab_state_6c',
                    rs = 'Tab_stateHighlight_1e',
                    ss = 'Tab_stateBorder_64',
                    is = 'Tab_stateBorder__positionLeft_e7',
                    os = 'Tab_stateBorder__positionRight_db',
                    ls = 'Tab_counter_e1',
                    cs = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function us() {
                    return (
                        (us = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        us.apply(null, arguments)
                    );
                }
                const ds = (0, c.memo)((e) => {
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
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, cs);
                        return u().createElement(
                            Yr,
                            v,
                            u().createElement(
                                'div',
                                us({ className: i()(Xr, { [es]: n }, { [Zr]: r }, { [Qr]: o }, { [Jr]: c }) }, h),
                                u().createElement(
                                    'span',
                                    { className: as },
                                    u().createElement('span', { className: rs }),
                                    u().createElement('span', { className: i()(ss, is) }),
                                    u().createElement('span', { className: i()(ss, os) }),
                                ),
                                _,
                                !o && !n && u().createElement('span', { className: i()(ts, ns) }),
                                (Boolean(f) || m) &&
                                    u().createElement(
                                        'div',
                                        { className: ls },
                                        u().createElement(Ja, { value: f, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    ms = 'Header_base_eb',
                    gs = 'Header_titleWrapper_ab',
                    _s = 'Header_title_e8',
                    ps = 'Header_infoButtonWrapper_e1',
                    vs = 'Header_infoIcon_8c',
                    fs = Object.keys(Ke)
                        .filter((e) => !isNaN(Number(e)))
                        .map((e) => Number(e)),
                    hs = {
                        [Ke.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [Ke.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    bs = systemLocale.toUpperCase(R.strings.dogtags.customization.mainTitle()),
                    Es = R.strings.dogtags.customization.infoTooltip(),
                    ws = {
                        width: 10 * Math.max(...fs.map((e) => hs[e].length)) + 'rem',
                        padding: '0 5rem',
                        flex: '0 0 150rem',
                        justifyContent: 'center',
                    },
                    ys = (0, c.memo)(({ onTabClick: e, onInfoClick: t }) => {
                        const n = _e('model'),
                            a = n.tab,
                            r = n.newBackgroundComponentCount,
                            s = n.newEngravingComponentCount;
                        return u().createElement(
                            'div',
                            { className: ms },
                            u().createElement(
                                'div',
                                { className: gs },
                                u().createElement('p', { className: _s }, bs),
                                u().createElement(
                                    'div',
                                    { className: ps },
                                    u().createElement(
                                        sr,
                                        { body: Es },
                                        u().createElement(
                                            p,
                                            { type: 'ghost', onClick: t },
                                            u().createElement('div', { className: vs }),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                Kr,
                                { key: a, activeKey: String(a), onClickSound: R.sounds.dt_tab() },
                                u().createElement(
                                    'div',
                                    { 'tabs-role': jr.LIST },
                                    fs.map((t) => {
                                        const n = { [Ke.Engraving]: s, [Ke.Background]: r }[t] || 0;
                                        return u().createElement(
                                            ds,
                                            {
                                                key: String(t),
                                                'tabs-role': jr.TAB,
                                                'tab-key': String(t),
                                                onClick: e,
                                                style: ws,
                                                counter: n,
                                            },
                                            hs[t],
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    ks = 'NoResults_base_35',
                    Cs = 'NoResults_message_41',
                    Ss = 'NoResults_message_icon_a4',
                    Ns = ({ className: e, clearFilters: t }) => {
                        const n = i()(ks, e);
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement(
                                'p',
                                { className: Cs },
                                u().createElement('img', {
                                    src: R.images.gui.maps.icons.dogtags.icons.alert(),
                                    className: Ss,
                                }),
                                R.strings.dogtags.customization.filter.noResults(),
                            ),
                            u().createElement(
                                p,
                                { type: 'secondary', size: g.medium, onClick: t },
                                R.strings.dogtags.customization.filter.restoreFilter(),
                            ),
                        );
                    },
                    Ts = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    (n = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                            }
                        );
                    },
                    xs = [];
                function Is(e) {
                    const t = (0, c.useRef)(e);
                    return (
                        (0, c.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, c.useCallback)((...e) => (0, t.current)(...e), xs)
                    );
                }
                function Os(e, t, n = []) {
                    const a = (0, c.useRef)(0),
                        r = (0, c.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, c.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, c.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        r,
                    ];
                }
                function Rs(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Ls(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Ls(e, t)
                                          : void 0
                                );
                            }
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
                function Ls(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ds(e, t, n) {
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
                                        (i = Date.now()), n.apply(c, l);
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
                                        o(), (s = !0);
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return (0, c.useEffect)(() => a.cancel, [a]), a;
                }
                let Ms;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ms || (Ms = {}));
                const As = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ps = ({
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
                            return s <= r ? 0 : la(r, s, n);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                u = void 0 === l ? As : l,
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
                                            for (var a, r = Rs(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, c.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                p = Ds(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                v = (0, pe.useSpring)(() => ({
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
                                h = v[1],
                                b = (0, c.useCallback)(
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
                                            h.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: u.animationConfig,
                                                from: { scrollPosition: i(a, f.scrollPosition.get()) },
                                            });
                                    },
                                    [h, u.animationConfig, f.scrollPosition],
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
                                            s = b(t, e, a);
                                        E(s);
                                    },
                                    [E, b, u.step],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && w(a(e)),
                                            d.current && _.trigger('mouseWheel', e, f.scrollPosition, t(d.current));
                                    },
                                    [f.scrollPosition, w, _],
                                ),
                                k = ((e, t = []) => {
                                    const n = (0, c.useRef)(),
                                        a = (0, c.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
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
                                        Ts(() => {
                                            const e = d.current;
                                            e &&
                                                (E(i(e, f.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [E, f.scrollPosition.goal],
                                ),
                                C = Is(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, f.scrollPosition.goal);
                                    t !== f.scrollPosition.goal && E(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
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
                                            e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n);
                                        }
                                    );
                                }, [d]);
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
                                    scrollPosition: h,
                                    animationScroll: f,
                                    recalculateContent: C,
                                    events: { on: _.on, off: _.off },
                                }),
                                [f.scrollPosition, E, w, _.off, _.on, C, y, h, u.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Bs = Ps({
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
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ms.Next : Ms.Prev),
                        forceTriggerMouseMove: b.O.view.forceTriggerMouseMove,
                    }),
                    Hs = 'HorizontalBar_base_49',
                    Ws = 'HorizontalBar_base__nonActive_82',
                    $s = 'HorizontalBar_leftButton_5f',
                    zs = 'HorizontalBar_rightButton_03',
                    Fs = 'HorizontalBar_track_0d',
                    Gs = 'HorizontalBar_thumb_fd',
                    js = 'HorizontalBar_rail_32',
                    Vs = 'disable',
                    Us = { pending: !1, offset: 0 },
                    qs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ks = () => {},
                    Ys = (e, t) => Math.max(20, e.offsetWidth * t),
                    Xs = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = qs, onDrag: a = Ks }) => {
                        const r = (0, c.useRef)(null),
                            s = (0, c.useRef)(null),
                            l = (0, c.useRef)(null),
                            d = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, c.useState)(Us),
                            p = _[0],
                            v = _[1],
                            f = (0, c.useCallback)(
                                (e) => {
                                    v(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
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
                                    c = la(0, 1, i / (r - a)),
                                    u = (t.offsetWidth - Ys(t, o)) * c;
                                (n.style.transform = `translateX(${0 | u}px)`),
                                    ((e) => {
                                        if (s.current && l.current && d.current && m.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Vs), void l.current.classList.remove(Vs);
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Vs), void l.current.classList.add(Vs);
                                            var t, n;
                                            s.current.classList.remove(Vs), l.current.classList.remove(Vs);
                                        }
                                    })(u);
                            },
                            E = Is(() => {
                                (() => {
                                    const t = m.current,
                                        n = d.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const i = Math.min(1, a / s);
                                    (t.style.width = `${Ys(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(Ws) : r.current.classList.remove(Ws));
                                })(),
                                    h();
                            });
                        (0, c.useEffect)(() => Ts(E)),
                            (0, c.useEffect)(
                                () =>
                                    Ts(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Ks;
                                        const a = () => {
                                            n(), (n = Ts(E));
                                        };
                                        return (
                                            e.events.on('recalculateContent', E),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', E),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
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
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u });
                                    }),
                                    n = b.O.client.events.mouse.up(() => {
                                        t(), f(Us);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, f]);
                        const w = Os((t) => e.applyStepTo(t), g, [e]),
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
                            e.target.classList.contains(Vs) || o('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: i()(Hs, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: i()($s, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Vs) || 0 !== e.button || (o('play'), y(Ms.Next));
                                },
                                onMouseUp: k,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: i()(Fs, t.track),
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
                                                })(t.screenX > a.getBoundingClientRect().x ? Ms.Prev : Ms.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: C,
                                },
                                u().createElement('div', { ref: m, className: i()(Gs, t.thumb) }),
                                u().createElement('div', { className: i()(js, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: i()(zs, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Vs) || 0 !== e.button || (o('play'), y(Ms.Prev));
                                },
                                onMouseUp: k,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Zs = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Qs = ({
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
                                return Object.assign({}, e, { base: i()(Zs.base, e.base) });
                            }, [a]),
                            g = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: i()(Zs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: i()(Zs.defaultScrollArea, r) },
                                u().createElement(Js, { className: o, api: g, classNames: s }, e),
                            ),
                            u().createElement(Xs, { getStepByRailClick: l, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Js = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, c.useEffect)(() => Ts(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: i()(Zs.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: i()(Zs.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: i()(Zs.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Js.Bar = Xs), (Js.Default = Qs);
                const ei = Ps({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ms.Next : Ms.Prev),
                    }),
                    ti = 'VerticalBar_base_f3',
                    ni = 'VerticalBar_base__nonActive_42',
                    ai = 'VerticalBar_topButton_d7',
                    ri = 'VerticalBar_bottomButton_06',
                    si = 'VerticalBar_track_df',
                    ii = 'VerticalBar_thumb_32',
                    oi = 'VerticalBar_rail_43',
                    li = 'disable',
                    ci = () => {},
                    ui = { pending: !1, offset: 0 },
                    di = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    mi = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    gi = (e, t) => Math.max(20, e.offsetHeight * t),
                    _i = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = di, onDrag: a = ci }) => {
                        const r = (0, c.useRef)(null),
                            s = (0, c.useRef)(null),
                            l = (0, c.useRef)(null),
                            d = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            g = e.stepTimeout || 100,
                            _ = (0, c.useState)(ui),
                            p = _[0],
                            v = _[1],
                            f = (0, c.useCallback)(
                                (e) => {
                                    v(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            h = Is(() => {
                                const t = m.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const i = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${gi(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(ni) : r.current.classList.remove(ni)),
                                    i
                                );
                            }),
                            E = Is(() => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    c = la(0, 1, i / (r - a)),
                                    u = (t.offsetHeight - gi(t, o)) * c;
                                (n.style.transform = `translateY(${0 | u}px)`),
                                    ((e) => {
                                        if (s.current && l.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(li), void l.current.classList.remove(li);
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(li), void l.current.classList.add(li);
                                            var t, n;
                                            s.current.classList.remove(li), l.current.classList.remove(li);
                                        }
                                    })(u);
                            }),
                            w = Is(() => {
                                mi(e, () => {
                                    h(), E();
                                });
                            });
                        (0, c.useEffect)(() => Ts(w)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    mi(e, () => {
                                        E();
                                    });
                                };
                                let n = ci;
                                const a = () => {
                                    n(), (n = Ts(w));
                                };
                                return (
                                    e.events.on('recalculateContent', w),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', w),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!p.pending) return;
                                const t = b.O.client.events.mouse.up(() => {
                                        f(ui);
                                    }),
                                    n = b.O.client.events.mouse.move(([t]) => {
                                        mi(e, (n) => {
                                            const r = d.current,
                                                s = m.current,
                                                i = e.getContainerSize();
                                            if (!r || !s || !i) return;
                                            const o = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                l = (o / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, f]);
                        const y = Os((t) => e.applyStepTo(t), g, [e]),
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
                            e.target.classList.contains(li) || o('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: i()(ti, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: i()(ai, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(li) || 0 !== e.button || (o('play'), k(Ms.Next));
                                },
                                ref: s,
                                onMouseEnter: S,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: i()(si, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((o('play'), t.target === a))
                                                f({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        mi(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Ms.Prev : Ms.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: S,
                                },
                                u().createElement('div', { ref: m, className: i()(ii, t.thumb) }),
                                u().createElement('div', { className: i()(oi, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: i()(ri, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(li) || 0 !== e.button || (o('play'), k(Ms.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    pi = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    vi = ({
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
                                return Object.assign({}, e, { base: i()(pi.base, e.base) });
                            }, [a]),
                            g = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: i()(pi.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: i()(pi.area, r) },
                                u().createElement(fi, { className: s, classNames: o, api: g }, e),
                            ),
                            u().createElement(_i, { getStepByRailClick: l, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    fi = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, c.useEffect)(() => Ts(a.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: i()(pi.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: i()(pi.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                fi.Default = vi;
                const hi = { Vertical: r, Horizontal: a },
                    bi = (e, t) => {
                        const n = t.split('.'),
                            a = n[0];
                        if (!e || 'object' != typeof e)
                            return console.warn(`Reference "${JSON.stringify(e, null, 2)}" is not a valid object.`), !1;
                        if (!a) return console.warn(`Invalid key "${a}" in path ${t}.`), !1;
                        if (!(a in e))
                            return (
                                console.warn(`Key "${a}" was not found in reference "${JSON.stringify(e, null, 2)}".`),
                                !1
                            );
                        const r = n.slice(1);
                        return 0 === r.length || bi(e[a], r.join('.'));
                    },
                    Ei = [
                        'model.equippedDogTag',
                        'model.equippedDogTag.background',
                        'model.equippedDogTag.engraving',
                        'model.engravingGrid',
                        'model.backgroundGrid',
                    ];
                Ei.forEach((e) => bi(window, e));
                const wi = () => (
                        _e(Ei[0]),
                        _e(Ei[1]),
                        _e(Ei[2]),
                        _e(Ei[3]),
                        _e(Ei[4]),
                        ((e, t = !0) => {
                            if (!bi(window, e)) throw Error(`Path "${e}" does not exist.`);
                            const n = _e(e, t ? ge.Deep : ge.None);
                            return 'object' == typeof n && null !== n
                                ? (0, ne.lw)(n)
                                : (t &&
                                      console.warn(
                                          `Tracking of primitive value ${String(n)} in ${e} is not supported.`,
                                      ),
                                  n);
                        })('model')
                    ),
                    yi = 'Router_base_17',
                    ki = 'Router_innerWrapper_d8',
                    Ci = 'Router_gridWrapper_c2',
                    Si = 'Router_infoWrapper_95',
                    Ni = 'Router_dogtagsInfoWrapper_b7',
                    Ti = 'Router_scrollContainer_f2',
                    xi = 'Router_scrollBar_c1',
                    Ii = 'Router_scrollAreaContainer_3e',
                    Oi = 'Router_customizationWrapper_05',
                    Ri = 'Router_scrollAreaWrapper_93',
                    Li = 'Router_scrollAreaWrapper_bottomMask_63',
                    Di = 'Router_gridTitle_a2',
                    Mi = 'Router_subNavigation_b2',
                    Ai = 'Router_topDivider_23',
                    Pi = 'Router_gridBottomSeparator_13',
                    Bi = 'Router_alertMessage_ad',
                    Hi = 'Router_alertIcon_84',
                    Wi = { dedication: !0, season: !0, triumph: !0 },
                    $i = {
                        [Ke.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [Ke.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    zi = () => {
                        const e = wi(),
                            t = ei(),
                            n = ei(),
                            a = H().mediaSize,
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
                            h = e.newEngravingSkillCount,
                            b = e.newEngravingDedicationCount,
                            E = e.newEngravingTriumphCount,
                            w = e.isAnimatedDogTagSelected,
                            y = (0, c.useState)({ background: p, engraving: _ }),
                            k = y[0],
                            C = y[1],
                            S = {
                                background: pt(f, k.background) || f[0].value.items[0].value,
                                engraving: pt(v, k.engraving) || v[0].value.items[0].value,
                            },
                            N = {
                                engraving: pt(v, _) || v[0].value.items[0].value,
                                background: pt(f, p) || f[0].value.items[0].value,
                            },
                            T = (0, c.useState)(Wi),
                            x = T[0],
                            I = T[1],
                            O = (0, c.useState)(!1),
                            L = O[0],
                            D = O[1],
                            M = (0, c.useState)(!0),
                            P = M[0],
                            B = M[1],
                            W = ((e, t) => e[_t[t]])(S, l),
                            $ = $i[l],
                            z = ((e, t) => e[gt[t]])({ backgroundGrid: f, engravingGrid: v }, l),
                            F = l === Ke.Engraving ? mt(z, x) : z,
                            G = dt(
                                F.map((e) => ({
                                    value: Object.assign({}, e.value, {
                                        items: e.value.items.filter((e) => !e.value.isLocked),
                                    }),
                                })),
                            );
                        const j = vt(G),
                            V =
                                l === Ke.Engraving
                                    ? ((e) =>
                                          [Qe.Dedication, Qe.Season, Qe.Triumph].filter((t) => {
                                              for (let n = 0; n < e.length; n++) {
                                                  const a = e[n].value.items[0];
                                                  if (a && Je[t].includes(a.value.purpose)) return !0;
                                              }
                                              return !1;
                                          }))(z)
                                    : [],
                            U = (0, c.useMemo)(() => ({ gridData: L ? G : F, totalItems: vt(F) }), [G, F, L]),
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
                            Z = Is(() => {
                                const e = t.getBounds()[1],
                                    n = t.animationScroll.scrollPosition.get();
                                B(n < e);
                            });
                        (0, c.useEffect)(
                            () => (
                                t.events.on('change', Z),
                                t.events.on('recalculateContent', Z),
                                () => {
                                    t.events.off('change', Z), t.events.off('recalculateContent', Z);
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
                            }, []);
                        const Q = (0, c.useCallback)(() => {
                                I({ dedication: !0, season: !0, triumph: !0 }), D(!1);
                            }, []),
                            J = ((e) => {
                                const t = e.background,
                                    n = e.engraving,
                                    a = t.currentGrade + 1,
                                    r = n.currentGrade + 1;
                                return (n.purpose === Ze.Triumph && 4 === r) || r === et || a === et;
                            })(S);
                        return u().createElement(
                            'div',
                            { className: yi },
                            u().createElement(
                                'div',
                                { className: ki },
                                u().createElement(
                                    'div',
                                    { className: Ci },
                                    u().createElement(
                                        'div',
                                        { className: Mi },
                                        u().createElement('div', { className: Di }, systemLocale.toUpperCase($)),
                                        u().createElement(tr, {
                                            newEngravingSkillCount: h,
                                            newEngravingDedicationCount: b,
                                            newEngravingTriumphCount: E,
                                            availablePurposeGroups: V,
                                            setPurposeGroupFilters: I,
                                            purposeGroupFilters: x,
                                            showOnlyAvailableItems: L,
                                            setShowOnlyAvailableItems: D,
                                            availableItemsCount: j,
                                        }),
                                        u().createElement('div', { className: Ai }),
                                    ),
                                    q.length > 0
                                        ? u().createElement(
                                              'div',
                                              { className: i()(Ri, P && Li) },
                                              u().createElement(
                                                  hi.Vertical.Area.Default,
                                                  { api: t },
                                                  u().createElement(Mr, {
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
                                        : u().createElement(Ns, { clearFilters: Q }),
                                    u().createElement('div', { className: Pi }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: Si },
                                    u().createElement(Nt, {
                                        playerName: m,
                                        clanTag: g,
                                        background: S.background,
                                        engraving: S.engraving,
                                        isHighlighted: J,
                                        size: a >= A.Large ? yt.x400 : yt.x300,
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: Ni },
                                        u().createElement(
                                            hi.Vertical.Area.Default,
                                            { api: n, className: Ti, barClassNames: { base: xi }, areaClassName: Ii },
                                            u().createElement(Sa, { currentItem: W }),
                                        ),
                                    ),
                                    (S.engraving.isDeprecated || S.background.isDeprecated) &&
                                        u().createElement(
                                            'div',
                                            { className: Bi },
                                            u().createElement('div', { className: Hi }),
                                            R.strings.dogtags.customization.deprecated(),
                                        ),
                                    u().createElement(
                                        'div',
                                        { className: Oi },
                                        u().createElement(Zt, {
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
                    Fi = 300,
                    Gi = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: Fi } },
                    ji = {
                        from: { opacity: 0 },
                        enter: { opacity: 1, delay: 300 },
                        leave: { opacity: 0 },
                        config: { duration: Fi },
                    },
                    Vi = 'DogTagsApp_base_c2',
                    Ui = 'DogTagsApp_base__topView_03',
                    qi = 'DogTagsApp_dogTags_30',
                    Ki = 'DogTagsApp_dogTags__blur_6c',
                    Yi = 'DogTagsApp_onboardingWrapper_b7',
                    Xi = 'DogTagsApp_customizationWrapper_95',
                    Zi = 'DogTagsApp_routerReveal_45',
                    Qi = 'DogTagsApp_backBtnWrapper_85',
                    Ji = 'DogTagsApp_closeBtnWrapper_69',
                    eo = R.strings.dogtags.customization.button,
                    to = R.strings.dogtags.onboarding.header.close(),
                    no = () => {
                        const e = _e('model', ge.Shallow),
                            t = e.onTabSelect,
                            n = e.onboardingEnabled,
                            a = e.onOnboardingCloseClick,
                            r = e.onInfoButtonClick,
                            s = e.isTopView,
                            o = e.onExit,
                            l = (0, c.useState)(null),
                            d = l[0],
                            m = l[1],
                            g = (0, c.useState)(n),
                            _ = g[0],
                            p = g[1],
                            v = (0, c.useCallback)((e) => {
                                const t = Number(e.currentTarget.getAttribute('tab-key'));
                                m(t);
                            }, []);
                        (0, c.useEffect)(() => {
                            if (null !== d)
                                return ee(() => {
                                    m(null), t({ newTab: d });
                                }, Fi);
                        }, [d, t]);
                        const f = (0, pe.useSpring)(Gi),
                            h = (0, pe.useTransition)(
                                _,
                                Object.assign({}, ji, { leave: Object.assign({}, ji.leave, { onRest: () => a() }) }),
                            ),
                            b = (0, c.useCallback)(() => {
                                r();
                            }, [r]),
                            E = (0, c.useCallback)(() => {
                                p(!1);
                            }, []),
                            w = (0, c.useCallback)(() => {
                                _ ? p(!1) : o();
                            }, [o, _]);
                        var y;
                        return (
                            (y = w),
                            re(te.n.ESCAPE, y),
                            u().createElement(
                                'div',
                                { className: i()(Vi, s && Ui) },
                                u().createElement(
                                    Y.animated.div,
                                    { className: i()(qi, _ && Ki), style: f },
                                    s
                                        ? u().createElement(
                                              'div',
                                              { className: Qi },
                                              u().createElement(J, {
                                                  caption: eo.backDashboard_glow(),
                                                  type: 'back',
                                                  side: 'left',
                                                  onClick: w,
                                                  goto: eo.backDashboard_gray(),
                                              }),
                                          )
                                        : u().createElement(
                                              'div',
                                              { className: Ji },
                                              u().createElement(J, {
                                                  caption: to,
                                                  type: 'close',
                                                  side: 'right',
                                                  onClick: w,
                                              }),
                                          ),
                                    u().createElement(
                                        'div',
                                        { className: Xi },
                                        u().createElement(ys, { onTabClick: v, onInfoClick: b }),
                                        u().createElement(
                                            Ae,
                                            { className: Zi, type: 'slide', isOut: null !== d, duration: Fi },
                                            u().createElement(zi, null),
                                        ),
                                    ),
                                ),
                                h(
                                    (e, t) =>
                                        t &&
                                        u().createElement(
                                            Y.animated.div,
                                            { className: Yi, style: e },
                                            u().createElement(Fe, { onClose: E }),
                                        ),
                                ),
                            )
                        );
                    };
                (window.onload = () => {
                    document.body.setAttribute('style', 'margin: 0;');
                }),
                    engine.whenReady.then(() => {
                        K().render(
                            u().createElement(U, null, u().createElement(f, null, u().createElement(no, null))),
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
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
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
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
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
                        (r = s[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(394));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
