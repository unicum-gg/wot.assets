(() => {
    var __webpack_modules__ = {
            329: (e, u, t) => {
                'use strict';
                let n, a, r;
                t.d(u, { V2: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var n = t(6179),
                    a = t.n(n),
                    r = t(9916);
                class s extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const u = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
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
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
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
            2472: (e, u, t) => {
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
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => v,
                        isFocused: () => p,
                        pxToRem: () => g,
                        remToPx: () => C,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    s = t(8566);
                const i = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    R = {
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
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    B3: () => o,
                    Z5: () => s.Z5,
                    B0: () => i,
                    wU: () => v,
                    ry: () => D,
                    Eu: () => g,
                    Sy: () => B,
                    SW: () => p,
                    P3: () => h,
                });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = t(1358);
                var s = t(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                        function s(e) {
                                            A(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
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
                                })(u, _);
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
                    B = () => C(i.CLOSE),
                    p = () => C(i.POP_OVER, { on: !1 }),
                    h = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const s = m.O.view.getViewGlobalPosition(),
                            o = t.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            d = o.width,
                            E = o.height,
                            _ = {
                                x: m.O.view.pxToRem(l) + s.x,
                                y: m.O.view.pxToRem(c) + s.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(E),
                            };
                        C(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: u,
                            bbox: F(_),
                            on: !0,
                            args: r,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    b = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(7572);
                const w = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, B);
                        },
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: v,
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
                        ClickOutsideManager: w,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, u, t) => {
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
            2591: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => d, et: () => c, V2: () => r.V2 });
                var n = t(6483),
                    a = t.n(n),
                    r = t(329),
                    s = t(2372),
                    i = t(6179),
                    o = t.n(i);
                const l = {
                    base: 'Currency_base_5e',
                    base__reverse: 'Currency_base__reverse_f9',
                    icon: 'Currency_icon_0c',
                    base__s16x16: 'Currency_base__s16x16_bb',
                    base__gold: 'Currency_base__gold_34',
                    base__credits: 'Currency_base__credits_91',
                    base__s24x24: 'Currency_base__s24x24_4c',
                    value__credits: 'Currency_value__credits_64',
                    value__gold: 'Currency_value__gold_b2',
                    value__notEnough: 'Currency_value__notEnough_31',
                };
                let c;
                !(function (e) {
                    (e.S16x16 = 's16x16'), (e.S24x24 = 's24x24');
                })(c || (c = {}));
                const d = ({
                    type: e,
                    value: u,
                    size: t = c.S24x24,
                    isEnough: n = !0,
                    isReverse: i,
                    isAvailable: d = !0,
                    className: E,
                    classNames: m,
                }) => {
                    const _ = d && !n;
                    return o().createElement(
                        'div',
                        { className: a()(l.base, i && l.base__reverse, l[`base__${t}`], l[`base__${e}`], E) },
                        o().createElement(
                            'div',
                            {
                                className: a()(
                                    l.value,
                                    l[`value__${e}`],
                                    _ && l.value__notEnough,
                                    null == m ? void 0 : m.value,
                                ),
                            },
                            d
                                ? o().createElement(s.A, { value: u, format: e === r.V2.gold ? 'gold' : 'integral' })
                                : o().createElement('div', null, R.strings.ny.purchase.unavailable()),
                        ),
                        o().createElement('div', { className: a()(l.icon, null == m ? void 0 : m.icon) }),
                    );
                };
            },
            1871: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n), t.d(n, { Area: () => lu, Bar: () => su, Default: () => ou, useVerticalScrollApi: () => Ve });
                var a = {};
                t.r(a),
                    t.d(a, {
                        Area: () => wu,
                        Bar: () => vu,
                        DefaultScroll: () => fu,
                        Direction: () => ze,
                        defaultSettings: () => $e,
                        useHorizontalScrollApi: () => cu,
                    });
                var r = t(6179),
                    s = t.n(r);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
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
                })(c || (c = {}));
                const E = o.O.client.getSize('rem'),
                    m = E.width,
                    _ = E.height,
                    A = Object.assign({ width: m, height: _ }, d(m, _, l)),
                    F = (0, r.createContext)(A),
                    D = ['children'];
                const g = (e) => {
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
                        })(e, D);
                    const n = (0, r.useContext)(F),
                        a = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        m = n.mediumWidth,
                        _ = n.smallWidth,
                        A = n.extraSmallWidth,
                        g = n.extraLargeHeight,
                        C = n.largeHeight,
                        B = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        v = { extraLarge: g, large: C, medium: B, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return i(u, t, v);
                        if (t.largeWidth && E) return i(u, t, v);
                        if (t.mediumWidth && m) return i(u, t, v);
                        if (t.smallWidth && _) return i(u, t, v);
                        if (t.extraSmallWidth && A) return i(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && g) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                g.defaultProps = {
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
                (0, r.memo)(g);
                const C = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, r.useContext)(F),
                            t = (0, r.useState)(u),
                            n = t[0],
                            a = t[1],
                            i = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                a(Object.assign({ width: t, height: n }, d(t, n, l)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        C(() => {
                            o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', i),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const E = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(F.Provider, { value: E }, e);
                    };
                var p = t(6483),
                    h = t.n(p),
                    v = t(926),
                    b = t.n(v);
                let f, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const S = () => {
                        const e = (0, r.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function P() {
                    return (
                        (P = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        P.apply(null, arguments)
                    );
                }
                const T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_WIDTH,
                        [w.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [w.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [y.ExtraSmall]: '',
                        [y.Small]: b().SMALL_HEIGHT,
                        [y.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [y.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL,
                        [f.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [f.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [f.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    k = (e) => {
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
                            })(e, x);
                        const a = S(),
                            r = a.mediaWidth,
                            i = a.mediaHeight,
                            o = a.mediaSize;
                        return s().createElement('div', P({ className: h()(t, T[r], N[i], O[o]) }, n), u);
                    },
                    I = ['children'];
                const L = (e) => {
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
                        })(e, I);
                    return s().createElement(B, null, s().createElement(k, t, u));
                };
                var M = t(493),
                    U = t.n(M);
                let G;
                !(function (e) {
                    (e.Available = 'available'), (e.Unavailable = 'unavailable'), (e.Locked = 'locked');
                })(G || (G = {}));
                const H = {
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
                    easeOutBack(e) {
                        const u = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                    },
                    bezier: (e, u, t, n) => (a) =>
                        (1 - a) * (1 - a) * (1 - a) * e +
                        3 * (1 - a) * (1 - a) * a * u +
                        3 * (1 - a) * a * a * t +
                        a * a * a * n,
                };
                var W = t(5521),
                    z = t(9916);
                const $ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = W.n.NONE, u = $, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== W.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                function V() {
                    !(function (e = W.n.ESCAPE) {
                        q(e, z.Sy, !0);
                    })(W.n.ESCAPE);
                }
                var Y = t(3403),
                    j = t(7030);
                function X(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Q = {
                        playHighlight() {
                            X('highlight');
                        },
                        playClick() {
                            X('play');
                        },
                        playYes() {
                            X('yes1');
                        },
                    },
                    K = {
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
                function J() {
                    return (
                        (J = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        J.apply(null, arguments)
                    );
                }
                class ee extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && X(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && X(this.props.soundClick);
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
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
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
                                })(e, Z)),
                            m = h()(K.base, K[`base__${r}`], K[`base__${a}`], null == i ? void 0 : i.base),
                            _ = h()(K.icon, K[`icon__${r}`], K[`icon__${a}`], null == i ? void 0 : i.icon),
                            A = h()(K.glow, null == i ? void 0 : i.glow),
                            F = h()(K.caption, K[`caption__${r}`], null == i ? void 0 : i.caption),
                            D = h()(K.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            J(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== r && s().createElement('div', { className: K.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            n && s().createElement('div', { className: D }, n),
                        );
                    }
                }
                ee.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ue = t(2591);
                const te = {
                        base: 'BaseWithCurrency_base_56',
                        fadeIn: 'BaseWithCurrency_fadeIn_0d',
                        vignette: 'BaseWithCurrency_vignette_b1',
                        closeButton: 'BaseWithCurrency_closeButton_fd',
                        balance: 'BaseWithCurrency_balance_bf',
                        currency: 'BaseWithCurrency_currency_e9',
                        slideInFadeIn: 'BaseWithCurrency_slideInFadeIn_40',
                        fadeOut: 'BaseWithCurrency_fadeOut_cd',
                        fadeInWithScale: 'BaseWithCurrency_fadeInWithScale_d9',
                        slideUp: 'BaseWithCurrency_slideUp_9b',
                        scale: 'BaseWithCurrency_scale_ca',
                        spin: 'BaseWithCurrency_spin_55',
                        blink: 'BaseWithCurrency_blink_49',
                        slideInNotification: 'BaseWithCurrency_slideInNotification_a6',
                    },
                    ne = ({ balance: e, isWalletAvailable: u, children: t }) =>
                        s().createElement(
                            'div',
                            { className: te.base, lang: R.strings.settings.LANGUAGE_CODE() },
                            s().createElement('div', { className: te.vignette }),
                            s().createElement(
                                'div',
                                { className: te.closeButton },
                                s().createElement(ee, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    soundClick: R.sounds.cancelcloseno(),
                                    onClick: () => o.O.view.sendEvent.close(),
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: te.balance },
                                e.map(({ type: e, amount: t }) =>
                                    s().createElement(
                                        'div',
                                        { key: e, className: te.currency },
                                        s().createElement(ue.F, { type: e, value: t, isAvailable: u, isReverse: !0 }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: te.content }, t),
                        ),
                    ae = 'Logo_base_31',
                    re = 'Logo_image_4f',
                    se = 'Logo_title_ad',
                    ie = 'Logo_text_ae',
                    oe = 'Logo_text__gradient1_10',
                    le = 'Logo_text__gradient2_42',
                    ce = ({ name: e }) =>
                        s().createElement(
                            'div',
                            { className: ae },
                            s().createElement('div', { className: re }),
                            s().createElement(
                                'div',
                                { className: se },
                                s().createElement('div', { className: ie }, e),
                                s().createElement('div', { className: h()(ie, oe) }, e),
                                s().createElement('div', { className: h()(ie, le) }, e),
                            ),
                        );
                let de, Ee, me, _e, Ae, Fe, De;
                function ge() {}
                !(function (e) {
                    (e.Undefined = 'undefined'),
                        (e.NewYear = 'NewYear'),
                        (e.Christmas = 'Christmas'),
                        (e.Fairytale = 'Fairytale'),
                        (e.Oriental = 'Oriental'),
                        (e.Soviet = 'soviet'),
                        (e.TraditionalWestern = 'traditionalWestern'),
                        (e.ModernWestern = 'modernWestern'),
                        (e.Asian = 'asian'),
                        (e.Mega = 'Mega'),
                        (e.GiftSystem = 'GiftSystem'),
                        (e.Cat = 'Cat'),
                        (e.Atm = 'Atm'),
                        (e.Gift2 = 'Gift2'),
                        (e.Bro = 'Bro'),
                        (e.Dog = 'Dog'),
                        (e.Surprise = 'Surprise');
                })(de || (de = {})),
                    (function (e) {
                        (e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource');
                    })(Ee || (Ee = {})),
                    (function (e) {
                        (e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor');
                    })(me || (me = {})),
                    (function (e) {
                        (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4');
                    })(Ae || (Ae = {})),
                    (function (e) {
                        (e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default');
                    })(Fe || (Fe = {})),
                    (function (e) {
                        (e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards');
                    })(De || (De = {}));
                function Ce() {
                    return !1;
                }
                console.log;
                var Be = t(9174);
                function pe(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return he(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? he(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function he(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ve = (e) => (0 === e ? window : window.subViews.get(e));
                function be(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function fe(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const we = fe;
                function ye(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Re(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = we(e, a);
                            u(r, a, e) && n.push(t(r, a, e));
                        }
                        return n;
                    })(e, be, u);
                }
                var Se = t(3946);
                let xe;
                !(function (e) {
                    (e.Bought = 'bought'), (e.Applied = 'applied'), (e.Purchasable = 'purchasable');
                })(xe || (xe = {}));
                const Pe = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ve,
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
                                                        return a.set(l, t), e && t(s(r)), l;
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
                                                        for (var e, t = pe(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Be.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Be.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Be.LO.box(n, { equals: Ce });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Be.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = Be.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Be.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Be.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Be.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
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
                                            m = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, r.useRef)(!1),
                                    m = (0, r.useState)(n),
                                    _ = m[0],
                                    A = m[1],
                                    F = (0, r.useState)(() => d(n, a, l)),
                                    D = F[0],
                                    g = F[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        E.current ? g(d(_, a, l)) : (E.current = !0);
                                    }, [l, _, a]),
                                    (0, r.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    s().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = e.object(),
                                t = {
                                    root: u,
                                    rewards: e.array('rewards'),
                                    instantRewards: e.array('instantRewards'),
                                    sacks: e.array('sacks'),
                                    nextBundle: Be.LO.box(u.get().currentBundle),
                                    balance: e.array('balance'),
                                },
                                n = (0, Se.Om)(() => t.root.get().currentBundle),
                                a = (0, Se.Om)(() => t.root.get().currency),
                                r = (0, Se.Om)(() => {
                                    const e = t.root.get().currentBundle;
                                    return Re(t.sacks.get(), (u) => ({
                                        bundleType: u.bundleType,
                                        sackState: u.sackState,
                                        isSelected: u.bundleType === e,
                                    }));
                                }),
                                s = (0, Se.Om)(() =>
                                    ye(t.balance.get(), (e) => Object.assign({}, e, { type: e.currency })),
                                ),
                                i = (0, Se.Om)(() =>
                                    u.get().isBundleReceived
                                        ? u.get().isApplied
                                            ? xe.Applied
                                            : xe.Bought
                                        : xe.Purchasable,
                                ),
                                o = (0, Se.Om)(() => {
                                    var e;
                                    return null == (e = fe(t.instantRewards.get(), 0)) ? void 0 : e.value;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    currentBundle: n,
                                    currencyType: a,
                                    getSacks: r,
                                    hasCustomization: (0, Se.Om)(() => t.root.get().currentBundle !== Ae.Level1),
                                    getBalance: s,
                                    getBundleState: i,
                                    getInstantRewardAmount: o,
                                },
                            });
                        },
                        ({ model: e, externalModel: u }) => ({
                            buy: u.createCallbackNoArgs('onBuy'),
                            openConverter: u.createCallbackNoArgs('onOpenConverter'),
                            buyGold: u.createCallbackNoArgs('onBuyGold'),
                            switchBundle: u.createCallback((e) => ({ bundleType: e }), 'onSwitchBundle'),
                            showStylePreview: u.createCallback((e) => ({ intCD: e }), 'onStylePreview'),
                            setNextBundle: (0, Be.aD)((u) => e.nextBundle.set(u)),
                        }),
                    ),
                    Te = Pe[0],
                    Ne = Pe[1],
                    Oe = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ke = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    Ie = [];
                function Le(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), Ie)
                    );
                }
                function Me(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        a,
                    ];
                }
                const Ue = (e, u = []) => {
                    const t = (0, r.useRef)(),
                        n = (0, r.useCallback)((...u) => {
                            t.current && t.current(), (t.current = e(...u));
                        }, u);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [n],
                        ),
                        n
                    );
                };
                function Ge(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return He(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? He(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function He(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function We(e, u, t) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    r ||
                                        (n && !a && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                let ze;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(ze || (ze = {}));
                const $e = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    qe = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : Oe(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? $e : c,
                                E = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var n, a = Ge(u(e).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                A = We(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, j.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                D = F[0],
                                g = F[1],
                                C = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = D.scrollPosition.get(),
                                            r = (null != (n = D.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, u * t + r + a);
                                    },
                                    [D.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            g.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [g, d.animationConfig, D.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            r = C(u, e, n);
                                        B(r);
                                    },
                                    [B, C, d.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            E.current && _.trigger('mouseWheel', e, D.scrollPosition, u(E.current));
                                    },
                                    [D.scrollPosition, p, _],
                                ),
                                v = Ue(
                                    () =>
                                        ke(() => {
                                            const e = E.current;
                                            e &&
                                                (B(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, D.scrollPosition.goal],
                                ),
                                b = Le(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: B,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: m,
                                    scrollPosition: g,
                                    animationScroll: D,
                                    recalculateContent: b,
                                    events: { on: _.on, off: _.off },
                                }),
                                [D.scrollPosition, B, p, _.off, _.on, b, h, g, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ve = qe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ze.Next : ze.Prev),
                    }),
                    Ye = 'VerticalBar_base_f3',
                    je = 'VerticalBar_base__nonActive_42',
                    Xe = 'VerticalBar_topButton_d7',
                    Qe = 'VerticalBar_bottomButton_06',
                    Ke = 'VerticalBar_track_df',
                    Ze = 'VerticalBar_thumb_32',
                    Je = 'VerticalBar_rail_43',
                    eu = 'disable',
                    uu = () => {},
                    tu = { pending: !1, offset: 0 },
                    nu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    au = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ru = (e, u) => Math.max(20, e.offsetHeight * u),
                    su = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = nu, onDrag: n = uu }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, r.useState)(tu),
                            _ = m[0],
                            A = m[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = Le(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${ru(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(je) : a.current.classList.remove(je)),
                                    s
                                );
                            }),
                            g = Le(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = Oe(0, 1, r / (a - n)),
                                    E = (u.offsetHeight - ru(u, s)) * o;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(eu), void l.current.classList.remove(eu);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(eu), void l.current.classList.add(eu);
                                            var u, t;
                                            i.current.classList.remove(eu), l.current.classList.remove(eu);
                                        }
                                    })(E);
                            }),
                            C = Le(() => {
                                au(e, () => {
                                    D(), g();
                                });
                            });
                        (0, r.useEffect)(() => ke(C)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    au(e, () => {
                                        g();
                                    });
                                };
                                let t = uu;
                                const n = () => {
                                    t(), (t = ke(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(tu);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        au(e, (t) => {
                                            const a = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = u.screenY - _.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, F]);
                        const B = Me((u) => e.applyStepTo(u), E, [e]),
                            p = B[0],
                            v = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const b = (e) => {
                            e.target.classList.contains(eu) || X('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(Ye, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(Xe, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(eu) || 0 !== e.button || (X('play'), p(ze.Next));
                                },
                                ref: i,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Ke, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((X('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        au(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? ze.Prev : ze.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: d, className: h()(Ze, u.thumb) }),
                                s().createElement('div', { className: h()(Je, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Qe, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(eu) || 0 !== e.button || (X('play'), p(ze.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    iu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ou = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(iu.base, e.base) });
                            }, [n]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(iu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(iu.area, a) },
                                s().createElement(lu, { className: i, classNames: o, api: E }, e),
                            ),
                            s().createElement(su, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    lu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => ke(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(iu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(iu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                lu.Default = ou;
                const cu = qe({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ze.Next : ze.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    du = 'HorizontalBar_base_49',
                    Eu = 'HorizontalBar_base__nonActive_82',
                    mu = 'HorizontalBar_leftButton_5f',
                    _u = 'HorizontalBar_rightButton_03',
                    Au = 'HorizontalBar_track_0d',
                    Fu = 'HorizontalBar_thumb_fd',
                    Du = 'HorizontalBar_rail_32',
                    gu = 'disable',
                    Cu = { pending: !1, offset: 0 },
                    Bu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    pu = () => {},
                    hu = (e, u) => Math.max(20, e.offsetWidth * u),
                    vu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Bu, onDrag: n = pu }) => {
                        const a = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, r.useState)(Cu),
                            _ = m[0],
                            A = m[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    o = Oe(0, 1, r / (a - n)),
                                    E = (u.offsetWidth - hu(u, s)) * o;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(gu), void l.current.classList.remove(gu);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(gu), void l.current.classList.add(gu);
                                            var u, t;
                                            i.current.classList.remove(gu), l.current.classList.remove(gu);
                                        }
                                    })(E);
                            },
                            g = Le(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    (u.style.width = `${hu(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(Eu) : a.current.classList.remove(Eu));
                                })(),
                                    D();
                            });
                        (0, r.useEffect)(() => ke(g)),
                            (0, r.useEffect)(
                                () =>
                                    ke(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = pu;
                                        const n = () => {
                                            t(), (t = ke(g));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - i.getBoundingClientRect().x,
                                            E = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: E });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), F(Cu);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, F]);
                        const C = Me((u) => e.applyStepTo(u), E, [e]),
                            B = C[0],
                            p = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (e) => {
                            e.target.classList.contains(gu) || X('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(du, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(mu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gu) || 0 !== e.button || (X('play'), B(ze.Next));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Au, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((X('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? ze.Prev : ze.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: d, className: h()(Fu, u.thumb) }),
                                s().createElement('div', { className: h()(Du, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(_u, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gu) || 0 !== e.button || (X('play'), B(ze.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    bu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    fu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(bu.base, e.base) });
                            }, [n]),
                            E = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(bu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(bu.defaultScrollArea, a) },
                                s().createElement(wu, { className: o, api: E, classNames: i }, e),
                            ),
                            s().createElement(vu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    wu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => ke(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(bu.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(bu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(bu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (wu.Bar = vu), (wu.Default = fu);
                const yu = { Vertical: n, Horizontal: a },
                    Ru = ['barClassNames'],
                    Su = ['barClassNames'];
                function xu() {
                    return (
                        (xu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        xu.apply(null, arguments)
                    );
                }
                function Pu(e, u) {
                    if (null == e) return {};
                    var t = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (u.indexOf(n) >= 0) continue;
                            t[n] = e[n];
                        }
                    return t;
                }
                const Tu = {
                    topButton: 'NYScroll_topButton_10',
                    rail: 'NYScroll_rail_2d',
                    thumb: 'NYScroll_thumb_dc',
                    bottomButton: 'NYScroll_bottomButton_e7',
                };
                const Nu = Tu;
                const Ou = {
                    Vertical: function (e) {
                        let u = e.barClassNames,
                            t = void 0 === u ? {} : u,
                            n = Pu(e, Ru);
                        return s().createElement(
                            yu.Vertical.Default,
                            xu({}, n, { barClassNames: Object.assign({}, Tu, t) }),
                        );
                    },
                    Horizontal: function (e) {
                        let u = e.barClassNames,
                            t = void 0 === u ? {} : u,
                            n = Pu(e, Su);
                        return s().createElement(
                            yu.Horizontal.DefaultScroll,
                            xu({}, n, { barClassNames: Object.assign({}, Nu, t) }),
                        );
                    },
                    useVerticalApi: Ve,
                    useHorizontalApi: cu,
                };
                var ku = t(2372),
                    Iu = t(1281);
                let Lu;
                function Mu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function Uu(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function Gu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Lu || (Lu = {}));
                const Hu = (e) => e.replace(/&nbsp;/g, ' '),
                    Wu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    zu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    $u = (e, u, t = Lu.left) => e.split(u).reduce(t === Lu.left ? Wu : zu, []),
                    qu = (() => {
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
                    Vu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Yu = (e, u = Lu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Vu.includes(t)) return qu(e);
                        if ('ja' === t) {
                            return (0, Iu.D4)()
                                .parse(e)
                                .map((e) => Hu(e));
                        }
                        return ((e, u = Lu.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = Hu(e);
                            return $u(a, /( )/, u).forEach((e) => (t = t.concat($u(e, n, Lu.left)))), t;
                        })(e, u);
                    },
                    ju = 'FormatText_base_d0',
                    Xu = ({ binding: e, text: u = '', classMix: t, alignment: n = Lu.left, formatWithBrackets: a }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const i = a && e ? Mu(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, a) =>
                                s().createElement(
                                    'div',
                                    { className: h()(ju, t), key: `${u}-${a}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Yu(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => s().createElement(r.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                var Qu = t(8613);
                const Ku = 24,
                    Zu = 60,
                    Ju = 60 * Zu,
                    et = Ku * Ju;
                Date.now(), Qu.Ew.getRegionalDateTime, Qu.Ew.getFormattedDateTime;
                const ut = 'GiftBox_base_a4',
                    tt = 'GiftBox_base__received_16',
                    nt = 'GiftBox_topLine_4f',
                    at = 'GiftBox_icon_76',
                    rt = 'GiftBox_reward_2a',
                    st = 'GiftBox_content_2c',
                    it = 'GiftBox_title_e9',
                    ot = 'GiftBox_description_cd';
                let lt, ct, dt, Et, mt, _t, At, Ft;
                !(function (e) {
                    (e.Items = 'items'),
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
                        (e.Entitlements = 'entitlements'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.NewYearGuestD = 'ny_dog'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(lt || (lt = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.EquipCoin = 'equipCoin');
                    })(ct || (ct = {})),
                    (function (e) {
                        (e.Big = 'big'),
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
                            (e.S48x48 = 's48x48');
                    })(dt || (dt = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Et || (Et = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(mt || (mt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(_t || (_t = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(At || (At = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Ft || (Ft = {}));
                const Dt = [
                        lt.Items,
                        lt.Equipment,
                        lt.Xp,
                        lt.XpFactor,
                        lt.Blueprints,
                        lt.BlueprintsAny,
                        lt.Goodies,
                        lt.Berths,
                        lt.Slots,
                        lt.Tokens,
                        lt.CrewSkins,
                        lt.CrewBooks,
                        lt.Customizations,
                        lt.CreditsFactor,
                        lt.TankmenXp,
                        lt.TankmenXpFactor,
                        lt.FreeXpFactor,
                        lt.BattleToken,
                        lt.Entitlements,
                        lt.PremiumUniversal,
                        lt.NaturalCover,
                        lt.BpCoin,
                        lt.BattlePassSelectToken,
                        lt.BattlaPassFinalAchievement,
                        lt.BattleBadge,
                        lt.BonusX5,
                        lt.CrewBonusX3,
                        lt.NewYearInvoice,
                        lt.EpicSelectToken,
                        lt.Comp7TokenWeeklyReward,
                        lt.DeluxeGift,
                        lt.BattleBoosterGift,
                        lt.OptionalDevice,
                    ],
                    gt = [lt.Gold, lt.Credits, lt.Crystal, lt.FreeXp],
                    Ct = [lt.BattlePassPoints, lt.EquipCoin],
                    Bt = [lt.PremiumPlus, lt.Premium],
                    pt = ['engravings', 'backgrounds'],
                    ht = ['engraving', 'background'],
                    vt = (e, u = dt.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case dt.S600x450:
                                        return 'c_600x450';
                                    case dt.S400x300:
                                        return 'c_400x300';
                                    case dt.S296x222:
                                        return 'c_296x222';
                                    case dt.S232x174:
                                        return 'c_232x174';
                                    case dt.Big:
                                        return 'c_80x80';
                                    case dt.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'entitlements':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = pt[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(ht[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'premiumTank_rent':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles_rent`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            case 'newYearSlot':
                                return `R.images.gui.maps.icons.newYear.rewards.${u}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    bt = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    ft = [dt.Small, dt.Big],
                    wt = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Et.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Et.CURRENCY:
                            case Et.NUMBER:
                                return s().createElement(ku.A, { format: 'integral', value: Number(e) });
                            case Et.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    yt = [
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
                function Rt(e) {
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
                const St = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    xt = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            C = e.onShow,
                            B = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, yt);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [g],
                            ),
                            b = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (St(t, _, { isMouseEvent: !0, on: !0, arguments: Rt(n) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, v, C]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        St(t, _, { on: !1 }, v),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, _, v, B]),
                            w = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return F
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      a && a(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Pt = ['children'];
                function Tt() {
                    return (
                        (Tt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Tt.apply(null, arguments)
                    );
                }
                const Nt = (e) => {
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
                            })(e, Pt);
                        return s().createElement(
                            xt,
                            Tt(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Ot = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function kt() {
                    return (
                        (kt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        kt.apply(null, arguments)
                    );
                }
                const It = R.views.common.tooltip_window.simple_tooltip_content,
                    Lt = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            a = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ot);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: a, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, a, o]);
                        return s().createElement(
                            xt,
                            kt(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? It.SimpleTooltipHtmlContent('resId') : It.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Mt() {
                    return (
                        (Mt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Mt.apply(null, arguments)
                    );
                }
                const Ut = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Lt, u, n);
                        const a = u.contentId;
                        return a ? s().createElement(xt, Mt({}, u, { contentId: a }), n) : s().createElement(Nt, u, n);
                    },
                    Gt = {
                        item: 'Rewards_item_b4',
                        reward: 'Rewards_reward_9e',
                        reward__clickable: 'Rewards_reward__clickable_50',
                        icon: 'Rewards_icon_9a',
                        loupe: 'Rewards_loupe_a0',
                        loupe__hover: 'Rewards_loupe__hover_04',
                    },
                    Ht = (0, Y.Pi)(({ className: e }) => {
                        const u = Ne(),
                            t = u.model,
                            n = u.controls,
                            a = t.instantRewards;
                        return s().createElement(
                            'div',
                            { className: h()(Gt.base, e) },
                            ye(a.get(), (e, u) => {
                                const t = 'style' === e.icon && e.intCD;
                                return s().createElement(
                                    'div',
                                    { className: Gt.item, key: u },
                                    s().createElement(
                                        Ut,
                                        { tooltipArgs: bt({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)) },
                                        s().createElement(
                                            'div',
                                            {
                                                className: h()(Gt.reward, t && Gt.reward__clickable),
                                                onClick: () => {
                                                    t && n.showStylePreview(e.intCD);
                                                },
                                                onMouseEnter: () => {
                                                    t && X(R.sounds.highlight());
                                                },
                                            },
                                            s().createElement('div', {
                                                className: Gt.icon,
                                                style: {
                                                    backgroundImage: `url(${((a = e.bigIcon), (r = e.icon), R.images.gui.maps.icons.newYear.rewards.s180x135.$dyn(a) || R.images.gui.maps.icons.quests.bonuses.s180x135.$dyn(r))})`,
                                                },
                                            }),
                                            t &&
                                                s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement('div', { className: Gt.loupe }),
                                                    s().createElement('div', {
                                                        className: h()(Gt.loupe, Gt.loupe__hover),
                                                    }),
                                                ),
                                        ),
                                    ),
                                );
                                var a, r;
                            }),
                        );
                    }),
                    Wt = R.strings.ny.bundlePurchaseDialog.content,
                    zt = (0, Y.Pi)(({ className: e }) => {
                        const u = Ne().model,
                            t = u.root.get(),
                            n = t.timeTill,
                            a = t.isBundleReceived,
                            r = u.computes.currentBundle(),
                            i = (function (e = 0) {
                                let u = e;
                                const t = Math.trunc(u / et);
                                u -= t * et;
                                const n = Math.trunc(u / Ju);
                                u -= n * Ju;
                                const a = Math.trunc(u / Zu);
                                return (u -= a * Zu), { days: t, hours: n, minutes: a, seconds: u };
                            })(n),
                            o = i.days;
                        return s().createElement(
                            'div',
                            { className: h()(ut, a && tt, e) },
                            s().createElement('div', { className: nt }, s().createElement('div', { className: at })),
                            s().createElement(Ht, { className: rt }),
                            s().createElement(
                                'div',
                                { className: st },
                                s().createElement(
                                    'div',
                                    { className: it },
                                    Uu(Wt.customization.title.$dyn(r), { amount: u.computes.getInstantRewardAmount() }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ot },
                                    o > 0
                                        ? s().createElement(Xu, {
                                              text: Wt.customization.description.$plural(r, o),
                                              binding: { daysCount: s().createElement(ku.A, { value: o }) },
                                          })
                                        : s().createElement(Xu, { text: Wt.customization.description.lastDay.$dyn(r) }),
                                ),
                            ),
                        );
                    }),
                    $t = () => {},
                    qt = (e, u, t = !0) => {
                        const n = (0, r.useState)(e[u]),
                            a = n[0],
                            s = n[1],
                            i = (0, r.useRef)($t),
                            o = (0, r.useCallback)(() => {
                                a.stop ||
                                    (i.current(),
                                    (i.current = ((e, u) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = e();
                                        }, u);
                                        return () => {
                                            'function' == typeof t && t(), clearTimeout(n);
                                        };
                                    })(() => {
                                        s(e[null == a ? void 0 : a.nextState]);
                                    }, a.timeout)));
                            }, [a, e]);
                        return (
                            (0, r.useEffect)(() => (t && o(), () => i.current()), [t, o]),
                            {
                                step: a,
                                setStep: (0, r.useCallback)(
                                    (u) => {
                                        s(e[u]);
                                    },
                                    [e],
                                ),
                                next: o,
                            }
                        );
                    };
                let Vt, Yt;
                !(function (e) {
                    (e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge');
                })(Vt || (Vt = {})),
                    (function (e) {
                        (e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB');
                    })(Yt || (Yt = {}));
                const jt = () => {},
                    Xt = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'loop',
                        'state',
                        'onAnimationComplete',
                    ];
                function Qt() {
                    return (
                        (Qt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Qt.apply(null, arguments)
                    );
                }
                const Kt = (0, r.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            n = e.getSrcByFrame,
                            a = e.frameCount,
                            i = e.onAnimate,
                            o = void 0 === i ? jt : i,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            d = e.initialFrameIndex,
                            E = void 0 === d ? 0 : d,
                            m = e.loop,
                            _ = void 0 === m || m,
                            A = e.state,
                            F = void 0 === A ? 'play' : A,
                            D = e.onAnimationComplete,
                            g = void 0 === D ? jt : D,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Xt);
                        const B = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const r = a - 1,
                                    s = e.getContext('2d'),
                                    i = (n) => {
                                        s.clearRect(0, 0, e.width, e.height), s.drawImage(n, 0, 0, u, t);
                                    };
                                if ('stop' === F) {
                                    const e = n(0),
                                        u = new Image();
                                    u.src = e;
                                    const t = () => i(u);
                                    return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                }
                                const l = ((e, u) => {
                                        const t = [];
                                        for (let n = 0; n < e; n++) {
                                            const e = new Image();
                                            (e.src = u(n)), t.push(e);
                                        }
                                        return t;
                                    })(a, n),
                                    d = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return (t += 1), t > e && (t = 0), u;
                                        };
                                    })(r, E),
                                    m = setInterval(() => {
                                        const e = d(),
                                            u = l[e];
                                        i(l[e]), o(e, u), e === r && (g(), _ || clearInterval(m));
                                    }, c);
                                return () => clearInterval(m);
                            }, [a, c, n, t, E, _, o, g, F, u]),
                            s().createElement('canvas', Qt({}, C, { width: u, height: t, ref: B }))
                        );
                    }),
                    Zt = {
                        base: 'Convertation_base_86',
                        bumpStars: 'Convertation_bumpStars_9e',
                        bumpParticles: 'Convertation_bumpParticles_18',
                        particlesCanvas: 'Convertation_particlesCanvas_97',
                        bump: 'Convertation_bump_5e',
                        bumpRays: 'Convertation_bumpRays_c0',
                        twirlyCanvas: 'Convertation_twirlyCanvas_65',
                        base__start: 'Convertation_base__start_e7',
                        base__bump: 'Convertation_base__bump_26',
                        base__end: 'Convertation_base__end_8c',
                        reward: 'Convertation_reward_7e',
                        rewardFrom: 'Convertation_rewardFrom_0b',
                        rewardTo: 'Convertation_rewardTo_92',
                        star: 'Convertation_star_06',
                        star__one: 'Convertation_star__one_d7',
                        star__second: 'Convertation_star__second_9e',
                        star__third: 'Convertation_star__third_11',
                    },
                    Jt = ['children'],
                    en = ['children'];
                function un(e, u) {
                    if (null == e) return {};
                    var t = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (u.indexOf(n) >= 0) continue;
                            t[n] = e[n];
                        }
                    return t;
                }
                function tn() {
                    return (
                        (tn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        tn.apply(null, arguments)
                    );
                }
                const nn = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    an = { width: 250, height: 250 },
                    rn = () => {},
                    sn = (e) =>
                        `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    on = ({
                        children: [e, u],
                        className: t,
                        classNames: n = {},
                        onAnimate: a = rn,
                        animationSettings: i = nn,
                        getSrcByFrameTwirly: o = sn,
                        size: l = an,
                        drawSize: c = an,
                        isConvertationStart: d = !0,
                        initAnimationState: E = 'idle',
                    }) => {
                        const m = qt(i, E, d).step.state;
                        return (
                            (0, r.useEffect)(() => {
                                a(m);
                            }, [m, a]),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Zt.base, Zt[`base__${m}`], t),
                                    style: {
                                        width: 'number' == typeof l.width ? `${l.width}rem` : l.width,
                                        height: 'number' == typeof l.height ? `${l.height}rem` : l.height,
                                    },
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(Zt.bumpStars, n.bumpStars) },
                                    s().createElement('div', { className: h()(Zt.star, Zt.star__one, n.star) }),
                                    s().createElement('div', { className: h()(Zt.star, Zt.star__second, n.star) }),
                                    s().createElement('div', { className: h()(Zt.star, Zt.star__third, n.star) }),
                                ),
                                s().createElement('div', { className: h()(Zt.bump, n.bump) }),
                                s().createElement('div', { className: h()(Zt.bumpRays, n.bumpRays) }),
                                s().createElement(
                                    'div',
                                    { className: h()(Zt.reward, n.reward) },
                                    ('idle' === m || 'start' === m) &&
                                        s().createElement('div', { className: h()(Zt.rewardFrom, n.rewardFrom) }, e),
                                    ('end' === m || 'bump' === m) &&
                                        s().createElement('div', { className: h()(Zt.rewardTo, n.rewardTo) }, u),
                                ),
                                ('start' === m || 'bump' === m) &&
                                    s().createElement(
                                        Kt,
                                        tn({}, c, {
                                            className: h()(Zt.twirlyCanvas, n.twirlyCanvas),
                                            frameCount: 60,
                                            frameTime: 16,
                                            getSrcByFrame: o,
                                        }),
                                    ),
                                s().createElement('div', { className: h()(Zt.bumpParticles, n.bumpParticles) }),
                            )
                        );
                    };
                (0, r.memo)(on, (e, u) => {
                    e.children;
                    const t = un(e, Jt),
                        n = (u.children, un(u, en));
                    return (
                        (a = t),
                        (r = n),
                        Object.keys(a).length === Object.keys(r).length &&
                            Object.keys(a).every((e) => Object.prototype.hasOwnProperty.call(r, e) && a[e] === r[e])
                    );
                    var a, r;
                });
                let ln, cn, dn, En, mn;
                !(function (e) {
                    (e.Small = 'small'),
                        (e.Big = 'big'),
                        (e.S180x135 = 's180x135'),
                        (e.S232x174 = 's232x174'),
                        (e.S296x222 = 's296x222'),
                        (e.S360x270 = 's360x270'),
                        (e.S400x300 = 's400x300'),
                        (e.S600x450 = 's600x450');
                })(ln || (ln = {})),
                    (function (e) {
                        (e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation');
                    })(cn || (cn = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Big = 'Big');
                    })(dn || (dn = {})),
                    (function (e) {
                        (e.GiftMachineToken = 'battleToken'),
                            (e.Tman = 'tmanToken'),
                            (e.AchievementReward = 'dossier_achievement'),
                            (e.Customizations = 'customizations'),
                            (e.VariadicDiscount = 'variadicDiscount'),
                            (e.AddcEconomicBonuses = 'addcEconomicBonuses'),
                            (e.Vehicles = 'vehicles'),
                            (e.MarketplaceToken = 'ny_marketplace'),
                            (e.RandomBooklet = 'randomNyBooklet'),
                            (e.RandomGuide = 'randomNyGuide'),
                            (e.RandomDecoration = 'randomNyToy'),
                            (e.RandomInstruction = 'randomNyInstruction'),
                            (e.RandomCrewInstruction = 'randomNyCrewInstruction'),
                            (e.EquipCoin = 'equipCoin');
                    })(En || (En = {})),
                    (function (e) {
                        (e.CelebrityAction = 'questTokenAnim'),
                            (e.Story = 'questTokenStory'),
                            (e.Decoration = 'questTokenDecoration');
                    })(mn || (mn = {}));
                const _n = {
                        base: 'CommonReward_base_c0',
                        base__small: 'CommonReward_base__small_cb',
                        base__big: 'CommonReward_base__big_4c',
                        base__s180x135: 'CommonReward_base__s180x135_11',
                        base__s232x174: 'CommonReward_base__s232x174_60',
                        base__s296x222: 'CommonReward_base__s296x222_06',
                        base__s360x270: 'CommonReward_base__s360x270_9a',
                        base__s400x300: 'CommonReward_base__s400x300_02',
                        base__s600x450: 'CommonReward_base__s600x450_8c',
                        base__flex: 'CommonReward_base__flex_0e',
                        bonusIcon: 'CommonReward_bonusIcon_a5',
                        compensationIcon: 'CommonReward_compensationIcon_d9',
                        info: 'CommonReward_info_37',
                        info__hidden: 'CommonReward_info__hidden_1b',
                        info__credits: 'CommonReward_info__credits_4b',
                        info__gold: 'CommonReward_info__gold_73',
                        info__crystal: 'CommonReward_info__crystal_f8',
                        info__premiumTank: 'CommonReward_info__premiumTank_a6',
                        info__style_3d: 'CommonReward_info__style_3d_7c',
                        info__multi: 'CommonReward_info__multi_64',
                    },
                    An = R.strings.settings.LANGUAGE_CODE(),
                    Fn = ({
                        name: e,
                        image: u,
                        value: t,
                        valueType: n,
                        isCompensation: a,
                        tooltipId: r,
                        tooltipContentId: i,
                        tooltipDecoratorId: o,
                        size: l = ln.Big,
                        isLabelHidden: c = !1,
                        isFlexable: d = !1,
                        classNames: E,
                        tooltipArgs: m,
                    }) => {
                        const _ = bt(Object.assign({ tooltipId: r, value: t }, m), Number(i), {
                                decoratorId: o,
                                ignoreMouseClick: !1,
                            }),
                            A = wt(t, n);
                        return s().createElement(
                            Ut,
                            { tooltipArgs: _, className: h()(_n.base, _n[`base__${l}`], d && _n.base__flex) },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement('div', {
                                    className: _n.bonusIcon,
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                A &&
                                    s().createElement(
                                        'div',
                                        {
                                            lang: An,
                                            className: h()(
                                                _n.info,
                                                c && _n.info__hidden,
                                                _n[`info__${e}`],
                                                _n[`info__${n}`],
                                                null == E ? void 0 : E.info,
                                            ),
                                        },
                                        A,
                                    ),
                                a && s().createElement('div', { className: _n.compensationIcon }),
                            ),
                        );
                    },
                    Dn = ['ko', 'no'],
                    gn = R.strings.settings.LANGUAGE_CODE(),
                    Cn = [
                        En.Tman,
                        En.GiftMachineToken,
                        En.AddcEconomicBonuses,
                        En.AchievementReward,
                        En.Vehicles,
                        En.EquipCoin,
                    ],
                    Bn = [mn.CelebrityAction, mn.Story, mn.Decoration],
                    pn = (mn.CelebrityAction, mn.Story, [En.Vehicles, En.AchievementReward]),
                    hn = [
                        En.RandomBooklet,
                        En.RandomGuide,
                        En.RandomDecoration,
                        En.RandomInstruction,
                        En.RandomCrewInstruction,
                    ],
                    vn =
                        (lt.Credits,
                        lt.Gold,
                        lt.FreeXp,
                        Ee.Iron,
                        Ee.Crystal,
                        Ee.Emerald,
                        Ee.Amber,
                        (e, u) => {
                            const t = 'R.images.gui.maps.icons';
                            return `${e === En.AddcEconomicBonuses || e === lt.EquipCoin ? `${t}.newYear.rewards` : e === En.AchievementReward ? `${t}.achievement` : e === En.Vehicles ? 'R.images.gui.maps.shop.vehicles' : e === lt.CrewBooks ? 'R.images.gui.maps.icons.crewBooks.books' : `${t}.quests.bonuses`}.${(() => {
                                if (e === lt.EquipCoin) return u;
                                switch (u) {
                                    case ln.Small:
                                    case ln.Big:
                                        return 'big';
                                    default:
                                        return (t = e), pn.includes(t) ? u.replace('s', 'c_') : u;
                                }
                                var t;
                            })()}`;
                        }),
                    bn = [ln.S360x270, ln.S400x300, ln.S600x450],
                    fn = (e, u, t) => {
                        const n = e.name,
                            a = bn.includes(u) || ((e) => Cn.includes(e))(n);
                        if (a) {
                            const a = vn(n, u),
                                r = (({ name: e, icon: u, bigIcon: t, userName: n }) => {
                                    switch (e) {
                                        case En.Tman:
                                            return t;
                                        case En.Customizations:
                                            return u;
                                        case En.Vehicles:
                                            return Gu(n);
                                        default:
                                            return u || e;
                                    }
                                })(e);
                            '' === r && console.warn('empty icon');
                            return `${a}.${r}${t ? '_pixelated' : ''}`;
                        }
                        return vt(e, u.toString());
                    },
                    wn = (e) => {
                        switch (e) {
                            case En.Tman:
                            case En.GiftMachineToken:
                            case En.AddcEconomicBonuses:
                            case En.RandomBooklet:
                            case En.RandomGuide:
                            case En.RandomDecoration:
                            case En.RandomInstruction:
                            case En.RandomCrewInstruction:
                                return Et.MULTI;
                            default:
                                return (
                                    (u = e),
                                    Dt.includes(u)
                                        ? Et.MULTI
                                        : gt.includes(u)
                                          ? Et.CURRENCY
                                          : Ct.includes(u)
                                            ? Et.NUMBER
                                            : Bt.includes(u)
                                              ? Et.PREMIUM_PLUS
                                              : Et.STRING
                                );
                        }
                        var u;
                    },
                    yn = { width: 180, height: 180 },
                    Rn = Object.assign({}, nn, { idle: Object.assign({}, nn.idle, { timeout: 0 }) }),
                    Sn = (e, u) => ('vehicles' === e.name ? vt(e, u.toString()) : fn(e, u)),
                    xn = ({
                        className: e,
                        bonusModel: u,
                        size: t,
                        playAnimation: n = !0,
                        isShowCompensation: a = !0,
                        animationSize: r = yn,
                        animationSettings: i = Rn,
                    }) => {
                        const o = Ue((e) => {
                                'start' === e && X('gui_gift_system_newyear_reward_transform');
                            }, []),
                            l = u.compensatedItem,
                            c = a ? 'idle' : 'end';
                        return s().createElement(
                            on,
                            {
                                className: e,
                                animationSettings: i,
                                onAnimate: o,
                                isConvertationStart: n,
                                initAnimationState: c,
                                size: r,
                            },
                            [
                                s().createElement(Fn, {
                                    key: 1,
                                    name: l.name,
                                    image: Sn(l, t),
                                    value: l.value,
                                    valueType: wn(l.name),
                                    size: t,
                                }),
                                s().createElement(Fn, {
                                    key: 2,
                                    name: u.name,
                                    image: fn(u, t),
                                    value: u.value,
                                    valueType: wn(u.name),
                                    isCompensation: u.isCompensation,
                                    tooltipId: u.tooltipId,
                                    tooltipContentId: u.tooltipContentId,
                                    tooltipDecoratorId:
                                        R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    size: t,
                                }),
                            ],
                        );
                    },
                    Pn = (e) => {
                        (0, r.useEffect)(e, []);
                    },
                    Tn = {
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
                function Nn() {
                    const e = (0, r.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => u, []),
                        (0, r.useMemo)(
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
                }
                var On;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(On || (On = {}));
                const kn = ['__left', '__right', '__top', '__bottom'],
                    In =
                        ((0, r.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: n = {} }, a) => {
                                const i = (0, r.useRef)(null),
                                    l = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    d = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    m = d[1],
                                    _ = (0, r.useCallback)(() => {
                                        Q.playClick(), o.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, r.useCallback)(() => {
                                        Q.playHighlight();
                                    }, []),
                                    F = h()(Tn.arrow, Tn[`arrow${kn[E]}`]);
                                Pn(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, r.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === i.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = o.O.client.getMouseGlobalPosition(),
                                                    u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < n.boundX ||
                                                        e.x > n.boundX + n.boundWidth ||
                                                        e.y > n.boundY + n.boundHeight ||
                                                        e.y < n.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : o.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, t],
                                    ),
                                    g = Nn(),
                                    C = (0, r.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                o.O.view.freezeTextureBeforeResize(),
                                                g.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    o.O.view.resize(u, t), m(window.decorator.directionType);
                                                })
                                            );
                                    }, [g]);
                                return (
                                    (0, r.useImperativeHandle)(a, () => ({ updateSize: C })),
                                    Pn(() => {
                                        o.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, z.Eu)());
                                        return (
                                            !u && e.promise.then(() => C()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', D);
                                            }
                                        );
                                    }, [C, D, u]),
                                    s().createElement(
                                        'div',
                                        { className: Tn.base, ref: l },
                                        s().createElement(
                                            'div',
                                            { className: Tn.decorator },
                                            s().createElement(
                                                'div',
                                                { className: Tn.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    s().createElement(
                                                        Lt,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        s().createElement('div', {
                                                            className: Tn.closeBtn,
                                                            onClick: _,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            s().createElement('div', { className: F, style: n.arrow }),
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
                function Ln() {
                    return (
                        (Ln = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ln.apply(null, arguments)
                    );
                }
                const Mn = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            n = e.direction,
                            a = void 0 === n ? On.Top : n,
                            i = e.targetId,
                            o = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, In);
                        const _ = (0, r.useRef)(null),
                            A = (0, r.useCallback)(() => {
                                if ((0, z.wU)()) return (0, z.SW)();
                                _.current && (0, z.P3)(u, a, _.current, t, i, o);
                            }, [u, a, o, t, i]);
                        return s().createElement(
                            'div',
                            Ln(
                                {
                                    ref: _,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    Un = ['children'];
                function Gn() {
                    return (
                        (Gn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gn.apply(null, arguments)
                    );
                }
                const Hn = (e) => {
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
                            })(e, Un);
                        return s().createElement(
                            Mn,
                            Gn(
                                {
                                    decoratorId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                    contentId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent(
                                            'resId',
                                        ),
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Wn = {
                        base: 'DiscountReward_base_86',
                        base__progressionReward: 'DiscountReward_base__progressionReward_49',
                        base__currentProgressionCompleted: 'DiscountReward_base__currentProgressionCompleted_04',
                        base__applied: 'DiscountReward_base__applied_fd',
                        base__flex: 'DiscountReward_base__flex_0d',
                        discountReward: 'DiscountReward_discountReward_5a',
                        base__small: 'DiscountReward_base__small_74',
                        base__big: 'DiscountReward_base__big_02',
                        base__s180x135: 'DiscountReward_base__s180x135_18',
                        base__s232x174: 'DiscountReward_base__s232x174_39',
                        base__s296x222: 'DiscountReward_base__s296x222_e9',
                        icon: 'DiscountReward_icon_ba',
                        vehicleLevel: 'DiscountReward_vehicleLevel_0b',
                        discountAmount: 'DiscountReward_discountAmount_cc',
                    },
                    zn = (0, r.memo)(
                        ({
                            bonus: e,
                            options: u,
                            size: t = ln.Small,
                            className: n,
                            isCurrentProgressionCompleted: a,
                            isProgressionReward: i,
                            isFlexable: o,
                        }) => {
                            const l = e.level,
                                c = e.discount,
                                d = e.selectedVehicle,
                                E = e.variadicID,
                                m = u || {},
                                _ = m.disabled,
                                A = m.isPopoverOpened,
                                F = `${vn(En.VariadicDiscount, t)}.${En.VariadicDiscount}`,
                                D = Dn.includes(gn) ? l : R.strings.roman_numerals.$dyn(`n_${l}`),
                                g = (0, r.useState)(!1),
                                C = g[0],
                                B = g[1],
                                p = (0, r.useState)(!1),
                                v = p[0],
                                b = p[1],
                                f = !d && !v,
                                w = { variadicID: E, discount: c, isCurrentProgressionCompleted: a },
                                y = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: E },
                                S = {
                                    backgroundImage: `url('${d ? R.images.gui.maps.icons.vehicle.$dyn(((x = d), x.replace(/:|-/g, '_'))) : F}')`,
                                };
                            var x;
                            const P = (0, r.useCallback)(() => {
                                    _ || b(!0);
                                }, [_]),
                                T = (0, r.useCallback)(() => {
                                    f && a && !A && (X(R.sounds.hangar_newyear_slot_over()), B(!0));
                                }, [f, a, A]),
                                N = (0, r.useCallback)(() => {
                                    C && (X(R.sounds.hangar_newyear_slot_over_off()), B(!1));
                                }, [C]);
                            var O, k;
                            (0, r.useEffect)(() => {
                                !f && C && (X(R.sounds.hangar_newyear_slot_over_off()), B(!1));
                            }, [f, C]),
                                (O = () => {
                                    !A && v && b(!1);
                                }),
                                (k = [A, v]),
                                (0, r.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                (e = null), O();
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, k);
                            const I = h()(
                                    Wn.base,
                                    Wn[`base__${t}`],
                                    _ && Wn.base__disabled,
                                    d && Wn.base__applied,
                                    a && Wn.base__currentProgressionCompleted,
                                    i && Wn.base__progressionReward,
                                    o && Wn.base__flex,
                                    n,
                                ),
                                L = s().createElement(
                                    xt,
                                    {
                                        contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'),
                                        args: w,
                                    },
                                    s().createElement(
                                        'div',
                                        { className: I, onMouseEnter: T, onMouseLeave: N, onClick: P },
                                        s().createElement(
                                            'div',
                                            { className: Wn.discountReward },
                                            s().createElement('div', { className: Wn.icon, style: S }),
                                            s().createElement('div', { className: Wn.vehicleLevel }, D),
                                            s().createElement(
                                                'div',
                                                { className: Wn.discountAmount },
                                                i
                                                    ? R.strings.common.common.percent()
                                                    : Uu(R.strings.ny.percentageValue.withMinus(), { value: c }),
                                            ),
                                        ),
                                    ),
                                );
                            return _ || d || !a ? L : s().createElement(Hn, { args: y }, L);
                        },
                    ),
                    $n = 'ActivityReward_base_50',
                    qn = 'ActivityReward_base__animated_b8',
                    Vn = 'ActivityReward_base__completed_02',
                    Yn = 'ActivityReward_base__flex_24',
                    jn = 'ActivityReward_inner_39',
                    Xn = 'ActivityReward_icon_21',
                    Qn = 'ActivityReward_iconPlay_02',
                    Kn = R.strings.ny.activityReward.tooltip,
                    Zn = ({ name: e, icon: u, isClickable: t, isNew: n, isFlexable: a }) => {
                        const r = ((e) => {
                            switch (e) {
                                case mn.CelebrityAction:
                                    return 'action';
                                case mn.Story:
                                    return 'story';
                                case mn.Decoration:
                                    return 'decoration';
                                default:
                                    return e;
                            }
                        })(e);
                        return s().createElement(
                            Lt,
                            { header: Kn.header.$dyn(r), body: Kn.body.$dyn(r) },
                            s().createElement(
                                'div',
                                { className: h()($n, t && Vn, t && n && qn, a && Yn) },
                                s().createElement(
                                    'div',
                                    { className: jn },
                                    s().createElement('div', {
                                        className: Xn,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewards.activity.$dyn(u)})`,
                                        },
                                    }),
                                    e === mn.CelebrityAction && s().createElement('div', { className: Qn }),
                                ),
                            ),
                        );
                    },
                    Jn = { base: 'AttachmentReward_base_a0', glow: 'AttachmentReward_glow_5c' },
                    ea = (e, u) =>
                        R.images.gui.maps.vehicles.attachments.$dyn(u).$dyn(e) ||
                        `R.images.gui.maps.icons.quests.bonuses.${u}.attachment`,
                    ua = ({
                        name: e,
                        iconName: u,
                        tooltipId: t,
                        rarity: n,
                        value: a,
                        tooltipContentId: r,
                        size: i = ln.Small,
                        isFlexable: o,
                        withGlowAndSign: l = !0,
                        classNames: c,
                    }) =>
                        s().createElement(
                            'div',
                            { className: h()(Jn.base, Jn[`base__${i}`]) },
                            s().createElement('div', {
                                className: Jn.glow,
                                style: l
                                    ? {
                                          backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${i}.${n})`,
                                      }
                                    : {},
                            }),
                            s().createElement(Fn, {
                                name: e,
                                image: ea(u, i),
                                valueType: wn(e),
                                value: a,
                                tooltipId: t,
                                tooltipContentId: r,
                                size: i,
                                isFlexable: o,
                                classNames: c,
                            }),
                        ),
                    ta = {
                        base: 'ItemReward_base_34',
                        overlay: 'ItemReward_overlay_47',
                        base__small: 'ItemReward_base__small_38',
                        base__big: 'ItemReward_base__big_a6',
                        base__s180x135: 'ItemReward_base__s180x135_ff',
                        base__s232x174: 'ItemReward_base__s232x174_61',
                        base__s296x222: 'ItemReward_base__s296x222_64',
                        base__s400x300: 'ItemReward_base__s400x300_c4',
                        base__s600x450: 'ItemReward_base__s600x450_fe',
                        highlight: 'ItemReward_highlight_21',
                    },
                    na = ({
                        bonusModel: e,
                        size: u,
                        isLabelHidden: t,
                        isFlexable: n,
                        classNames: a,
                        tooltipArgs: r,
                    }) => {
                        const i = ((e, u) => {
                                if (void 0 === u || !ft.includes(e)) return null;
                                switch (u) {
                                    case mt.BATTLE_BOOSTER:
                                    case mt.BATTLE_BOOSTER_REPLACE:
                                        return _t.BATTLE_BOOSTER;
                                }
                            })(u, e.overlayType),
                            o = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case mt.BATTLE_BOOSTER:
                                        return At.BATTLE_BOOSTER;
                                    case mt.BATTLE_BOOSTER_REPLACE:
                                        return At.BATTLE_BOOSTER_REPLACE;
                                    case mt.BUILT_IN_EQUIPMENT:
                                        return At.BUILT_IN_EQUIPMENT;
                                    case mt.EQUIPMENT_PLUS:
                                        return At.EQUIPMENT_PLUS;
                                    case mt.EQUIPMENT_TROPHY_BASIC:
                                        return At.EQUIPMENT_TROPHY_BASIC;
                                    case mt.EQUIPMENT_TROPHY_UPGRADED:
                                        return At.EQUIPMENT_TROPHY_UPGRADED;
                                    case mt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return At.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case mt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return At.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case mt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return At.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case mt.PROGRESSION_STYLE_UPGRADED_1:
                                        return At.PROGRESSION_STYLE_UPGRADED_1;
                                    case mt.PROGRESSION_STYLE_UPGRADED_2:
                                        return At.PROGRESSION_STYLE_UPGRADED_2;
                                    case mt.PROGRESSION_STYLE_UPGRADED_3:
                                        return At.PROGRESSION_STYLE_UPGRADED_3;
                                    case mt.PROGRESSION_STYLE_UPGRADED_4:
                                        return At.PROGRESSION_STYLE_UPGRADED_4;
                                    case mt.PROGRESSION_STYLE_UPGRADED_5:
                                        return At.PROGRESSION_STYLE_UPGRADED_5;
                                    case mt.PROGRESSION_STYLE_UPGRADED_6:
                                        return At.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(e.overlayType);
                        return s().createElement(
                            'div',
                            { className: h()(ta.base, ta[`base__${u}`]) },
                            i &&
                                s().createElement('div', {
                                    className: ta.highlight,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${i}_highlight)`,
                                    },
                                }),
                            s().createElement(Fn, {
                                name: e.name,
                                image: fn(e, u),
                                value: e.value,
                                valueType: wn(e.name),
                                isCompensation: e.isCompensation,
                                tooltipId: e.tooltipId,
                                tooltipContentId: e.tooltipContentId,
                                tooltipArgs: r,
                                size: u,
                                isLabelHidden: t,
                                isFlexable: n,
                                classNames: a,
                            }),
                            o &&
                                s().createElement('div', {
                                    className: ta.overlay,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${o}_overlay)`,
                                    },
                                }),
                        );
                    },
                    aa = {
                        base: 'ModernizedEquipmentReward_base_d8',
                        equipmentGlow: 'ModernizedEquipmentReward_equipmentGlow_05',
                        base__small: 'ModernizedEquipmentReward_base__small_36',
                        base__big: 'ModernizedEquipmentReward_base__big_09',
                        base__s180x135: 'ModernizedEquipmentReward_base__s180x135_ba',
                        base__s232x174: 'ModernizedEquipmentReward_base__s232x174_02',
                        base__s296x222: 'ModernizedEquipmentReward_base__s296x222_5f',
                        base__flex: 'ModernizedEquipmentReward_base__flex_8a',
                    },
                    ra = ({
                        name: e,
                        tooltipId: u,
                        image: t,
                        overlayType: n,
                        value: a,
                        tooltipContentId: r,
                        size: i = ln.Big,
                        isFlexable: o,
                        classNames: l,
                    }) =>
                        s().createElement(
                            'div',
                            { className: h()(aa.base, aa[`base__${i}`], o && aa.base__flex) },
                            s().createElement('div', {
                                className: aa.equipmentGlow,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${n}_overlay)`,
                                },
                            }),
                            s().createElement(Fn, {
                                name: e,
                                image: t,
                                valueType: wn(e),
                                value: a,
                                tooltipId: u,
                                tooltipContentId: r,
                                size: i,
                                classNames: l,
                                isFlexable: o,
                            }),
                        ),
                    sa = {
                        base: 'PremiumReward_base_16',
                        base__small: 'PremiumReward_base__small_21',
                        base__big: 'PremiumReward_base__big_08',
                        base__s180x135: 'PremiumReward_base__s180x135_68',
                        base__s232x174: 'PremiumReward_base__s232x174_8f',
                        base__s296x222: 'PremiumReward_base__s296x222_4b',
                        base__s360x270: 'PremiumReward_base__s360x270_75',
                        base__s400x300: 'PremiumReward_base__s400x300_92',
                        base__s600x450: 'PremiumReward_base__s600x450_d2',
                        base__flex: 'PremiumReward_base__flex_e2',
                        icon: 'PremiumReward_icon_e2',
                        info: 'PremiumReward_info_13',
                    },
                    ia = R.strings.ny.lootBoxAutoOpen.reward.premiumPlus,
                    oa = ia.label(),
                    la = ia.tooltip.header(),
                    ca = ia.tooltip.body(),
                    da = ({ value: e, size: u = ln.Big, isFlexable: t = !1, classNames: n }) => {
                        const a = Uu(oa, { quantity: e }),
                            r = Uu(la, { quantity: e });
                        return s().createElement(
                            Lt,
                            { header: r, body: ca },
                            s().createElement(
                                'div',
                                {
                                    className: h()(sa.base, sa[`base__${u}`], t && sa.base__flex),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                s().createElement('div', {
                                    className: sa.icon,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_1)`,
                                    },
                                }),
                                Number(e) > 1 &&
                                    s().createElement(
                                        'div',
                                        { className: h()(sa.info, null == n ? void 0 : n.info) },
                                        a,
                                    ),
                            ),
                        );
                    },
                    Ea = {
                        base: 'ToyReward_base_1d',
                        base__large: 'ToyReward_base__large_c7',
                        base__flex: 'ToyReward_base__flex_3e',
                        label: 'ToyReward_label_f7',
                        image: 'ToyReward_image_46',
                        counter: 'ToyReward_counter_85',
                    };
                let ma;
                !(function (e) {
                    (e.Medium = 'medium'), (e.Large = 'large');
                })(ma || (ma = {}));
                const _a = R.views.lobby.new_year.tooltips,
                    Aa = ({
                        image: e,
                        bigImage: u,
                        value: t,
                        size: n = ma.Medium,
                        toyID: a,
                        isFlexable: r,
                        classNames: i,
                    }) => {
                        const o = wt(t, Et.MULTI);
                        return s().createElement(
                            xt,
                            { ignoreShowDelay: !0, contentId: _a.NyDecorationTooltip('resId'), args: { toyID: a } },
                            s().createElement(
                                'div',
                                {
                                    className: h()(Ea.base, r && Ea.base__flex, Ea[`base__${n}`]),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                s().createElement(
                                    'div',
                                    {
                                        className: Ea.image,
                                        style: { backgroundImage: `url(${n === ma.Medium ? e : u})` },
                                    },
                                    o &&
                                        s().createElement(
                                            'div',
                                            { className: h()(Ea.counter, null == i ? void 0 : i.counter) },
                                            o,
                                        ),
                                ),
                            ),
                        );
                    },
                    Fa = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Da = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ga = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ca = (e) =>
                        ga
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Da.length - 1; t >= 0; t--)
                                      for (; e >= Da[t]; ) (u += Fa[t]), (e -= Da[t]);
                                  return u;
                              })(e),
                    Ba = {
                        base: 'VehicleReward_base_a9',
                        vehicleInfo: 'VehicleReward_vehicleInfo_3e',
                        base__s360x270: 'VehicleReward_base__s360x270_be',
                        base__s400x300: 'VehicleReward_base__s400x300_67',
                        base__s600x450: 'VehicleReward_base__s600x450_f0',
                        base__withRent: 'VehicleReward_base__withRent_a4',
                        base__dark: 'VehicleReward_base__dark_af',
                        typeContainer: 'VehicleReward_typeContainer_19',
                        type: 'VehicleReward_type_90',
                        rent: 'VehicleReward_rent_6b',
                        rent__hidden: 'VehicleReward_rent__hidden_34',
                        clockIcon: 'VehicleReward_clockIcon_46',
                    },
                    pa = ['vehicleInfo', 'rentDays', 'rentBattles', 'size', 'theme', 'classNames'];
                function ha() {
                    return (
                        (ha = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ha.apply(null, arguments)
                    );
                }
                const va = R.strings.ny.giftMachine,
                    ba = R.images.gui.maps.icons.newYear.tank_types;
                let fa;
                !(function (e) {
                    (e.Light = 'light'), (e.Dark = 'dark');
                })(fa || (fa = {}));
                const wa = (e) => {
                    let u = e.vehicleInfo,
                        t = e.rentDays,
                        n = void 0 === t ? 0 : t,
                        a = e.rentBattles,
                        r = void 0 === a ? 0 : a,
                        i = e.size,
                        o = void 0 === i ? ln.S180x135 : i,
                        l = e.theme,
                        c = void 0 === l ? fa.Light : l,
                        d = e.classNames,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, pa);
                    const m = u.vehicleLvl,
                        _ = u.vehicleName,
                        A = u.vehicleType,
                        F = (c === fa.Light ? ba.white_elite : ba.blue_elite).$dyn(`${Gu(A)}`),
                        D = n > 0 || r > 0;
                    return s().createElement(
                        'div',
                        {
                            className: h()(Ba.base, Ba[`base__${o}`], Ba[`base__${c}`], D && Ba.base__withRent),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        s().createElement(Fn, ha({ size: o, isLabelHidden: !0 }, E)),
                        n > 0 &&
                            s().createElement(Xu, {
                                text: va.rentDays(),
                                binding: { clockIcon: s().createElement('span', { className: Ba.clockIcon }), days: n },
                                classMix: h()(Ba.rent, null == d ? void 0 : d.rent),
                            }),
                        r > 0 &&
                            s().createElement(Xu, {
                                text: va.rentBattles(),
                                binding: {
                                    clockIcon: s().createElement('span', { className: Ba.clockIcon }),
                                    battles: r,
                                },
                                classMix: h()(Ba.rent, null == d ? void 0 : d.rent),
                            }),
                        s().createElement(
                            'div',
                            { className: h()(Ba.vehicleInfo, null == d ? void 0 : d.info) },
                            Ca(m),
                            s().createElement(
                                'div',
                                { className: Ba.typeContainer },
                                s().createElement('div', {
                                    className: Ba.type,
                                    style: { backgroundImage: `url('${F}')` },
                                }),
                            ),
                            _,
                        ),
                    );
                };
                function ya() {
                    return (
                        (ya = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ya.apply(null, arguments)
                    );
                }
                const Ra = ({
                        bonusModel: e,
                        options: u,
                        size: t = ln.Big,
                        toyRewardOptions: n = {},
                        isProgressionReward: a,
                        isCurrentProgressionCompleted: r,
                        compensationRewardOptions: i = {},
                        activityRewardOptions: o = {},
                        vehicleRewardOptions: l = {},
                        isLabelHidden: c,
                        isFlexable: d = !1,
                        isPixelatedImage: E,
                        level: m,
                        classNames: _,
                        tooltipArgs: A,
                    }) => {
                        return ((e) => 'item' in e && e.item && e.item.startsWith('modernized'))(e)
                            ? s().createElement(
                                  ra,
                                  ya({}, e, { image: fn(e, t, E), size: t, classNames: _, isFlexable: d }),
                              )
                            : 'ny25Toys' === e.name
                              ? s().createElement(
                                    Aa,
                                    ya(
                                        {
                                            image: e.icon,
                                            bigImage: e.bigIcon,
                                            toyID: e.toyID,
                                            value: e.value,
                                            isFlexable: d,
                                        },
                                        n,
                                    ),
                                )
                              : ((e) => 'variadicDiscount' === e.name)(e)
                                ? s().createElement(zn, {
                                      rewardLevel: m,
                                      bonus: e,
                                      options: u,
                                      size: t,
                                      className: null == _ ? void 0 : _.discountReward,
                                      isProgressionReward: a,
                                      isCurrentProgressionCompleted: r,
                                      isFlexable: d,
                                  })
                                : ((e) => 'premium_plus' === e.name)(e)
                                  ? s().createElement(da, ya({}, e, { size: t, isFlexable: d, classNames: _ }))
                                  : e.isCompensation
                                    ? s().createElement(xn, ya({ bonusModel: e, size: t }, i))
                                    : ((F = e.name),
                                      Bn.includes(F)
                                          ? s().createElement(Zn, ya({}, e, o, { isFlexable: d }))
                                          : ((e) => e === lt.Vehicles)(e.name)
                                            ? s().createElement(wa, ya({ image: fn(e, t, E), size: t }, e, l))
                                            : ((e) => e === lt.Items)(e.name)
                                              ? s().createElement(na, {
                                                    bonusModel: e,
                                                    size: t,
                                                    classNames: _,
                                                    tooltipArgs: A,
                                                    isLabelHidden: c,
                                                    isFlexable: d,
                                                })
                                              : ((e) => 'icon' in e && 'attachment' === e.icon)(e)
                                                ? s().createElement(
                                                      ua,
                                                      ya({}, e, { size: t, classNames: _, isFlexable: d }),
                                                  )
                                                : s().createElement(Fn, {
                                                      name: e.name,
                                                      image: fn(e, t, E),
                                                      value: e.value,
                                                      valueType: wn(e.name),
                                                      isCompensation: e.isCompensation,
                                                      tooltipId: e.tooltipId,
                                                      tooltipContentId: e.tooltipContentId,
                                                      tooltipArgs: A,
                                                      size: t,
                                                      isLabelHidden: c,
                                                      isFlexable: d,
                                                      classNames: _,
                                                  }));
                        var F;
                    },
                    Sa = { list: 'Rewards_list_a3', item: 'Rewards_item_17' },
                    xa = (0, Y.Pi)(({ className: e }) => {
                        const u = Ne().model,
                            t = S().mediaSize,
                            n = u.rewards,
                            a = t >= f.Medium ? ln.Big : ln.Small;
                        return s().createElement(
                            'div',
                            { className: h()(Sa.base, e) },
                            s().createElement(
                                'div',
                                { className: Sa.list },
                                ye(n.get(), (e, u) => {
                                    return s().createElement(
                                        'div',
                                        { className: Sa.item, key: u },
                                        s().createElement(Ra, {
                                            bonusModel: e,
                                            size: a,
                                            tooltipArgs:
                                                ((t = e.name), hn.includes(t) ? { resourceType: e.name } : void 0),
                                        }),
                                    );
                                    var t;
                                }),
                            ),
                        );
                    }),
                    Pa = 'Description_base_87',
                    Ta = 'Description_title_eb',
                    Na = 'Description_giftBox_1b',
                    Oa = R.strings.ny.bundlePurchaseDialog.content,
                    ka = (0, Y.Pi)(() => {
                        const e = Ne().model,
                            u = e.computes.currentBundle(),
                            t = e.computes.hasCustomization();
                        return s().createElement(
                            'div',
                            { className: Pa },
                            s().createElement('div', { className: Ta }, Oa.rewards.title.$dyn(u)),
                            s().createElement(xa, null),
                            t && s().createElement(zt, { className: Na }),
                        );
                    }),
                    Ia = 'Content_base_96',
                    La = 'Content_description_d6',
                    Ma = 'Content_holder_8a',
                    Ua = 'Content_icon_7d',
                    Ga = 'Content_scrollContent_aa',
                    Ha = 'Content_scrollInner_02',
                    Wa = 'Content_scrollArea_30',
                    za = 'Content_scrollBar_71',
                    $a = 'Content_scrollRail_0b',
                    qa = 'Content_scrollButton_55',
                    Va = 'Content_scrollThumb_c8',
                    Ya = 'Content_status_14',
                    ja = {
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
                let Xa, Qa;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Xa || (Xa = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Qa || (Qa = {}));
                const Ka = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: a,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const F = (0, r.useRef)(null),
                        D = (0, r.useState)(t),
                        g = D[0],
                        C = D[1],
                        B = (0, r.useState)(!1),
                        p = B[0],
                        v = B[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                g && null !== F.current && !F.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [g]),
                        (0, r.useEffect)(() => {
                            C(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: h()(
                                    ja.base,
                                    ja[`base__${n}`],
                                    a && ja.base__disabled,
                                    u && ja[`base__${u}`],
                                    g && ja.base__focus,
                                    p && ja.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== o && X(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    a || (m && m(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== l && X(l),
                                        E && E(e),
                                        t && (a || (F.current && (F.current.focus(), C(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (_ && _(e), v(!1));
                                },
                                onClick: function (e) {
                                    a || (A && A(e));
                                },
                            },
                            n !== Xa.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: ja.back }),
                                    s().createElement('span', { className: ja.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: h()(ja.state, ja.state__default) },
                                s().createElement('span', { className: ja.stateDisabled }),
                                s().createElement('span', { className: ja.stateHighlightHover }),
                                s().createElement('span', { className: ja.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: ja.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ka.defaultProps = { type: Xa.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Za = Ka,
                    Ja = 'PurchaseBlock_base_ec',
                    er = 'PurchaseBlock_price_d8',
                    ur = 'PurchaseBlock_button_52',
                    tr = R.strings.ny.dialog.purchase,
                    nr = ({
                        price: e,
                        purchaseState: u,
                        currency: t,
                        isEnough: n,
                        onBuy: a,
                        onBuyCurrency: r,
                        currencySize: i = ue.et.S24x24,
                        tooltipArgs: o,
                        className: l,
                        classNames: c,
                    }) => {
                        const d = () =>
                                n
                                    ? tr.button.buy()
                                    : t === ue.V2.credits
                                      ? tr.button.notEnoughCredits()
                                      : tr.button.notEnoughGold(),
                            E = (() => {
                                switch (u) {
                                    case G.Available:
                                        return {
                                            isEnoughCurrency: n,
                                            buttonType: n ? Xa.main : Xa.primary,
                                            buttonText: d(),
                                            isDisabled: !1,
                                            clickHandler: n ? a : r,
                                        };
                                    case G.Unavailable:
                                        return {
                                            isEnoughCurrency: !0,
                                            buttonType: Xa.main,
                                            buttonText: tr.button.buy(),
                                            isDisabled: !0,
                                            clickHandler: ge,
                                        };
                                    case G.Locked:
                                    default:
                                        return {
                                            isEnoughCurrency: n,
                                            buttonType: n ? Xa.main : Xa.primary,
                                            buttonText: d(),
                                            isDisabled: n,
                                            clickHandler: r,
                                        };
                                }
                            })(),
                            m = E.isEnoughCurrency,
                            _ = E.buttonType,
                            A = E.buttonText,
                            F = E.isDisabled,
                            D = E.clickHandler,
                            g =
                                o ||
                                ((e) =>
                                    e === G.Unavailable
                                        ? {
                                              header: tr.tooltip.unavailable.header(),
                                              body: tr.tooltip.unavailable.body(),
                                          }
                                        : { isEnabled: !1 })(u);
                        return s().createElement(
                            'div',
                            { className: h()(Ja, l) },
                            s().createElement(ue.F, {
                                className: h()(er, null == c ? void 0 : c.price),
                                type: t,
                                value: e,
                                size: i,
                                isEnough: m,
                            }),
                            s().createElement(
                                Ut,
                                { tooltipArgs: g },
                                s().createElement(
                                    Za,
                                    {
                                        mixClass: h()(ur, null == c ? void 0 : c.button),
                                        size: Qa.medium,
                                        type: _,
                                        onClick: D,
                                        disabled: F,
                                    },
                                    A,
                                ),
                            ),
                        );
                    },
                    ar = 'Purchase_base_27',
                    rr = 'Purchase_price_73',
                    sr = 'Purchase_button_30',
                    ir = R.strings.ny.bundlePurchaseDialog.purchase.tooltip.locked,
                    or = (0, Y.Pi)(() => {
                        const e = Ne(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            a = n.isEnough,
                            r = n.price,
                            i = n.purchaseState,
                            o = u.computes.currentBundle(),
                            l = u.computes.currencyType(),
                            c = S().mediaSize;
                        return s().createElement(
                            'div',
                            { className: ar },
                            s().createElement(nr, {
                                isEnough: a,
                                currency: l,
                                currencySize: c >= f.Medium ? ue.et.S24x24 : ue.et.S16x16,
                                purchaseState: i,
                                price: r,
                                onBuy: t.buy,
                                onBuyCurrency: () => (l === ue.V2.gold ? t.buyGold() : t.openConverter()),
                                classNames: { price: rr, button: sr },
                                tooltipArgs:
                                    i === G.Locked && a ? { header: ir.header.$dyn(o), body: ir.body.$dyn(o) } : void 0,
                            }),
                        );
                    }),
                    lr = { label: 'Status_label_0b', iconCheck: 'Status_iconCheck_0c', purchase: 'Status_purchase_d0' },
                    cr = R.strings.ny.bundlePurchaseDialog.content,
                    dr = (0, Y.Pi)(({ className: e }) => {
                        switch (Ne().model.computes.getBundleState()) {
                            case xe.Applied:
                                return s().createElement(
                                    'div',
                                    { className: h()(lr.base, e) },
                                    s().createElement(
                                        'div',
                                        { className: lr.label },
                                        s().createElement('div', { className: lr.iconCheck }),
                                        cr.label(),
                                    ),
                                );
                            case xe.Purchasable:
                                return s().createElement(
                                    'div',
                                    { className: h()(lr.base, e) },
                                    s().createElement('div', { className: lr.purchase }, s().createElement(or, null)),
                                );
                            case xe.Bought:
                            default:
                                return null;
                        }
                    }),
                    Er = (0, Y.Pi)(({ className: e }) => {
                        const u = Ne().model.computes.currentBundle(),
                            t = Ou.useVerticalApi();
                        return s().createElement(
                            'div',
                            { className: h()(Ia, e) },
                            s().createElement('div', {
                                className: Ua,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.newYear.dialogs.bundle_purchase.${u})`,
                                },
                            }),
                            s().createElement(
                                'div',
                                { className: La },
                                s().createElement(
                                    'div',
                                    { className: Ma },
                                    s().createElement(
                                        'div',
                                        { className: Wa },
                                        s().createElement(
                                            lu,
                                            { api: t, classNames: { content: Ga } },
                                            s().createElement('div', { className: Ha }, s().createElement(ka, null)),
                                        ),
                                    ),
                                    s().createElement(su, {
                                        api: t,
                                        classNames: { base: za, rail: $a, topButton: qa, bottomButton: qa, thumb: Va },
                                    }),
                                ),
                                s().createElement(dr, { className: Ya }),
                            ),
                        );
                    }),
                    mr = 'Pagination_base_38',
                    _r = 'Pagination_item_9a';
                let Ar;
                !(function (e) {
                    (e.Available = 'available'), (e.Received = 'received'), (e.Locked = 'locked');
                })(Ar || (Ar = {}));
                const Fr = 'PaginationItem_base_70',
                    Dr = 'PaginationItem_base__selected_38',
                    gr = 'PaginationItem_image_11',
                    Cr = 'PaginationItem_image__glow_58',
                    Br = 'PaginationItem_icon_2f',
                    pr = 'PaginationItem_icon__locked_63',
                    hr = 'PaginationItem_icon__received_d7',
                    vr = ({ sackState: e, isSelected: u, onClick: t, onMouseEnter: n }) =>
                        s().createElement(
                            'div',
                            { className: h()(Fr, u && Dr), onClick: t, onMouseEnter: n },
                            s().createElement('div', { className: h()(gr, e !== Ar.Available && Cr) }),
                            (() => {
                                switch (e) {
                                    case Ar.Locked:
                                        return s().createElement('div', { className: h()(Br, pr) });
                                    case Ar.Received:
                                        return s().createElement('div', { className: h()(Br, hr) });
                                    default:
                                        return null;
                                }
                            })(),
                        ),
                    br = (0, Y.Pi)(() => {
                        const e = Ne(),
                            u = e.model.computes,
                            t = e.controls;
                        return s().createElement(
                            'div',
                            { className: mr },
                            u.getSacks().map(({ bundleType: e, sackState: u, isSelected: n }, a) =>
                                s().createElement(
                                    'div',
                                    { key: a, className: _r },
                                    s().createElement(vr, {
                                        sackState: u,
                                        isSelected: n,
                                        onMouseEnter: () => {
                                            X(R.sounds.gui_hangar_hover());
                                        },
                                        onClick: () => {
                                            X(R.sounds.hangar_newyear_hud_upper_click()), t.setNextBundle(e);
                                        },
                                    }),
                                ),
                            ),
                        );
                    }),
                    fr = 'App_base_02',
                    wr = 'App_contentBox_f2',
                    yr = 'App_content_88',
                    Rr = R.strings.ny.bundlePurchaseDialog.logo,
                    Sr = (0, Y.Pi)(() => {
                        const e = Ne(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().purchaseState,
                            a = u.computes.currentBundle(),
                            i = u.nextBundle.get();
                        V();
                        const o = (0, j.useSpring)(() => ({
                                config: { duration: 500, easing: H.easeInOutCubic },
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                            })),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, r.useEffect)(() => {
                                i !== a && (c.start({ from: { opacity: 0 }, to: { opacity: 1 } }), t.switchBundle(i));
                            }, [c, t, a, i]),
                            s().createElement(
                                ne,
                                { balance: u.computes.getBalance(), isWalletAvailable: n !== G.Unavailable },
                                s().createElement(
                                    'div',
                                    { className: fr, lang: R.strings.settings.LANGUAGE_CODE() },
                                    s().createElement(
                                        j.animated.div,
                                        { className: wr, style: l },
                                        s().createElement(ce, { name: String(Rr.subtitle.$dyn(a)) }),
                                        s().createElement(Er, { className: yr }),
                                    ),
                                    s().createElement(br, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    U().render(
                        s().createElement(L, null, s().createElement(Te, null, s().createElement(Sr, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 5318),
        (() => {
            var e = { 5318: 0, 9089: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(1871));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
