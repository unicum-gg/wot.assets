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
                    r.d(t, { mouse: () => d, off: () => s, on: () => l, onResize: () => i, onScaleUpdated: () => o }));
                var a = r(2472),
                    n = r(1176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => r([e, 'outside']));
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
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => l,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = r(527),
                    n = r(2493);
                function i(e = 'px') {
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
            1176: (e, t, r) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => a });
            },
            2493: (e, t, r) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => n, G: () => a });
            },
            2472: (e, t, r) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => a });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => i });
                var a = r(5959),
                    n = r(514);
                const i = { view: r(7641), client: a, sound: n.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var a = r(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function a(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function n(e, t, r) {
                    return `url(${a(e, t, r)})`;
                }
                (r.r(t), r.d(t, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => n });
                var a = r(2472);
                const n = {
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
            7641: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => T,
                        events: () => i.U,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => O,
                        getFontNames: () => y,
                        getScale: () => v,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => x,
                        isFocused: () => p,
                        pxToRem: () => w,
                        remToPx: () => f,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => L,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => h,
                        whenTutorialReady: () => R,
                    }));
                var a = r(3722),
                    n = r(6112),
                    i = r(6538),
                    o = r(8566);
                const l = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function d(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function u(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function h(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function w(e) {
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
                function L() {
                    return viewEnv.setEventHandled();
                }
                function x() {
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
                    T = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    M = {
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
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => c });
                const a = ['args'];
                const n = 2,
                    i = 16,
                    o = 32,
                    l = 64,
                    s = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            r[a] = e[a];
                                        }
                                    return r;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    c = {
                        close(e) {
                            s('popover' === e ? n : o);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, r) => {
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
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var a = r(3138);
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
            9916: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => S, ry: () => v });
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
                var i = r(1358);
                var o = r(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = r(5521),
                    m = r(3138);
                const _ = ['args'];
                function g(e, t, r, a, n, i, o) {
                    try {
                        var l = e[i](o),
                            s = l.value;
                    } catch (e) {
                        return void r(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(a, n);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        r = arguments;
                                    return new Promise(function (a, n) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            g(i, a, n, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            g(i, a, n, o, l, 'throw', e);
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
                                    var r = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            r[a] = e[a];
                                        }
                                    return r;
                                })(t, _);
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
                    b = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var p = r(7572);
                const L = n.instance,
                    x = {
                        DataTracker: i.Z,
                        ViewModel: p.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => w(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => w(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, a, n = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                c = s.x,
                                d = s.y,
                                u = s.width,
                                h = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(d) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(h),
                                };
                            w(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: E(_),
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
                        handleViewEvent: w,
                        onBindingsReady: v,
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
                        ClickOutsideManager: L,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
                const S = x;
            },
            8613: (e, t, r) => {
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
            1365: (e, t, r) => {
                'use strict';
                var a = r(6179),
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
                var o = r(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function c(e, t, r) {
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
                const d = o.O.client.getSize('rem'),
                    u = d.width,
                    h = d.height,
                    m = Object.assign({ width: u, height: h }, c(u, h, l)),
                    _ = (0, a.createContext)(m),
                    g = ['children'];
                const E = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    r[a] = e[a];
                                }
                            return r;
                        })(e, g);
                    const n = (0, a.useContext)(_),
                        o = n.extraLarge,
                        l = n.large,
                        s = n.medium,
                        c = n.small,
                        d = n.extraSmall,
                        u = n.extraLargeWidth,
                        h = n.largeWidth,
                        m = n.mediumWidth,
                        E = n.smallWidth,
                        v = n.extraSmallWidth,
                        w = n.extraLargeHeight,
                        f = n.largeHeight,
                        b = n.mediumHeight,
                        p = n.smallHeight,
                        L = n.extraSmallHeight,
                        x = { extraLarge: w, large: f, medium: b, small: p, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && l) return t;
                        if (r.medium && s) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && u) return i(t, r, x);
                        if (r.largeWidth && h) return i(t, r, x);
                        if (r.mediumWidth && m) return i(t, r, x);
                        if (r.smallWidth && E) return i(t, r, x);
                        if (r.extraSmallWidth && v) return i(t, r, x);
                        if (!(
                            r.extraLargeWidth ||
                            r.largeWidth ||
                            r.mediumWidth ||
                            r.smallWidth ||
                            r.extraSmallWidth
                        )) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && b) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && L) return t;
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
                (0, a.memo)(E);
                const v = (e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    w = ({ children: e }) => {
                        const t = (0, a.useContext)(_),
                            r = (0, a.useState)(t),
                            i = r[0],
                            s = r[1],
                            d = (0, a.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(t);
                                s(Object.assign({ width: r, height: a }, c(r, a, l)));
                            }, []),
                            u = (0, a.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                d(e.width, e.height);
                            }, [d]);
                        (v(() => {
                            (o.O.client.events.on('clientResized', d), o.O.client.events.on('self.onScaleUpdated', u));
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    (o.O.client.events.off('clientResized', d),
                                        o.O.client.events.off('self.onScaleUpdated', u));
                                },
                                [d, u],
                            ));
                        const h = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(_.Provider, { value: h }, e);
                    };
                var f = r(6483),
                    b = r.n(f),
                    p = r(926),
                    L = r.n(p);
                let x, S, O;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(x || (x = {})),
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
                        const e = (0, a.useContext)(_),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
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
                            i = ((e) => {
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
                        return { mediaSize: n, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    T = ['children', 'className'];
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                const H = {
                        [S.ExtraSmall]: '',
                        [S.Small]: L().SMALL_WIDTH,
                        [S.Medium]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH}`,
                        [S.Large]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH} ${L().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [O.ExtraSmall]: '',
                        [O.Small]: L().SMALL_HEIGHT,
                        [O.Medium]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT}`,
                        [O.Large]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT} ${L().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: L().SMALL,
                        [x.Medium]: `${L().SMALL} ${L().MEDIUM}`,
                        [x.Large]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE}`,
                        [x.ExtraLarge]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE} ${L().EXTRA_LARGE}`,
                    },
                    A = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        r[a] = e[a];
                                    }
                                return r;
                            })(e, T);
                        const i = y(),
                            o = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return n().createElement('div', M({ className: b()(r, H[o], P[l], k[s]) }, a), t);
                    },
                    C = ['children'];
                const W = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    r[a] = e[a];
                                }
                            return r;
                        })(e, C);
                    return n().createElement(w, null, n().createElement(A, r, t));
                };
                var D = r(493),
                    I = r.n(D),
                    N = r(9916),
                    G = r(3403);
                const U = 'InfoDecorator_base_e3',
                    F = 'InfoDecorator_background_a1',
                    j = 'InfoDecorator_arrow_36',
                    z = ({
                        children: e,
                        className: t,
                        startColor: r = '#213da1',
                        endColor: i = '#4361c8',
                        classNames: l,
                    }) => {
                        const s = (() => {
                            const e = (0, a.useState)(o.O.view.getScale()),
                                t = e[0],
                                r = e[1];
                            return (
                                (0, a.useEffect)(() => {
                                    const e = () => {
                                        r(o.O.view.getScale());
                                    };
                                    return (
                                        window.addEventListener('resize', e),
                                        () => {
                                            window.removeEventListener('resize', e);
                                        }
                                    );
                                }, []),
                                t
                            );
                        })();
                        return n().createElement(
                            'div',
                            { className: b()(U, t) },
                            n().createElement(
                                'svg',
                                { className: F, viewBox: '0 0 100% 100%' },
                                n().createElement(
                                    'defs',
                                    null,
                                    n().createElement(
                                        'linearGradient',
                                        {
                                            id: 'bg-gradient',
                                            gradientUnits: 'userSpaceOnUse',
                                            x1: '0%',
                                            y1: '0%',
                                            x2: '0%',
                                            y2: '100%',
                                        },
                                        n().createElement('stop', { offset: '0%', stopColor: r, stopOpacity: '0%' }),
                                        n().createElement('stop', {
                                            offset: '100%',
                                            stopColor: i,
                                            stopOpacity: '100%',
                                        }),
                                    ),
                                ),
                                n().createElement('rect', {
                                    x: '0%',
                                    y: '0%',
                                    width: '100%',
                                    height: '100%',
                                    rx: 8 * s,
                                    fill: 'url(#bg-gradient)',
                                }),
                            ),
                            e,
                            n().createElement('div', { className: b()(j, null == l ? void 0 : l.arrow) }),
                        );
                    };
                const V = function () {};
                function B() {
                    return !1;
                }
                console.log;
                var q = r(9174);
                function $(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return K(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === r && e.constructor && (r = e.constructor.name),
                                    'Map' === r || 'Set' === r
                                        ? Array.from(e)
                                        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                          ? K(e, t)
                                          : void 0
                                );
                            }
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
                function K(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Y = (e) => (0 === e ? window : window.subViews.get(e));
                const Z = ((e, t) => {
                        const r = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: l, children: s, mocks: c }) {
                                const d = (0, a.useRef)([]),
                                    u = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Y,
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
                                                        for (var e, r = $(n.keys()); !(e = r()).done;) i(e.value, t);
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
                                            u = (e) => d.current.push(e),
                                            h = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            n = q.LO.box(a, { equals: B });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            n = q.LO.box(a, { equals: B });
                                                        return (
                                                            'real' === r &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = c(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = q.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = q.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((e) => {
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
                                                cleanup: u,
                                            }),
                                            m = { mode: r, model: h, externalModel: s, cleanup: u };
                                        return {
                                            model: h,
                                            controls: 'mocks' === r && n ? n.controls(m) : t(m),
                                            externalModel: s,
                                            mode: r,
                                        };
                                    },
                                    h = (0, a.useRef)(!1),
                                    m = (0, a.useState)(i),
                                    _ = m[0],
                                    g = m[1],
                                    E = (0, a.useState)(() => u(i, l, c)),
                                    v = E[0],
                                    w = E[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        h.current ? w(u(_, l, c)) : (h.current = !0);
                                    }, [c, _, l]),
                                    (0, a.useEffect)(() => {
                                        g(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    n().createElement(r.Provider, { value: v }, s)
                                );
                            },
                            () => (0, a.useContext)(r),
                        ];
                    })(({ observableModel: e }) => ({ root: e.object() }), V),
                    X = Z[0],
                    Q = Z[1],
                    J = 'Counter_base_0f',
                    ee = 'Counter_icon_14',
                    te = 'Counter_count_e0',
                    re = ({ count: e }) =>
                        n().createElement(
                            'div',
                            { className: J },
                            n().createElement('div', { className: ee }),
                            n().createElement('div', { className: te }, e),
                        ),
                    ae = 'App_base_28',
                    ne = 'App_base__hidden_56',
                    ie = 'App_counter_4c',
                    oe = (0, G.Pi)(() => {
                        const e = Q().model,
                            t = y().mediaSize,
                            r = (0, a.useRef)(null),
                            i = e.root.get(),
                            l = i.isVisible,
                            s = i.count;
                        return (
                            (0, a.useEffect)(() => {
                                N.ZP.onLayoutReady().then(() => {
                                    r.current && o.O.view.resize(r.current.offsetWidth, r.current.offsetHeight);
                                });
                            }, [t, r]),
                            n().createElement(
                                'div',
                                { className: b()(ae, !l && ne), ref: r, lang: R.strings.settings.LANGUAGE_CODE() },
                                n().createElement(z, { className: ie }, n().createElement(re, { count: s })),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        n().createElement(W, null, n().createElement(X, null, n().createElement(oe, null))),
                        document.getElementById('root'),
                    );
                });
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
        (__webpack_require__.j = 5568),
        (() => {
            var e = { 5568: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(1365));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
