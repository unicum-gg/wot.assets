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
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => r, onScaleUpdated: () => o }));
                var n = t(472),
                    a = t(176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${u}`,
                                            o = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            n(),
                                            () => {
                                                a &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
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
            959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(493);
                function r(e = 'px') {
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
            176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(959),
                    a = t(514);
                const r = { view: t(641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var n = t(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(472);
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
            641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => y,
                        getScale: () => g,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => f,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => _,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var n = t(722),
                    a = t(112),
                    r = t(538),
                    o = t(566);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function _(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    b = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    r = {
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
            521: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { n: () => n }),
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B0: () => s, ry: () => f });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var r = t(358),
                    o = t(613);
                let s;
                var i;
                (((i = s || (s = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    m = t(138);
                const F = ['args'];
                function D(e, u, t, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            D(r, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(r, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    _ = () => C(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var B = t(572);
                const p = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                E = i.height,
                                A = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: g(A),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, _);
                        },
                        handleViewEvent: C,
                        onBindingsReady: f,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            761: (e, u, t) => {
                'use strict';
                var n = t(363),
                    a = t.n(n);
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        a = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    A = Object.assign({ width: d, height: E }, l(d, E, s)),
                    m = (0, n.createContext)(A),
                    F = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, F);
                        const a = (0, n.useContext)(m),
                            o = a.extraLarge,
                            s = a.large,
                            i = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            E = a.largeWidth,
                            A = a.mediumWidth,
                            D = a.smallWidth,
                            g = a.extraSmallWidth,
                            f = a.extraLargeHeight,
                            C = a.largeHeight,
                            _ = a.mediumHeight,
                            h = a.smallHeight,
                            B = a.extraSmallHeight,
                            p = { extraLarge: f, large: C, medium: _, small: h, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return r(u, t, p);
                            if (t.largeWidth && E) return r(u, t, p);
                            if (t.mediumWidth && A) return r(u, t, p);
                            if (t.smallWidth && D) return r(u, t, p);
                            if (t.extraSmallWidth && g) return r(u, t, p);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && f) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && _) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                ((D.defaultProps = {
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
                }),
                    (0, n.memo)(D));
                const g = ({ children: e }) => {
                    const u = (0, n.useContext)(m),
                        t = (0, n.useState)(u),
                        r = t[0],
                        i = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: n }, l(t, n, s)));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    (((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', d));
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                (o.O.client.events.off('clientResized', c),
                                    o.O.client.events.off('self.onScaleUpdated', d));
                            },
                            [c, d],
                        ));
                    const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return a().createElement(m.Provider, { value: E }, e);
                };
                var f = t(483),
                    C = t.n(f),
                    _ = t(926),
                    h = t.n(_);
                let B, p, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const w = () => {
                        const e = (0, n.useContext)(m),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return p.ExtraLarge;
                                    case e.largeWidth:
                                        return p.Large;
                                    case e.mediumWidth:
                                        return p.Medium;
                                    case e.smallWidth:
                                        return p.Small;
                                    case e.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function b() {
                    return (
                        (b = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        b.apply(null, arguments)
                    );
                }
                const x = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL_WIDTH,
                        [p.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [p.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_HEIGHT,
                        [v.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [v.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [B.ExtraSmall]: '',
                        [B.Small]: h().SMALL,
                        [B.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [B.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [B.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, y);
                        const r = w(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', b({ className: C()(t, x[o], S[s], T[i]) }, n), u);
                    },
                    k = ['children'],
                    I = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, k);
                        return a().createElement(g, null, a().createElement(O, t, u));
                    };
                var P = t(533),
                    L = t.n(P);
                let M, N;
                (!(function (e) {
                    ((e.CLOSED = 'closed'),
                        (e.OPENED = 'opened'),
                        (e.READY_TO_OPEN = 'readyToOpen'),
                        (e.EXPIRED = 'expired'));
                })(M || (M = {})),
                    (function (e) {
                        ((e.NONE = 'none'), (e.NY = 'ny'), (e.NY_EVENT = 'nyEvent'), (e.WDR = 'wdr'));
                    })(N || (N = {})));
                var H = t(521),
                    W = t(916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = H.n.NONE, u = V, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                const U = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    $ = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
                function j() {
                    const e = (0, n.useRef)(0);
                    return (
                        $(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), u());
                                        }, t)));
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
                function q(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                var z = t(174),
                    Y = t(403);
                const K = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (u = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
                let Q;
                !(function (e) {
                    ((e[(e.Pending = 0)] = 'Pending'),
                        (e[(e.Success = 1)] = 'Success'),
                        (e[(e.Failure = 2)] = 'Failure'));
                })(Q || (Q = {}));
                const X = (e) => {
                    const u = (0, n.useState)(Q.Pending),
                        t = u[0],
                        a = u[1];
                    return (
                        (0, n.useEffect)(() => {
                            const u = { errors: 0, loaded: 0 },
                                t = () => {
                                    u.errors + u.loaded === e.length
                                        ? a(u.errors ? Q.Failure : Q.Success)
                                        : a(Q.Pending);
                                };
                            return K(() => {
                                e.forEach((e) => {
                                    const n = new Image();
                                    ((n.src = e),
                                        n.addEventListener('load', () => {
                                            ((u.loaded += 1), t());
                                        }),
                                        n.addEventListener('error', () => {
                                            ((u.errors += 1), t());
                                        }));
                                });
                            });
                        }, [e]),
                        t
                    );
                };
                X.State = Q;
                const Z = Object.assign({}, B, { UltraLarge: 2560, UltraSmall: 0 }),
                    J = () => {
                        const e = w(),
                            u = e.mediaSize,
                            t = e.remScreenWidth,
                            n = e.remScreenHeight;
                        return {
                            mediaSize:
                                ((a = n),
                                t < p.ExtraSmall || a < v.ExtraSmall
                                    ? Z.UltraSmall
                                    : ((e, u) => e >= 2560 && u >= 1440)(t, n)
                                      ? Z.UltraLarge
                                      : u),
                        };
                        var a;
                    },
                    ee = { [Z.UltraLarge]: 'mediaUltraLarge', [Z.UltraSmall]: 'mediaUltraSmall' };
                let ue;
                function te() {}
                function ne() {
                    return !1;
                }
                function ae(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function re(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                (!(function (e) {
                    e.OPEN_DOOR = 'openDoor';
                })(ue || (ue = {})),
                    console.log);
                const oe = (e) => (0 === e ? window : window.subViews.get(e));
                const se = function (e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                };
                const ie = (e, u) =>
                    Object.keys(e).length === Object.keys(u).length &&
                    Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(u, t) && e[t] === u[t]);
                var le = t(946);
                const ce = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: s, mocks: i }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = oe,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return (a.set(l, t), e && t(s(r)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return re(e, u);
                                                                                var t = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? re(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = t()).done;
                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e, externalModel: u, readByPath: t }) => {
                                                const n = () => {
                                                        return (
                                                            (e = t('doors')),
                                                            (u = ({ dayId: e }) => e),
                                                            (n = (e) => Object.assign({}, e)),
                                                            (function (e, u, t) {
                                                                if (Array.isArray(e)) return e.reduce(u, t);
                                                                let n = t;
                                                                for (let t = 0; t < e.length; t++) n = u(n, se(e, t));
                                                                return n;
                                                            })(e, (e, t) => ((e[u(t)] = n(t)), e), {})
                                                        );
                                                        var e, u, n;
                                                    },
                                                    a = e.primitives([
                                                        'startTime',
                                                        'postEventStartDate',
                                                        'postEventEndDate',
                                                    ]),
                                                    r = Object.assign(
                                                        {
                                                            doors: z.LO.box(n()),
                                                            progression: e.primitives(
                                                                ['isCompleted'],
                                                                'progressionRewards',
                                                            ),
                                                            eventBus: z.LO.box(null),
                                                            progressionRewards: e.array('progressionRewards.rewards'),
                                                        },
                                                        e.primitives([
                                                            'statePhase',
                                                            'showBlur',
                                                            'doorOpenBlocked',
                                                            'isAnimationEnabled',
                                                            'isCalendarCompleted',
                                                            'isIntroScreenVisible',
                                                            'holidayOpsStartTime',
                                                        ]),
                                                        { isWalletAvailable: z.LO.box(!0) },
                                                    );
                                                (u.subscribe(
                                                    (0, z.aD)(() => r.doors.set(n())),
                                                    'doors',
                                                ),
                                                    u.subscribe(
                                                        (0, z.aD)(() => {
                                                            const e = t('event');
                                                            r.eventBus.set({
                                                                eventType: e.eventType,
                                                                payload: e.payload ? JSON.parse(e.payload) : null,
                                                            });
                                                        }),
                                                        'event',
                                                    ));
                                                const o = (0, le.Om)(
                                                        (e) => {
                                                            const u = r.doors.get()[e];
                                                            if (!u) throw new Error(`Door with id ${e} not found`);
                                                            return u;
                                                        },
                                                        { equals: ie },
                                                    ),
                                                    s = (0, le.Om)(() =>
                                                        Object.values(r.doors.get()).reduce(
                                                            (e, u) =>
                                                                u.doorState !== M.READY_TO_OPEN
                                                                    ? e
                                                                    : !e || u.dayId < e
                                                                      ? u.dayId
                                                                      : e,
                                                            void 0,
                                                        ),
                                                    ),
                                                    i = (0, le.Om)(() => r.isCalendarCompleted.get()),
                                                    l = (0, le.Om)(() => ({
                                                        startDate: a.startTime.get(),
                                                        endDate: a.postEventStartDate.get() - 86400,
                                                    })),
                                                    c = (0, le.Om)(() => ({
                                                        startDate: a.postEventStartDate.get(),
                                                        endDate: a.postEventEndDate.get(),
                                                    }));
                                                return Object.assign({}, r, {
                                                    computes: {
                                                        door: o,
                                                        activeDay: s,
                                                        eventCompleted: i,
                                                        activePhase: l,
                                                        postActivePhase: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            a = z.LO.box(n, { equals: ne });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, z.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            a = z.LO.box(n, { equals: ne });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, z.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = i(t);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (e, u) => ((e[u] = z.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, z.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                r = Object.entries(a),
                                                                o = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = z.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, z.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && n ? n.controls(E) : u(E),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    E = (0, n.useState)(e),
                                    A = E[0],
                                    m = E[1],
                                    F = (0, n.useState)(() => c(e, r, i)),
                                    D = F[0],
                                    g = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? g(c(A, r, i)) : (d.current = !0);
                                    }, [i, A, r]),
                                    (0, n.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        animationCompleted: e.createCallbackNoArgs('onAnimationCompleted'),
                        openDoor: e.createCallback((e) => ({ dayId: e }), 'onOpenDoorAnimStarted'),
                        showReward: e.createCallback((e) => ({ dayId: e }), 'onOpenDoorAnimEnded'),
                        showPurchaseDialog: e.createCallback((e) => ({ dayId: e }), 'onShowPurchaseDialog'),
                        progressionRewardCompleted: e.createCallbackNoArgs(
                            'progressionRewards.onProgressionRewardCompleted',
                        ),
                        openDownloadLink: e.createCallbackNoArgs('onOpenDownloadLink'),
                        infoClick: e.createCallbackNoArgs('onInfoClick'),
                    })),
                    de = ce[0],
                    Ee = ce[1],
                    Ae = () =>
                        (() => {
                            const e = (0, n.useMemo)(() => ({}), []),
                                u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                t = (e, t) => (u(e).set(t, t), () => a(e, t)),
                                a = (e, t) => {
                                    u(e).delete(t);
                                },
                                r = (e, ...t) => {
                                    for (
                                        var n,
                                            a = (function (e, u) {
                                                var t =
                                                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                    e['@@iterator'];
                                                if (t) return (t = t.call(e)).next.bind(t);
                                                if (
                                                    Array.isArray(e) ||
                                                    (t = (function (e, u) {
                                                        if (e) {
                                                            if ('string' == typeof e) return ae(e, u);
                                                            var t = {}.toString.call(e).slice(8, -1);
                                                            return (
                                                                'Object' === t &&
                                                                    e.constructor &&
                                                                    (t = e.constructor.name),
                                                                'Map' === t || 'Set' === t
                                                                    ? Array.from(e)
                                                                    : 'Arguments' === t ||
                                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                            t,
                                                                        )
                                                                      ? ae(e, u)
                                                                      : void 0
                                                            );
                                                        }
                                                    })(e)) ||
                                                    (u && e && 'number' == typeof e.length)
                                                ) {
                                                    t && (e = t);
                                                    var n = 0;
                                                    return function () {
                                                        return n >= e.length
                                                            ? { done: !0 }
                                                            : { done: !1, value: e[n++] };
                                                    };
                                                }
                                                throw new TypeError(
                                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                );
                                            })(u(e).values());
                                        !(n = a()).done;
                                    )
                                        (0, n.value)(...t);
                                };
                            return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                        })(),
                    me = a().createContext({ on: () => te, off: te, trigger: te }),
                    Fe = (0, Y.Pi)(({ children: e }) => {
                        const u = Ae(),
                            t = Ee().model;
                        return (
                            U(() =>
                                (0, z.U5)(
                                    () => t.eventBus.get(),
                                    (e) => {
                                        if (e && e.eventType === ue.OPEN_DOOR)
                                            return u.trigger('onOpenDoor', e.payload.doorId);
                                    },
                                ),
                            ),
                            a().createElement(me.Provider, { value: u }, e)
                        );
                    }),
                    De = () => (0, n.useContext)(me),
                    ge = {
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
                let fe, Ce;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(fe || (fe = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Ce || (Ce = {})));
                const _e = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: A,
                    onMouseLeave: m,
                    onClick: F,
                }) => {
                    const D = (0, n.useRef)(null),
                        g = (0, n.useState)(t),
                        f = g[0],
                        _ = g[1],
                        h = (0, n.useState)(!1),
                        B = h[0],
                        p = h[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                f && null !== D.current && !D.current.contains(e.target) && _(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, n.useEffect)(() => {
                            _(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: C()(
                                    ge.base,
                                    ge[`base__${r}`],
                                    o && ge.base__disabled,
                                    u && ge[`base__${u}`],
                                    f && ge.base__focus,
                                    B && ge.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== i && q(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (A && A(e), p(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && q(l),
                                        E && E(e),
                                        t && (o || (D.current && (D.current.focus(), _(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (m && m(e), p(!1));
                                },
                                onClick: function (e) {
                                    o || (F && F(e));
                                },
                            },
                            r !== fe.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: ge.back }),
                                    a().createElement('span', { className: ge.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: C()(ge.state, ge.state__default) },
                                a().createElement('span', { className: ge.stateDisabled }),
                                a().createElement('span', { className: ge.stateHighlightHover }),
                                a().createElement('span', { className: ge.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: ge.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _e.defaultProps = { type: fe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const he = _e;
                var Be = t(30);
                const pe = [
                        ['1', '9', '7', '7', '4', '22', '15', '15', '8'],
                        ['1', '16', '11', '29', '2', '22', '10', '30', '8'],
                        ['3', '26', '14', '29', '25', '25', '6', '28', '28'],
                        ['13', '19', '14', '23', '25', '25', '20', '24', '18'],
                        ['21', '21', '17', '27', '5', '12', '31', '31', '31'],
                    ],
                    ve = pe.reduce(
                        (e, u, t) =>
                            u.reduce(
                                (e, u, n) => (
                                    e[u]
                                        ? e[u].start.x === n
                                            ? (e[u].end.y = t)
                                            : e[u].start.y === t && (e[u].end.x = n)
                                        : (e[u] = { start: { x: n, y: t }, end: { x: n, y: t } }),
                                    e
                                ),
                                e,
                            ),
                        {},
                    ),
                    we = Object.fromEntries(
                        Object.keys(ve).map((e) => [
                            e,
                            {
                                x: ve[e].start.x,
                                y: ve[e].start.y,
                                width: ve[e].end.x - ve[e].start.x + 1,
                                height: ve[e].end.y - ve[e].start.y + 1,
                            },
                        ]),
                    ),
                    ye =
                        (Z.UltraSmall,
                        Z.ExtraSmall,
                        Z.Small,
                        Z.Medium,
                        Z.Large,
                        Z.ExtraLarge,
                        Z.UltraLarge,
                        'Calendar_base_e0'),
                    be = 'Calendar_base__layer_52';
                var xe = t(558),
                    Se = t(934);
                const Te = (e, u) => e.toDateString() === u.toDateString();
                let Oe;
                !(function (e) {
                    ((e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'));
                })(Oe || (Oe = {}));
                var Re = t(797);
                let ke;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ke || (ke = {}));
                const Ie = (e) => e.replace(/&nbsp;/g, ' '),
                    Pe = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Le = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Me = (e, u, t = ke.left) => e.split(u).reduce(t === ke.left ? Pe : Le, []),
                    Ne = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    He = ['zh_cn', 'zh_sg', 'zh_tw'];
                var We = t(613);
                Date.now();
                const Ve = We.Ew.getRegionalDateTime;
                We.Ew.getFormattedDateTime;
                const Ge = (e, u = !0) => Ve(e, Oe.DayMonthFull, u),
                    Ue = (e, u) => ({ startDate: Ve(e, Oe.DayMonthFull, !1), endDate: Ve(u, Oe.DayMonthFull, !1) });
                let $e;
                !(function (e) {
                    ((e.ACTIVE_PHASE = 'activePhase'), (e.POST_ACTIVE_PHASE = 'postActivePhase'));
                })($e || ($e = {}));
                const je = (0, Y.Pi)(({ dayId: e }) => {
                        const u = Ee().model,
                            t = u.computes.door(e),
                            n = t.isEnoughResources,
                            r = t.price;
                        return u.statePhase.get() === $e.POST_ACTIVE_PHASE && Boolean(r)
                            ? a().createElement(
                                  'div',
                                  { className: C()('DoorCurrency_base_e2', !n && 'DoorCurrency_base__notEnough_61') },
                                  a().createElement('span', null, r),
                                  a().createElement('img', {
                                      src: R.images.advent_calendar.gui.maps.icons.mainView.resources(),
                                      alt: '',
                                  }),
                              )
                            : null;
                    }),
                    qe = {
                        doorNumber: 'DoorDay_doorNumber_4f',
                        doorNumber__highlighted: 'DoorDay_doorNumber__highlighted_b4',
                        doorNumber__closed: 'DoorDay_doorNumber__closed_c0',
                        doorNumber__expired: 'DoorDay_doorNumber__expired_35',
                        slideInFadeIn: 'DoorDay_slideInFadeIn_c5',
                        fadeOut: 'DoorDay_fadeOut_19',
                        fadeIn: 'DoorDay_fadeIn_3a',
                        fadeInWithScale: 'DoorDay_fadeInWithScale_e8',
                        slideUp: 'DoorDay_slideUp_c4',
                        scale: 'DoorDay_scale_c6',
                        spin: 'DoorDay_spin_35',
                        blink: 'DoorDay_blink_f6',
                        slideInNotification: 'DoorDay_slideInNotification_aa',
                    },
                    ze = (0, Y.Pi)(({ dayId: e }) => {
                        const u = Ee().model.computes.door(e).doorState,
                            t = 25 === e;
                        return a().createElement(
                            'span',
                            { className: C()(qe.doorNumber, t && qe.doorNumber__highlighted, qe[`doorNumber__${u}`]) },
                            e,
                        );
                    }),
                    Ye = ['children', 'className'];
                function Ke() {
                    return (
                        (Ke = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ke.apply(null, arguments)
                    );
                }
                const Qe = a().forwardRef((e, u) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ye);
                        return a().createElement(
                            'div',
                            Ke({ className: C()('DoorFrontSide_base_bd', n), ref: u }, r),
                            a().createElement('div', { className: 'DoorFrontSide_art_52' }),
                            t,
                        );
                    }),
                    Xe = {
                        [N.NONE]: '',
                        [N.NY]: R.images.advent_calendar.gui.maps.icons.mainView.marks.ny(),
                        [N.NY_EVENT]: R.images.advent_calendar.gui.maps.icons.mainView.marks.nyEvent(),
                        [N.WDR]: R.images.advent_calendar.gui.maps.icons.mainView.marks.wdr(),
                    },
                    Ze = (0, Y.Pi)(({ dayId: e }) => {
                        var u;
                        const t = Ee().model,
                            n = we[e],
                            r = [
                                t.doors.get()[null == (u = pe[n.y]) ? void 0 : u[n.x]],
                                ...Array.from(new Array(n.width + 1)).map((e, u) => {
                                    var a;
                                    return t.doors.get()[null == (a = pe[n.y + n.height]) ? void 0 : a[n.x - 1 + u]];
                                }),
                                ...Array.from(new Array(n.height)).map((e, u) => {
                                    var a;
                                    return t.doors.get()[null == (a = pe[n.y + u]) ? void 0 : a[n.x - 1]];
                                }),
                            ]
                                .filter(Boolean)
                                .filter((e) => e.mark !== N.NONE);
                        return a().createElement(
                            'div',
                            { className: 'DoorMark_base_41' },
                            a().createElement(
                                'div',
                                { className: 'DoorMark_overlay_79' },
                                r.map((e, u) => {
                                    const t = we[e.dayId];
                                    return a().createElement('div', {
                                        key: u,
                                        className: 'DoorMark_mark_95',
                                        style: {
                                            '--mark-x-pos': t.x + t.width,
                                            '--mark-y-pos': t.y,
                                            backgroundImage: `url(${Xe[e.mark]})`,
                                        },
                                    });
                                }),
                            ),
                        );
                    }),
                    Je = [
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
                function eu(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const uu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    tu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            A = e.decoratorId,
                            m = void 0 === A ? 0 : A,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            g = e.targetId,
                            f = void 0 === g ? 0 : g,
                            C = e.onShow,
                            _ = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Je);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, n.useMemo)(
                                () =>
                                    f ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var r;
                                        return (
                                            u &&
                                                ((a =
                                                    (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: a, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [f],
                            ),
                            v = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (uu(t, m, { isMouseEvent: !0, on: !0, arguments: eu(a) }, p),
                                    C && C(),
                                    (B.current.isVisible = !0));
                            }, [t, m, a, p, C]),
                            w = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        uu(t, m, { on: !1 }, p),
                                        B.current.isVisible && _ && _(),
                                        (B.current.isVisible = !1));
                                }
                            }, [t, m, p, _]),
                            y = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ),
                            D
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((b = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          b && b(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (w(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && w(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && w(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var b;
                    },
                    nu = ({ children: e, tooltipArgs: u }) =>
                        u
                            ? a().createElement(
                                  tu,
                                  {
                                      args: { payload: JSON.stringify(u) },
                                      contentId:
                                          R.views.advent_calendar.lobby.feature.tooltips.AdventCalendarSimpleTooltip(
                                              'resId',
                                          ),
                                  },
                                  e,
                              )
                            : e,
                    au = ['children', 'className', 'style', 'tooltipArgs', 'dayId', 'doorState'];
                function ru() {
                    return (
                        (ru = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ru.apply(null, arguments)
                    );
                }
                const ou = {
                        Wrapper: (e) => {
                            let u = e.children,
                                t = e.className,
                                n = e.style,
                                r = e.tooltipArgs,
                                o = e.dayId,
                                s = e.doorState,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, au);
                            const l = we[o],
                                c = a().createElement(
                                    'div',
                                    ru(
                                        {
                                            className: C()('DoorWrapper_base_a7', t, `door-${l.width}x${l.height}`),
                                            style: Object.assign(
                                                {
                                                    width: `calc(${l.width} * var(--width-ratio))`,
                                                    height: `calc(${l.height} * var(--height-ratio))`,
                                                    top: `calc(${l.y} * var(--height-ratio))`,
                                                    left: `calc(${l.x} * var(--width-ratio))`,
                                                    '--door-img': `url("R.images.advent_calendar.gui.maps.icons.mainView.${s}.c_160x${l.width}x${l.height}")`,
                                                    '--x-pos': l.x,
                                                    '--y-pos': l.y,
                                                },
                                                n,
                                            ),
                                        },
                                        i,
                                    ),
                                    u,
                                );
                            return r ? a().createElement(nu, { tooltipArgs: r }, c) : c;
                        },
                        FrontSide: Qe,
                        Day: ze,
                        Currency: je,
                        Mark: Ze,
                    },
                    su = R.strings.advent_calendar.mainView.tooltip,
                    iu = (e, u) => {
                        if (!u) return { body: R.strings.advent_calendar.server_error() };
                        const t = new Date(1e3 * e),
                            n = { date: Ge(e), time: ((a = e), Ve(a, Oe.ShortTime)) };
                        var a;
                        return Te(new Date(), t)
                            ? { body: su.availableToday(), bindings: n }
                            : Te(new Date(Date.now() + 864e5), t)
                              ? { body: su.availableTomorrow(), bindings: n }
                              : {
                                    header: su.availableSometime.title(),
                                    body: su.availableSometime.description(),
                                    bindings: n,
                                };
                    },
                    lu = (0, Y.Pi)(({ door: e }) => {
                        const u = Ee().model;
                        return a().createElement(
                            ou.Wrapper,
                            {
                                dayId: e.dayId,
                                doorState: e.doorState,
                                tooltipArgs: iu(e.openTimeStamp, u.isWalletAvailable.get()),
                            },
                            a().createElement(
                                ou.FrontSide,
                                null,
                                a().createElement(ou.Day, { dayId: e.dayId }),
                                a().createElement(ou.Currency, { dayId: e.dayId }),
                                a().createElement(ou.Mark, { dayId: e.dayId }),
                            ),
                        );
                    }),
                    cu = R.strings.advent_calendar.mainView.tooltip,
                    du = (0, Y.Pi)(({ door: e }) => {
                        const u = Ee().model,
                            t = (() => {
                                if (!u.isWalletAvailable.get())
                                    return { body: R.strings.advent_calendar.server_error() };
                                switch (u.statePhase.get()) {
                                    case $e.ACTIVE_PHASE:
                                        return {
                                            header: cu.expired.title(),
                                            body: cu.expired.description(),
                                            bindings: Ue(
                                                u.computes.postActivePhase().startDate,
                                                u.computes.postActivePhase().endDate,
                                            ),
                                        };
                                    case $e.POST_ACTIVE_PHASE:
                                        if (e.isEnoughResources) {
                                            const e = u.computes.activeDay();
                                            if (!e) return;
                                            return {
                                                header: cu.enoughResources.title(),
                                                body: cu.enoughResources.description(),
                                                bindings: { day: e.toString() },
                                            };
                                        }
                                }
                            })();
                        return a().createElement(
                            ou.Wrapper,
                            { dayId: e.dayId, doorState: e.doorState, tooltipArgs: t },
                            a().createElement(
                                ou.FrontSide,
                                null,
                                a().createElement(ou.Day, { dayId: e.dayId }),
                                a().createElement(ou.Currency, { dayId: e.dayId }),
                                a().createElement(ou.Mark, { dayId: e.dayId }),
                            ),
                        );
                    });
                var Eu = t(112);
                const Au = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function mu() {
                    return (
                        (mu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        mu.apply(null, arguments)
                    );
                }
                const Fu = (0, n.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            s = e.autoplay,
                            i = void 0 !== s && s,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            A = e.keyframesNameConfig,
                            m = e.onClick,
                            F = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Au);
                        const D = u,
                            g = (0, n.useRef)(null);
                        return (
                            U(() =>
                                o.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    (u === Eu.W.hidden && (null == (t = g.current) || t.pause()),
                                        u === Eu.W.shown && (null == (n = g.current) || n.play()));
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    K(() => {
                                        const e = g.current;
                                        if (!D || !e || !E)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [E, D],
                            ),
                            (0, n.useEffect)(() => {
                                if (D && g.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: te,
                                        },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            ((() => {
                                                                if (g.current) {
                                                                    const t = g.current,
                                                                        n = t.currentTime,
                                                                        a = t.duration;
                                                                    if (
                                                                        (u !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: a }),
                                                                            ),
                                                                            (u = n)),
                                                                        g.current.paused || !D || !E)
                                                                    )
                                                                        return;
                                                                    const r = g.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((u, t) => {
                                                                        n > r[t] - 0.02 &&
                                                                            n < r[t] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != A ? A : {},
                                                                                )[t];
                                                                                return e({
                                                                                    time: u,
                                                                                    name: `${A ? n : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = t[0],
                                                a = t[1];
                                            return (n(), a);
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            var u, t;
                                            g.current &&
                                                (g.current.currentTime =
                                                    ((u = g.current.duration), (t = e) < 0 ? 0 : t > u ? u : t));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = g.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (i(), o(0));
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = g.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (o(e), s());
                                        },
                                        m = (e) => {
                                            (o(e), i());
                                        },
                                        F = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        f = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        C = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = g.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = g.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (D.current = {
                                            on: f,
                                            off: C,
                                            play: s,
                                            pause: i,
                                            stop: l,
                                            cleanup: F,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: m,
                                            setCurrentTime: o,
                                            domRef: g.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (F(), (D.current = null));
                                        }
                                    );
                                }
                            }, [A, D, E]),
                            (0, n.useEffect)(() => {
                                g.current && i && g.current.play();
                            }, [i, d]),
                            (0, n.useEffect)(() => {
                                if (g.current)
                                    return () => {
                                        g.current && g.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                mu({ src: t, className: r, style: l, loop: d, ref: g, onClick: m }, F),
                            )
                        );
                    }),
                    Du = (0, n.memo)(Fu),
                    gu = (e) => Math.sin((e * Math.PI) / 2),
                    fu = (e) => 1 - Math.cos((e * Math.PI) / 2);
                let Cu;
                !(function (e) {
                    ((e.S1x1 = 's1x1'), (e.S2x1 = 's2x1'), (e.S3x1 = 's3x1'), (e.S1x2 = 's1x2'), (e.S2x2 = 's2x2'));
                })(Cu || (Cu = {}));
                const _u = {
                        width: 80,
                        height: 80,
                        frameCount: 24,
                        chunk: { count: 1, rows: 3, columns: 8 },
                        getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.tearOff',
                    },
                    hu = {
                        width: 80,
                        height: 80,
                        frameCount: 16,
                        chunk: { count: 1, rows: 4, columns: 4 },
                        getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.hover',
                    },
                    Bu = [
                        _u,
                        hu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 14,
                            chunk: { count: 1, rows: 2, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_2',
                        },
                        {
                            width: 550,
                            height: 550,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_3',
                        },
                    ],
                    pu = [
                        _u,
                        hu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 14,
                            chunk: { count: 1, rows: 2, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 7,
                            chunk: { count: 1, rows: 1, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_2',
                        },
                        {
                            width: 600,
                            height: 600,
                            frameCount: 7,
                            chunk: { count: 1, rows: 1, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_3',
                        },
                        {
                            width: 950,
                            height: 800,
                            frameCount: 5,
                            chunk: { count: 1, rows: 1, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_4',
                        },
                    ],
                    vu = [
                        _u,
                        hu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 14,
                            chunk: { count: 1, rows: 2, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 7,
                            chunk: { count: 1, rows: 1, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_2',
                        },
                        {
                            width: 600,
                            height: 500,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_3',
                        },
                        {
                            width: 900,
                            height: 700,
                            frameCount: 5,
                            chunk: { count: 1, rows: 1, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_4',
                        },
                        {
                            width: 1270,
                            height: 1010,
                            frameCount: 5,
                            chunk: { count: 1, rows: 1, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_5',
                        },
                    ],
                    wu = [
                        _u,
                        hu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 15,
                            chunk: { count: 1, rows: 3, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_2',
                        },
                        {
                            width: 600,
                            height: 600,
                            frameCount: 6,
                            chunk: { count: 1, rows: 2, columns: 3 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_3',
                        },
                        {
                            width: 850,
                            height: 750,
                            frameCount: 4,
                            chunk: { count: 1, rows: 2, columns: 2 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_4',
                        },
                    ],
                    yu = [
                        _u,
                        hu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 6,
                            chunk: { count: 1, rows: 1, columns: 6 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 6,
                            chunk: { count: 1, rows: 1, columns: 6 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_2',
                        },
                        {
                            width: 600,
                            height: 600,
                            frameCount: 9,
                            chunk: { count: 1, rows: 3, columns: 3 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_3',
                        },
                        {
                            width: 985,
                            height: 720,
                            frameCount: 9,
                            chunk: { count: 1, rows: 3, columns: 3 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_4',
                        },
                    ],
                    bu = [
                        { angle: 45, offset: 0 },
                        { angle: 45, offset: 0 },
                        { angle: 45, offset: 0 },
                        { angle: 45, offset: 0.05 },
                        { angle: 45, offset: 0.06 },
                        { angle: 45, offset: 0.08 },
                        { angle: 45, offset: 0.09 },
                        { angle: 45, offset: 0.1 },
                        { angle: 45, offset: 0.11 },
                        { angle: 45, offset: 0.12 },
                        { angle: 45, offset: 0.133 },
                        { angle: 45, offset: 0.15 },
                        { angle: 45, offset: 0.16 },
                        { angle: 45, offset: 0.17 },
                        { angle: 45, offset: 0.18 },
                        { angle: 45, offset: 0.18 },
                        { angle: 45, offset: 0.183 },
                        { angle: 45, offset: 0.19 },
                        { angle: 45, offset: 0.19 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.205 },
                    ],
                    xu = [
                        { angle: 45, offset: 0.205 },
                        { angle: 45, offset: 0.21 },
                        { angle: 45, offset: 0.22 },
                        { angle: 45, offset: 0.22 },
                        { angle: 45, offset: 0.22 },
                        { angle: 45, offset: 0.225 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                    ],
                    Su = [
                        ...bu,
                        ...xu,
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.236 },
                        { angle: 45, offset: 0.245 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.26 },
                        { angle: 45, offset: 0.275 },
                        { angle: 45, offset: 0.285 },
                        { angle: 45.1, offset: 0.31 },
                        { angle: 45.3, offset: 0.335 },
                        { angle: 45.4, offset: 0.362 },
                        { angle: 45.6, offset: 0.39 },
                        { angle: 45.7, offset: 0.415 },
                        { angle: 45.8, offset: 0.455 },
                        { angle: 46, offset: 0.49 },
                        { angle: 46.1, offset: 0.535 },
                        { angle: 46.2, offset: 0.58 },
                        { angle: 46.4, offset: 0.652 },
                        { angle: 46.5, offset: 0.695 },
                        { angle: 46.7, offset: 0.753 },
                        { angle: 46.8, offset: 2 },
                        { angle: 46.9, offset: 2 },
                        { angle: 47.1, offset: 2 },
                        { angle: 47.2, offset: 2 },
                        { angle: 47.4, offset: 2 },
                        { angle: 47.5, offset: 2 },
                        { angle: 47.6, offset: 2 },
                        { angle: 47.8, offset: 2 },
                        { angle: 47.9, offset: 2 },
                        { angle: 48, offset: 2 },
                        { angle: 48, offset: 2 },
                    ],
                    Tu = [
                        ...bu,
                        ...xu,
                        { angle: 45, offset: 0.235 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.245 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.255 },
                        { angle: 45, offset: 0.26 },
                        { angle: 45, offset: 0.273 },
                        { angle: 45, offset: 0.29 },
                        { angle: 45, offset: 0.31 },
                        { angle: 45, offset: 0.345 },
                        { angle: 45, offset: 0.37 },
                        { angle: 45, offset: 0.415 },
                        { angle: 45, offset: 0.463 },
                        { angle: 45, offset: 0.523 },
                        { angle: 45.6, offset: 0.586 },
                        { angle: 46.2, offset: 0.66 },
                        { angle: 46.5, offset: 0.735 },
                        { angle: 46.8, offset: 0.813 },
                        { angle: 47.2, offset: 0.91 },
                        { angle: 47.5, offset: 1.005 },
                        { angle: 47.8, offset: 1.105 },
                        { angle: 48, offset: 1.23 },
                        { angle: 48.2, offset: 1.36 },
                        { angle: 48.3, offset: 1.485 },
                        { angle: 48.5, offset: 3 },
                        { angle: 49, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                    ],
                    Ou = [
                        ...bu,
                        ...xu,
                        { angle: 45, offset: 0.238 },
                        { angle: 45, offset: 0.238 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.258 },
                        { angle: 45, offset: 0.27 },
                        { angle: 45.3, offset: 0.283 },
                        { angle: 45.7, offset: 0.308 },
                        { angle: 46.5, offset: 0.328 },
                        { angle: 46.2, offset: 0.35 },
                        { angle: 45.9, offset: 0.388 },
                        { angle: 45.5, offset: 0.42 },
                        { angle: 45, offset: 0.465 },
                        { angle: 44.5, offset: 0.513 },
                        { angle: 44.4, offset: 0.558 },
                        { angle: 45.4, offset: 0.628 },
                        { angle: 46, offset: 0.69 },
                        { angle: 46.2, offset: 0.76 },
                        { angle: 46.5, offset: 0.823 },
                        { angle: 46.8, offset: 0.908 },
                        { angle: 47, offset: 0.988 },
                        { angle: 47.2, offset: 1.075 },
                        { angle: 47.5, offset: 1.168 },
                        { angle: 47.8, offset: 1.265 },
                        { angle: 48, offset: 1.373 },
                        { angle: 49, offset: 1.523 },
                        { angle: 50, offset: 1.673 },
                        { angle: 51, offset: 1.833 },
                        { angle: 53, offset: 2.008 },
                        { angle: 54, offset: 2.16 },
                        { angle: 55, offset: 2.315 },
                        { angle: 55, offset: 2.453 },
                        { angle: 56, offset: 4 },
                        { angle: 59, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                    ],
                    Ru = [
                        ...bu,
                        ...xu,
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.259 },
                        { angle: 45, offset: 0.305 },
                        { angle: 46.5, offset: 0.362 },
                        { angle: 45, offset: 0.426 },
                        { angle: 44, offset: 0.5 },
                        { angle: 43, offset: 0.555 },
                        { angle: 42.5, offset: 0.642 },
                        { angle: 43, offset: 0.722 },
                        { angle: 42.9, offset: 0.807 },
                        { angle: 42.6, offset: 0.9 },
                        { angle: 42.5, offset: 0.975 },
                        { angle: 42.6, offset: 1.055 },
                        { angle: 42.5, offset: 1.16 },
                        { angle: 42.3, offset: 1.255 },
                        { angle: 44.4, offset: 1.38 },
                        { angle: 45, offset: 3 },
                        { angle: 47.7, offset: 3 },
                        { angle: 49.5, offset: 3 },
                        { angle: 50.3, offset: 3 },
                        { angle: 49.4, offset: 3 },
                        { angle: 49.6, offset: 3 },
                        { angle: 48.7, offset: 3 },
                        { angle: 48.4, offset: 3 },
                        { angle: 45.5, offset: 3 },
                        { angle: 47.1, offset: 3 },
                        { angle: 45.6, offset: 3 },
                        { angle: 45.6, offset: 3 },
                        { angle: 45.6, offset: 3 },
                        { angle: 45.6, offset: 3 },
                    ],
                    ku = [
                        ...bu,
                        ...xu,
                        { angle: 45, offset: 0.235 },
                        { angle: 45, offset: 0.235 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.258 },
                        { angle: 45, offset: 0.26 },
                        { angle: 45, offset: 0.268 },
                        { angle: 45, offset: 0.278 },
                        { angle: 45, offset: 0.3 },
                        { angle: 45.7, offset: 0.325 },
                        { angle: 45.8, offset: 0.35 },
                        { angle: 45.9, offset: 0.38 },
                        { angle: 46.4, offset: 0.418 },
                        { angle: 46.8, offset: 0.46 },
                        { angle: 46.6, offset: 0.5 },
                        { angle: 46.4, offset: 0.56 },
                        { angle: 46.6, offset: 0.62 },
                        { angle: 46.7, offset: 0.685 },
                        { angle: 42.7, offset: 0.79 },
                        { angle: 42.5, offset: 0.875 },
                        { angle: 42.3, offset: 0.975 },
                        { angle: 42.1, offset: 1.07 },
                        { angle: 42, offset: 1.175 },
                        { angle: 42, offset: 1.3 },
                        { angle: 38.2, offset: 1.6 },
                        { angle: 35.5, offset: 1.9 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                    ],
                    Iu = _u.frameCount,
                    Pu = _u.frameCount + hu.frameCount - 1,
                    Lu = {
                        [Cu.S1x1]: { gridConfigs: Bu, frameConfigs: Su, delays: { rewardShow: 600 } },
                        [Cu.S2x1]: { gridConfigs: pu, frameConfigs: Tu, delays: { rewardShow: 800 } },
                        [Cu.S3x1]: { gridConfigs: vu, frameConfigs: Ou, delays: { rewardShow: 850 } },
                        [Cu.S1x2]: { gridConfigs: wu, frameConfigs: ku, delays: { rewardShow: 800 } },
                        [Cu.S2x2]: { gridConfigs: yu, frameConfigs: Ru, delays: { rewardShow: 600 } },
                    },
                    Mu = 800,
                    Nu = 800,
                    Hu = 800,
                    Wu = 500,
                    Vu = 600,
                    Gu = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function Uu() {
                    return (
                        (Uu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Uu.apply(null, arguments)
                    );
                }
                (0, n.memo)(function (e) {
                    let u = e.width,
                        t = e.height,
                        r = e.getImageSource,
                        o = e.frameCount,
                        s = e.onAnimate,
                        i = e.frameTime,
                        l = void 0 === i ? 33 : i,
                        c = e.initialFrameIndex,
                        d = void 0 === c ? 0 : c,
                        E = e.lastFrameIndex,
                        A = void 0 === E ? o - 1 : E,
                        m = e.loop,
                        F = void 0 === m || m,
                        D = e.state,
                        g = void 0 === D ? 'play' : D,
                        f = e.onAnimationDone,
                        C = e.onAnimationComplete,
                        _ = e.poster,
                        h = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Gu);
                    const B = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = B.current;
                            if (!e) return;
                            const u = e.getContext('2d'),
                                t = (t) => {
                                    (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                };
                            switch (g) {
                                case 'play':
                                    return (function () {
                                        const e = qu(d, A, r),
                                            u = $u(d, A),
                                            n = window.setInterval(() => {
                                                const a = u(),
                                                    r = e.get(a);
                                                r
                                                    ? (null == s || s(a, r),
                                                      t(r),
                                                      a === A &&
                                                          (null == C || C(),
                                                          F || (null == f || f(), window.clearInterval(n))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, l);
                                        return () => window.clearInterval(n);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const e = 0 === d && _ ? { path: _, x: 0, y: 0 } : r(d),
                                            u = new Image();
                                        u.src = e.path;
                                        const n = () => t(ju(e, u));
                                        return (u.addEventListener('load', n), () => u.removeEventListener('load', n));
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [l, r, d, A, F, s, C, f, _, g]),
                        a().createElement('canvas', Uu({}, h, { width: u, height: t, ref: B }))
                    );
                });
                const $u = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    ju = (e, u) => Object.assign({}, e, { img: u }),
                    qu = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, ju(e, u));
                            else {
                                const u = new Image();
                                ((a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, ju(e, u)));
                            }
                        }
                        return n;
                    };
                const zu = (e, u) => Object.assign({}, e, { img: u }),
                    Yu = (e, u, t = 0) => {
                        const n = (function (e) {
                            const u = (function (e) {
                                const u = e.chunk,
                                    t = u.rows * u.columns;
                                return (n) => {
                                    const a = n % t,
                                        r = (a % u.columns) * e.width,
                                        o = Math.trunc(a / u.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: o };
                                };
                            })(e);
                            return (t) => Object.assign({}, u(t), { width: e.width, height: e.height });
                        })(u);
                        return ((e, u, t, n, a = 0) => {
                            const r = {};
                            for (let o = u; o <= t; o++) {
                                const u = n(o),
                                    t = r[u.path];
                                if (t) e.set(o + a, zu(u, t));
                                else {
                                    const t = new Image();
                                    ((r[u.path] = t),
                                        (t.src = u.path),
                                        (t.onerror = () => {
                                            console.error(
                                                `[CanvasSequence] Error loading image(${o})`,
                                                u.path,
                                                `(${u.x},${u.y})`,
                                            );
                                        }),
                                        e.set(o + a, zu(u, t)));
                                }
                            }
                        })(e, 0, u.frameCount - 1, n, t);
                    };
                function Ku(e, u, t, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                function Qu(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (n, a) {
                            var r = e.apply(u, t);
                            function o(e) {
                                Ku(r, n, a, o, s, 'next', e);
                            }
                            function s(e) {
                                Ku(r, n, a, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                let Xu;
                !(function (e) {
                    ((e.Init = 'init'), (e.Idle = 'idle'), (e.Hover = 'hover'), (e.Open = 'open'));
                })(Xu || (Xu = {}));
                const Zu = (e) => {
                        const u = j(),
                            t = ((e) => {
                                switch (`${e.width}x${e.height}`) {
                                    case '1x1':
                                        return Cu.S1x1;
                                    case '2x1':
                                        return Cu.S2x1;
                                    case '3x1':
                                        return Cu.S3x1;
                                    case '1x2':
                                        return Cu.S1x2;
                                    case '2x2':
                                        return Cu.S2x2;
                                    default:
                                        return (
                                            console.error(`[DoorSize] Unknown size! (${e.width}x${e.height})`),
                                            Cu.S1x1
                                        );
                                }
                            })(e),
                            a = Lu[t],
                            r = a.gridConfigs,
                            o = a.frameConfigs,
                            s = a.delays,
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = ((e, u) => {
                                const t = (0, n.useRef)(new Map()),
                                    a = (0, n.useRef)(0),
                                    r = (0, n.useRef)(0);
                                return (
                                    $(() => window.clearInterval(a.current)),
                                    (0, n.useEffect)(() => {
                                        (t.current.clear(),
                                            u.reduce(
                                                (e, u) => (
                                                    Yu(t.current, u, e.frameOffset),
                                                    (e.frameOffset += u.frameCount),
                                                    e
                                                ),
                                                { frameOffset: 0 },
                                            ));
                                    }, [u, e]),
                                    (0, n.useMemo)(() => {
                                        const u = (u) => {
                                            r.current = u;
                                            const n = e.current;
                                            if (n) {
                                                const e = t.current.get(u);
                                                if (!e)
                                                    return void console.error(
                                                        'frameImage was not provided in frameImages Map',
                                                    );
                                                ((n.width = e.width),
                                                    (n.height = e.height),
                                                    (n.style.width = `${n.width}rem`),
                                                    (n.style.height = `${n.height}rem`));
                                                const a = n.getContext('2d');
                                                (a.clearRect(0, 0, n.width, n.height), a.drawImage(e.img, -e.x, -e.y));
                                            }
                                        };
                                        return {
                                            setFrame: u,
                                            animate: (e) => {
                                                window.clearInterval(a.current);
                                                const n = void 0 !== e.startFrameIndex ? e.startFrameIndex : r.current,
                                                    o =
                                                        void 0 !== e.endFrameIndex
                                                            ? e.endFrameIndex
                                                            : t.current.size - 1,
                                                    s = o > n ? 1 : -1;
                                                let i = n;
                                                return (
                                                    (a.current = window.setInterval(() => {
                                                        var t;
                                                        (i === n && (null == e.onStart || e.onStart()),
                                                            null == e.onAnimate || e.onAnimate(i),
                                                            u(i),
                                                            i === o &&
                                                                (e.loop || void 0 === e.loop
                                                                    ? ((t = e.frameTime),
                                                                      window.clearInterval(a.current),
                                                                      (a.current = window.setInterval(() => {
                                                                          u(r.current);
                                                                      }, t)))
                                                                    : window.clearInterval(a.current),
                                                                null == e.onFinish || e.onFinish()),
                                                            (i += s));
                                                    }, e.frameTime)),
                                                    () => window.clearInterval(a.current)
                                                );
                                            },
                                            getCurrentFrame: () => r.current,
                                        };
                                    }, [e])
                                );
                            })(l, r),
                            d = c.animate,
                            E = c.getCurrentFrame,
                            A = (0, n.useRef)(Xu.Init),
                            m = (0, n.useRef)(!1),
                            F = (0, Be.useSpring)(() => ({ x: '-50%', y: '-50%', scale: 1, opacity: 0 })),
                            D = F[0],
                            g = F[1],
                            f = (0, Be.useSpring)(() => ({ opacity: 0 })),
                            C = f[0],
                            _ = f[1],
                            h = (0, Be.useSpring)(() => ({
                                opacity: 1,
                                onChange: ({ value: e }) => {
                                    (i.current && (i.current.style.opacity = e.opacity.toString()),
                                        l.current && (l.current.style.opacity = e.opacity.toString()));
                                },
                            }))[1],
                            B = (0, n.useMemo)(() => {
                                const t = (u) => {
                                        const t = i.current;
                                        if (o[u] && t) {
                                            const n = o[u],
                                                a = n.offset;
                                            ((e, u, t, n) => {
                                                const a = e.getBoundingClientRect(),
                                                    r = a.width,
                                                    o = a.height,
                                                    s = (r / n.width) * t;
                                                e.style.clipPath = ((e, u, t, n) => {
                                                    const a = Math.cos(n),
                                                        r = Math.sin(n),
                                                        o = a * a,
                                                        s = a * r,
                                                        i = r * r,
                                                        l = t * r,
                                                        c = t * a;
                                                    return `polygon(${((e * o + l) / e) * 100}% ${((e * -s + c) / u) * 100}%, ${((e + u * s + l) / e) * 100}% ${((u * o + c) / u) * 100}%, ${((e * i + l) / e) * 100}% ${((u + e * s + c) / u) * 100}%, ${((u * -s + l) / e) * 100}% ${((u * i + c) / u) * 100}%)`;
                                                })(r, o, s, u);
                                            })(t, n.angle * (Math.PI / 180), a, e);
                                        }
                                    },
                                    n = () =>
                                        new Promise((e) => {
                                            (g.start({
                                                to: [{ opacity: 1, scale: 1.2 }, { scale: 1 }],
                                                config: { duration: Nu, easing: fu },
                                                onRest: () => e(),
                                            }),
                                                _.start({
                                                    opacity: 0.8,
                                                    config: { duration: Mu, easing: gu },
                                                    delay: Nu,
                                                }));
                                        }),
                                    a = (e) => {
                                        d(Object.assign({ frameTime: 33, onAnimate: t }, e));
                                    },
                                    r = () => {
                                        ((m.current = !0),
                                            i.current && (i.current.style.pointerEvents = 'none'),
                                            l.current && (l.current.style.display = 'none'));
                                    };
                                return {
                                    tearOff: (e, t = !1) => {
                                        t
                                            ? ((A.current = Xu.Idle),
                                              D.opacity.set(1),
                                              C.opacity.set(0.8),
                                              a({ startFrameIndex: Iu, endFrameIndex: Iu }))
                                            : u.run(
                                                  Qu(function* () {
                                                      if (A.current === Xu.Init) {
                                                          A.current = Xu.Idle;
                                                          try {
                                                              yield n();
                                                          } finally {
                                                              A.current === Xu.Idle &&
                                                                  (q('adv_stamp_highlight'), a({ endFrameIndex: Iu }));
                                                          }
                                                      }
                                                  }),
                                                  e,
                                              );
                                    },
                                    open: (e = !0) => (
                                        (A.current = Xu.Open),
                                        q('adv_stamp_get'),
                                        g.start({
                                            to: { opacity: 0, scale: 1.4 },
                                            config: { duration: Hu, easing: fu },
                                            delay: Vu,
                                        }),
                                        _.start({
                                            to: { opacity: 0 },
                                            config: { duration: Hu, easing: fu },
                                            delay: Vu,
                                        }),
                                        e
                                            ? (a({ startFrameIndex: Pu, onFinish: r, loop: !1 }), s.rewardShow)
                                            : (h.start({
                                                  to: { opacity: 0 },
                                                  config: { duration: Hu, easing: fu },
                                                  delay: Vu,
                                                  onRest: r,
                                              }),
                                              Vu)
                                    ),
                                    enter: () => {
                                        (q('adv_stamp_highlight'),
                                            A.current === Xu.Init
                                                ? (n().catch(te), a({ endFrameIndex: Iu }))
                                                : (g.start({
                                                      to: [{ scale: 1.1 }],
                                                      config: { duration: Wu, easing: gu },
                                                  }),
                                                  a({ endFrameIndex: Pu })),
                                            (A.current = Xu.Hover));
                                    },
                                    leave: () => {
                                        ((A.current = Xu.Idle),
                                            g.start({ to: [{ scale: 1 }], config: { duration: Wu, easing: fu } }),
                                            a({ endFrameIndex: Iu }));
                                    },
                                    restore: () => {
                                        (m.current && r(), t(E()));
                                    },
                                };
                            }, [d, s.rewardShow, o, E, g, D.opacity, u, e, _, C.opacity, h]);
                        return { glowStyle: D, shineStyle: C, doorRef: i, canvasRef: l, state: A, api: B };
                    },
                    Ju = (0, Y.Pi)(({ door: e }) => {
                        const u = J().mediaSize,
                            t = Ee(),
                            n = t.model,
                            r = t.controls,
                            o = De(),
                            s = we[e.dayId],
                            i = j(),
                            l = Zu(s),
                            c = l.shineStyle,
                            d = l.glowStyle,
                            E = l.state,
                            A = l.doorRef,
                            m = l.canvasRef,
                            F = l.api,
                            D = (e) => () => {
                                E.current === Xu.Open || n.doorOpenBlocked.get() || e();
                            },
                            g = D(() => {
                                if (n.statePhase.get() === $e.POST_ACTIVE_PHASE) return r.showPurchaseDialog(e.dayId);
                                r.openDoor(e.dayId);
                            }),
                            f = D(F.enter),
                            C = D(F.leave),
                            _ = (() => {
                                if (n.statePhase.get() === $e.POST_ACTIVE_PHASE && !e.isEnoughResources) return {};
                            })();
                        return (
                            U(() => {
                                e.openAnimationRequired || F.tearOff(0, !0);
                            }),
                            U(() =>
                                o.on('onOpenDoor', (u) => {
                                    u === e.dayId &&
                                        (() => {
                                            const u = F.open(n.isAnimationEnabled.get());
                                            i.run(() => r.showReward(e.dayId), u);
                                        })();
                                }),
                            ),
                            U(() =>
                                o.on('onTearOff', (u, t, n = 0) => {
                                    u === e.dayId && F.tearOff(n + 1e3 * t);
                                }),
                            ),
                            a().useEffect(() => K(F.restore), [F, u]),
                            a().createElement(
                                ou.Wrapper,
                                { dayId: e.dayId, doorState: e.doorState, tooltipArgs: _, key: u },
                                a().createElement(Be.animated.div, { className: 'ReadyToOpenDoor_glow_23', style: d }),
                                a().createElement(
                                    Be.animated.div,
                                    { className: 'ReadyToOpenDoor_shineWrapper_3e', style: c },
                                    a().createElement(Du, {
                                        className: 'ReadyToOpenDoor_shine_a1',
                                        src: R.videos.advent_calendar.shine(),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                ),
                                a().createElement(
                                    ou.FrontSide,
                                    {
                                        ref: A,
                                        onMouseEnter: f,
                                        onMouseLeave: C,
                                        onClick: g,
                                        className: 'ReadyToOpenDoor_frontSide_e5',
                                    },
                                    a().createElement(Be.animated.div, {
                                        className: 'ReadyToOpenDoor_glowBorder_f4',
                                        style: { opacity: d.opacity },
                                    }),
                                    a().createElement(ou.Day, { dayId: e.dayId }),
                                    a().createElement(ou.Currency, { dayId: e.dayId }),
                                    a().createElement(ou.Mark, { dayId: e.dayId }),
                                ),
                                a().createElement('canvas', { ref: m, className: 'ReadyToOpenDoor_backSide_fa' }),
                                ';',
                            )
                        );
                    }),
                    et = (0, Y.Pi)(({ dayId: e }) => {
                        const u = Ee().model.computes.door(e),
                            t = u.doorState === M.READY_TO_OPEN ? 2e3 : 300;
                        return a().createElement(
                            xe.Z,
                            { component: a().Fragment },
                            a().createElement(
                                Se.Z,
                                { classNames: { enter: 'DoorResolver_enter_9c' }, timeout: t, key: u.doorState },
                                (() => {
                                    switch (u.doorState) {
                                        case M.CLOSED:
                                            return a().createElement(lu, { door: u });
                                        case M.EXPIRED:
                                            return a().createElement(du, { door: u });
                                        case M.READY_TO_OPEN:
                                            return a().createElement(Ju, { door: u });
                                        default:
                                            return a().createElement('div', null);
                                    }
                                })(),
                            ),
                        );
                    }),
                    ut = R.strings.advent_calendar.mainView,
                    tt = (0, Y.Pi)(() => {
                        const e = Ee(),
                            u = e.model,
                            t = e.controls,
                            r = De(),
                            o = (0, Be.useSpring)(() => ({ opacity: 1 })),
                            s = o[0],
                            i = o[1];
                        (U(() =>
                            r.on('onOpenDoor', () => {
                                const e = Object.values(u.doors.get());
                                e.filter((e) => e.doorState === M.OPENED).length === e.length - 1 &&
                                    i.start({ opacity: 0, delay: 2500 });
                            }),
                        ),
                            U(() =>
                                (0, z.U5)(
                                    () => Object.values(u.doors.get()).every((e) => e.doorState === M.OPENED),
                                    (e, u) => {
                                        u && !e && i.start({ opacity: 1 });
                                    },
                                ),
                            ));
                        const l = (0, n.useCallback)(() => {
                            t.openDownloadLink();
                        }, [t]);
                        return a().createElement(
                            'div',
                            {
                                className: C()(
                                    ye,
                                    u.doorOpenBlocked.get() && 'Calendar_base__blocked_57',
                                    !u.computes.eventCompleted() && 'Calendar_base__linkButtonHidden_b7',
                                ),
                            },
                            a().createElement('div', { className: C()(be, 'Calendar_base__art_bd') }),
                            a().createElement(
                                'div',
                                {
                                    className: C()(
                                        'Calendar_content_bd',
                                        u.computes.eventCompleted() && 'Calendar_content__hidden_f4',
                                    ),
                                },
                                a().createElement(Be.animated.div, {
                                    className: C()(be, 'Calendar_base__artBorders_72'),
                                    style: s,
                                }),
                                a().createElement(Be.animated.div, {
                                    className: C()(be, 'Calendar_base__calendarBorder_de'),
                                    style: s,
                                }),
                                Object.keys(we).map((e) => a().createElement(et, { key: e, dayId: Number(e) })),
                            ),
                            a().createElement(
                                'div',
                                { className: 'Calendar_linkButtonContainer_0e' },
                                a().createElement(
                                    he,
                                    { type: fe.ghost, size: Ce.medium, mixClass: 'Calendar_linkButton_36', onClick: l },
                                    a().createElement(
                                        'span',
                                        { className: 'Calendar_linkButtonTextWrapper_65' },
                                        ut.footer.linkButton.text(),
                                    ),
                                    a().createElement(
                                        'span',
                                        { className: 'Calendar_linkButtonIconWrapper_0b' },
                                        a().createElement('span', { className: 'Calendar_linkButtonIcon_93' }),
                                    ),
                                ),
                            ),
                        );
                    });
                let nt, at;
                (!(function (e) {
                    ((e.REWARD_RECEIVED = 'rewardReceived'),
                        (e.REWARD_IN_PROGRESS = 'rewardInProgress'),
                        (e.REWARD_LOCKED = 'rewardLocked'));
                })(nt || (nt = {})),
                    (function (e) {
                        ((e.STYLE_2D = 'style2D'), (e.CREW_MEMBER = 'crewMember'), (e.BIG_LOOTBOX = 'lootBox'));
                    })(at || (at = {})));
                const rt = {
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
                        const u = Math.sqrt,
                            t = Math.pow;
                        return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                    bezier: (e, u, t, n) => (a) =>
                        (1 - a) * (1 - a) * (1 - a) * e +
                        3 * (1 - a) * (1 - a) * a * u +
                        3 * (1 - a) * a * a * t +
                        a * a * a * n,
                };
                let ot;
                (W.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(ot || (ot = {})),
                    W.Sw.instance);
                const st = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    },
                    it = (e) => 2.70158 * e * e * e - 1.70158 * e * e,
                    lt = '0px 0px 0px #fff0',
                    ct = '0px 0px 3px #fff',
                    dt = 'ProgressStatus_check_d7',
                    Et = R.strings.common.common,
                    At = (0, Y.Pi)(
                        ({
                            isReceived: e,
                            isInProgress: u,
                            actualOpenedDoorsAmount: t,
                            requiredOpenedDoorsAmount: r,
                            completedDelay: o,
                            isPostEvent: s,
                            setTriggerBlurAnimation: i,
                        }) => {
                            const l = Ee(),
                                c = l.model,
                                d = l.controls,
                                E = c.progression.isCompleted.get(),
                                A = st(E),
                                m = st(u),
                                F = st(t),
                                D = (0, n.useState)(!1),
                                g = D[0],
                                f = D[1],
                                C = (0, Be.useSpringRef)(),
                                _ = (0, Be.useSpring)({
                                    ref: C,
                                    from: { opacity: 1, transform: 'translateY(0rem)' },
                                    to: { opacity: 0, transform: 'translateY(-5rem)' },
                                    transform: 'translateY(0rem)',
                                    config: { duration: 800, easing: it },
                                    onRest: () => q('adv_fill_in'),
                                }),
                                h = (0, Be.useSpringRef)(),
                                B = (0, Be.useSpring)({
                                    ref: h,
                                    from: { opacity: 0, transform: 'translateY(5rem)' },
                                    to: { opacity: 1, transform: 'translateY(0rem)' },
                                    config: { duration: 100, easing: rt.easeOutQuad },
                                    onRest: () => i(!0),
                                }),
                                p = (0, Be.useSpringRef)(),
                                v = (0, Be.useSpring)({
                                    ref: p,
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 200, easing: rt.easeOutQuad },
                                    onRest: () => {
                                        p.start({
                                            to: { opacity: 0 },
                                            config: { duration: 500, easing: rt.easeInQuad },
                                            onRest: () => {
                                                (f(!1), d.progressionRewardCompleted());
                                            },
                                        });
                                    },
                                });
                            (0, Be.useChain)(g ? [C, h, p] : []);
                            const w = (0, Be.useSpring)(() => ({ opacity: !u || s ? 1 : 0.5 })),
                                y = w[0],
                                b = w[1],
                                x = (0, Be.useSpring)(() => ({ opacity: !u || s ? 0.5 : 1 })),
                                S = x[0],
                                T = x[1],
                                O = (0, Be.useSpring)(() => ({ textShadow: lt })),
                                R = O[0],
                                k = O[1],
                                I = (0, Be.useSpring)(() => ({ opacity: E ? 0 : 1, transform: 'translateY(0rem)' })),
                                P = I[0],
                                L = I[1];
                            return (
                                (0, n.useEffect)(() => {
                                    u &&
                                        (!1 === m
                                            ? (T.start({
                                                  from: { opacity: 0.5 },
                                                  to: { opacity: 1 },
                                                  delay: 1e3,
                                                  config: { duration: 200, easing: rt.easeInQuad },
                                                  onRest: () => {
                                                      k.start({
                                                          from: { textShadow: lt },
                                                          to: { textShadow: ct },
                                                          reverse: !0,
                                                          config: { duration: 300, easing: rt.easeInQuad },
                                                      });
                                                  },
                                              }),
                                              b.start({
                                                  from: { opacity: 1 },
                                                  to: { opacity: 0.5 },
                                                  delay: 1e3,
                                                  config: { duration: 200, easing: rt.easeInQuad },
                                              }))
                                            : k.start({
                                                  from: { textShadow: lt },
                                                  to: { textShadow: ct },
                                                  config: { duration: 300, easing: rt.easeInQuad },
                                                  reverse: !0,
                                                  onRest: () => {
                                                      g ||
                                                          (t === r
                                                              ? f(!0)
                                                              : Number.isInteger(F) && d.animationCompleted());
                                                  },
                                              }));
                                }, [t, T, b, k, u, m, r, d, F]),
                                (0, n.useEffect)(() => {
                                    E &&
                                        !1 === A &&
                                        L.start({
                                            from: { opacity: 1, transform: 'translateY(0rem)' },
                                            to: { opacity: 0, transform: 'translateY(-5rem)' },
                                            delay: o,
                                            config: { duration: 800, easing: it },
                                        });
                                }, [L, o, E, A]),
                                a().createElement(
                                    Be.animated.div,
                                    { style: P, className: 'ProgressStatus_base_ae' },
                                    e
                                        ? a().createElement('span', { className: dt })
                                        : a().createElement(
                                              a().Fragment,
                                              null,
                                              a().createElement(
                                                  Be.animated.div,
                                                  { style: B },
                                                  a().createElement('span', { className: dt }),
                                              ),
                                              a().createElement(Be.animated.div, {
                                                  style: v,
                                                  className: 'ProgressStatus_glow_ef',
                                              }),
                                              a().createElement(
                                                  Be.animated.div,
                                                  { style: _ },
                                                  a().createElement(
                                                      Be.animated.div,
                                                      { style: S, className: 'ProgressStatus_amount_ef' },
                                                      a().createElement(Be.animated.div, { style: R }, t),
                                                      a().createElement(
                                                          Be.animated.div,
                                                          { style: y, className: 'ProgressStatus_doorsClosed_90' },
                                                          Et.slash(),
                                                          ' ',
                                                          r,
                                                      ),
                                                      a().createElement('div', {
                                                          className: 'ProgressStatus_stage_55',
                                                      }),
                                                  ),
                                              ),
                                          ),
                                )
                            );
                        },
                    ),
                    mt = 'AnimationReward_image_2c',
                    Ft = 'AnimationReward_imageWrapper_be',
                    Dt = R.strings.advent_calendar.progressionRewards;
                var gt;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(gt || (gt = {}));
                const ft = (e) => (1 == e > B.Medium ? gt.Big : gt.Small),
                    Ct = (e, u) => `url(R.images.advent_calendar.gui.maps.icons.mainView.progression.${e}_${u})`,
                    _t = (0, Y.Pi)(
                        ({
                            isLastReward: e,
                            isReceived: u,
                            isInProgress: t,
                            completedDelay: r,
                            actualOpenedDoorsAmount: o,
                            rewardType: s,
                            requiredOpenedDoorsAmount: i,
                            tooltipContentId: l,
                            tooltipId: c,
                            isPostEvent: d,
                        }) => {
                            const E = Ee(),
                                A = E.model,
                                m = E.controls,
                                F = w().mediaSize,
                                D = A.progression.isCompleted.get(),
                                g = (0, n.useState)(!1),
                                f = g[0],
                                _ = g[1],
                                h = A.holidayOpsStartTime.get(),
                                B = st(u),
                                p = (0, Be.useSpring)(() => ({ opacity: D || u ? 0.5 : 1 })),
                                v = p[0],
                                y = p[1],
                                b = (0, Be.useSpring)(() => ({ opacity: D ? 0 : 1 })),
                                x = b[0],
                                S = b[1],
                                T = (0, Be.useSpring)(() => ({
                                    opacity: u ? 0 : 0.5,
                                    transform: 'translate(-50%, -50%)',
                                })),
                                O = T[0],
                                R = T[1],
                                k = (0, n.useMemo)(() => ({ tooltipId: c }), [c]);
                            return (
                                (0, n.useEffect)(() => {
                                    f &&
                                        (y.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0.5 },
                                            config: { duration: 200, easing: rt.easeInQuad },
                                        }),
                                        S.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 200, easing: rt.easeInQuad },
                                        }));
                                }, [y, S, f]),
                                (0, n.useEffect)(() => {
                                    u &&
                                        !1 === B &&
                                        (q('adv_progress_level'),
                                        R.start({
                                            from: { opacity: 0.5, transform: 'translate(-50%, -50%)' },
                                            to: { opacity: 0, transform: 'translate(-50%, -100%)' },
                                            config: { duration: 800, easing: it },
                                            onRest: () => {
                                                D || m.animationCompleted();
                                            },
                                        }));
                                }, [u, R, B, m, D]),
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            'AnimationReward_base_96',
                                            s === at.BIG_LOOTBOX && 'AnimationReward_base__lootbox_2a',
                                            u && 'AnimationReward_base__received_58',
                                        ),
                                    },
                                    a().createElement(
                                        'div',
                                        { className: 'AnimationReward_reward_c4' },
                                        s === at.BIG_LOOTBOX
                                            ? a().createElement(
                                                  nu,
                                                  {
                                                      tooltipArgs: {
                                                          header: Dt.tooltip.lootbox.simple.header(),
                                                          body: Dt.tooltip.lootbox.simple.body(),
                                                          bindings: { date: Ge(h, !1) },
                                                      },
                                                  },
                                                  a().createElement(
                                                      Be.animated.div,
                                                      { style: v, className: Ft },
                                                      a().createElement(Be.animated.div, {
                                                          style: x,
                                                          className: 'AnimationReward_lootBoxGlow_26',
                                                      }),
                                                      a().createElement('div', {
                                                          className: mt,
                                                          style: { backgroundImage: `${Ct(s, ft(F))}` },
                                                      }),
                                                  ),
                                              )
                                            : a().createElement(
                                                  tu,
                                                  { contentId: l, args: k },
                                                  a().createElement(
                                                      Be.animated.div,
                                                      { style: v, className: Ft },
                                                      a().createElement('div', {
                                                          className: mt,
                                                          style: { backgroundImage: `${Ct(s, ft(F))}` },
                                                      }),
                                                  ),
                                              ),
                                        a().createElement(At, {
                                            isReceived: u,
                                            isInProgress: t,
                                            actualOpenedDoorsAmount: o,
                                            requiredOpenedDoorsAmount: i,
                                            completedDelay: r,
                                            setTriggerBlurAnimation: _,
                                            isPostEvent: d,
                                        }),
                                    ),
                                    !e &&
                                        a().createElement(
                                            'div',
                                            { className: 'AnimationReward_spacer_76' },
                                            a().createElement(
                                                nu,
                                                {
                                                    tooltipArgs: {
                                                        header: Dt.tooltip.lock.title(),
                                                        body: Dt.tooltip.lock.description(),
                                                    },
                                                },
                                                a().createElement(Be.animated.div, {
                                                    style: O,
                                                    className: 'AnimationReward_lock_8b',
                                                }),
                                            ),
                                        ),
                                )
                            );
                        },
                    ),
                    ht = ({ binding: e, text: u = '', classMix: t, alignment: r = ke.left, formatWithBrackets: o }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = o && e ? ((i = e), u.replace(/\{\w+\}/g, (e) => String(i[e.slice(1, -1)]))) : u;
                        var i;
                        return a().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, o) =>
                                a().createElement(
                                    'div',
                                    { className: C()('FormatText_base_d0', t), key: `${u}-${o}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = ke.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return He.includes(t)
                                                          ? Ne(e)
                                                          : 'ja' === t
                                                            ? (0, Re.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Ie(e))
                                                            : ((e, u = ke.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = Ie(e);
                                                                  return (
                                                                      Me(a, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Me(e, n, ke.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, r, e).map((e, u) =>
                                        a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Bt = 'Title_base_3a',
                    pt = 'Title_text_90',
                    vt = 'Title_check_de',
                    wt = R.strings.advent_calendar.mainView,
                    yt = (0, Y.Pi)(({ activePhaseCompleted: e, completed: u }) => {
                        const t = Ee().model,
                            n = t.statePhase.get(),
                            r = t.progression.isCompleted.get();
                        return n === $e.POST_ACTIVE_PHASE
                            ? a().createElement(
                                  'div',
                                  { className: Bt },
                                  r
                                      ? a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('span', { className: vt }),
                                            a().createElement(ht, {
                                                classMix: pt,
                                                text: wt.footer.progressionFinished.title(),
                                            }),
                                        )
                                      : a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('span', { className: 'Title_lock_35' }),
                                            a().createElement(
                                                nu,
                                                {
                                                    tooltipArgs: {
                                                        body: R.strings.advent_calendar.progressionRewards.tooltip.postActivePhase.title(),
                                                        bindings: Ue(
                                                            t.computes.activePhase().startDate,
                                                            t.computes.postActivePhase().startDate,
                                                        ),
                                                    },
                                                },
                                                a().createElement(
                                                    'div',
                                                    null,
                                                    a().createElement(ht, {
                                                        classMix: pt,
                                                        text: wt.footer.expired.title(),
                                                    }),
                                                ),
                                            ),
                                        ),
                              )
                            : a().createElement(
                                  'div',
                                  { className: Bt },
                                  a().createElement(
                                      Be.animated.div,
                                      { style: u, className: 'Title_title_71' },
                                      a().createElement('span', { className: vt }),
                                      a().createElement(ht, {
                                          classMix: pt,
                                          text: wt.footer.progressionFinished.title(),
                                      }),
                                  ),
                                  a().createElement(
                                      Be.animated.div,
                                      { style: e },
                                      a().createElement(ht, {
                                          classMix: pt,
                                          text: wt.footer.progressionNotFinished.title(),
                                          binding: { endDate: Ge(t.computes.postActivePhase().startDate, !1) },
                                      }),
                                  ),
                              );
                    }),
                    bt = (0, Y.Pi)(() => {
                        const e = Ee(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressionRewards.get(),
                            o = u.progression.isCompleted.get(),
                            s = u.statePhase.get(),
                            i = st(o),
                            l = (0, Be.useSpring)(() => ({
                                opacity: o ? 0 : 1,
                                config: { duration: 900, easing: rt.easeInQuad },
                            })),
                            c = l[0],
                            d = l[1],
                            E = (0, Be.useSpring)(() => ({ opacity: o ? 1 : 0, transform: 'translateY(-40%)' })),
                            A = E[0],
                            m = E[1];
                        (0, n.useEffect)(() => {
                            o &&
                                !1 === i &&
                                d.start({
                                    from: { opacity: 1 },
                                    to: { opacity: 0 },
                                    delay: 600,
                                    onRest: () => {
                                        (q('adv_progress_full'),
                                            m.start({
                                                from: { opacity: 0, transform: 'translateY(-40%)' },
                                                to: { opacity: 1, transform: 'translateY(-50%)' },
                                                config: { duration: 100, easing: rt.easeOutQuad },
                                                onRest: () => t.animationCompleted(),
                                            }));
                                    },
                                });
                        }, [d, m, o, i, t]);
                        const F = u.computes.eventCompleted() || u.isIntroScreenVisible.get();
                        return a().createElement(
                            'div',
                            { className: C()('Footer_base_0d', F && 'Footer_base__hidden_14') },
                            a().createElement(
                                'div',
                                { className: 'Footer_title_23' },
                                a().createElement(yt, { activePhaseCompleted: c, completed: A }),
                            ),
                            ((D = r),
                            (g = (e, u) =>
                                a().createElement(_t, {
                                    key: u,
                                    isReceived: e.state === nt.REWARD_RECEIVED,
                                    isInProgress: e.state === nt.REWARD_IN_PROGRESS,
                                    isPostEvent: s === $e.POST_ACTIVE_PHASE,
                                    actualOpenedDoorsAmount: e.actualOpenedDoorsAmount,
                                    rewardType: e.rewardType,
                                    requiredOpenedDoorsAmount: e.requiredOpenedDoorsAmount,
                                    tooltipContentId: e.tooltipContentId,
                                    tooltipId: e.tooltipId,
                                    isLastReward: u === r.length - 1,
                                    completedDelay: 300 * u,
                                })),
                            Array.isArray(D) ? D.map(g) : D.map((e, u, t) => g(null == e ? void 0 : e.value, u))),
                        );
                        var D, g;
                    }),
                    xt = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    St = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Tt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ot = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Rt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, n.useMemo)(() => u || {}, [u]);
                        let s = St.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = Tt.exec(t),
                                c = Ot.exec(t),
                                d = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + l++ + e;
                                ((i = i.replace(t, `%(${s})`)),
                                    (o[s] = xt[e]
                                        ? a().createElement(
                                              'span',
                                              { className: xt[e] },
                                              a().createElement(ht, { text: d, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement(ht, { text: d, binding: u }),
                                          )));
                            }
                            s = St.exec(e);
                        }
                        return a().createElement(ht, { text: i, classMix: t, binding: o });
                    }),
                    kt = 'GradientText_text_75',
                    It = ({ text: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: C()('GradientText_base_ce', u) },
                            a().createElement('div', { className: C()(kt, 'GradientText_text__hidden_01') }, e),
                            a().createElement('div', { className: C()(kt, 'GradientText_text__basis_50') }, e),
                            a().createElement('div', { className: C()(kt, 'GradientText_text__secondary_0e') }, e),
                            a().createElement(
                                'div',
                                { className: C()(kt, 'GradientText_text__gradientColorize_e2') },
                                e,
                            ),
                        ),
                    Pt = R.strings.advent_calendar.mainView,
                    Lt = (0, Y.Pi)(() => {
                        const e = Ee().model,
                            u = (() => {
                                switch (e.statePhase.get()) {
                                    case $e.ACTIVE_PHASE:
                                        return {
                                            text: Pt.activePhase.subTitle(),
                                            binding: Ue(
                                                e.computes.activePhase().startDate,
                                                e.computes.postActivePhase().startDate,
                                            ),
                                        };
                                    case $e.POST_ACTIVE_PHASE:
                                        return {
                                            text: Pt.postActivePhase.subTitle(),
                                            binding: { date: Ge(e.computes.postActivePhase().endDate, !1) },
                                        };
                                }
                            })(),
                            t = e.computes.eventCompleted() || e.isIntroScreenVisible.get();
                        return a().createElement(
                            'span',
                            { className: C()('Header_base_4f', t && 'Header_base__hidden_40') },
                            a().createElement(
                                'div',
                                { className: 'Header_titleWrapper_d4' },
                                a().createElement(It, { className: 'Header_title_eb', text: Pt.title() }),
                                e.statePhase.get() === $e.ACTIVE_PHASE &&
                                    a().createElement(
                                        tu,
                                        {
                                            contentId:
                                                R.views.advent_calendar.lobby.feature.tooltips.AdventCalendarAllRewardsTooltip(
                                                    'resId',
                                                ),
                                        },
                                        a().createElement('div', { className: 'Header_infoButton_5e' }),
                                    ),
                            ),
                            a().createElement('div', { className: 'Header_subTitle_15' }, a().createElement(Rt, u)),
                            a().createElement('div', { className: 'Header_shadow_29' }),
                        );
                    }),
                    Mt = {
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
                    Nt = [
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
                function Ht() {
                    return (
                        (Ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ht.apply(null, arguments)
                    );
                }
                class Wt extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && q(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && q(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, Nt)),
                            A = C()(Mt.base, Mt[`base__${o}`], Mt[`base__${r}`], null == s ? void 0 : s.base),
                            m = C()(Mt.icon, Mt[`icon__${o}`], Mt[`icon__${r}`], null == s ? void 0 : s.icon),
                            F = C()(Mt.glow, null == s ? void 0 : s.glow),
                            D = C()(Mt.caption, Mt[`caption__${o}`], null == s ? void 0 : s.caption),
                            g = C()(Mt.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            Ht(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== o && a().createElement('div', { className: Mt.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: F })),
                            a().createElement('div', { className: D }, u),
                            n && a().createElement('div', { className: g }, n),
                        );
                    }
                }
                Wt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Vt = (0, Y.Pi)(() => {
                        const e = Ee(),
                            u = e.model,
                            t = e.controls,
                            n = u.isIntroScreenVisible.get();
                        return a().createElement(
                            'div',
                            { className: C()('Navigation_base_3f', n && 'Navigation_base__hidden_0a') },
                            a().createElement(Wt, {
                                caption: R.strings.advent_calendar.mainView.navigation.aboutEventBtn.label(),
                                type: 'info',
                                side: 'left',
                                onClick: t.infoClick,
                                classNames: { base: 'Navigation_info_60' },
                            }),
                            a().createElement(Wt, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: t.close,
                                classNames: { base: 'Navigation_close_69' },
                            }),
                        );
                    }),
                    Gt = R.images.advent_calendar.gui.maps.icons.mainView,
                    Ut = [
                        Gt.readyToOpen.c_160x1x1(),
                        Gt.readyToOpen.c_160x2x1(),
                        Gt.readyToOpen.c_160x3x1(),
                        Gt.readyToOpen.c_160x1x2(),
                        Gt.sequence.tearOff(),
                        Gt.sequence.hover(),
                    ],
                    $t = (0, Y.Pi)(() => {
                        const e = Ee(),
                            u = e.model,
                            t = e.controls,
                            r = De().trigger,
                            o = j();
                        var s;
                        ((s = t.close),
                            G(H.n.ESCAPE, s),
                            (() => {
                                const e = J().mediaSize;
                                (0, n.useEffect)(() => {
                                    if (ee[e])
                                        return (
                                            document.body.classList.add(ee[e]),
                                            () => document.body.classList.remove(ee[e])
                                        );
                                }, [e]);
                            })());
                        const i = X(Ut) !== Q.Pending,
                            l = (e) => {
                                Object.values(u.doors.get())
                                    .filter((e) => e.openAnimationRequired && e.doorState === M.READY_TO_OPEN)
                                    .sort((e, u) => e.dayId - u.dayId)
                                    .forEach((u, t) => {
                                        r('onTearOff', u.dayId, t, e);
                                    });
                            };
                        return (
                            U(() => (o.run(() => l(0), 1e3), () => o.clear())),
                            U(() => {
                                if (!u.computes.eventCompleted())
                                    return (0, z.gx)(
                                        () => u.computes.eventCompleted(),
                                        () => q('adv_postcard'),
                                    );
                            }),
                            U(() =>
                                (0, z.U5)(
                                    () => u.doors.get(),
                                    () => l(0),
                                    { delay: 400 },
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'App_base_12', lang: R.strings.settings.LANGUAGE_CODE() },
                                a().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            'App_content_ad',
                                            i && u.isAnimationEnabled.get()
                                                ? 'App_content__ready_be'
                                                : 'App_content__slowReady_51',
                                            u.showBlur.get() && 'App_content__blurred_8c',
                                        ),
                                    },
                                    a().createElement('div', { className: 'App_background_d4' }),
                                    a().createElement('div', { className: 'App_vignette_0c' }),
                                    a().createElement(Vt, null),
                                    a().createElement(Lt, null),
                                    i && a().createElement(tt, null),
                                    a().createElement(bt, null),
                                ),
                            )
                        );
                    }),
                    jt = {
                        statePhase: $e.ACTIVE_PHASE,
                        doors: ((e, u) => {
                            const t = [];
                            for (let e = 0; e < 31; e++) t.push(u(e));
                            return t;
                        })(0, (e) => {
                            const u = e + 1;
                            return {
                                dayId: u,
                                price: 70,
                                mark: [5].includes(u)
                                    ? N.WDR
                                    : [6].includes(u)
                                      ? N.NY
                                      : [31].includes(u)
                                        ? N.NY_EVENT
                                        : N.NONE,
                                doorState: [1, 25].includes(u)
                                    ? M.READY_TO_OPEN
                                    : [5, 6, 13, 18, 8, 21, 31].includes(u)
                                      ? M.CLOSED
                                      : M.OPENED,
                                isEnoughResources: !0,
                                openAnimationRequired: !1,
                                openTimeStamp: Date.now() / 1e3 + 86400 * e,
                            };
                        }),
                        startTime: Date.now() / 1e3,
                        holidayOpsStartTime: Date.now() / 1e3 + 345600,
                        postEventStartDate: Date.now() / 1e3 + 216e4,
                        postEventEndDate: Date.now() / 1e3 + 2678400,
                        showBlur: !1,
                        progression: { isCompleted: !1 },
                        progressionRewards: [
                            {
                                requiredOpenedDoorsAmount: 3,
                                actualOpenedDoorsAmount: 2,
                                state: nt.REWARD_IN_PROGRESS,
                                tooltipContentId: 0,
                                rewardType: at.GIFT_MACHINE_TOKEN,
                            },
                            {
                                requiredOpenedDoorsAmount: 7,
                                actualOpenedDoorsAmount: 2,
                                state: nt.REWARD_IN_PROGRESS,
                                tooltipContentId: 0,
                                rewardType: at.CREW_MEMBER,
                            },
                            {
                                requiredOpenedDoorsAmount: 13,
                                actualOpenedDoorsAmount: 2,
                                state: nt.REWARD_IN_PROGRESS,
                                tooltipContentId: 0,
                                rewardType: at.BIG_LOOTBOX,
                            },
                        ],
                        balance: { isWalletAvailable: !0 },
                        event: { eventType: '', payload: null },
                    },
                    qt = {
                        getter: (e) => {
                            switch (e) {
                                case 'doors':
                                    return jt.doors;
                                case 'progressionRewards.rewards':
                                    return jt.progressionRewards;
                                case 'balance':
                                    return jt.balance;
                                case 'event':
                                    return jt.event;
                                case 'progressionRewards':
                                    return jt.progression;
                                default:
                                    return jt;
                            }
                        },
                        controls: ({ model: e }) =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const n = e[t];
                                        u[t] = (0, z.aD)(n);
                                    }
                                return u;
                            })({
                                close: () => window.model.onClose(),
                                showReward: te,
                                showPurchaseDialog: te,
                                animationCompleted: te,
                                openDoor: (u) => {
                                    const t = e.doors.get();
                                    ((t[5] = Object.assign({}, t[5], {
                                        doorState: M.READY_TO_OPEN,
                                        openAnimationRequired: !0,
                                    })),
                                        (t[u] = Object.assign({}, t[u], { doorState: M.OPENED })),
                                        e.doors.set(Object.assign({}, t)));
                                },
                                openDownloadLink: te,
                                infoClick: te,
                            }),
                    };
                engine.whenReady.then(() => {
                    L().render(
                        a().createElement(
                            I,
                            null,
                            a().createElement(
                                de,
                                { mode: 'real', mocks: qt },
                                a().createElement(Fe, null, a().createElement($t, null)),
                            ),
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 159),
        (() => {
            var e = { 159: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(761));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
