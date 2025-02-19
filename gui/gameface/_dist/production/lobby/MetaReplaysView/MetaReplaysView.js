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
            768: (e, u, a) => {
                'use strict';
                a.d(u, { O: () => J });
                var t = {};
                a.r(t),
                    a.d(t, { mouse: () => E, off: () => m, on: () => d, onResize: () => o, onScaleUpdated: () => c });
                var r = {};
                a.r(r),
                    a.d(r, {
                        events: () => t,
                        getMouseGlobalPosition: () => F,
                        getSize: () => g,
                        graphicsQuality: () => h,
                        playSound: () => A,
                        setRTPC: () => p,
                    });
                var n = {};
                a.r(n), a.d(n, { getBgUrl: () => v, getTextureUrl: () => B });
                var s = {};
                function l(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.r(s),
                    a.d(s, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => M,
                        children: () => n,
                        displayStatus: () => f,
                        displayStatusIs: () => K,
                        events: () => y,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => Y,
                        getFontNames: () => q,
                        getScale: () => W,
                        getSize: () => O,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => G,
                        isFocused: () => U,
                        pxToRem: () => $,
                        remToPx: () => z,
                        resize: () => L,
                        sendEvent: () => N,
                        setAnimateWindow: () => j,
                        setEventHandled: () => V,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => Q,
                    });
                const o = l('clientResized'),
                    c = l('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    m = (e, u) => engine.off(e, u),
                    _ = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && i(!1);
                        }
                        function a() {
                            e.enabled && i(!0);
                        }
                        function t() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', a))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', a))
                                : i(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, a) => (
                                (u[a] = (function (u) {
                                    return (a) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            s = _[u]((e) => a([e, 'outside']));
                                        function l(e) {
                                            a([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, l),
                                            t(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(n, l),
                                                    (e.listeners -= 1),
                                                    t(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(a)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (e.enabled = !1), t();
                            },
                            enable() {
                                (e.enabled = !0), t();
                            },
                            enableOutside() {
                                e.enabled && i(!0);
                            },
                            disableOutside() {
                                e.enabled && i(!1);
                            },
                        });
                    })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function p(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((a) => {
                        console.error(`setRTPC('${e}', '${u}'): `, a);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    D = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    C = Object.keys(D).reduce((e, u) => ((e[u] = () => A(D[u])), e), {}),
                    b = { play: Object.assign({}, C, { sound: A }), setRTPC: p };
                function B(e, u, a = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, a);
                }
                function v(e, u, a) {
                    return `url(${B(e, u, a)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
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
                    w = ['args'],
                    T = (e, u) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var t in e)
                                        if ({}.hasOwnProperty.call(e, t)) {
                                            if (u.indexOf(t) >= 0) continue;
                                            a[t] = e[t];
                                        }
                                    return a;
                                })(u, w);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((t = r),
                                              Object.entries(t).map(([e, u]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: u };
                                                      default:
                                                          return { __Type: a, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var t;
                    },
                    N = {
                        close(e) {
                            T('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            T(64);
                        },
                        move(e) {
                            T(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    R = 15;
                function M(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, R);
                }
                function k(e, u, a, t = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, a, t);
                }
                function S(e, u, a) {
                    return viewEnv.addDataChangedCallback(e, u, a);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, R);
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, u, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function P(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: z(u.x), y: z(u.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function z(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function V() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const q = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    K = Object.keys(f).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === f[u]), e), {}),
                    Z = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    Q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    J = { view: s, client: r, sound: b };
            },
            521: (e, u, a) => {
                'use strict';
                let t, r;
                a.d(u, { n: () => t }),
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
                    })(t || (t = {})),
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
            358: (e, u, a) => {
                'use strict';
                a.d(u, { Z: () => n });
                var t = a(768);
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
                    addCallback(e, u, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = t.O.view.addModelObserver(e, a, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  a > 0 && (this._views[a] ? this._views[a].push(n) : (this._views[a] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, u = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, u, a) {
                        a.forEach((a) => {
                            const t = this._callbacks[a];
                            void 0 !== t && t(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
            916: (e, u, a) => {
                'use strict';
                a.d(u, {
                    B3: () => o,
                    Z5: () => s.Z5,
                    B0: () => l,
                    c9: () => D,
                    wU: () => v,
                    ry: () => F,
                    Eu: () => h,
                    SW: () => b,
                    P3: () => B,
                });
                class t {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: a }) => {
                                    let t = e.target;
                                    do {
                                        if (t === u) return;
                                        t = t.parentNode;
                                    } while (t);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return t.__instance || (t.__instance = new t()), t.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const a = e,
                            t = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== a || u !== t)),
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
                t.__instance = void 0;
                const r = t;
                var n = a(358),
                    s = a(613);
                let l;
                var i;
                ((i = l || (l = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE');
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(521),
                    E = a(768);
                const A = ['args'];
                function p(e, u, a, t, r, n, s) {
                    try {
                        var l = e[n](s),
                            i = l.value;
                    } catch (e) {
                        return void a(e);
                    }
                    l.done ? u(i) : Promise.resolve(i).then(t, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        a = arguments;
                                    return new Promise(function (t, r) {
                                        var n = e.apply(u, a);
                                        function s(e) {
                                            p(n, t, r, s, l, 'next', e);
                                        }
                                        function l(e) {
                                            p(n, t, r, s, l, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    D = (e, u) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var t in e)
                                        if ({}.hasOwnProperty.call(e, t)) {
                                            if (u.indexOf(t) >= 0) continue;
                                            a[t] = e[t];
                                        }
                                    return a;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((t = r),
                                              Object.entries(t).map(([e, u]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          a.number = u;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = u;
                                                          break;
                                                      default:
                                                          a.string = u.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var t;
                    },
                    C = () => D(l.CLOSE),
                    b = () => D(l.POP_OVER, { on: !1 }),
                    B = (e, u, a, t, r = R.invalid('resId'), n) => {
                        const s = E.O.view.getViewGlobalPosition(),
                            i = a.getBoundingClientRect(),
                            o = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            _ = {
                                x: E.O.view.pxToRem(o) + s.x,
                                y: E.O.view.pxToRem(c) + s.y,
                                width: E.O.view.pxToRem(d),
                                height: E.O.view.pxToRem(m),
                            };
                        D(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: t || R.invalid('resId'),
                            targetID: r,
                            direction: u,
                            bbox: g(_),
                            on: !0,
                            args: n,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    f = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var y = a(572);
                const w = r.instance,
                    T = {
                        DataTracker: n.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: b,
                        sendShowContextMenuEvent: (e, u, a = 0) => {
                            D(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: u });
                        },
                        sendShowPopOverEvent: B,
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, C);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: v,
                        dumpViewModel: function e(u) {
                            const a = {};
                            if ('object' != typeof u) return u;
                            for (const t in u)
                                if (Object.prototype.hasOwnProperty.call(u, t)) {
                                    const r = Object.prototype.toString.call(u[t]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[t];
                                        a[t] = [];
                                        for (let u = 0; u < r.length; u++) a[t].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[t] = e(u[t]))
                                            : (a[t] = u[t]);
                                }
                            return a;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = T;
            },
            613: (e, u, a) => {
                'use strict';
                a.d(u, { Ew: () => n, Z5: () => t, cy: () => r });
                const t = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, a) => userLocale.getTimeFormat(e, u, void 0 === a || a),
                        getTimeString: (e, u, a) => userLocale.getTimeString(e, u, void 0 === a || a),
                    },
                    n = {
                        getRegionalDateTime: (e, u, a = !0) => regionalDateTime.getRegionalDateTime(e, u, a),
                        getFormattedDateTime: (e, u, a = !0) => regionalDateTime.getFormattedDateTime(e, u, a),
                    };
            },
            814: (e, u, a) => {
                'use strict';
                var t = a(363),
                    r = a.n(t);
                const n = (e, u, a) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && a.extraLarge) ||
                          (u.largeHeight && a.large) ||
                          (u.mediumHeight && a.medium) ||
                          (u.smallHeight && a.small) ||
                          (u.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var s = a(768);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function o(e, u, a) {
                    const t = (function (e, u) {
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
                        })(e, a),
                        r = (function (e, u) {
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
                        })(u, a),
                        n = Math.min(t, r);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: t === a.extraLarge.weight,
                        largeWidth: t === a.large.weight,
                        mediumWidth: t === a.medium.weight,
                        smallWidth: t === a.small.weight,
                        extraSmallWidth: t === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                })(i || (i = {}));
                const c = s.O.client.getSize('rem'),
                    d = c.width,
                    m = c.height,
                    _ = Object.assign({ width: d, height: m }, o(d, m, l)),
                    E = (0, t.createContext)(_),
                    A = ['children'],
                    p = (e) => {
                        let u = e.children,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, A);
                        const r = (0, t.useContext)(E),
                            s = r.extraLarge,
                            l = r.large,
                            i = r.medium,
                            o = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            m = r.largeWidth,
                            _ = r.mediumWidth,
                            p = r.smallWidth,
                            g = r.extraSmallWidth,
                            F = r.extraLargeHeight,
                            h = r.largeHeight,
                            D = r.mediumHeight,
                            C = r.smallHeight,
                            b = r.extraSmallHeight,
                            B = { extraLarge: F, large: h, medium: D, small: C, extraSmall: b };
                        if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                            if (a.extraLarge && s) return u;
                            if (a.large && l) return u;
                            if (a.medium && i) return u;
                            if (a.small && o) return u;
                            if (a.extraSmall && c) return u;
                        } else {
                            if (a.extraLargeWidth && d) return n(u, a, B);
                            if (a.largeWidth && m) return n(u, a, B);
                            if (a.mediumWidth && _) return n(u, a, B);
                            if (a.smallWidth && p) return n(u, a, B);
                            if (a.extraSmallWidth && g) return n(u, a, B);
                            if (
                                !(
                                    a.extraLargeWidth ||
                                    a.largeWidth ||
                                    a.mediumWidth ||
                                    a.smallWidth ||
                                    a.extraSmallWidth
                                )
                            ) {
                                if (a.extraLargeHeight && F) return u;
                                if (a.largeHeight && h) return u;
                                if (a.mediumHeight && D) return u;
                                if (a.smallHeight && C) return u;
                                if (a.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                (p.defaultProps = {
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
                    (0, t.memo)(p);
                const g = ({ children: e }) => {
                    const u = (0, t.useContext)(E),
                        a = (0, t.useState)(u),
                        n = a[0],
                        i = a[1],
                        c = (0, t.useCallback)((e, u) => {
                            const a = s.O.view.pxToRem(e),
                                t = s.O.view.pxToRem(u);
                            i(Object.assign({ width: a, height: t }, o(a, t, l)));
                        }, []),
                        d = (0, t.useCallback)(() => {
                            const e = s.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const u = (0, t.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, t.useEffect)(
                            () => () => {
                                s.O.client.events.off('clientResized', c),
                                    s.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [c, d],
                        );
                    const m = (0, t.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(E.Provider, { value: m }, e);
                };
                var F = a(483),
                    h = a.n(F),
                    D = a(926),
                    C = a.n(D);
                let b, B, v;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const f = () => {
                        const e = (0, t.useContext)(E),
                            u = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: a };
                    },
                    y = ['children', 'className'];
                function w() {
                    return (
                        (w = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        w.apply(null, arguments)
                    );
                }
                const T = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL_WIDTH,
                        [B.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [B.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_HEIGHT,
                        [v.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [v.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [b.ExtraSmall]: '',
                        [b.Small]: C().SMALL,
                        [b.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [b.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [b.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let u = e.children,
                            a = e.className,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, y);
                        const n = f(),
                            s = n.mediaWidth,
                            l = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', w({ className: h()(a, T[s], N[l], M[i]) }, t), u);
                    },
                    k = ['children'],
                    S = (e) => {
                        let u = e.children,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, k);
                        return r().createElement(g, null, r().createElement(x, a, u));
                    };
                var I = a(533),
                    O = a.n(I);
                function L(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const P = {
                        playHighlight() {
                            L('highlight');
                        },
                        playClick() {
                            L('play');
                        },
                        playYes() {
                            L('yes1');
                        },
                    },
                    H = {
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
                    W = [
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
                function $() {
                    return (
                        ($ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        $.apply(null, arguments)
                    );
                }
                class z extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && L(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && L(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            a = e.onClick,
                            t = e.goto,
                            n = e.side,
                            s = e.type,
                            l = e.classNames,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var t in e)
                                        if ({}.hasOwnProperty.call(e, t)) {
                                            if (u.indexOf(t) >= 0) continue;
                                            a[t] = e[t];
                                        }
                                    return a;
                                })(e, W)),
                            _ = h()(H.base, H[`base__${s}`], H[`base__${n}`], null == l ? void 0 : l.base),
                            E = h()(H.icon, H[`icon__${s}`], H[`icon__${n}`], null == l ? void 0 : l.icon),
                            A = h()(H.glow, null == l ? void 0 : l.glow),
                            p = h()(H.caption, H[`caption__${s}`], null == l ? void 0 : l.caption),
                            g = h()(H.goto, null == l ? void 0 : l.goto);
                        return r().createElement(
                            'div',
                            $(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== s && r().createElement('div', { className: H.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: p }, u),
                            t && r().createElement('div', { className: g }, t),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var j = a(521),
                    U = a(916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function G(e = j.n.NONE, u = V, a = !1, r = !1) {
                    (0, t.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', t, a),
                                () => {
                                    window.removeEventListener('keydown', t, a);
                                }
                            );
                        function t(t) {
                            if (t.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(t), a && t.stopPropagation();
                            }
                        }
                    }, [u, e, a, r]);
                }
                const X = 'page_heading_3f',
                    Y = 'page_bg_f1',
                    q = ({ onClose: e, className: u }) => {
                        var a;
                        return (
                            (a = e),
                            G(j.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: h()('page_close_ca', u) },
                                r().createElement(z, {
                                    caption: R.strings.replays.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    K = () => {
                        const e = f(),
                            u = e.mediaSize,
                            a = e.remScreenHeight,
                            t = u >= b.Medium && a >= v.Large ? 'medium' : 'small';
                        return { size: t, isSmall: 'small' === t, isMedium: 'medium' === t };
                    };
                var Z = a(515);
                const Q = (e, u, a) => (a < e ? e : a > u ? u : a),
                    J = (e) => {
                        let u,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    (a = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== a && cancelAnimationFrame(a);
                            }
                        );
                    };
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var a = 0, t = Array(u); a < u; a++) t[a] = e[a];
                    return t;
                }
                const ue = [];
                function ae(e) {
                    const u = (0, t.useRef)(e);
                    return (
                        (0, t.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, t.useCallback)((...e) => (0, u.current)(...e), ue)
                    );
                }
                var te = a(30);
                let re;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(re || (re = {}));
                const ne = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                };
                let se, le;
                !(function (e) {
                    (e[(e.BestReplays = 0)] = 'BestReplays'),
                        (e[(e.MyReplays = 1)] = 'MyReplays'),
                        (e[(e.FindReplay = 2)] = 'FindReplay');
                })(se || (se = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(le || (le = {}));
                const ie = {
                        [se.BestReplays]: 'bestReplays',
                        [se.MyReplays]: 'myReplays',
                        [se.FindReplay]: 'findReplay',
                    },
                    oe = {
                        TABS: { context: 'model.sidebar' },
                        BEST_REPLAYS: { context: 'model.bestReplays' },
                        MY_REPLAYS: { context: 'model.myReplays' },
                        FIND_REPLAY: { context: 'model.findReplay' },
                    },
                    ce = {
                        settings: Object.assign({}, ne, {
                            animationConfig: Object.assign({}, ne.animationConfig, { round: 1 }),
                        }),
                    };
                function de() {
                    return !1;
                }
                const me = console.log;
                var _e = a(174);
                function Ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var a = 0, t = Array(u); a < u; a++) t[a] = e[a];
                    return t;
                }
                const Ae = (e) => (0 === e ? window : window.subViews.get(e)),
                    pe = () => (e, u) => {
                        const a = (0, t.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: l, children: i, mocks: o }) {
                                const c = (0, t.useRef)([]),
                                    d = (a, t, r) => {
                                        var n;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: a = Ae,
                                                context: t = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, a) => {
                                                        a.forEach((u) => {
                                                            const a = r.get(u);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const r = a(u),
                                                        n = t.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const a = e[u];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (a, n) => {
                                                        const i = 'string' == typeof n ? `${t}.${n}` : t,
                                                            o = s.O.view.addModelObserver(i, u, !0);
                                                        return r.set(o, a), e && a(l(n)), o;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, u) => {
                                                        const a = l(u);
                                                        return (...u) => {
                                                            a(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = l(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                a = (function (e, u) {
                                                                    var a =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (a) return (a = a.call(e)).next.bind(a);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (a = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Ee(e, u);
                                                                                var a = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === a &&
                                                                                        e.constructor &&
                                                                                        (a = e.constructor.name),
                                                                                    'Map' === a || 'Set' === a
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === a ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                a,
                                                                                            )
                                                                                          ? Ee(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        a && (e = a);
                                                                        var t = 0;
                                                                        return function () {
                                                                            return t >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[t++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = a()).done;

                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            i =
                                                'real' === a
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const t = null != u ? u : o(e),
                                                            r = _e.LO.box(t, { equals: de });
                                                        return (
                                                            'real' === a &&
                                                                i.subscribe(
                                                                    (0, _e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const t = null != u ? u : o(e),
                                                            r = _e.LO.box(t, { equals: de });
                                                        return (
                                                            'real' === a &&
                                                                i.subscribe(
                                                                    (0, _e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const t = o(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = _e.LO.box(t[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    i.subscribe(
                                                                        (0, _e.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [u, a]) => ((e[a] = _e.LO.box(t[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    i.subscribe(
                                                                        (0, _e.aD)((e) => {
                                                                            n.forEach(([u, a]) => {
                                                                                s[a].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: a, model: m, externalModel: i, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : u(_),
                                            externalModel: i,
                                            mode: a,
                                        };
                                    },
                                    m = (0, t.useRef)(!1),
                                    _ = (0, t.useState)(n),
                                    E = _[0],
                                    A = _[1],
                                    p = (0, t.useState)(() => d(n, l, o)),
                                    g = p[0],
                                    F = p[1];
                                return (
                                    (0, t.useEffect)(() => {
                                        m.current ? F(d(E, l, o)) : (m.current = !0);
                                    }, [o, E, l]),
                                    (0, t.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, t.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    r().createElement(a.Provider, { value: g }, i)
                                );
                            },
                            () => (0, t.useContext)(a),
                        ];
                    },
                    ge = pe()(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    Fe = ge[0],
                    he = ge[1];
                function De(e, u) {
                    var a;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (a = e[u]) ? void 0 : a.value;
                }
                const Ce = De;
                function be(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, a, t) => u(null == e ? void 0 : e.value, a, t));
                }
                function Be(e, u, a) {
                    if (Array.isArray(e)) return e.reduce(u, a);
                    let t = a;
                    for (let a = 0; a < e.length; a++) t = u(t, Ce(e, a), a, e);
                    return t;
                }
                var ve = a(946);
                const fe = R.images.server_side_replay.gui.maps.icons.metaTabs,
                    ye = (e, u) => {
                        const a = ie[e];
                        return u ? `${fe.$dyn(a)}` : `${fe.small.$dyn(a)}`;
                    },
                    we = pe()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), items: e.array('items') },
                                a = (0, ve.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: be(u.items.get(), ({ id: u, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: u, icon: ye(u, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: de },
                                );
                            return Object.assign({}, u, { computes: { tabs: a } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Te = we[0],
                    Ne = we[1],
                    Re = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Me = r().forwardRef(function ({ classNames: e, arrowRef: u, size: a = 'medium', className: t }, n) {
                        return r().createElement(
                            'div',
                            { className: h()(Re.base, Re[`base__${a}`], t), ref: n },
                            r().createElement('div', {
                                className: h()(
                                    Re.border,
                                    Re.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: h()(
                                    Re.border,
                                    Re.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: h()(Re.arrow, null == e ? void 0 : e.arrow),
                                ref: u,
                            }),
                        );
                    }),
                    xe = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    ke = { mouseEnter: 'highlight', click: 'play' },
                    Se = r().forwardRef(function (
                        {
                            id: e,
                            isActive: u,
                            className: a,
                            classNames: t,
                            sounds: n = ke,
                            notification: s,
                            icon: l,
                            size: i,
                            additionContent: o,
                            onClick: c,
                            onMouseEnter: d,
                            onMouseLeave: m,
                            WrapperElement: _,
                        },
                        E,
                    ) {
                        const A = (e, a) => {
                                !u && n[a] && L(n[a]);
                            },
                            p = r().createElement(
                                'div',
                                {
                                    className: h()(
                                        xe.base,
                                        xe[`base__${i}`],
                                        u && h()(xe.base__active, null == t ? void 0 : t.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        A(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        A(0, 'mouseEnter'), null == d || d(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        A(0, 'mouseLeave'), null == m || m(e);
                                    })(e),
                                    ref: u ? E : null,
                                },
                                r().createElement('div', {
                                    className: h()(xe.highlight, null == t ? void 0 : t.highlight),
                                }),
                                'function' == typeof l && i
                                    ? l(i)
                                    : r().createElement('div', {
                                          className: h()(xe.icon, xe[`icon__${i}`], null == t ? void 0 : t.icon),
                                          style: { backgroundImage: `url(${l})` },
                                      }),
                                o && o({ id: e, size: i, isActive: u }),
                                s &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                xe.notification,
                                                xe[`notification__${s.type}`],
                                                s.size ? xe[`notification__${s.size}`] : xe.notification__medium,
                                                null == t ? void 0 : t.notification,
                                            ),
                                        },
                                        'dot' !== s.type && s.value,
                                    ),
                            );
                        return _ ? r().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    Ie = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    Oe = r().memo(function ({
                        active: e,
                        tabs: u,
                        sounds: a,
                        className: n,
                        classNames: l,
                        size: i = 'medium',
                        additionContent: o,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const E = (0, t.useRef)(null),
                            A = (0, t.useRef)(null),
                            p = (0, t.useRef)(null),
                            g = (0, t.useRef)(null),
                            F = (0, te.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const u = E.current;
                                    u && (u.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            D = (0, te.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const u = E.current;
                                    u && (u.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            C = (0, te.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const u = A.current;
                                    u &&
                                        (u.style.transform = `translateY(${e.value.position / s.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    F.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        D.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    F.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        D.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            b = (0, t.useCallback)((e) => {
                                null !== p.current &&
                                    null !== g.current &&
                                    e(p.current.getBoundingClientRect().top - g.current.getBoundingClientRect().top);
                            }, []);
                        return (
                            (0, t.useEffect)(() => {
                                b((e) => {
                                    C.start({ position: e, config: { duration: 200 } });
                                });
                            }, [C, e, b]),
                            (0, t.useEffect)(
                                () =>
                                    J(() => {
                                        b((e) => {
                                            C.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [C, b, i],
                            ),
                            r().createElement(
                                'div',
                                { className: h()(Ie.base, n), ref: g },
                                u.map(({ id: u, items: t, title: n, groupClassNames: s }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: u,
                                            className: h()(Ie.group, Ie[`group__${i}`], null == s ? void 0 : s.group),
                                        },
                                        n &&
                                            r().createElement(
                                                'div',
                                                { className: h()(Ie.title, null == s ? void 0 : s.title) },
                                                n,
                                            ),
                                        t.map(({ id: u, icon: t, notification: n }) =>
                                            r().createElement(Se, {
                                                key: u,
                                                id: u,
                                                icon: t,
                                                notification: n,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === u,
                                                size: i,
                                                className: null == l ? void 0 : l.tab,
                                                classNames: l,
                                                additionContent: o,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(Me, {
                                    arrowRef: E,
                                    ref: A,
                                    size: i,
                                    className: null == l ? void 0 : l.frame,
                                    classNames: l,
                                }),
                            )
                        );
                    }),
                    Le = [
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
                function Pe(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                a.number = u;
                                break;
                            case 'boolean':
                                a.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = u.toString();
                        }
                        return a;
                    });
                }
                const He = (e, u, a = {}, t = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: t,
                                },
                                a,
                            ),
                        );
                    },
                    We = (e) => {
                        let u = e.children,
                            a = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            l = e.onMouseDown,
                            i = e.onClick,
                            o = e.ignoreShowDelay,
                            c = void 0 !== o && o,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            p = void 0 === A || A,
                            g = e.targetId,
                            F = void 0 === g ? 0 : g,
                            h = e.onShow,
                            D = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, Le);
                        const b = (0, t.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, t.useMemo)(
                                () =>
                                    F ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let a,
                                            t = R.invalid('resId'),
                                            r = '';
                                        var n;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (n = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) ||
                                                    ''),
                                                (a = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (t = window.subViews[a].id)),
                                            { callerUrl: r, caller: a, stack: u, resId: t }
                                        );
                                    })().resId,
                                [F],
                            ),
                            v = (0, t.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (He(a, E, { isMouseEvent: !0, on: !0, arguments: Pe(r) }, B),
                                    h && h(),
                                    (b.current.isVisible = !0));
                            }, [a, E, r, B, h]),
                            f = (0, t.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        He(a, E, { on: !1 }, B),
                                        b.current.isVisible && D && D(),
                                        (b.current.isVisible = !1);
                                }
                            }, [a, E, B, D]),
                            y = (0, t.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, t.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, t.useEffect)(() => {
                                !1 === p && f();
                            }, [p, f]),
                            (0, t.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            p
                                ? (0, t.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === m && f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === m && f(), null == l || l(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    $e = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ze() {
                    return (
                        (ze = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        ze.apply(null, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    Ue = (e) => {
                        let u = e.children,
                            a = e.body,
                            n = e.header,
                            s = e.note,
                            l = e.alert,
                            i = e.args,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, $e);
                        const c = (0, t.useMemo)(() => {
                            const e = Object.assign({}, i, { body: a, header: n, note: s, alert: l });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [l, a, n, s, i]);
                        return r().createElement(
                            We,
                            ze(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            u,
                        );
                        var d;
                    },
                    Ve = R.strings.replays.sidebar.tabs.tooltip,
                    Ge = ({ children: e, id: u }) => {
                        const a = ie[u];
                        return r().createElement(Ue, { header: `${Ve.header.$dyn(a)}`, body: `${Ve.body.$dyn(a)}` }, e);
                    },
                    Xe = (0, Z.Pi)(({ pageView: e, className: u }) => {
                        const a = Ne(),
                            n = a.model,
                            s = a.controls,
                            l = K(),
                            i = (0, t.useCallback)((e) => s.changeSidebarTab(e), [s]),
                            o = n.computes.tabs(l.isMedium);
                        return r().createElement(Oe, {
                            tabs: o,
                            onClick: i,
                            active: e,
                            size: l.size,
                            className: u,
                            classNames: { icon: h()('Tabs_icon_d9', l.isMedium && 'Tabs_icon__medium_c1') },
                            WrapperElement: Ge,
                        });
                    }),
                    Ye = {
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
                let qe, Ke;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(qe || (qe = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Ke || (Ke = {}));
                const Ze = ({
                    children: e,
                    size: u,
                    isFocused: a,
                    type: n,
                    disabled: s,
                    mixClass: l,
                    soundHover: i,
                    soundClick: o,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const p = (0, t.useRef)(null),
                        g = (0, t.useState)(a),
                        F = g[0],
                        D = g[1],
                        C = (0, t.useState)(!1),
                        b = C[0],
                        B = C[1];
                    return (
                        (0, t.useEffect)(() => {
                            function e(e) {
                                F && null !== p.current && !p.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, t.useEffect)(() => {
                            D(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: h()(
                                    Ye.base,
                                    Ye[`base__${n}`],
                                    s && Ye.base__disabled,
                                    u && Ye[`base__${u}`],
                                    F && Ye.base__focus,
                                    b && Ye.base__highlightActive,
                                    l,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== i && L(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (_ && _(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== o && L(o),
                                        m && m(e),
                                        a && (s || (p.current && (p.current.focus(), D(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (E && E(e), B(!1));
                                },
                                onClick: function (e) {
                                    s || (A && A(e));
                                },
                            },
                            n !== qe.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Ye.back }),
                                    r().createElement('span', { className: Ye.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: h()(Ye.state, Ye.state__default) },
                                r().createElement('span', { className: Ye.stateDisabled }),
                                r().createElement('span', { className: Ye.stateHighlightHover }),
                                r().createElement('span', { className: Ye.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Ye.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ze.defaultProps = { type: qe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Qe = Ze,
                    Je = R.strings.replays.table.error,
                    eu = ({ isLoading: e, onRefresh: u, className: a }) => {
                        const t = f().mediaSize;
                        return r().createElement(
                            'div',
                            { className: h()('ErrorState_base_c8', a) },
                            r().createElement(
                                'div',
                                { className: 'ErrorState_titleContainer_5f' },
                                r().createElement('div', { className: 'ErrorState_alertIcon_c1' }),
                                r().createElement('div', { className: 'ErrorState_title_60' }, Je.title()),
                            ),
                            r().createElement('div', { className: 'ErrorState_description_62' }, Je.description()),
                            r().createElement(
                                'div',
                                { className: 'ErrorState_buttonWrapper_c3' },
                                r().createElement(
                                    Qe,
                                    {
                                        type: qe.secondary,
                                        disabled: e,
                                        size: ((n = t), n >= b.Medium ? Ke.medium : Ke.small),
                                        mixClass: 'ErrorState_button_6a',
                                        onClick: u,
                                    },
                                    Je.buttonText(),
                                ),
                            ),
                        );
                        var n;
                    },
                    uu = ({ children: e, className: u }) =>
                        r().createElement('div', { className: h()('Heading_base_48', u) }, e),
                    au = (({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: s,
                    }) => {
                        const l = (e, a) => {
                            const t = u(e),
                                r = t[0],
                                n = t[1];
                            return n <= r ? 0 : Q(r, n, a);
                        };
                        return (i = {}) => {
                            const o = i.settings,
                                c = void 0 === o ? ne : o,
                                d = (0, t.useRef)(null),
                                m = (0, t.useRef)(null),
                                _ = (0, t.useRef)(!1),
                                E = (() => {
                                    const e = (0, t.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        a = (e, a) => {
                                            u(e).set(a, a);
                                        },
                                        r = (e, a) => {
                                            u(e).delete(a);
                                        },
                                        n = (e, ...a) => {
                                            for (
                                                var t,
                                                    r = (function (e, u) {
                                                        var a =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (a) return (a = a.call(e)).next.bind(a);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (a = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ee(e, u);
                                                                    var a = {}.toString.call(e).slice(8, -1);
                                                                    return (
                                                                        'Object' === a &&
                                                                            e.constructor &&
                                                                            (a = e.constructor.name),
                                                                        'Map' === a || 'Set' === a
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === a ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    a,
                                                                                )
                                                                              ? ee(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            a && (e = a);
                                                            var t = 0;
                                                            return function () {
                                                                return t >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[t++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(t = r()).done;

                                            )
                                                (0, t.value)(...a);
                                        };
                                    return (0, t.useMemo)(() => ({ on: a, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, a) {
                                    const r = (0, t.useMemo)(
                                        () =>
                                            (function (e, u, a, t) {
                                                let r,
                                                    n = !1,
                                                    s = 0;
                                                function l() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const o = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        (s = Date.now()), a.apply(o, i);
                                                    }
                                                    n ||
                                                        (t && !r && d(),
                                                        l(),
                                                        void 0 === t && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  t
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === t ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((t = a), (a = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        l(), (n = !0);
                                                    }),
                                                    i
                                                );
                                            })(a, e),
                                        u,
                                    );
                                    return (0, t.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, te.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (a(u, e), E.trigger('change', e), s && _.current && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                g = p[0],
                                F = p[1],
                                h = (0, t.useCallback)(
                                    (e, u, a) => {
                                        var t;
                                        const r = g.scrollPosition.get(),
                                            n = (null != (t = g.scrollPosition.goal) ? t : 0) - r;
                                        return l(e, u * a + n + r);
                                    },
                                    [g.scrollPosition],
                                ),
                                D = (0, t.useCallback)(
                                    (e, { immediate: u = !1, reset: a = !0 } = {}) => {
                                        const t = d.current;
                                        t &&
                                            F.start({
                                                scrollPosition: l(t, e),
                                                immediate: u,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: l(t, g.scrollPosition.get()) },
                                            });
                                    },
                                    [F, c.animationConfig, g.scrollPosition],
                                ),
                                C = (0, t.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            a = m.current;
                                        if (!u || !a) return;
                                        const t = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(a, c.step),
                                            r = h(u, e, t);
                                        D(r);
                                    },
                                    [D, h, c.step],
                                ),
                                b = (0, t.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(r(e)),
                                            d.current && E.trigger('mouseWheel', e, g.scrollPosition, u(d.current));
                                    },
                                    [g.scrollPosition, C, E],
                                ),
                                B = ((e, u = []) => {
                                    const a = (0, t.useRef)(),
                                        r = (0, t.useCallback)((...u) => {
                                            a.current && a.current(), (a.current = e(...u));
                                        }, u);
                                    return (
                                        (0, t.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        J(() => {
                                            const e = d.current;
                                            e &&
                                                (D(l(e, g.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [D, g.scrollPosition.goal],
                                ),
                                v = ae(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = l(e, g.scrollPosition.goal);
                                    u !== g.scrollPosition.goal && D(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, t.useEffect)(
                                    () => (
                                        window.addEventListener('resize', B),
                                        () => {
                                            window.removeEventListener('resize', B);
                                        }
                                    ),
                                    [B],
                                ),
                                (0, t.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const u = () => {
                                            _.current = !0;
                                        },
                                        a = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', a),
                                        () => {
                                            e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', a);
                                        }
                                    );
                                }, [d]),
                                (0, t.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: l,
                                        handleMouseWheel: b,
                                        applyScroll: D,
                                        applyStepTo: C,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: F,
                                        animationScroll: g,
                                        recalculateContent: v,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [g.scrollPosition, D, C, E.off, E.on, v, b, F, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    })({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? re.Next : re.Prev),
                    }),
                    tu = ({ message: e, className: u, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: h()('Spinner_base_87', u) },
                            e &&
                                r().createElement(
                                    'div',
                                    { className: h()('Spinner_caption_cf', null == a ? void 0 : a.caption) },
                                    e,
                                ),
                            r().createElement('div', {
                                className: h()('Spinner_gear_c4', null == a ? void 0 : a.gear),
                            }),
                            r().createElement('div', {
                                className: h()('Spinner_logo_bf', null == a ? void 0 : a.logo),
                            }),
                        );
                let ru, nu;
                !(function (e) {
                    (e.EarnedXp = 'earnedXp'),
                        (e.DamageDealt = 'damageDealt'),
                        (e.DamageAssisted = 'damageAssisted'),
                        (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                        (e.Kills = 'kills'),
                        (e.MarksOfMastery = 'marksOfMastery'),
                        (e.Date = 'date');
                })(ru || (ru = {})),
                    (function (e) {
                        (e[(e.Initial = 0)] = 'Initial'),
                            (e[(e.Success = 1)] = 'Success'),
                            (e[(e.Error = 2)] = 'Error');
                    })(nu || (nu = {}));
                const su = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
                    lu =
                        (R.strings.replays.filterPanel.counter.reset.header(),
                        R.strings.replays.filterPanel.counter.reset.body(),
                        R.strings.replays.filterPanel.counter.apply.header(),
                        R.strings.replays.filterPanel.counter.apply.body(),
                        'BestReplaysPage_base_ac');
                var iu = a(281);
                let ou;
                function cu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ou || (ou = {}));
                const du = (e) => e.replace(/&nbsp;/g, ' '),
                    mu = (e, u, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + u];
                        }
                        return [...e, u];
                    },
                    _u = (e, u, a) => {
                        if (0 === a) return [u];
                        if (a % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const a = e.pop();
                            return [...e, a + u];
                        }
                    },
                    Eu = (e, u, a = ou.left) => e.split(u).reduce(a === ou.left ? mu : _u, []),
                    Au = (() => {
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
                    pu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    gu = ({ binding: e, text: u = '', classMix: a, alignment: n = ou.left, formatWithBrackets: s }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const l = s && e ? ((i = e), u.replace(/\{\w+\}/g, (e) => String(i[e.slice(1, -1)]))) : u;
                        var i;
                        return r().createElement(
                            t.Fragment,
                            null,
                            l.split('\n').map((u, s) =>
                                r().createElement(
                                    'div',
                                    { className: h()('FormatText_base_d0', a), key: `${u}-${s}` },
                                    ((e, u, a) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            a && e in a
                                                ? a[e]
                                                : ((e, u = ou.left) => {
                                                      const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return pu.includes(a)
                                                          ? Au(e)
                                                          : 'ja' === a
                                                            ? (0, iu.D4)()
                                                                  .parse(e)
                                                                  .map((e) => du(e))
                                                            : ((e, u = ou.left) => {
                                                                  let a = [];
                                                                  const t =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = du(e);
                                                                  return (
                                                                      Eu(r, /( )/, u).forEach(
                                                                          (e) => (a = a.concat(Eu(e, t, ou.left))),
                                                                      ),
                                                                      a
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, n, e).map((e, u) =>
                                        r().createElement(t.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Fu = R.strings.replays.table.noRecords,
                    hu = ({ isLoading: e, onResetFilter: u, className: a }) =>
                        r().createElement(
                            'div',
                            { className: h()('NoRecordsState_base_a8', a) },
                            r().createElement(
                                'div',
                                { className: 'NoRecordsState_titleContainer_66' },
                                r().createElement('div', { className: 'NoRecordsState_icon_46' }),
                                r().createElement(gu, { text: Fu.title(), classMix: 'NoRecordsState_title_6a' }),
                            ),
                            r().createElement(
                                Ue,
                                { header: String(Fu.tooltip.header()), body: String(Fu.tooltip.body()) },
                                r().createElement(
                                    'div',
                                    { className: 'NoRecordsState_buttonWrapper_9a' },
                                    r().createElement(
                                        Qe,
                                        {
                                            type: qe.primary,
                                            disabled: e,
                                            size: Ke.small,
                                            mixClass: 'NoRecordsState_button_b5',
                                            onClick: u,
                                        },
                                        Fu.buttonText(),
                                    ),
                                ),
                            ),
                        ),
                    Du = 'VerticalBar_base__nonActive_42',
                    Cu = 'disable',
                    bu = () => {},
                    Bu = { pending: !1, offset: 0 },
                    vu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    fu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    yu = (e, u) => Math.max(20, e.offsetHeight * u),
                    wu = (0, t.memo)(({ api: e, classNames: u = {}, getStepByRailClick: a = vu, onDrag: n = bu }) => {
                        const l = (0, t.useRef)(null),
                            i = (0, t.useRef)(null),
                            o = (0, t.useRef)(null),
                            c = (0, t.useRef)(null),
                            d = (0, t.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, t.useState)(Bu),
                            E = _[0],
                            A = _[1],
                            p = (0, t.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            g = ae(() => {
                                const u = d.current,
                                    a = c.current,
                                    t = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(t && r && u && a)) return;
                                const n = Math.min(1, t / r);
                                return (
                                    (u.style.height = `${yu(a, n)}px`),
                                    (u.style.display = 'flex'),
                                    l.current &&
                                        (1 === n ? l.current.classList.add(Du) : l.current.classList.remove(Du)),
                                    n
                                );
                            }),
                            F = ae(() => {
                                const u = c.current,
                                    a = d.current,
                                    t = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(t && u && a && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, t / r),
                                    l = Q(0, 1, n / (r - t)),
                                    m = (u.offsetHeight - yu(u, s)) * l;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Cu), void o.current.classList.remove(Cu);
                                            if (
                                                ((u = c.current),
                                                (a = d.current),
                                                e - (u.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Cu), void o.current.classList.add(Cu);
                                            var u, a;
                                            i.current.classList.remove(Cu), o.current.classList.remove(Cu);
                                        }
                                    })(m);
                            }),
                            D = ae(() => {
                                fu(e, () => {
                                    g(), F();
                                });
                            });
                        (0, t.useEffect)(() => J(D)),
                            (0, t.useEffect)(() => {
                                const u = () => {
                                    fu(e, () => {
                                        F();
                                    });
                                };
                                let a = bu;
                                const t = () => {
                                    a(), (a = J(D));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', t),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', t);
                                    }
                                );
                            }, [e]),
                            (0, t.useEffect)(() => {
                                if (!E.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        p(Bu);
                                    }),
                                    a = s.O.client.events.mouse.move(([u]) => {
                                        fu(e, (a) => {
                                            const t = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!t || !r || !s) return;
                                            const l = u.screenY - E.offset - t.getBoundingClientRect().y,
                                                i = (l / t.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: l, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), a();
                                };
                            }, [e, E.offset, E.pending, n, p]);
                        const C = (function (e, u, a = []) {
                                const r = (0, t.useRef)(0),
                                    n = (0, t.useCallback)(() => window.clearInterval(r.current), a || []);
                                (0, t.useEffect)(() => n, [n]);
                                const s = (null != a ? a : []).concat([u]);
                                return [
                                    (0, t.useCallback)((a) => {
                                        (r.current = window.setInterval(() => e(a, !0), u)), e(a, !1);
                                    }, s),
                                    n,
                                ];
                            })((u) => e.applyStepTo(u), m, [e]),
                            b = C[0],
                            B = C[1];
                        (0, t.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Cu) || L('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: h()('VerticalBar_base_f3', u.base), ref: l, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: h()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Cu) || 0 !== e.button || (L('play'), b(re.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: h()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const t = d.current;
                                        var r;
                                        t &&
                                            0 === u.button &&
                                            (L('play'),
                                            u.target === t
                                                ? p({ pending: !0, offset: u.screenY - t.getBoundingClientRect().y })
                                                : ((r = u.screenY > t.getBoundingClientRect().y ? re.Prev : re.Next),
                                                  d.current &&
                                                      fu(e, (u) => {
                                                          if (!u) return;
                                                          const t = a(e),
                                                              n = e.clampPosition(u, u.scrollTop + t * r);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                r().createElement('div', { ref: d, className: h()('VerticalBar_thumb_32', u.thumb) }),
                                r().createElement('div', { className: h()('VerticalBar_rail_43', u.rail) }),
                            ),
                            r().createElement('div', {
                                className: h()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Cu) || 0 !== e.button || (L('play'), b(re.Prev));
                                },
                                onMouseUp: B,
                                ref: o,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Tu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Nu = ({ className: e, classNames: u, children: a, api: n }) => (
                        (0, t.useEffect)(() => J(n.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: h()(Tu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: h()(Tu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                a,
                            ),
                        )
                    );
                Nu.Default = ({
                    children: e,
                    api: u,
                    className: a,
                    barClassNames: n,
                    areaClassName: s,
                    scrollClassName: l,
                    scrollClassNames: i,
                    getStepByRailClick: o,
                    onDrag: c,
                }) => {
                    const d = (0, t.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: h()(Tu.base, e.base) });
                        }, [n]),
                        m = (0, t.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return r().createElement(
                        'div',
                        { className: h()(Tu.defaultScroll, a), onWheel: u.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: h()(Tu.area, s) },
                            r().createElement(Nu, { className: l, classNames: i, api: m }, e),
                        ),
                        r().createElement(wu, { getStepByRailClick: o, api: u, onDrag: c, classNames: d }),
                    );
                };
                const Ru = {
                        base: 'TableHeader_base_7c',
                        cell: 'TableHeader_cell_12',
                        cell__favorite: 'TableHeader_cell__favorite_9f',
                        cell__map: 'TableHeader_cell__map_34',
                        cell__player: 'TableHeader_cell__player_73',
                        cell__date: 'TableHeader_cell__date_48',
                        cell__vehicle: 'TableHeader_cell__vehicle_9f',
                        cell__param: 'TableHeader_cell__param_92',
                        cell__earnedXp: 'TableHeader_cell__earnedXp_f6',
                        cell__damageDealt: 'TableHeader_cell__damageDealt_9b',
                        cell__damageAssisted: 'TableHeader_cell__damageAssisted_b4',
                        cell__damageBlockedByArmor: 'TableHeader_cell__damageBlockedByArmor_db',
                        cell__kills: 'TableHeader_cell__kills_28',
                        cellContent: 'TableHeader_cellContent_7a',
                        highlightContainer: 'TableHeader_highlightContainer_8b',
                        highlight: 'TableHeader_highlight_34',
                        highlightContainer__active: 'TableHeader_highlightContainer__active_84',
                        arrow: 'TableHeader_arrow_5c',
                        separator: 'TableHeader_separator_44',
                        icon: 'TableHeader_icon_a2',
                        icon__earnedXp: 'TableHeader_icon__earnedXp_2a',
                        icon__damageDealt: 'TableHeader_icon__damageDealt_b1',
                        icon__damageAssisted: 'TableHeader_icon__damageAssisted_d6',
                        icon__damageBlockedByArmor: 'TableHeader_icon__damageBlockedByArmor_d2',
                        icon__kills: 'TableHeader_icon__kills_e3',
                        icon__markOfMastery: 'TableHeader_icon__markOfMastery_01',
                        icon__epicMedals: 'TableHeader_icon__epicMedals_da',
                    },
                    Mu = R.strings.replays.table.header,
                    xu = R.strings.replays.table.tooltip,
                    ku = ({ selectedSorting: e, type: u, onSort: a, className: t }) =>
                        r().createElement(
                            'div',
                            { className: h()(Ru.base, t) },
                            r().createElement('div', { className: h()(Ru.cell, Ru.cell__favorite) }),
                            r().createElement(
                                Ue,
                                { header: xu.map.header(), body: xu.map.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(Ru.cell, Ru.cell__map) },
                                    Mu.map(),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.vehicle.header(), body: xu.vehicle.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(Ru.cell, Ru.cell__vehicle) },
                                    Mu.vehicle(),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            'best' === u &&
                                r().createElement(
                                    Ue,
                                    { header: xu.player.header(), body: xu.player.body() },
                                    r().createElement(
                                        'div',
                                        { className: h()(Ru.cell, Ru.cell__player) },
                                        r().createElement('div', { className: Ru.cellContent }, Mu.player()),
                                        r().createElement('div', { className: Ru.separator }),
                                    ),
                                ),
                            r().createElement(
                                Ue,
                                { header: xu.date.header(), body: xu.date.body() },
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(Ru.cell, Ru.cell__date),
                                        onClick: () => (null == a ? void 0 : a(ru.Date)),
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Ru.highlightContainer,
                                                e === ru.Date && Ru.highlightContainer__active,
                                            ),
                                        },
                                        r().createElement('div', { className: Ru.arrow }),
                                        r().createElement('div', { className: Ru.highlight }),
                                    ),
                                    r().createElement('div', { className: Ru.cellContent }, Mu.date()),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.earnedXp.header(), body: xu.earnedXp.body() },
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(Ru.cell, Ru.cell__param, Ru.cell__earnedXp),
                                        onClick: () => (null == a ? void 0 : a(ru.EarnedXp)),
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Ru.highlightContainer,
                                                e === ru.EarnedXp && Ru.highlightContainer__active,
                                            ),
                                        },
                                        r().createElement('div', { className: Ru.arrow }),
                                        r().createElement('div', { className: Ru.highlight }),
                                    ),
                                    r().createElement('div', { className: h()(Ru.icon, Ru.icon__earnedXp) }),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.damageDealt.header(), body: xu.damageDealt.body() },
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(Ru.cell, Ru.cell__param, Ru.cell__damageDealt),
                                        onClick: () => (null == a ? void 0 : a(ru.DamageDealt)),
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Ru.highlightContainer,
                                                e === ru.DamageDealt && Ru.highlightContainer__active,
                                            ),
                                        },
                                        r().createElement('div', { className: Ru.arrow }),
                                        r().createElement('div', { className: Ru.highlight }),
                                    ),
                                    r().createElement('div', { className: h()(Ru.icon, Ru.icon__damageDealt) }),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.damageAssisted.header(), body: xu.damageAssisted.body() },
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(Ru.cell, Ru.cell__param, Ru.cell__damageAssisted),
                                        onClick: () => (null == a ? void 0 : a(ru.DamageAssisted)),
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Ru.highlightContainer,
                                                e === ru.DamageAssisted && Ru.highlightContainer__active,
                                            ),
                                        },
                                        r().createElement('div', { className: Ru.arrow }),
                                        r().createElement('div', { className: Ru.highlight }),
                                    ),
                                    r().createElement('div', { className: h()(Ru.icon, Ru.icon__damageAssisted) }),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.damageBlockedByArmor.header(), body: xu.damageBlockedByArmor.body() },
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(Ru.cell, Ru.cell__param, Ru.cell__damageBlockedByArmor),
                                        onClick: () => (null == a ? void 0 : a(ru.DamageBlockedByArmor)),
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Ru.highlightContainer,
                                                e === ru.DamageBlockedByArmor && Ru.highlightContainer__active,
                                            ),
                                        },
                                        r().createElement('div', { className: Ru.arrow }),
                                        r().createElement('div', { className: Ru.highlight }),
                                    ),
                                    r().createElement('div', {
                                        className: h()(Ru.icon, Ru.icon__damageBlockedByArmor),
                                    }),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.kills.header(), body: xu.kills.body() },
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(Ru.cell, Ru.cell__param, Ru.cell__kills),
                                        onClick: () => (null == a ? void 0 : a(ru.Kills)),
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                Ru.highlightContainer,
                                                e === ru.Kills && Ru.highlightContainer__active,
                                            ),
                                        },
                                        r().createElement('div', { className: Ru.arrow }),
                                        r().createElement('div', { className: Ru.highlight }),
                                    ),
                                    r().createElement('div', { className: h()(Ru.icon, Ru.icon__kills) }),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.marksOfMastery.header(), body: xu.marksOfMastery.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(Ru.cell, Ru.cell__param, Ru.cell__markOfMastery) },
                                    r().createElement('div', { className: h()(Ru.icon, Ru.icon__markOfMastery) }),
                                    r().createElement('div', { className: Ru.separator }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: xu.epicMedals.header(), body: xu.epicMedals.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(Ru.cell, Ru.cell__param, Ru.cell__epicMedals) },
                                    r().createElement('div', { className: h()(Ru.icon, Ru.icon__epicMedals) }),
                                ),
                            ),
                        ),
                    Su = 'Table_shadowsContainer_01',
                    Iu = 'Table_shadow_e0',
                    Ou = 'Table_shadow__left_96',
                    Lu = 'Table_shadow__center_a4',
                    Pu = 'Table_shadow__right_a5',
                    Hu = 'Table_bar_0f',
                    Wu = (0, Z.Pi)(
                        ({
                            api: e,
                            selectedSorting: u,
                            onSort: a,
                            type: n,
                            children: l,
                            className: i,
                            classNames: o,
                        }) => {
                            var c, d, m;
                            const _ = e.applyScroll,
                                E = e.events,
                                A = (0, t.useCallback)(
                                    (e) => {
                                        null == a || a(e), _(0);
                                    },
                                    [_, a],
                                );
                            return (
                                (0, t.useEffect)(() => {
                                    const e = () => {
                                        s.O.view.sendEvent.close('popover');
                                    };
                                    return E.on('start', e), () => E.off('start', e);
                                }, [E]),
                                r().createElement(
                                    'div',
                                    { className: h()('Table_base_77', i) },
                                    r().createElement(ku, {
                                        selectedSorting: u,
                                        onSort: A,
                                        className: null == o ? void 0 : o.header,
                                        type: n,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'Table_content_20' },
                                        r().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Su,
                                                    null == o || null == (c = o.shadowsContainer) ? void 0 : c.top,
                                                ),
                                            },
                                            r().createElement('div', { className: h()(Iu, Ou) }),
                                            r().createElement('div', { className: h()(Iu, Lu) }),
                                            r().createElement('div', { className: h()(Iu, Pu) }),
                                        ),
                                        r().createElement(Nu, { api: e, className: 'Table_area_6a' }, l),
                                        r().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Su,
                                                    'Table_shadowsContainer__bottom_e4',
                                                    null == o || null == (d = o.shadowsContainer) ? void 0 : d.bottom,
                                                ),
                                            },
                                            r().createElement('div', { className: h()(Iu, Ou) }),
                                            r().createElement('div', { className: h()(Iu, Lu) }),
                                            r().createElement('div', { className: h()(Iu, Pu) }),
                                        ),
                                        r().createElement(wu, {
                                            api: e,
                                            classNames: Object.assign({}, null == o ? void 0 : o.bar, {
                                                base: h()(Hu, null == o || null == (m = o.bar) ? void 0 : m.base),
                                            }),
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    $u = 'NationFlag_nationFlag_69',
                    zu = R.images.gui.maps.icons.eventBoards.flagsTank,
                    ju = ({ nation: e, isSingle: u = !1, className: a }) =>
                        r().createElement(
                            'div',
                            { className: h()('NationFlag_base_9f', a) },
                            r().createElement('div', {
                                className: $u,
                                style: { backgroundImage: `url(${zu.$dyn(e)})` },
                            }),
                            !u &&
                                r().createElement('div', {
                                    className: $u,
                                    style: { backgroundImage: `url(${zu.$dyn(e)})` },
                                }),
                        );
                class Uu extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? U.B3.GOLD : U.B3.INTEGRAL;
                        const u = U.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Uu.defaultProps = { format: 'integral' };
                const Vu = ({ param: e, value: u, className: a }) =>
                        r().createElement(
                            'div',
                            { className: h()('StatsParam_base_b0', a) },
                            r().createElement('div', {
                                className: 'StatsParam_image_c2',
                                style: {
                                    backgroundImage: `url(${R.images.server_side_replay.gui.maps.icons.params.$dyn(e)})`,
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: 'StatsParam_info_e5' },
                                r().createElement(gu, {
                                    text: String(R.strings.replays.statsParam.$dyn(e)),
                                    classMix: 'StatsParam_paramDescription_47',
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'StatsParam_paramValue_07' },
                                    r().createElement(Uu, { value: u }),
                                ),
                            ),
                        ),
                    Gu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Xu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Yu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    qu = {
                        base: 'VehicleName_base_81',
                        base__24x24: 'VehicleName_base__24x24_18',
                        base__24x24_metal: 'VehicleName_base__24x24_metal_20',
                        base__48x48: 'VehicleName_base__48x48_fc',
                        base__64x64: 'VehicleName_base__64x64_cf',
                        base__83x74: 'VehicleName_base__83x74_b0',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_7e',
                        base__60x54: 'VehicleName_base__60x54_eb',
                        vehicleType: 'VehicleName_vehicleType_14',
                    };
                let Ku;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(Ku || (Ku = {}));
                const Zu = R.images.gui.maps.icons.vehicleTypes,
                    Qu = (e) => {
                        switch (e) {
                            case Ku.x80:
                                return Zu.large;
                            case Ku.x83:
                                return Zu.big;
                            case Ku.x180:
                                return Zu.huge;
                            default:
                                return Zu.$dyn(`c_${e}`);
                        }
                    },
                    Ju = (0, t.memo)(
                        ({
                            name: e,
                            tier: u,
                            type: a,
                            size: t = Ku.x24Metal,
                            typeIconFolderPath: n = Qu(t),
                            isPremium: s = !1,
                            className: l,
                            classNames: i,
                        }) => {
                            const o = `${cu(a)}${s ? '_elite' : ''}`;
                            return r().createElement(
                                'div',
                                { className: h()(qu.base, qu[`base__${t}`], l) },
                                r().createElement(
                                    'div',
                                    { className: null == i ? void 0 : i.level },
                                    ((c = u),
                                    Yu
                                        ? `${c}`
                                        : (function (e) {
                                              let u = '';
                                              for (let a = Xu.length - 1; a >= 0; a--)
                                                  for (; e >= Xu[a]; ) (u += Gu[a]), (e -= Xu[a]);
                                              return u;
                                          })(c)),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            qu.vehicleTypeContainer,
                                            null == i ? void 0 : i.vehicleTypeContainer,
                                        ),
                                    },
                                    r().createElement('div', {
                                        className: h()(qu.vehicleType, null == i ? void 0 : i.type),
                                        style: { backgroundImage: `url(${null == n ? void 0 : n.$dyn(o)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: h()(qu.shortName, null == i ? void 0 : i.shortName) },
                                    e,
                                ),
                            );
                            var c;
                        },
                    );
                let ea;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(ea || (ea = {}));
                var ua = a(613);
                Date.now();
                const aa = ua.Ew.getRegionalDateTime,
                    ta = ua.Ew.getFormattedDateTime,
                    ra = (0, t.memo)(({ datetime: e, format: u = ea.ShortDate, isConvertedToLocal: a = !0 }) =>
                        Object.values(ea).includes(u) ? aa(e, u, a) : ta(e, u, a),
                    );
                let na;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(na || (na = {}));
                const sa = ['content', 'classMix', 'className'];
                function la() {
                    return (
                        (la = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        la.apply(null, arguments)
                    );
                }
                const ia = (e) => {
                        let u = e.content,
                            a = e.classMix,
                            n = e.className,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, sa);
                        const l = (0, t.useRef)(null),
                            i = (0, t.useState)(!0),
                            o = i[0],
                            c = i[1];
                        return (
                            (0, t.useEffect)(() =>
                                J(() => {
                                    const e = l.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            r().createElement(
                                Ue,
                                { isEnabled: o, body: u },
                                r().createElement(
                                    'div',
                                    la({}, s, { ref: l, className: h()('TextOverflow_base_3b', n, a) }),
                                    u,
                                ),
                            )
                        );
                    },
                    oa = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    ca = { [na.default]: 'c_24x24', [na.x48]: 'c_48x48', [na.x80]: 'c_80x80', [na.x220]: 'c_220x220' },
                    da = ({ badgeID: e, size: u = na.default, className: a }) => {
                        const t = R.images.gui.maps.icons.library.badges.$dyn(ca[u]);
                        return r().createElement('div', {
                            className: h()(oa.base, oa[`base__${u}`], a),
                            style: { backgroundImage: `url(${t.$dyn(`badge_${e}`)})` },
                        });
                    },
                    ma = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    _a = (0, t.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, t.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (a = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(a[e.slice(u, -u)]);
                                    })
                                );
                                var u, a;
                            }, [e]),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            Ue,
                            { header: u, body: a },
                            r().createElement('div', { className: ma.anonymizedIcon }),
                        );
                    });
                function Ea() {
                    return (
                        (Ea = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        Ea.apply(null, arguments)
                    );
                }
                const Aa = { [na.default]: 'c_64x24', [na.x48]: 'c_68x28' },
                    pa = { [na.default]: 'c_48x48', [na.x48]: 'c_48x48' },
                    ga = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: a = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: s = { badgeID: '' },
                        isInverted: l = !1,
                        isFakeNameVisible: i = !1,
                        isAnonymizerShown: o = !1,
                        hiddenUserName: c = '',
                        size: d = na.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(Aa[d]),
                            A = (0, t.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${s.badgeID}`)})` }),
                                [s, E],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(pa[d]),
                            g = (0, t.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${s.badgeID}`)})` }),
                                [s, p],
                            ),
                            F = u ? `[${u}]` : '',
                            D = h()(ma.base, ma[`base__${d}`], l && ma.base__inverted),
                            C = h()(ma.userName, m),
                            b = h()(ma.clanTag, _),
                            B = e !== c,
                            v = i ? `${c}${F}` : c,
                            f = Boolean(n.badgeID) && r().createElement(da, Ea({ size: d }, n, { key: 'badge' })),
                            y = Date.now(),
                            w = [
                                f,
                                [
                                    r().createElement(
                                        'div',
                                        { className: C, key: 'userName' },
                                        r().createElement(ia, { content: e, key: y }),
                                    ),
                                    !i && Boolean(F) && r().createElement('div', { className: b, key: 'clanTag' }, F),
                                ],
                                0 !== a && r().createElement('div', { className: ma.igrIcon, key: 'igrType' }),
                                Boolean(s.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: ma.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: ma.suffixBadgeStripe, style: A }),
                                        r().createElement('div', { className: ma.suffixBadge, style: g }),
                                    ),
                                o && B && r().createElement(_a, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: D }, l ? w.reverse() : w);
                    },
                    Fa = pe()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), items: e.array('items'), topReplays: e.array('topReplays') },
                                a = (0, ve.Om)(
                                    (e) => {
                                        const a = De(u.topReplays.get(), e);
                                        if (!a) throw new Error(`top replay with index ${e} is not found`);
                                        return Object.assign({}, a, {
                                            vehicleInfo: Object.assign({}, a.vehicleInfo),
                                            playerInfo: Object.assign({}, a.playerInfo),
                                            epicMedals: be(a.epicMedals, (e) => e),
                                        });
                                    },
                                    { equals: de },
                                ),
                                t = (0, ve.Om)(
                                    (e) => {
                                        const a = De(u.items.get(), e);
                                        if (!a) throw new Error(`replay with index ${e} is not found`);
                                        return Object.assign({}, a, {
                                            vehicleInfo: Object.assign({}, a.vehicleInfo),
                                            playerInfo: Object.assign({}, a.playerInfo),
                                            epicMedals: be(a.epicMedals, (e) => e),
                                        });
                                    },
                                    { equals: de },
                                );
                            return Object.assign({}, u, { computes: { topReplay: a, replay: t } });
                        },
                        ({ externalModel: e }) => ({
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                            like: e.createCallback((e) => ({ index: e }), 'onLike'),
                            watch: e.createCallback((e) => ({ index: e }), 'onWatch'),
                            topReplayWatch: e.createCallback((e) => ({ index: e }), 'onTopReplaysWatch'),
                            sort: e.createCallback((e) => ({ param: e }), 'onSort'),
                            refresh: e.createCallbackNoArgs('onRefresh'),
                        }),
                    ),
                    ha = Fa[0],
                    Da = Fa[1],
                    Ca = {
                        base: 'BestReplayCard_base_31',
                        bgContainer: 'BestReplayCard_bgContainer_3e',
                        bg: 'BestReplayCard_bg_79',
                        hoverOverlay: 'BestReplayCard_hoverOverlay_07',
                        bgOverlay: 'BestReplayCard_bgOverlay_8c',
                        content: 'BestReplayCard_content_17',
                        topLine: 'BestReplayCard_topLine_69',
                        section: 'BestReplayCard_section_cd',
                        section__left: 'BestReplayCard_section__left_25',
                        section__centered: 'BestReplayCard_section__centered_f6',
                        section__right: 'BestReplayCard_section__right_ac',
                        clanTag: 'BestReplayCard_clanTag_de',
                        vehicleName: 'BestReplayCard_vehicleName_94',
                        vehicleTypeContainer: 'BestReplayCard_vehicleTypeContainer_26',
                        vehicleType: 'BestReplayCard_vehicleType_44',
                        separator: 'BestReplayCard_separator_29',
                        flag: 'BestReplayCard_flag_34',
                        vehicleImage: 'BestReplayCard_vehicleImage_9f',
                        statsParam: 'BestReplayCard_statsParam_05',
                        highlight: 'BestReplayCard_highlight_8e',
                        fadeIn: 'BestReplayCard_fadeIn_3c',
                        fadeInThreeQuarters: 'BestReplayCard_fadeInThreeQuarters_9e',
                        fadeInHalf: 'BestReplayCard_fadeInHalf_ef',
                        fadeOut: 'BestReplayCard_fadeOut_95',
                        fadeInWithScale: 'BestReplayCard_fadeInWithScale_b8',
                        slideUp: 'BestReplayCard_slideUp_41',
                        scale: 'BestReplayCard_scale_b8',
                        raysAppearance: 'BestReplayCard_raysAppearance_32',
                        rotate: 'BestReplayCard_rotate_43',
                        'reverse-rotate': 'BestReplayCard_reverse-rotate_de',
                        glowAppearance: 'BestReplayCard_glowAppearance_db',
                        highlightAppearance: 'BestReplayCard_highlightAppearance_58',
                        blink: 'BestReplayCard_blink_48',
                        slideUpIn: 'BestReplayCard_slideUpIn_a3',
                    },
                    ba = (0, Z.Pi)(({ index: e, onClick: u, className: a }) => {
                        const t = f().mediaSize,
                            n = Da().model.computes.topReplay(e),
                            s = n.vehicleInfo,
                            l = n.playerInfo,
                            i = R.images.gui.maps.icons.map.screen.$dyn(`c_${n.arenaName}`);
                        null === i && console.error(n.arenaName);
                        const o = cu(s.techName),
                            c = n[n.param];
                        return r().createElement(
                            'div',
                            {
                                className: h()(Ca.base, a),
                                onMouseEnter: () => L('highlight'),
                                onClick: u,
                                style: { '--clanTagColor': l.clanTagColor },
                            },
                            r().createElement(
                                'div',
                                { className: Ca.bgContainer },
                                r().createElement('div', { className: Ca.bg, style: { backgroundImage: `url(${i})` } }),
                                r().createElement('div', { className: Ca.bgOverlay }),
                            ),
                            r().createElement('div', { className: Ca.hoverOverlay }),
                            r().createElement(ju, { nation: s.nation, className: Ca.flag }),
                            r().createElement(
                                'div',
                                { className: Ca.content },
                                r().createElement(
                                    'div',
                                    { className: Ca.topLine },
                                    r().createElement(Ju, {
                                        name: s.name,
                                        tier: s.tier,
                                        type: s.type,
                                        size: Ku.x48,
                                        className: h()(Ca.vehicleName, Ca.section, Ca.section__left),
                                        classNames: {
                                            type: Ca.vehicleType,
                                            vehicleTypeContainer: Ca.vehicleTypeContainer,
                                        },
                                    }),
                                    r().createElement('div', { className: Ca.separator }),
                                    r().createElement(
                                        'div',
                                        { className: h()(Ca.userName, Ca.section, Ca.section__centered) },
                                        r().createElement(ga, {
                                            userName: l.userName,
                                            clanAbbrev: l.clanTag,
                                            clanTagClassName: l.clanTagColor && Ca.clanTag,
                                            key: t,
                                        }),
                                    ),
                                    r().createElement('div', { className: Ca.separator }),
                                    r().createElement(
                                        'div',
                                        { className: h()(Ca.date, Ca.section, Ca.section__right) },
                                        r().createElement(ra, { datetime: n.timestamp, format: ea.ShortDateTime }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: Ca.vehicleImage,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.shop.vehicles.c_600x450.$dyn(o)})`,
                                        },
                                    },
                                    r().createElement('div', { className: Ca.highlight }),
                                ),
                                r().createElement(Vu, { param: n.param, value: c, className: Ca.statsParam }),
                            ),
                        );
                    }),
                    Ba = (0, Z.Pi)(({ className: e }) => {
                        const u = Da(),
                            a = u.model,
                            t = u.controls;
                        return r().createElement(
                            'div',
                            { className: h()('BestReplaysCards_base_2f', e) },
                            ((e, u) => {
                                const a = [];
                                for (let t = 0; t < e; t++) a.push(u(t));
                                return a;
                            })(a.topReplays.get().length, (e) =>
                                r().createElement(ba, {
                                    index: e,
                                    className: 'BestReplaysCards_card_2d',
                                    key: e,
                                    onClick: () => t.topReplayWatch(e),
                                }),
                            ),
                        );
                    }),
                    va = {
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
                    fa = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ya() {
                    return (
                        (ya = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        ya.apply(null, arguments)
                    );
                }
                const wa = (e) => {
                    let u = e.size,
                        a = e.value,
                        t = e.isEmpty,
                        n = e.fadeInAnimation,
                        s = e.hide,
                        l = e.maximumNumber,
                        i = e.className,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var a = {};
                            for (var t in e)
                                if ({}.hasOwnProperty.call(e, t)) {
                                    if (u.indexOf(t) >= 0) continue;
                                    a[t] = e[t];
                                }
                            return a;
                        })(e, fa);
                    const c = t ? null : a,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const m = c && !d && c > l,
                        _ = h()(
                            va.base,
                            va[`base__${u}`],
                            n && va.base__animated,
                            s && va.base__hidden,
                            !c && va.base__pattern,
                            t && va.base__empty,
                            i,
                        );
                    return r().createElement(
                        'div',
                        ya({ className: _ }, o),
                        r().createElement('div', { className: va.bg }),
                        r().createElement('div', { className: va.pattern }),
                        r().createElement(
                            'div',
                            { className: h()(va.value, d && va.value__text) },
                            m ? l : c,
                            m && r().createElement('span', { className: va.plus }, '+'),
                        ),
                    );
                };
                wa.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Ta = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function Na() {
                    return (
                        (Na = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        Na.apply(null, arguments)
                    );
                }
                const Ra = r().memo(function (e) {
                        let u = e.isActive,
                            a = e.counter,
                            t = e.className,
                            n = e.children,
                            s = e.type,
                            l = void 0 === s ? qe.secondary : s,
                            i = e.size,
                            o = void 0 === i ? Ke.small : i,
                            c = e.hasIndicator,
                            d = void 0 === c || c,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, Ta);
                        return r().createElement(
                            'div',
                            { className: h()('ToggleButton_base_35', t, u && 'ToggleButton_base__active_1e') },
                            r().createElement(Qe, Na({ type: l, size: o, mixClass: 'ToggleButton_button_4d' }, m), n),
                            r().createElement('div', { className: 'ToggleButton_overlay_50' }),
                            d && r().createElement('div', { className: 'ToggleButton_indicator_8f' }),
                            Boolean(a) &&
                                r().createElement(
                                    'div',
                                    { className: 'ToggleButton_counter_01' },
                                    r().createElement(wa, { value: a, size: 'small' }),
                                ),
                        );
                    }),
                    Ma = (e) => {
                        (0, t.useEffect)(e, []);
                    },
                    xa = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var ka;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(ka || (ka = {}));
                const Sa = ['__left', '__right', '__top', '__bottom'],
                    Ia =
                        ((0, t.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: a, customStyles: n = {} }, l) => {
                                const i = (0, t.useRef)(null),
                                    o = (0, t.useRef)(null),
                                    c = (0, t.useRef)(null),
                                    d = (0, t.useState)(window.decorator && window.decorator.directionType),
                                    m = d[0],
                                    _ = d[1],
                                    E = (0, t.useCallback)(() => {
                                        P.playClick(), s.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, t.useCallback)(() => {
                                        P.playHighlight();
                                    }, []),
                                    p = h()(xa.arrow, xa[`arrow${Sa[m]}`]);
                                Ma(
                                    () => (
                                        s.O.client.events.mouse.enableOutside(),
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (a ? a() : s.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const g = (0, t.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === i.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const t = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = s.O.client.getMouseGlobalPosition(),
                                                    u = ![t.boundX, t.boundY, t.boundWidth, t.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    a =
                                                        e.x < t.boundX ||
                                                        e.x > t.boundX + t.boundWidth ||
                                                        e.y > t.boundY + t.boundHeight ||
                                                        e.y < t.boundY;
                                                if (u && !a) return;
                                            }
                                            a ? a() : s.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, a],
                                    ),
                                    F = (function () {
                                        const e = (0, t.useRef)(0);
                                        var u;
                                        return (
                                            (u = () => {
                                                window.cancelAnimationFrame(e.current);
                                            }),
                                            (0, t.useEffect)(() => u, []),
                                            (0, t.useMemo)(
                                                () => ({
                                                    run: (u) => {
                                                        window.cancelAnimationFrame(e.current),
                                                            (e.current = window.requestAnimationFrame(() => {
                                                                e.current = window.requestAnimationFrame(() => {
                                                                    u(), (e.current = 0);
                                                                });
                                                            }));
                                                    },
                                                    clear: () => {
                                                        window.cancelAnimationFrame(e.current), (e.current = 0);
                                                    },
                                                    get isRunning() {
                                                        return 0 !== e.current;
                                                    },
                                                }),
                                                [],
                                            )
                                        );
                                    })(),
                                    D = (0, t.useCallback)(() => {
                                        const e = o.current;
                                        if (e)
                                            return (
                                                s.O.view.freezeTextureBeforeResize(),
                                                F.run(() => {
                                                    const u = e.scrollWidth,
                                                        a = e.scrollHeight;
                                                    s.O.view.resize(u, a), _(window.decorator.directionType);
                                                })
                                            );
                                    }, [F]);
                                return (
                                    (0, t.useImperativeHandle)(l, () => ({ updateSize: D })),
                                    Ma(() => {
                                        s.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, t.useEffect)(() => {
                                        document.addEventListener('mousedown', g, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((a, t) => {
                                                    e.then((e) => !u && a(e)).catch((e) => !u && t(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, U.Eu)());
                                        return (
                                            !u && e.promise.then(() => D()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', g);
                                            }
                                        );
                                    }, [D, g, u]),
                                    r().createElement(
                                        'div',
                                        { className: xa.base, ref: o },
                                        r().createElement(
                                            'div',
                                            { className: xa.decorator },
                                            r().createElement(
                                                'div',
                                                { className: xa.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        Ue,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: xa.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: p, style: n.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function Oa() {
                    return (
                        (Oa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        Oa.apply(null, arguments)
                    );
                }
                const La = (e) => {
                        let u = e.contentId,
                            a = e.decoratorId,
                            n = e.direction,
                            s = void 0 === n ? ka.Top : n,
                            l = e.targetId,
                            i = e.args,
                            o = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            m = void 0 === d || d,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, Ia);
                        const E = (0, t.useRef)(null),
                            A = (0, t.useCallback)(() => {
                                if ((0, U.wU)()) return (0, U.SW)();
                                E.current && (0, U.P3)(u, s, E.current, a, l, i);
                            }, [u, s, i, a, l]);
                        return r().createElement(
                            'div',
                            Oa(
                                {
                                    ref: E,
                                    onMouseDown:
                                        ((p = c.props.onClick),
                                        (e) => {
                                            m && (A(), o && o(e), p && p(e));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var p;
                    },
                    Pa = ({ isHighlighted: e, popoverDirection: u = ka.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: 'PopupButton_base_77' },
                            r().createElement(
                                La,
                                {
                                    contentId: R.views.server_side_replay.lobby.popovers.ReplaysFilterPopover('resId'),
                                    direction: u,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: 'PopupButton_buttonIconWrapper_9f' },
                                    r().createElement(
                                        Ra,
                                        { type: qe.ghost, size: Ke.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', {
                                            className: h()(
                                                'PopupButton_buttonIcon_99',
                                                e && 'PopupButton_buttonIcon__isHighlighted_99',
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    Ha = 'TableWidget_count_04',
                    Wa = ({
                        count: e,
                        className: u,
                        isPopoverEnabled: a,
                        isPopoverHighlighted: t,
                        popoverDirection: n,
                    }) =>
                        r().createElement(
                            'div',
                            { className: h()('TableWidget_base_b4', u) },
                            r().createElement(
                                'div',
                                { className: 'TableWidget_leftInfo_8f' },
                                r().createElement(gu, {
                                    text: R.strings.replays.tableInfo.amount(),
                                    binding: { amount: r().createElement('div', { className: Ha }, e) },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'TableWidget_rightInfo_db' },
                                r().createElement(gu, {
                                    text: R.strings.replays.tableInfo.filter(),
                                    binding: { amount: r().createElement('div', { className: Ha }, e) },
                                }),
                                a &&
                                    r().createElement(
                                        Ue,
                                        {
                                            header: String(R.strings.replays.filterPopover.tooltip.header()),
                                            body: String(R.strings.replays.filterPopover.tooltip.body()),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'TableWidget_popupButtonWrapper_dd' },
                                            r().createElement(Pa, { isHighlighted: t, popoverDirection: n }),
                                        ),
                                    ),
                            ),
                        ),
                    $a = (0, Z.Pi)(({ className: e }) => {
                        const u = Da().model,
                            a = u.root.get(),
                            t = a.isPopoverEnabled,
                            n = a.isPopoverHighlighted,
                            s = u.items.get().length;
                        return r().createElement(Wa, {
                            className: e,
                            count: s,
                            isPopoverEnabled: t,
                            isPopoverHighlighted: n,
                            popoverDirection: ka.Left,
                        });
                    });
                let za;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(za || (za = {}));
                const ja = ({
                        children: e,
                        contentID: u,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: l,
                    }) => {
                        const i = (0, t.useCallback)(() => {
                                (0, U.c9)(U.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    P.playYes();
                            }, [n, u, a, r]),
                            o = (0, t.useCallback)(() => {
                                (0, U.c9)(U.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, a, r]),
                            c = (0, t.useCallback)(
                                (e) => {
                                    l && l(e), ((e) => e.button === za.RIGHT)(e) && i();
                                },
                                [l, i],
                            );
                        return (
                            (0, t.useEffect)(() => {
                                !1 === s && o();
                            }, [s, o]),
                            s ? (0, t.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Ua = ['children'];
                function Va() {
                    return (
                        (Va = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        Va.apply(null, arguments)
                    );
                }
                const Ga = (e) => {
                        let u = e.children,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, Ua);
                        return r().createElement(
                            ja,
                            Va({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Xa = ({ children: e, contextMenuArgs: u, isEnabled: a = !0 }) =>
                        a ? r().createElement(Ga, { args: u }, e) : e;
                let Ya;
                !(function (e) {
                    (e.None = ''),
                        (e.Master = 'master'),
                        (e.First = 'first'),
                        (e.Second = 'second'),
                        (e.Third = 'third');
                })(Ya || (Ya = {}));
                const qa = {
                        base: 'TableRow_base_f9',
                        favorite: 'TableRow_favorite_5b',
                        favoriteImage: 'TableRow_favoriteImage_09',
                        favoriteImage__active: 'TableRow_favoriteImage__active_b1',
                        map: 'TableRow_map_ac',
                        mapImageContainer: 'TableRow_mapImageContainer_cf',
                        mapImage: 'TableRow_mapImage_7b',
                        mapName: 'TableRow_mapName_af',
                        playerContainer: 'TableRow_playerContainer_84',
                        dateContainer: 'TableRow_dateContainer_da',
                        player: 'TableRow_player_aa',
                        date: 'TableRow_date_fd',
                        clanTag: 'TableRow_clanTag_d3',
                        vehicle: 'TableRow_vehicle_2c',
                        vehicleImage: 'TableRow_vehicleImage_e0',
                        flagContainer: 'TableRow_flagContainer_f0',
                        flag: 'TableRow_flag_87',
                        vehicleName: 'TableRow_vehicleName_8f',
                        vehicleTypeContainer: 'TableRow_vehicleTypeContainer_90',
                        vehicleType: 'TableRow_vehicleType_fe',
                        param: 'TableRow_param_b3',
                        marksOfMastery: 'TableRow_marksOfMastery_46',
                        marksOfMastery__first: 'TableRow_marksOfMastery__first_85',
                        marksOfMastery__second: 'TableRow_marksOfMastery__second_d9',
                        marksOfMastery__third: 'TableRow_marksOfMastery__third_0c',
                        marksOfMastery__master: 'TableRow_marksOfMastery__master_64',
                        epicMedals: 'TableRow_epicMedals_00',
                        epicMedalsCount: 'TableRow_epicMedalsCount_e2',
                        fadeIn: 'TableRow_fadeIn_e1',
                        fadeInThreeQuarters: 'TableRow_fadeInThreeQuarters_bd',
                        fadeInHalf: 'TableRow_fadeInHalf_59',
                        fadeOut: 'TableRow_fadeOut_5d',
                        fadeInWithScale: 'TableRow_fadeInWithScale_b8',
                        slideUp: 'TableRow_slideUp_9d',
                        scale: 'TableRow_scale_68',
                        raysAppearance: 'TableRow_raysAppearance_55',
                        rotate: 'TableRow_rotate_7d',
                        'reverse-rotate': 'TableRow_reverse-rotate_f8',
                        glowAppearance: 'TableRow_glowAppearance_3e',
                        highlightAppearance: 'TableRow_highlightAppearance_57',
                        blink: 'TableRow_blink_3d',
                        slideUpIn: 'TableRow_slideUpIn_e7',
                    },
                    Ka = R.strings.replays.table.tooltip,
                    Za = ({
                        type: e,
                        arenaName: u,
                        earnedXp: a,
                        damageDealt: t,
                        damageAssisted: n,
                        damageBlockedByArmor: s,
                        kills: l,
                        marksOfMastery: i,
                        player: o,
                        timestamp: c,
                        vehicle: d,
                        epicMedals: m,
                        epicMedalsCount: _,
                        isFavorite: E,
                        className: A,
                        onLike: p,
                        onClick: g,
                    }) => {
                        const F = f().mediaSize,
                            D = R.strings.arenas.$dyn(`c_${u}`),
                            C = cu(d.techName).toLowerCase();
                        return r().createElement(
                            'div',
                            {
                                className: h()(qa.base, A),
                                onMouseEnter: () => L('highlight'),
                                onClick: g,
                                style: { '--clanTagColor': o.clanTagColor },
                            },
                            r().createElement(
                                Ue,
                                {
                                    header: Ka.favorite.header(),
                                    body: E ? Ka.favoriteActive.body() : Ka.favorite.body(),
                                },
                                r().createElement(
                                    'div',
                                    { className: qa.favorite, onClick: p },
                                    r().createElement('div', {
                                        className: h()(qa.favoriteImage, E && qa.favoriteImage__active),
                                    }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.map.header(), body: Ka.map.body() },
                                r().createElement(
                                    'div',
                                    { className: qa.map },
                                    r().createElement(
                                        'div',
                                        { className: qa.mapImageContainer },
                                        r().createElement('div', {
                                            className: qa.mapImage,
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.map.stats.$dyn(`c_${u}`)})`,
                                            },
                                        }),
                                    ),
                                    r().createElement('div', { className: qa.mapName }, D.$dyn('name')),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.vehicle.header(), body: Ka.vehicle.body() },
                                r().createElement(
                                    'div',
                                    { className: qa.vehicle },
                                    r().createElement(
                                        'div',
                                        { className: qa.flagContainer },
                                        r().createElement(ju, { nation: d.nation, className: qa.flag }),
                                    ),
                                    r().createElement('div', {
                                        className: qa.vehicleImage,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.c_420x307.$dyn(C)})`,
                                        },
                                    }),
                                    r().createElement(Ju, {
                                        name: d.name,
                                        tier: d.tier,
                                        type: d.type,
                                        size: Ku.x48,
                                        className: qa.vehicleName,
                                        classNames: {
                                            type: qa.vehicleType,
                                            vehicleTypeContainer: qa.vehicleTypeContainer,
                                        },
                                    }),
                                ),
                            ),
                            'best' === e &&
                                r().createElement(
                                    Xa,
                                    { contextMenuArgs: { spaID: o.spaID, userName: o.userName } },
                                    r().createElement(
                                        'div',
                                        { className: qa.playerContainer },
                                        r().createElement(
                                            Ue,
                                            { header: Ka.player.header(), body: Ka.player.body() },
                                            r().createElement(
                                                'div',
                                                { className: qa.player },
                                                r().createElement(ga, {
                                                    userName: o.userName,
                                                    clanAbbrev: o.clanTag,
                                                    clanTagClassName: o.clanTagColor && qa.clanTag,
                                                    key: F,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            r().createElement(
                                'div',
                                { className: qa.dateContainer },
                                r().createElement(
                                    Ue,
                                    { header: Ka.date.header(), body: Ka.date.body() },
                                    r().createElement(
                                        'div',
                                        { className: qa.date },
                                        r().createElement(ra, { datetime: c, format: ea.FullDateTime }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.earnedXp.header(), body: Ka.earnedXp.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(qa.param, qa.param__earnedXp) },
                                    r().createElement(Uu, { value: a }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.damageDealt.header(), body: Ka.damageDealt.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(qa.param, qa.param__damageDealt) },
                                    r().createElement(Uu, { value: t }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.damageAssisted.header(), body: Ka.damageAssisted.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(qa.param, qa.param__damageAssisted) },
                                    r().createElement(Uu, { value: n }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.damageBlockedByArmor.header(), body: Ka.damageBlockedByArmor.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(qa.param, qa.param__damageBlockedByArmor) },
                                    r().createElement(Uu, { value: s }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                { header: Ka.kills.header(), body: Ka.kills.body() },
                                r().createElement(
                                    'div',
                                    { className: h()(qa.param, qa.param__kills) },
                                    r().createElement(Uu, { value: l }),
                                ),
                            ),
                            r().createElement(
                                Ue,
                                {
                                    header: Ka.marksOfMastery.header(),
                                    body: Ka.marksOfMastery.body(),
                                    isEnabled: i !== Ya.None,
                                },
                                r().createElement(
                                    'div',
                                    { className: h()(qa.param, qa.param__markOfMastery) },
                                    i &&
                                        r().createElement('div', {
                                            className: h()(qa.marksOfMastery, qa[`marksOfMastery__${i}`]),
                                        }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: h()(qa.param, qa.param__epicMedals) },
                                Boolean(_) &&
                                    r().createElement(
                                        Ue,
                                        { body: Be(m, (e, u) => e + `${u} \n`, '') },
                                        r().createElement(
                                            'div',
                                            { className: qa.epicMedals },
                                            r().createElement('div', { className: qa.epicMedalsCount }, _),
                                        ),
                                    ),
                            ),
                        );
                    },
                    Qa = (0, Z.Pi)(({ index: e, className: u }) => {
                        const a = Da(),
                            t = a.model,
                            n = a.controls,
                            s = t.computes.replay(e);
                        return r().createElement(Za, {
                            className: u,
                            type: 'best',
                            arenaName: s.arenaName,
                            earnedXp: s.earnedXp,
                            damageDealt: s.damageDealt,
                            damageAssisted: s.damageAssisted,
                            damageBlockedByArmor: s.damageBlockedByArmor,
                            kills: s.kills,
                            marksOfMastery: s.marksOfMastery,
                            player: s.playerInfo,
                            timestamp: s.timestamp,
                            vehicle: s.vehicleInfo,
                            epicMedals: s.epicMedals,
                            epicMedalsCount: s.epicMedals.length,
                            isFavorite: s.isFavorite,
                            onLike: () => n.like(e),
                            onClick: () => n.watch(e),
                        });
                    }),
                    Ja = {
                        base: 'BestReplaysTable_base_58',
                        cards: 'BestReplaysTable_cards_f2',
                        noRecords: 'BestReplaysTable_noRecords_c6',
                        table: 'BestReplaysTable_table_6f',
                        tableWidget: 'BestReplaysTable_tableWidget_ab',
                        tableWidget__visible: 'BestReplaysTable_tableWidget__visible_a0',
                        header: 'BestReplaysTable_header_13',
                        header__visible: 'BestReplaysTable_header__visible_66',
                        fakeHeader: 'BestReplaysTable_fakeHeader_aa',
                        shadowsContainer__invisible: 'BestReplaysTable_shadowsContainer__invisible_1e',
                        bar: 'BestReplaysTable_bar_f5',
                        row: 'BestReplaysTable_row_7e',
                        row__last: 'BestReplaysTable_row__last_1d',
                        fadeIn: 'BestReplaysTable_fadeIn_71',
                        fadeInThreeQuarters: 'BestReplaysTable_fadeInThreeQuarters_8c',
                        fadeInHalf: 'BestReplaysTable_fadeInHalf_f4',
                        fadeOut: 'BestReplaysTable_fadeOut_08',
                        fadeInWithScale: 'BestReplaysTable_fadeInWithScale_95',
                        slideUp: 'BestReplaysTable_slideUp_2f',
                        scale: 'BestReplaysTable_scale_8f',
                        raysAppearance: 'BestReplaysTable_raysAppearance_ba',
                        rotate: 'BestReplaysTable_rotate_96',
                        'reverse-rotate': 'BestReplaysTable_reverse-rotate_b6',
                        glowAppearance: 'BestReplaysTable_glowAppearance_60',
                        highlightAppearance: 'BestReplaysTable_highlightAppearance_15',
                        blink: 'BestReplaysTable_blink_9f',
                        slideUpIn: 'BestReplaysTable_slideUpIn_b1',
                    },
                    et = (0, Z.Pi)(({ api: e, className: u, rowHeight: a = 0 }) => {
                        const n = Da(),
                            s = n.model,
                            l = n.controls,
                            i = s.root.get(),
                            o = i.selectedSorting,
                            c = i.isLoading,
                            d = e.events,
                            m = e.applyScroll,
                            _ = (0, t.useState)(!0),
                            E = _[0],
                            A = _[1];
                        (0, t.useEffect)(() => {
                            const e = (e) => {
                                A(e.value.scrollPosition < 398);
                            };
                            return d.on('change', e), () => d.off('change', e);
                        }, [d]);
                        const p = (0, t.useCallback)(
                            (e) => {
                                l.sort(e), m(0);
                            },
                            [m, l],
                        );
                        return r().createElement(
                            'div',
                            { className: h()(Ja.base, u), style: { '--rowHeight': a ? `${a}rem` : 'auto' } },
                            r().createElement($a, { className: h()(Ja.tableWidget, !E && Ja.tableWidget__visible) }),
                            r().createElement(
                                Wu,
                                {
                                    api: e,
                                    type: 'best',
                                    onSort: l.sort,
                                    selectedSorting: o,
                                    className: Ja.table,
                                    classNames: {
                                        header: h()(Ja.header, !E && Ja.header__visible),
                                        bar: { base: Ja.bar },
                                        shadowsContainer: { top: h()(E && Ja.shadowsContainer__invisible) },
                                    },
                                },
                                r().createElement(Ba, { className: Ja.cards }),
                                r().createElement($a, { className: Ja.fakeTableWidget }),
                                0 === s.items.get().length
                                    ? r().createElement(hu, {
                                          isLoading: c,
                                          className: Ja.noRecords,
                                          onResetFilter: l.resetFilter,
                                      })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(ku, {
                                              selectedSorting: o,
                                              onSort: p,
                                              className: Ja.fakeHeader,
                                              type: 'best',
                                          }),
                                          s.items
                                              .get()
                                              .map((e, u) =>
                                                  r().createElement(Qa, {
                                                      className: h()(
                                                          Ja.row,
                                                          u === s.items.get().length - 1 && Ja.row__last,
                                                      ),
                                                      index: u,
                                                      key: e.id,
                                                  }),
                                              ),
                                      ),
                            ),
                        );
                    }),
                    ut = (0, Z.Pi)(() => {
                        const e = au(ce),
                            u = (0, te.useSpring)(su),
                            a = Da(),
                            t = a.model,
                            n = a.controls,
                            s = t.root.get(),
                            l = s.state,
                            i = s.isLoading;
                        return r().createElement(
                            'div',
                            { className: h()(lu, i && 'BestReplaysPage_base__loading_39') },
                            r().createElement(
                                uu,
                                { className: h()(X, 'BestReplaysPage_heading_bc') },
                                R.strings.replays.page.heading.bestReplays(),
                            ),
                            r().createElement(
                                te.animated.div,
                                { style: u, className: 'BestReplaysPage_contentWrapper_e3' },
                                r().createElement('div', { className: h()(Y, 'BestReplaysPage_bg_d0') }),
                                r().createElement(
                                    'div',
                                    { className: 'BestReplaysPage_content_81' },
                                    (() => {
                                        switch (l) {
                                            case nu.Initial:
                                                return null;
                                            case nu.Success:
                                                return r().createElement(et, {
                                                    api: e,
                                                    rowHeight: 60,
                                                    className: 'BestReplaysPage_hasRecords_f2',
                                                });
                                            case nu.Error:
                                                return r().createElement(eu, {
                                                    isLoading: i,
                                                    onRefresh: n.refresh,
                                                    className: 'BestReplaysPage_error_b7',
                                                });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                i &&
                                    r().createElement(tu, {
                                        message: R.strings.replays.waitingSpinner.message(),
                                        className: 'BestReplaysPage_spinner_e3',
                                    }),
                            ),
                        );
                    });
                function at(e, u) {
                    return Math.floor(Math.random() * (u - e + 1)) + e;
                }
                const tt = {
                        choice: function (e) {
                            return e[at(0, e.length - 1)];
                        },
                        boolean: function (e) {
                            return void 0 === e ? Math.random() > 0.5 : Math.random() <= e;
                        },
                        int: at,
                    },
                    rt = [Ya.None, Ya.Master, Ya.First, Ya.Second, Ya.Third],
                    nt = ['AT-SPG', 'SPG', 'heavyTank', 'lightTank', 'mediumTank'],
                    st = [
                        'ussr',
                        'germany',
                        'usa',
                        'china',
                        'france',
                        'uk',
                        'japan',
                        'czech',
                        'sweden',
                        'poland',
                        'italy',
                    ],
                    lt = [
                        'role_HT_assault',
                        'role_HT_break',
                        'role_HT_universal',
                        'role_HT_support',
                        'role_MT_assault',
                        'role_MT_universal',
                        'role_MT_sniper',
                        'role_MT_support',
                        'role_ATSPG_assault',
                        'role_ATSPG_universal',
                        'role_ATSPG_sniper',
                        'role_ATSPG_support',
                        'role_LT_universal',
                        'role_LT_wheeled',
                        'role_SPG',
                    ],
                    it = [
                        {
                            name: 'Progetto 65',
                            techName: 'It08_Progetto_M40_mod_65',
                            tier: tt.int(1, 10),
                            isPremium: tt.boolean(),
                            type: tt.choice(nt),
                            nation: tt.choice(st),
                            roleKey: tt.choice(lt),
                            tags: '',
                            vehicleCD: 7169,
                        },
                        {
                            name: 'Object 705A',
                            techName: 'R145_Object_705_A',
                            tier: tt.int(1, 10),
                            isPremium: tt.boolean(),
                            type: tt.choice(nt),
                            nation: tt.choice(st),
                            roleKey: tt.choice(lt),
                            tags: '',
                            vehicleCD: 58961,
                        },
                        {
                            name: 'Manticore',
                            techName: 'GB100_Manticore',
                            tier: tt.int(1, 10),
                            isPremium: tt.boolean(),
                            type: tt.choice(nt),
                            nation: tt.choice(st),
                            roleKey: tt.choice(lt),
                            tags: '',
                            vehicleCD: 4737,
                        },
                    ],
                    ot = [
                        '01_karelia',
                        '02_malinovka',
                        '04_himmelsdorf',
                        '05_prohorovka',
                        '06_ensk',
                        '07_lakeville',
                        '08_ruinberg',
                        '10_hills',
                        '11_murovanka',
                        '13_erlenberg',
                        '14_siegfried_line',
                        '17_munchen',
                        '18_cliff',
                        '23_westfeld',
                        '28_desert',
                        '29_el_hallouf',
                        '31_airfield',
                        '33_fjord',
                        '34_redshire',
                        '35_steppes',
                        '36_fishing_bay',
                        '37_caucasus',
                        '38_mannerheim_line',
                        '44_north_america',
                        '59_asia_great_wall',
                        '63_tundra',
                        '115_sweden',
                        '99_poland',
                    ],
                    ct = [56, 57, 94, 106, 126, 133, 138, 144, 147, 150, 151],
                    dt = (e) => Math.floor(e / tt.int(1, 3)),
                    mt = () => {
                        let e = '';
                        for (let u = 0; u < 4; u++)
                            e += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.floor(36 * Math.random()));
                        return e;
                    },
                    _t = (e) =>
                        new Array(e).fill(null).map((e, u, a) => {
                            const t = ((e, u) => 1e4 + 150 * (u.length - 1) - 150 * e)(u, a),
                                r = ((e) => Math.floor(e / tt.int(1, 3)))(t),
                                n = ((e) => Math.floor(e * tt.int(1, 2)))(r),
                                s = {
                                    spaID: tt.int(2988314, 4678123),
                                    userName: `PlayerQuattro1907_${u}`,
                                    clanTag: mt(),
                                    clanTagColor: `#${[...Array(6)].map(() => Math.floor(16 * Math.random()).toString(16)).join('')}`,
                                    badgeID: String(tt.int(1, 151)),
                                    suffixBadgeID: String(tt.choice(new Array(30).fill('').concat(ct))),
                                };
                            return {
                                id: String(u),
                                isFavorite: tt.boolean(),
                                arenaName: tt.choice(ot),
                                timestamp: (Date.now() - tt.int(1e8, 1e10)) / 1e3,
                                earnedXp: t,
                                damageDealt: r,
                                damageAssisted: n,
                                damageBlockedByArmor: dt(n),
                                kills: tt.int(1, 15),
                                marksOfMastery: tt.choice(rt),
                                vehicleInfo: tt.choice(it),
                                playerInfo: s,
                                epicMedals: new Array(tt.int(0, 15)).fill('very epic medal'),
                            };
                        }),
                    Et = _t(100),
                    At = {
                        getter: (e) => {
                            switch (e) {
                                case 'topReplays':
                                    return _t(3).map((e, u) => {
                                        let a;
                                        switch (u) {
                                            case 0:
                                                a = ru.DamageDealt;
                                                break;
                                            case 1:
                                                a = ru.DamageAssisted;
                                                break;
                                            case 2:
                                                a = ru.DamageBlockedByArmor;
                                        }
                                        return Object.assign({}, e, { param: a });
                                    });
                                case 'items':
                                    return Et;
                                default:
                                    return {
                                        state: nu.Success,
                                        initialReplayIndex: 20,
                                        isLoading: !1,
                                        isPopoverEnabled: !0,
                                        isPopoverHighlighted: !1,
                                        selectedSorting: ru.EarnedXp,
                                    };
                            }
                        },
                        controls: () => ({
                            resetFilter: () => me('reset filter'),
                            like: (e) => me(`like ${e}`),
                            watch: (e) => me(`watch ${e}`),
                            topReplayWatch: (e) => me(`topReplayWatch ${e}`),
                            sort: (e) => me(`sort ${e}`),
                            refresh: () => me('refresh table'),
                        }),
                    },
                    pt = ['children'];
                function gt() {
                    return (
                        (gt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        gt.apply(null, arguments)
                    );
                }
                const Ft = (e) => {
                    let u = e.children,
                        a = (function (e, u) {
                            if (null == e) return {};
                            var a = {};
                            for (var t in e)
                                if ({}.hasOwnProperty.call(e, t)) {
                                    if (u.indexOf(t) >= 0) continue;
                                    a[t] = e[t];
                                }
                            return a;
                        })(e, pt);
                    return r().createElement(
                        We,
                        gt(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        u,
                    );
                };
                function ht() {
                    return (
                        (ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        ht.apply(null, arguments)
                    );
                }
                const Dt = ({ children: e, tooltipArgs: u, className: a }) => {
                        if (!u) return e;
                        const t = r().createElement('div', { className: a }, e);
                        if (u.header || u.body) return r().createElement(Ue, u, t);
                        const n = u.contentId;
                        return n ? r().createElement(We, ht({}, u, { contentId: n }), t) : r().createElement(Ft, u, t);
                    },
                    Ct = 'default',
                    bt = 'search',
                    Bt = 'email',
                    vt = 'password',
                    ft = 'normal',
                    yt = 'medium',
                    wt = {
                        [Ct]: '',
                        [Bt]: R.strings.common.input.placeholder.email(),
                        [bt]: R.strings.common.input.placeholder.search(),
                        [vt]: R.strings.common.input.placeholder.password(),
                    },
                    Tt = { [Ct]: 'text', [Bt]: 'text', [bt]: 'text', [vt]: 'password' },
                    Nt = { [Ct]: '', [Bt]: 'Invalid email', [bt]: '', [vt]: '' },
                    Rt = R.images.gui.maps.icons.components.input;
                const Mt = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    xt = r().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: a = Ct,
                            size: n = yt,
                            variant: s = ft,
                            placeholder: l = '',
                            highlighted: i,
                            withClear: o,
                            selectOnFocus: c = !0,
                            maxLength: d,
                            iconSource: m,
                            classMix: _,
                            onMouseEnter: E,
                            onMouseLeave: A,
                            onMouseDown: p,
                            onMouseUp: g,
                            onClick: F,
                            onChange: D,
                            onClear: C,
                            onFocus: b,
                            onBlur: B,
                        }) => {
                            const v = (0, t.useState)(!1),
                                f = v[0],
                                y = v[1],
                                w = (0, t.useRef)(null),
                                T = (0, t.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                N = 'disabled' !== s,
                                R = (0, t.useCallback)(
                                    (e) => {
                                        N && (y(!0), b && b(e));
                                    },
                                    [N, b],
                                ),
                                M = (0, t.useCallback)(
                                    (e) => {
                                        N && !T.current.mouseOver && (y(!1), B && B(e));
                                    },
                                    [N, B],
                                );
                            (0, t.useEffect)(() => {
                                N && f && c && w.current && w.current.select();
                            }, [c, f, N]);
                            const x = (0, t.useCallback)(
                                    (e) => {
                                        N && D && D(e.target.value);
                                    },
                                    [N, D],
                                ),
                                k = (0, t.useCallback)(
                                    (e) => {
                                        N && ((T.current.mouseOver = !0), E && E(e));
                                    },
                                    [N, E],
                                ),
                                S = (0, t.useCallback)(
                                    (e) => {
                                        N &&
                                            w.current &&
                                            (T.current.mouseDown && w.current.focus(),
                                            (T.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [N, A],
                                ),
                                I = (0, t.useCallback)(
                                    (e) => {
                                        N && ((T.current.mouseDown = !0), p && p(e));
                                    },
                                    [N, p],
                                ),
                                O = (0, t.useCallback)(
                                    (e) => {
                                        N && ((T.current.mouseDown = !1), g && g(e));
                                    },
                                    [N, g],
                                ),
                                L = (0, t.useCallback)(
                                    (e) => {
                                        N &&
                                            w.current &&
                                            ((!f || (f && e.target !== w.current)) && w.current.focus(), F && F(e));
                                    },
                                    [f, N, F],
                                ),
                                H = l || wt[a],
                                W = Boolean(m),
                                $ = h()(
                                    Mt.base,
                                    Mt[`base__${n}`],
                                    i && Mt[`base__${s}`],
                                    f && Mt.base__focused,
                                    W && Mt.base__withIcon,
                                    _,
                                ),
                                z = (0, t.useMemo)(() => (m ? { backgroundImage: `url(${m})` } : null), [m]),
                                j = h()(Mt.input, Mt[`input__${a}`]),
                                U = h()(Mt.icon, Mt[`icon__${a}`]),
                                V = h()(Mt.placeholder, Mt[`placeholder__${a}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: $,
                                    onMouseEnter: k,
                                    onMouseDown: I,
                                    onMouseUp: O,
                                    onMouseLeave: S,
                                    onClick: L,
                                },
                                !N && r().createElement('div', { className: Mt.disabled }),
                                z && r().createElement('div', { style: z, className: U }),
                                r().createElement('input', {
                                    ref: w,
                                    className: j,
                                    type: Tt[a],
                                    value: u,
                                    onChange: x,
                                    disabled: !N,
                                    onFocus: R,
                                    onBlur: M,
                                    maxLength: d,
                                }),
                                H && !u && !f && r().createElement('div', { className: V }, H),
                                o &&
                                    r().createElement('div', {
                                        className: Mt.clear,
                                        onClick: (e) => {
                                            P.playClick(), C && C(e);
                                        },
                                        onMouseEnter: P.playHighlight,
                                    }),
                            );
                        },
                    ),
                    kt = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    St = ({ variant: e, show: u = !0, helperText: a, helperIcon: n, classMix: s }) => {
                        const l = (0, t.useMemo)(() => {
                                const u =
                                    n ||
                                    (function (e) {
                                        return 'alert' === e ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [n, e]),
                            i = h()(kt.base, u && kt.base__shown),
                            o = h()(kt.message, kt[`message__${e}`], s);
                        return r().createElement(
                            'div',
                            { className: i },
                            l && r().createElement('div', { className: kt.icon, style: l }),
                            r().createElement('div', { className: o }, a),
                        );
                    },
                    It = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Ot = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function Lt() {
                    return (
                        (Lt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var a = arguments[u];
                                      for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                  }
                                  return e;
                              }),
                        Lt.apply(null, arguments)
                    );
                }
                const Pt = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Ht = (e) => {
                        let u = e.componentId,
                            a = e.type,
                            n = void 0 === a ? Ct : a,
                            s = e.variant,
                            l = void 0 === s ? ft : s,
                            i = e.size,
                            o = void 0 === i ? yt : i,
                            c = e.value,
                            d = e.tooltipArgs,
                            m = e.helperText,
                            _ = void 0 === m ? '' : m,
                            E = e.isValidated,
                            A = void 0 === E || E,
                            p = e.showHelper,
                            g = void 0 === p || p,
                            F = e.error,
                            D = e.options,
                            C = e.onFocus,
                            b = e.onMouseEnter,
                            B = e.onMouseLeave,
                            v = e.onMouseUp,
                            f = e.onMouseDown,
                            y = e.onChange,
                            w = e.classMix,
                            T = e.controlClassMix,
                            N = e.helperClassMix,
                            R = (function (e, u) {
                                if (null == e) return {};
                                var a = {};
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) {
                                        if (u.indexOf(t) >= 0) continue;
                                        a[t] = e[t];
                                    }
                                return a;
                            })(e, Ot);
                        const M = (0, t.useState)(c),
                            x = M[0],
                            k = M[1],
                            S = (0, t.useState)(A),
                            I = S[0],
                            O = S[1],
                            L = (0, t.useMemo)(() => Object.assign({}, Pt, D), [D]),
                            P = (0, t.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: n }),
                            H = (0, t.useCallback)((e) => {
                                e !== P.current.value &&
                                    ((P.current.value = e), (P.current.isChangeHandled = !1), k(e));
                            }, []),
                            W = (0, t.useCallback)(
                                (e) => {
                                    let u = !0;
                                    L.performChangeValidation &&
                                        (u = L.changesValidator
                                            ? L.changesValidator(e)
                                            : (function (e, u) {
                                                  return (
                                                      u !== Bt ||
                                                      (function (e) {
                                                          const u = e.match(
                                                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                          );
                                                          return Boolean(u);
                                                      })(e)
                                                  );
                                              })(e, P.current.type)),
                                        y && y(e, u);
                                },
                                [y, L],
                            ),
                            $ = (0, t.useCallback)(() => {
                                P.current.debounceTimeout &&
                                    (window.clearTimeout(P.current.debounceTimeout), (P.current.debounceTimeout = 0));
                            }, []),
                            z = (0, t.useCallback)(() => H(''), [H]);
                        (0, t.useEffect)(() => () => $(), [$]);
                        const j = (0, t.useCallback)(
                            (e) => {
                                $(),
                                    L.debounceTime
                                        ? (P.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, L.debounceTime))
                                        : W(e);
                            },
                            [W, $, L.debounceTime],
                        );
                        (0, t.useEffect)(() => {
                            P.current.isChangeHandled ||
                                P.current.value !== x ||
                                (j(P.current.value), (P.current.isChangeHandled = !0));
                        }, [x, j]),
                            (0, t.useEffect)(() => {
                                P.current.isChangeHandled && c !== P.current.value && ((P.current.value = c), k(c)),
                                    (P.current.type = n);
                            }, [c, n]),
                            (0, t.useEffect)(() => {
                                O(A);
                            }, [A, l]);
                        const U = (0, t.useCallback)((e) => b && b(e), [b]),
                            V = (0, t.useCallback)(
                                (e) => {
                                    L.disableHighlightOnFocus && I && O(!1), C && C(e);
                                },
                                [I, C, L.disableHighlightOnFocus],
                            ),
                            G = (0, t.useCallback)((e) => v && v(e), [v]),
                            X = (0, t.useCallback)((e) => f && f(e), [f]),
                            Y = (0, t.useCallback)((e) => B && B(e), [B]),
                            q = (0, t.useMemo)(
                                () =>
                                    L.withTypeIcon
                                        ? (function (e, u) {
                                              return e === bt ? Rt.$dyn(`search_${u}`) : '';
                                          })(n, o)
                                        : '',
                                [n, o, L.withTypeIcon],
                            ),
                            K = _ || Nt[n],
                            Z = Boolean(x),
                            Q = F ? 'error' : l,
                            J = Boolean(F) || I,
                            ee = (0, t.useMemo)(
                                () => ('boolean' == typeof L.withClear ? Z && L.withClear : Z && n === bt),
                                [n, Z, L],
                            ),
                            ue = h()(It.base, It[`base__${o}`], It[`base__${l}`], w);
                        return r().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: U, onMouseDown: X, onMouseUp: G, onMouseLeave: Y },
                            r().createElement(
                                Dt,
                                { tooltipArgs: d },
                                r().createElement(
                                    xt,
                                    Lt(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: q,
                                            size: o,
                                            type: n,
                                            variant: Q,
                                            value: x,
                                            withClear: ee,
                                            highlighted: J,
                                            selectOnFocus: L.selectOnFocus,
                                            maxLength: L.maxLength,
                                            classMix: T,
                                            onFocus: V,
                                            onChange: H,
                                            onClear: z,
                                        },
                                        R,
                                    ),
                                ),
                            ),
                            K &&
                                r().createElement(
                                    'div',
                                    { className: It.helper },
                                    r().createElement(St, {
                                        variant: Q,
                                        show: g && (L.isPermanentHelper || J),
                                        helperText: F || K,
                                        helperIcon: L.helperIconSource,
                                        classMix: N,
                                    }),
                                ),
                        );
                    },
                    Wt = pe()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), items: e.array('items') },
                                a = (0, ve.Om)(
                                    (e) => {
                                        const a = De(u.items.get(), e);
                                        if (!a) throw new Error(`replay with index ${e} is not found`);
                                        return Object.assign({}, a, {
                                            vehicleInfo: Object.assign({}, a.vehicleInfo),
                                            playerInfo: Object.assign({}, a.playerInfo),
                                            epicMedals: be(a.epicMedals, (e) => e),
                                        });
                                    },
                                    { equals: de },
                                );
                            return Object.assign({}, u, { computes: { replay: a } });
                        },
                        ({ externalModel: e }) => ({
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                            sort: e.createCallback((e) => ({ param: e }), 'onSort'),
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            watch: e.createCallbackNoArgs('onWatch'),
                            find: e.createCallback((e) => ({ searchText: e }), 'onFind'),
                        }),
                    ),
                    $t = Wt[0],
                    zt = Wt[1],
                    jt = {
                        base: 'FindReplayInputContainer_base_62',
                        inputWrapper: 'FindReplayInputContainer_inputWrapper_a6',
                        input: 'FindReplayInputContainer_input_87',
                        buttonWrapper: 'FindReplayInputContainer_buttonWrapper_0c',
                        status: 'FindReplayInputContainer_status_d3',
                        status__success: 'FindReplayInputContainer_status__success_2c',
                        status__error: 'FindReplayInputContainer_status__error_2c',
                        icon: 'FindReplayInputContainer_icon_39',
                    },
                    Ut = R.strings.replays.findReplay,
                    Vt = (e) => {
                        switch (e) {
                            case nu.Initial:
                                return qe.secondary;
                            case nu.Success:
                                return qe.primaryGreen;
                            case nu.Error:
                                return qe.primaryRed;
                        }
                    },
                    Gt = { [nu.Initial]: 'initial', [nu.Success]: 'success', [nu.Error]: 'error' },
                    Xt = (0, Z.Pi)(({ className: e }) => {
                        const u = zt(),
                            a = u.model,
                            t = u.controls,
                            n = a.root.get(),
                            s = n.state,
                            l = n.isLoading,
                            i = r().useState(''),
                            o = i[0],
                            c = i[1];
                        console.log(`searchText: ${o}`);
                        const d = () => {
                                switch (s) {
                                    case nu.Error:
                                        t.refresh(), c('');
                                        break;
                                    case nu.Initial:
                                        '' !== o && t.find(o);
                                        break;
                                    case nu.Success:
                                        t.watch();
                                }
                            },
                            m = ae((e) => {
                                console.log('input changed', e), ('' === e || s === nu.Success) && t.refresh(), c(e);
                            });
                        return (
                            G(
                                j.n.ENTER,
                                () => {
                                    s === nu.Initial && d();
                                },
                                !0,
                            ),
                            r().createElement(
                                'div',
                                { className: h()(jt.base, e) },
                                r().createElement(
                                    'div',
                                    { className: jt.inputWrapper },
                                    r().createElement(Ht, {
                                        value: o,
                                        type: bt,
                                        size: 'large',
                                        placeholder: String(Ut.inputPlaceholder()),
                                        onChange: m,
                                        classMix: jt.input,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: jt.buttonWrapper },
                                        r().createElement(
                                            Qe,
                                            {
                                                type: Vt(s),
                                                disabled: l,
                                                size: Ke.large,
                                                mixClass: jt.button,
                                                onClick: d,
                                            },
                                            ((e) => {
                                                switch (e) {
                                                    case nu.Error:
                                                        return Ut.buttonText.refresh();
                                                    case nu.Initial:
                                                        return Ut.buttonText.find();
                                                    case nu.Success:
                                                        return Ut.buttonText.watch();
                                                }
                                            })(s),
                                        ),
                                    ),
                                ),
                                s !== nu.Initial &&
                                    r().createElement(
                                        'div',
                                        { className: h()(jt.status, jt[`status__${Gt[s]}`]) },
                                        r().createElement('div', { className: jt.icon }),
                                        r().createElement(
                                            'div',
                                            { className: jt.message },
                                            ((e) => {
                                                switch (e) {
                                                    case nu.Initial:
                                                        return null;
                                                    case nu.Success:
                                                        return Ut.successMessage();
                                                    case nu.Error:
                                                        return Ut.errorMessage();
                                                }
                                            })(s),
                                        ),
                                    ),
                            )
                        );
                    }),
                    Yt = (0, Z.Pi)(() => {
                        const e = (0, te.useSpring)(su),
                            u = zt().model.root.get().isLoading;
                        return r().createElement(
                            'div',
                            { className: h()('FindReplayPage_base_8e', u && 'FindReplayPage_base__loading_8a') },
                            r().createElement(
                                uu,
                                { className: h()(X, 'FindReplayPage_heading_14') },
                                R.strings.replays.page.heading.findReplay(),
                            ),
                            r().createElement(
                                te.animated.div,
                                { style: e, className: 'FindReplayPage_contentWrapper_23' },
                                r().createElement('div', { className: h()(Y, 'FindReplayPage_bg_8e') }),
                                r().createElement(
                                    'div',
                                    { className: 'FindReplayPage_content_e6' },
                                    r().createElement(Xt, { className: 'FindReplayPage_inputContainer_0c' }),
                                ),
                                u &&
                                    r().createElement(tu, {
                                        message: R.strings.replays.waitingSpinner.message(),
                                        className: 'FindReplayPage_spinner_5c',
                                    }),
                            ),
                        );
                    }),
                    qt = _t(50),
                    Kt = {
                        getter: (e) =>
                            'items' === e
                                ? qt
                                : {
                                      state: nu.Initial,
                                      initialReplayIndex: -1,
                                      isLoading: !1,
                                      isPopoverEnabled: !0,
                                      isPopoverHighlighted: !1,
                                      selectedSorting: ru.EarnedXp,
                                  },
                        controls: () => ({
                            resetFilter: () => me('reset filter'),
                            like: (e) => me(`like ${e}`),
                            sort: (e) => me(`sort ${e}`),
                            refresh: () => me('refresh table'),
                            watch: () => me('watch replay'),
                            find: (e) => me(`request to find ${e}`),
                        }),
                    },
                    Zt = _t(20),
                    Qt = {
                        getter: (e) =>
                            'items' === e
                                ? Zt
                                : {
                                      state: nu.Success,
                                      initialReplayIndex: -1,
                                      isLoading: !1,
                                      isPopoverEnabled: !0,
                                      isPopoverHighlighted: !1,
                                      selectedSorting: ru.EarnedXp,
                                  },
                        controls: () => ({
                            resetFilter: () => me('reset my replays filter'),
                            sort: (e) => me(`sort my replays by param ${e}`),
                            watch: (e) => me(`watch my replay with index ${e}`),
                            refresh: () => me('refresh my replays table'),
                        }),
                    },
                    Jt = pe()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), items: e.array('items') },
                                a = (0, ve.Om)(
                                    (e) => {
                                        const a = De(u.items.get(), e);
                                        if (!a) throw new Error(`my replay with index ${e} is not found`);
                                        return Object.assign({}, a, {
                                            vehicleInfo: Object.assign({}, a.vehicleInfo),
                                            playerInfo: Object.assign({}, a.playerInfo),
                                            epicMedals: be(a.epicMedals, (e) => e),
                                        });
                                    },
                                    { equals: de },
                                );
                            return Object.assign({}, u, { computes: { replay: a } });
                        },
                        ({ externalModel: e }) => ({
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                            sort: e.createCallback((e) => ({ param: e }), 'onSort'),
                            watch: e.createCallback((e) => ({ index: e }), 'onWatch'),
                            refresh: e.createCallbackNoArgs('onRefresh'),
                        }),
                    ),
                    er = Jt[0],
                    ur = Jt[1],
                    ar = (0, Z.Pi)(({ index: e, className: u }) => {
                        const a = ur(),
                            t = a.model,
                            n = a.controls,
                            s = t.computes.replay(e);
                        return r().createElement(Za, {
                            className: u,
                            type: 'my',
                            arenaName: s.arenaName,
                            earnedXp: s.earnedXp,
                            damageDealt: s.damageDealt,
                            damageAssisted: s.damageAssisted,
                            damageBlockedByArmor: s.damageBlockedByArmor,
                            kills: s.kills,
                            marksOfMastery: s.marksOfMastery,
                            player: s.playerInfo,
                            timestamp: s.timestamp,
                            vehicle: s.vehicleInfo,
                            epicMedalsCount: s.epicMedals.length,
                            epicMedals: s.epicMedals,
                            isFavorite: s.isFavorite,
                            onClick: () => n.watch(e),
                        });
                    }),
                    tr = (0, Z.Pi)(({ className: e }) => {
                        const u = ur().model,
                            a = u.root.get(),
                            t = a.isPopoverEnabled,
                            n = a.isPopoverHighlighted,
                            s = u.items.get().length;
                        return r().createElement(Wa, {
                            className: e,
                            count: s,
                            isPopoverEnabled: t,
                            isPopoverHighlighted: n,
                            popoverDirection: ka.Left,
                        });
                    }),
                    rr = {
                        base: 'MyReplaysTable_base_43',
                        noRecords: 'MyReplaysTable_noRecords_62',
                        table: 'MyReplaysTable_table_e8',
                        bar: 'MyReplaysTable_bar_cb',
                        row: 'MyReplaysTable_row_96',
                        row__last: 'MyReplaysTable_row__last_a3',
                        fadeIn: 'MyReplaysTable_fadeIn_7d',
                        fadeInThreeQuarters: 'MyReplaysTable_fadeInThreeQuarters_15',
                        fadeInHalf: 'MyReplaysTable_fadeInHalf_a3',
                        fadeOut: 'MyReplaysTable_fadeOut_fc',
                        fadeInWithScale: 'MyReplaysTable_fadeInWithScale_31',
                        slideUp: 'MyReplaysTable_slideUp_da',
                        scale: 'MyReplaysTable_scale_73',
                        raysAppearance: 'MyReplaysTable_raysAppearance_a6',
                        rotate: 'MyReplaysTable_rotate_af',
                        'reverse-rotate': 'MyReplaysTable_reverse-rotate_9d',
                        glowAppearance: 'MyReplaysTable_glowAppearance_f0',
                        highlightAppearance: 'MyReplaysTable_highlightAppearance_3b',
                        blink: 'MyReplaysTable_blink_d7',
                        slideUpIn: 'MyReplaysTable_slideUpIn_8d',
                    },
                    nr = (0, Z.Pi)(({ api: e, rowHeight: u = 0 }) => {
                        const a = ur(),
                            t = a.model,
                            n = a.controls,
                            s = t.root.get(),
                            l = s.selectedSorting,
                            i = s.isLoading;
                        return r().createElement(
                            'div',
                            { className: rr.base, style: { '--rowHeight': u ? `${u}rem` : 'auto' } },
                            r().createElement(tr, { className: rr.tableWidget }),
                            r().createElement(
                                Wu,
                                {
                                    api: e,
                                    type: 'my',
                                    onSort: n.sort,
                                    selectedSorting: l,
                                    className: rr.table,
                                    classNames: { bar: { base: rr.bar } },
                                },
                                0 === t.items.get().length
                                    ? r().createElement(hu, {
                                          isLoading: i,
                                          className: rr.noRecords,
                                          onResetFilter: n.resetFilter,
                                      })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          t.items
                                              .get()
                                              .map((e, u) =>
                                                  r().createElement(ar, {
                                                      className: h()(
                                                          rr.row,
                                                          u === t.items.get().length - 1 && rr.row__last,
                                                      ),
                                                      index: u,
                                                      key: e.id,
                                                  }),
                                              ),
                                      ),
                            ),
                        );
                    }),
                    sr = (0, Z.Pi)(() => {
                        const e = au(ce),
                            u = (0, te.useSpring)(su),
                            a = ur(),
                            t = a.model,
                            n = a.controls,
                            s = t.root.get(),
                            l = s.state,
                            i = s.isLoading;
                        return r().createElement(
                            'div',
                            { className: h()('MyReplaysPage_base_c9', i && 'MyReplaysPage_base__loading_a9') },
                            r().createElement(
                                uu,
                                { className: h()(X, 'MyReplaysPage_heading_0c') },
                                R.strings.replays.page.heading.myReplays(),
                            ),
                            r().createElement(
                                te.animated.div,
                                { style: u, className: 'MyReplaysPage_contentWrapper_3f' },
                                r().createElement('div', { className: h()(Y, 'MyReplaysPage_bg_57') }),
                                r().createElement(
                                    'div',
                                    { className: 'MyReplaysPage_content_ed' },
                                    (() => {
                                        switch (l) {
                                            case nu.Initial:
                                                return null;
                                            case nu.Success:
                                                return r().createElement(nr, { api: e, rowHeight: 60 });
                                            case nu.Error:
                                                return r().createElement(eu, {
                                                    isLoading: i,
                                                    onRefresh: n.refresh,
                                                    className: 'MyReplaysPage_error_44',
                                                });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                i &&
                                    r().createElement(tu, {
                                        message: R.strings.replays.waitingSpinner.message(),
                                        className: 'MyReplaysPage_spinner_94',
                                    }),
                            ),
                        );
                    }),
                    lr = {
                        [se.BestReplays]: () =>
                            r().createElement(
                                ha,
                                { options: oe.BEST_REPLAYS, mocks: At, mode: 'real' },
                                r().createElement(ut, null),
                            ),
                        [se.MyReplays]: () =>
                            r().createElement(
                                er,
                                { options: oe.MY_REPLAYS, mocks: Qt, mode: 'real' },
                                r().createElement(sr, null),
                            ),
                        [se.FindReplay]: () =>
                            r().createElement(
                                $t,
                                { options: oe.FIND_REPLAY, mocks: Kt, mode: 'real' },
                                r().createElement(Yt, null),
                            ),
                    },
                    ir = ({ pageView: e }) => {
                        const u = lr[e];
                        return u ? r().createElement(u, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    or = (0, Z.Pi)(() => {
                        const e = he(),
                            u = e.model,
                            a = e.controls,
                            t = K(),
                            n = u.root.get().pageViewId;
                        return r().createElement(
                            'div',
                            { className: 'App_base_bb' },
                            r().createElement(
                                'div',
                                { className: 'App_viewContainer_e7' },
                                r().createElement(ir, { pageView: n }),
                            ),
                            r().createElement(
                                Te,
                                { options: oe.TABS },
                                r().createElement(Xe, {
                                    pageView: n,
                                    className: h()('App_sidebar_9b', t.isMedium && 'App_sidebar__medium_e2'),
                                }),
                            ),
                            r().createElement(q, { onClose: a.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        r().createElement(S, null, r().createElement(Fe, null, r().createElement(or, null))),
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, a, t) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, a, t] = deferred[i], n = !0, s = 0; s < u.length; s++)
                        (!1 & t || r >= t) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), t < r && (r = t));
                    if (n) {
                        deferred.splice(i--, 1);
                        var l = a();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            t = t || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > t; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, a, t];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var a in u)
                __webpack_require__.o(u, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: u[a] });
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 37),
        (() => {
            var e = { 37: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, a) => {
                    var t,
                        r,
                        [n, s, l] = a,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (t in s) __webpack_require__.o(s, t) && (__webpack_require__.m[t] = s[t]);
                        if (l) var o = l(__webpack_require__);
                    }
                    for (u && u(a); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(o);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(u.bind(null, 0)), (a.push = u.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(814));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
