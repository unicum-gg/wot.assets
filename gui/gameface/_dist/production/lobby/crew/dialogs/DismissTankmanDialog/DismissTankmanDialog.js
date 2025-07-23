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
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => r, onScaleUpdated: () => i }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        i = o[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(514);
                const r = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => i });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => k,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => B,
                        getScale: () => h,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => D,
                        isFocused: () => f,
                        pxToRem: () => A,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    i = u(6538),
                    s = u(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const B = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = n.cg,
                    y = Object.keys(r.W).reduce(
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    o = {
                        close(e) {
                            l('popover' === e ? a : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { n: () => n }),
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
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => s, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (i ? `${e}` : r(e));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => h, Eu: () => A });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var r = u(1358);
                var i = u(8613);
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
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            g(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    F = () => b(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var v = u(7572);
                const D = a.instance,
                    C = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => b(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                o = l.x,
                                c = l.y,
                                d = l.width,
                                _ = l.height,
                                E = {
                                    x: m.O.view.pxToRem(o) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: p(E),
                                on: !0,
                                args: r,
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
                            f(e, F);
                        },
                        handleViewEvent: b,
                        onBindingsReady: h,
                        onLayoutReady: A,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
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
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            1721: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u.n(n);
                const r = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function o(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
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
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    _ = c.height,
                    m = Object.assign({ width: d, height: _ }, o(d, _, s)),
                    E = (0, n.createContext)(m),
                    g = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, g);
                    const a = (0, n.useContext)(E),
                        i = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        o = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        p = a.smallWidth,
                        h = a.extraSmallWidth,
                        A = a.extraLargeHeight,
                        b = a.largeHeight,
                        F = a.mediumHeight,
                        f = a.smallHeight,
                        v = a.extraSmallHeight,
                        D = { extraLarge: A, large: b, medium: F, small: f, extraSmall: v };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && s) return t;
                        if (u.medium && l) return t;
                        if (u.small && o) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return r(t, u, D);
                        if (u.largeWidth && _) return r(t, u, D);
                        if (u.mediumWidth && m) return r(t, u, D);
                        if (u.smallWidth && p) return r(t, u, D);
                        if (u.extraSmallWidth && h) return r(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && b) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && v) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, n.memo)(p);
                const h = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    A = ({ children: e }) => {
                        const t = (0, n.useContext)(E),
                            u = (0, n.useState)(t),
                            r = u[0],
                            l = u[1],
                            c = (0, n.useCallback)((e, t) => {
                                const u = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(t);
                                l(Object.assign({ width: u, height: n }, o(u, n, s)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        (h(() => {
                            (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', d));
                                },
                                [c, d],
                            ));
                        const _ = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(E.Provider, { value: _ }, e);
                    };
                var b = u(6483),
                    F = u.n(b),
                    f = u(926),
                    v = u.n(f);
                let D, C, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(C || (C = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const B = () => {
                        const e = (0, n.useContext)(E),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return D.ExtraLarge;
                                    case e.large:
                                        return D.Large;
                                    case e.medium:
                                        return D.Medium;
                                    case e.small:
                                        return D.Small;
                                    case e.extraSmall:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return C.ExtraLarge;
                                    case e.largeWidth:
                                        return C.Large;
                                    case e.mediumWidth:
                                        return C.Medium;
                                    case e.smallWidth:
                                        return C.Small;
                                    case e.extraSmallWidth:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    k = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const x = {
                        [C.ExtraSmall]: '',
                        [C.Small]: v().SMALL_WIDTH,
                        [C.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [C.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [D.ExtraSmall]: '',
                        [D.Small]: v().SMALL,
                        [D.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [D.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [D.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, k);
                        const r = B(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', y({ className: F()(u, x[i], S[s], T[l]) }, n), t);
                    },
                    O = ['children'];
                const I = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, O);
                    return a().createElement(A, null, a().createElement(L, u, t));
                };
                var N = u(1533),
                    M = u.n(N);
                u(1281);
                let P;
                function H(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function W(e) {
                    return e.replace(/-/g, '_');
                }
                function j(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(P || (P = {}));
                const $ = (e) => e.replace(/&nbsp;/g, ' '),
                    V =
                        ((() => {
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
                        })(),
                        (e) => H(R.strings.common.percentValue(), { value: e }));
                var G = u(9916),
                    z = u(8613);
                const U = 60,
                    q = 3600,
                    K = 86400;
                (Date.now(), z.Ew.getRegionalDateTime, z.Ew.getFormattedDateTime);
                const Y = () => {},
                    Z = (e = 0, t, u = 0, a = Y) => {
                        const r = (0, n.useState)(e),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== u && t <= u ? (s(u), a && a(), clearInterval(r)) : s(t);
                                            },
                                            1e3 * (t || (e > 120 ? U : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, a]),
                            i
                        );
                    },
                    X = (e, t) => {
                        const u = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    },
                    J = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        t &&
                            ((a = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id));
                        return { callerUrl: a, caller: u, stack: t, resId: n };
                    },
                    Q = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ee = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    te = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ue = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = Q(`${e}.${u}`, window);
                                return ee(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ne = (e) => {
                        const t = ((e) => {
                                const t = J(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: te(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = Q(te(u, `${t}.${n}`), window);
                                    return ee(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ae = () => (window.injected || (window.injected = new Map()), window.injected);
                const re = G.Sw.instance;
                let ie;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(ie || (ie = {}));
                const se = (e = 'model', t = ie.Deep) => {
                        const u = (0, n.useState)(0),
                            a = (u[0], u[1]),
                            r = (0, n.useMemo)(() => J(), []),
                            i = r.callerUrl,
                            s = r.caller,
                            l = r.resId,
                            o = (0, n.useMemo)(() => {
                                const t = (function (e) {
                                    return ae().has(e);
                                })(i.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !t ? `subViews.${s}.${e}` : e;
                            }, [i, s, e]),
                            c = (0, n.useState)(() =>
                                ((e) => {
                                    const t = Q(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return ee(t) ? t.value : t;
                                })(ue(o)),
                            ),
                            d = c[0],
                            _ = c[1],
                            m = (0, n.useRef)(-1);
                        return (
                            h(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? ie.Deep : ie.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== ie.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === ie.Deep
                                                ? (e === d && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = ne(e);
                                    m.current = re.addCallback(n, u, l, t === ie.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== ie.None)
                                    return () => {
                                        re.removeCallback(m.current, l);
                                    };
                            }, [l, t]),
                            d
                        );
                    },
                    le = (G.Sw.instance, X),
                    oe = Z;
                var ce = u(5521);
                const de = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function _e(e = ce.n.NONE, t = de, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ce.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u, a]);
                }
                const me = /<link.*?>/g,
                    Ee = /\.\.\//g,
                    ge = /<script.*?>/g,
                    pe = 'default.css',
                    he = (e) => {
                        const t = e.match(Ee);
                        return t && t.join('');
                    },
                    Ae = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(pe)) return u.href;
                        }
                        return '';
                    },
                    be = (e) => {
                        const t = Ae(),
                            u = he(t);
                        let n,
                            a = e;
                        for (; null !== (n = ge.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(Ee, '');
                                a = a.replace(e[2], t);
                            }
                        }
                        return a;
                    },
                    Fe = () => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const n = e.shift();
                            n && ((t = !0), n().then(() => u()));
                        };
                        return {
                            add: (n) => {
                                (e.push(n), t || u());
                            },
                        };
                    },
                    fe = 'SubView_base_df',
                    ve = 'subViews.onChanged',
                    De = Fe(),
                    Ce = (0, n.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: r }) => {
                        const i = (0, n.useState)(''),
                            s = i[0],
                            l = i[1],
                            o = (0, n.useMemo)(() => ({ __html: be(s) }), [s]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, n.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(ve, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            g = (0, n.useCallback)((e) => {
                                De.add(
                                    () =>
                                        new Promise((t) => {
                                            l(e);
                                            const u = new MutationObserver(() => {
                                                    (u.disconnect(), t());
                                                }),
                                                n = document.getElementById('root');
                                            n && u.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${n}`, g),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            ((u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, G.Eu)().then(() => {
                                                              (console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send());
                                        })({ name: n, path: u }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, g),
                                                console.info(`Sub view ${n} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ve, E);
                        }, [E, g, e, _]),
                            (0, n.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = he(Ae());
                                            let u;
                                            for (; null !== (u = me.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(Ee, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const p = F()(fe, r);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = Ae(),
                                        n = he(u);
                                    for (; null !== (t = me.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(pe) && n) {
                                            const t = n + e[1].replace(Ee, ''),
                                                u = document.createElement('link');
                                            ((u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u));
                                        }
                                    }
                                })(s),
                                u && u(e),
                                a().createElement('div', { className: p, dangerouslySetInnerHTML: o })
                            );
                        }
                        return t ? a().createElement('div', { className: p }, a().createElement(t, null)) : null;
                    }),
                    we = 'subViews.onChanged',
                    Be = '.html',
                    ke = /^coui:\/\/gui\/.*/,
                    ye = Fe(),
                    xe = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    };
                (0, n.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: u, children: r }) => {
                    const i = (0, n.useRef)(null),
                        s = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        l = (0, n.useState)(!1),
                        o = l[0],
                        c = l[1],
                        d = (0, n.useState)(!0),
                        _ = d[0],
                        m = d[1],
                        E = (0, n.useCallback)(
                            (e) => {
                                e.includes(s) &&
                                    (c(!0), engine.off(we, E), window.subViews.removeChildChangedCallback(s));
                            },
                            [s],
                        ),
                        g = (0, n.useCallback)(
                            (e) => {
                                ye.add(
                                    () =>
                                        new Promise((u) => {
                                            const n = new MutationObserver(() => {
                                                (m(!1), n.disconnect(), u());
                                            });
                                            if (i.current) {
                                                const u = document.getElementById('root');
                                                (u && u.setAttribute('id', 'bugSubView'),
                                                    i.current.setAttribute('id', 'root'));
                                                const a = document.createElement('link');
                                                ((a.href = e.replace(Be, '.css')),
                                                    (a.rel = 'stylesheet'),
                                                    document.head.appendChild(a),
                                                    ke.test(e) &&
                                                        xe(
                                                            e
                                                                .split('/')
                                                                .slice(0, -t)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    xe(e.replace(Be, '.js')),
                                                    n.observe(i.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            },
                            [t],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n = u.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        g(u),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${n} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(we, E);
                        }, [E, g, e, o]),
                        a().createElement(
                            'div',
                            { className: F()(fe, u) },
                            _ && r,
                            a().createElement('div', { ref: i }),
                        )
                    );
                });
                function Se(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Te = {
                        playHighlight() {
                            Se('highlight');
                        },
                        playClick() {
                            Se('play');
                        },
                        playYes() {
                            Se('yes1');
                        },
                    },
                    Le = {
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
                let Oe, Ie;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Oe || (Oe = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Ie || (Ie = {})));
                const Ne = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: o,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const p = (0, n.useRef)(null),
                        h = (0, n.useState)(u),
                        A = h[0],
                        b = h[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        D = f[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                A && null !== p.current && !p.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, n.useEffect)(() => {
                            b(u);
                        }, [u]),
                        a().createElement(
                            'div',
                            {
                                ref: p,
                                className: F()(
                                    Le.base,
                                    Le[`base__${r}`],
                                    i && Le.base__disabled,
                                    t && Le[`base__${t}`],
                                    A && Le.base__focus,
                                    v && Le.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== l && Se(l), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (m && m(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== o && Se(o),
                                        _ && _(e),
                                        u && (i || (p.current && (p.current.focus(), b(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (E && E(e), D(!1));
                                },
                                onClick: function (e) {
                                    i || (g && g(e));
                                },
                            },
                            r !== Oe.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Le.back }),
                                    a().createElement('span', { className: Le.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: F()(Le.state, Le.state__default) },
                                a().createElement('span', { className: Le.stateDisabled }),
                                a().createElement('span', { className: Le.stateHighlightHover }),
                                a().createElement('span', { className: Le.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Le.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ne.defaultProps = { type: Oe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Re = Ne,
                    Me = [
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
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const He = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: G.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    We = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            o = e.ignoreShowDelay,
                            c = void 0 !== o && o,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            h = e.targetId,
                            A = void 0 === h ? 0 : h,
                            b = e.onShow,
                            F = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Me);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(() => A || J().resId, [A]),
                            C = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (He(u, E, { isMouseEvent: !0, on: !0, arguments: Pe(a) }, D),
                                    b && b(),
                                    (v.current.isVisible = !0));
                            }, [u, E, a, D, b]),
                            w = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        He(u, E, { on: !1 }, D),
                                        v.current.isVisible && F && F(),
                                        (v.current.isVisible = !1));
                                }
                            }, [u, E, D, F]),
                            B = (0, n.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', B, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', B, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && w();
                            }, [p, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return p
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      r && r(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (w(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && w(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && w(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var k;
                    },
                    je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const Ve = R.views.common.tooltip_window.simple_tooltip_content,
                    Ge = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            l = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, je);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: r, note: i, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, r, i, l]);
                        return a().createElement(
                            We,
                            $e(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? Ve.SimpleTooltipHtmlContent('resId') : Ve.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            t,
                        );
                        var d;
                    },
                    ze = 'TextOverflow_base_3b',
                    Ue = ['content', 'classMix', 'className'];
                function qe() {
                    return (
                        (qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        qe.apply(this, arguments)
                    );
                }
                const Ke = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        r = e.className,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Ue);
                    const s = (0, n.useRef)(null),
                        l = (0, n.useState)(!0),
                        o = l[0],
                        c = l[1];
                    return (
                        (0, n.useEffect)(() =>
                            ((e) => {
                                let t,
                                    u = null;
                                return (
                                    (u = requestAnimationFrame(() => {
                                        u = requestAnimationFrame(() => {
                                            ((u = null), (t = e()));
                                        });
                                    })),
                                    () => {
                                        ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                                    }
                                );
                            })(() => {
                                const e = s.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        a().createElement(
                            Ge,
                            { isEnabled: o, body: t },
                            a().createElement('div', qe({}, i, { ref: s, className: F()(ze, r, u) }), t),
                        )
                    );
                };
                let Ye;
                !(function (e) {
                    ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                })(Ye || (Ye = {}));
                const Ze = 'DialogTemplateButton_base_0b',
                    Xe = 'DialogTemplateButton_label_83',
                    Je = 'DialogTemplateButton_label__noTooltip_14',
                    Qe = (0, n.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: r, label: i, tooltip: s, type: l }) => {
                            const o = (0, n.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                c = (0, n.useMemo)(() => {
                                    return (
                                        (e = s.type),
                                        (t = { buttonID: u }),
                                        {
                                            isEnabled: e !== Ye.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Ye.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Ye.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, t;
                                }, [s.type, u]),
                                d = F()(Xe, s.type !== Ye.absent && Je);
                            return a().createElement(
                                We,
                                c,
                                a().createElement(
                                    'div',
                                    { className: Ze },
                                    a().createElement(
                                        Re,
                                        { size: Ie.medium, type: l, disabled: r, onClick: o, isFocused: t },
                                        a().createElement(Ke, { classMix: d, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    et = 'DialogTemplateButtonList_base_8e';
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const ut = (0, n.memo)(() => {
                        const e = se('model').onButtonClicked,
                            t = se('model.focus'),
                            u = t.focusedIndex,
                            r = t.onTabPressed,
                            i = se('model.buttons'),
                            s = (0, n.useCallback)(
                                (e) => {
                                    r({ shift: e.shiftKey });
                                },
                                [r],
                            );
                        _e(ce.n.TAB, s);
                        const l = (0, n.useCallback)(
                            (t) => {
                                if (u < 0 || u >= i.length) return;
                                const n = i[u].value;
                                t.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [i, u, e],
                        );
                        return (
                            _e(ce.n.ENTER, l),
                            a().createElement(
                                'div',
                                { className: et },
                                i.map(({ value: t }, n) =>
                                    a().createElement(Qe, tt({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    nt = 'DialogTemplateWrapper_base_f7',
                    at = 'DialogTemplateWrapper_base__hidden_5f',
                    rt = 'DialogTemplateWrapper_subView_30';
                function it() {
                    return (
                        (it =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        it.apply(this, arguments)
                    );
                }
                const st = (0, n.memo)(({ Template: e }) => {
                    const t = se('model', ie.None),
                        u = t.onCloseClicked,
                        r = t.placeHolders,
                        i = t.background,
                        s = t.dimmerAlpha,
                        l = t.displayFlags;
                    (0, n.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const o = l.map(({ value: e }) => e),
                        c = (0, n.useRef)(r.map(({ value: e }) => e.resourceID)),
                        d = (0, n.useState)(0 !== c.current.length),
                        _ = d[0],
                        m = d[1],
                        E = (0, n.useCallback)(
                            (e = 'default') => {
                                u({ reason: e });
                            },
                            [u],
                        ),
                        g = (0, n.useCallback)(() => {
                            E('escape');
                        }, [E]);
                    var p;
                    ((p = g), _e(ce.n.ESCAPE, p));
                    const h = (0, n.useCallback)((e) => {
                            const t = c.current,
                                u = t.indexOf(e);
                            u > -1 && (t.splice(u, 1), 0 === t.length && m(!1));
                        }, []),
                        b = (0, n.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${s})` };
                            return (i && (e.backgroundImage = `url(${i})`), e);
                        }, [i, s]),
                        f = (0, n.useMemo)(
                            () =>
                                r.reduce(
                                    (e, { value: t }) => (
                                        (e[t.placeHolder] = a().createElement(Ce, {
                                            key: t.placeHolder,
                                            id: t.resourceID,
                                            mixClass: rt,
                                            onLoadCallback: h,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [h, r],
                        ),
                        v = F()(nt, _ && at);
                    return a().createElement(
                        A,
                        null,
                        a().createElement(
                            'div',
                            { className: v, style: b },
                            a().createElement(
                                e,
                                it(
                                    { onClose: E, buttons: a().createElement(ut, null), displayFlags: o, isShown: !_ },
                                    f,
                                ),
                            ),
                        ),
                    );
                });
                var lt = u(3403);
                const ot = {
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
                    ct = [
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
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                class _t extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Se(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Se(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(e, ct)),
                            m = F()(ot.base, ot[`base__${i}`], ot[`base__${r}`], null == s ? void 0 : s.base),
                            E = F()(ot.icon, ot[`icon__${i}`], ot[`icon__${r}`], null == s ? void 0 : s.icon),
                            g = F()(ot.glow, null == s ? void 0 : s.glow),
                            p = F()(ot.caption, ot[`caption__${i}`], null == s ? void 0 : s.caption),
                            h = F()(ot.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            dt(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== i && a().createElement('div', { className: ot.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: p }, t),
                            n && a().createElement('div', { className: h }, n),
                        );
                    }
                }
                let mt;
                ((_t.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition'));
                    })(mt || (mt = {})));
                function Et(e, t, u) {
                    const a = (0, n.useContext)(E);
                    let r = Object.entries(a).filter(([e, t]) => !0 === t && e in l);
                    return (
                        u && (r = r.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = r.map((e) =>
                                F()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + j(t))(u, e[0])]),
                            );
                            return ((e[u] = F()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const gt = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    pt = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: r,
                            topRight: i,
                            title: s,
                            content: l,
                            buttons: o,
                            footer: c,
                            displayFlags: d,
                            classNames: _,
                        }) => {
                            const m = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    d,
                                    mt,
                                ),
                                E = m.responsiveHeader,
                                g = m.responsiveClosePosition,
                                p = m.disableResponsiveContentPosition,
                                h = Et(['base'], gt),
                                A = (0, n.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                b = F()(h.base, t),
                                f = F()(
                                    gt.center,
                                    r && gt.center__withIcon,
                                    e && gt.center__shown,
                                    !p && gt.center__responsive,
                                    null == _ ? void 0 : _.center,
                                ),
                                v = F()(gt.icon, E && gt.icon__responsive, null == _ ? void 0 : _.icon),
                                D = F()(gt.title, E && gt.title__responsive, null == _ ? void 0 : _.title),
                                C = F()(gt.closeBtn, g && gt.closeBtn__responsive),
                                w = F()(
                                    gt.divider,
                                    !l && gt.divider__noContent,
                                    !c && gt.divider__noFooter,
                                    null == _ ? void 0 : _.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: b },
                                a().createElement(
                                    'div',
                                    { className: gt.topRight },
                                    i,
                                    a().createElement(
                                        'div',
                                        { className: C },
                                        a().createElement(_t, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: A,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: f },
                                    r && a().createElement('div', { className: v }, r),
                                    s && a().createElement('div', { className: D }, s),
                                    l && a().createElement('div', { className: gt.content }, l),
                                    a().createElement('div', { className: w }),
                                    c && a().createElement('div', { className: gt.footer }, c),
                                    o && a().createElement('div', { className: gt.buttons }, o),
                                ),
                            );
                        },
                    );
                function ht() {
                    return !1;
                }
                console.log;
                var At = u(9174);
                function bt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ft(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ft(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ft(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const ft = (e) => (0 === e ? window : window.subViews.get(e));
                const vt = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: l, mocks: o }) {
                                const c = (0, n.useRef)([]),
                                    d = (u, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ft,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = u(t),
                                                        r = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const l = 'string' == typeof r ? `${n}.${r}` : n,
                                                            o = i.O.view.addModelObserver(l, t, !0);
                                                        return (a.set(o, u), e && u(s(r)), o);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const u = s(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = bt(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            l =
                                                'real' === u
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            _ = e({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = At.LO.box(n, { equals: ht });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, At.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : o(e),
                                                            a = At.LO.box(n, { equals: ht });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, At.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = o(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = At.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, At.aD)((t) => {
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
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = At.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, At.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: u, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    E = m[0],
                                    g = m[1],
                                    p = (0, n.useState)(() => d(r, s, o)),
                                    h = p[0],
                                    A = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? A(d(E, s, o)) : (_.current = !0);
                                    }, [o, E, s]),
                                    (0, n.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (h.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [h],
                                    ),
                                    a().createElement(u.Provider, { value: h }, l)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e, readByPath: t }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'isRecoveryPossible',
                                    'isLimitReached',
                                    'dismissPeriod',
                                    'perkName',
                                    'perkLevel',
                                    'trainingLevel',
                                ]),
                                {
                                    tankman: t('tankman'),
                                    replacedTankman: e.object('replacedTankman'),
                                    replacedTankmanVehicle: e.object('replacedTankman.tankmanVehicleInfo'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            changeInput: e.createCallback((e) => ({ value: e }), 'onInputChanged'),
                        }),
                    ),
                    Dt = vt[0],
                    Ct = vt[1];
                let wt, Bt, kt, yt, xt;
                (!(function (e) {
                    ((e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader'));
                })(wt || (wt = {})),
                    (function (e) {
                        ((e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed'));
                    })(Bt || (Bt = {})),
                    (function (e) {
                        ((e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed'));
                    })(kt || (kt = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled'));
                    })(yt || (yt = {})),
                    (function (e) {
                        ((e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole'));
                    })(xt || (xt = {})));
                var St = u(9690);
                const Tt = (e, t) => e.split(',').includes(t),
                    Lt = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Ot, It;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(Ot || (Ot = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(It || (It = {})));
                const Nt = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: r,
                        tags: i = '',
                        size: s = Ot.extraSmall,
                        type: l = It.colored,
                        className: o,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const _ = `${W(n)}${e ? '_elite' : ''}`,
                            m = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return a().createElement(
                            'div',
                            { className: F()(Lt.base, Lt[`base__size${j(s)}`], Lt[`base__type${j(l)}`], o) },
                            a().createElement(
                                'div',
                                { className: F()(Lt.level, null == c ? void 0 : c.level) },
                                (0, St.HG)(r),
                            ),
                            a().createElement('div', {
                                className: F()(
                                    Lt.type,
                                    e && Lt[`type__elite${j(s)}`],
                                    Lt[`type__${s}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${m})` } : void 0,
                            }),
                            Tt(i, 'premiumIGR') && a().createElement('div', { className: Lt.premiumIGR }),
                            a().createElement(
                                'div',
                                { className: F()(Lt.name, null == c ? void 0 : c.name) },
                                d ? u : t,
                            ),
                        );
                    },
                    Rt = 100,
                    Mt = 'new_skill';
                let Pt;
                function Ht(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                !(function (e) {
                    ((e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom'));
                })(Pt || (Pt = {}));
                function Wt(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function jt(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function $t(e) {
                    if (0 !== e.length) return Ht(e, e.length - 1);
                }
                const Vt = ['children'];
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const zt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Vt);
                        return a().createElement(
                            We,
                            Gt(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    Ut = {
                        base: 'EfficiencyIndicator_base_34',
                        base__big: 'EfficiencyIndicator_base__big_a1',
                        base__large: 'EfficiencyIndicator_base__large_dc',
                        base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                        percent: 'EfficiencyIndicator_percent_6b',
                        percent__full: 'EfficiencyIndicator_percent__full_30',
                        icon: 'EfficiencyIndicator_icon_da',
                    };
                let qt;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(qt || (qt = {}));
                const Kt = (0, n.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = -1,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = qt.Normal,
                    }) => {
                        const i = -1 === e,
                            s = i
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return a().createElement(
                            zt,
                            { targetId: n, args: s, isEnabled: -1 !== t },
                            a().createElement(
                                'div',
                                { className: F()(Ut.base, Ut[`base__${r}`], i && Ut.base__untrained, u) },
                                i
                                    ? a().createElement('div', { className: Ut.icon })
                                    : a().createElement(
                                          'div',
                                          { className: F()(Ut.percent, 1 === e && Ut.percent__full) },
                                          V(G.Z5.getNumberFormat(100 * e, G.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let Yt;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(Yt || (Yt = {}));
                (R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body());
                let Zt;
                !(function (e) {
                    ((e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy'));
                })(Zt || (Zt = {}));
                let Xt;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(Xt || (Xt = {}));
                var Jt = u(7030);
                const Qt = a().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                        return a().createElement(Jt.animated.div, { style: t && e ? e : void 0 }, u);
                    }),
                    eu = 'AcceleratedTrainingIcon_base_4f',
                    tu = 'AcceleratedTrainingIcon_icon_45',
                    uu = (0, n.memo)(({ classMix: e, targetId: t }) =>
                        a().createElement(
                            Ge,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            a().createElement(
                                'div',
                                { className: F()(eu, e) },
                                a().createElement('div', { className: tu }),
                            ),
                        ),
                    );
                let nu, au, ru, iu, su, lu, ou;
                (!(function (e) {
                    ((e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap'));
                })(nu || (nu = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(au || (au = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency'));
                    })(ru || (ru = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })(iu || (iu = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(su || (su = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })(lu || (lu = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(ou || (ou = {})));
                const cu = (e) => (e.level < Rt ? ou.Learning : ou.Learned),
                    du = (e) =>
                        (function (e, t) {
                            for (let u = e.length - 1; u >= 0; u--) {
                                const n = Wt(e[u]);
                                if (t(n, u, e)) return n;
                            }
                        })(e, (e) => e.level === Rt),
                    _u = ({
                        name: e,
                        roleName: t,
                        level: u,
                        customName: n,
                        skillType: a,
                        skillIndex: r,
                        tooltipData: i,
                    }) => {
                        const s = { targetId: i.targetId, isEnabled: i.isEnabled };
                        return e === Mt
                            ? a === lu.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: i.tankmanID, skillIndex: r }, i.args),
                                      },
                                      s,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      s,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: 'crewPerkGf',
                                              tankmanID: i.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: a === lu.Bonus,
                                              level: u,
                                              customName: n,
                                              skillIndex: r,
                                          },
                                          i.args,
                                      ),
                                  },
                                  s,
                              );
                    },
                    mu = (e, t) => (e === su.c44x44 ? qt.Large : t ? qt.Big : qt.Normal),
                    Eu = (e, t) => {
                        const u = Ht(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    gu = (e, t) => {
                        const u = Ht(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    pu = 33,
                    hu = 0,
                    Au = !0,
                    bu = 'play';
                const Fu = [
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
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const vu = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            s = e.onAnimate,
                            l = e.frameTime,
                            o = void 0 === l ? pu : l,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? hu : c,
                            _ = e.lastFrameIndex,
                            m = void 0 === _ ? i - 1 : _,
                            E = e.loop,
                            g = void 0 === E ? Au : E,
                            p = e.state,
                            h = void 0 === p ? bu : p,
                            A = e.onAnimationDone,
                            b = e.onAnimationComplete,
                            F = e.poster,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Fu);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (h) {
                                    case 'play':
                                        return (function () {
                                            const e = wu(d, m, r),
                                                t = Du(d, m),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == s || s(a, r),
                                                          u(r),
                                                          a === m &&
                                                              (null == b || b(),
                                                              g || (null == A || A(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, o);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && F ? { path: F, x: 0, y: 0 } : r(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(Cu(e, t));
                                            return (
                                                t.addEventListener('load', n),
                                                () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [o, r, d, m, g, s, b, A, F, h]),
                            a().createElement('canvas', fu({}, f, { width: t, height: u, ref: v }))
                        );
                    }),
                    Du = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
                        };
                    },
                    Cu = (e, t) => Object.assign({}, e, { img: t }),
                    wu = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, Cu(e, t));
                            else {
                                const t = new Image();
                                ((a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, Cu(e, t)));
                            }
                        }
                        return n;
                    };
                function Bu(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const a = n % u,
                            r = (a % t.columns) * e.width,
                            i = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: i };
                    };
                }
                function ku(e) {
                    return (t) => `${e}${t}`;
                }
                const yu = () => {
                        const e = (0, n.useState)(i.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    u(i.O.view.getScale());
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
                    },
                    xu = [
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
                        'revers',
                    ];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                let Tu;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(Tu || (Tu = {}));
                const Lu = (e, t, u) => {
                        const n = new Image();
                        ((n.src = u(t)), e.push(n));
                    },
                    Ou =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                r = e.getSrcByFrame,
                                i = e.frameCount,
                                s = e.onAnimate,
                                l = void 0 === s ? () => {} : s,
                                o = e.frameTime,
                                c = void 0 === o ? 33 : o,
                                d = e.initialFrameIndex,
                                _ = void 0 === d ? 0 : d,
                                m = e.loop,
                                E = void 0 === m || m,
                                g = e.state,
                                p = void 0 === g ? Tu.Play : g,
                                h = e.onAnimationComplete,
                                A = void 0 === h ? () => {} : h,
                                b = e.revers,
                                F = void 0 !== b && b,
                                f = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(e, xu);
                            const v = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const n = i - 1,
                                        a = e.getContext('2d'),
                                        s = (n) => {
                                            (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u));
                                        };
                                    if ('stop' === p) {
                                        const e = r(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => s(t);
                                        return (t.addEventListener('load', u), () => t.removeEventListener('load', u));
                                    }
                                    const o = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) Lu(n, u, t);
                                            else for (let u = 0; u < e; u++) Lu(n, u, t);
                                            return n;
                                        })(i, r, F),
                                        d = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return ((u += 1), u > e && (u = 0), t);
                                            };
                                        })(n, _),
                                        m = setInterval(() => {
                                            const e = d(),
                                                t = o[e];
                                            (s(o[e]), l(e, t), e === n && (A(), E || clearInterval(m)));
                                        }, c);
                                    return () => clearInterval(m);
                                }, [i, c, r, u, _, E, l, A, p, t, F]),
                                a().createElement('canvas', Su({}, f, { width: t, height: u, ref: v }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    Iu = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    Nu = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    Ru = a().memo(function ({ type: e, index: t, totalAmount: u, className: r, size: s }) {
                        const l = (0, n.useState)(Tu.Stop),
                            o = l[0],
                            c = l[1],
                            d = yu(),
                            _ =
                                s === su.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: ku(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: ku(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            m = Bu(_),
                            E = s === su.c44x44 ? 60 : 36,
                            g = (0, Jt.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: i.O.view.remToPx(E) },
                                    config: { duration: 300, easing: Ou },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, d],
                            )[0];
                        return (
                            (0, n.useEffect)(() => {
                                const e = setTimeout(() => c(Tu.Play), 100 * (u - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, u]),
                            a().createElement(
                                Ge,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                a().createElement(
                                    Jt.animated.div,
                                    { style: g, className: F()(Nu.base, Nu[`base__${s}`], r) },
                                    a().createElement(
                                        'div',
                                        { className: Nu.icon },
                                        a().createElement(vu, {
                                            width: _.width,
                                            height: _.height,
                                            frameCount: _.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: o,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Mu = 'AnimatedNewSkill_base_0f';
                function Pu(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Hu(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Hu(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Hu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Wu = new Map();
                let ju = null;
                const $u = () => {
                        Wu.size
                            ? ju ||
                              (ju = window.setInterval(() => {
                                  for (var e, t = Pu(Wu.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : ju && (clearInterval(ju), (ju = null));
                    },
                    Vu = ({ type: e, state: t }) => {
                        const u = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: ku(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            r = Bu(u),
                            i = (0, n.useState)(Tu.Stop),
                            s = i[0],
                            l = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    l(Tu.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    Wu.set(t, t),
                                    $u(),
                                    () =>
                                        ((e) => {
                                            (Wu.delete(e), $u());
                                        })(e)
                                );
                            }, []),
                            a().createElement(vu, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: r,
                                loop: !1,
                                state: s,
                                onAnimationDone: () => {
                                    l(Tu.Stop);
                                },
                                className: Mu,
                            })
                        );
                    },
                    Gu = ({ size: e, children: t, className: u }) => {
                        const n = yu(),
                            r = e === su.c44x44 ? 48 : 26,
                            i = (0, Jt.useSpring)({
                                from: { opacity: 0, marginRight: -r * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: Iu },
                                delay: 800,
                            });
                        return a().createElement(Jt.animated.div, { style: i, className: u }, t);
                    },
                    zu = a().memo(function ({ isEnabled: e, className: t, children: u }) {
                        const r = (0, Jt.useSpring)(() => ({ from: { scale: 1 } })),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                e &&
                                    s.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: Iu },
                                    });
                            }, [e, s]),
                            a().createElement(Jt.animated.div, { style: e ? i : void 0, className: t }, u)
                        );
                    });
                let Uu;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale'));
                })(Uu || (Uu = {}));
                const qu = a().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: u,
                        className: n,
                        children: r,
                    }) {
                        return u === Uu.Scale
                            ? a().createElement(zu, { isEnabled: !0, className: n }, r)
                            : u === Uu.FadeIn
                              ? a().createElement(Gu, { size: e, key: t, className: n }, r)
                              : a().createElement('div', { className: n }, r);
                    }),
                    Ku = a().memo(function ({ size: e, className: t, children: u }) {
                        const n = e === su.c44x44 ? 48 : 26,
                            r = yu(),
                            i = (0, Jt.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * r }],
                                    config: { duration: 400, easing: Iu },
                                }),
                                [r, n],
                            )[0];
                        return a().createElement(Jt.animated.div, { style: i, className: t }, u);
                    });
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Zu = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: u }, e);
                        if (t.header || t.body) return a().createElement(Ge, t, n);
                        const r = t.contentId;
                        return r ? a().createElement(We, Yu({}, t, { contentId: r }), n) : a().createElement(zt, t, n);
                    },
                    Xu = ['className', 'children'];
                const Ju = (e) => {
                    let t = e.className,
                        u = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Xu);
                    return a().createElement(Zu, { tooltipArgs: _u(n), className: t }, u);
                };
                let Qu;
                !(function (e) {
                    ((e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved'));
                })(Qu || (Qu = {}));
                const en = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let tn;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(tn || (tn = {}));
                const un = a().memo(function ({ iconName: e, size: t = tn.c24x24, className: u }) {
                        var n;
                        const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: F()(en.base, en[`base__${t}`], u),
                        });
                    }),
                    nn = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    an = { [su.c24x24]: tn.c22x22, [su.c44x44]: tn.c52x52 },
                    rn = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: r,
                        name: i,
                        skillState: s,
                        battleBooster: l,
                        className: o,
                    }) => {
                        const c = l !== Qu.None,
                            d = ((e, t, u, n, a = Xt.Normal) =>
                                e === Mt
                                    ? iu.LightYellow
                                    : a === Xt.Untrained || n
                                      ? t === ou.Learning
                                          ? iu.Yellow
                                          : iu.Grey
                                      : a === Xt.Low
                                        ? u
                                            ? iu.Grey
                                            : iu.Red
                                        : t === ou.Learning
                                          ? iu.Yellow
                                          : iu.Grey)(i, s, c, t, u),
                            _ = (!c && u === Xt.Untrained) || t,
                            m = r === Mt;
                        return a().createElement(
                            'div',
                            {
                                className: F()(
                                    nn.base,
                                    nn[`base__type${j(n)}`],
                                    nn[`base__state${j(s)}`],
                                    nn[`base__border${j(d)}`],
                                    nn[`base__${e}`],
                                    _ && nn.base__disabled,
                                    o,
                                ),
                            },
                            a().createElement('div', {
                                className: nn.background,
                                style:
                                    n === lu.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            m && s === ou.Learned && a().createElement('div', { className: nn.newSkillHighLight }),
                            a().createElement(un, { iconName: r, size: an[e], className: nn.icon }),
                            _ && a().createElement('div', { className: nn.disabledOverlay }),
                        );
                    };
                function sn() {
                    return (
                        (sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        sn.apply(this, arguments)
                    );
                }
                const ln = (e, t) => (e ? Uu.Scale : t ? Uu.FadeIn : Uu.None),
                    on = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: n,
                        skillType: r,
                        size: i,
                        efficiencyState: s,
                        tooltipData: l,
                        skillsSignature: o,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: _ = au.None,
                        className: m,
                    }) => {
                        const E = _ === au.Blink || _ === au.SlideOutAndBlink,
                            g = _ === au.SlideOutAndBlink || _ === au.SlideOut,
                            p = _ === au.FadeIn,
                            h = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: l,
                                skillType: r,
                            };
                        return d && t.name === Mt && i === su.c24x24
                            ? a().createElement(
                                  Ju,
                                  sn({}, h, { className: m }),
                                  a().createElement(Vu, { type: r, state: n }),
                              )
                            : a().createElement(
                                  a().Fragment,
                                  null,
                                  u &&
                                      g &&
                                      a().createElement(
                                          Ku,
                                          { size: i, className: m, key: u.name },
                                          a().createElement(
                                              Qt,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  rn,
                                                  sn({ size: i, type: r, efficiencyState: s, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  a().createElement(
                                      qu,
                                      {
                                          size: i,
                                          skillsSignature: o,
                                          className: m,
                                          animationType: ln(_ === au.ScaleUp, p),
                                      },
                                      a().createElement(
                                          Ju,
                                          h,
                                          a().createElement(
                                              Qt,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  rn,
                                                  sn({ size: i, type: r, efficiencyState: s, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    cn = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    dn = a().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                        const n = (0, Jt.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            r = (0, Jt.useSpring)(() => ({
                                from: { x: i.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: Ou },
                                delay: 700,
                            }))[0],
                            s = (0, Jt.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: Ou },
                                }),
                                [t],
                            )[0];
                        return a().createElement(
                            'div',
                            { className: F()(cn.base, cn[`base__${e}`]) },
                            a().createElement(
                                Jt.animated.div,
                                { style: u ? r : void 0, className: F()(cn.level, cn.level__skillLost) },
                                n.val.to((e) => V(Math.floor(e))),
                            ),
                            a().createElement(
                                Jt.animated.div,
                                {
                                    style: u ? Object.assign({}, r, s) : s,
                                    className: F()(cn.level, cn.level__skillBlur),
                                },
                                n.val.to((e) => V(Math.floor(e))),
                            ),
                        );
                    }),
                    _n = 'SkillLevel_base_d2',
                    mn = 'SkillLevel_base__highlighted_e3',
                    En = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                        a().createElement(
                            'div',
                            { className: F()(_n, t && mn, u) },
                            V(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const u = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * u) / u : e;
                                      })(e),
                            ),
                        ),
                    gn = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: u,
                        wasLearned: n,
                        isAllMajorSkillsLearned: r,
                        skill: i,
                        possibleSkill: s,
                        blinkStyle: l,
                        className: o,
                    }) => {
                        const c = s || i,
                            d = void 0 !== i && void 0 !== s ? s.level - i.level : 0,
                            _ = e > 0,
                            m = e < 0 || d > 0;
                        return !c ||
                            (c.level === Rt && 0 === d) ||
                            ((null == s ? void 0 : s.level) === Rt && u === lu.Bonus && d > 0 && !r)
                            ? null
                            : _ || (d < 0 && 0 === e)
                              ? a().createElement(dn, { size: t, level: c.level, withSlideOut: _ })
                              : a().createElement(
                                    zu,
                                    { isEnabled: Boolean(n) },
                                    a().createElement(
                                        Qt,
                                        { blinkStyle: l, isEnabled: m },
                                        a().createElement(En, { skillLevel: c.level, isHighlighted: m, className: o }),
                                    ),
                                );
                    },
                    pn = {
                        base: 'Row_base_bb',
                        skill: 'Row_skill_fb',
                        base__c_44x44: 'Row_base__c_44x44_4f',
                        base__c_24x24: 'Row_base__c_24x24_16',
                        base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                        base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                        base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                        skill__last: 'Row_skill__last_0a',
                        skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                        base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                        skill__stateLearning: 'Row_skill__stateLearning_5d',
                        base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                        base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                        base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                        base__collapseExtraOverlapWithLevelAndEfficiency:
                            'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                        level: 'Row_level_56',
                        acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                        lostSkill: 'Row_lostSkill_32',
                    },
                    hn = ({
                        skills: e,
                        skillType: t = lu.Major,
                        possibleSkills: u,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: r = ru.None,
                        efficiencyState: i,
                        size: s,
                        tooltipData: l,
                        blinkStyle: o,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: _ = !1,
                        className: m,
                    }) => {
                        const E = void 0 === u ? e : u,
                            g = le(e),
                            p = le(E),
                            h = g && $t(g),
                            A = $t(e),
                            b = du(E),
                            f = $t(E),
                            v = u ? e.length - u.length : 0,
                            D = i !== Xt.Low || c || (f && A && f.level !== A.level),
                            C = ((e) => jt(e, (e) => e.name).join())(E);
                        return a().createElement(
                            'div',
                            { className: F()(pn.base, pn[`base__${s}`], pn[`base__collapse${j(r)}`], m) },
                            ((e, t, u, n, a) => {
                                if (!n || !t) return jt(u, (e, t) => a(e, au.None, t));
                                const r = new Map(jt(t, ({ name: e, level: t }) => [e, t])),
                                    i = new Map(jt(e, ({ name: e, level: t }) => [e, t]));
                                let s = !1;
                                return jt(u, (l, o) => {
                                    const c = l.name,
                                        d = l.level,
                                        _ = c === Mt,
                                        m = Eu(e, o),
                                        E = _ ? gu(e, o) : i.get(c),
                                        g = _ ? gu(t, o) : r.get(c),
                                        p = Eu(u, o - 1),
                                        h = Eu(n, o),
                                        A = Eu(n, o + 1);
                                    let b = au.None;
                                    return (
                                        s || c !== A || p === h || _ || m !== Mt
                                            ? _ && o === u.length - 1 && s
                                                ? (b = au.FadeIn)
                                                : (!_ && !i.has(c)) || (void 0 === m && _) || (E !== d && d === Rt)
                                                  ? (b = au.Blink)
                                                  : g !== E && (b = au.ScaleUp)
                                            : ((s = !0), (b = i.has(c) ? au.SlideOut : au.SlideOutAndBlink)),
                                        a(l, b, o)
                                    );
                                });
                            })(e, g, E, p, (e, u, n) => {
                                const r = cu(e);
                                return a().createElement(on, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: r,
                                    skillType: t,
                                    previousSkill: p && Ht(p, n),
                                    skillAnimationType: u,
                                    size: s,
                                    skillsSignature: C,
                                    efficiencyState: i,
                                    tooltipData: l,
                                    blinkStyle: o,
                                    isNewSkillAnimated: _,
                                    className: F()(
                                        pn.skill,
                                        pn[`skill__state${j(r)}`],
                                        e === f && pn.skill__last,
                                        e === b && pn.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            D &&
                                a().createElement(gn, {
                                    skillsAmountDiff: v,
                                    size: s,
                                    wasLearned: h && A && h.level !== A.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: A,
                                    possibleSkill: f,
                                    blinkStyle: o,
                                    className: pn.level,
                                }),
                            n &&
                                a().createElement(uu, {
                                    classMix: pn.acceleratedTrainingIcon,
                                    targetId: null == l ? void 0 : l.targetId,
                                }),
                            v > 0 &&
                                ((e, t) => {
                                    const u = [];
                                    for (let n = 0; n < e; n++) u.push(t(n));
                                    return u;
                                })(v, (e) =>
                                    a().createElement(Ru, {
                                        key: e,
                                        index: e,
                                        totalAmount: v,
                                        type: t,
                                        className: pn.lostSkill,
                                        size: s,
                                    }),
                                ),
                        );
                    };
                function An() {
                    return (
                        (An =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        An.apply(this, arguments)
                    );
                }
                const bn = ({
                        skills: e,
                        collapseLayout: t = ru.None,
                        skillType: u = lu.Major,
                        efficiencyState: n,
                        size: r,
                        tooltipData: i,
                        className: s,
                        isAcceleratedTrainingVisible: l,
                    }) => {
                        const o = $t(e),
                            c = du(e),
                            d = n !== Xt.Low && (null == o ? void 0 : o.level) !== Rt;
                        return a().createElement(
                            'div',
                            { className: F()(pn.base, pn[`base__${r}`], pn[`base__collapse${j(t)}`], s) },
                            jt(e, (e, t) => {
                                const s = cu(e);
                                return a().createElement(
                                    Ju,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        roleName: e.roleName,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: i,
                                        skillType: u,
                                        className: F()(
                                            pn.skill,
                                            pn[`skill__state${j(s)}`],
                                            e === o && pn.skill__last,
                                            e === c && pn.skill__lastLearnedSkill,
                                        ),
                                    },
                                    a().createElement(
                                        rn,
                                        An({ size: r, type: u, efficiencyState: n, skillState: s }, e),
                                    ),
                                );
                            }),
                            d && o && a().createElement(En, { skillLevel: o.level, className: pn.level }),
                            l &&
                                a().createElement(uu, {
                                    classMix: pn.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                        );
                    },
                    Fn = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function fn() {
                    return (
                        (fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        fn.apply(this, arguments)
                    );
                }
                const vn = ({
                        data: e,
                        dataToCompare: t,
                        classes: u,
                        tankmanID: n = -1,
                        size: r = su.c24x24,
                        collapseType: i = nu.None,
                        isSkillTooltipEnabled: s = !1,
                        isAcceleratedTrainingVisible: l = !1,
                        isNewSkillAnimated: o = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: _ = R.invalid('resId'),
                        tooltipArgs: m,
                        blinkStyle: E,
                        children: g,
                    }) => {
                        const p = e.majorSkills,
                            h = e.bonusSkills,
                            A = e.skillsEfficiency,
                            b = (null == t ? void 0 : t.skillsEfficiency) || A,
                            f = ((e) => (-1 === e ? Xt.Untrained : e < 1 ? Xt.Low : Xt.Normal))(A),
                            v = void 0 !== t && t.skillsEfficiency !== A,
                            D = f !== Xt.Normal || c || v,
                            C = null == t ? void 0 : t.majorSkills,
                            w = null == t ? void 0 : t.bonusSkills,
                            B = w || h,
                            k = $t(B),
                            y = d && B.length > 0,
                            x = o || void 0 !== t,
                            S = 6 === (null == C ? void 0 : C.length),
                            T = ((e, t, u, n) => {
                                if (9 !== t) return ru.None;
                                switch (e) {
                                    case nu.Default:
                                        if (u && n) return ru.NoMargins;
                                        break;
                                    case nu.Overlap:
                                        if (u) return n ? ru.Overlap : ru.ReducedMargins;
                                        if (n) return ru.OnlyLearningOverlap;
                                        break;
                                    case nu.ExtraOverlap:
                                        return u && n
                                            ? ru.ExtraOverlapWithLevelAndEfficiency
                                            : u
                                              ? ru.ExtraOverlapWithEfficiency
                                              : n
                                                ? ru.ExtraOverlapWithLevel
                                                : ru.ExtraOverlap;
                                }
                                return ru.None;
                            })(i, B.length, D, f !== Xt.Low && void 0 !== k && k.level < Rt),
                            L = {
                                size: r,
                                efficiencyState: f,
                                tooltipData: { targetId: _, isEnabled: s, tankmanID: n, args: m },
                            };
                        return a().createElement(
                            'div',
                            { className: F()(Fn.base, Fn[`base__${r}`], null == u ? void 0 : u.base) },
                            D &&
                                a().createElement(
                                    Qt,
                                    { blinkStyle: E, isEnabled: v && x },
                                    a().createElement(Kt, {
                                        efficiencyValue: b,
                                        tankmanID: n,
                                        className: Fn.efficiency,
                                        size: mu(r, y),
                                        targetId: _,
                                    }),
                                ),
                            g,
                            a().createElement(
                                'div',
                                { className: Fn.rows },
                                x
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              hn,
                                              fn(
                                                  {
                                                      skills: p,
                                                      possibleSkills: C,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: l,
                                                      isNewSkillAnimated: o,
                                                      isSkillsEfficiencyLearning: v,
                                                  },
                                                  L,
                                              ),
                                          ),
                                          y &&
                                              a().createElement(
                                                  hn,
                                                  fn(
                                                      {
                                                          skills: h,
                                                          skillType: lu.Bonus,
                                                          possibleSkills: w,
                                                          className: Fn.bonusRow,
                                                          collapseLayout: T,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: o,
                                                          isAllMajorSkillsLearned: S,
                                                      },
                                                      L,
                                                  ),
                                              ),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(bn, fn({ skills: p, isAcceleratedTrainingVisible: l }, L)),
                                          y &&
                                              a().createElement(
                                                  bn,
                                                  fn(
                                                      {
                                                          skills: h,
                                                          skillType: lu.Bonus,
                                                          className: Fn.bonusRow,
                                                          collapseLayout: T,
                                                      },
                                                      L,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    Dn = 'Content_base_48',
                    Cn = 'Content_base__disabled_e3',
                    wn = 'Content_content_cb',
                    Bn = 'Content_name_7b',
                    kn = 'Content_name__postProgression_f9',
                    yn = 'Content_specializationInfo_ac',
                    xn = 'Content_recruitLabel_17';
                function Sn() {
                    return (
                        (Sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Sn.apply(this, arguments)
                    );
                }
                const Tn = a().memo(
                        ({
                            tankman: e,
                            isRecruit: t,
                            additionalContent: u,
                            classNames: n,
                            isDisabled: r = !1,
                            withBonusSkills: i = !1,
                        }) =>
                            a().createElement(
                                'div',
                                { className: F()(Dn, r && Cn) },
                                a().createElement(
                                    'div',
                                    { className: wn },
                                    a().createElement(
                                        'div',
                                        { className: F()(Bn, e.hasPostProgression && kn, null == n ? void 0 : n.name) },
                                        e.fullUserName,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: F()(yn, null == n ? void 0 : n.specialization) },
                                        t
                                            ? a().createElement(
                                                  'div',
                                                  { className: xn },
                                                  R.strings.crew.tankman.recruit(),
                                              )
                                            : a().createElement(
                                                  Nt,
                                                  Sn({}, e.tankmanVehicleInfo, {
                                                      type: It.whiteSpanish,
                                                      isShortName: !0,
                                                  }),
                                              ),
                                    ),
                                ),
                                a().createElement(vn, {
                                    data: e.skills,
                                    collapseType: nu.Overlap,
                                    isBonusSkillsVisible: i,
                                }),
                                u,
                            ),
                    ),
                    Ln = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let On;
                !(function (e) {
                    ((e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31'));
                })(On || (On = {}));
                const In = {
                        [On.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [On.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [On.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    Nn = a().memo(({ nation: e, size: t = On.c1080x454, className: u }) =>
                        a().createElement('div', {
                            className: F()(Ln.base, Ln[`base__${t}`], u),
                            style: { backgroundImage: `url('${In[t].$dyn(e)}')` },
                        }),
                    ),
                    Rn = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let Mn;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(Mn || (Mn = {}));
                const Pn = (0, n.memo)(function ({ name: e, size: t = Mn.c100x60, classMix: u, isSkin: n = !1 }) {
                        let r = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                        n && (r = r.$dyn('crewSkins'));
                        const i = r.$dyn(W(e));
                        return (
                            i ||
                                console.error(
                                    `Can't find ${W(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${n ? '.crewSkins' : ''}`,
                                ),
                            a().createElement('div', {
                                style: { backgroundImage: `url(${i})` },
                                className: F()(Rn.base, Rn[`base__${t}`], u),
                            })
                        );
                    }),
                    Hn = 'Icon_base_93',
                    Wn = 'Icon_base__disabled_54',
                    jn = 'Icon_flag_ac',
                    $n = (e, t) => {
                        if (e && t) return { backgroundImage: `url(${e})` };
                    },
                    Vn = a().memo(
                        ({
                            nation: e,
                            tankmanIcon: t,
                            recruitGlowImage: u,
                            isTankmanInSkin: n,
                            isRecruit: r,
                            isDisabled: i,
                            className: s,
                            children: l,
                        }) =>
                            a().createElement(
                                'div',
                                { className: F()(Hn, i && Wn, s), style: $n(u, r) },
                                '' !== e && a().createElement(Nn, { nation: e, size: On.c240x118, className: jn }),
                                a().createElement(Pn, { name: t, size: Mn.c158x118, isSkin: n }),
                                l,
                            ),
                    ),
                    Gn = (0, n.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (u = (function (e = 0) {
                                      let t = e;
                                      const u = Math.trunc(t / K);
                                      t -= u * K;
                                      const n = Math.trunc(t / q);
                                      t -= n * q;
                                      const a = Math.trunc(t / U);
                                      return ((t -= a * U), { days: u, hours: n, minutes: a, seconds: t });
                                  })(e)).days > 0
                                    ? H(R.strings.common.duration.days(), { days: u.days })
                                    : u.hours > 0
                                      ? H(R.strings.common.duration.hours(), { hours: u.hours })
                                      : u.minutes > 0
                                        ? H(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                        : H(R.strings.common.duration.seconds(), { seconds: u.seconds })
                                : R.strings.common.duration.unlimited();
                        var u;
                        return a().createElement('span', null, t);
                    }),
                    zn = 'DismissedCountdown_base_12',
                    Un = 'DismissedCountdown_icon_e6',
                    qn = 'DismissedCountdown_label_92',
                    Kn = a().memo(({ duration: e }) =>
                        a().createElement(
                            'div',
                            { className: zn },
                            a().createElement('div', { className: Un }),
                            a().createElement('div', { className: qn }, a().createElement(Gn, { duration: oe(e, 1) })),
                        ),
                    ),
                    Yn = 'Location_base_4d',
                    Zn = 'Location_icon_eb',
                    Xn = a().memo(({ location: e, timeToDismiss: t, className: u }) =>
                        a().createElement(
                            'div',
                            { className: F()(Yn, u) },
                            e === Bt.Dismissed && a().createElement(Kn, { duration: t }),
                            e !== Bt.InBarracks &&
                                a().createElement('div', {
                                    className: Zn,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        ),
                    ),
                    Jn = 'Role_base_68',
                    Qn = 'Role_base__disabled_8c';
                var ea;
                !(function (e) {
                    ((e.White = 'white'), (e.Red = 'red'));
                })(ea || (ea = {}));
                const ta = a().memo(({ role: e, withPenalty: t, className: u, isDisabled: n = !1 }) =>
                        e !== wt.Any
                            ? a().createElement('div', {
                                  className: F()(Jn, n && Qn, u),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? ea.Red : ea.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    ua = {
                        base: 'TankmanCard_base_dd',
                        base__default: 'TankmanCard_base__default_72',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        icon: 'TankmanCard_icon_a5',
                        cardContent: 'TankmanCard_cardContent_79',
                        disabledLayer: 'TankmanCard_disabledLayer_25',
                        role: 'TankmanCard_role_02',
                        location: 'TankmanCard_location_3f',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        actions: 'TankmanCard_actions_b5',
                        newMark: 'TankmanCard_newMark_9b',
                    },
                    na = (0, n.memo)(({ tankman: e, className: t }) => {
                        const u = e.tankmanKind === kt.Recruit,
                            n = e.cardState === yt.Disabled;
                        return a().createElement(
                            'div',
                            { className: F()(ua.base, t, ua[`base__${e.cardState}`]) },
                            a().createElement(ta, {
                                isDisabled: n,
                                role: e.role,
                                withPenalty: e.hasRolePenalty,
                                className: ua.role,
                            }),
                            a().createElement(Xn, {
                                location: e.location,
                                timeToDismiss: e.timeToDismiss,
                                className: ua.location,
                            }),
                            a().createElement(Vn, {
                                nation: e.nation,
                                tankmanIcon: e.iconName,
                                recruitGlowImage: e.recruitGlowImage,
                                isTankmanInSkin: e.isInSkin,
                                isRecruit: u,
                                isDisabled: n,
                            }),
                            a().createElement(
                                'div',
                                { className: ua.separatorWrapper },
                                a().createElement('div', { className: F()(ua.separator, ua.separator__top) }),
                                a().createElement('div', { className: ua.separator }),
                            ),
                            a().createElement(Tn, { tankman: e, isRecruit: u, isDisabled: n }),
                        );
                    }),
                    aa = 'WarningText_base_10',
                    ra = 'WarningText_alertIcon_8f',
                    ia = (0, n.memo)(({ showIcon: e = !0, className: t, children: u }) =>
                        a().createElement(
                            'div',
                            { className: F()(aa, t) },
                            e && a().createElement('div', { className: ra }),
                            u,
                        ),
                    );
                var sa = u(8045);
                const la = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let oa, ca, da;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(oa || (oa = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(ca || (ca = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(da || (da = {})));
                const _a = { [da.NBSP]: oa.NoBreakSymbol, [da.ZWNBSP]: oa.NoBreakSymbol, [da.NEW_LINE]: oa.LineBreak },
                    ma = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ea = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    ga = 'renderers_noBreakWrapper_10',
                    pa = 'renderers_lineBreak_b5',
                    ha = 'renderers_newLine_bd',
                    Aa = 'renderers_word_f3',
                    ba = (e) => ({ color: `#${e}` }),
                    Fa = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? Ea[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: F()(Aa, Ea[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: Aa, style: ba(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType, className: Aa }, e);
                    },
                    fa = {
                        [oa.Word]: Fa,
                        [oa.NoBreakSymbol]: Fa,
                        [oa.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [oa.LineBreak]: ({ key: e }) =>
                            a().createElement('span', { key: e, 'data-block-type': oa.LineBreak, className: pa }),
                        [oa.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement('span', { key: t, 'data-block-type': oa.NewLine, className: ha }, e),
                        [oa.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': oa.NoBreakWrapper, className: ga },
                                e,
                            ),
                    },
                    va = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = va(e, fa[t], i);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    Da = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = fa[n],
                                            r = va(e, a, t);
                                        return (
                                            n === oa.NoBreakWrapper
                                                ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                : u.push(...r),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    Ca = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e)));
                        r !== e.length && u(e.slice(r));
                    },
                    wa = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Ba = (e) => {
                        const t = [];
                        return (
                            Ca(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(wa) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    ka = ma
                        ? (e) => {
                              const t = [];
                              return (
                                  Ca(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Ba(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = t.justifyContent === ca.FlexEnd ? n.index : u.lastIndex;
                                  (a.push(e.slice(r, i)), (r = i), (n = u.exec(e)));
                              }
                              return (r !== e.length && a.push(e.slice(r)), a);
                          },
                    ya = (e, t = '', u) => {
                        const n = [];
                        return (
                            Ca(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: oa.Word, colorTag: t, childList: ka(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = _a[u.charAt(0)];
                                    a === oa.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: oa.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: oa.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    xa = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            Ca(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...ya(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...ya(String(i), u, n))
                                        : a.push({ blockType: oa.Binding, colorTag: u, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    Sa = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === oa.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: oa.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    Ta = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === oa.NoBreakSymbol
                                        ? ((u = !0), t.push(...Sa(t.pop(), e)))
                                        : (u ? t.push(...Sa(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    Ca(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...xa(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...xa(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })($(e).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        return Da(n);
                    },
                    La = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Oa = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ia = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Oa(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const s = Math.max(u + i, 0);
                        return a < s ? [!1, 0] : [!0, s];
                    },
                    Na = (e, t, u, n, r, i) => {
                        let s = -1,
                            l = null;
                        for (let o = u; o >= 0; o--) {
                            const u = e[o],
                                c = Number(e[o].getAttribute('data-block-type'));
                            if (c === oa.LineBreak || c === oa.NewLine || c === oa.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Ia(u, n, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + i,
                                    E = t[o];
                                ((l = a().cloneElement(E, E.props, m)), (s = o));
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[o],
                                    _ = c.props.children,
                                    m = Na(e, _, e.length - 1, n, r, i),
                                    E = m[0],
                                    g = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    ((l = a().cloneElement(c, c.props, e, g)), (s = o));
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [s, l];
                    },
                    Ra = (e, t, u, n = '...') => {
                        const a = [...t],
                            r = e.current;
                        if (!r) return [a, !1];
                        const i = u.height,
                            s = u.width,
                            l = r.lastElementChild;
                        if (!La(l, i) && Oa(l, s) <= 0) return [a, !1];
                        const o = r.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    La(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(o, i);
                        if (c < 0) return [a, !1];
                        const d = Na(o, a, c, s, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return (m && (a.splice(_, 1, m), a.splice(_ + 1)), [a, !0]);
                    },
                    Ma = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: l,
                            targetId: o,
                            justifyContent: c = ca.FlexStart,
                            alignContent: d = ca.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                g = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                p = g[0],
                                h = g[1],
                                A = (0, n.useMemo)(() => Ta(e, r, { justifyContent: c }), [r, c, e]),
                                b = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        p.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, l, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [r, i, o, e, l, p.isTruncated]),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const t = Ra(m, A, E.current, _),
                                            n = t[0],
                                            a = t[1];
                                        (h({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a));
                                    },
                                    [u, _, A],
                                ),
                                v = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new sa.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(m, f, s),
                                a().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            la.base,
                                            t,
                                            la.base__zeroPadding,
                                            s && la.base__isTruncationAvailable,
                                        ),
                                        style: v,
                                    },
                                    a().createElement('div', { className: la.unTruncated, ref: m }, A),
                                    a().createElement(
                                        Zu,
                                        {
                                            tooltipArgs: b,
                                            className: F()(
                                                la.tooltip,
                                                la[`tooltip__justify-${c}`],
                                                la[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    la.truncated,
                                                    !p.isTruncateFinished && s && la.truncated__hide,
                                                ),
                                                style: v,
                                            },
                                            p.isTruncateFinished && s ? p.elementList : A,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Pa = 'DismissTankmanDescription_base_1e',
                    Ha = 'DismissTankmanDescription_warning_8c',
                    Wa = (0, lt.Pi)(() => {
                        const e = Ct().model;
                        return a().createElement(
                            'div',
                            { className: Pa },
                            e.isRecoveryPossible.get()
                                ? a().createElement(
                                      a().Fragment,
                                      null,
                                      e.isLimitReached.get() &&
                                          a().createElement(
                                              ia,
                                              { className: Ha },
                                              ((t = R.strings.dialogs.dismissTankman.limited()),
                                              (u = {
                                                  name: e.replacedTankman.get().fullUserName,
                                                  role: R.strings.item_types.tankman.roles.$dyn(
                                                      e.replacedTankman.get().role,
                                                  ),
                                                  vehicle: e.replacedTankmanVehicle.get().vehicleName,
                                              }),
                                              t.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                                  const t = 0 === e.indexOf('%') ? 2 : 1;
                                                  return String(u[e.slice(t, -t)]);
                                              })),
                                          ),
                                      a().createElement(Ma, {
                                          text: R.strings.dialogs.dismissTankman.description.time(),
                                          binding: { time: e.dismissPeriod.get() },
                                          justifyContent: ca.Center,
                                      }),
                                  )
                                : a().createElement(ia, null, R.strings.dialogs.dismissTankman.noRecovery()),
                        );
                        var t, u;
                    }),
                    ja = 'default',
                    $a = 'search',
                    Va = 'email',
                    Ga = 'password',
                    za = 'normal',
                    Ua = 'disabled',
                    qa = 'alert',
                    Ka = 'error',
                    Ya = 'medium',
                    Za = 'large',
                    Xa = {
                        [ja]: '',
                        [Va]: R.strings.common.input.placeholder.email(),
                        [$a]: R.strings.common.input.placeholder.search(),
                        [Ga]: R.strings.common.input.placeholder.password(),
                    },
                    Ja = { [ja]: 'text', [Va]: 'text', [$a]: 'text', [Ga]: 'password' },
                    Qa = { [ja]: '', [Va]: 'Invalid email', [$a]: '', [Ga]: '' },
                    er = R.images.gui.maps.icons.components.input;
                function tr(e, t) {
                    return (
                        t !== Va ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                const ur = {
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
                    nr = a().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: u = ja,
                            size: r = Ya,
                            variant: i = za,
                            placeholder: s = '',
                            highlighted: l,
                            withClear: o,
                            selectOnFocus: c = !0,
                            maxLength: d,
                            iconSource: _,
                            classMix: m,
                            onMouseEnter: E,
                            onMouseLeave: g,
                            onMouseDown: p,
                            onMouseUp: h,
                            onClick: A,
                            onChange: b,
                            onClear: f,
                            onFocus: v,
                            onBlur: D,
                        }) => {
                            const C = (0, n.useState)(!1),
                                w = C[0],
                                B = C[1],
                                k = (0, n.useRef)(null),
                                y = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                x = i !== Ua,
                                S = (0, n.useCallback)(
                                    (e) => {
                                        x && (B(!0), v && v(e));
                                    },
                                    [x, v],
                                ),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        x && !y.current.mouseOver && (B(!1), D && D(e));
                                    },
                                    [x, D],
                                );
                            (0, n.useEffect)(() => {
                                x && w && c && k.current && k.current.select();
                            }, [c, w, x]);
                            const L = (0, n.useCallback)(
                                    (e) => {
                                        x && b && b(e.target.value);
                                    },
                                    [x, b],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        x && ((y.current.mouseOver = !0), E && E(e));
                                    },
                                    [x, E],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        x &&
                                            k.current &&
                                            (y.current.mouseDown && k.current.focus(),
                                            (y.current.mouseOver = !1),
                                            g && g(e));
                                    },
                                    [x, g],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        x && ((y.current.mouseDown = !0), p && p(e));
                                    },
                                    [x, p],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        x && ((y.current.mouseDown = !1), h && h(e));
                                    },
                                    [x, h],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        if (x && k.current) {
                                            ((!w || (w && e.target !== k.current)) && k.current.focus(), A && A(e));
                                        }
                                    },
                                    [w, x, A],
                                ),
                                P = s || Xa[u],
                                H = Boolean(_),
                                W = F()(
                                    ur.base,
                                    ur[`base__${r}`],
                                    l && ur[`base__${i}`],
                                    w && ur.base__focused,
                                    H && ur.base__withIcon,
                                    m,
                                ),
                                j = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                $ = F()(ur.input, ur[`input__${u}`]),
                                V = F()(ur.icon, ur[`icon__${u}`]),
                                G = F()(ur.placeholder, ur[`placeholder__${u}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: O,
                                    onMouseDown: N,
                                    onMouseUp: R,
                                    onMouseLeave: I,
                                    onClick: M,
                                },
                                !x && a().createElement('div', { className: ur.disabled }),
                                j && a().createElement('div', { style: j, className: V }),
                                a().createElement('input', {
                                    ref: k,
                                    className: $,
                                    type: Ja[u],
                                    value: t,
                                    onChange: L,
                                    disabled: !x,
                                    onFocus: S,
                                    onBlur: T,
                                    maxLength: d,
                                }),
                                P && !t && !w && a().createElement('div', { className: G }, P),
                                o &&
                                    a().createElement('div', {
                                        className: ur.clear,
                                        onClick: (e) => {
                                            (Te.playClick(), f && f(e));
                                        },
                                        onMouseEnter: Te.playHighlight,
                                    }),
                            );
                        },
                    ),
                    ar = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    rr = ({ variant: e, show: t = !0, helperText: u, helperIcon: r, classMix: i }) => {
                        const s = (0, n.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === qa ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = F()(ar.base, t && ar.base__shown),
                            o = F()(ar.message, ar[`message__${e}`], i);
                        return a().createElement(
                            'div',
                            { className: l },
                            s && a().createElement('div', { className: ar.icon, style: s }),
                            a().createElement('div', { className: o }, u),
                        );
                    },
                    ir = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    sr = [
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
                function lr() {
                    return (
                        (lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        lr.apply(this, arguments)
                    );
                }
                const or = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    cr = (e) => {
                        let t = e.componentId,
                            u = e.type,
                            r = void 0 === u ? ja : u,
                            i = e.variant,
                            s = void 0 === i ? za : i,
                            l = e.size,
                            o = void 0 === l ? Ya : l,
                            c = e.value,
                            d = e.tooltipArgs,
                            _ = e.helperText,
                            m = void 0 === _ ? '' : _,
                            E = e.isValidated,
                            g = void 0 === E || E,
                            p = e.showHelper,
                            h = void 0 === p || p,
                            A = e.error,
                            b = e.options,
                            f = e.onFocus,
                            v = e.onMouseEnter,
                            D = e.onMouseLeave,
                            C = e.onMouseUp,
                            w = e.onMouseDown,
                            B = e.onChange,
                            k = e.classMix,
                            y = e.controlClassMix,
                            x = e.helperClassMix,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, sr);
                        const T = (0, n.useState)(c),
                            L = T[0],
                            O = T[1],
                            I = (0, n.useState)(g),
                            N = I[0],
                            R = I[1],
                            M = (0, n.useMemo)(() => Object.assign({}, or, b), [b]),
                            P = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, n.useCallback)((e) => {
                                e !== P.current.value &&
                                    ((P.current.value = e), (P.current.isChangeHandled = !1), O(e));
                            }, []),
                            W = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    (M.performChangeValidation &&
                                        (t = M.changesValidator ? M.changesValidator(e) : tr(e, P.current.type)),
                                        B && B(e, t));
                                },
                                [B, M],
                            ),
                            j = (0, n.useCallback)(() => {
                                P.current.debounceTimeout &&
                                    (window.clearTimeout(P.current.debounceTimeout), (P.current.debounceTimeout = 0));
                            }, []),
                            $ = (0, n.useCallback)(() => H(''), [H]);
                        (0, n.useEffect)(() => () => j(), [j]);
                        const V = (0, n.useCallback)(
                            (e) => {
                                (j(),
                                    M.debounceTime
                                        ? (P.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, M.debounceTime))
                                        : W(e));
                            },
                            [W, j, M.debounceTime],
                        );
                        ((0, n.useEffect)(() => {
                            P.current.isChangeHandled ||
                                P.current.value !== L ||
                                (V(P.current.value), (P.current.isChangeHandled = !0));
                        }, [L, V]),
                            (0, n.useEffect)(() => {
                                (P.current.isChangeHandled && c !== P.current.value && ((P.current.value = c), O(c)),
                                    (P.current.type = r));
                            }, [c, r]),
                            (0, n.useEffect)(() => {
                                R(g);
                            }, [g, s]));
                        const G = (0, n.useCallback)((e) => v && v(e), [v]),
                            z = (0, n.useCallback)(
                                (e) => {
                                    (M.disableHighlightOnFocus && N && R(!1), f && f(e));
                                },
                                [N, f, M.disableHighlightOnFocus],
                            ),
                            U = (0, n.useCallback)((e) => C && C(e), [C]),
                            q = (0, n.useCallback)((e) => w && w(e), [w]),
                            K = (0, n.useCallback)((e) => D && D(e), [D]),
                            Y = (0, n.useMemo)(
                                () =>
                                    M.withTypeIcon
                                        ? (function (e, t) {
                                              return e === $a ? er.$dyn(`search_${t}`) : '';
                                          })(r, o)
                                        : '',
                                [r, o, M.withTypeIcon],
                            ),
                            Z = m || Qa[r],
                            X = Boolean(L),
                            J = A ? Ka : s,
                            Q = Boolean(A) || N,
                            ee = (0, n.useMemo)(
                                () => ('boolean' == typeof M.withClear ? X && M.withClear : X && r === $a),
                                [r, X, M],
                            ),
                            te = F()(ir.base, ir[`base__${o}`], ir[`base__${s}`], k);
                        return a().createElement(
                            'div',
                            { id: t, className: te, onMouseEnter: G, onMouseDown: q, onMouseUp: U, onMouseLeave: K },
                            a().createElement(
                                Zu,
                                { tooltipArgs: d },
                                a().createElement(
                                    nr,
                                    lr(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: o,
                                            type: r,
                                            variant: J,
                                            value: L,
                                            withClear: ee,
                                            highlighted: Q,
                                            selectOnFocus: M.selectOnFocus,
                                            maxLength: M.maxLength,
                                            classMix: y,
                                            onFocus: z,
                                            onChange: H,
                                            onClear: $,
                                        },
                                        S,
                                    ),
                                ),
                            ),
                            Z &&
                                a().createElement(
                                    'div',
                                    { className: ir.helper },
                                    a().createElement(rr, {
                                        variant: J,
                                        show: h && (M.isPermanentHelper || Q),
                                        helperText: A || Z,
                                        helperIcon: M.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    dr = 'DismissTankmanInput_base_ce',
                    _r = 'DismissTankmanInput_labelShift_88',
                    mr = 'DismissTankmanInput_inputField_c4',
                    Er = (0, lt.Pi)(() => {
                        const e = Ct(),
                            t = e.model,
                            u = e.controls,
                            n = t.perkName.get(),
                            r = Boolean(n),
                            i = r
                                ? R.strings.dialogs.dismissTankman.description.perk()
                                : R.strings.dialogs.dismissTankman.description.qualification(),
                            s = r
                                ? { perk: R.strings.crew_perks.$dyn(n).name(), level: t.perkLevel.get() }
                                : { level: t.trainingLevel.get() };
                        return a().createElement(
                            'div',
                            { className: dr },
                            a().createElement(Ma, { text: i, binding: s, classMix: _r, justifyContent: ca.Center }),
                            a().createElement(cr, { size: Za, onChange: u.changeInput, classMix: mr }),
                        );
                    }),
                    gr = 'DismissTankmanContent_base_57',
                    pr = (0, lt.Pi)(() => {
                        const e = 100 === Ct().model.trainingLevel.get();
                        return a().createElement(
                            'div',
                            { className: gr },
                            e
                                ? a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(Wa, null),
                                      a().createElement(Er, null),
                                  )
                                : a().createElement(ia, null, R.strings.dialogs.dismissTankman.noRecovery()),
                        );
                    }),
                    hr = 'DismissTankmanApp_tankmanWrapper_05',
                    Ar = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const Fr = (0, lt.Pi)((e) => {
                    let t = e.onClose,
                        u = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Ar);
                    const s = Ct().model;
                    return a().createElement(
                        pt,
                        br({ onClose: t, buttons: u, displayFlags: r, isShown: n }, i, {
                            icon: a().createElement(na, { tankman: s.tankman, className: hr }),
                            title: R.strings.dialogs.dismissTankman.header(),
                            content: a().createElement(pr, null),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    M().render(
                        a().createElement(
                            Dt,
                            null,
                            a().createElement(I, null, a().createElement(st, { Template: Fr })),
                        ),
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, n] = deferred[l], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 4097),
        (() => {
            var e = { 4097: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, s] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        ((a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1721));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
