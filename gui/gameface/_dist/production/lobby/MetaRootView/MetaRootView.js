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
            527: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { mouse: () => c, off: () => u, on: () => i, onResize: () => s, onScaleUpdated: () => o }));
                var n = a(2472),
                    r = a(1176);
                const s = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function a() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', a))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', a))
                                : (0, r.R)(!1);
                        }
                        const s = ['down', 'up', 'move'].reduce(
                            (t, a) => (
                                (t[a] = (function (t) {
                                    return (a) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const s = `mouse${t}`,
                                            o = l[t]((e) => a([e, 'outside']));
                                        function i(e) {
                                            a([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(s, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(a)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, s, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => s,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = a(527),
                    r = a(2493);
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
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2493: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => r, G: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => s });
                var n = a(5959),
                    r = a(514);
                const s = { view: a(7641), client: n, sound: r.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => o });
                var n = a(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
                const r = {
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
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => u,
                        arabic2roman: () => S,
                        children: () => r,
                        displayStatus: () => s.W,
                        displayStatusIs: () => y,
                        events: () => o.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => F,
                        getFontNames: () => B,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => g,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => x,
                    }));
                var n = a(9690),
                    r = a(3722),
                    s = a(6112),
                    o = a(6538),
                    i = a(8566);
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = n.cg,
                    y = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    N = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => s });
                const n = ['args'],
                    r = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                    return r;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    s = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                (a.d(t, { n: () => n }),
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
                    })(r || (r = {})));
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => i, cg: () => s });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function s(e) {
                    let t = '';
                    for (let a = r.length - 1; a >= 0; a--) for (; e >= r[a];) ((t += n[a]), (e -= r[a]));
                    return t;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (o ? `${e}` : s(e));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => o.Z5,
                    B0: () => i,
                    c9: () => b,
                    ry: () => h,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
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
                        const a = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                const r = n;
                var s = a(1358),
                    o = a(8613);
                let i;
                var u;
                (((u = i || (i = {}))[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                    (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                    (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                    (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (u[(u.MOVE = 16)] = 'MOVE'),
                    (u[(u.CLOSE = 32)] = 'CLOSE'),
                    (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    g = a(3138);
                const E = ['args'];
                function p(e, t, a, n, r, s, o) {
                    try {
                        var i = e[s](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(n, r);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var s = e.apply(t, a);
                                        function o(e) {
                                            p(s, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            p(s, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => b(i.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var A = a(7572);
                const D = r.instance,
                    w = {
                        DataTracker: s.Z,
                        ViewModel: A.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), s) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                u = a.getBoundingClientRect(),
                                l = u.x,
                                c = u.y,
                                d = u.width,
                                m = u.height,
                                _ = {
                                    x: g.O.view.pxToRem(l) + o.x,
                                    y: g.O.view.pxToRem(c) + o.y,
                                    width: g.O.view.pxToRem(d),
                                    height: g.O.view.pxToRem(m),
                                };
                            b(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: v(_),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            1717: (e, t, a) => {
                'use strict';
                var n = a(7363),
                    r = a.n(n);
                const s = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var o = a(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var u;
                function l(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        s = Math.min(n, r);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                })(u || (u = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    m = c.height,
                    _ = Object.assign({ width: d, height: m }, l(d, m, i)),
                    g = (0, n.createContext)(_),
                    E = ['children'],
                    p = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, E);
                        const r = (0, n.useContext)(g),
                            o = r.extraLarge,
                            i = r.large,
                            u = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            m = r.largeWidth,
                            _ = r.mediumWidth,
                            p = r.smallWidth,
                            v = r.extraSmallWidth,
                            h = r.extraLargeHeight,
                            b = r.largeHeight,
                            f = r.mediumHeight,
                            C = r.smallHeight,
                            A = r.extraSmallHeight,
                            D = { extraLarge: h, large: b, medium: f, small: C, extraSmall: A };
                        if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                            if (a.extraLarge && o) return t;
                            if (a.large && i) return t;
                            if (a.medium && u) return t;
                            if (a.small && l) return t;
                            if (a.extraSmall && c) return t;
                        } else {
                            if (a.extraLargeWidth && d) return s(t, a, D);
                            if (a.largeWidth && m) return s(t, a, D);
                            if (a.mediumWidth && _) return s(t, a, D);
                            if (a.smallWidth && p) return s(t, a, D);
                            if (a.extraSmallWidth && v) return s(t, a, D);
                            if (!(
                                a.extraLargeWidth ||
                                a.largeWidth ||
                                a.mediumWidth ||
                                a.smallWidth ||
                                a.extraSmallWidth
                            )) {
                                if (a.extraLargeHeight && h) return t;
                                if (a.largeHeight && b) return t;
                                if (a.mediumHeight && f) return t;
                                if (a.smallHeight && C) return t;
                                if (a.extraSmallHeight && A) return t;
                            }
                        }
                        return null;
                    };
                ((p.defaultProps = {
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
                    (0, n.memo)(p));
                const v = ({ children: e }) => {
                    const t = (0, n.useContext)(g),
                        a = (0, n.useState)(t),
                        s = a[0],
                        u = a[1],
                        c = (0, n.useCallback)((e, t) => {
                            const a = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(t);
                            u(Object.assign({ width: a, height: n }, l(a, n, i)));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    (((e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
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
                    const m = (0, n.useMemo)(() => Object.assign({}, s), [s]);
                    return r().createElement(g.Provider, { value: m }, e);
                };
                var h = a(6483),
                    b = a.n(h),
                    f = a(926),
                    C = a.n(f);
                let A, D, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(A || (A = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const F = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), A.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return D.ExtraLarge;
                                    case e.largeWidth:
                                        return D.Large;
                                    case e.mediumWidth:
                                        return D.Medium;
                                    case e.smallWidth:
                                        return D.Small;
                                    case e.extraSmallWidth:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
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
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: s, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    B = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [D.ExtraSmall]: '',
                        [D.Small]: C().SMALL_WIDTH,
                        [D.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [D.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [D.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: C().SMALL_HEIGHT,
                        [w.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [w.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [A.ExtraSmall]: '',
                        [A.Small]: C().SMALL,
                        [A.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [A.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [A.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, B);
                        const s = F(),
                            o = s.mediaWidth,
                            i = s.mediaHeight,
                            u = s.mediaSize;
                        return r().createElement('div', S({ className: b()(a, y[o], N[i], x[u]) }, n), t);
                    },
                    P = ['children'],
                    I = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, P);
                        return r().createElement(v, null, r().createElement(k, a, t));
                    };
                var T = a(1533),
                    L = a.n(T);
                function O() {}
                function M() {
                    return !1;
                }
                console.log;
                var $ = a(9174);
                function W(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const H = (e) => (0 === e ? window : window.subViews.get(e)),
                    z = () => (e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: s = 'real', options: i, children: u, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (a, n, r) => {
                                        var s;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = H,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = a(t),
                                                        s = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (a, s) => {
                                                        const u = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = o.O.view.addModelObserver(u, t, !0);
                                                        return (r.set(l, a), e && a(i(s)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const a = i(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                a = (function (e, t) {
                                                                    var a =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (a) return (a = a.call(e)).next.bind(a);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (a = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return W(e, t);
                                                                                var a = Object.prototype.toString
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
                                                                                          ? W(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        a && (e = a);
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
                                                                })(r.keys());
                                                            !(e = a()).done;
                                                        )
                                                            s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            u =
                                                'real' === a
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : u.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: u,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = $.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === a &&
                                                                u.subscribe(
                                                                    (0, $.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = $.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === a &&
                                                                u.subscribe(
                                                                    (0, $.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = $.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    u.subscribe(
                                                                        (0, $.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                s = Object.entries(r),
                                                                o = s.reduce(
                                                                    (e, [t, a]) => ((e[a] = $.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    u.subscribe(
                                                                        (0, $.aD)((e) => {
                                                                            s.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
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
                                            _ = { mode: a, model: m, externalModel: u, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : t(_),
                                            externalModel: u,
                                            mode: a,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(s),
                                    g = _[0],
                                    E = _[1],
                                    p = (0, n.useState)(() => d(s, i, l)),
                                    v = p[0],
                                    h = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? h(d(g, i, l)) : (m.current = !0);
                                    }, [l, g, i]),
                                    (0, n.useEffect)(() => {
                                        E(s);
                                    }, [s]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    r().createElement(a.Provider, { value: v }, u)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    },
                    U = z()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                [
                                    'startTimestamp',
                                    'endTimestamp',
                                    'serverTimestamp',
                                    'state',
                                    'name',
                                    'hasTentativeDates',
                                ],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    G = U[0],
                    V = U[1];
                var q = a(9916);
                class j extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? q.B3.GOLD : q.B3.INTEGRAL;
                        const t = q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                j.defaultProps = { format: 'integral' };
                const Q = [
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
                function Y(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const X = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    K = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            s = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            u = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            E = e.isEnabled,
                            p = void 0 === E || E,
                            v = e.targetId,
                            h = void 0 === v ? 0 : v,
                            b = e.onShow,
                            f = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, Q);
                        const A = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var s;
                                        return (
                                            t &&
                                                ((r =
                                                    (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) ||
                                                    ''),
                                                (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (n = window.subViews[a].id)),
                                            { callerUrl: r, caller: a, stack: t, resId: n }
                                        );
                                    })().resId,
                                [h],
                            ),
                            w = (0, n.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (X(a, g, { isMouseEvent: !0, on: !0, arguments: Y(r) }, D),
                                    b && b(),
                                    (A.current.isVisible = !0));
                            }, [a, g, r, D, b]),
                            F = (0, n.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        X(a, g, { on: !1 }, D),
                                        A.current.isVisible && f && f(),
                                        (A.current.isVisible = !1));
                                }
                            }, [a, g, D, f]),
                            B = (0, n.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && F();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = A.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', B, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', B, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && F();
                            }, [p, F]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', F),
                                    () => {
                                        (window.removeEventListener('mouseleave', F), F());
                                    }
                                ),
                                [F],
                            ),
                            p
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((A.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          s && s(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (F(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && F(), null == u || u(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && F(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    },
                    Z = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    te = (e) => {
                        let t = e.children,
                            a = e.body,
                            s = e.header,
                            o = e.note,
                            i = e.alert,
                            u = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, Z);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, u, { body: a, header: s, note: o, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, a, s, o, u]);
                        return r().createElement(
                            K,
                            J(
                                {
                                    contentId:
                                        ((d = null == u ? void 0 : u.hasHtmlContent),
                                        d ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    ae = {
                        base: 'ClaimRewardsWidget_base_ee',
                        base__big: 'ClaimRewardsWidget_base__big_2b',
                        base__disabled: 'ClaimRewardsWidget_base__disabled_13',
                        base__hasAppearAnimation: 'ClaimRewardsWidget_base__hasAppearAnimation_13',
                        baseAppear: 'ClaimRewardsWidget_baseAppear_92',
                        icon: 'ClaimRewardsWidget_icon_a3',
                        count: 'ClaimRewardsWidget_count_eb',
                        label: 'ClaimRewardsWidget_label_54',
                        shine: 'ClaimRewardsWidget_shine_6e',
                        shine_big: 'ClaimRewardsWidget_shine_big_d5',
                        shine__left: 'ClaimRewardsWidget_shine__left_e3',
                        shine__right: 'ClaimRewardsWidget_shine__right_b0',
                        arrow: 'ClaimRewardsWidget_arrow_f0',
                        blinkShape: 'ClaimRewardsWidget_blinkShape_24',
                        blink: 'ClaimRewardsWidget_blink_ed',
                        blinker: 'ClaimRewardsWidget_blinker_c0',
                    },
                    ne = {
                        base: 'Background_base_1b',
                        bg: 'Background_bg_85',
                        bgDisabled: 'Background_bgDisabled_e4',
                        bgHover: 'Background_bgHover_be',
                        base__big: 'Background_base__big_bf',
                        base__hovered: 'Background_base__hovered_e5',
                    },
                    re = ({ isHover: e, size: t, disabled: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()(ne.base, ne[`base__${t}`], e && ne.base__hovered) },
                            a
                                ? r().createElement('div', { className: ne.bgDisabled })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { className: ne.bg }),
                                      r().createElement('div', { className: ne.bgHover }),
                                  ),
                        ),
                    se = {
                        base: 'Border_base_f7',
                        border: 'Border_border_3b',
                        borderHover: 'Border_borderHover_ed',
                        base__big: 'Border_base__big_b8',
                        base__hovered: 'Border_base__hovered_fb',
                        borderDisabled: 'Border_borderDisabled_ec',
                    },
                    oe = ({ isHover: e, size: t, disabled: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()(se.base, se[`base__${t}`], e && se.base__hovered) },
                            a
                                ? r().createElement('div', { className: se.borderDisabled })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { className: se.border }),
                                      r().createElement('div', { className: se.borderHover }),
                                  ),
                        ),
                    ie = R.strings.comp7_ext.awardsWidget;
                let ue;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(ue || (ue = {}));
                const le = ({ count: e, disabled: t = !1, size: a, onClick: s }) => {
                    const i = (0, n.useState)(!1),
                        u = i[0],
                        l = i[1],
                        c = t ? ie.description.awardDisabled() : ie.description.award();
                    return r().createElement(
                        te,
                        { body: c },
                        r().createElement(
                            'div',
                            {
                                className: b()(
                                    ae.base,
                                    ae[`base__${a}`],
                                    t ? ae.base__disabled : ae.base__hasAppearAnimation,
                                ),
                                onMouseEnter: () => {
                                    (o.O.sound.play.sound(R.sounds.highlight()), l(!0));
                                },
                                onMouseLeave: () => {
                                    l(!1);
                                },
                                onClick: () => {
                                    t || (o.O.sound.play.click(), s());
                                },
                            },
                            r().createElement(oe, { size: a, isHover: u, disabled: t }),
                            r().createElement(re, { size: a, isHover: u, disabled: t }),
                            r().createElement('div', { className: ae.icon }),
                            r().createElement(
                                'div',
                                { className: ae.count },
                                r().createElement(j, { format: 'integral', value: e }),
                            ),
                            r().createElement('div', { className: ae.label }, ie.title(e)),
                            !t &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: b()(ae.shine, ae.shine__left) }),
                                    r().createElement('div', { className: b()(ae.shine, ae.shine__right) }),
                                    r().createElement('div', { className: ae.arrow }),
                                    r().createElement(
                                        'div',
                                        { className: ae.blinkShape },
                                        r().createElement('div', { className: ae.blink }),
                                    ),
                                ),
                        ),
                    );
                };
                function ce(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const de = {
                        playHighlight() {
                            ce('highlight');
                        },
                        playClick() {
                            ce('play');
                        },
                        playYes() {
                            ce('yes1');
                        },
                    },
                    me = {
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
                    _e = [
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
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                class Ee extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ce(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ce(this.props.soundClick));
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
                            a = e.onClick,
                            n = e.goto,
                            s = e.side,
                            o = e.type,
                            i = e.classNames,
                            u = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                    return r;
                                })(e, _e)),
                            _ = b()(me.base, me[`base__${o}`], me[`base__${s}`], null == i ? void 0 : i.base),
                            g = b()(me.icon, me[`icon__${o}`], me[`icon__${s}`], null == i ? void 0 : i.icon),
                            E = b()(me.glow, null == i ? void 0 : i.glow),
                            p = b()(me.caption, me[`caption__${o}`], null == i ? void 0 : i.caption),
                            v = b()(me.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            ge(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(u),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== o && r().createElement('div', { className: me.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: E })),
                            r().createElement('div', { className: p }, t),
                            n && r().createElement('div', { className: v }, n),
                        );
                    }
                }
                Ee.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var pe = a(5521);
                const ve = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function he(e = pe.n.NONE, t = ve, a = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== pe.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(n), a && n.stopPropagation());
                            }
                        }
                    }, [t, e, a, r]);
                }
                const be = 'page_heading_9c',
                    fe = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            he(pe.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: b()('page_close_4e', t) },
                                r().createElement(Ee, {
                                    caption: R.strings.comp7_ext.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    Ce = () => o.O.client.graphicsQuality.isHigh(),
                    Ae = () => {
                        const e = F(),
                            t = e.mediaSize,
                            a = e.remScreenHeight,
                            n = t >= A.Medium && a >= w.Large ? 'medium' : 'small';
                        return { size: n, isSmall: 'small' === n, isMedium: 'medium' === n };
                    };
                var De = a(3403);
                let we, Fe, Be, Se, ye;
                (!(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics'));
                })(we || (we = {})),
                    (function (e) {
                        ((e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth'));
                    })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                    })(Be || (Be = {})),
                    (function (e) {
                        ((e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E'));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved'));
                    })(ye || (ye = {})));
                const Ne = {
                        [we.Progression]: 'progression',
                        [we.RankRewards]: 'rankRewards',
                        [we.WeeklyQuests]: 'weeklyQuests',
                        [we.Leaderboard]: 'leaderboard',
                        [we.YearlyRewards]: 'yearlyRewards',
                        [we.Shop]: 'shop',
                        [we.YearlyStatistics]: 'yearlyStatistics',
                    },
                    xe = {
                        TABS: { context: 'model.sidebar' },
                        SCHEDULE: { context: 'model.scheduleInfo' },
                        PROGRESSION_PAGE: { context: 'model.progressionModel' },
                        RANK_REWARDS_PAGE: { context: 'model.rankRewardsModel' },
                        WEEKLY_QUESTS_PAGE: { context: 'model.weeklyQuestsModel' },
                        LEADERBOARD_PAGE: { context: 'model.leaderboardModel' },
                        YEARLY_REWARDS_PAGE: { context: 'model.yearlyRewardsModel' },
                        SHOP_PAGE: { context: 'model.shopModel' },
                        YEARLY_STATISTICS_PAGE: { context: 'model.yearlyStatisticsModel' },
                    };
                var Re = a(3946);
                const ke = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), claimRewardsModel: e.object('claimRewardsModel') },
                                a = e.object('progressionModel.qualificationModel'),
                                n = (0, Re.Om)(() => t.root.get().pageViewId === we.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                            openWhatsNewScreen: e.createCallbackNoArgs('onWhatsNewScreenOpen'),
                            openRewardsSelectionScreen: e.createCallbackNoArgs(
                                'claimRewardsModel.onGoToRewardSelection',
                            ),
                        }),
                    ),
                    Pe = ke[0],
                    Ie = ke[1];
                function Te(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const Le = Te;
                function Oe(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Me(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function $e(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) if (t(Le(e, a), a, e)) return !0;
                    return !1;
                }
                function We(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const s = null == (n = e[r]) ? void 0 : n.value;
                        t(s, r, e) && a.push(s);
                    }
                    return a;
                }
                function He(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const r = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: Oe(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function ze(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = Oe(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function Ue(e, t) {
                    for (let a = 0; a < e.length; a++) if (t(Le(e, a), a, e)) return a;
                }
                function Ge(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) if (t(Le(e, a), a, e)) return a;
                }
                function Ve(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) n = t(n, Le(e, a), a, e);
                    return n;
                }
                const qe = R.images.comp7.gui.maps.icons.metaTabs,
                    je = (e, t) => {
                        const a = Ne[e];
                        return t ? `${qe.$dyn(a)}` : `${qe.small.$dyn(a)}`;
                    },
                    Qe = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                n = (0, Re.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: Me(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: je(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: M },
                                );
                            return Object.assign({}, t, { computes: { tabs: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Ye = Qe[0],
                    Xe = Qe[1],
                    Ke = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    ((a = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                            }
                        );
                    };
                var Ze = a(7030);
                const Je = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    et = r().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: n }, s) {
                        return r().createElement(
                            'div',
                            { className: b()(Je.base, Je[`base__${a}`], n), ref: s },
                            r().createElement('div', {
                                className: b()(
                                    Je.border,
                                    Je.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: b()(
                                    Je.border,
                                    Je.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: b()(Je.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    tt = {
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
                    at = { mouseEnter: 'highlight', click: 'play' },
                    nt = r().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: n,
                            sounds: s = at,
                            notification: o,
                            icon: i,
                            size: u,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: d,
                            onMouseLeave: m,
                            WrapperElement: _,
                        },
                        g,
                    ) {
                        const E = (e, a) => {
                                !t && s[a] && ce(s[a]);
                            },
                            p = r().createElement(
                                'div',
                                {
                                    className: b()(
                                        tt.base,
                                        tt[`base__${u}`],
                                        t && b()(tt.base__active, null == n ? void 0 : n.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        (E(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (E(0, 'mouseEnter'), null == d || d(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (E(0, 'mouseLeave'), null == m || m(e));
                                    })(e),
                                    ref: t ? g : null,
                                },
                                r().createElement('div', {
                                    className: b()(tt.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof i && u
                                    ? i(u)
                                    : r().createElement('div', {
                                          className: b()(tt.icon, tt[`icon__${u}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, size: u, isActive: t }),
                                o &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                tt.notification,
                                                tt[`notification__${o.type}`],
                                                o.size ? tt[`notification__${o.size}`] : tt.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== o.type && o.value,
                                    ),
                            );
                        return _ ? r().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    rt = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    st = r().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: s,
                        classNames: i,
                        size: u = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const g = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            v = (0, n.useRef)(null),
                            h = (0, Ze.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            f = (0, Ze.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            C = (0, Ze.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / o.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    (h.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        f.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 50 },
                                        }));
                                },
                                onRest: () => {
                                    (h.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        f.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        }));
                                },
                            }))[1],
                            A = (0, n.useCallback)((e) => {
                                null !== p.current &&
                                    null !== v.current &&
                                    e(p.current.getBoundingClientRect().top - v.current.getBoundingClientRect().top);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                A((e) => {
                                    C.start({ position: e, config: { duration: 200 } });
                                });
                            }, [C, e, A]),
                            (0, n.useEffect)(
                                () =>
                                    Ke(() => {
                                        A((e) => {
                                            C.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [C, A, u],
                            ),
                            r().createElement(
                                'div',
                                { className: b()(rt.base, s), ref: v },
                                t.map(({ id: t, items: n, title: s, groupClassNames: o }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()(rt.group, rt[`group__${u}`], null == o ? void 0 : o.group),
                                        },
                                        s &&
                                            r().createElement(
                                                'div',
                                                { className: b()(rt.title, null == o ? void 0 : o.title) },
                                                s,
                                            ),
                                        n.map(({ id: t, icon: n, notification: s }) =>
                                            r().createElement(nt, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: s,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: u,
                                                className: null == i ? void 0 : i.tab,
                                                classNames: i,
                                                additionContent: l,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(et, {
                                    arrowRef: g,
                                    ref: E,
                                    size: u,
                                    className: null == i ? void 0 : i.frame,
                                    classNames: i,
                                }),
                            )
                        );
                    }),
                    ot = R.strings.comp7_ext.sidebar.tabs.tooltip,
                    it = ({ children: e, id: t }) => {
                        const a = Ne[t];
                        return r().createElement(te, { header: `${ot.header.$dyn(a)}`, body: `${ot.body.$dyn(a)}` }, e);
                    },
                    ut = (0, De.Pi)(({ pageView: e, className: t }) => {
                        const a = Xe(),
                            s = a.model,
                            o = a.controls,
                            i = Ae(),
                            u = (0, n.useCallback)((e) => o.changeSidebarTab(e), [o]),
                            l = s.computes.tabs(i.isMedium);
                        return r().createElement(st, {
                            tabs: l,
                            onClick: u,
                            active: e,
                            size: i.size,
                            className: t,
                            classNames: { icon: b()('Tabs_icon_9f', i.isMedium && 'Tabs_icon__medium_1c') },
                            WrapperElement: it,
                        });
                    });
                let lt;
                !(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'));
                })(lt || (lt = {}));
                const ct = ['children', 'className'];
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                const mt = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, ct);
                        return r().createElement('div', dt({ className: b()('Heading_base_4b', a) }, n), t);
                    },
                    _t = ({ message: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: b()('Spinner_base_87', t) },
                            e &&
                                r().createElement(
                                    'div',
                                    { className: b()('Spinner_caption_cf', null == a ? void 0 : a.caption) },
                                    e,
                                ),
                            r().createElement('div', {
                                className: b()('Spinner_gear_c4', null == a ? void 0 : a.gear),
                            }),
                            r().createElement('div', {
                                className: b()('Spinner_logo_bf', null == a ? void 0 : a.logo),
                            }),
                        ),
                    gt = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
                    Et = {
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
                let pt, vt;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(pt || (pt = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(vt || (vt = {})));
                const ht = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: s,
                    disabled: o,
                    mixClass: i,
                    soundHover: u,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: g,
                    onClick: E,
                }) => {
                    const p = (0, n.useRef)(null),
                        v = (0, n.useState)(a),
                        h = v[0],
                        f = v[1],
                        C = (0, n.useState)(!1),
                        A = C[0],
                        D = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== p.current && !p.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            f(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: b()(
                                    Et.base,
                                    Et[`base__${s}`],
                                    o && Et.base__disabled,
                                    t && Et[`base__${t}`],
                                    h && Et.base__focus,
                                    A && Et.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== u && ce(u), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (_ && _(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && ce(l),
                                        m && m(e),
                                        a && (o || (p.current && (p.current.focus(), f(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (g && g(e), D(!1));
                                },
                                onClick: function (e) {
                                    o || (E && E(e));
                                },
                            },
                            s !== pt.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Et.back }),
                                    r().createElement('span', { className: Et.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: b()(Et.state, Et.state__default) },
                                r().createElement('span', { className: Et.stateDisabled }),
                                r().createElement('span', { className: Et.stateHighlightHover }),
                                r().createElement('span', { className: Et.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Et.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ht.defaultProps = { type: pt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const bt = ht,
                    ft = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    Ct = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), items: e.array('items') },
                                a = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.items.get(), e);
                                        if (!a) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, Re.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.state,
                                        n = e.leaderboardUpdateTimestamp;
                                    return a !== lt.Initial && n > 0;
                                }),
                                r = (0, Re.Om)(() => a(0).rank),
                                s = (0, Re.Om)(() => t.root.get().lastBestUserPosition + 1),
                                o = (0, Re.Om)((e) => t.root.get().ownSpaID === a(e).spaID),
                                i = (0, Re.Om)(() => -1 !== t.root.get().lastBestUserPosition),
                                u = (0, Re.Om)(
                                    () => ({ first: a(0).position, last: a(t.items.get().length - 1).position }),
                                    { equals: ft },
                                ),
                                l = (0, Re.Om)(() => i() && s() >= u().first && s() <= u().last),
                                c = (0, Re.Om)(
                                    (e) => {
                                        const a = Math.ceil(t.root.get().recordsCount / e);
                                        return {
                                            amount: a,
                                            hasPagination: a > 1,
                                            active: Math.floor(u().first / e) + 1,
                                        };
                                    },
                                    { equals: ft },
                                ),
                                d = (0, Re.Om)((e) => a(e).position < 3),
                                m = (0, Re.Om)(() => -1 === t.root.get().personalPosition);
                            return Object.assign({}, t, {
                                computes: {
                                    leaderboardItem: a,
                                    hasUpdateInfo: n,
                                    firstItemRank: r,
                                    rowsDividerPosition: s,
                                    hasRowsDivider: l,
                                    isPersonalRow: o,
                                    hasPositionIcon: d,
                                    isDefaultPersonalPosition: m,
                                    hasLastBestUserPosition: i,
                                    pages: c,
                                    pagePositions: u,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            getTableRecords: e.createCallback((e, t) => ({ limit: e, offset: t }), 'getTableRecords'),
                        }),
                    ),
                    At = Ct[0],
                    Dt = Ct[1],
                    wt = R.strings.comp7_ext.leaderboard.error,
                    Ft = (0, De.Pi)(({ className: e }) => {
                        const t = Dt(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().isLoading,
                            o = F().mediaSize;
                        return r().createElement(
                            'div',
                            { className: b()('ErrorState_base_bf', e) },
                            r().createElement(
                                'div',
                                { className: 'ErrorState_titleContainer_bc' },
                                r().createElement('div', { className: 'ErrorState_alertIcon_92' }),
                                r().createElement('div', { className: 'ErrorState_title_49' }, wt.title()),
                            ),
                            r().createElement('div', { className: 'ErrorState_description_e3' }, wt.description()),
                            r().createElement(
                                'div',
                                { className: 'ErrorState_buttonWrapper_e1' },
                                r().createElement(
                                    bt,
                                    {
                                        type: pt.secondary,
                                        disabled: s,
                                        size: ((i = o), i >= A.Medium ? vt.medium : vt.small),
                                        mixClass: 'ErrorState_button_5f',
                                        onClick: n.refresh,
                                    },
                                    wt.buttonText(),
                                ),
                            ),
                        );
                        var i;
                    }),
                    Bt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function St(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const yt = () => {
                        const e = (0, n.useMemo)(() => ({}), []),
                            t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                            a = (e, a) => {
                                t(e).set(a, a);
                            },
                            r = (e, a) => {
                                t(e).delete(a);
                            },
                            s = (e, ...a) => {
                                for (
                                    var n,
                                        r = (function (e, t) {
                                            var a =
                                                ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                            if (a) return (a = a.call(e)).next.bind(a);
                                            if (
                                                Array.isArray(e) ||
                                                (a = (function (e, t) {
                                                    if (e) {
                                                        if ('string' == typeof e) return St(e, t);
                                                        var a = Object.prototype.toString.call(e).slice(8, -1);
                                                        return (
                                                            'Object' === a && e.constructor && (a = e.constructor.name),
                                                            'Map' === a || 'Set' === a
                                                                ? Array.from(e)
                                                                : 'Arguments' === a ||
                                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                                                  ? St(e, t)
                                                                  : void 0
                                                        );
                                                    }
                                                })(e)) ||
                                                (t && e && 'number' == typeof e.length)
                                            ) {
                                                a && (e = a);
                                                var n = 0;
                                                return function () {
                                                    return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                                };
                                            }
                                            throw new TypeError(
                                                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                            );
                                        })(t(e).values());
                                    !(n = r()).done;
                                )
                                    (0, n.value)(...a);
                            };
                        return (0, n.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                    },
                    Nt = [];
                function xt(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), Nt)
                    );
                }
                function Rt(e, t, a, n) {
                    let r,
                        s = !1,
                        o = 0;
                    function i() {
                        r && clearTimeout(r);
                    }
                    function u(...u) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            ((o = Date.now()), a.apply(l, u));
                        }
                        s ||
                            (n && !r && d(),
                            i(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                        (u.cancel = function () {
                            (i(), (s = !0));
                        }),
                        u
                    );
                }
                let kt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(kt || (kt = {}));
                const Pt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    It = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: s,
                        forceTriggerMouseMove: o,
                    }) => {
                        const i = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return s <= r ? 0 : Bt(r, s, a);
                        };
                        return (u = {}) => {
                            const l = u.settings,
                                c = void 0 === l ? Pt : l,
                                d = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(!1),
                                g = yt(),
                                E = (function (e, t, a) {
                                    const r = (0, n.useMemo)(() => Rt(150, e), []);
                                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                                })(() => {
                                    o && o();
                                }),
                                p = (0, Ze.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), g.trigger('change', e), o && _.current && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                v = p[0],
                                h = p[1],
                                b = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = v.scrollPosition.get(),
                                            s = (null != (n = v.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, t * a + s + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                f = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            h.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, v.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, v.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = m.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            r = b(t, e, n);
                                        f(r);
                                    },
                                    [f, b, c.step],
                                ),
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(r(e)),
                                            d.current && g.trigger('mouseWheel', e, v.scrollPosition, t(d.current)));
                                    },
                                    [v.scrollPosition, C, g],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Ke(() => {
                                            const e = d.current;
                                            e &&
                                                (f(i(e, v.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [f, v.scrollPosition.goal],
                                ),
                                w = xt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, v.scrollPosition.goal);
                                    (t !== v.scrollPosition.goal && f(t, { immediate: !0 }),
                                        g.trigger('recalculateContent'));
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', D),
                                        () => {
                                            window.removeEventListener('resize', D);
                                        }
                                    ),
                                    [D],
                                ),
                                (0, n.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !o) return;
                                    const t = () => {
                                            _.current = !0;
                                        },
                                        a = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', a),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', a));
                                        }
                                    );
                                }, [d]),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? s(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? t(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: A,
                                        applyScroll: f,
                                        applyStepTo: C,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: h,
                                        animationScroll: v,
                                        recalculateContent: w,
                                        events: { on: g.on, off: g.off },
                                    }),
                                    [v.scrollPosition, f, C, g.off, g.on, w, A, h, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Tt = It({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? kt.Next : kt.Prev),
                    }),
                    Lt = {
                        '--pageContentWidth': '78vw',
                        base: 'CurrentPositionPanel_base_ba',
                        base__active: 'CurrentPositionPanel_base__active_a4',
                        cell: 'CurrentPositionPanel_cell_e3',
                        cell__order: 'CurrentPositionPanel_cell__order_65',
                        cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_f5',
                        cell__battles: 'CurrentPositionPanel_cell__battles_7c',
                        cell__score: 'CurrentPositionPanel_cell__score_ca',
                        screwIcon: 'CurrentPositionPanel_screwIcon_d2',
                        screwIcon__left: 'CurrentPositionPanel_screwIcon__left_87',
                        screwIcon__right: 'CurrentPositionPanel_screwIcon__right_5e',
                    };
                let Ot;
                !(function (e) {
                    ((e.None = 'None'), (e.Active = 'Active'));
                })(Ot || (Ot = {}));
                const Mt = R.strings.comp7_ext.leaderboard.currentPosition,
                    $t = { [Ot.None]: 'none', [Ot.Active]: 'active' },
                    Wt = (0, De.Pi)(({ state: e, height: t, onClick: a, className: n }) => {
                        const s = Dt().model.root.get(),
                            o = s.personalPosition,
                            i = s.personalBattlesCount,
                            u = s.personalScore;
                        return r().createElement(
                            'div',
                            {
                                className: b()(Lt.base, Lt[`base__${$t[e]}`], n),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            r().createElement('div', { className: b()(Lt.screwIcon, Lt.screwIcon__left) }),
                            {
                                [Ot.None]: r().createElement('div', { className: b()(Lt.cell) }, Mt.none()),
                                [Ot.Active]: r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: b()(Lt.cell, Lt.cell__order) }, o + 1),
                                    r().createElement(
                                        'div',
                                        { className: b()(Lt.cell, Lt.cell__currentPosition) },
                                        Mt.body(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Lt.cell, Lt.cell__battles) },
                                        r().createElement(j, { value: i }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Lt.cell, Lt.cell__score) },
                                        r().createElement(j, { value: u }),
                                    ),
                                ),
                            }[e],
                            r().createElement('div', { className: b()(Lt.screwIcon, Lt.screwIcon__right) }),
                        );
                    });
                function Ht(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        s = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => s, [s]);
                    const o = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            ((r.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, o),
                        s,
                    ];
                }
                const zt = 'VerticalBar_base__nonActive_42',
                    Ut = 'disable',
                    Gt = () => {},
                    Vt = { pending: !1, offset: 0 },
                    qt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    jt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Qt = (e, t) => Math.max(20, e.offsetHeight * t),
                    Yt = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = qt, onDrag: s = Gt }) => {
                        const i = (0, n.useRef)(null),
                            u = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(Vt),
                            g = _[0],
                            E = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        d.current &&
                                            s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [s],
                            ),
                            v = xt(() => {
                                const t = d.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${Qt(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    i.current &&
                                        (1 === s ? i.current.classList.add(zt) : i.current.classList.remove(zt)),
                                    s
                                );
                            }),
                            h = xt(() => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = Bt(0, 1, s / (r - n)),
                                    m = (t.offsetHeight - Qt(t, o)) * i;
                                ((a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    u.current.classList.add(Ut),
                                                    void l.current.classList.remove(Ut)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(Ut),
                                                    void l.current.classList.add(Ut)
                                                );
                                            var t, a;
                                            (u.current.classList.remove(Ut), l.current.classList.remove(Ut));
                                        }
                                    })(m));
                            }),
                            f = xt(() => {
                                jt(e, () => {
                                    (v(), h());
                                });
                            });
                        ((0, n.useEffect)(() => Ke(f)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    jt(e, () => {
                                        h();
                                    });
                                };
                                let a = Gt;
                                const n = () => {
                                    (a(), (a = Ke(f)));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!g.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        p(Vt);
                                    }),
                                    a = o.O.client.events.mouse.move(([t]) => {
                                        jt(e, (a) => {
                                            const n = c.current,
                                                r = d.current,
                                                o = e.getContainerSize();
                                            if (!n || !r || !o) return;
                                            const i = t.screenY - g.offset - n.getBoundingClientRect().y,
                                                u = (i / n.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                s({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: u }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, g.offset, g.pending, s, p]));
                        const C = Ht((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const w = (e) => {
                            e.target.classList.contains(Ut) || ce('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: b()('VerticalBar_base_f3', t.base), ref: i, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: b()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ut) || 0 !== e.button || (ce('play'), A(kt.Next));
                                },
                                ref: u,
                                onMouseEnter: w,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            (ce('play'),
                                            t.target === n
                                                ? p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((r = t.screenY > n.getBoundingClientRect().y ? kt.Prev : kt.Next),
                                                  d.current &&
                                                      jt(e, (t) => {
                                                          if (!t) return;
                                                          const n = a(e),
                                                              s = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(s);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: w,
                                },
                                r().createElement('div', { ref: d, className: b()('VerticalBar_thumb_32', t.thumb) }),
                                r().createElement('div', { className: b()('VerticalBar_rail_43', t.rail) }),
                            ),
                            r().createElement('div', {
                                className: b()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ut) || 0 !== e.button || (ce('play'), A(kt.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Xt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Kt = ({ className: e, classNames: t, children: a, api: s }) => (
                        (0, n.useEffect)(() => Ke(s.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: b()(Xt.base, e), ref: s.wrapperRef, onWheel: s.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: b()(Xt.content, null == t ? void 0 : t.content), ref: s.contentRef },
                                a,
                            ),
                        )
                    );
                Kt.Default = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: s,
                    areaClassName: o,
                    scrollClassName: i,
                    scrollClassNames: u,
                    getStepByRailClick: l,
                    onDrag: c,
                }) => {
                    const d = (0, n.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: b()(Xt.base, e.base) });
                        }, [s]),
                        m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return r().createElement(
                        'div',
                        { className: b()(Xt.defaultScroll, a), onWheel: t.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: b()(Xt.area, o) },
                            r().createElement(Kt, { className: i, classNames: u, api: m }, e),
                        ),
                        r().createElement(Yt, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                    );
                };
                const Zt = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
                var Jt = a(1281);
                let ea;
                function ta(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function aa(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function na(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ea || (ea = {}));
                const ra = (e) => e.replace(/&nbsp;/g, ' '),
                    sa = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    oa = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    ia = (e, t, a = ea.left) => e.split(t).reduce(a === ea.left ? sa : oa, []),
                    ua = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    la = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ca = R.strings.comp7_ext.division,
                    da = { [Se.A]: 'A', [Se.B]: 'B', [Se.C]: 'C', [Se.D]: 'D', [Se.E]: 'E' },
                    ma = (e) => ca.$dyn(da[e]),
                    _a = (e) => aa(ca.text(), { division: ma(e) }),
                    ga = {
                        [Fe.First]: 'first',
                        [Fe.Second]: 'second',
                        [Fe.Third]: 'third',
                        [Fe.Fourth]: 'fourth',
                        [Fe.Fifth]: 'fifth',
                        [Fe.Sixth]: 'sixth',
                    },
                    Ea = (e, t) => `${e.$dyn(ga[t])}`,
                    pa = (e, t = { upperCase: !1 }) => {
                        const a = t.upperCase ? R.strings.comp7_ext.rankUpper : R.strings.comp7_ext.rank;
                        return Ea(a, e);
                    },
                    va = (e, t = { upperCase: !1 }) =>
                        aa(t.upperCase ? R.strings.comp7_ext.rankUpper.text() : R.strings.comp7_ext.rank.text(), {
                            rank: pa(e, t),
                        }),
                    ha = (e) => ga[e],
                    ba = [Fe.First, Fe.Second, Fe.Third, Fe.Fourth],
                    fa = (e) => ba.includes(e);
                let Ca;
                !(function (e) {
                    ((e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600'));
                })(Ca || (Ca = {}));
                const Aa = 'RankEmblem_base_2d',
                    Da = ({ rank: e, size: t, division: a, seasonName: s, className: o }) => {
                        const i = (0, n.useMemo)(() => {
                            const n = R.images.comp7.gui.maps.icons.ranks.$dyn(s).$num(t),
                                r = fa(e) && void 0 !== a ? `_${ma(a)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${ha(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [s, t, e, a]);
                        return r().createElement('div', { className: b()(Aa, o), style: i });
                    },
                    wa = (0, De.Pi)(({ index: e, className: t, onClick: a }) => {
                        const n = Dt().model,
                            s = V().model,
                            o = n.computes.leaderboardItem(e).rank;
                        return r().createElement(
                            'div',
                            { className: b()('RowsDivider_base_e8', t), onClick: a },
                            r().createElement(Da, { seasonName: s.season.name.get(), rank: o, size: Ca.x64 }),
                            r().createElement('div', { className: 'RowsDivider_rankText_6c' }, va(o)),
                        );
                    }),
                    Fa = 'Header_separator_e3',
                    Ba = 'Header_cell_27',
                    Sa = 'Header_cell__score_a3',
                    ya = R.strings.comp7_ext.leaderboard.table.header,
                    Na = R.strings.comp7_ext.leaderboard.table.tooltip,
                    xa = () =>
                        r().createElement(
                            'div',
                            { className: 'Header_base_72' },
                            r().createElement(
                                te,
                                { header: Na.order.header(), body: Na.order.body() },
                                r().createElement('div', { className: b()(Ba, 'Header_cell__order_16') }, ya.order()),
                            ),
                            r().createElement('div', { className: Fa }),
                            r().createElement(
                                te,
                                { header: Na.player.header(), body: Na.player.body() },
                                r().createElement('div', { className: b()(Ba, 'Header_cell__player_6e') }, ya.player()),
                            ),
                            r().createElement('div', { className: Fa }),
                            r().createElement(
                                te,
                                { header: Na.battlesCount.header(), body: Na.battlesCount.body() },
                                r().createElement('div', { className: b()(Ba, Sa) }, ya.battlesCount()),
                            ),
                            r().createElement('div', { className: Fa }),
                            r().createElement(
                                te,
                                { header: Na.score.header(), body: Na.score.body() },
                                r().createElement('div', { className: b()(Ba, Sa) }, ya.score()),
                            ),
                        );
                let Ra;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })(Ra || (Ra = {}));
                const ka = ['content', 'classMix', 'className'];
                function Pa() {
                    return (
                        (Pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Pa.apply(this, arguments)
                    );
                }
                const Ia = (e) => {
                        let t = e.content,
                            a = e.classMix,
                            s = e.className,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, ka);
                        const i = (0, n.useRef)(null),
                            u = (0, n.useState)(!0),
                            l = u[0],
                            c = u[1];
                        return (
                            (0, n.useEffect)(() =>
                                Ke(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            r().createElement(
                                te,
                                { isEnabled: l, body: t },
                                r().createElement(
                                    'div',
                                    Pa({}, o, { ref: i, className: b()('TextOverflow_base_3b', s, a) }),
                                    t,
                                ),
                            )
                        );
                    },
                    Ta = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    La = { [Ra.default]: 'c_24x24', [Ra.x48]: 'c_48x48', [Ra.x80]: 'c_80x80', [Ra.x220]: 'c_220x220' },
                    Oa = ({ badgeID: e, size: t = Ra.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(La[t]);
                        return r().createElement('div', {
                            className: b()(Ta.base, Ta[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Ma = {
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
                    $a = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, n.useMemo)(
                                () => aa(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            te,
                            { header: t, body: a },
                            r().createElement('div', { className: Ma.anonymizedIcon }),
                        );
                    });
                function Wa() {
                    return (
                        (Wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Wa.apply(this, arguments)
                    );
                }
                const Ha = { [Ra.default]: 'c_64x24', [Ra.x48]: 'c_68x28' },
                    za = { [Ra.default]: 'c_48x48', [Ra.x48]: 'c_48x48' },
                    Ua = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: s = { badgeID: '' },
                        suffixBadge: o = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: u = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = Ra.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const g = R.images.gui.maps.icons.library.badges.strips.$dyn(Ha[d]),
                            E = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${g.$dyn(`strip_${o.badgeID}`)})` }),
                                [o, g],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(za[d]),
                            v = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${o.badgeID}`)})` }),
                                [o, p],
                            ),
                            h = t ? `[${t}]` : '',
                            f = b()(Ma.base, Ma[`base__${d}`], i && Ma.base__inverted),
                            C = b()(Ma.userName, m),
                            A = b()(Ma.clanTag, _),
                            D = e !== c,
                            w = u ? `${c}${h}` : c,
                            F = Boolean(s.badgeID) && r().createElement(Oa, Wa({ size: d }, s, { key: 'badge' })),
                            B = Date.now(),
                            S = [
                                F,
                                [
                                    r().createElement(
                                        'div',
                                        { className: C, key: 'userName' },
                                        r().createElement(Ia, { content: e, key: B }),
                                    ),
                                    !u && Boolean(h) && r().createElement('div', { className: A, key: 'clanTag' }, h),
                                ],
                                0 !== a && r().createElement('div', { className: Ma.igrIcon, key: 'igrType' }),
                                Boolean(o.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: Ma.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: Ma.suffixBadgeStripe, style: E }),
                                        r().createElement('div', { className: Ma.suffixBadge, style: v }),
                                    ),
                                l && D && r().createElement($a, { tooltipHeaderName: w, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: f }, i ? S.reverse() : S);
                    };
                let Ga;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Ga || (Ga = {}));
                const Va = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: s,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const u = (0, n.useCallback)(() => {
                                ((0, q.c9)(q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    de.playYes());
                            }, [s, t, a, r]),
                            l = (0, n.useCallback)(() => {
                                (0, q.c9)(q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (i && i(e), ((e) => e.button === Ga.RIGHT)(e) && u());
                                },
                                [i, u],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    qa = ['children'];
                function ja() {
                    return (
                        (ja =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ja.apply(this, arguments)
                    );
                }
                const Qa = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, qa);
                        return r().createElement(
                            Va,
                            ja({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Ya = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? r().createElement(Qa, { args: a }, e) : e,
                    Xa = {
                        base: 'Row_base_6d',
                        base__personal: 'Row_base__personal_6b',
                        order: 'Row_order_43',
                        order__first: 'Row_order__first_eb',
                        order__second: 'Row_order__second_b2',
                        order__third: 'Row_order__third_33',
                        playerContainer: 'Row_playerContainer_ef',
                        player: 'Row_player_42',
                        clanTag: 'Row_clanTag_36',
                        battles: 'Row_battles_b9',
                        score: 'Row_score_0e',
                    },
                    Ka = R.strings.comp7_ext.leaderboard.table.tooltip,
                    Za = { 0: 'first', 1: 'second', 2: 'third' },
                    Ja = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = Dt().model,
                            n = a.computes.leaderboardItem(e),
                            s = n.position,
                            o = n.battlesCount,
                            i = n.userName,
                            u = n.clanTag,
                            l = n.clanTagColor,
                            c = n.score,
                            d = n.spaID,
                            m = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return r().createElement(
                            'div',
                            { className: b()(Xa.base, m && Xa.base__personal, t), style: { '--clanTagColor': l } },
                            r().createElement(
                                te,
                                { header: Ka.order.header(), body: Ka.order.body() },
                                r().createElement(
                                    'div',
                                    { className: b()(Xa.order, _ && Xa[`order__${Za[s]}`]) },
                                    !_ && s + 1,
                                ),
                            ),
                            r().createElement(
                                Ya,
                                { contextMenuArgs: { spaID: d, userName: i }, isEnabled: !m },
                                r().createElement(
                                    'div',
                                    { className: Xa.playerContainer },
                                    r().createElement(
                                        te,
                                        { header: Ka.player.header(), body: Ka.player.body() },
                                        r().createElement(
                                            'div',
                                            { className: Xa.player },
                                            r().createElement(Ua, {
                                                userName: i,
                                                clanAbbrev: u,
                                                clanTagClassName: l && Xa.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                te,
                                { header: Ka.battlesCount.header(), body: Ka.battlesCount.body() },
                                r().createElement('div', { className: Xa.battles }, r().createElement(j, { value: o })),
                            ),
                            r().createElement(
                                te,
                                { header: Ka.score.header(), body: Ka.score.body() },
                                r().createElement('div', { className: Xa.score }, r().createElement(j, { value: c })),
                            ),
                        );
                    }),
                    en = 'Leaderboard_shadowsContainer_04',
                    tn = 'Leaderboard_shadow_34',
                    an = 'Leaderboard_shadow__left_3e',
                    nn = 'Leaderboard_shadow__center_92',
                    rn = 'Leaderboard_shadow__right_4d',
                    sn = { base: 'Leaderboard_bar_35' },
                    on = (0, De.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: n = 0 }) => {
                        const s = Dt().model,
                            o = s.computes.hasRowsDivider(),
                            i = s.computes.rowsDividerPosition() % e;
                        return r().createElement(
                            'div',
                            {
                                className: 'Leaderboard_base_d1',
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${n}rem` },
                            },
                            r().createElement(xa, null),
                            r().createElement(
                                'div',
                                { className: 'Leaderboard_content_12' },
                                r().createElement(
                                    'div',
                                    { className: en },
                                    r().createElement('div', { className: b()(tn, an) }),
                                    r().createElement('div', { className: b()(tn, nn) }),
                                    r().createElement('div', { className: b()(tn, rn) }),
                                ),
                                r().createElement(
                                    Kt,
                                    { api: t, className: 'Leaderboard_area_f8' },
                                    Zt(s.items.get().length, (e) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: e },
                                            o &&
                                                e === i &&
                                                r().createElement(wa, {
                                                    index: e,
                                                    className: 'Leaderboard_rowsDivider_b5',
                                                }),
                                            r().createElement(Ja, { className: 'Leaderboard_row_99', index: e }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(en, 'Leaderboard_shadowsContainer__bottom_0e') },
                                    r().createElement('div', { className: b()(tn, an) }),
                                    r().createElement('div', { className: b()(tn, nn) }),
                                    r().createElement('div', { className: b()(tn, rn) }),
                                ),
                                r().createElement(Yt, { api: t, classNames: sn }),
                            ),
                        );
                    }),
                    un = {
                        base: 'Pagination_base_c3',
                        pageButton: 'Pagination_pageButton_e4',
                        pageButton__active: 'Pagination_pageButton__active_d8',
                        pageButton__inactive: 'Pagination_pageButton__inactive_b6',
                        pageButton__disabled: 'Pagination_pageButton__disabled_82',
                        pageValue: 'Pagination_pageValue_61',
                        control: 'Pagination_control_94',
                        control__active: 'Pagination_control__active_22',
                        control__prev: 'Pagination_control__prev_f3',
                        control__next: 'Pagination_control__next_4b',
                    };
                let ln;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(ln || (ln = {}));
                const cn = R.strings.comp7_ext.pagination,
                    dn = Math.trunc(4),
                    mn = ({ pagesAmount: e, activePage: t, className: a, onPageClick: n, onControlEvent: s }) => {
                        const o = t > 1,
                            i = t < e,
                            u = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == s || s(e);
                            };
                        return r().createElement(
                            'div',
                            { className: b()(un.base, a) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(un.control, un.control__prev, o && un.control__active),
                                    onClick: o ? l('prevClick') : void 0,
                                },
                                cn.prev(),
                            ),
                            Zt(u, (a) => {
                                const s = ((e, t, a) => {
                                        const n = t > dn + 1,
                                            r = a > 9 && t + dn < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && n) || (7 === e && r)
                                                ? cn.dots()
                                                : 8 === e
                                                  ? a
                                                  : n && !r
                                                    ? a - 8 + e
                                                    : !n && r
                                                      ? e + 1
                                                      : e - dn + t;
                                    })(a, t, e),
                                    o = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? ln.Active : ln.Inactive) : ln.Disabled)(s, t);
                                return r().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: b()(un.pageButton, un[`pageButton__${o}`]),
                                        onClick:
                                            o !== ln.Disabled && 'number' == typeof s
                                                ? ((i = s),
                                                  () => {
                                                      null == n || n(i);
                                                  })
                                                : void 0,
                                    },
                                    r().createElement('div', { className: un.pageValue }, s),
                                );
                                var i;
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()(un.control, un.control__next, i && un.control__active),
                                    onClick: i ? l('nextClick') : void 0,
                                },
                                cn.next(),
                            ),
                        );
                    },
                    _n = {
                        settings: Object.assign({}, Pt, {
                            animationConfig: Object.assign({}, Pt.animationConfig, { round: 1 }),
                        }),
                    },
                    gn = (0, De.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: s,
                            className: i,
                        }) => {
                            const u = Dt(),
                                l = u.model,
                                c = u.controls,
                                d = l.root.get(),
                                m = d.personalPosition,
                                _ = d.lastBestUserPosition,
                                g = Tt(_n),
                                E = g.animationScroll.scrollPosition,
                                p = g.applyScroll,
                                v = g.events,
                                h = g.getBounds,
                                f = l.computes.isDefaultPersonalPosition() ? Ot.None : Ot.Active,
                                C = l.computes.pages(e),
                                A = l.computes.pagePositions(),
                                D = l.computes.rowsDividerPosition(),
                                w = l.computes.hasRowsDivider(),
                                F = ((e, t) => o.O.view.remToPx(44) * ((e + 1) % t))(_, e);
                            (0, n.useEffect)(
                                () =>
                                    Ke(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === Fe.Fifth ? F : 0;
                                                    p(e);
                                                    break;
                                                }
                                                case 'personalPosition': {
                                                    const t = o.O.view.remToPx(44) * (m % e),
                                                        a = w && m > _ ? t + o.O.view.remToPx(70) : t;
                                                    p(a);
                                                    break;
                                                }
                                                case 'page':
                                                    p(0);
                                            }
                                            s(void 0);
                                        }
                                    }),
                                [p, w, _, e, m, a, F, s],
                            );
                            const B = (0, n.useCallback)(() => {
                                const e = A.first > _ ? Fe.Fifth : Fe.Sixth;
                                t(e);
                            }, [A.first, _, t]);
                            ((0, n.useEffect)(() => {
                                B();
                            }, [B]),
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        if (w && D > A.first) {
                                            const e = h()[1],
                                                a = 0 !== e && E.goal === e && F >= e;
                                            t(E.goal >= F || a ? Fe.Fifth : Fe.Sixth);
                                        } else m >= A.first && m <= A.last ? t(m > _ ? Fe.Fifth : Fe.Sixth) : B();
                                    };
                                    return (v.on('change', e), () => v.off('change', e));
                                }, [v, A.first, w, _, A.last, e, m, F, D, E.goal, t, B, h]));
                            const S = (0, n.useCallback)(() => {
                                    f !== Ot.None &&
                                        (o.O.sound.play.yes1(),
                                        c.getTableRecords(e, m - (m % e)),
                                        s({ type: 'personalPosition' }));
                                }, [c, e, f, m, s]),
                                y = (0, n.useCallback)(
                                    (t) => {
                                        (o.O.sound.play.yes1(), c.getTableRecords(e, (t - 1) * e), s({ type: 'page' }));
                                    },
                                    [c, e, s],
                                ),
                                N = (0, n.useCallback)(
                                    (t) => {
                                        o.O.sound.play.yes1();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return C.active - 1;
                                                case 'nextClick':
                                                    return C.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        (c.getTableRecords(e, (a - 1) * e), s({ type: 'page' }));
                                    },
                                    [C.active, c, e, s],
                                );
                            return r().createElement(
                                'div',
                                {
                                    className: b()(
                                        'HasRecordsState_base_3d',
                                        !C.hasPagination && 'HasRecordsState_base__withoutPagination_0f',
                                        i,
                                    ),
                                },
                                r().createElement(
                                    'div',
                                    { className: 'HasRecordsState_tableContainer_3d' },
                                    r().createElement(on, { limit: e, api: g, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                r().createElement(Wt, { state: f, onClick: S, height: 44 }),
                                C.hasPagination &&
                                    r().createElement(mn, {
                                        pagesAmount: C.amount,
                                        activePage: C.active,
                                        className: 'HasRecordsState_pagination_a4',
                                        onPageClick: y,
                                        onControlEvent: N,
                                    }),
                            );
                        },
                    ),
                    En = R.views.comp7.lobby.tooltips,
                    pn = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function vn() {
                    return (
                        (vn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        vn.apply(this, arguments)
                    );
                }
                const hn = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            n = e.from,
                            s = e.to,
                            o = e.topPercentage,
                            i = e.children,
                            u = e.className,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, pn);
                        const c = (({ rank: e, topPercentage: t, from: a, to: n, divisions: r = '' }) => {
                            switch (e) {
                                case Fe.Sixth:
                                    return { contentId: En.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case Fe.Fifth:
                                    return { contentId: En.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: En.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: r, from: a, to: n },
                                    };
                            }
                        })({ rank: t, divisions: a, from: n, to: s, topPercentage: o });
                        return r().createElement(K, vn({}, c, l), r().createElement('div', { className: u }, i));
                    },
                    bn = {
                        '--pageContentWidth': '78vw',
                        base: 'RankTabs_base_8f',
                        line: 'RankTabs_line_61',
                        line__toRight: 'RankTabs_line__toRight_b0',
                        line__toLeft: 'RankTabs_line__toLeft_b9',
                        ranksContainer: 'RankTabs_ranksContainer_ac',
                        dividersDot: 'RankTabs_dividersDot_dc',
                        rank: 'RankTabs_rank_f5',
                        rankEmblem: 'RankTabs_rankEmblem_06',
                        rank__disabled: 'RankTabs_rank__disabled_05',
                        label: 'RankTabs_label_07',
                        rank__active: 'RankTabs_rank__active_a9',
                        rankTabHighlight: 'RankTabs_rankTabHighlight_5f',
                        fadeIn: 'RankTabs_fadeIn_31',
                        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_56',
                        fadeInHalf: 'RankTabs_fadeInHalf_6e',
                        fadeOut: 'RankTabs_fadeOut_79',
                        fadeInWithScale: 'RankTabs_fadeInWithScale_da',
                        slideUp: 'RankTabs_slideUp_bf',
                        scale: 'RankTabs_scale_9b',
                        raysAppearance: 'RankTabs_raysAppearance_4f',
                        rotate: 'RankTabs_rotate_2d',
                        'reverse-rotate': 'RankTabs_reverse-rotate_4a',
                        glowAppearance: 'RankTabs_glowAppearance_b1',
                        highlightAppearance: 'RankTabs_highlightAppearance_a2',
                        blink: 'RankTabs_blink_fc',
                        slideUpIn: 'RankTabs_slideUpIn_cd',
                    };
                let fn;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(fn || (fn = {}));
                const Cn = ({ tabs: e, seasonName: t, className: a, onTabClick: n }) => {
                        const s = (e) => () => {
                            null == n || n(e);
                        };
                        return r().createElement(
                            'div',
                            { className: b()(bn.base, a) },
                            r().createElement('div', { className: bn.dividersDot }),
                            r().createElement('div', { className: b()(bn.line, bn.line__toRight) }),
                            r().createElement(
                                'div',
                                { className: bn.ranksContainer },
                                e.map(({ rank: e, state: a, args: n = {} }) => {
                                    const i = a !== fn.Disabled;
                                    return r().createElement(
                                        'div',
                                        { className: b()(bn.rank, bn[`rank__${a}`]), key: e },
                                        r().createElement(
                                            hn,
                                            {
                                                rank: e,
                                                from: null == n ? void 0 : n.from,
                                                topPercentage: null == n ? void 0 : n.topPercentage,
                                                onClick: i ? s(e) : void 0,
                                                onMouseEnter: i ? o.O.sound.play.highlight : void 0,
                                            },
                                            r().createElement('div', { className: bn.rankTabHighlight }),
                                            r().createElement(Da, {
                                                seasonName: t,
                                                rank: e,
                                                size: Ca.x64,
                                                className: bn.rankEmblem,
                                            }),
                                        ),
                                        a !== fn.Disabled && r().createElement('div', { className: bn.label }, va(e)),
                                    );
                                }),
                            ),
                            r().createElement('div', { className: b()(bn.line, bn.line__toLeft) }),
                        );
                    },
                    An = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: n }) =>
                        (e === Fe.Sixth && -1 === t) || 0 === n ? fn.Disabled : e === a ? fn.Active : fn.Inactive,
                    Dn = [Fe.Fifth, Fe.Sixth],
                    wn = (0, De.Pi)(({ className: e }) => {
                        const t = Dt(),
                            a = t.model,
                            s = t.controls,
                            i = V().model,
                            u = a.root.get(),
                            l = u.lastBestUserPosition,
                            c = u.recordsCount,
                            d = u.from,
                            m = u.topPercentage,
                            _ = a.computes.hasLastBestUserPosition(),
                            g = a.computes.rowsDividerPosition(),
                            E = (0, n.useState)(a.computes.firstItemRank()),
                            p = E[0],
                            v = E[1],
                            h = (0, n.useState)(),
                            f = h[0],
                            C = h[1],
                            A = Dn.map((e) => ({
                                rank: e,
                                state: An({ rank: e, lastBestUserPosition: l, currentRankTab: p, recordsCount: c }),
                                args: { from: d, topPercentage: m },
                            })),
                            D = (0, n.useCallback)(
                                (e) => {
                                    const t = e === Fe.Fifth && _ ? g - (g % 50) : 0;
                                    (o.O.sound.play.click(), s.getTableRecords(50, t), C({ type: 'rank', rank: e }));
                                },
                                [s, g, _, 50],
                            );
                        return r().createElement(
                            'div',
                            { className: b()('HasRecordsStateContainer_base_53', e) },
                            r().createElement(Cn, { tabs: A, seasonName: i.season.name.get(), onTabClick: D }),
                            r().createElement(gn, {
                                limit: 50,
                                positionToScroll: f,
                                onCurrentRankTabChange: v,
                                onPositionToScrollChange: C,
                                className: 'HasRecordsStateContainer_content_36',
                            }),
                        );
                    }),
                    Fn = ({ binding: e, text: t = '', classMix: a, alignment: s = ea.left, formatWithBrackets: o }) => {
                        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = o && e ? ta(t, e) : t;
                        return r().createElement(
                            n.Fragment,
                            null,
                            i.split('\n').map((t, o) =>
                                r().createElement(
                                    'div',
                                    { className: b()('FormatText_base_d0', a), key: `${t}-${o}` },
                                    ((e, t, a) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            a && e in a
                                                ? a[e]
                                                : ((e, t = ea.left) => {
                                                      const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return la.includes(a)
                                                          ? ua(e)
                                                          : 'ja' === a
                                                            ? (0, Jt.D4)()
                                                                  .parse(e)
                                                                  .map((e) => ra(e))
                                                            : ((e, t = ea.left) => {
                                                                  let a = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = ra(e);
                                                                  return (
                                                                      ia(r, /( )/, t).forEach(
                                                                          (e) => (a = a.concat(ia(e, n, ea.left))),
                                                                      ),
                                                                      a
                                                                  );
                                                              })(e, t);
                                                  })(e, t),
                                        ))(t, s, e).map((e, t) =>
                                        r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Bn = {
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
                    Sn = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    yn = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Nn = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    xn = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const s = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, n.useMemo)(() => t || {}, [t]);
                        let i = Sn.exec(e),
                            u = e,
                            l = 0;
                        for (; i;) {
                            const a = i[0],
                                n = yn.exec(a),
                                c = Nn.exec(a),
                                d = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + l++ + e;
                                ((u = u.replace(a, `%(${i})`)),
                                    (o[i] = Bn[e]
                                        ? r().createElement(
                                              'span',
                                              { className: Bn[e] },
                                              r().createElement(Fn, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: s(e) },
                                              r().createElement(Fn, { text: d, binding: t }),
                                          )));
                            }
                            i = Sn.exec(e);
                        }
                        return r().createElement(Fn, { text: u, classMix: a, binding: o });
                    }),
                    Rn = {
                        base: 'NoRecordsState_base_4c',
                        imageContainer: 'NoRecordsState_imageContainer_e6',
                        image: 'NoRecordsState_image_69',
                        image__season_first: 'NoRecordsState_image__season_first_99',
                        image__season_second: 'NoRecordsState_image__season_second_4d',
                        image__season_third: 'NoRecordsState_image__season_third_9b',
                        title: 'NoRecordsState_title_d5',
                        subtitle: 'NoRecordsState_subtitle_1b',
                    },
                    kn = R.strings.comp7_ext.leaderboard.noRecords,
                    Pn = (0, De.Pi)(({ className: e }) => {
                        const t = Dt().model.root.get().from,
                            a = V().model;
                        return r().createElement(
                            'div',
                            { className: b()(Rn.base, e) },
                            r().createElement(
                                'div',
                                { className: Rn.imageContainer },
                                r().createElement('div', {
                                    className: b()(Rn.image, Rn[`image__season_${a.season.name.get()}`]),
                                }),
                            ),
                            r().createElement('div', { className: Rn.title }, kn.title()),
                            r().createElement(xn, {
                                text: kn.subtitle(),
                                binding: { pointsCount: r().createElement(j, { value: t }) },
                                classMix: Rn.subtitle,
                            }),
                        );
                    });
                let In;
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
                })(In || (In = {}));
                var Tn = a(8613);
                const Ln = 3600,
                    On = 86400,
                    Mn = (Date.now(), Tn.Ew.getRegionalDateTime),
                    $n = Tn.Ew.getFormattedDateTime,
                    Wn = (0, n.memo)(({ datetime: e, format: t = In.ShortDate, isConvertedToLocal: a = !0 }) =>
                        Object.values(In).includes(t) ? Mn(e, t, a) : $n(e, t, a),
                    ),
                    Hn = aa(R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.description(), { count: 5 }),
                    zn = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function Un() {
                    return (
                        (Un =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Un.apply(this, arguments)
                    );
                }
                const Gn = R.strings.comp7_ext.lastUpdateNote,
                    Vn = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            n = e.classNames,
                            s = e.dateTimeFormat,
                            o = void 0 === s ? In.ShortTime : s,
                            i = e.contentId,
                            u = void 0 === i ? R.views.comp7.lobby.tooltips.LastUpdateTooltip('resId') : i,
                            l = e.tooltipDescription,
                            c = void 0 === l ? Hn : l,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, zn);
                        return r().createElement(
                            'div',
                            { className: b()('LastUpdateNote_base_70', a) },
                            r().createElement(Fn, {
                                text: Gn.info(),
                                binding: { date: r().createElement(Wn, { datetime: t, format: o }) },
                            }),
                            r().createElement(
                                K,
                                Un({ ignoreShowDelay: !0, contentId: u, args: { description: c } }, d),
                                r().createElement('div', {
                                    className: b()('LastUpdateNote_infoIcon_6f', null == n ? void 0 : n.icon),
                                }),
                            ),
                        );
                    },
                    qn = R.strings.comp7_ext,
                    jn = (e) => ((e, t) => String(e.$dyn(t)))(qn.seasonName, e);
                const Qn = ['children'];
                function Yn() {
                    return (
                        (Yn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Yn.apply(this, arguments)
                    );
                }
                const Xn = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, Qn);
                        return r().createElement(
                            K,
                            Yn(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                a,
                            ),
                            t,
                        );
                    },
                    Kn = R.strings.comp7_ext.season,
                    Zn = (e, t, a = In.ShortDate) => ({
                        startDate: r().createElement(Wn, { datetime: e, format: a }),
                        endDate: r().createElement(Wn, { datetime: t, format: a }),
                    }),
                    Jn = (e, t, a) => {
                        const n = t - a,
                            s = ((e, t) =>
                                ((e) => {
                                    const t = Math.floor(e);
                                    return {
                                        totalSecondsLeft: t,
                                        seconds: Math.floor(t % 60),
                                        minutes: Math.floor(t / 60) % 60,
                                        hours: Math.floor((t / 3600) % 24),
                                        totalDays: Math.floor(t / 86400),
                                    };
                                })(e - t))(t, a);
                        return n >= 604800
                            ? r().createElement(Fn, { text: Kn.range(), binding: Zn(e, t) })
                            : n >= On
                              ? r().createElement(Fn, { text: Kn.daysLeft(), binding: s })
                              : n >= Ln
                                ? r().createElement(Fn, { text: Kn.hoursLeft(), binding: s })
                                : n >= 60
                                  ? r().createElement(Fn, { text: Kn.minutesLeft(), binding: s })
                                  : n >= 1
                                    ? r().createElement(Fn, { text: Kn.secondsLeft(), binding: s })
                                    : void 0;
                    },
                    er = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        seasonName: n,
                        tooltipId: s = '',
                        hasSeasonName: o = !0,
                        classNames: i,
                    }) =>
                        r().createElement(
                            Xn,
                            { args: { tooltipId: s }, isEnabled: Boolean(s) },
                            r().createElement(
                                'div',
                                { className: 'ActiveSeasonState_base_07' },
                                r().createElement('div', {
                                    className: b()(
                                        'ActiveSeasonState_calendarIcon_ba',
                                        null == i ? void 0 : i.calendarIcon,
                                    ),
                                }),
                                o &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        jn(n),
                                        r().createElement('div', { className: 'ActiveSeasonState_divider_db' }),
                                    ),
                                Jn(e, t, a),
                            ),
                        ),
                    tr = (0, De.Pi)(({ className: e, classNames: t, hasSeasonName: a = !0 }) => {
                        const s = V(),
                            o = s.model,
                            i = s.controls,
                            u = o.season.startTimestamp.get(),
                            l = o.season.endTimestamp.get(),
                            c = o.season.serverTimestamp.get(),
                            d = o.season.name.get();
                        return (
                            (function (e, t, a) {
                                ((e, t) => {
                                    const a = (0, n.useRef)(e);
                                    ((a.current = e),
                                        (0, n.useEffect)(() => {
                                            if (void 0 === t) return;
                                            const e = window.setInterval(() => {
                                                a.current();
                                            }, t);
                                            return () => clearInterval(e);
                                        }, [t]));
                                })(
                                    () => {
                                        a();
                                    },
                                    e < t ? 950 : void 0,
                                );
                            })(c, l, i.pollServerTime),
                            r().createElement(
                                'div',
                                { className: b()('ScheduleSubheading_base_a5', e) },
                                c < l
                                    ? r().createElement(
                                          'div',
                                          { className: null == t ? void 0 : t.activeSeasonState },
                                          r().createElement(er, {
                                              startTimestamp: u,
                                              endTimestamp: l,
                                              currentTimestamp: c,
                                              seasonName: d,
                                              tooltipId: o.root.get().tooltipId,
                                              hasSeasonName: a,
                                              classNames: null == t ? void 0 : t.scheduleClassNames,
                                          }),
                                      )
                                    : r().createElement(xn, {
                                          text: R.strings.comp7_ext.season.over(),
                                          binding: { seasonName: jn(d) },
                                      }),
                            )
                        );
                    }),
                    ar = (0, De.Pi)(({ className: e }) => {
                        const t = Dt().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            n = t.computes.hasUpdateInfo(),
                            s = aa(R.strings.comp7_ext.lastUpdateNote.ratingPositions.description(), { count: 5 });
                        return r().createElement(
                            'div',
                            { className: b()('SubheadingContainer_base_08', e) },
                            r().createElement(tr, null),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: 'SubheadingContainer_updateInfo_73' },
                                    r().createElement(Vn, {
                                        timestamp: a,
                                        className: 'SubheadingContainer_updateInfoText_17',
                                        tooltipDescription: s,
                                    }),
                                ),
                        );
                    }),
                    nr = {
                        '--pageContentWidth': '78vw',
                        base: 'LeaderboardPage_base_e6',
                        animationContainer: 'LeaderboardPage_animationContainer_5a',
                        subHeading: 'LeaderboardPage_subHeading_1a',
                        content: 'LeaderboardPage_content_63',
                        base__loading: 'LeaderboardPage_base__loading_47',
                        hasRecords: 'LeaderboardPage_hasRecords_a9',
                        error: 'LeaderboardPage_error_f3',
                        noRecords: 'LeaderboardPage_noRecords_ae',
                        spinner: 'LeaderboardPage_spinner_77',
                        fadeIn: 'LeaderboardPage_fadeIn_88',
                        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_74',
                        fadeInHalf: 'LeaderboardPage_fadeInHalf_ff',
                        fadeOut: 'LeaderboardPage_fadeOut_93',
                        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_b0',
                        slideUp: 'LeaderboardPage_slideUp_eb',
                        scale: 'LeaderboardPage_scale_f6',
                        raysAppearance: 'LeaderboardPage_raysAppearance_4a',
                        rotate: 'LeaderboardPage_rotate_9d',
                        'reverse-rotate': 'LeaderboardPage_reverse-rotate_e8',
                        glowAppearance: 'LeaderboardPage_glowAppearance_a8',
                        highlightAppearance: 'LeaderboardPage_highlightAppearance_82',
                        blink: 'LeaderboardPage_blink_69',
                        slideUpIn: 'LeaderboardPage_slideUpIn_1b',
                    },
                    rr = { [lt.Initial]: 'initial', [lt.Success]: 'success', [lt.Error]: 'error' },
                    sr = (0, De.Pi)(() => {
                        const e = Dt().model,
                            t = e.root.get(),
                            a = t.state,
                            n = t.isLoading,
                            s = (0, Ze.useSpring)(gt);
                        return r().createElement(
                            'div',
                            { className: b()(nr.base, nr[`base__${rr[a]}`], n && nr.base__loading) },
                            r().createElement(mt, { className: be }, R.strings.comp7_ext.page.heading.leaderboard()),
                            r().createElement(ar, { className: nr.subHeading }),
                            r().createElement(
                                Ze.animated.div,
                                { className: nr.animationContainer, style: s },
                                r().createElement(
                                    'div',
                                    { className: nr.content },
                                    (() => {
                                        switch (a) {
                                            case lt.Initial:
                                                return null;
                                            case lt.Success:
                                                return e.items.get().length > 0
                                                    ? r().createElement(wn, { className: nr.hasRecords })
                                                    : r().createElement(Pn, { className: nr.noRecords });
                                            case lt.Error:
                                                return r().createElement(Ft, { className: nr.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                n &&
                                    r().createElement(_t, {
                                        message: R.strings.comp7_ext.waitingSpinner.message(),
                                        className: nr.spinner,
                                    }),
                            ),
                        );
                    });
                let or;
                !(function (e) {
                    ((e[(e.Achieved = 0)] = 'Achieved'),
                        (e[(e.Current = 1)] = 'Current'),
                        (e[(e.Inactive = 2)] = 'Inactive'));
                })(or || (or = {}));
                const ir = (e) => Me(e, (e) => ma(e.name)).join(R.strings.comp7_ext.listSeparator());
                let ur, lr, cr;
                (!(function (e) {
                    ((e[(e.Base = 0)] = 'Base'),
                        (e[(e.Vehicle = 1)] = 'Vehicle'),
                        (e[(e.Style3d = 2)] = 'Style3d'),
                        (e[(e.Reward = 3)] = 'Reward'));
                })(ur || (ur = {})),
                    (function (e) {
                        ((e.Locked = 'locked'),
                            (e.ReadyToRestore = 'readyToRestore'),
                            (e.ReadyToPurchase = 'readyToPurchase'),
                            (e.Purchased = 'purchased'),
                            (e.InProgress = 'inProgress'));
                    })(lr || (lr = {})),
                    (function (e) {
                        ((e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future'));
                    })(cr || (cr = {})));
                const dr = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    items: e.array('items'),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    qualificationBattles: e.array('qualificationModel.battles'),
                                    isRewardLayerVisible: $.LO.box(!1),
                                    isParallaxPreloaded: $.LO.box(!1),
                                },
                                a = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.items.get(), e);
                                        if (!a) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: a.hasRankInactivity,
                                            rank: a.rank,
                                            from: a.from,
                                            to: a.to,
                                        };
                                    },
                                    { equals: ft },
                                ),
                                n = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.items.get(), e);
                                        if (!a) throw new Error(`item with index ${e} was not found`);
                                        return Me(a.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                r = (0, Re.Om)(
                                    (e) => {
                                        const t = n(e);
                                        return {
                                            list: ir(t),
                                            count: t.length,
                                            currentDivisionIndex: Ue(t, (e) => e.state === or.Current),
                                        };
                                    },
                                    { equals: ft },
                                ),
                                s = (0, Re.Om)(
                                    (e) => {
                                        var r;
                                        const s =
                                            (o = e) > (i = t.root.get().currentItemIndex)
                                                ? cr.Future
                                                : o < i
                                                  ? cr.Previous
                                                  : cr.Current;
                                        var o, i;
                                        return {
                                            state: s,
                                            division:
                                                null == (r = ze(n(e), (e) => e.state === or.Current)) ? void 0 : r.name,
                                            hasInfo: s === cr.Current && !fa(a(e).rank),
                                        };
                                    },
                                    { equals: ft },
                                ),
                                o = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.qualificationBattles.get(), e);
                                        if (!a) throw new Error(`qualification battle with index ${e} was not found`);
                                        return a;
                                    },
                                    { equals: M },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: a,
                                    qualificationBattle: o,
                                    rankSettings: s,
                                    divisions: n,
                                    divisionsConfig: r,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, $.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, $.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    mr = dr[0],
                    _r = dr[1],
                    gr = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()('RatingScore_base_78', n) },
                            r().createElement(
                                'div',
                                { className: 'RatingScore_rating_12' },
                                r().createElement('div', { className: 'RatingScore_score_01' }, e),
                                t &&
                                    r().createElement(
                                        K,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.comp7.lobby.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'RatingScore_rankInactivity_43' },
                                            r().createElement(
                                                'div',
                                                { className: 'RatingScore_rankInactivityCount_b0' },
                                                a,
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: 'RatingScore_rankInactivityIconContainer_c8' },
                                                r().createElement('div', {
                                                    className: 'RatingScore_rankInactivityIcon_d4',
                                                }),
                                            ),
                                        ),
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'RatingScore_title_0a' },
                                R.strings.comp7_ext.ratingScore.title(),
                            ),
                        ),
                    Er = (0, De.Pi)(({ className: e }) => {
                        const t = _r().model,
                            a = t.root.get(),
                            n = a.currentScore,
                            s = a.rankInactivityCount,
                            o = a.currentItemIndex,
                            i = t.computes.item(o).hasRankInactivity;
                        return r().createElement(
                            'div',
                            { className: b()('ItemFooter_base_9e', e) },
                            r().createElement('div', { className: 'ItemFooter_background_15' }),
                            r().createElement('div', { className: 'ItemFooter_divider_ef' }),
                            r().createElement('div', { className: 'ItemFooter_light_b0' }),
                            r().createElement(
                                'div',
                                { className: 'ItemFooter_footer_ec' },
                                r().createElement(gr, {
                                    currentScore: n,
                                    hasRankInactivity: i,
                                    rankInactivityCount: s,
                                    className: 'ItemFooter_rankItemFooter_1b',
                                }),
                            ),
                        );
                    }),
                    pr = [
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_5(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_4(),
                            speedX: -0.037,
                            speedY: -0.0055,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_3(),
                            speedX: -0.025,
                            speedY: -0.0016,
                        },
                        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                    ],
                    vr = [
                        R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
                        R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
                    ],
                    hr = pr.reduce((e, t) => {
                        const a = Math.abs(t.speedX);
                        return a > e ? a : e;
                    }, 0),
                    br = (0, De.Pi)(({ className: e }) => {
                        const t = _r().model,
                            a = F().remScreenWidth,
                            s = (0, n.createRef)(),
                            i = hr * a,
                            u = (0, Ze.useSpring)({
                                to: { opacity: t.isRewardLayerVisible.get() ? 1 : 0 },
                                config: { duration: 300 },
                            }),
                            l = ((e) => {
                                const t = (0, n.useCallback)(
                                        (t) => {
                                            if (!e.current) return;
                                            const a = e.current.getBoundingClientRect(),
                                                n = a.width,
                                                r = a.height;
                                            return (
                                                0 !== t.clientX &&
                                                0 !== t.clientY &&
                                                t.clientX <= n - 2 &&
                                                t.clientY <= r - 2
                                            );
                                        },
                                        [e],
                                    ),
                                    a = (0, Ze.useSpring)(
                                        () => Object.assign({}, o.O.client.getMouseGlobalPosition('px')),
                                        [],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = (e) => {
                                            t(e) && a[1].start({ x: e.clientX, y: e.clientY });
                                        };
                                        return (
                                            document.addEventListener('mousemove', e),
                                            () => {
                                                document.removeEventListener('mousemove', e);
                                            }
                                        );
                                    }, [t, a]),
                                    a
                                );
                            })(s),
                            c = l[0];
                        return r().createElement(
                            'div',
                            { ref: s, className: b()('Parallax_base_40', e) },
                            pr.map((e, t) =>
                                r().createElement(
                                    Ze.animated.div,
                                    {
                                        key: t,
                                        className: 'Parallax_layer_88',
                                        style: Object.assign(
                                            {
                                                width: `${a + 2 * i}rem`,
                                                left: -i + 'rem',
                                                x: c.x.to((t) => t * e.speedX),
                                                y: c.y.to((t) => t * e.speedY),
                                                backgroundImage: `url(${e.path})`,
                                            },
                                            vr.includes(e.path) && u,
                                        ),
                                    },
                                    3 === t &&
                                        r().createElement(Ze.animated.div, {
                                            className: 'Parallax_shadow_24',
                                            style: u,
                                        }),
                                ),
                            ),
                        );
                    }),
                    fr = pr.map((e) => e.path),
                    Cr = (0, De.Pi)(({ className: e }) => {
                        const t = _r(),
                            a = t.model,
                            s = t.controls,
                            o = a.isParallaxPreloaded.get(),
                            i = (0, Ze.useSpring)({ to: { opacity: o ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, n.useState)('pending'),
                                        a = t[0],
                                        r = t[1];
                                    return (
                                        (0, n.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const n = () => {
                                                t + a === e.length && r(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const r = new Image();
                                                ((r.src = e),
                                                    r.addEventListener('load', () => {
                                                        (a++, n());
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        (t++, n());
                                                    }));
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(fr) && s.setIsParallaxPreloaded(!0),
                            r().createElement(
                                Ze.animated.div,
                                { className: b()('ParallaxContainer_base_7c', e), style: i },
                                r().createElement(br, null),
                            )
                        );
                    });
                function Ar(e, t) {
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        t,
                    );
                }
                const Dr = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    wr = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
                function Fr() {
                    const e = (0, n.useRef)(0);
                    return (
                        wr(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (t(), (e.current = 0));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const Br = { type: 'idle' };
                function Sr(e, t) {
                    const a = e.contentRef,
                        r = e.wrapperRef,
                        s = e.scrollPosition,
                        i = e.clampPosition,
                        u = e.animationScroll,
                        l = e.events,
                        c = (0, n.useState)(Br),
                        d = c[0],
                        m = c[1],
                        _ = Fr(),
                        g = xt(() => {
                            _.run(() => {
                                const t = e.contentRef.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                t &&
                                    a &&
                                    n &&
                                    (t.style.cursor = n <= a ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
                            });
                        });
                    return (
                        (0, n.useEffect)(() => {
                            g();
                        }, [d.type, g]),
                        Ar(() => {
                            g();
                        }, []),
                        (0, n.useEffect)(() => {
                            if ('dragging' !== d.type) return;
                            const e = o.O.client.events.mouse.move(([e, n]) => {
                                    const o = a.current,
                                        l = r.current;
                                    if (!o || !l) return;
                                    if ('inside' === n && e.clientX < 0) return;
                                    const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                        m = d.positionFrom - c,
                                        _ = d.previousScrollPosition + m;
                                    s.start(
                                        Object.assign(
                                            {
                                                scrollPosition: i(o, _),
                                                from: { scrollPosition: u.scrollPosition.get() },
                                            },
                                            t && { config: t },
                                        ),
                                    );
                                }),
                                n = o.O.client.events.mouse.up(function () {
                                    m({ type: 'scrollingToEnd' });
                                });
                            return () => {
                                (e(), n());
                            };
                        }, [u.scrollPosition, i, a, d, s, r, t]),
                        (0, n.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                m(Br);
                            };
                            return (u.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                        }, [u.scrollPosition, d.type, l]),
                        (0, n.useEffect)(() => {
                            const e = a.current;
                            if (!e) return;
                            const t = (e) => {
                                m({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: u.scrollPosition.get(),
                                });
                            };
                            return (e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t));
                        }, [u.scrollPosition, a]),
                        d
                    );
                }
                const yr = (e, t = 100) => ((o.O.view.pxToRem(o.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    Nr = It({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? kt.Next : kt.Prev),
                        forceTriggerMouseMove: o.O.view.forceTriggerMouseMove,
                    }),
                    xr = 'HorizontalBar_base__nonActive_82',
                    Rr = 'disable',
                    kr = { pending: !1, offset: 0 },
                    Pr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ir = () => {},
                    Tr = (e, t) => Math.max(20, e.offsetWidth * t),
                    Lr = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Pr, onDrag: s = Ir }) => {
                        const i = (0, n.useRef)(null),
                            u = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(kr),
                            g = _[0],
                            E = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        d.current &&
                                            s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [s],
                            ),
                            v = () => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = Bt(0, 1, s / (r - n)),
                                    m = (t.offsetWidth - Tr(t, o)) * i;
                                ((a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    u.current.classList.add(Rr),
                                                    void l.current.classList.remove(Rr)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(Rr),
                                                    void l.current.classList.add(Rr)
                                                );
                                            var t, a;
                                            (u.current.classList.remove(Rr), l.current.classList.remove(Rr));
                                        }
                                    })(m));
                            },
                            h = xt(() => {
                                ((() => {
                                    const t = d.current,
                                        a = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && a)) return;
                                    const s = Math.min(1, n / r);
                                    ((t.style.width = `${Tr(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        i.current &&
                                            (1 === s ? i.current.classList.add(xr) : i.current.classList.remove(xr)));
                                })(),
                                    v());
                            });
                        ((0, n.useEffect)(() => Ke(h)),
                            (0, n.useEffect)(
                                () =>
                                    Ke(() => {
                                        const t = () => {
                                            v();
                                        };
                                        let a = Ir;
                                        const n = () => {
                                            (a(), (a = Ke(h)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!g.pending) return;
                                const t = o.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!r || !o) return;
                                        const i = c.current,
                                            u = d.current;
                                        if (!i || !u) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - g.offset - i.getBoundingClientRect().x,
                                            m = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            s({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: m }));
                                    }),
                                    a = o.O.client.events.mouse.up(() => {
                                        (t(), p(kr));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, g.offset, g.pending, s, p]));
                        const f = Ht((t) => e.applyStepTo(t), m, [e]),
                            C = f[0],
                            A = f[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Rr) || ce('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: b()('HorizontalBar_base_49', t.base), ref: i, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: b()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Rr) || 0 !== e.button || (ce('play'), C(kt.Next));
                                },
                                onMouseUp: A,
                                ref: u,
                                onMouseEnter: D,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        n &&
                                            0 === t.button &&
                                            (ce('play'),
                                            t.target === n
                                                ? p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const s = a(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? kt.Prev : kt.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                r().createElement('div', { ref: d, className: b()('HorizontalBar_thumb_fd', t.thumb) }),
                                r().createElement('div', { className: b()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            r().createElement('div', {
                                className: b()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Rr) || 0 !== e.button || (ce('play'), C(kt.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Or = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Mr = ({ api: e, className: t, classNames: a, children: s }) => (
                        (0, n.useEffect)(() => Ke(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: b()(Or.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(Or.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: b()(Or.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    s,
                                ),
                            ),
                        )
                    );
                ((Mr.Bar = Lr),
                    (Mr.Default = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: s,
                        areaClassName: o,
                        classNames: i,
                        scrollClassName: u,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = s || {};
                                return Object.assign({}, e, { base: b()(Or.base, e.base) });
                            }, [s]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return r().createElement(
                            'div',
                            { className: b()(Or.defaultScroll, a), onWheel: t.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: b()(Or.defaultScrollArea, o) },
                                r().createElement(Mr, { className: u, api: m, classNames: i }, e),
                            ),
                            r().createElement(Lr, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    }));
                const $r = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: s = 0,
                        children: i,
                        onStick: u,
                        className: l,
                        areaClassNames: c,
                        barClassNames: d,
                        staticContent: m,
                    }) => {
                        const _ = o.O.view.remToPx(a),
                            g = e.animationScroll,
                            E = e.events,
                            p = e.applyScroll,
                            v = Sr(e),
                            h = (0, n.useCallback)(
                                (e) => {
                                    p(t * _, e);
                                },
                                [p, _, t],
                            ),
                            f = (0, n.useCallback)(() => {
                                null == u || u(Math.round(g.scrollPosition.goal / _));
                            }, [u, g.scrollPosition, _]);
                        ((0, n.useEffect)(() => (E.on('rest', f), () => E.off('rest', f)), [E, f]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    h({ immediate: !0, reset: !0 });
                                };
                                return (
                                    E.on('resizeHandled', e),
                                    () => {
                                        E.off('resizeHandled', e);
                                    }
                                );
                            }, [h, E]),
                            (0, n.useEffect)(
                                () =>
                                    Ke(() => {
                                        'idle' === v.type && g.scrollPosition.idle && h();
                                    }),
                                [g.scrollPosition, v, h],
                            ));
                        const C = (0, n.useCallback)(
                            (e) => {
                                'dragEnd' === e.type && p(t * _);
                            },
                            [p, _, t],
                        );
                        return r().createElement(
                            'div',
                            { className: b()('ProgressionScroll_base_df', l), style: { '--offset': `${s}rem` } },
                            r().createElement(
                                Mr,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: b()(
                                            'ProgressionScroll_areaWrapper_b1',
                                            null == c ? void 0 : c.wrapper,
                                        ),
                                        content: b()(
                                            'ProgressionScroll_areaContent_0c',
                                            null == c ? void 0 : c.content,
                                        ),
                                    },
                                },
                                i,
                            ),
                            m,
                            r().createElement(Lr, { api: e, onDrag: C, classNames: d }),
                        );
                    },
                    Wr = (e, t = 150, a) => {
                        const r = o.O.view.remToPx(e),
                            s = (0, n.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, r, t],
                            );
                        return Nr(s);
                    };
                var Hr = a(6112);
                const zr = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Ur() {
                    return (
                        (Ur =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ur.apply(this, arguments)
                    );
                }
                const Gr = (0, n.forwardRef)(function (e, t) {
                        let a = e.src,
                            s = e.className,
                            i = e.autoplay,
                            u = void 0 !== i && i,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            m = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            g = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, zr);
                        const p = t,
                            v = (0, n.useRef)(null);
                        return (
                            Dr(() =>
                                o.O.view.events.onDisplayChanged((e, t) => {
                                    var a, n;
                                    (t === Hr.W.hidden && (null == (a = v.current) || a.pause()),
                                        t === Hr.W.shown && (null == (n = v.current) || n.play()));
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    Ke(() => {
                                        const e = v.current;
                                        if (!p || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, p],
                            ),
                            (0, n.useEffect)(() => {
                                if (p && v.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: O },
                                        t = () => {
                                            let t = 0;
                                            const a = (function (a) {
                                                    let n = 0;
                                                    return [
                                                        function a() {
                                                            ((() => {
                                                                if (v.current) {
                                                                    const a = v.current,
                                                                        n = a.currentTime,
                                                                        r = a.duration;
                                                                    if (
                                                                        (t !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: r }),
                                                                            ),
                                                                            (t = n)),
                                                                        v.current.paused || !p || !m)
                                                                    )
                                                                        return;
                                                                    const s = v.current.cohGetKeyframeTimestamps();
                                                                    s.forEach((t, a) => {
                                                                        n > s[a] - 0.02 &&
                                                                            n < s[a] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != _ ? _ : {},
                                                                                )[a];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${_ ? n : `Point_${a}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(a)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = a[0],
                                                r = a[1];
                                            return (n(), r);
                                        };
                                    e.changeTimeLoop = t();
                                    const a = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const a = e.changeTimeHandlers,
                                                    n = a.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const a = e.changeKeyframeHandlers,
                                                    n = a.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.currentTime;
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            v.current && (v.current.currentTime = Bt(0, v.current.duration, e));
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (u(), o(0));
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = v.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (o(e), i());
                                        },
                                        g = (e) => {
                                            (o(e), u());
                                        },
                                        E = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        h = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = v.current) || a.addEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = v.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        b = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = v.current) || a.removeEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = v.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (p.current = {
                                            on: h,
                                            off: b,
                                            play: i,
                                            pause: u,
                                            stop: l,
                                            cleanup: E,
                                            getCurrentTime: r,
                                            getDuration: s,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: o,
                                            domRef: v.current,
                                            onChangeTime: a,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (E(), (p.current = null));
                                        }
                                    );
                                }
                            }, [_, p, m]),
                            (0, n.useEffect)(() => {
                                v.current && u && v.current.play();
                            }, [u, d]),
                            (0, n.useEffect)(() => {
                                if (v.current)
                                    return () => {
                                        v.current && v.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                Ur({ src: a, className: s, style: l, loop: d, ref: v, onClick: g }, E),
                            )
                        );
                    }),
                    Vr = (0, n.memo)(Gr),
                    qr = 'DivineGlow_glow_3e',
                    jr = ({ className: e, classNames: t, animated: a = !0 }) =>
                        r().createElement(
                            'div',
                            { className: b()('DivineGlow_base_ef', e) },
                            ((e) => !!o.O.client.graphicsQuality.isHigh() && e)(a)
                                ? r().createElement(Vr, {
                                      className: b()(qr, null == t ? void 0 : t.glow),
                                      src: String(R.videos.comp7.divine_glow()),
                                      autoplay: !0,
                                      loop: !0,
                                  })
                                : r().createElement('div', {
                                      className: b()(qr, 'DivineGlow_glow__bg_1e', null == t ? void 0 : t.glow),
                                  }),
                        ),
                    Qr = ({ rank: e, from: t, topPercentage: a, className: n, classNames: s }) =>
                        r().createElement(
                            'div',
                            { className: b()('RankInfo_base_df', n) },
                            r().createElement('div', { className: 'RankInfo_highlight_04' }),
                            r().createElement(xn, {
                                text: String(R.strings.comp7_ext.rankInfo.current.$dyn(ha(e))),
                                binding: { topPercentage: a, fromScore: r().createElement(j, { value: t }) },
                                classMix: b()('RankInfo_formattedText_17', null == s ? void 0 : s.text),
                            }),
                        ),
                    Yr = () => r().createElement('div', { className: 'RankItemDivider_base_7a' }),
                    Xr = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Kr, Zr;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Kr || (Kr = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Zr || (Zr = {})));
                const Jr = ({ size: e = Kr.Default }) => {
                        const t = b()(Xr.background, Xr[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    es = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            ('function' == typeof a && a(), clearTimeout(n));
                        };
                    };
                let ts, as;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(ts || (ts = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(as || (as = {})));
                const ns = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    rs = ({ size: e }) => {
                        const t = b()(ns.base, ns[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    ss = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: o,
                            to: i,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < s,
                                d = (0, n.useState)(as.Idle),
                                m = d[0],
                                _ = d[1],
                                g = m === as.In,
                                E = m === as.End,
                                p = m === as.Idle,
                                v = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (p && !a)
                                    return es(() => {
                                        v(as.In);
                                    }, t);
                            }, [v, a, p, t]),
                                (0, n.useEffect)(() => {
                                    if (g)
                                        return es(() => {
                                            (u && u(), v(as.End));
                                        }, e + t);
                                }, [v, g, u, t, e]));
                            const h = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(s - i)}%`, left: `${c ? i : s}%` }),
                                    [s, c, i],
                                );
                            return E
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: f },
                                      r().createElement(
                                          'div',
                                          { style: p ? h : b, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(rs, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    os = {
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
                    is = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: o }) => {
                            const i = b()(
                                    os.base,
                                    os[`base__${e}`],
                                    a && os.base__disabled,
                                    s && os.base__finished,
                                    o && os.base__withoutBounce,
                                ),
                                u = !a && !s;
                            return r().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                r().createElement('div', { className: os.pattern }),
                                r().createElement('div', { className: os.gradient }),
                                u && r().createElement(rs, { size: e }),
                            );
                        },
                    ),
                    us = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: o,
                            isComplete: i,
                            animationSettings: u,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${u.line.duration}ms`,
                                    transitionDelay: `${u.line.delay}ms`,
                                }),
                                [u.line.delay, u.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(is, {
                                    size: t,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    r().createElement(ss, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        freezed: u.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    ls = (e) => (e ? { left: 0 } : { right: 0 }),
                    cs = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    ds = (e) => ({ transitionDuration: `${e}ms` }),
                    ms = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: o,
                            to: i,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < s,
                                m = (0, n.useState)(ts.Idle),
                                _ = m[0],
                                g = m[1],
                                E = _ === ts.End,
                                p = _ === ts.Idle,
                                v = _ === ts.Grow,
                                h = _ === ts.Shrink,
                                f = (0, n.useCallback)(
                                    (e) => {
                                        (g(e), l && l(e));
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        es(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? C(ts.Grow, t)
                                        : v
                                          ? C(ts.Shrink, e)
                                          : h
                                            ? C(ts.End, e)
                                            : void (E && u && u());
                            }, [C, a, E, v, p, h, u, t, e]);
                            const A = (0, n.useMemo)(() => Object.assign({ width: '100%' }, ds(e), ls(d)), [d, e]),
                                D = (0, n.useMemo)(() => Object.assign({ width: '0%' }, ds(e), ls(d)), [d, e]),
                                w = (0, n.useMemo)(() => Object.assign({ width: '0%' }, cs(d, s), ds(e)), [s, d, e]),
                                F = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - s)}%` }, cs(d, s), ds(e)),
                                    [s, d, i, e],
                                );
                            if (E) return null;
                            const B = b()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: p ? w : F, className: B },
                                r().createElement(
                                    'div',
                                    { style: h ? D : A, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(rs, { size: o }),
                                ),
                            );
                        },
                    ),
                    _s = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: o,
                            isComplete: i,
                            animationSettings: u,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < a,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                E = (0, n.useCallback)(
                                    (e) => {
                                        (e === ts.Shrink && g(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                v = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${u.line.duration}ms` }),
                                    [u.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(is, {
                                    size: t,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? v : p,
                                }),
                                a >= 0 &&
                                    r().createElement(ms, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: u.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: u.delta.className,
                                    }),
                            );
                        },
                    ),
                    gs = ['onComplete', 'onEndAnimation'];
                function Es() {
                    return (
                        (Es =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Es.apply(this, arguments)
                    );
                }
                const ps = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                                return r;
                            })(e, gs);
                        const o = (0, n.useState)(!1),
                            i = o[0],
                            u = o[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === s.to;
                                (e !== i && u(e), e && t && t(), a && a());
                            }, [i, t, a, s.to]);
                        switch (s.animationSettings.type) {
                            case Zr.Simple:
                                return r().createElement(us, Es({}, s, { onEndAnimation: l, isComplete: i }));
                            case Zr.Growing:
                                return r().createElement(_s, Es({}, s, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    vs = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            u = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                u && o && o();
                            }, [u, o]),
                            r().createElement(is, { size: e, disabled: s, baseStyles: i, isComplete: u, lineRef: a })
                        );
                    },
                    hs = ['onEndAnimation'];
                function bs() {
                    return (
                        (bs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        bs.apply(this, arguments)
                    );
                }
                const fs = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, hs);
                    const s = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            ((s.current.from = void 0), t && t());
                        }, [t]),
                        i = 'number' == typeof s.current.from ? s.current.from : a.from;
                    return (
                        (s.current.from = i),
                        r().createElement(
                            ps,
                            bs({}, a, {
                                onEndAnimation: o,
                                key: `${i}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
                function Cs() {
                    return (
                        (Cs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Cs.apply(this, arguments)
                    );
                }
                const As = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: s,
                            additionalKey: o,
                            animationSettings: i,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (s === t)
                                return r().createElement(vs, {
                                    key: `${s}-${t}-${o}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const d = {
                                from: s,
                                to: t,
                                size: e,
                                additionalKey: o,
                                lineRef: a,
                                disabled: n,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: u,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? r().createElement(fs, d)
                                : r().createElement(ps, Cs({ key: `${s}-${t}-${o}` }, d));
                        },
                    ),
                    Ds = (e) => ({
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
                    ws = (e, t, a) => ('number' == typeof a ? (Bt(0, t, a) / t) * 100 : e),
                    Fs = {
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
                    Bs = {
                        freezed: !1,
                        withStack: !1,
                        type: Zr.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Ss = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Fs,
                            size: a = Kr.Default,
                            animationSettings: s = Bs,
                            disabled: o = !1,
                            withoutBackground: i = !1,
                            value: u,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: g,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const n = (Bt(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: ws(n, t, a) };
                                }, [a, t, e]))(u, e, l);
                            return r().createElement(
                                'div',
                                { className: b()(Xr.base, Xr[`base__${a}`]), style: Ds(t) },
                                !i && r().createElement(Jr, { size: a }),
                                r().createElement(As, {
                                    size: a,
                                    lineRef: d,
                                    disabled: o,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: s,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: g,
                                }),
                            );
                        },
                    ),
                    ys = ({ rank: e, division: t, from: a, to: n, className: s, children: o }) =>
                        r().createElement(
                            K,
                            {
                                contentId: R.views.comp7.lobby.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: n },
                            },
                            r().createElement('div', { className: s }, o),
                        ),
                    Ns = 'RankProgressDivisions_bottomLine_1e',
                    xs = (0, De.Pi)(({ itemIndex: e, rank: t, from: a, step: n }) => {
                        const s = _r().model.computes.divisions(e);
                        return r().createElement(
                            'div',
                            { className: 'RankProgressDivisions_base_c4' },
                            Me(s, (e, s) => {
                                const o = e.state === or.Current;
                                return r().createElement(
                                    ys,
                                    {
                                        key: s,
                                        rank: t,
                                        division: e.name,
                                        from: a + n * s,
                                        to: a + n * (s + 1),
                                        className: b()(
                                            'RankProgressDivisions_divisionItem_e9',
                                            o && 'RankProgressDivisions_divisionItem__current_62',
                                        ),
                                    },
                                    o &&
                                        r().createElement(
                                            'div',
                                            { className: 'RankProgressDivisions_highlightContainer_e1' },
                                            r().createElement('div', {
                                                className: 'RankProgressDivisions_radialBack_69',
                                            }),
                                            r().createElement('div', {
                                                className: 'RankProgressDivisions_mainBack_02',
                                            }),
                                            r().createElement('div', {
                                                className: b()(Ns, 'RankProgressDivisions_bottomLine__first_32'),
                                            }),
                                            r().createElement('div', {
                                                className: b()(Ns, 'RankProgressDivisions_bottomLine__second_2e'),
                                            }),
                                            r().createElement('div', {
                                                className: b()(Ns, 'RankProgressDivisions_bottomLine__third_45'),
                                            }),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: 'RankProgressDivisions_divisionText_ae' },
                                        o &&
                                            r().createElement(
                                                'div',
                                                { className: 'RankProgressDivisions_note_65' },
                                                R.strings.comp7_ext.division.note(),
                                            ),
                                        ma(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    Rs = {
                        '--pointLineWidth': '1rem',
                        base: 'RankProgressPoints_base_ee',
                        point: 'RankProgressPoints_point_f9',
                        base__top: 'RankProgressPoints_base__top_38',
                        base__bottom: 'RankProgressPoints_base__bottom_78',
                        pointLine: 'RankProgressPoints_pointLine_0d',
                        pointLine__extended: 'RankProgressPoints_pointLine__extended_77',
                        pointValue: 'RankProgressPoints_pointValue_48',
                        pointValue__next: 'RankProgressPoints_pointValue__next_c6',
                    };
                let ks;
                !(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(ks || (ks = {}));
                const Ps = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${Rs['--pointLineWidth']})` } : { left: a };
                    },
                    Is = ({
                        step: e,
                        divisionsCount: t,
                        from: a,
                        currentDivisionIndex: n,
                        direction: s = ks.Bottom,
                        className: o,
                    }) =>
                        r().createElement(
                            'div',
                            { className: b()(Rs.base, Rs[`base__${s}`], o) },
                            Zt(t + 1, (s) => {
                                const o = void 0 !== n && s === n + 1,
                                    i = void 0 === a && (s === n || o);
                                return r().createElement(
                                    'div',
                                    { className: Rs.point, style: Ps(s, t), key: s },
                                    r().createElement('div', {
                                        className: b()(Rs.pointLine, i && Rs.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        r().createElement(
                                            'div',
                                            { className: b()(Rs.pointValue, o && Rs.pointValue__next) },
                                            a + e * s,
                                        ),
                                );
                            }),
                        ),
                    Ts = {
                        base: 'RankProgress_base_d7',
                        base__hidden: 'RankProgress_base__hidden_dd',
                        base__inactive: 'RankProgress_base__inactive_d9',
                        base__active: 'RankProgress_base__active_50',
                        progressWrapper: 'RankProgress_progressWrapper_e7',
                    },
                    Ls = {
                        freezed: !0,
                        withStack: !1,
                        type: Zr.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    Os = (0, De.Pi)(({ rank: e, state: t, itemIndex: a, from: n, to: s, progressState: o }) => {
                        const i = _r().model,
                            u = i.root.get().currentScore,
                            l = i.computes.divisionsConfig(a),
                            c = s - n,
                            d = ((e, t, a) => Math.round((t - e) / a))(n, s, l.count);
                        return r().createElement(
                            'div',
                            { className: b()(Ts.base, Ts[`base__${o}`]) },
                            r().createElement(xs, { itemIndex: a, rank: e, from: n, step: d }),
                            r().createElement(Is, {
                                step: d,
                                divisionsCount: l.count,
                                direction: ks.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            r().createElement(
                                'div',
                                { className: Ts.progressWrapper },
                                t === cr.Current
                                    ? r().createElement(Ss, { maxValue: c, value: u - n, animationSettings: Ls })
                                    : r().createElement(Ss, { maxValue: c, value: u < n ? 0 : c, disabled: u < n }),
                            ),
                            r().createElement(Is, {
                                step: d,
                                divisionsCount: l.count,
                                from: n,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    Ms = ({ text: e, binding: t, className: a }) => {
                        const n = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: r().createElement(j, { value: e.pointsCount }) })
                                : e)(t);
                        return r().createElement(xn, {
                            text: e,
                            binding: n,
                            classMix: b()('RankStatusDescription_base_00', a),
                        });
                    },
                    $s = R.strings.comp7_ext.rankItemStatus.previous,
                    Ws = ({ rank: e, rankState: t, itemIndex: a, from: n, to: s, progressState: o }) => {
                        switch (e) {
                            case Fe.First:
                            case Fe.Second:
                            case Fe.Third:
                            case Fe.Fourth:
                                return r().createElement(Os, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: o,
                                });
                            case Fe.Fifth:
                                return r().createElement(
                                    'div',
                                    { className: 'AchievedRankStatus_base_48' },
                                    r().createElement(Ms, { text: Ea($s.description, e), binding: { fromScore: n } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`),
                                    null
                                );
                        }
                    },
                    Hs = ({ timestamp: e, className: t, isLastBestUserPointsValueLoading: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()('LastUpdate_base_4d', t) },
                            a
                                ? r().createElement(Fn, {
                                      text: R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: 'LastUpdate_dataUpdate_f3',
                                  })
                                : r().createElement(Vn, { timestamp: e }),
                        ),
                    zs = (e, t) => e > 0 || t;
                let Us;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden'));
                })(Us || (Us = {}));
                const Gs = R.strings.comp7_ext.rankItemStatus.current,
                    Vs = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: s,
                        to: i,
                        progressState: u,
                        topPercentage: l,
                        pointsCount: c,
                        isLastBestUserPointsValueLoading: d,
                        timestamp: m,
                    }) => {
                        const _ = { topPercentage: l, pointsCount: c };
                        return (
                            (0, n.useEffect)(() => {
                                u === Us.Active && o.O.sound.play.sound(R.sounds.comp_7_progression_rank_active());
                            }, [u]),
                            r().createElement(
                                'div',
                                { className: 'CurrentRankStatus_base_99' },
                                (() => {
                                    switch (e) {
                                        case Fe.First:
                                        case Fe.Second:
                                        case Fe.Third:
                                        case Fe.Fourth:
                                            return r().createElement(Os, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: s,
                                                to: i,
                                                progressState: u,
                                            });
                                        case Fe.Fifth:
                                        case Fe.Sixth:
                                            return r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(Ms, {
                                                    text: zs(c, d)
                                                        ? Ea(Gs.extendedDescription, e)
                                                        : Ea(Gs.description, e),
                                                    binding: _,
                                                }),
                                                r().createElement(Hs, {
                                                    timestamp: m,
                                                    isLastBestUserPointsValueLoading: d,
                                                }),
                                            );
                                        default:
                                            return (
                                                console.warn(
                                                    `Status for rank '${e}' was not mapped to any react component.`,
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            )
                        );
                    },
                    qs = R.strings.comp7_ext.rankItemStatus.future,
                    js = [Fe.Sixth],
                    Qs = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: s,
                        pointsCount: o,
                        isLastBestUserPointsValueLoading: i,
                        timestamp: u,
                    }) => {
                        const l = (0, n.useMemo)(
                                () =>
                                    e === Fe.Sixth
                                        ? { topPercentage: t, pointsCount: o }
                                        : e === Fe.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: s },
                                [t, o, a, s, e],
                            ),
                            c = js.includes(e) && zs(o, i);
                        return r().createElement(
                            'div',
                            { className: 'FutureRankStatus_base_c3' },
                            r().createElement('div', { className: 'FutureRankStatus_lock_c0' }),
                            r().createElement(Ms, {
                                text: Ea(c ? qs.extendedDescription : qs.description, e),
                                binding: l,
                            }),
                            c && r().createElement(Hs, { timestamp: u, isLastBestUserPointsValueLoading: i }),
                        );
                    },
                    Ys = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: n,
                        to: s,
                        progressState: o,
                        pointsCount: i,
                        isLastBestUserPointsValueLoading: u,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case cr.Previous:
                                return r().createElement(Ws, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: o,
                                });
                            case cr.Current:
                                return r().createElement(Vs, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: o,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: u,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case cr.Future:
                                return r().createElement(Qs, {
                                    rank: t,
                                    topPercentage: l,
                                    from: n,
                                    to: s,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: u,
                                    timestamp: c,
                                });
                            default:
                                return (
                                    console.error(`Unreachable code for state '${e}' in RankStatusResolver.`),
                                    null
                                );
                        }
                    };
                let Xs;
                !(function (e) {
                    ((e.Progress = 'progress'), (e.Text = 'text'));
                })(Xs || (Xs = {}));
                const Ks = {
                        '--pageContentWidth': '78vw',
                        base: 'RankItem_base_6a',
                        rankEmblemContainer: 'RankItem_rankEmblemContainer_93',
                        glowContainer: 'RankItem_glowContainer_86',
                        rankEmblemContainer__current: 'RankItem_rankEmblemContainer__current_7a',
                        glow: 'RankItem_glow_6a',
                        rankEmblemContainer__future: 'RankItem_rankEmblemContainer__future_cb',
                        rankEmblem: 'RankItem_rankEmblem_e1',
                        rankDescription: 'RankItem_rankDescription_ea',
                        fadeOut: 'RankItem_fadeOut_96',
                        rankDescription__text: 'RankItem_rankDescription__text_65',
                        rankDescription__progress: 'RankItem_rankDescription__progress_8b',
                        rankDescription__viewed: 'RankItem_rankDescription__viewed_52',
                        fadeIn: 'RankItem_fadeIn_3c',
                        rankInfo: 'RankItem_rankInfo_9c',
                        dividerContainer: 'RankItem_dividerContainer_23',
                        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_3a',
                        fadeInHalf: 'RankItem_fadeInHalf_5d',
                        fadeInWithScale: 'RankItem_fadeInWithScale_3a',
                        slideUp: 'RankItem_slideUp_34',
                        scale: 'RankItem_scale_49',
                        raysAppearance: 'RankItem_raysAppearance_f9',
                        rotate: 'RankItem_rotate_7d',
                        'reverse-rotate': 'RankItem_reverse-rotate_ef',
                        glowAppearance: 'RankItem_glowAppearance_25',
                        highlightAppearance: 'RankItem_highlightAppearance_63',
                        blink: 'RankItem_blink_9d',
                        slideUpIn: 'RankItem_slideUpIn_20',
                    },
                    Zs = (0, De.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const n = _r().model,
                            s = V().model,
                            o = n.root.get(),
                            i = o.topPercentage,
                            u = o.lastBestUserPointsValue,
                            l = o.leaderboardUpdateTimestamp,
                            c = o.isLastBestUserPointsValueLoading,
                            d = F().mediaSize,
                            m = n.computes.item(e),
                            _ = m.rank,
                            g = m.from,
                            E = m.to,
                            p = n.computes.divisionsConfig(e),
                            v = n.computes.rankSettings(e),
                            h = v.state,
                            f = v.division,
                            C = v.hasInfo,
                            D = ((e) => {
                                switch (!0) {
                                    case e >= A.ExtraLarge:
                                        return Ca.x420;
                                    case e >= A.Large:
                                        return Ca.x320;
                                    case e >= A.Medium:
                                        return Ca.x260;
                                    default:
                                        return Ca.x200;
                                }
                            })(d),
                            w = ((e, t) => (t ? (e === cr.Current ? Us.Active : Us.Inactive) : Us.Hidden))(h, t),
                            B = ((e, t) => {
                                const a = fa(t);
                                switch (e) {
                                    case cr.Previous:
                                    case cr.Current:
                                        return a ? Xs.Progress : Xs.Text;
                                    default:
                                        return Xs.Text;
                                }
                            })(h, _);
                        return r().createElement(
                            'div',
                            { className: Ks.base },
                            r().createElement(
                                hn,
                                {
                                    rank: _,
                                    from: g,
                                    to: E,
                                    topPercentage: i,
                                    divisions: p.list,
                                    className: b()(Ks.rankEmblemContainer, Ks[`rankEmblemContainer__${h}`]),
                                },
                                r().createElement(jr, { className: Ks.glowContainer, classNames: { glow: Ks.glow } }),
                                r().createElement(Da, {
                                    seasonName: s.season.name.get(),
                                    size: D,
                                    rank: _,
                                    division: f,
                                    className: Ks.rankEmblem,
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Ks.rankDescription,
                                        Ks[`rankDescription__${B}`],
                                        t && Ks.rankDescription__viewed,
                                    ),
                                },
                                C &&
                                    r().createElement(
                                        'div',
                                        { className: Ks.rankInfo },
                                        r().createElement(Qr, { rank: _, from: g, topPercentage: i }),
                                    ),
                                r().createElement(Ys, {
                                    rankState: h,
                                    rank: _,
                                    itemIndex: e,
                                    from: g,
                                    to: E,
                                    progressState: w,
                                    pointsCount: u,
                                    isLastBestUserPointsValueLoading: c,
                                    topPercentage: i,
                                    timestamp: l,
                                }),
                            ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: Ks.dividerContainer, style: { '--emblemSize': `${D}rem` } },
                                    r().createElement(Yr, null),
                                ),
                        );
                    }),
                    Js = (0, De.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: n, hasDivider: s }) => {
                        const o = _r().model.computes.item(e);
                        return r().createElement(
                            'div',
                            {
                                className: 'RankItemContainer_base_02',
                                style: { '--itemWidth': `${t}rem` },
                                onMouseDown: n,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        'RankItemContainer_title_94',
                                        a && 'RankItemContainer_title__active_0d',
                                    ),
                                },
                                va(o.rank),
                            ),
                            r().createElement(Zs, { itemIndex: e, isViewed: a, hasDivider: s }),
                        );
                    }),
                    eo = {
                        base: 'Progression_areaContainer_8d',
                        wrapper: 'Progression_areaWrapper_40',
                        content: 'Progression_areaContent_a5',
                    },
                    to = { base: 'Progression_bar_a0' },
                    ao = (0, De.Pi)(({ staticContent: e, className: t }) => {
                        const a = _r().model,
                            s = a.root.get().currentItemIndex,
                            i = a.items.get().length,
                            u =
                                (E = F().mediaSize) >= A.ExtraLarge
                                    ? 640
                                    : E >= A.Large
                                      ? 500
                                      : E >= A.Medium
                                        ? 440
                                        : 400,
                            l = yr(u),
                            c = Wr(u),
                            d = (0, n.useState)(s),
                            m = d[0],
                            _ = d[1],
                            g = (0, n.useCallback)(
                                (e) => () => {
                                    (o.O.sound.play.click(), _(e));
                                },
                                [],
                            );
                        var E;
                        return (
                            (0, n.useLayoutEffect)(() => {
                                c.scrollPosition.start({ scrollPosition: o.O.view.remToPx(s * u), immediate: !0 });
                            }, []),
                            (0, n.useLayoutEffect)(() => {
                                _(s);
                            }, [s]),
                            r().createElement(
                                $r,
                                {
                                    api: c,
                                    stuckIndex: m,
                                    itemWidth: u,
                                    itemsOffset: l,
                                    staticContent: e,
                                    onStick: _,
                                    className: b()('Progression_base_5d', t),
                                    areaClassNames: eo,
                                    barClassNames: to,
                                },
                                Zt(i, (e) =>
                                    r().createElement(Js, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: m === e,
                                        hasDivider: e < i - 1,
                                        itemWidth: u,
                                        onMouseDown: g(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    no = R.strings.comp7_ext.qualification,
                    ro = { hasHtmlContent: !0 },
                    so = ({ maxBattlesCount: e, children: t }) =>
                        r().createElement(
                            te,
                            {
                                header: no.conditionTooltip.header(),
                                body: aa(no.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: ro,
                            },
                            r().createElement('div', null, t),
                        ),
                    oo = ({ size: e, seasonName: t, className: a }) => {
                        const n = R.images.comp7.gui.maps.icons.ranks.$dyn(t).$num(e);
                        return r().createElement('div', {
                            className: b()(Aa, a),
                            style: { backgroundImage: `url(${n.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    io = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        r().createElement(Fn, {
                            text: R.strings.comp7_ext.qualification.counter(),
                            binding: {
                                battlesCount: r().createElement(
                                    'div',
                                    { className: 'BattlesCounter_battlesCount_8f' },
                                    e,
                                ),
                                maxBattlesCount: t,
                            },
                            classMix: b()('BattlesCounter_base_ac', a),
                        }),
                    uo = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_fe',
                        base__size_234: 'QualificationBattleItem_base__size_234_69',
                        battleBackground: 'QualificationBattleItem_battleBackground_a7',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_4b',
                        blink: 'QualificationBattleItem_blink_d0',
                        fadeIn: 'QualificationBattleItem_fadeIn_71',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_70',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_9c',
                        fadeOut: 'QualificationBattleItem_fadeOut_74',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_3a',
                        slideUp: 'QualificationBattleItem_slideUp_9a',
                        scale: 'QualificationBattleItem_scale_b7',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_12',
                        rotate: 'QualificationBattleItem_rotate_e4',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_26',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_d2',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_36',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_b4',
                    },
                    lo = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    co = { x173: 173, x234: 234 },
                    mo = ({ className: e, state: t, size: a = 'x173' }) => {
                        const n = co[a],
                            s = R.images.comp7.gui.maps.icons.icons.$dyn(`battle_${lo[t]}`);
                        return r().createElement(
                            'div',
                            { className: b()(uo.base, e, uo[`base__${t}`], uo[`base__size_${n}`]) },
                            r().createElement('div', {
                                className: uo.battleBackground,
                                style: { backgroundImage: `url(${s})`, '--imageSize': `${n}rem` },
                            }),
                        );
                    },
                    _o = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = _r().model,
                            n = F().mediaSize,
                            s = a.computes.qualificationBattle(e);
                        return r().createElement(mo, {
                            state: s.state,
                            className: t,
                            key: e,
                            size: n >= A.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    go = (0, De.Pi)(({ className: e }) => {
                        const t = _r().model;
                        return r().createElement(
                            'div',
                            { className: b()('BattlesProgression_base_e6', e) },
                            Zt(t.qualificationBattles.get().length, (e) =>
                                r().createElement(_o, { index: e, className: 'BattlesProgression_item_30', key: e }),
                            ),
                        );
                    }),
                    Eo = (e) => {
                        switch (!0) {
                            case e >= A.ExtraLarge:
                                return Ca.x600;
                            case e >= A.Large:
                                return Ca.x420;
                            case e >= A.Medium:
                                return Ca.x260;
                            default:
                                return Ca.x200;
                        }
                    },
                    po = R.strings.comp7_ext.qualification,
                    vo = { base: 'Qualification_rewardsButton_6e', icon: 'Qualification_buttonIcon_8a' },
                    ho = (0, De.Pi)(({ className: e }) => {
                        const t = _r(),
                            a = t.model,
                            n = t.controls,
                            s = V().model,
                            o = F().mediaSize,
                            i = a.qualificationModel.battlesCount.get(),
                            u = a.qualificationModel.maxBattlesCount.get(),
                            l = a.qualificationModel.isRatingCalculation.get(),
                            c = a.isParallaxPreloaded.get(),
                            d = (0, Ze.useSpring)({
                                from: { opacity: 0 },
                                to: Ce() ? { opacity: c ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return Ce() && !c
                            ? r().createElement(
                                  'div',
                                  { className: 'Qualification_waiting_73' },
                                  r().createElement(_t, null),
                              )
                            : r().createElement(
                                  Ze.animated.div,
                                  { style: d, className: b()('Qualification_base_6b', e) },
                                  r().createElement(
                                      'div',
                                      { className: 'Qualification_content_fc' },
                                      r().createElement(
                                          'div',
                                          { className: 'Qualification_qualificationEmblemContainer_0e' },
                                          r().createElement(jr, {
                                              className: 'Qualification_glowContainer_a1',
                                              classNames: { glow: 'Qualification_glow_47' },
                                          }),
                                          r().createElement(oo, {
                                              size: Eo(o),
                                              seasonName: s.season.name.get(),
                                              className: 'Qualification_qualificationEmblem_5a',
                                          }),
                                      ),
                                      r().createElement(io, { battlesCount: i, maxBattlesCount: u }),
                                      l
                                          ? r().createElement(
                                                te,
                                                { body: R.strings.comp7_ext.qualification.ratingCalculationTooltip() },
                                                r().createElement(
                                                    'div',
                                                    null,
                                                    r().createElement(Fn, {
                                                        text: po.ratingCalculationDescription(),
                                                        binding: {
                                                            timerIcon: r().createElement('div', {
                                                                className: 'Qualification_timerIcon_66',
                                                            }),
                                                        },
                                                        classMix: 'Qualification_ratingCalculationDescription_e2',
                                                    }),
                                                ),
                                            )
                                          : r().createElement(xn, {
                                                text: po.counterWithDescription(),
                                                classMix: 'Qualification_counterDescription_3f',
                                            }),
                                      r().createElement(go, { className: 'Qualification_battlesProgression_1d' }),
                                  ),
                                  r().createElement(
                                      'div',
                                      { className: 'Qualification_footer_84' },
                                      r().createElement(
                                          'div',
                                          { className: 'Qualification_conditionContainer_b2' },
                                          r().createElement(xn, {
                                              text: po.condition(u),
                                              classMix: 'Qualification_condition_49',
                                              binding: { maxBattlesCount: u },
                                          }),
                                          r().createElement(
                                              so,
                                              { maxBattlesCount: u },
                                              r().createElement('div', { className: 'Qualification_infoIcon_90' }),
                                          ),
                                      ),
                                      r().createElement(Fn, {
                                          text: po.rewardsDescription(),
                                          classMix: 'Qualification_rewardsDescription_c8',
                                      }),
                                      r().createElement(Ee, {
                                          caption: po.rewardsButton(),
                                          classNames: vo,
                                          onMouseEnter: () => n.setRewardLayerVisible(!0),
                                          onMouseLeave: () => n.setRewardLayerVisible(!1),
                                          onClick: () => n.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    bo = 'ProgressionPage_contentWrapper_ae',
                    fo = 'ProgressionPage_content_9a',
                    Co = R.strings.comp7_ext.page.heading,
                    Ao = (0, De.Pi)(() => {
                        const e = _r().model.qualificationModel.isActive.get(),
                            t = (0, Ze.useSpring)(gt);
                        return r().createElement(
                            'div',
                            { className: 'ProgressionPage_base_c4' },
                            Ce() && e && r().createElement(Cr, { className: 'ProgressionPage_parallaxContainer_b2' }),
                            r().createElement(
                                mt,
                                { className: b()(be, 'ProgressionPage_heading_89') },
                                e ? Co.qualification() : Co.progression(),
                            ),
                            r().createElement(tr, { className: 'ProgressionPage_scheduleSubheading_ce' }),
                            e
                                ? r().createElement('div', { className: bo }, r().createElement(ho, { className: fo }))
                                : r().createElement(
                                      Ze.animated.div,
                                      { style: t, className: bo },
                                      r().createElement(ao, {
                                          className: b()(fo, 'ProgressionPage_content__progression_52'),
                                          staticContent: r().createElement(Er, {
                                              className: 'ProgressionPage_footer_b7',
                                          }),
                                      }),
                                  ),
                        );
                    }),
                    Do = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                n = (0, Re.Om)(() => a.get().length),
                                r = (0, Re.Om)(
                                    (e) => {
                                        const t = Te(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: M },
                                ),
                                s = (0, Re.Om)(
                                    (e) => {
                                        const t = Te(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return Me(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                o = (0, Re.Om)(
                                    (e) => {
                                        const t = Te(s(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                i = (0, Re.Om)((e) => [...He(s(e), 1)], { equals: M }),
                                u = (0, Re.Om)((e) => {
                                    const t = Te(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const n = Me(t.divisions, (e) => Object.assign({}, e));
                                    return ir(n);
                                }),
                                l = (0, Re.Om)(
                                    (e) => !t.qualification.isActive.get() && e === t.root.get().currentItemIndex,
                                ),
                                c = (0, Re.Om)(
                                    () => {
                                        const e = Ue(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : n(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: ft },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: n,
                                    rankRewardsItem: r,
                                    mainReward: o,
                                    additionalRewards: i,
                                    additionalRewardsCount: (0, Re.Om)((e) => i(e).length),
                                    divisionsString: u,
                                    isCurrentRank: l,
                                    scrollingSettings: c,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                goToPreview: (0, $.aD)((e, n) => {
                                    const r = t.computes.rankRewardsItem(e).rank;
                                    a(r, n);
                                }),
                            };
                        },
                    ),
                    wo = Do[0],
                    Fo = Do[1];
                let Bo, So, yo, No, xo, Ro, ko, Po;
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
                })(Bo || (Bo = {})),
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
                    })(So || (So = {})),
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
                    })(yo || (yo = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(No || (No = {})),
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
                    })(xo || (xo = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ro || (Ro = {})),
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
                    })(ko || (ko = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Po || (Po = {})));
                const Io = [Bo.Attachment];
                function To() {
                    return (
                        (To =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        To.apply(this, arguments)
                    );
                }
                const Lo = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(te, t, n);
                        const s = t.contentId;
                        return s ? r().createElement(K, To({}, t, { contentId: s }), n) : r().createElement(Xn, t, n);
                    },
                    Oo = [
                        Bo.Items,
                        Bo.Equipment,
                        Bo.Xp,
                        Bo.XpFactor,
                        Bo.Blueprints,
                        Bo.BlueprintsAny,
                        Bo.Goodies,
                        Bo.Berths,
                        Bo.Slots,
                        Bo.Tokens,
                        Bo.CrewSkins,
                        Bo.CrewBooks,
                        Bo.Customizations,
                        Bo.CreditsFactor,
                        Bo.TankmenXp,
                        Bo.TankmenXpFactor,
                        Bo.FreeXpFactor,
                        Bo.BattleToken,
                        Bo.LootBox,
                        Bo.PremiumUniversal,
                        Bo.NaturalCover,
                        Bo.BpCoin,
                        Bo.BattlePassSelectToken,
                        Bo.BattlaPassFinalAchievement,
                        Bo.BattleBadge,
                        Bo.BattlePassTicket,
                        Bo.BonusX5,
                        Bo.CrewBonusX3,
                        Bo.EpicSelectToken,
                        Bo.Comp7TokenWeeklyReward,
                        Bo.DeluxeGift,
                        Bo.ModernizedDevicesT1Gift,
                        Bo.ModernizedDevicesT2Gift,
                        Bo.ModernizedDevicesT3Gift,
                        Bo.BattleBoosterGift,
                        Bo.OptionalDevice,
                        Bo.Attachment,
                    ],
                    Mo = [Bo.Gold, Bo.Credits, Bo.Crystal, Bo.FreeXp],
                    $o = [Bo.BattlePassPoints, Bo.EquipCoin],
                    Wo = [Bo.PremiumPlus, Bo.Premium],
                    Ho = ['engravings', 'backgrounds'],
                    zo = ['engraving', 'background'],
                    Uo = (e, t, a) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            a,
                        );
                    },
                    Go = [yo.Small, yo.Big],
                    Vo = {
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
                    qo = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = yo.Big,
                        special: s,
                        value: o,
                        valueType: i,
                        title: u,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !Go.includes(e)) return null;
                                switch (t) {
                                    case xo.BATTLE_BOOSTER:
                                    case xo.BATTLE_BOOSTER_REPLACE:
                                        return Ro.BATTLE_BOOSTER;
                                }
                            })(n, s),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case xo.BATTLE_BOOSTER:
                                        return ko.BATTLE_BOOSTER;
                                    case xo.BATTLE_BOOSTER_REPLACE:
                                        return ko.BATTLE_BOOSTER_REPLACE;
                                    case xo.BUILT_IN_EQUIPMENT:
                                        return ko.BUILT_IN_EQUIPMENT;
                                    case xo.EQUIPMENT_PLUS:
                                        return ko.EQUIPMENT_PLUS;
                                    case xo.EQUIPMENT_TROPHY_BASIC:
                                        return ko.EQUIPMENT_TROPHY_BASIC;
                                    case xo.EQUIPMENT_TROPHY_UPGRADED:
                                        return ko.EQUIPMENT_TROPHY_UPGRADED;
                                    case xo.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ko.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case xo.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ko.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case xo.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ko.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case xo.PROGRESSION_STYLE_UPGRADED_1:
                                        return ko.PROGRESSION_STYLE_UPGRADED_1;
                                    case xo.PROGRESSION_STYLE_UPGRADED_2:
                                        return ko.PROGRESSION_STYLE_UPGRADED_2;
                                    case xo.PROGRESSION_STYLE_UPGRADED_3:
                                        return ko.PROGRESSION_STYLE_UPGRADED_3;
                                    case xo.PROGRESSION_STYLE_UPGRADED_4:
                                        return ko.PROGRESSION_STYLE_UPGRADED_4;
                                    case xo.PROGRESSION_STYLE_UPGRADED_5:
                                        return ko.PROGRESSION_STYLE_UPGRADED_5;
                                    case xo.PROGRESSION_STYLE_UPGRADED_6:
                                        return ko.PROGRESSION_STYLE_UPGRADED_6;
                                    case xo.ATTACHMENT_RARE:
                                        return ko.ATTACHMENT_RARE;
                                    case xo.ATTACHMENT_EPIC:
                                        return ko.ATTACHMENT_EPIC;
                                    case xo.ATTACHMENT_LEGENDARY:
                                        return ko.ATTACHMENT_LEGENDARY;
                                }
                            })(s),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case No.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case No.CURRENCY:
                                    case No.NUMBER:
                                        return r().createElement(j, { format: 'integral', value: Number(e) });
                                    case No.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, i);
                        return r().createElement(
                            'div',
                            {
                                className: b()(Vo.base, Vo[`base__${n}`], Io.includes(e) && Vo.base__normalize, c),
                                style: l,
                            },
                            r().createElement(
                                Lo,
                                { tooltipArgs: m, className: Vo.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: b()(Vo.image, null == d ? void 0 : d.image) },
                                        g &&
                                            r().createElement('div', {
                                                className: b()(Vo.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: b()(Vo.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: b()(Vo.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    Vo.info,
                                                    Vo[`info__${e}`],
                                                    i === No.MULTI && Vo.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            p,
                                        ),
                                    u && r().createElement('div', { className: Vo.title }, u),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    Lo,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: b()(Vo.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function jo() {
                    return (
                        (jo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        jo.apply(this, arguments)
                    );
                }
                const Qo = ({ reward: e, size: t }) => {
                        const a = e.RewardWrapper || null;
                        return a
                            ? r().createElement(a, e.rewardWrapperProps, r().createElement(qo, jo({ size: t }, e)))
                            : r().createElement(qo, jo({ size: t }, e));
                    },
                    Yo = ({
                        data: e,
                        size: t = yo.Big,
                        isVertical: a = !1,
                        count: n,
                        classMix: s,
                        rewardItemClassMix: o,
                        boxRewardTooltip: i,
                        boxRewardValue: u,
                        boxRewardClassName: l,
                        boxRewardClassNames: c,
                    }) => {
                        const d = n && n < e.length,
                            m = b()('Rewards_reward_7b', a && 'Rewards_reward__vertical_c6', o),
                            _ = d ? n : e.length;
                        return r().createElement(
                            'div',
                            { className: b()('Rewards_base_26', a && 'Rewards_base__vertical_9f', s) },
                            e
                                .slice(0, _)
                                .map((e, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: m },
                                        r().createElement(Qo, { reward: e, size: t }),
                                    ),
                                ),
                            d &&
                                r().createElement(
                                    'div',
                                    { className: m },
                                    r().createElement(qo, {
                                        name: 'more',
                                        image: `R.images.gui.maps.icons.quests.bonuses.${t}.default`,
                                        size: t,
                                        value:
                                            u ||
                                            aa(R.strings.tooltips.quests.awards.additional.bottom(), {
                                                count: e.length - (n || 0),
                                            }),
                                        tooltipArgs: i,
                                        className: l,
                                        classNames: c,
                                    }),
                                ),
                        );
                    },
                    Xo = [yo.Big, yo.Small],
                    Ko = [yo.S232x174, yo.S296x222, yo.S400x300, yo.S600x450],
                    Zo = R.images.comp7.gui.maps.icons.rewards,
                    Jo = (e, t) => 'styleProgress' === e.name && Xo.includes(t),
                    ei = (e, t) =>
                        'progressLevel' in e && Jo(e, t)
                            ? `progressionStyleUpgraded_${e.progressLevel}`
                            : e.overlayType,
                    ti = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    ai = ({ reward: e, rank: t, index: a }) => {
                        const n = e.tooltipId,
                            r = e.tooltipContentId;
                        return Uo(
                            Object.assign({ tooltipId: n }, void 0 !== t && { rank: t }, void 0 !== a && { index: a }),
                            Number(r),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    ni = (e, t) => {
                        if ('tankman' === e.name) {
                            var a;
                            const n =
                                null == (a = R.images.comp7.gui.maps.icons.crew.$dyn(t)) ? void 0 : a.$dyn(e.groupName);
                            if (n) return `${n}`;
                            console.info(
                                `Folder for reward size ${t} was not found for crew with groupName: ${e.groupName}`,
                            );
                        }
                        if (Jo(e, t)) return `R.images.gui.maps.icons.quests.bonuses.${t}.camouflage`;
                        if ('customizations' === e.name && Ko.includes(t)) {
                            const a = Zo.$dyn(t),
                                n =
                                    (null == a ? void 0 : a.$dyn(`style_${e.styleID}`)) ||
                                    (null == a ? void 0 : a.$dyn(e.icon));
                            if (n) return `${n}`;
                            console.info(
                                `asset with styleID: ${e.styleID}, size:${t} was not found, using common icon`,
                            );
                        }
                        return ((e, t = yo.Small) => {
                            const a = e.name,
                                n = e.type,
                                r = e.value,
                                s = e.icon,
                                o = e.item,
                                i = e.dogTagType,
                                u = ((e) => {
                                    switch (e) {
                                        case yo.S600x450:
                                            return 'c_600x450';
                                        case yo.S400x300:
                                            return 'c_400x300';
                                        case yo.S296x222:
                                            return 'c_296x222';
                                        case yo.S232x174:
                                            return 'c_232x174';
                                        case yo.Big:
                                            return 'c_80x80';
                                        case yo.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t);
                            switch (a) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
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
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                                case 'crewBooks':
                                    return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                                case 'dogTagComponents':
                                    return ((e, t, a) => {
                                        const n = Ho[e];
                                        if (n) {
                                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                                s = r.$dyn(a);
                                            return s ? `${s}` : `${r.$dyn(zo[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(i, t, s);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${u}.${s}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${u}.${s}`;
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
                                    return `R.images.gui.maps.icons.collectionItems.${u}.${s}`;
                                case 'attachment':
                                    return `R.images.gui.maps.vehicles.attachments.${t}.${s}`;
                                case 'statTracker':
                                    return `R.images.gui.maps.vehicles.statTrackers.${t}.${s}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                            }
                        })(e, t);
                    },
                    ri = ({ reward: e, size: t, rank: a, index: n }) => {
                        const r = ((e, t) => {
                            if ('dogTagComponents' === e.name) {
                                if (t === yo.Big) return yo.S80x80;
                                if (t === yo.Small) return yo.S48x48;
                            }
                            return t;
                        })(e, t);
                        return Object.assign({}, e, {
                            size: r,
                            image: ni(e, r),
                            value: ti(e),
                            valueType:
                                ((s = e.name),
                                Oo.includes(s)
                                    ? No.MULTI
                                    : Mo.includes(s)
                                      ? No.CURRENCY
                                      : $o.includes(s)
                                        ? No.NUMBER
                                        : Wo.includes(s)
                                          ? No.PREMIUM_PLUS
                                          : No.STRING),
                            special: ei(e, r),
                            tooltipArgs: ai({ reward: e, rank: a, index: n }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var s;
                    },
                    si = ({ rewards: e, size: t, rank: a, index: n }) =>
                        Me(e, (e) => ri({ reward: e, size: t, rank: a, index: n })),
                    oi = (e, t) => (e > t ? t - 1 : void 0),
                    ii = yo.Small,
                    ui = (0, De.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: n }) => {
                        const s = Fo().model,
                            o = s.computes.additionalRewards(t),
                            i = s.computes.additionalRewardsCount(t),
                            u = Me(o, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, ri({ reward: t, size: ii, rank: e }), {
                                    className: b()(a && 'AdditionalRewards_vehiclesRentBase_ad'),
                                    classNames: { info: b()(a && 'AdditionalRewards_vehiclesRentLabel_f4') },
                                });
                            });
                        return r().createElement(Yo, {
                            data: u,
                            size: ii,
                            count: oi(i, a),
                            rewardItemClassMix: 'AdditionalRewards_reward_72',
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: n,
                        });
                    });
                let li;
                !(function (e) {
                    ((e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished'));
                })(li || (li = {}));
                const ci = {
                        base: 'Heading_base_ba',
                        rankEmblemContainer: 'Heading_rankEmblemContainer_eb',
                        godRays: 'Heading_godRays_b4',
                        rankEmblem__inactive: 'Heading_rankEmblem__inactive_6e',
                        lock: 'Heading_lock_72',
                        description: 'Heading_description_5f',
                        rankName: 'Heading_rankName_b7',
                        rankStatus: 'Heading_rankStatus_c1',
                    },
                    di = (0, De.Pi)(({ index: e, rankEmblemSize: t }) => {
                        const a = Fo().model,
                            n = V().model,
                            s = a.root.get().topPercentage,
                            o = a.computes.rankRewardsItem(e),
                            i = o.rank,
                            u = o.from,
                            l = o.to,
                            c = o.hasRewardsReceived,
                            d = a.computes.divisionsString(e),
                            m = a.computes.isCurrentRank(e);
                        return r().createElement(
                            'div',
                            { className: ci.base },
                            r().createElement(
                                hn,
                                {
                                    rank: i,
                                    from: u,
                                    to: l,
                                    topPercentage: s,
                                    divisions: d,
                                    className: ci.rankEmblemContainer,
                                    ignoreShowDelay: !0,
                                },
                                m &&
                                    r().createElement(Vr, {
                                        className: ci.godRays,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(Da, {
                                    seasonName: n.season.name.get(),
                                    size: t,
                                    rank: i,
                                    className: b()(ci.rankEmblem, !c && ci.rankEmblem__inactive),
                                }),
                                !c && r().createElement('div', { className: ci.lock }),
                            ),
                            r().createElement(
                                'div',
                                { className: ci.description },
                                r().createElement('div', { className: ci.rankName }, va(i)),
                                m &&
                                    r().createElement(
                                        'div',
                                        { className: ci.rankStatus },
                                        ((e) => {
                                            switch (e) {
                                                case li.OffSeason:
                                                case li.Finished:
                                                    return R.strings.comp7_ext.rank.achieved();
                                                case li.Active:
                                                    return R.strings.comp7_ext.rank.current();
                                                default:
                                                    return '';
                                            }
                                        })(n.year.state.get()),
                                    ),
                            ),
                        );
                    }),
                    mi =
                        (e, t) =>
                        (...a) => {
                            if (e(...a)) return t(...a);
                        },
                    _i = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    gi = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Ei() {
                    return (
                        (Ei =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ei.apply(this, arguments)
                    );
                }
                const pi = (e) => {
                    let t = e.type,
                        a = e.children,
                        s = e.className,
                        o = e.classNames,
                        i = e.disabled,
                        u = void 0 !== i && i,
                        l = e.isVisibleLabel,
                        c = void 0 !== l && l,
                        d = e.soundHover,
                        m = void 0 === d ? R.sounds.highlight() : d,
                        _ = e.soundClick,
                        g = void 0 === _ ? R.sounds.play() : _,
                        E = e.size,
                        p = void 0 === E ? 'normal' : E,
                        v = e.onClick,
                        h = e.onMouseEnter,
                        f = e.onMouseLeave,
                        C = e.onMouseDown,
                        A = e.onMouseUp,
                        D = e.onFocus,
                        w = e.onBlur,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, gi);
                    const B = (0, n.useState)(!1),
                        S = B[0],
                        y = B[1],
                        N = (0, n.useState)(!1),
                        x = N[0],
                        k = N[1],
                        P = (0, n.useRef)(null),
                        I = () => !1 === u,
                        T = (e) => I() && ((e) => e.button === Ga.LEFT)(e),
                        L = mi(I, (e) => {
                            null == v || v(e);
                        }),
                        O = mi(T, (e) => {
                            (y(!0), null == C || C(e), g && ce(g));
                        }),
                        M = mi(T, (e) => {
                            (y(!1), null == A || A(e));
                        }),
                        $ = mi(I, (e) => {
                            (k(!0), null == h || h(e), m && ce(m));
                        }),
                        W = mi(I, (e) => {
                            null == D || D(e);
                        }),
                        H = mi(I, (e) => {
                            null == w || w(e);
                        });
                    return r().createElement(
                        'div',
                        Ei(
                            {
                                ref: P,
                                className: b()(
                                    _i.base,
                                    u && _i.base__disabled,
                                    c && _i.base__visibleLabel,
                                    !u && S && _i.base__mouseDown,
                                    !u && x && _i.base__hovered,
                                    s,
                                ),
                                onClick: L,
                                onMouseEnter: $,
                                onMouseLeave: (e) => {
                                    (k(!1), y(!1), null == f || f(e));
                                },
                                onMouseDown: O,
                                onMouseUp: M,
                                onFocus: W,
                                onBlur: H,
                            },
                            F,
                        ),
                        r().createElement('div', {
                            className: b()(_i.icon, _i[`icon__${p}`], _i[`icon__${t}`], null == o ? void 0 : o.icon),
                        }),
                        a &&
                            r().createElement(
                                'div',
                                { className: b()(_i.label, _i[`label__${p}`], null == o ? void 0 : o.label) },
                                a,
                            ),
                    );
                };
                var vi = a(9690);
                const hi = (0, De.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: n, onPreviewClick: s, className: o }) => {
                            const i = Fo().model.computes.mainReward(e);
                            return r().createElement(
                                'div',
                                { className: b()('MainReward_base_f4', o) },
                                r().createElement(
                                    'div',
                                    { className: 'MainReward_imageContainer_0e' },
                                    n &&
                                        r().createElement(jr, {
                                            className: 'MainReward_glowContainer_42',
                                            classNames: { glow: 'MainReward_glow_75' },
                                        }),
                                    r().createElement(qo, ri({ reward: i, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(i) &&
                                        r().createElement(
                                            'div',
                                            { className: 'MainReward_preview_9a' },
                                            r().createElement(
                                                pi,
                                                { type: 'preview', onClick: s },
                                                R.strings.comp7_ext.rewards.preview(),
                                            ),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'MainReward_info_3c' },
                                    r().createElement('div', { className: 'MainReward_title_f2' }, i.label),
                                    r().createElement(xn, {
                                        text: String(R.strings.comp7_ext.rewards.subtitle.$dyn(i.name)),
                                        binding: { vehicleLevel: (0, vi.HG)(10) },
                                        classMix: 'MainReward_subTitle_6d',
                                    }),
                                ),
                            );
                        },
                    ),
                    bi = (0, De.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            mainRewardSize: a,
                            hasHighlight: n,
                            visibleRewardsCount: s,
                            rankEmblemSize: o,
                            onPreviewClick: i,
                        }) => {
                            const u = Fo().model.computes.rankRewardsItem(e),
                                l = u.rank,
                                c = u.hasRewardsReceived;
                            return r().createElement(
                                'div',
                                { className: 'RankRewardsItem_base_47', style: { '--itemWidth': `${t}rem` } },
                                r().createElement(di, { index: e, rankEmblemSize: o }),
                                r().createElement(hi, {
                                    index: e,
                                    rank: l,
                                    size: a,
                                    hasHighlight: n,
                                    onPreviewClick: i,
                                    className: 'RankRewardsItem_mainRewardContainer_6d',
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'RankRewardsItem_rewardsContainer_67' },
                                    r().createElement(ui, { itemIndex: e, visibleRewardsCount: s, rank: l }),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'RankRewardsItem_statusContainer_19',
                                            !c && 'RankRewardsItem_statusContainer__hidden_ef',
                                        ),
                                    },
                                    r().createElement('div', { className: 'RankRewardsItem_icon_47' }),
                                    R.strings.comp7_ext.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    fi = (e) => (e >= A.Large ? Ca.x110 : e >= A.Medium ? Ca.x64 : Ca.x48),
                    Ci = (e) =>
                        e >= A.ExtraLarge
                            ? yo.S600x450
                            : e >= A.Large
                              ? yo.S400x300
                              : e >= A.Medium
                                ? yo.S296x222
                                : yo.S232x174,
                    Ai = (e) => (e >= D.Medium ? 5 : 4),
                    Di = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    wi = (0, De.Pi)(() => {
                        const e = F(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            s = Fo(),
                            i = s.model,
                            u = s.controls,
                            l = i.root.get().initialItemIndex,
                            c = i.computes.rankRewardsItemsLength(),
                            d = i.computes.scrollingSettings(),
                            m = d.nextNotAchievedItemIndex,
                            _ = d.hasForceScroll,
                            g = (0, n.useState)(_ ? 'idle' : 'initial'),
                            E = g[0],
                            p = g[1],
                            v = (0, n.useState)(_ ? l : m),
                            h = v[0],
                            b = v[1],
                            f = ((e) =>
                                e >= A.ExtraLarge
                                    ? 600
                                    : e >= A.Large
                                      ? 460
                                      : e >= A.Medium
                                        ? 400
                                        : e >= A.Small
                                          ? 340
                                          : 300)(t),
                            C = c * f,
                            D = Wr(f),
                            w = D.scrollPosition,
                            B = D.clampPosition,
                            S = D.contentRef,
                            y = (function () {
                                const e = (0, n.useRef)(!1);
                                return (
                                    (0, n.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        ((0, n.useLayoutEffect)(() => {
                            'idle' === E
                                ? w.start({ scrollPosition: o.O.view.remToPx(l * f), immediate: !0 })
                                : 'initial' === E && w.start({ scrollPosition: o.O.view.remToPx(C), immediate: !0 });
                        }, []),
                            (0, n.useEffect)(
                                () =>
                                    Ke(() => {
                                        const e = S.current;
                                        if (e && 'initial' === E) {
                                            const t = B(e, o.O.view.remToPx(m * f)),
                                                a = B(e, o.O.view.remToPx(C));
                                            if (t === a) return void p('idle');
                                            w.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: Di,
                                                onStart: () => {
                                                    p('scrolling');
                                                },
                                                onRest: () => {
                                                    y.current || p('idle');
                                                },
                                            });
                                        }
                                    }),
                                [B, S, y, f, m, E, C, w],
                            ));
                        const N = (e) => 'idle' === E && e === m,
                            x = (0, Ze.useSpring)(gt);
                        return r().createElement(
                            'div',
                            { className: 'RankRewardsPage_base_71' },
                            r().createElement(mt, { className: be }, R.strings.comp7_ext.page.heading.rankRewards()),
                            r().createElement(tr, null),
                            r().createElement(
                                Ze.animated.div,
                                { className: 'RankRewardsPage_content_45', style: x },
                                r().createElement(
                                    $r,
                                    {
                                        api: D,
                                        stuckIndex: h,
                                        itemWidth: f,
                                        itemsOffset: yr(f),
                                        onStick: b,
                                        className: 'RankRewardsPage_scrollContainer_85',
                                        areaClassNames: {
                                            base: 'RankRewardsPage_areaContainer_58',
                                            wrapper: 'RankRewardsPage_areaWrapper_eb',
                                        },
                                        barClassNames: { base: 'RankRewardsPage_bar_95' },
                                    },
                                    Zt(c, (e) =>
                                        r().createElement(bi, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: Ai(a),
                                            rankEmblemSize: fi(t),
                                            mainRewardSize: Ci(t),
                                            itemWidth: f,
                                            hasHighlight: N(e),
                                            onPreviewClick: () => u.goToPreview(e, h),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                let Fi;
                !(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'));
                })(Fi || (Fi = {}));
                const Bi = [lr.Locked, lr.ReadyToPurchase],
                    Si = [ur.Vehicle, ur.Style3d],
                    yi = z()(
                        ({ observableModel: e, mode: t }) => {
                            const a = e.array('rankDiscounts'),
                                n = e.array('products'),
                                r = { root: e.object() },
                                s = (0, Re.Om)(
                                    () =>
                                        Me(n.get(), (e) =>
                                            Object.assign(
                                                {},
                                                e,
                                                { price: Object.assign({}, e.price) },
                                                'vehicleInfo' in e && { vehicleInfo: Object.assign({}, e.vehicleInfo) },
                                                'reward' in e && { reward: Object.assign({}, e.reward) },
                                            ),
                                        ),
                                    { equals: M },
                                ),
                                o = (0, Re.Om)(
                                    (e) => {
                                        const t = Te(s(), e);
                                        if (!t) throw new Error(`product with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                i = (0, Re.Om)(
                                    () => {
                                        const e = new Set(),
                                            t = Ve(
                                                s(),
                                                (t, a, n) => {
                                                    const r = a.rank,
                                                        s = t.get(r);
                                                    return void 0 === s
                                                        ? (0 !== n && e.add(n), t.set(r, 1))
                                                        : t.set(r, s + 1);
                                                },
                                                new Map(),
                                            );
                                        return { recordsArray: Array.from(t.entries()), groupIndexesSet: e };
                                    },
                                    { equals: M },
                                ),
                                u = (0, Re.Om)(
                                    (e) => {
                                        const t = o(e);
                                        return {
                                            hasDiscount: t.state === lr.ReadyToPurchase && t.price.discountValue > 0,
                                            isEnough: !Bi.includes(t.state) || t.price.isEnough,
                                        };
                                    },
                                    { equals: ft },
                                ),
                                l = (0, Re.Om)(() => {
                                    const e = r.root.get().selectedProductId,
                                        t = Ue(s(), (t) => t.id === e);
                                    if (void 0 === t)
                                        throw new Error(`selectedProductId: ${e} is not found in products array`);
                                    return t;
                                }),
                                c = (0, Re.Om)(
                                    () => {
                                        const e = l(),
                                            t = o(e);
                                        if (!t)
                                            throw new Error(
                                                `product with selected index ${e} is not found in products array`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                d = (0, Re.Om)(() => r.root.get().shopState === Fi.Success && c().type !== ur.Reward),
                                m = (0, Re.Om)(() => {
                                    const e = c();
                                    return e.type === ur.Vehicle && e.state !== lr.ReadyToRestore && e.description;
                                }),
                                _ = (0, Re.Om)(() => c().type === ur.Reward),
                                g = (0, Re.Om)(
                                    () => {
                                        const e = c(),
                                            t = e.type === ur.Vehicle && e.state !== lr.Purchased;
                                        return {
                                            hasControls: Si.includes(e.type),
                                            hasAddToCompare: e.type === ur.Vehicle,
                                            hasPreview: t || e.type === ur.Style3d,
                                        };
                                    },
                                    { equals: ft },
                                ),
                                E = (0, Re.Om)(
                                    () =>
                                        Me(a.get(), (e) =>
                                            Object.assign({}, e, {
                                                divisions: ir(Me(e.divisions, (e) => Object.assign({}, e))),
                                            }),
                                        ),
                                    { equals: M },
                                ),
                                p = (0, Re.Om)(
                                    (e) => {
                                        const t = Te(E(), e);
                                        if (!t) throw new Error(`rank discount with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: M },
                                );
                            return Object.assign(
                                {},
                                r,
                                {
                                    computes: {
                                        productsLength: (0, Re.Om)(() => s().length),
                                        rankDiscountsLength: (0, Re.Om)(() => E().length),
                                        product: o,
                                        productsDividersConfig: i,
                                        priceConfig: u,
                                        selectedProductIndex: l,
                                        selectedProduct: c,
                                        hasSceneWrapper: d,
                                        hasVehicleDescription: m,
                                        hasLimitedQuantity: _,
                                        controlsConfig: g,
                                        rankDiscount: p,
                                    },
                                },
                                'mocks' === t && { internal: { rankDiscounts: a, computes: { products: s } } },
                            );
                        },
                        ({ externalModel: e }) => ({
                            markProductSeen: e.createCallback((e) => ({ cd: e }), 'onProductSeen'),
                            selectProduct: e.createCallback((e) => ({ cd: e }), 'onProductSelect'),
                            purchase: e.createCallbackNoArgs('onProductPurchase'),
                            restore: e.createCallbackNoArgs('onProductRestore'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            goToPreview: e.createCallbackNoArgs('onGoToPreview'),
                            goToCustomization: e.createCallbackNoArgs('onGoToCustomization'),
                            addToVehicleCompare: e.createCallbackNoArgs('onAddToVehicleCompare'),
                            mouseOver3dScene: e.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'onMouseOver3dScene',
                            ),
                            moveSpace: e.createCallback(
                                ({ dx: e, dy: t, dz: a }) => ({ dx: e, dy: t, dz: a }),
                                'onMoveSpace',
                            ),
                        }),
                    ),
                    Ni = yi[0],
                    xi = yi[1],
                    Ri = R.strings.comp7_ext.dataError,
                    ki = ({ className: e, classNames: t, title: a = Ri.title(), description: n = Ri.description() }) =>
                        r().createElement(
                            'div',
                            { className: b()('ErrorState_base_67', e) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        'ErrorState_titleContainer_9f',
                                        null == t ? void 0 : t.titleContainer,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()('ErrorState_alertIcon_8c', null == t ? void 0 : t.alertIcon),
                                }),
                                r().createElement(
                                    'div',
                                    { className: b()('ErrorState_title_e6', null == t ? void 0 : t.title) },
                                    a,
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: b()('ErrorState_description_4a', null == t ? void 0 : t.description) },
                                n,
                            ),
                        ),
                    Pi = ({
                        children: e,
                        moveSpace: t,
                        onMouseOver3dScene: a,
                        onDragStateChange: s,
                        isMoveSpaceEnabled: o = !0,
                    }) => {
                        const i = (0, n.useState)(!1),
                            u = i[0],
                            l = i[1],
                            c = (0, n.useState)({ x: 0, y: 0 }),
                            d = c[0],
                            m = c[1],
                            _ = (0, n.createRef)(),
                            g = (0, n.useCallback)(() => {
                                (l(!1), null == s || s(!1));
                            }, [s]);
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('mouseup', g),
                                () => window.removeEventListener('mouseup', g)
                            ),
                            [g],
                        );
                        const E = (0, n.useCallback)(
                                (e) => {
                                    if (!_.current) return;
                                    const t = _.current.getBoundingClientRect(),
                                        a = t.width,
                                        n = t.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= a - 1 ||
                                        e.clientY >= n - 1
                                    );
                                },
                                [_],
                            ),
                            p = (0, n.useCallback)(
                                (e) => {
                                    (e.preventDefault(),
                                        0 === e.button &&
                                            E(e) &&
                                            o &&
                                            (l(!0), null == s || s(!0), m({ x: e.clientX, y: e.clientY })));
                                },
                                [E, o, s],
                            ),
                            v = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), u)) {
                                        if (!E(e)) return;
                                        const a = e.clientX !== d.x ? e.clientX - d.x : 0,
                                            n = e.clientY !== d.y ? e.clientY - d.y : 0;
                                        (m({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: n, dz: 0 }));
                                    }
                                },
                                [E, u, d.x, d.y, t],
                            ),
                            h = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !o || !E(e))) return;
                                    const a = e.deltaY < 0;
                                    t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                                },
                                [E, o, t],
                            ),
                            f = (0, n.useCallback)(() => {
                                (l(!1), null == s || s(!1));
                            }, [s]),
                            C = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !0 });
                            }, [a]),
                            A = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !1 });
                            }, [a]);
                        return r().createElement(
                            'div',
                            {
                                ref: _,
                                className: b()(
                                    'SceneWrapper_base_99',
                                    u && 'SceneWrapper_base__down_65',
                                    !o && 'SceneWrapper_base__moveSpaceDisabled_fe',
                                ),
                                onMouseDown: p,
                                onMouseMove: v,
                                onMouseUp: f,
                                onWheel: h,
                                onMouseOver: C,
                                onMouseOut: A,
                            },
                            e,
                        );
                    },
                    Ii = {
                        base: 'CarouselScroll_base_91',
                        areaWrapper: 'CarouselScroll_areaWrapper_3f',
                        areaWrapper__hasScroll: 'CarouselScroll_areaWrapper__hasScroll_d9',
                        areaContent: 'CarouselScroll_areaContent_6d',
                        arrow: 'CarouselScroll_arrow_b9',
                        arrow__prev: 'CarouselScroll_arrow__prev_02',
                        arrow__next: 'CarouselScroll_arrow__next_df',
                        arrow__hidden: 'CarouselScroll_arrow__hidden_ad',
                        arrow__prevDisabled: 'CarouselScroll_arrow__prevDisabled_0c',
                        arrow__nextDisabled: 'CarouselScroll_arrow__nextDisabled_45',
                    },
                    Ti = ({ api: e, className: t, classNames: a, children: s }) => {
                        const i = e.events,
                            u = e.getBounds,
                            l = e.getWrapperSize,
                            c = e.getContainerSize,
                            d = e.applyStepTo,
                            m = e.animationScroll.scrollPosition,
                            _ = (0, n.useRef)(null),
                            g = (0, n.useState)('visible'),
                            E = g[0],
                            p = g[1],
                            v = Fr();
                        Sr(e);
                        const h = xt(() => {
                                v.run(() => {
                                    const e = u(),
                                        t = e[0],
                                        a = e[1],
                                        n = l(),
                                        r = c();
                                    if (n && r)
                                        return r <= n
                                            ? p('hidden')
                                            : m.goal === t
                                              ? p('prevDisabled')
                                              : m.goal === a
                                                ? p('nextDisabled')
                                                : p('visible');
                                });
                            }),
                            f = Ht((e) => d(e), 150, [d]),
                            C = f[0],
                            A = f[1],
                            D = (0, n.useCallback)(
                                (e) => () => {
                                    const t = e === kt.Next && 'prevDisabled' === E,
                                        a = e === kt.Prev && 'nextDisabled' === E;
                                    t || a || (o.O.sound.play.click(), C(e));
                                },
                                [E, C],
                            );
                        return (
                            Dr(() => {
                                h();
                            }),
                            Ar(() => {
                                h();
                            }, [h]),
                            (0, n.useEffect)(() => {
                                const e = Rt(200, h);
                                return (i.on('change', e), () => i.off('change', e));
                            }, [i, h]),
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', A, !0),
                                    () => document.removeEventListener('mouseup', A, !0)
                                ),
                                [A],
                            ),
                            r().createElement(
                                'div',
                                { className: b()(Ii.base, t), ref: _ },
                                r().createElement(
                                    Mr,
                                    {
                                        api: e,
                                        classNames: {
                                            wrapper: b()(
                                                Ii.areaWrapper,
                                                null == a ? void 0 : a.areaWrapper,
                                                'hidden' !== E && Ii.areaWrapper__hasScroll,
                                            ),
                                            content: b()(Ii.areaContent, null == a ? void 0 : a.areaContent),
                                        },
                                    },
                                    s,
                                ),
                                r().createElement('div', {
                                    className: b()(Ii.arrow, Ii.arrow__prev, Ii[`arrow__${E}`]),
                                    onMouseEnter: 'prevDisabled' === E ? void 0 : o.O.sound.play.highlight,
                                    onMouseDown: D(kt.Next),
                                    onMouseUp: A,
                                }),
                                r().createElement('div', {
                                    className: b()(Ii.arrow, Ii.arrow__next, Ii[`arrow__${E}`]),
                                    onMouseEnter: 'nextDisabled' === E ? void 0 : o.O.sound.play.highlight,
                                    onMouseDown: D(kt.Prev),
                                    onMouseUp: A,
                                }),
                            )
                        );
                    },
                    Li = {
                        '--pageContentWidth': '78vw',
                        base: 'ProductCard_base_8c',
                        base__selected: 'ProductCard_base__selected_d1',
                        background: 'ProductCard_background_f1',
                        backgroundGradient: 'ProductCard_backgroundGradient_84',
                        imageContainer: 'ProductCard_imageContainer_5c',
                        corners: 'ProductCard_corners_dd',
                        discountBackground: 'ProductCard_discountBackground_27',
                        stroke: 'ProductCard_stroke_bc',
                        base__purchased: 'ProductCard_base__purchased_c5',
                        corner: 'ProductCard_corner_6d',
                        corner__top: 'ProductCard_corner__top_94',
                        corner__bottom: 'ProductCard_corner__bottom_31',
                        corner__left: 'ProductCard_corner__left_10',
                        corner__right: 'ProductCard_corner__right_e4',
                        container: 'ProductCard_container_b7',
                        name: 'ProductCard_name_b9',
                        lock: 'ProductCard_lock_80',
                        bottomString: 'ProductCard_bottomString_f7',
                        notification: 'ProductCard_notification_b9',
                    },
                    Oi = R.images.comp7.gui.maps.icons.products,
                    Mi = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = xi().model.computes.product(e);
                        return r().createElement('div', {
                            className: b()('ProductCardImage_base_91', t),
                            style: { backgroundImage: `url('${Oi.$num(a.id)}')` },
                        });
                    }),
                    $i = {
                        base: 'VehicleName_base_cd',
                        base__24x24: 'VehicleName_base__24x24_c2',
                        base__24x24_metal: 'VehicleName_base__24x24_metal_e6',
                        base__48x48: 'VehicleName_base__48x48_ed',
                        base__64x64: 'VehicleName_base__64x64_43',
                        base__83x74: 'VehicleName_base__83x74_a7',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_9f',
                        base__60x54: 'VehicleName_base__60x54_e2',
                        vehicleType: 'VehicleName_vehicleType_93',
                    };
                let Wi;
                !(function (e) {
                    ((e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135'));
                })(Wi || (Wi = {}));
                const Hi = R.images.gui.maps.icons.vehicleTypes,
                    zi = (e) => {
                        switch (e) {
                            case Wi.x80:
                                return Hi.large;
                            case Wi.x83:
                                return Hi.big;
                            case Wi.x180:
                                return Hi.huge;
                            default:
                                return Hi.$dyn(`c_${e}`);
                        }
                    },
                    Ui = (0, n.memo)(
                        ({
                            name: e,
                            tier: t,
                            type: a,
                            size: n = Wi.x24Metal,
                            typeIconFolderPath: s = zi(n),
                            isPremium: o = !1,
                            className: i,
                            classNames: u,
                        }) => {
                            const l = `${na(a)}${o ? '_elite' : ''}`;
                            return r().createElement(
                                'div',
                                { className: b()($i.base, $i[`base__${n}`], i) },
                                r().createElement('div', { className: null == u ? void 0 : u.level }, (0, vi.HG)(t)),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            $i.vehicleTypeContainer,
                                            null == u ? void 0 : u.vehicleTypeContainer,
                                        ),
                                    },
                                    r().createElement('div', {
                                        className: b()($i.vehicleType, null == u ? void 0 : u.type),
                                        style: { backgroundImage: `url(${null == s ? void 0 : s.$dyn(l)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()($i.shortName, null == u ? void 0 : u.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    Gi = 'ProductCardName_base_71',
                    Vi = R.images.gui.maps.icons.flags.c_20x12,
                    qi = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = xi().model.computes.product(e),
                            n = F().mediaSize;
                        switch (a.type) {
                            case ur.Vehicle: {
                                const e = a.vehicleInfo,
                                    n = e.name,
                                    s = e.tier,
                                    o = e.type,
                                    i = e.nation,
                                    u = e.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: b()(Gi, t) },
                                    r().createElement('div', {
                                        className: 'ProductCardName_nation_b4',
                                        style: { backgroundImage: `url('${Vi.$dyn(i)}')` },
                                    }),
                                    r().createElement(Ui, { name: n, tier: s, type: o, isPremium: u }),
                                );
                            }
                            case ur.Style3d: {
                                const e = a.name,
                                    s = a.vehicleInfo,
                                    o = aa(R.strings.comp7_ext.products.style3d(), {
                                        name: aa(R.strings.comp7_ext.quotesWrapper(), { name: e }),
                                    });
                                return r().createElement(
                                    'div',
                                    { className: b()(Gi, 'ProductCardName_style3dContainer_f7', t) },
                                    r().createElement(Ia, {
                                        classMix: 'ProductCardName_overflowedName_6b',
                                        content: o,
                                        key: n,
                                    }),
                                    r().createElement(Fn, {
                                        text: R.strings.comp7_ext.forVehicle(),
                                        binding: { vehicleName: s.name },
                                        classMix: 'ProductCardName_style3dDescription_ec',
                                    }),
                                );
                            }
                            case ur.Reward:
                                return r().createElement(Fn, { text: a.reward.label, classMix: b()(Gi, t) });
                            default:
                                return (console.error(`Provide ProductCardName for ProductType:${a.type}`), null);
                        }
                    }),
                    ji = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let Qi, Yi, Xi;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Qi || (Qi = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(Yi || (Yi = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(Xi || (Xi = {})));
                const Ki = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: a,
                            type: n,
                            value: s,
                            discountValue: o,
                            showPlus: i,
                            isEnough: u = !0,
                            stockBackgroundName: l = Xi.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            r().createElement(
                                'span',
                                { className: b()(ji.base, ji[`base__${a}`], c) },
                                r().createElement(
                                    'span',
                                    {
                                        className: b()(
                                            ji.value,
                                            ji[`value__${n}`],
                                            !u && ji.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    i && s > 0 && '+',
                                    r().createElement(j, { value: s, format: n === Yi.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: b()(ji.icon, ji[`icon__${n}-${a}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: b()(
                                                ji.stock,
                                                o && ji.stock__indent,
                                                t && ji.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: ji.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    Zi = {
                        base: 'ProductCardPrice_base_62',
                        currencyValue: 'ProductCardPrice_currencyValue_c4',
                        discount: 'ProductCardPrice_discount_cf',
                        discount__freeXP: 'ProductCardPrice_discount__freeXP_f1',
                        discount__credits: 'ProductCardPrice_discount__credits_a1',
                        discount__gold: 'ProductCardPrice_discount__gold_39',
                        discount__xp: 'ProductCardPrice_discount__xp_35',
                        discount__crystal: 'ProductCardPrice_discount__crystal_fe',
                        discount__equipCoin: 'ProductCardPrice_discount__equipCoin_b5',
                        discountLine: 'ProductCardPrice_discountLine_45',
                    },
                    Ji = { value: Zi.currencyValue },
                    eu = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = xi().model,
                            n = a.computes.product(e).price,
                            s = a.computes.priceConfig(e).hasDiscount;
                        return r().createElement(
                            'div',
                            { className: b()(Zi.base, t) },
                            s &&
                                r().createElement(
                                    'div',
                                    { className: b()(Zi.discount, Zi[`discount__${n.name}`]) },
                                    r().createElement(j, { value: n.value }),
                                    r().createElement('div', { className: Zi.discountLine }),
                                ),
                            r().createElement(Ki, {
                                size: Qi.small,
                                type: n.name,
                                value: s ? n.discountValue : n.value,
                                classNames: Ji,
                            }),
                        );
                    }),
                    tu = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('ProductCardPurchased_base_e8', e) },
                            r().createElement('div', { className: 'ProductCardPurchased_icon_30' }),
                            r().createElement(
                                'div',
                                { className: 'ProductCardPurchased_text_1a' },
                                R.strings.comp7_ext.products.purchased(),
                            ),
                        ),
                    au = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('ProductCardReadyToRestore_base_70', e) },
                            r().createElement(Fn, { text: R.strings.comp7_ext.products.readyToRestore() }),
                        ),
                    nu = {
                        [ur.Vehicle]: 'comp_7_shop_carousel_click_tank',
                        [ur.Style3d]: 'comp_7_shop_carousel_click_style',
                        [ur.Reward]: 'comp_7_shop_carousel_click_module',
                        [ur.Base]: '',
                    },
                    ru = (0, De.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = xi(),
                            s = n.model,
                            i = n.controls,
                            u = s.computes.product(e),
                            l = u.id,
                            c = u.state,
                            d = u.isNew,
                            m = u.rank,
                            _ = u.type,
                            g = u.tooltipId,
                            E = s.computes.priceConfig(e).hasDiscount,
                            p = s.computes.selectedProductIndex(),
                            v = e === p;
                        return r().createElement(
                            Xn,
                            { args: { id: l, tooltipId: g }, ignoreShowDelay: !0 },
                            r().createElement(
                                'div',
                                {
                                    className: b()(Li.base, v && Li.base__selected, Li[`base__${c}`], t),
                                    onClick: () => {
                                        v ||
                                            (o.O.sound.play.click(),
                                            o.O.sound.play.sound(nu[_]),
                                            i.selectProduct(l),
                                            i.markProductSeen(l));
                                    },
                                },
                                r().createElement('div', {
                                    className: b()(Li.background, null == a ? void 0 : a.background),
                                    style: {
                                        backgroundImage: `url(${Ea(R.images.comp7.gui.maps.icons.products.cardsBackgrounds, m)})`,
                                    },
                                }),
                                r().createElement(
                                    'div',
                                    { className: Li.corners },
                                    r().createElement('div', {
                                        className: b()(
                                            Li.corner,
                                            Li.corner__top,
                                            Li.corner__left,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            Li.corner,
                                            Li.corner__top,
                                            Li.corner__right,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            Li.corner,
                                            Li.corner__bottom,
                                            Li.corner__left,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            Li.corner,
                                            Li.corner__bottom,
                                            Li.corner__right,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                ),
                                r().createElement('div', { className: b()(Li.stroke, null == a ? void 0 : a.stroke) }),
                                r().createElement(Mi, {
                                    index: e,
                                    className: b()(Li.imageContainer, null == a ? void 0 : a.imageContainer),
                                }),
                                r().createElement('div', { className: Li.backgroundGradient }),
                                E && r().createElement('div', { className: Li.discountBackground }),
                                d &&
                                    r().createElement(
                                        'div',
                                        { className: b()(Li.notification, null == a ? void 0 : a.notification) },
                                        R.strings.comp7_ext.products.newLabel(),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: Li.container },
                                    r().createElement(qi, { index: e, className: Li.name }),
                                    (() => {
                                        switch (c) {
                                            case lr.ReadyToRestore:
                                                return r().createElement(au, { className: Li.bottomString });
                                            case lr.Purchased:
                                                return r().createElement(tu, { className: Li.bottomString });
                                            default:
                                                return r().createElement(eu, { index: e, className: Li.bottomString });
                                        }
                                    })(),
                                ),
                                c === lr.Locked && r().createElement('div', { className: Li.lock }),
                            ),
                        );
                    }),
                    su = 'RankSection_dividerContainer_dc',
                    ou = 'RankSection_verticalDivider_dc',
                    iu = 'RankSection_horizontalDivider_8a',
                    uu = 'RankSection_peak_11',
                    lu = 'RankSection_peak__right_f6',
                    cu = 'RankSection_line_07',
                    du = ({ rank: e, seasonName: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: b()('RankSection_base_c0', a) },
                            r().createElement(
                                'div',
                                { className: su },
                                r().createElement('div', { className: ou }),
                                r().createElement(
                                    'div',
                                    { className: iu },
                                    r().createElement('div', { className: uu }),
                                    r().createElement('div', { className: cu }),
                                    r().createElement('div', { className: b()(uu, lu) }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'RankSection_centralContainer_81' },
                                r().createElement(Da, {
                                    rank: e,
                                    size: Ca.x40,
                                    seasonName: t,
                                    className: 'RankSection_rankImage_79',
                                }),
                                r().createElement(Fn, {
                                    classMix: 'RankSection_rankDescription_ba',
                                    text: R.strings.comp7_ext.products.rankAccess(),
                                    binding: {
                                        rank: r().createElement(
                                            'div',
                                            { className: 'RankSection_rankString_1f' },
                                            aa(R.strings.comp7_ext.quotesWrapper(), { name: pa(e) }),
                                        ),
                                    },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: b()(su, 'RankSection_dividerContainer__right_1c') },
                                r().createElement('div', { className: ou }),
                                r().createElement(
                                    'div',
                                    { className: iu },
                                    r().createElement('div', { className: uu }),
                                    r().createElement('div', { className: cu }),
                                    r().createElement('div', { className: b()(uu, lu) }),
                                ),
                            ),
                        ),
                    mu = { areaWrapper: 'Carousel_areaWrapper_81', areaContent: 'Carousel_areaContent_64' },
                    _u = (0, De.Pi)(({ className: e }) => {
                        const t = xi().model,
                            a = V().model,
                            s = F().mediaSize,
                            i = (0, n.useRef)(null),
                            u = t.computes.selectedProductIndex(),
                            l = t.computes.productsDividersConfig(),
                            c = ((e) => (e >= A.Medium ? 180 : e >= A.Small ? 150 : 120))(s),
                            d = ((e) => {
                                const t = (0, n.useMemo)(
                                    () => ({
                                        settings: {
                                            step: { type: 'proportional', factor: 8 },
                                            animationConfig: Object.assign({ tension: 120, friction: 20 }, e),
                                        },
                                    }),
                                    [e],
                                );
                                return Nr(t);
                            })(),
                            m = Fr(),
                            _ = s >= A.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
                            g = xt((e) => {
                                m.run(() => {
                                    if (i && i.current) {
                                        const t = i.current.offsetLeft - o.O.view.remToPx(c);
                                        d.applyScroll(t, e);
                                    }
                                });
                            });
                        return (
                            Dr(() => {
                                g();
                            }),
                            Ar(() => {
                                g({ immediate: !0, reset: !0 });
                            }, [g]),
                            r().createElement(
                                'div',
                                {
                                    style: {
                                        '--shopOffset': `${c}rem`,
                                        '--itemOffset': `${_.offset}rem`,
                                        '--groupOffset': 2 * _.offset + 'rem',
                                        '--itemWidth': `${_.width}rem`,
                                    },
                                },
                                r().createElement(
                                    Ti,
                                    { api: d, className: e, classNames: mu },
                                    r().createElement(
                                        'div',
                                        { className: 'Carousel_dividersSections_15' },
                                        l.recordsArray.map(([e, t]) =>
                                            r().createElement(
                                                'div',
                                                {
                                                    key: e,
                                                    className: 'Carousel_section_e6',
                                                    style: { width: _.width * t + _.offset * (t - 1) + 'rem' },
                                                },
                                                r().createElement(du, { rank: e, seasonName: a.season.name.get() }),
                                            ),
                                        ),
                                    ),
                                    Zt(t.computes.productsLength(), (e) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: b()(
                                                    'Carousel_scrollItem_1f',
                                                    l.groupIndexesSet.has(e) && 'Carousel_scrollItem__group_89',
                                                ),
                                                onMouseEnter: u === e ? void 0 : o.O.sound.play.highlight,
                                                ref: u === e ? i : void 0,
                                            },
                                            r().createElement('div', {
                                                className: b()(
                                                    'Carousel_selectedHighlight_15',
                                                    e === u && 'Carousel_selectedHighlight__active_84',
                                                ),
                                            }),
                                            r().createElement(ru, { index: e, className: 'Carousel_productCard_30' }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    gu = 'ProductControls_control_c3',
                    Eu = R.strings.comp7_ext.controls,
                    pu = { label: 'ProductControls_label_9f' },
                    vu = (0, De.Pi)(() => {
                        const e = F().mediaSize,
                            t = xi(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get(),
                            o = s.isVehiclesCompareEnabled,
                            i = s.vehicleCompareTooltipId,
                            u = a.computes.controlsConfig(),
                            l = u.hasAddToCompare,
                            c = u.hasPreview,
                            d = e >= A.Medium ? 'normal' : 'small';
                        return r().createElement(
                            r().Fragment,
                            null,
                            l &&
                                r().createElement(
                                    Xn,
                                    { args: { tooltipId: i }, isEnabled: !o },
                                    r().createElement(
                                        'div',
                                        { className: gu },
                                        r().createElement(
                                            pi,
                                            {
                                                type: 'compare',
                                                disabled: !o,
                                                onClick: n.addToVehicleCompare,
                                                size: d,
                                                classNames: pu,
                                            },
                                            Eu.compare(),
                                        ),
                                    ),
                                ),
                            c &&
                                r().createElement(
                                    pi,
                                    { type: 'preview', onClick: n.goToPreview, size: d, className: gu, classNames: pu },
                                    Eu.preview(),
                                ),
                        );
                    }),
                    hu = 'PeaksContainer_venzel_74',
                    bu = 'PeaksContainer_icon_98',
                    fu = 'PeaksContainer_line_5d',
                    Cu = ({ className: e, classNames: t, children: a }) => {
                        const s = n.Children.toArray(a).length;
                        return r().createElement(
                            'div',
                            { className: b()('PeaksContainer_base_dc', e) },
                            0 === s &&
                                r().createElement(
                                    'div',
                                    { className: b()(hu, null == t ? void 0 : t.venzel) },
                                    r().createElement('div', { className: b()(bu, null == t ? void 0 : t.icon) }),
                                    r().createElement('div', { className: b()(fu, null == t ? void 0 : t.line) }),
                                ),
                            s > 0 &&
                                r().createElement(
                                    'div',
                                    { className: b()('PeaksContainer_content_c3', null == t ? void 0 : t.content) },
                                    a,
                                ),
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        hu,
                                        null == t ? void 0 : t.venzel,
                                        'PeaksContainer_venzel__right_55',
                                    ),
                                },
                                r().createElement('div', { className: b()(bu, null == t ? void 0 : t.icon) }),
                                r().createElement('div', { className: b()(fu, null == t ? void 0 : t.line) }),
                            ),
                        );
                    },
                    Au = (0, De.Pi)(({ index: e }) => {
                        const t = xi().model,
                            a = t.root.get().maxAchievedRank,
                            n = t.computes.rankDiscount(e),
                            s = t.computes.selectedProduct(),
                            o = n.rank === a;
                        return n.rank === s.rank
                            ? r().createElement(
                                  'div',
                                  { className: b()('RankDiscount_rankAccessString_50') },
                                  r().createElement(Fn, { text: R.strings.comp7_ext.products.productAccess() }),
                              )
                            : n.value > 0
                              ? r().createElement(
                                    'div',
                                    { className: 'RankDiscount_valueContainer_45' },
                                    o && r().createElement('div', { className: 'RankDiscount_discountBackground_15' }),
                                    r().createElement(Fn, {
                                        text: R.strings.comp7_ext.products.discount(),
                                        binding: { discountPercentage: n.value },
                                    }),
                                )
                              : null;
                    }),
                    Du = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = xi().model,
                            n = V().model,
                            s = a.root.get(),
                            o = s.currentRank,
                            i = s.maxAchievedRank,
                            u = a.computes.rankDiscount(e),
                            l = u.rank === i,
                            c = !u.wasUnlocked;
                        return r().createElement(
                            'div',
                            { className: b()('RankDiscount_base_0c', t) },
                            u.rank === o &&
                                r().createElement(Vr, {
                                    className: 'RankDiscount_godRays_e6',
                                    src: String(R.videos.comp7.godRaysNew_130x130()),
                                    autoplay: !0,
                                    loop: !0,
                                }),
                            r().createElement(
                                hn,
                                {
                                    rank: u.rank,
                                    from: u.from,
                                    to: u.to,
                                    divisions: u.divisions,
                                    className: 'RankDiscount_rank_b9',
                                    ignoreShowDelay: !0,
                                },
                                r().createElement(Da, {
                                    seasonName: n.season.name.get(),
                                    size: Ca.x48,
                                    rank: u.rank,
                                    className: b()(c && 'RankDiscount_disabledRankEmblem_e7'),
                                }),
                            ),
                            c && r().createElement('div', { className: 'RankDiscount_lock_63' }),
                            r().createElement(
                                'div',
                                { className: b()('RankDiscount_footer_65', l && 'RankDiscount_footer__maxRank_e5') },
                                r().createElement(Au, { index: e }),
                            ),
                        );
                    }),
                    wu = (0, De.Pi)(({ className: e }) => {
                        const t = xi().model;
                        return r().createElement(
                            'div',
                            { className: b()('DiscountSection_base_01', e) },
                            r().createElement(Cu, null, R.strings.comp7_ext.products.discountSectionName()),
                            r().createElement(
                                'div',
                                { className: 'DiscountSection_discounts_1b' },
                                Zt(t.computes.rankDiscountsLength(), (e) =>
                                    r().createElement(Du, {
                                        key: e,
                                        index: e,
                                        className: 'DiscountSection_rankDiscount_79',
                                    }),
                                ),
                            ),
                            r().createElement(xn, {
                                text: R.strings.comp7_ext.products.discountDescription(),
                                classMix: 'DiscountSection_discountDescription_da',
                            }),
                        );
                    }),
                    Fu = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('InProgressSection_base_27', e) },
                            r().createElement(Cu, null),
                            r().createElement(
                                'div',
                                { className: 'InProgressSection_content_66' },
                                r().createElement('div', { className: 'InProgressSection_background_8d' }),
                                r().createElement('div', { className: 'InProgressSection_highlight_dd' }),
                                r().createElement(
                                    'div',
                                    { className: 'InProgressSection_state_de' },
                                    r().createElement(
                                        'div',
                                        { className: 'InProgressSection_inProgressString_23' },
                                        r().createElement('div', {
                                            className: 'InProgressSection_inProgressStringIcon_c7',
                                        }),
                                        R.strings.comp7_ext.products.inProgress(),
                                    ),
                                ),
                            ),
                            r().createElement(Cu, null),
                        ),
                    Bu = ({ name: e, className: t }) =>
                        r().createElement(
                            'span',
                            { className: t },
                            aa(R.strings.comp7_ext.quotesWrapper(), { name: e }),
                        ),
                    Su = {
                        base: 'VehicleRole_base_47',
                        base__22x22: 'VehicleRole_base__22x22_59',
                        iconContainer: 'VehicleRole_iconContainer_07',
                        icon: 'VehicleRole_icon_f1',
                    };
                let yu;
                !(function (e) {
                    e.x22 = '22x22';
                })(yu || (yu = {}));
                const Nu = R.images.gui.maps.icons.roleExp.roles,
                    xu = R.strings.menu.roleExp,
                    Ru = (0, n.memo)(
                        ({
                            role: e,
                            size: t = yu.x22,
                            roleIconFolderPath: a = Nu.$dyn(`c_${t}`),
                            className: n,
                            classNames: s,
                        }) => {
                            const o = na(e);
                            return r().createElement(
                                'div',
                                { className: b()(Su.base, Su[`base__${t}`], n) },
                                r().createElement(
                                    'div',
                                    { className: b()(Su.iconContainer, null == s ? void 0 : s.iconContainer) },
                                    r().createElement('div', {
                                        className: b()(Su.icon, null == s ? void 0 : s.icon),
                                        style: { backgroundImage: `url(${null == a ? void 0 : a.$dyn(o)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(Su.label, null == s ? void 0 : s.label) },
                                    r().createElement(Fn, {
                                        text: `${xu.roleName.$dyn(o)}`,
                                        binding: { groupName: xu.roleGroupName.$dyn(o) },
                                    }),
                                ),
                            );
                        },
                    ),
                    ku = 'NationFlag_nationFlag_99',
                    Pu = R.images.gui.maps.icons.eventBoards.flagsOverlay,
                    Iu = ({ nation: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: b()('NationFlag_base_1b', t) },
                            r().createElement('div', {
                                className: ku,
                                style: { backgroundImage: `url(${Pu.$dyn(e)})` },
                            }),
                            r().createElement('div', {
                                className: ku,
                                style: { backgroundImage: `url(${Pu.$dyn(e)})` },
                            }),
                        ),
                    Tu = 'NameSection_base_cc',
                    Lu = 'NameSection_productName_dd',
                    Ou = (e) => (e >= A.Medium ? Wi.x64 : Wi.x48),
                    Mu = R.strings.comp7_ext.products,
                    $u = { label: 'NameSection_vehicleRoleLabel_79' },
                    Wu = (0, De.Pi)(({ className: e }) => {
                        const t = xi().model,
                            a = F().mediaSize,
                            n = t.computes.selectedProduct(),
                            s = { id: n.id, tooltipId: n.tooltipId };
                        switch (n.type) {
                            case ur.Vehicle: {
                                const o = n.vehicleInfo,
                                    i = o.tier,
                                    u = o.name,
                                    l = o.type,
                                    c = o.isPremium,
                                    d = o.roleKey,
                                    m = o.nation,
                                    _ = o.vehicleCD;
                                return r().createElement(
                                    'div',
                                    { className: b()(Tu, e) },
                                    r().createElement(Iu, { nation: m, className: 'NameSection_nationFlag_16' }),
                                    r().createElement(
                                        'div',
                                        { className: 'NameSection_vehicleNameContainer_42' },
                                        r().createElement(
                                            Xn,
                                            { args: s },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Ui, {
                                                    tier: i,
                                                    name: u,
                                                    type: l,
                                                    isPremium: c,
                                                    size: Ou(a),
                                                    className: Lu,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        K,
                                        {
                                            contentId:
                                                R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                                            args: { vehicleCD: _ },
                                        },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(Ru, {
                                                role: d,
                                                className: 'NameSection_vehicleRole_a1',
                                                classNames: $u,
                                            }),
                                        ),
                                    ),
                                    t.computes.hasVehicleDescription() &&
                                        r().createElement(Fn, {
                                            text: n.description,
                                            classMix: 'NameSection_vehicleDescription_d3',
                                        }),
                                );
                            }
                            case ur.Style3d: {
                                const t = n.vehicleInfo,
                                    a = t.tier,
                                    o = t.name,
                                    i = t.type,
                                    u = t.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: b()(Tu, e) },
                                    r().createElement(
                                        Xn,
                                        { args: s },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(Fn, {
                                                text: Mu.style3d(),
                                                binding: { name: r().createElement(Bu, { name: n.name }) },
                                                classMix: Lu,
                                            }),
                                        ),
                                    ),
                                    r().createElement(Fn, {
                                        text: R.strings.comp7_ext.forVehicle(),
                                        binding: {
                                            vehicleName: r().createElement(Ui, {
                                                name: o,
                                                tier: a,
                                                type: i,
                                                isPremium: u,
                                                className: 'NameSection_style3dSubtitleVehicleText_dc',
                                            }),
                                        },
                                        classMix: 'NameSection_style3dSubtitle_3e',
                                    }),
                                );
                            }
                            case ur.Reward:
                                return r().createElement(
                                    'div',
                                    { className: b()(Tu, e) },
                                    r().createElement(
                                        Xn,
                                        { args: s },
                                        r().createElement('div', { className: Lu }, n.reward.label),
                                    ),
                                );
                            default:
                                return (console.error(`Provide NameSection case for ProductTypes:${n.type}`), null);
                        }
                    }),
                    Hu = {
                        base: 'PriceSection_base_6c',
                        container: 'PriceSection_container_e9',
                        priceContainer: 'PriceSection_priceContainer_e4',
                        price: 'PriceSection_price_81',
                        limitString: 'PriceSection_limitString_e1',
                        count: 'PriceSection_count_03',
                        separator: 'PriceSection_separator_e8',
                        accessContainer: 'PriceSection_accessContainer_3a',
                        rankBackground: 'PriceSection_rankBackground_f6',
                        accessBlock: 'PriceSection_accessBlock_33',
                        lock: 'PriceSection_lock_32',
                        accessString: 'PriceSection_accessString_c3',
                        rankString: 'PriceSection_rankString_b6',
                        currencyValue: 'PriceSection_currencyValue_c5',
                        discount: 'PriceSection_discount_e5',
                        discount__freeXP: 'PriceSection_discount__freeXP_8f',
                        discount__credits: 'PriceSection_discount__credits_e0',
                        discount__gold: 'PriceSection_discount__gold_33',
                        discount__xp: 'PriceSection_discount__xp_ce',
                        discount__crystal: 'PriceSection_discount__crystal_0f',
                        discount__equipCoin: 'PriceSection_discount__equipCoin_3b',
                        discountLine: 'PriceSection_discountLine_93',
                        buttonContainer: 'PriceSection_buttonContainer_b4',
                        button: 'PriceSection_button_ab',
                    },
                    zu = R.strings.comp7_ext.products,
                    Uu = (0, De.Pi)(() => {
                        const e = xi(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.selectedProduct(),
                            i = t.computes.priceConfig(n).isEnough,
                            u = () => {
                                (o.O.sound.play.sound(R.sounds.comp_7_shop_purchase_preview()), a.purchase());
                            };
                        switch (s.state) {
                            case lr.Locked:
                                return r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Hu.separator }),
                                    r().createElement(
                                        'div',
                                        { className: Hu.accessContainer },
                                        r().createElement('div', {
                                            className: Hu.rankBackground,
                                            style: {
                                                backgroundImage: `url(${Ea(R.images.comp7.gui.maps.icons.products.accessBackgrounds, s.rank)})`,
                                            },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Hu.accessBlock },
                                            r().createElement('div', { className: Hu.lock }),
                                            r().createElement(Fn, {
                                                text: R.strings.comp7_ext.products.message.rankAccess(),
                                                binding: {
                                                    rank: r().createElement(
                                                        'span',
                                                        { className: Hu.rankString },
                                                        va(s.rank),
                                                    ),
                                                },
                                                classMix: Hu.accessString,
                                            }),
                                        ),
                                    ),
                                );
                            case lr.ReadyToPurchase:
                                return r().createElement(
                                    te,
                                    { isEnabled: !i, body: zu.message.notEnough() },
                                    r().createElement(
                                        'div',
                                        { className: Hu.buttonContainer },
                                        r().createElement(
                                            bt,
                                            { type: 'main', onClick: u, mixClass: Hu.button, disabled: !i },
                                            zu.actions.buy(),
                                        ),
                                    ),
                                );
                            default:
                                return (
                                    console.error(
                                        `ActionsContainer in PriceSection was called for unappropriated state ${s.state}`,
                                    ),
                                    null
                                );
                        }
                    }),
                    Gu = { value: Hu.currencyValue },
                    Vu = (0, De.Pi)(({ className: e }) => {
                        const t = xi().model,
                            a = t.computes.selectedProduct(),
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.priceConfig(n),
                            o = s.hasDiscount,
                            i = s.isEnough;
                        return r().createElement(
                            'div',
                            { className: b()(Hu.base, e) },
                            r().createElement(Cu, null, R.strings.comp7_ext.products.priceSectionName()),
                            r().createElement(
                                'div',
                                { className: Hu.container },
                                r().createElement(
                                    'div',
                                    { className: Hu.priceContainer },
                                    r().createElement(
                                        'div',
                                        { className: Hu.price },
                                        o &&
                                            r().createElement(
                                                'div',
                                                { className: b()(Hu.discount, Hu[`discount__${a.price.name}`]) },
                                                r().createElement(j, { value: a.price.value }),
                                                r().createElement('div', { className: Hu.discountLine }),
                                            ),
                                        r().createElement(Ki, {
                                            size: Qi.large,
                                            type: a.price.name,
                                            value: o ? a.price.discountValue : a.price.value,
                                            isEnough: i,
                                            classNames: Gu,
                                        }),
                                    ),
                                    t.computes.hasLimitedQuantity() &&
                                        r().createElement(
                                            'div',
                                            { className: Hu.limitString },
                                            r().createElement(Fn, {
                                                text: R.strings.comp7_ext.products.limitedQuantitySeason(),
                                                binding: {
                                                    count: r().createElement(
                                                        'span',
                                                        { className: Hu.count },
                                                        a.limitedQuantity,
                                                    ),
                                                },
                                            }),
                                        ),
                                ),
                                r().createElement(Uu, null),
                            ),
                        );
                    }),
                    qu = 'PurchasedSection_buttonContainer_5b',
                    ju = 'PurchasedSection_button_94',
                    Qu = R.strings.comp7_ext.products,
                    Yu = (0, De.Pi)(() => {
                        const e = xi(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProduct();
                        switch (n.type) {
                            case ur.Vehicle:
                                return n.canGoToHangar
                                    ? r().createElement(
                                          'div',
                                          { className: qu },
                                          r().createElement(
                                              bt,
                                              { onClick: a.goToHangar, mixClass: ju },
                                              Qu.actions.toHangar(),
                                          ),
                                      )
                                    : null;
                            case ur.Style3d: {
                                const e = !n.canGoToCustomization;
                                return r().createElement(
                                    te,
                                    {
                                        isEnabled: e,
                                        header: Qu.customizationUnavailable.title(),
                                        body: Qu.customizationUnavailable.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: qu },
                                        r().createElement(
                                            bt,
                                            { onClick: a.goToCustomization, mixClass: ju, disabled: e },
                                            Qu.actions.toCustomization(),
                                        ),
                                    ),
                                );
                            }
                            default:
                                return null;
                        }
                    }),
                    Xu = R.strings.comp7_ext.products,
                    Ku = (0, De.Pi)(({ className: e }) => {
                        const t = xi().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: b()('PurchasedSection_base_cd', e) },
                            r().createElement(Cu, null),
                            r().createElement(
                                'div',
                                { className: 'PurchasedSection_content_47' },
                                r().createElement('div', { className: 'PurchasedSection_background_34' }),
                                r().createElement('div', { className: 'PurchasedSection_highlight_91' }),
                                r().createElement(
                                    'div',
                                    { className: 'PurchasedSection_state_a8' },
                                    r().createElement(
                                        'div',
                                        { className: 'PurchasedSection_purchasedString_11' },
                                        r().createElement('div', {
                                            className: 'PurchasedSection_purchasedStringIcon_53',
                                        }),
                                        R.strings.comp7_ext.products.purchased(),
                                    ),
                                    t.type === ur.Reward &&
                                        r().createElement(
                                            'div',
                                            { className: 'PurchasedSection_quantityOfferString_a3' },
                                            aa(Xu.limitedQuantitySeason(), { count: t.limitedQuantity }),
                                        ),
                                ),
                            ),
                            r().createElement(Cu, null),
                            r().createElement(Yu, null),
                        );
                    }),
                    Zu = (0, De.Pi)(({ className: e }) => {
                        const t = xi().controls;
                        return r().createElement(
                            'div',
                            { className: b()('ReadyToRestoreSection_base_6c', e) },
                            r().createElement(Cu, null),
                            r().createElement(
                                'div',
                                { className: 'ReadyToRestoreSection_content_0a' },
                                r().createElement(
                                    'div',
                                    { className: 'ReadyToRestoreSection_description_ef' },
                                    r().createElement(Fn, {
                                        text: R.strings.comp7_ext.products.readyToRestoreDescription(),
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'ReadyToRestoreSection_buttonContainer_9a' },
                                    r().createElement(
                                        bt,
                                        {
                                            type: 'primary',
                                            onClick: () => {
                                                (o.O.sound.play.sound(R.sounds.comp_7_shop_purchase_preview()),
                                                    t.restore());
                                            },
                                            mixClass: 'ReadyToRestoreSection_button_81',
                                        },
                                        R.strings.comp7_ext.products.actions.restore(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ju = 'ProductDetails_section_42',
                    el = [lr.Locked, lr.ReadyToPurchase],
                    tl = (0, De.Pi)(({ className: e }) => {
                        const t = xi().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: b()('ProductDetails_base_6b', e) },
                            r().createElement(Wu, { className: Ju }),
                            el.includes(t.state) && r().createElement(wu, { className: Ju }),
                            (() => {
                                switch (t.state) {
                                    case lr.Purchased:
                                        return r().createElement(Ku, { className: Ju });
                                    case lr.InProgress:
                                        return r().createElement(Fu, { className: Ju });
                                    case lr.ReadyToRestore:
                                        return r().createElement(Zu, { className: Ju });
                                    default:
                                        return r().createElement(Vu, { className: Ju });
                                }
                            })(),
                        );
                    }),
                    al = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
                    nl = {
                        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
                        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        config: { duration: 100 },
                    };
                function rl() {
                    return (
                        (rl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        rl.apply(this, arguments)
                    );
                }
                const sl = (e) => (e >= A.Large ? yo.S600x450 : e >= A.Small ? yo.S400x300 : yo.S296x222),
                    ol = (0, De.Pi)(() => {
                        const e = xi().model,
                            t = F().mediaSize,
                            a = (0, Ze.useSpring)(gt),
                            s = e.computes.selectedProduct(),
                            o = e.computes.controlsConfig().hasControls,
                            i = (0, Ze.useSpring)(() => al),
                            u = i[0],
                            l = i[1],
                            c = (0, Ze.useSpring)(() => nl),
                            d = c[0],
                            m = c[1];
                        return (
                            (0, n.useLayoutEffect)(() => {
                                (m.set(nl.from), l.set(al.from));
                            }, [m, l, s.id, s.state]),
                            (0, n.useEffect)(() => {
                                (m.start(Object.assign({}, nl, { delay: 300 })),
                                    l.start(Object.assign({}, al, { delay: 100 })));
                            }, [m, l, s.id, s.state]),
                            r().createElement(
                                r().Fragment,
                                null,
                                s.type === ur.Reward &&
                                    r().createElement(
                                        'div',
                                        { className: 'ShopPage_rewardContainer_4f' },
                                        r().createElement('div', { className: 'ShopPage_rewardHighlight_21' }),
                                        r().createElement(
                                            Ze.animated.div,
                                            { style: u },
                                            r().createElement(
                                                qo,
                                                rl({}, ri({ reward: s.reward, size: sl(t) }), {
                                                    tooltipArgs: Uo({ tooltipId: s.tooltipId, id: s.id }),
                                                    className: 'ShopPage_rewardBase_69',
                                                }),
                                            ),
                                        ),
                                    ),
                                o &&
                                    r().createElement(
                                        Ze.animated.div,
                                        { style: d, className: 'ShopPage_controls_1c' },
                                        r().createElement(vu, { key: s.id }),
                                    ),
                                r().createElement(
                                    Ze.animated.div,
                                    { style: u, className: 'ShopPage_mainContainer_1f' },
                                    r().createElement(tl, { className: 'ShopPage_details_9b' }),
                                ),
                                r().createElement(
                                    Ze.animated.div,
                                    { style: a },
                                    r().createElement(_u, { className: 'ShopPage_carousel_93' }),
                                ),
                            )
                        );
                    }),
                    il = R.strings.comp7_ext.page.heading,
                    ul = { activeSeasonState: 'ShopPage_activeSeasonState_48' },
                    ll = { [Fi.Initial]: () => r().createElement('div', null), [Fi.Success]: ol, [Fi.Error]: ki },
                    cl = (0, De.Pi)(() => {
                        const e = (0, Ze.useSpring)(gt),
                            t = xi(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().shopState,
                            o = a.computes.hasSceneWrapper(),
                            i = ll[s];
                        return i
                            ? r().createElement(
                                  'div',
                                  { className: 'ShopPage_base_c6' },
                                  o &&
                                      r().createElement(
                                          'div',
                                          { className: 'ShopPage_sceneWrapper_9d' },
                                          r().createElement(Pi, {
                                              moveSpace: n.moveSpace,
                                              onMouseOver3dScene: n.mouseOver3dScene,
                                          }),
                                      ),
                                  s !== Fi.Error && r().createElement('div', { className: 'ShopPage_vignette_ad' }),
                                  r().createElement(
                                      'div',
                                      { className: 'ShopPage_headersWrapper_c7' },
                                      r().createElement(mt, { className: be }, il.shop()),
                                      r().createElement(tr, { classNames: ul }),
                                  ),
                                  r().createElement(
                                      Ze.animated.div,
                                      { className: 'ShopPage_contentWrapper_c2', style: e },
                                      r().createElement(i, null),
                                  ),
                              )
                            : (console.error('Unreachable code: ShopPage.tsx'), null);
                    });
                let dl, ml;
                (!(function (e) {
                    ((e.LOCKED_BY_NO_X_VEHICLES = 'lockedByNoXVehicles'),
                        (e.LOCKED_BY_INACTIVE_SEASON = 'lockedByInactiveSeason'),
                        (e.LOCKED_BY_PREVIOUS_QUEST = 'lockedByPreviousQuest'),
                        (e.ACTIVE = 'active'),
                        (e.COMPLETED = 'completed'));
                })(dl || (dl = {})),
                    (function (e) {
                        ((e[(e.Default = 0)] = 'Default'),
                            (e[(e.Active = 1)] = 'Active'),
                            (e[(e.Claimed = 2)] = 'Claimed'));
                    })(ml || (ml = {})));
                const _l = [dl.LOCKED_BY_NO_X_VEHICLES, dl.LOCKED_BY_INACTIVE_SEASON, dl.LOCKED_BY_PREVIOUS_QUEST],
                    gl = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    questCards: e.array('questCards'),
                                    progressPoints: e.array('progressPoints'),
                                },
                                a = (0, Re.Om)(
                                    (e) => {
                                        const a = 5 * e,
                                            n = [...He(t.questCards.get(), a, a + 5 - 1)];
                                        if (5 !== n.length)
                                            throw new Error(`Unexpected weekly list length: ${n.length} expected: 5`);
                                        return n;
                                    },
                                    { equals: M },
                                ),
                                n = (0, Re.Om)(
                                    (e, t) => {
                                        const n = Te(a(e), t);
                                        if (!n) throw new Error(`Unexpected card index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: M },
                                ),
                                r = (0, Re.Om)(
                                    (e, t, a) => {
                                        const r = n(e, t).rewards;
                                        return si({ rewards: r, size: a });
                                    },
                                    { equals: M },
                                ),
                                s = (0, Re.Om)((e, t) => _l.includes(n(e, t).state));
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: (0, Re.Om)((e) => a(e).length),
                                    questCard: n,
                                    questRewards: r,
                                    isQuestLocked: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            animationStart: e.createCallbackNoArgs('onAnimationStart'),
                            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                            goToRewardsSelection: e.createCallbackNoArgs('onGoToRewardsSelection'),
                        }),
                    ),
                    El = gl[0],
                    pl = gl[1],
                    vl = () => {};
                let hl;
                (q.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(hl || (hl = {})),
                    q.Sw.instance);
                const bl = (e = 0, t, a = 0, r = vl) => {
                    const s = (0, n.useState)(e),
                        o = s[0],
                        i = s[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (e > 0) {
                                i(e);
                                const n = Date.now(),
                                    s = setInterval(
                                        () => {
                                            const t = e - Math.floor((Date.now() - n) / 1e3);
                                            null !== a && t <= a ? (i(a), r && r(), clearInterval(s)) : i(t);
                                        },
                                        1e3 * (t || (e > 120 ? 60 : 1)),
                                    );
                                return () => {
                                    clearInterval(s);
                                };
                            }
                        }, [e, t, a, r]),
                        o
                    );
                };
                let fl, Cl;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(fl || (fl = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(Cl || (Cl = {})));
                const Al = (e) => e.toString().padStart(2, '0'),
                    Dl = R.images.gui.maps.icons.components.countdown,
                    wl = (e, t) => {
                        const a = 2 === t ? Dl.big : Dl;
                        switch (e) {
                            case fl.Timer:
                                return a.clock();
                            case fl.Countdown:
                                return a.hourglass();
                            case fl.Cooldown:
                                return a.lock();
                        }
                    },
                    Fl = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = fl.Timer,
                            style: a = Cl.Description,
                            onTimeReached: s,
                            refreshRate: i,
                            className: u = '',
                            classNames: l = {},
                        }) => {
                            const c = null != i ? i : a !== Cl.Description ? 1 : void 0,
                                d = bl(e, c),
                                m = (() => {
                                    const e = (0, n.useState)(o.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(o.O.view.getScale());
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
                            s && s[d] && s[d]();
                            const _ = ((e, t) => {
                                switch (t) {
                                    case Cl.Description:
                                        return ((e, t = !0) =>
                                            e.days > 7 && t
                                                ? ta(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? ta(R.strings.common.duration.days(), { days: e.days })
                                                      : `${ta(R.strings.common.duration.days(), { days: e.days })} ${ta(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? ta(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${ta(R.strings.common.duration.hours(), { hours: e.hours })} ${ta(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : ta(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Cl.Short:
                                        return `${Al(e.minutes)}:${Al(e.seconds)}`;
                                    case Cl.Long:
                                        return `${Al(e.hours)}:${Al(e.minutes)}:${Al(e.seconds)}`;
                                    case Cl.Extended:
                                        return `${ta(R.strings.common.duration.days(), { days: e.days })} | ${Al(e.hours)}:${Al(e.minutes)}:${Al(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / On);
                                    t -= a * On;
                                    const n = Math.trunc(t / Ln);
                                    t -= n * Ln;
                                    const r = Math.trunc(t / 60);
                                    return ((t -= 60 * r), { days: a, hours: n, minutes: r, seconds: t });
                                })(d),
                                a,
                            );
                            return r().createElement(
                                'div',
                                { className: b()('Countdown_base_fe', u) },
                                t !== fl.None &&
                                    r().createElement('div', {
                                        className: b()('Countdown_icon_8b', l.icon),
                                        style: { backgroundImage: `url('${wl(t, m)}')` },
                                    }),
                                r().createElement('div', { className: b()('Countdown_description_8d', l.text) }, _),
                            );
                        },
                    ),
                    Bl = 'CountdownStatus_text_74',
                    Sl = R.strings.comp7_ext.weeklyQuests.CountdownStatus,
                    yl = { text: 'CountdownStatus_timer_04', icon: 'CountdownStatus_icon_50' },
                    Nl = (0, De.Pi)(({ className: e }) => {
                        const t = pl().model.root.get().timeToNewQuests;
                        return r().createElement(
                            'div',
                            { className: b()('CountdownStatus_base_1f', e) },
                            r().createElement(
                                'div',
                                { className: 'CountdownStatus_content_a0' },
                                r().createElement('div', { className: 'CountdownStatus_shine_05' }),
                                -1 === t
                                    ? r().createElement('div', { className: Bl }, Sl.done())
                                    : r().createElement(Fn, {
                                          text: Sl.active(5),
                                          binding: {
                                              value: 5,
                                              countdown: r().createElement(Fl, {
                                                  duration: t,
                                                  className: 'CountdownStatus_countdown_7d',
                                                  classNames: yl,
                                              }),
                                          },
                                          classMix: Bl,
                                      }),
                            ),
                        );
                    }),
                    xl = R.strings.comp7_ext.weeklyQuests.card.progress,
                    Rl = ({ current: e, total: t, isDisabled: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()('Progress_base_49', n) },
                            r().createElement(Fn, {
                                classMix: 'Progress_counter_3a',
                                text: xl.counter(),
                                binding: {
                                    current: r().createElement(
                                        'div',
                                        { className: 'Progress_current_03' },
                                        r().createElement(j, { value: e }),
                                    ),
                                    total: r().createElement(j, { value: t }),
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: 'Progress_progressBar_6d' },
                                r().createElement(Ss, { size: Kr.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    kl = {
                        '--pageContentWidth': '78vw',
                        base: 'QuestCard_base_6e',
                        highlightContainer: 'QuestCard_highlightContainer_16',
                        highlight: 'QuestCard_highlight_c9',
                        glowContainer: 'QuestCard_glowContainer_18',
                        glow: 'QuestCard_glow_88',
                        glowAppearance: 'QuestCard_glowAppearance_07',
                        icon: 'QuestCard_icon_15',
                        base__completed: 'QuestCard_base__completed_46',
                        base__locked: 'QuestCard_base__locked_f3',
                        content: 'QuestCard_content_73',
                        progress: 'QuestCard_progress_e2',
                        description: 'QuestCard_description_05',
                        reward: 'QuestCard_reward_19',
                        status: 'QuestCard_status_40',
                        fadeIn: 'QuestCard_fadeIn_d9',
                        fadeInThreeQuarters: 'QuestCard_fadeInThreeQuarters_45',
                        fadeInHalf: 'QuestCard_fadeInHalf_84',
                        fadeOut: 'QuestCard_fadeOut_94',
                        fadeInWithScale: 'QuestCard_fadeInWithScale_c1',
                        slideUp: 'QuestCard_slideUp_b6',
                        scale: 'QuestCard_scale_a6',
                        raysAppearance: 'QuestCard_raysAppearance_2e',
                        rotate: 'QuestCard_rotate_34',
                        'reverse-rotate': 'QuestCard_reverse-rotate_11',
                        highlightAppearance: 'QuestCard_highlightAppearance_77',
                        blink: 'QuestCard_blink_73',
                        slideUpIn: 'QuestCard_slideUpIn_86',
                    },
                    Pl = {
                        base: 'Status_base_58',
                        base__locked: 'Status_base__locked_0c',
                        icon: 'Status_icon_25',
                        base__completed: 'Status_base__completed_63',
                        text: 'Status_text_2b',
                    },
                    Il = R.strings.comp7_ext.weeklyQuests.card,
                    Tl = (0, De.Pi)(({ weeklyIndex: e, index: t, className: a }) => {
                        const n = pl().model,
                            s = n.computes.questCard(e, t).state,
                            o = n.computes.isQuestLocked(e, t);
                        return r().createElement(
                            te,
                            {
                                isEnabled: o,
                                header: Il.statusLockedTooltip.header(),
                                body: String(Il.statusLockedTooltip.body.$dyn(s)),
                            },
                            r().createElement(
                                'div',
                                { className: b()(Pl.base, o ? Pl.base__locked : Pl[`base__${s}`], a) },
                                r().createElement('div', { className: Pl.icon }),
                                r().createElement(
                                    'div',
                                    { className: Pl.text },
                                    o ? Il.status.locked() : Il.status.$dyn(s),
                                ),
                            ),
                        );
                    }),
                    Ll = (e) => (_l.includes(e) ? 'locked' : e),
                    Ol = (0, De.Pi)(({ weeklyIndex: e, index: t }) => {
                        const a = pl().model,
                            n = a.computes.questCard(e, t),
                            s = n.state,
                            o = n.currentProgress,
                            i = n.totalProgress,
                            u = n.description,
                            l = n.iconKey,
                            c = F().mediaSize > A.Large ? yo.Big : yo.Small;
                        return r().createElement(
                            'div',
                            { className: b()(kl.base, kl[`base__${Ll(s)}`]) },
                            s === dl.ACTIVE &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: kl.highlightContainer },
                                        r().createElement('div', { className: kl.highlight }),
                                    ),
                                    r().createElement(jr, {
                                        className: kl.glowContainer,
                                        classNames: { glow: kl.glow },
                                    }),
                                ),
                            r().createElement('div', {
                                className: kl.icon,
                                style: { backgroundImage: `url(R.images.comp7.gui.maps.icons.weekly_quests.${l})` },
                            }),
                            r().createElement(
                                'div',
                                { className: kl.content },
                                r().createElement(Rl, {
                                    current: o,
                                    total: i,
                                    isDisabled: s !== dl.ACTIVE,
                                    className: kl.progress,
                                }),
                                r().createElement('div', { className: kl.description }, u),
                                r().createElement(Yo, {
                                    data: a.computes.questRewards(e, t, c),
                                    size: c,
                                    rewardItemClassMix: kl.reward,
                                }),
                            ),
                            r().createElement(Tl, { weeklyIndex: e, index: t, className: kl.status }),
                        );
                    }),
                    Ml = {
                        base: 'Separator_base_b5',
                        line: 'Separator_line_e9',
                        line__top: 'Separator_line__top_f0',
                        line__bottom: 'Separator_line__bottom_42',
                        shine: 'Separator_shine_17',
                        shine__sideRight: 'Separator_shine__sideRight_3c',
                        arrowContainer: 'Separator_arrowContainer_00',
                        arrow: 'Separator_arrow_ab',
                        base__highlighted: 'Separator_base__highlighted_ea',
                    };
                let $l;
                !(function (e) {
                    ((e.Normal = 'normal'),
                        (e.Highlighted = 'highlighted'),
                        (e.SideLeft = 'sideLeft'),
                        (e.SideRight = 'sideRight'));
                })($l || ($l = {}));
                const Wl = ({ type: e }) =>
                        e === $l.SideLeft || e === $l.SideRight
                            ? r().createElement(
                                  'div',
                                  { className: Ml.line },
                                  r().createElement('div', { className: b()(Ml.shine, Ml[`shine__${e}`]) }),
                              )
                            : r().createElement(
                                  'div',
                                  { className: b()(Ml.base, Ml[`base__${e}`]) },
                                  r().createElement('div', { className: b()(Ml.line, Ml.line__top) }),
                                  r().createElement(
                                      'div',
                                      { className: Ml.arrowContainer },
                                      r().createElement('div', { className: Ml.arrow }),
                                  ),
                                  r().createElement('div', { className: b()(Ml.line, Ml.line__bottom) }),
                              ),
                    Hl = (0, De.Pi)(({ weeklyIndex: e, className: t }) => {
                        const a = pl().model.computes;
                        return r().createElement(
                            'div',
                            { className: b()('WeeklyList_base_b9', t) },
                            r().createElement(Wl, { type: $l.SideLeft }),
                            Zt(5, (t) =>
                                r().createElement(
                                    n.Fragment,
                                    { key: t },
                                    t > 0 &&
                                        r().createElement(Wl, {
                                            type: a.isQuestLocked(e, t) ? $l.Normal : $l.Highlighted,
                                        }),
                                    r().createElement(Ol, { weeklyIndex: e, index: t }),
                                ),
                            ),
                            r().createElement(Wl, { type: $l.SideRight }),
                        );
                    }),
                    zl = { wrapper: 'QuestsList_contentWrapper_0a', content: 'QuestsList_scrollContent_e3' },
                    Ul = (0, De.Pi)(({ className: e }) => {
                        const t = (0, n.useState)(!1),
                            a = t[0],
                            s = t[1],
                            o = pl().model,
                            i = Math.floor(o.questCards.get().length / 5),
                            u = i > 1,
                            l = Nr();
                        return (
                            Sr(l),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    const e = l.getBounds()[1];
                                    s(e - l.animationScroll.scrollPosition.get() < 20);
                                };
                                return (
                                    l.events.on('change', e),
                                    l.events.on('resizeHandled', e),
                                    l.events.on('recalculateContent', e),
                                    () => {
                                        (l.events.off('change', e),
                                            l.events.off('resizeHandled', e),
                                            l.events.off('recalculateContent', e));
                                    }
                                );
                            }, [l]),
                            r().createElement(
                                'div',
                                { className: b()('QuestsList_base_56', e) },
                                r().createElement(
                                    Mr,
                                    { api: l, className: 'QuestsList_scrollWrapper_86', classNames: zl },
                                    Zt(i, (e) =>
                                        r().createElement(Hl, {
                                            weeklyIndex: e,
                                            key: e,
                                            className: 'QuestsList_weeklyList_eb',
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'QuestsList_countdownStatus_e8',
                                            (a || !u) && 'QuestsList_countdownStatus__show_3a',
                                        ),
                                    },
                                    r().createElement(Nl, null),
                                ),
                            )
                        );
                    }),
                    Gl = { from: { opacity: 0 }, to: { opacity: 0.6 }, delay: 500, config: { duration: 300 } },
                    Vl = R.strings.comp7_ext.claimRewards,
                    ql = ({ isDisabled: e, onClick: t, children: a, className: n }) => {
                        const s = (0, Ze.useSpring)(Gl);
                        return r().createElement(
                            te,
                            { isEnabled: e, body: Vl.rewardsUnavailable() },
                            r().createElement(
                                'div',
                                { className: b()('ClaimRewardsButton_base_67', n) },
                                !e &&
                                    r().createElement(Ze.animated.div, {
                                        className: 'ClaimRewardsButton_light_69',
                                        style: s,
                                    }),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'ClaimRewardsButton_inner_ec',
                                            e && 'ClaimRewardsButton_inner__disabled_cd',
                                        ),
                                    },
                                    r().createElement(
                                        bt,
                                        {
                                            type: pt.ghost,
                                            size: vt.small,
                                            disabled: e,
                                            onClick: t,
                                            mixClass: b()(
                                                'ClaimRewardsButton_button_47',
                                                e && 'ClaimRewardsButton_button__disabled_71',
                                            ),
                                        },
                                        !e &&
                                            r().createElement('div', {
                                                className: 'ClaimRewardsButton_buttonBlink_7f',
                                            }),
                                        r().createElement(
                                            'div',
                                            { className: 'ClaimRewardsButton_buttonText_72' },
                                            a || Vl.button(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    jl = {
                        base: 'AnimatedReward_base_31',
                        claimRewardsButton: 'AnimatedReward_claimRewardsButton_2c',
                        shine: 'AnimatedReward_shine_28',
                    };
                function Ql() {
                    return (
                        (Ql =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ql.apply(this, arguments)
                    );
                }
                const Yl = {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 600,
                        config: { duration: 300 },
                        onStart: () => {
                            o.O.sound.play.sound(R.sounds.bp_pick_up_award());
                        },
                    },
                    Xl = ({ reward: e, onClick: t, isDisabled: a, className: n }) => {
                        const s = (0, Ze.useSpring)(Yl);
                        return r().createElement(
                            'div',
                            { className: b()(jl.base, n) },
                            r().createElement(Ze.animated.div, { className: jl.shine, style: s }),
                            r().createElement(
                                'div',
                                { className: jl.claimRewardsButton },
                                r().createElement(ql, { isDisabled: a, onClick: t }),
                            ),
                            r().createElement(qo, Ql({}, e, { className: jl.reward })),
                        );
                    },
                    Kl = 'FinalRewards_reward_3d';
                function Zl() {
                    return (
                        (Zl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Zl.apply(this, arguments)
                    );
                }
                const Jl = (0, De.Pi)(({ rewards: e, className: t }) => {
                        const a = pl(),
                            n = a.model,
                            s = a.controls,
                            o = n.root.get().choiceRewardState,
                            i = Ie().model.claimRewardsModel.get().isDisabled;
                        return r().createElement(
                            'div',
                            { className: b()('FinalRewards_base_ef', t) },
                            Me(e, (e, t) =>
                                r().createElement(
                                    'div',
                                    { key: t, className: 'FinalRewards_wrapper_8d' },
                                    'deluxe_gift' === e.name && o === ml.Active
                                        ? r().createElement(Xl, {
                                              reward: e,
                                              onClick: s.goToRewardsSelection,
                                              isDisabled: i,
                                              className: Kl,
                                          })
                                        : r().createElement(
                                              qo,
                                              Zl({}, e, {
                                                  className: b()(
                                                      Kl,
                                                      o === ml.Claimed && 'FinalRewards_reward__achieved_5a',
                                                  ),
                                              }),
                                          ),
                                ),
                            ),
                            o === ml.Claimed && r().createElement('div', { className: 'FinalRewards_check_6e' }),
                        );
                    }),
                    ec = yo.Small,
                    tc = (0, De.Pi)(({ tokenValue: e, rewards: t }) => {
                        const a = pl().model.root.get().questsPassed >= e;
                        return r().createElement(
                            'div',
                            { className: 'TokenPoint_base_8a' },
                            r().createElement(
                                'div',
                                { className: b()('TokenPoint_tokenValue_32', a && 'TokenPoint_tokenValue__passed_41') },
                                e,
                            ),
                            r().createElement('div', { className: 'TokenPoint_serif_80' }),
                            t &&
                                r().createElement(Yo, {
                                    data: si({ rewards: t, size: ec }),
                                    size: ec,
                                    classMix: b()('TokenPoint_rewards_e1', a && 'TokenPoint_rewards__passed_61'),
                                    rewardItemClassMix: 'TokenPoint_reward_18',
                                }),
                            a && 0 !== e && t && r().createElement('div', { className: 'TokenPoint_check_84' }),
                        );
                    }),
                    ac = 'TokenProgress_point_d9',
                    nc = (e, t) => ({ left: (100 / e) * t + '%' }),
                    rc = R.strings.comp7_ext.weeklyQuests.TokenProgress,
                    sc = yo.Big,
                    oc = (0, De.Pi)(({ className: e }) => {
                        var t;
                        const a = pl(),
                            s = a.model,
                            o = a.controls,
                            i = s.root.get(),
                            u = i.previousQuestsPassed,
                            l = i.questsPassed,
                            c = s.progressPoints.get(),
                            d = Te(c, c.length - 1),
                            m = null != (t = null == d ? void 0 : d.count) ? t : 0,
                            _ = (0, n.useRef)(ts.Idle);
                        return r().createElement(
                            'div',
                            { className: b()('TokenProgress_base_f9', e) },
                            r().createElement(xn, {
                                text: rc.header(),
                                binding: { passed: l, total: m },
                                classMix: 'TokenProgress_header_8d',
                            }),
                            r().createElement(Fn, {
                                text: rc.subheader(5),
                                binding: { value: 5 },
                                classMix: 'TokenProgress_subheader_ae',
                            }),
                            r().createElement(
                                'div',
                                { className: 'TokenProgress_content_83' },
                                r().createElement(
                                    'div',
                                    { className: 'TokenProgress_progress_0b' },
                                    r().createElement(
                                        'div',
                                        { className: 'TokenProgress_progressBar_d5' },
                                        r().createElement(Ss, {
                                            value: l,
                                            maxValue: m,
                                            deltaFrom: u,
                                            onChangeAnimationState: (e) => {
                                                ((_.current = e), e === ts.Shrink && o.animationStart());
                                            },
                                            onEndAnimation: o.animationEnd,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'TokenProgress_points_73' },
                                        r().createElement(
                                            'div',
                                            { className: ac },
                                            r().createElement(tc, { tokenValue: 0 }),
                                        ),
                                        Me(c, (e, t) =>
                                            r().createElement(
                                                'div',
                                                { key: t, className: ac, style: nc(m, e.count) },
                                                r().createElement(tc, {
                                                    tokenValue: e.count,
                                                    rewards: t === c.length - 1 ? void 0 : e.rewards,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                d &&
                                    r().createElement(Jl, {
                                        rewards: si({ rewards: d.rewards, size: sc }),
                                        className: 'TokenProgress_finalRewards_0c',
                                    }),
                            ),
                        );
                    }),
                    ic = () => {
                        const e = (0, Ze.useSpring)(gt);
                        return r().createElement(
                            'div',
                            { className: 'WeeklyQuestsPage_base_66' },
                            r().createElement(mt, { className: be }, R.strings.comp7_ext.page.heading.weeklyQuests()),
                            r().createElement(tr, null),
                            r().createElement(
                                Ze.animated.div,
                                { className: 'WeeklyQuestsPage_content_48', style: e },
                                r().createElement(Ul, { className: 'WeeklyQuestsPage_questsList_6c' }),
                                r().createElement(oc, { className: 'WeeklyQuestsPage_progression_dd' }),
                            ),
                        );
                    },
                    uc = {
                        inactiveProgression: { name: 'inactiveProgression', delay: 600 },
                        firstStageSeasonPoints: { name: 'firstStageSeasonPoints', delay: 100 },
                        firstStage: { name: 'firstStage', delay: 800 },
                        secondStageSeasonPoints: { name: 'secondStageSeasonPoints', delay: 100 },
                        secondStage: { name: 'secondStage', delay: 800 },
                        thirdStageSeasonPoints: { name: 'thirdStageSeasonPoints', delay: 100 },
                        thirdStage: { name: 'thirdStage', delay: 800 },
                        fourthStageSeasonPoints: { name: 'fourthStageSeasonPoints', delay: 100 },
                        fourthStage: { name: 'fourthStage', delay: 800 },
                        fifthStageSeasonPoints: { name: 'fifthStageSeasonPoints', delay: 100 },
                        fifthStage: { name: 'fifthStage', delay: 800 },
                        sixthStageSeasonPoints: { name: 'sixthStageSeasonPoints', delay: 100 },
                        sixthStage: { name: 'sixthStage', delay: 800 },
                        showLegend: { name: 'showLegend', delay: 700 },
                        transitionToRealData: { name: 'transitionToRealData', delay: 1e3 },
                        realData: { name: 'realData', delay: 0 },
                    },
                    lc = [uc.firstStage, uc.secondStage, uc.thirdStage, uc.fourthStage, uc.fifthStage, uc.sixthStage],
                    cc = lc.map((e) => e.name),
                    dc = (0, n.createContext)(null),
                    mc = () => {
                        const e = (0, n.useContext)(dc);
                        if (null === e)
                            throw new Error(
                                'useAnimationApi was called in component, which is not wrapped in YearlyRewardsPageAnimationContext',
                            );
                        return e;
                    },
                    _c =
                        ((gc = {
                            steps: [
                                uc.inactiveProgression,
                                uc.firstStageSeasonPoints,
                                uc.firstStage,
                                uc.secondStageSeasonPoints,
                                uc.secondStage,
                                uc.thirdStageSeasonPoints,
                                uc.thirdStage,
                                uc.fourthStageSeasonPoints,
                                uc.fourthStage,
                                uc.fifthStageSeasonPoints,
                                uc.fifthStage,
                                uc.sixthStageSeasonPoints,
                                uc.sixthStage,
                                uc.showLegend,
                                uc.transitionToRealData,
                                uc.realData,
                            ],
                        }),
                        () => {
                            const e = gc.steps,
                                t = gc.autoStart,
                                a = void 0 === t || t,
                                r = (0, n.useRef)(null),
                                s = (0, n.useRef)('idle'),
                                o = yt(),
                                i = (function () {
                                    const e = (0, n.useRef)(0);
                                    return (
                                        wr(() => {
                                            window.clearTimeout(e.current);
                                        }),
                                        (0, n.useMemo)(
                                            () => ({
                                                run: (t, a) => {
                                                    (window.clearTimeout(e.current),
                                                        (e.current = window.setTimeout(() => {
                                                            ((e.current = 0), t());
                                                        }, a)));
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
                                })(),
                                u = Fr(),
                                l = (0, n.useMemo)(() => {
                                    const t = e[Symbol.iterator](),
                                        a = () => {
                                            const e = t.next();
                                            if (e.done) return ((s.current = 'end'), void o.trigger('end'));
                                            (i.run(() => {
                                                if (r.current) {
                                                    if (
                                                        (r.current.classList.add(e.value.name),
                                                        o.trigger('change', e.value),
                                                        e.value.stopNextSteps)
                                                    )
                                                        return ((s.current = 'paused'), void o.trigger('pause'));
                                                    a();
                                                } else
                                                    console.error(
                                                        `${e.value.name} step don't know on what rootRef it should be set`,
                                                    );
                                            }, e.value.delay),
                                                (s.current = 'running'));
                                        };
                                    return {
                                        rootRef: r,
                                        stateRef: s,
                                        steps: e,
                                        delayUntilStep: (t) => {
                                            let a = 0;
                                            for (let n = 0; n < e.length; n++)
                                                if (((a += e[n].delay), e[n] === t)) return a;
                                            throw new Error(`delayUntilStep didn't find step: ${t.name}`);
                                        },
                                        events: { on: o.on, off: o.off },
                                        start: () => {
                                            (a(), o.trigger('start'));
                                        },
                                        resume: () => {
                                            'paused' === s.current
                                                ? (a(), o.trigger('resume'))
                                                : console.warn(
                                                      'api.resume() should be called only after paused animation, ignore resume() call',
                                                  );
                                        },
                                        skipAll: () => {
                                            (i.clear(),
                                                u.run(() => {
                                                    (e.forEach((e) => {
                                                        r.current
                                                            ? r.current.classList.add(e.name)
                                                            : console.error(
                                                                  `${e} tried to be set, but rootRef was not received in api`,
                                                              );
                                                    }),
                                                        (s.current = 'end'),
                                                        o.trigger('end'));
                                                }));
                                        },
                                    };
                                }, [i, o, u, e]);
                            return (
                                Dr(() => {
                                    a && l.start();
                                }),
                                l
                            );
                        });
                var gc;
                const Ec = ({ children: e }) => {
                    const t = _c();
                    return r().createElement(dc.Provider, { value: t }, e);
                };
                let pc, vc;
                (!(function (e) {
                    ((e.Guaranteed = 'guaranteed'),
                        (e.Possible = 'possible'),
                        (e.NotAvailable = 'notAvailable'),
                        (e.Claimed = 'claimed'));
                })(pc || (pc = {})),
                    (function (e) {
                        ((e.Default = 'default'),
                            (e.NotAccruedRewards = 'notAccruedRewards'),
                            (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
                            (e.RewardsReceived = 'rewardsReceived'));
                    })(vc || (vc = {})));
                const hc = [
                        'customizations',
                        'modernized_devices_t1_gift',
                        'modernized_devices_t2_gift',
                        'modernized_devices_t3_gift',
                    ],
                    bc = ['vehicles', 'premiumTank'],
                    fc = ['styleProgressToken'],
                    Cc = [
                        'modernized_devices_t1_gift',
                        'modernized_devices_t2_gift',
                        'modernized_devices_t3_gift',
                        'deluxe_gift',
                    ],
                    Ac = (e) => hc.includes(e.name),
                    Dc = (e) => bc.includes(e.name),
                    wc = (e) => Cc.includes(e.name);
                function Fc({ reward: e, bannerState: t, cardIndex: a, maxAchievedCardIndex: n }) {
                    return t === vc.RewardsSelectionAvailable && a <= n && wc(e) && !e.claimed;
                }
                const Bc = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    cards: e.array('cards'),
                                    ranks: e.array('ranks'),
                                    hoveredCardIndex: $.LO.box(-1),
                                },
                                a = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return { rewardsState: a.rewardsState };
                                    },
                                    { equals: ft },
                                ),
                                n = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.cards.get(), e);
                                        if (!a) throw new Error(`rewards: card with index ${e} was not found`);
                                        return Me(a.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                r = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return Me(a.seasonPoints, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                s = (0, Re.Om)(
                                    (e, t) => {
                                        const a = r(e);
                                        if (!a)
                                            throw new Error(`season points array with card index ${e} was not found`);
                                        const n = Te(a, t);
                                        if (!n)
                                            throw new Error(
                                                `season point with index ${t} in card with index ${e} was not found`,
                                            );
                                        return n;
                                    },
                                    { equals: M },
                                ),
                                o = (0, Re.Om)((e) =>
                                    [...He(t.cards.get(), 0, e)].reduce((e, t) => e + t.seasonPoints.length, 0),
                                ),
                                i = (0, Re.Om)((e) =>
                                    Ve(
                                        t.cards.get(),
                                        (t, a) =>
                                            t +
                                            (function (e, t) {
                                                return We(e, ({ season: e }) => e === t).length;
                                            })(a.seasonPoints, e),
                                        0,
                                    ),
                                ),
                                u = (0, Re.Om)(
                                    () => {
                                        const e = t.cards.get();
                                        return {
                                            possible: Ge(e, (e) => e.rewardsState === pc.Possible),
                                            guaranteed: Ge(e, (e) => e.rewardsState === pc.Guaranteed),
                                        };
                                    },
                                    { equals: ft },
                                ),
                                l = (0, Re.Om)(
                                    () => {
                                        const e = (function (e, t) {
                                            for (let a = 0; a < e.length; a++) {
                                                const n = ze(Le(e, a).rewards, t);
                                                if (n) return n;
                                            }
                                        })(t.cards.get(), Dc);
                                        if (!e)
                                            throw new Error(
                                                'no one card consists vehicle, please change config with rewards',
                                            );
                                        return Object.assign({}, e);
                                    },
                                    { equals: M },
                                ),
                                c = (0, Re.Om)(
                                    () => {
                                        const e = ze(t.cards.get(), (e) => void 0 !== ze(e.rewards, Dc));
                                        if (!e)
                                            throw new Error(
                                                'no one card consists vehicle, please change config with rewards',
                                            );
                                        return Object.assign({}, e.vehicle);
                                    },
                                    { equals: M },
                                ),
                                d = (0, Re.Om)(() => {
                                    const e = u(),
                                        a = e.possible,
                                        n = e.guaranteed;
                                    return (function ({ maxIndex: e, possible: t, guaranteed: a }) {
                                        return void 0 !== t ? Bt(0, e, t + 1) : void 0 !== a ? Bt(0, e, a + 1) : 0;
                                    })({ maxIndex: t.cards.get().length - 1, possible: a, guaranteed: n });
                                }),
                                m = (0, Re.Om)(() => {
                                    var e;
                                    return null !=
                                        (e = Ge(
                                            t.cards.get(),
                                            (e) => !$e(e.seasonPoints, (e) => e.state === ye.NotAchieved),
                                        ))
                                        ? e
                                        : -1;
                                }),
                                _ = (0, Re.Om)((e) => ze(n(e), Ac), { equals: M }),
                                g = (0, Re.Om)((e) => {
                                    const a = _(e);
                                    if (!a) return !1;
                                    const n = m();
                                    return Fc({
                                        reward: a,
                                        bannerState: t.root.get().bannerState,
                                        cardIndex: e,
                                        maxAchievedCardIndex: n,
                                    });
                                }),
                                E = (0, Re.Om)((e) => {
                                    const a = Te(t.ranks.get(), e);
                                    if (!a) throw new Error(`rank with index ${e} was not found`);
                                    return Object.assign({}, a);
                                }),
                                p = (0, Re.Om)((e) => {
                                    const t = Me(E(e).divisions, (e) => Object.assign({}, e));
                                    return ir(t);
                                }),
                                v = (0, Re.Om)((e) => {
                                    const t = n(e),
                                        a = Ue(t, Ac);
                                    return void 0 === a ? t : We(t, (e, t) => t !== a);
                                }),
                                h = (0, Re.Om)(
                                    (e) => {
                                        const a = v(e),
                                            n = (function (e) {
                                                return Ve(
                                                    e,
                                                    (e, t, a) => (
                                                        void 0 === e.vehicleIndex && Dc(t)
                                                            ? (e.vehicleIndex = a)
                                                            : void 0 === e.style3dIndex &&
                                                                ((e) => fc.includes(e.name))(t)
                                                              ? (e.style3dIndex = a)
                                                              : void 0 === e.claimableRewardIndex &&
                                                                wc(t) &&
                                                                (e.claimableRewardIndex = a),
                                                        e
                                                    ),
                                                    {
                                                        vehicleIndex: void 0,
                                                        style3dIndex: void 0,
                                                        claimableRewardIndex: void 0,
                                                    },
                                                );
                                            })(a),
                                            r = n.vehicleIndex,
                                            s = n.style3dIndex,
                                            o = n.claimableRewardIndex;
                                        return {
                                            hasStyle3d: void 0 !== s,
                                            showClaimableReward:
                                                void 0 !== o &&
                                                Fc({
                                                    reward: a[o],
                                                    bannerState: t.root.get().bannerState,
                                                    cardIndex: e,
                                                    maxAchievedCardIndex: m(),
                                                }),
                                            showPlus: void 0 !== r && void 0 !== s && s - r == 1 && r % 2 == 0,
                                            vehicleIndex: r,
                                            style3dIndex: s,
                                            claimableRewardIndex: o,
                                        };
                                    },
                                    { equals: ft },
                                ),
                                b = (0, Re.Om)(() => {
                                    const e = t.root.get().bannerState;
                                    if (e !== vc.RewardsSelectionAvailable) return !1;
                                    const a = m();
                                    return $e(t.cards.get(), (t, n) =>
                                        $e(t.rewards, (t) =>
                                            Fc({ reward: t, bannerState: e, cardIndex: n, maxAchievedCardIndex: a }),
                                        ),
                                    );
                                }),
                                f = (0, Re.Om)(() => {
                                    const e = t.root.get().currentRank,
                                        a = Ue(t.ranks.get(), (t) => t.rank === e);
                                    if (void 0 === a)
                                        throw new Error(
                                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                                        );
                                    return a;
                                }),
                                C = (0, Re.Om)((e) => !t.root.get().isQualificationActive && e <= f());
                            return Object.assign({}, t, {
                                computes: {
                                    card: a,
                                    seasonPoint: s,
                                    mainReward: _,
                                    shouldShowAsClaimableMainReward: g,
                                    hasAnyClaimableReward: b,
                                    additionalRewards: v,
                                    additionalRewardsConfig: h,
                                    activeCardIndex: d,
                                    maxAchievedCardIndex: m,
                                    currentSeasonPointsCount: i,
                                    seasonPointsTotalByIndex: o,
                                    seasonPointsLength: (0, Re.Om)((e) => r(e).length),
                                    isActiveLegendItem: C,
                                    vehicleReward: l,
                                    vehicle: c,
                                    rankItem: E,
                                    divisions: p,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => ({
                            setHoveredCardIndex: (0, $.aD)((e) => t.hoveredCardIndex.set(e)),
                            goToStylePreview: e.createCallback((e) => ({ cardIndex: e }), 'onGoToStylePreview'),
                            goToVehiclePreview: e.createCallback(
                                (e, t) => ({ cd: e, cardIndex: t }),
                                'onGoToVehiclePreview',
                            ),
                            goToRewardsSelection: e.createCallback(
                                (e, t) => ({ name: e, cardIndex: t }),
                                'onGoToRewardsSelection',
                            ),
                            setIntroViewed: e.createCallbackNoArgs('onIntroViewed'),
                        }),
                    ),
                    Sc = Bc[0],
                    yc = Bc[1],
                    Nc = {
                        '--pageContentWidth': '78vw',
                        base: 'Background_base_05',
                        inactiveBackground: 'Background_inactiveBackground_f1',
                        overlay: 'Background_overlay_35',
                        base__hoveredCardIndex_0: 'Background_base__hoveredCardIndex_0_25',
                        overlay__firstStage: 'Background_overlay__firstStage_b3',
                        base__hoveredCardIndex_1: 'Background_base__hoveredCardIndex_1_92',
                        overlay__secondStage: 'Background_overlay__secondStage_55',
                        base__hoveredCardIndex_2: 'Background_base__hoveredCardIndex_2_27',
                        overlay__thirdStage: 'Background_overlay__thirdStage_71',
                        base__hoveredCardIndex_3: 'Background_base__hoveredCardIndex_3_29',
                        overlay__fourthStage: 'Background_overlay__fourthStage_1d',
                        base__hoveredCardIndex_4: 'Background_base__hoveredCardIndex_4_f1',
                        overlay__fifthStage: 'Background_overlay__fifthStage_04',
                        base__hoveredCardIndex_5: 'Background_base__hoveredCardIndex_5_1c',
                        overlay__full: 'Background_overlay__full_06',
                        'base__hoveredCardIndex_-1': 'Background_base__hoveredCardIndex_-1_10',
                        base__finishedYear: 'Background_base__finishedYear_2f',
                        overlay__achieved: 'Background_overlay__achieved_86',
                        base__withIntro: 'Background_base__withIntro_4c',
                        fadeIn: 'Background_fadeIn_64',
                        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_6c',
                        fadeInHalf: 'Background_fadeInHalf_2f',
                        fadeOut: 'Background_fadeOut_43',
                        fadeInWithScale: 'Background_fadeInWithScale_86',
                        slideUp: 'Background_slideUp_3a',
                        scale: 'Background_scale_03',
                        raysAppearance: 'Background_raysAppearance_48',
                        rotate: 'Background_rotate_74',
                        'reverse-rotate': 'Background_reverse-rotate_3b',
                        glowAppearance: 'Background_glowAppearance_2b',
                        highlightAppearance: 'Background_highlightAppearance_00',
                        blink: 'Background_blink_cc',
                        slideUpIn: 'Background_slideUpIn_c2',
                    },
                    xc = (0, De.Pi)(({ className: e }) => {
                        const t = yc().model,
                            a = V().model,
                            n = t.root.get().withIntro,
                            s = t.hoveredCardIndex.get(),
                            o = a.year.state.get() === li.Finished,
                            i = t.computes.maxAchievedCardIndex(),
                            u = t.cards.get().length - 1;
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    Nc.base,
                                    n && Nc.base__withIntro,
                                    Nc[`base__hoveredCardIndex_${s}`],
                                    o && Nc.base__finishedYear,
                                    e,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: Nc.inactiveBackground },
                                Zt(u, (e) =>
                                    r().createElement('div', {
                                        key: e,
                                        className: b()(
                                            Nc.overlay,
                                            Nc[`overlay__${cc[e]}`],
                                            o && e === i && Nc.overlay__achieved,
                                        ),
                                    }),
                                ),
                                r().createElement('div', {
                                    className: b()(Nc.overlay, Nc.overlay__full, o && u === i && Nc.overlay__achieved),
                                }),
                            ),
                        );
                    });
                function Rc() {
                    const e = (0, n.useRef)(!0);
                    return (
                        Dr(() => {
                            e.current = !1;
                        }),
                        e.current
                    );
                }
                const kc = gt.delay + gt.config.duration + 500,
                    Pc = ({ isAnimated: e, visible: t, hasDelay: a, className: n }) => {
                        const s = (0, Ze.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: t ? 1 : 0 },
                            delay: a ? kc : 0,
                            config: { duration: 300 },
                        });
                        return r().createElement(
                            Ze.animated.div,
                            { className: b()('ActiveCardHighlight_base_de', n), style: s },
                            r().createElement(jr, { className: 'ActiveCardHighlight_glow_c9', animated: e }),
                        );
                    },
                    Ic = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 600, config: { duration: 300 } },
                    Tc = ({ onClick: e, children: t }) => {
                        const a = (0, Ze.useSpring)(Ic);
                        return r().createElement(
                            'div',
                            { className: 'AdditionalRewards_claimableReward_eb' },
                            r().createElement(Ze.animated.div, { className: 'AdditionalRewards_shine_e4', style: a }),
                            t,
                            r().createElement(
                                'div',
                                { className: 'AdditionalRewards_claimRewardsButton_f9' },
                                r().createElement(
                                    ql,
                                    { isDisabled: !1, onClick: e },
                                    R.strings.comp7_ext.yearlyRewards.claim(),
                                ),
                            ),
                        );
                    },
                    Lc = yo.Small,
                    Oc = 'AdditionalRewards_reward_94',
                    Mc = { info: 'AdditionalRewards_info_c4' },
                    $c = (0, De.Pi)(({ cardIndex: e, visibleRewardsCount: t, className: a, rewardItemClassMix: s }) => {
                        const o = yc(),
                            i = o.model,
                            u = o.controls,
                            l = i.computes.additionalRewards(e),
                            c = i.computes.additionalRewardsConfig(e),
                            d = (0, n.useCallback)((e, t) => () => u.goToRewardsSelection(e, t), [u]),
                            m = (0, n.useMemo)(
                                () =>
                                    Me(l, (a, n) => {
                                        const r = c.showPlus && n === c.vehicleIndex && t >= 3,
                                            s = c.showClaimableReward && n === c.claimableRewardIndex;
                                        return Object.assign(
                                            {},
                                            ri({ reward: a, size: Lc, index: e }),
                                            {
                                                className: b()(
                                                    Oc,
                                                    s && 'AdditionalRewards_reward__claimable_2e',
                                                    r && 'AdditionalRewards_reward__withPlus_1b',
                                                ),
                                                classNames: Object.assign(
                                                    {},
                                                    Mc,
                                                    r && { image: 'AdditionalRewards_rewardWithPlusImage_60' },
                                                ),
                                            },
                                            s && { RewardWrapper: Tc, rewardWrapperProps: { onClick: d(a.name, e) } },
                                        );
                                    }),
                                [l, c.claimableRewardIndex, c.showClaimableReward, c.showPlus, c.vehicleIndex, e, d, t],
                            );
                        return r().createElement(Yo, {
                            data: m,
                            size: Lc,
                            count: oi(l.length, t),
                            rewardItemClassMix: b()('AdditionalRewards_rewardItem_dd', s),
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: t, index: e },
                            },
                            classMix: a,
                            boxRewardClassName: Oc,
                            boxRewardClassNames: Mc,
                        });
                    }),
                    Wc = {
                        base__x16: 'SeasonPoint_base__x16_b8',
                        base__x24: 'SeasonPoint_base__x24_0a',
                        base__x32: 'SeasonPoint_base__x32_a1',
                        base__x48: 'SeasonPoint_base__x48_fb',
                        icon: 'SeasonPoint_icon_8e',
                    };
                let Hc;
                !(function (e) {
                    ((e.x16 = 'x16'), (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48'));
                })(Hc || (Hc = {}));
                const zc = R.images.comp7.gui.maps.icons.icons,
                    Uc = ({ state: e, season: t, className: a, size: n = Hc.x48 }) =>
                        r().createElement(
                            'div',
                            { className: b()(Wc.base, Wc[`base__${n}`], Wc[`base__${e}`], a) },
                            r().createElement('div', {
                                className: Wc.icon,
                                style: {
                                    backgroundImage:
                                        'notAchieved' === e
                                            ? `url(${zc.$dyn(`season_point_notAchieved_${n}`)})`
                                            : `url(${zc.$dyn(`season_point_${t}_${n}`)})`,
                                },
                            }),
                        );
                function Gc() {
                    return (
                        (Gc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Gc.apply(this, arguments)
                    );
                }
                const Vc = (0, De.Pi)(({ cardIndex: e, pointIndex: t, size: a, className: n, classNames: s }) => {
                        const o = yc().model.computes.seasonPoint(e, t);
                        return r().createElement(
                            K,
                            {
                                contentId: R.views.comp7.lobby.tooltips.SeasonPointTooltip('resId'),
                                args: { state: o.state },
                                ignoreShowDelay: !0,
                            },
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(Uc, Gc({}, o, { className: null == s ? void 0 : s.point, size: a })),
                            ),
                        );
                    }),
                    qc = (0, De.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = yc().model;
                        return r().createElement(
                            'div',
                            { className: b()('CardSeasonPoints_base_40', a) },
                            Zt(s.computes.seasonPointsLength(e), (a) =>
                                r().createElement(Vc, {
                                    cardIndex: e,
                                    pointIndex: a,
                                    size: t,
                                    className: null == n ? void 0 : n.pointWrapper,
                                    classNames: { point: null == n ? void 0 : n.point },
                                    key: a,
                                }),
                            ),
                        );
                    }),
                    jc = [
                        [{ season: Be.First }, { season: Be.First }, { season: Be.First }],
                        [{ season: Be.First }, { season: Be.First }, { season: Be.First }],
                        [{ season: Be.Second }, { season: Be.Second }, { season: Be.Second }],
                        [{ season: Be.Second }, { season: Be.Second }, { season: Be.Second }],
                        [{ season: Be.Third }, { season: Be.Third }, { season: Be.Third }],
                        [{ season: Be.Third }, { season: Be.Third }, { season: Be.Third }],
                    ],
                    Qc = {
                        '--pageContentWidth': '78vw',
                        base: 'FakeCardSeasonPoints_base_04',
                        notAchievedSeasonPoints: 'FakeCardSeasonPoints_notAchievedSeasonPoints_7d',
                        achievedSeasonPoints: 'FakeCardSeasonPoints_achievedSeasonPoints_b4',
                        notAchievedPoint: 'FakeCardSeasonPoints_notAchievedPoint_4f',
                        achievedPoint: 'FakeCardSeasonPoints_achievedPoint_da',
                        notAchievedPoint__first: 'FakeCardSeasonPoints_notAchievedPoint__first_3a',
                        achievedPoint__first: 'FakeCardSeasonPoints_achievedPoint__first_9e',
                        notAchievedPoint__second: 'FakeCardSeasonPoints_notAchievedPoint__second_01',
                        achievedPoint__second: 'FakeCardSeasonPoints_achievedPoint__second_8b',
                        notAchievedPoint__third: 'FakeCardSeasonPoints_notAchievedPoint__third_c0',
                        achievedPoint__third: 'FakeCardSeasonPoints_achievedPoint__third_1b',
                        base__firstStage: 'FakeCardSeasonPoints_base__firstStage_4f',
                        base__secondStage: 'FakeCardSeasonPoints_base__secondStage_6d',
                        base__thirdStage: 'FakeCardSeasonPoints_base__thirdStage_4b',
                        base__fourthStage: 'FakeCardSeasonPoints_base__fourthStage_46',
                        base__fifthStage: 'FakeCardSeasonPoints_base__fifthStage_cc',
                        base__sixthStage: 'FakeCardSeasonPoints_base__sixthStage_5a',
                        fadeIn: 'FakeCardSeasonPoints_fadeIn_4f',
                        fadeInThreeQuarters: 'FakeCardSeasonPoints_fadeInThreeQuarters_7a',
                        fadeInHalf: 'FakeCardSeasonPoints_fadeInHalf_3a',
                        fadeOut: 'FakeCardSeasonPoints_fadeOut_ee',
                        fadeInWithScale: 'FakeCardSeasonPoints_fadeInWithScale_a6',
                        slideUp: 'FakeCardSeasonPoints_slideUp_c5',
                        scale: 'FakeCardSeasonPoints_scale_da',
                        raysAppearance: 'FakeCardSeasonPoints_raysAppearance_68',
                        rotate: 'FakeCardSeasonPoints_rotate_b0',
                        'reverse-rotate': 'FakeCardSeasonPoints_reverse-rotate_45',
                        glowAppearance: 'FakeCardSeasonPoints_glowAppearance_3c',
                        highlightAppearance: 'FakeCardSeasonPoints_highlightAppearance_26',
                        blink: 'FakeCardSeasonPoints_blink_33',
                        slideUpIn: 'FakeCardSeasonPoints_slideUpIn_b5',
                    },
                    Yc = ['first', 'second', 'third'],
                    Xc = ({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = jc[e];
                        return r().createElement(
                            'div',
                            { className: b()(Qc.base, Qc[`base__${cc[e]}`], a) },
                            r().createElement(
                                'div',
                                { className: Qc.notAchievedSeasonPoints },
                                s.map(({ season: e }, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: null == n ? void 0 : n.pointWrapper },
                                        r().createElement(Uc, {
                                            state: ye.NotAchieved,
                                            season: e,
                                            size: t,
                                            className: b()(
                                                Qc.notAchievedPoint,
                                                Qc[`notAchievedPoint__${Yc[a]}`],
                                                null == n ? void 0 : n.point,
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Qc.achievedSeasonPoints },
                                s.map(({ season: e }, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: null == n ? void 0 : n.pointWrapper },
                                        r().createElement(Uc, {
                                            state: ye.Achieved,
                                            season: e,
                                            size: t,
                                            className: b()(
                                                Qc.achievedPoint,
                                                Qc[`achievedPoint__${Yc[a]}`],
                                                null == n ? void 0 : n.point,
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    };
                function Kc() {
                    return (
                        (Kc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Kc.apply(this, arguments)
                    );
                }
                const Zc = (0, De.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = yc().model.computes.mainReward(e);
                        if (!s) throw new Error(`no mainReward in card with index ${e}`);
                        return r().createElement(
                            qo,
                            Kc({}, ri({ reward: s, size: t, index: e }), {
                                className: a,
                                classNames: {
                                    rewardIcon: null == n ? void 0 : n.icon,
                                    image: null == n ? void 0 : n.iconContainer,
                                },
                            }),
                        );
                    }),
                    Jc = {
                        '--pageContentWidth': '78vw',
                        base: 'RewardsStatus_base_a0',
                        description: 'RewardsStatus_description_75',
                        base__guaranteed: 'RewardsStatus_base__guaranteed_bb',
                        base__claimed: 'RewardsStatus_base__claimed_59',
                        base__notAvailable: 'RewardsStatus_base__notAvailable_de',
                        base__possible: 'RewardsStatus_base__possible_29',
                        shadow: 'RewardsStatus_shadow_71',
                        statusIcon: 'RewardsStatus_statusIcon_3d',
                    },
                    ed = R.strings.comp7_ext.yearlyRewards.rewardsState,
                    td = ({ seasonPointsCount: e, rewardsState: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(Jc.base, Jc[`base__${t}`], a) },
                            r().createElement(
                                te,
                                { body: `${ed.tooltip.$dyn(t)}`, isEnabled: t !== pc.Claimed },
                                r().createElement(
                                    'div',
                                    { className: Jc.description },
                                    t === pc.NotAvailable && r().createElement('div', { className: Jc.shadow }),
                                    r().createElement('div', { className: Jc.statusIcon }),
                                    aa(`${R.strings.comp7_ext.yearlyRewards.rewardsState.$dyn(t)}`, { count: e }),
                                ),
                            ),
                        ),
                    ad = (0, De.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = F().mediaSize,
                            s = yc(),
                            o = s.model,
                            i = s.controls,
                            u = o.computes.mainReward(e),
                            l = o.computes.vehicle(),
                            c = n >= A.Large;
                        return u && 'customizations' === u.name
                            ? r().createElement(
                                  'div',
                                  { className: t },
                                  r().createElement(
                                      pi,
                                      {
                                          type: 'preview',
                                          onClick: () => i.goToStylePreview(e),
                                          isVisibleLabel: c,
                                          className: null == a ? void 0 : a.preview,
                                      },
                                      c ? R.strings.comp7_ext.yearlyRewards.preview.style2d() : '',
                                  ),
                              )
                            : o.computes.additionalRewardsConfig(e).hasStyle3d
                              ? r().createElement(
                                    'div',
                                    { className: t },
                                    r().createElement(
                                        pi,
                                        {
                                            type: 'preview',
                                            onClick: () => i.goToVehiclePreview(l.vehicleCD, e),
                                            isVisibleLabel: c,
                                            className: null == a ? void 0 : a.preview,
                                        },
                                        c ? R.strings.comp7_ext.yearlyRewards.preview.style3d() : '',
                                    ),
                                )
                              : null;
                    }),
                    nd = {
                        '--pageContentWidth': '78vw',
                        base: 'Column_base_b5',
                        claimRewardsButton: 'Column_claimRewardsButton_5e',
                        shine: 'Column_shine_bf',
                        mainRewardOuterContainer: 'Column_mainRewardOuterContainer_58',
                        mainRewardContainer: 'Column_mainRewardContainer_3e',
                        mainRewardContainer__big: 'Column_mainRewardContainer__big_62',
                        mainRewardContainer__s232x174: 'Column_mainRewardContainer__s232x174_99',
                        mainRewardContainer__s296x222: 'Column_mainRewardContainer__s296x222_b4',
                        mainReward: 'Column_mainReward_77',
                        mainReward__claimable: 'Column_mainReward__claimable_67',
                        previewContainer: 'Column_previewContainer_57',
                        preview: 'Column_preview_d6',
                        fakeSeasonPointsContainer: 'Column_fakeSeasonPointsContainer_11',
                        seasonPointsContainer: 'Column_seasonPointsContainer_f3',
                        base__withIntro: 'Column_base__withIntro_fb',
                        divider: 'Column_divider_f3',
                        divider__highlighted: 'Column_divider__highlighted_00',
                        seasonPointWrapper: 'Column_seasonPointWrapper_2d',
                        rewardsStatus: 'Column_rewardsStatus_08',
                        additionalRewards: 'Column_additionalRewards_ff',
                        description: 'Column_description_76',
                        description__visible: 'Column_description__visible_6f',
                        glowContainer: 'Column_glowContainer_ee',
                        hoverArea: 'Column_hoverArea_22',
                        hoverArea__last: 'Column_hoverArea__last_32',
                        fadeIn: 'Column_fadeIn_c3',
                        fadeInThreeQuarters: 'Column_fadeInThreeQuarters_42',
                        fadeInHalf: 'Column_fadeInHalf_1f',
                        fadeOut: 'Column_fadeOut_05',
                        fadeInWithScale: 'Column_fadeInWithScale_5a',
                        slideUp: 'Column_slideUp_f6',
                        scale: 'Column_scale_a6',
                        raysAppearance: 'Column_raysAppearance_4a',
                        rotate: 'Column_rotate_08',
                        'reverse-rotate': 'Column_reverse-rotate_d6',
                        glowAppearance: 'Column_glowAppearance_d6',
                        highlightAppearance: 'Column_highlightAppearance_65',
                        blink: 'Column_blink_85',
                        slideUpIn: 'Column_slideUpIn_32',
                    },
                    rd = { preview: nd.preview },
                    sd = { pointWrapper: nd.seasonPointWrapper },
                    od = R.strings.comp7_ext.yearlyRewards,
                    id = (0, De.Pi)(
                        ({
                            index: e,
                            mainRewardSize: t,
                            seasonPointSize: a,
                            visibleAdditionalRewardsCount: s,
                            hasHighlightDelay: i,
                            highlightVisible: u,
                            className: l,
                        }) => {
                            const c = F().mediaSize,
                                d = yc(),
                                m = d.model,
                                _ = d.controls,
                                g = V().model.year.state.get(),
                                E = m.root.get().withIntro,
                                p = m.computes.card(e).rewardsState,
                                v = m.computes.mainReward(e),
                                h = m.computes.seasonPointsTotalByIndex(e),
                                f = m.computes.activeCardIndex(),
                                C = m.computes.maxAchievedCardIndex(),
                                D = m.hoveredCardIndex.get(),
                                w = m.computes.shouldShowAsClaimableMainReward(e),
                                B = (0, Ze.useSpring)(Ic),
                                S = e === m.cards.get().length - 1,
                                y = (({
                                    index: e,
                                    hoveredCardIndex: t,
                                    maxAchievedCardIndex: a,
                                    withIntro: n,
                                    yearState: r,
                                }) => (n || -1 !== t ? e > t : r === li.Finished && e > a))({
                                    withIntro: E,
                                    hoveredCardIndex: D,
                                    maxAchievedCardIndex: C,
                                    index: e,
                                    yearState: g,
                                }),
                                N = !E && g !== li.Finished && e === f;
                            return (
                                (0, n.useEffect)(() => {
                                    e === D && o.O.sound.play.sound(R.sounds.comp_7_annual_reward_column());
                                }, [D, e]),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(nd.base, y && 'grayscaledColumn', E && nd.base__withIntro, l),
                                        onMouseEnter: () => _.setHoveredCardIndex(e),
                                        onMouseLeave: () => _.setHoveredCardIndex(-1),
                                    },
                                    r().createElement('div', { className: b()(nd.hoverArea, S && nd.hoverArea__last) }),
                                    r().createElement(
                                        'div',
                                        { className: nd.fakeSeasonPointsContainer },
                                        r().createElement(Xc, { cardIndex: e, size: a, classNames: sd }),
                                        !S &&
                                            r().createElement(Cu, {
                                                className: b()(nd.divider, e <= D && nd.divider__highlighted),
                                            }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: nd.seasonPointsContainer },
                                        r().createElement(qc, { cardIndex: e, size: a, classNames: sd }),
                                        !S &&
                                            r().createElement(Cu, {
                                                className: b()(nd.divider, e < f && nd.divider__highlighted),
                                            }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: nd.mainRewardOuterContainer },
                                        w && r().createElement(Ze.animated.div, { className: nd.shine, style: B }),
                                        r().createElement(
                                            'div',
                                            { className: b()(nd.mainRewardContainer, nd[`mainRewardContainer__${t}`]) },
                                            v &&
                                                r().createElement(Zc, {
                                                    cardIndex: e,
                                                    size: t,
                                                    className: b()(nd.mainReward, w && nd.mainReward__claimable),
                                                }),
                                        ),
                                        v &&
                                            w &&
                                            r().createElement(
                                                'div',
                                                { className: nd.claimRewardsButton },
                                                r().createElement(
                                                    ql,
                                                    {
                                                        isDisabled: !1,
                                                        onClick: () => _.goToRewardsSelection(v.name, e),
                                                    },
                                                    c >= A.Medium ? od.claimReward() : od.claim(),
                                                ),
                                            ),
                                    ),
                                    r().createElement(ad, { index: e, className: nd.previewContainer, classNames: rd }),
                                    r().createElement(td, {
                                        seasonPointsCount: h,
                                        rewardsState: p,
                                        className: nd.rewardsStatus,
                                    }),
                                    r().createElement($c, {
                                        cardIndex: e,
                                        visibleRewardsCount: s,
                                        className: nd.additionalRewards,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: b()(nd.description, N && nd.description__visible) },
                                        r().createElement(Pc, {
                                            hasDelay: i,
                                            visible: u,
                                            isAnimated: N,
                                            className: nd.glowContainer,
                                        }),
                                        R.strings.comp7_ext.yearlyRewards.stageDescription.active(),
                                    ),
                                )
                            );
                        },
                    ),
                    ud = (0, De.Pi)(({ className: e }) => {
                        const t = F().mediaSize,
                            a = yc().model,
                            s = V().model,
                            i = a.computes.hasAnyClaimableReward(),
                            u = a.root.get().withIntro,
                            l = s.year.state.get(),
                            c = mc(),
                            d = ((e) => (e >= A.Large ? yo.S296x222 : e >= A.Small ? yo.S232x174 : yo.Big))(t),
                            m = ((e) => (e >= A.Medium ? 5 : 2))(t),
                            _ = ((e) => (e >= A.ExtraLarge ? Hc.x32 : Hc.x24))(t),
                            g = (0, Ze.useSpring)(gt),
                            E = (({ api: e, withIntro: t, yearState: a }) => {
                                const r = (0, n.useState)(!1),
                                    s = r[0],
                                    i = r[1],
                                    u = Rc(),
                                    l = !t && u;
                                return (
                                    Dr(() => {
                                        if (t && a !== li.Finished) {
                                            const t = () => {
                                                i(!0);
                                            };
                                            return (
                                                e.events.on('end', t),
                                                () => {
                                                    e.events.off('end', t);
                                                }
                                            );
                                        }
                                    }),
                                    Dr(() => {
                                        if (l && a !== li.Finished)
                                            return es(() => {
                                                i(!0);
                                            }, kc);
                                    }),
                                    (0, n.useEffect)(() => {
                                        s && o.O.sound.play.sound(R.sounds.comp_7_ranks_shine());
                                    }, [s]),
                                    [l, s]
                                );
                            })({ api: c, withIntro: u, yearState: l }),
                            p = E[0],
                            v = E[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (i)
                                    return es(() => {
                                        o.O.sound.play.sound(R.sounds.bp_pick_up_award());
                                    }, 600);
                            }, [i]),
                            r().createElement(
                                Ze.animated.div,
                                { className: b()('Columns_base_56', e), style: g },
                                Zt(a.cards.get().length, (e) =>
                                    r().createElement(id, {
                                        index: e,
                                        mainRewardSize: d,
                                        seasonPointSize: _,
                                        hasHighlightDelay: p,
                                        highlightVisible: v,
                                        visibleAdditionalRewardsCount: m,
                                        key: e,
                                    }),
                                ),
                            )
                        );
                    }),
                    ld = (e) => (e >= A.Large ? Hc.x32 : Hc.x24),
                    cd = R.strings.comp7_ext.yearlyRewards,
                    dd = {
                        '--pageContentWidth': '78vw',
                        base: 'Legend_base_95',
                        inner: 'Legend_inner_47',
                        item: 'Legend_item_61',
                        description: 'Legend_description_77',
                        rankWrapper: 'Legend_rankWrapper_1e',
                        highlight: 'Legend_highlight_9a',
                        rankWrapper__withIntro: 'Legend_rankWrapper__withIntro_80',
                        rankEmblem: 'Legend_rankEmblem_5a',
                        rankEmblem__active: 'Legend_rankEmblem__active_e1',
                        arrowContainer: 'Legend_arrowContainer_f1',
                        arrow: 'Legend_arrow_dc',
                        pointsCount: 'Legend_pointsCount_cc',
                        countContainer: 'Legend_countContainer_43',
                        fakeCount: 'Legend_fakeCount_21',
                        count: 'Legend_count_26',
                        base__withIntro: 'Legend_base__withIntro_fd',
                        seasonPoint: 'Legend_seasonPoint_74',
                        status: 'Legend_status_a8',
                        rank: 'Legend_rank_eb',
                        verticalSeparator: 'Legend_verticalSeparator_64',
                        seasonPointIcon: 'Legend_seasonPointIcon_ca',
                        schedule: 'Legend_schedule_c3',
                        calendarIcon: 'Legend_calendarIcon_39',
                        fadeIn: 'Legend_fadeIn_4f',
                        fadeInThreeQuarters: 'Legend_fadeInThreeQuarters_d2',
                        fadeInHalf: 'Legend_fadeInHalf_d6',
                        fadeOut: 'Legend_fadeOut_cc',
                        fadeInWithScale: 'Legend_fadeInWithScale_d6',
                        slideUp: 'Legend_slideUp_47',
                        scale: 'Legend_scale_f8',
                        raysAppearance: 'Legend_raysAppearance_c1',
                        rotate: 'Legend_rotate_1d',
                        'reverse-rotate': 'Legend_reverse-rotate_68',
                        glowAppearance: 'Legend_glowAppearance_d3',
                        highlightAppearance: 'Legend_highlightAppearance_f6',
                        blink: 'Legend_blink_79',
                        slideUpIn: 'Legend_slideUpIn_e2',
                    },
                    md = (0, De.Pi)(({ index: e, size: t, seasonName: a, className: n }) => {
                        const s = yc().model,
                            o = s.root.get(),
                            i = o.currentRank,
                            u = o.topPercentage,
                            l = o.withIntro,
                            c = s.computes.isActiveLegendItem(e),
                            d = s.computes.rankItem(e);
                        return r().createElement(
                            'div',
                            { className: n, key: e },
                            r().createElement(
                                'div',
                                { className: b()(dd.rankWrapper, l && dd.rankWrapper__withIntro) },
                                d.rank === i &&
                                    r().createElement(Vr, {
                                        className: dd.highlight,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(
                                    hn,
                                    {
                                        rank: d.rank,
                                        from: d.from,
                                        to: d.to,
                                        topPercentage: u,
                                        divisions: s.computes.divisions(e),
                                        className: dd.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(Da, {
                                        seasonName: a,
                                        rank: d.rank,
                                        size: t,
                                        className: b()(dd.rankEmblem, c && dd.rankEmblem__active),
                                    }),
                                ),
                            ),
                        );
                    }),
                    _d = 'possible',
                    gd = { state: _d, ignoreState: !0 },
                    Ed = { scheduleClassNames: { calendarIcon: dd.calendarIcon } },
                    pd = (0, De.Pi)(({ className: e }) => {
                        const t = F().mediaSize,
                            a = yc().model,
                            n = V().model,
                            s = a.root.get(),
                            o = s.currentRank,
                            i = s.isQualificationActive,
                            u = s.withIntro,
                            l = n.season.name.get(),
                            c = n.year.state.get(),
                            d = a.computes.currentSeasonPointsCount(n.season.name.get()),
                            m = ((e) => {
                                switch (e) {
                                    case li.Active:
                                        return { rank: cd.rank.current(), description: cd.description.current() };
                                    case li.OffSeason:
                                    case li.Finished:
                                        return { rank: cd.rank.achieved(), description: cd.description.achieved() };
                                    default:
                                        return (
                                            console.error(
                                                `Provide text strings for current/achieved rank for YearState: ${e}`,
                                            ),
                                            { rank: '', description: '' }
                                        );
                                }
                            })(c),
                            _ = ((e) => (e >= A.Large ? Ca.x64 : Ca.x48))(t);
                        return r().createElement(
                            'div',
                            { className: b()(dd.base, u && dd.base__withIntro, e) },
                            r().createElement(
                                'div',
                                { className: dd.status },
                                !i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(Fn, {
                                            text: m.rank,
                                            binding: {
                                                rank: r().createElement(
                                                    'div',
                                                    { className: dd.rank },
                                                    aa(R.strings.comp7_ext.quotesWrapper(), { name: pa(o) }),
                                                ),
                                            },
                                            classMix: dd.secondaryText,
                                        }),
                                        r().createElement('div', { className: dd.verticalSeparator }),
                                    ),
                                r().createElement(Fn, {
                                    text: m.description,
                                    binding: {
                                        seasonPointIcon: r().createElement(
                                            K,
                                            {
                                                contentId: R.views.comp7.lobby.tooltips.SeasonPointTooltip('resId'),
                                                args: gd,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Uc, {
                                                    state: _d,
                                                    season: l,
                                                    size: Hc.x16,
                                                    className: dd.seasonPointIcon,
                                                }),
                                            ),
                                        ),
                                    },
                                }),
                                r().createElement('div', { className: dd.verticalSeparator }),
                                r().createElement(tr, { hasSeasonName: !1, className: dd.schedule, classNames: Ed }),
                            ),
                            r().createElement(
                                'div',
                                { className: dd.inner },
                                Zt(a.ranks.get().length, (e) =>
                                    r().createElement(md, {
                                        key: e,
                                        index: e,
                                        size: _,
                                        seasonName: l,
                                        className: dd.item,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: dd.arrowContainer },
                                    r().createElement('div', { className: dd.arrow }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: dd.pointsCount },
                                    r().createElement(
                                        'div',
                                        { className: dd.countContainer },
                                        r().createElement('div', { className: dd.fakeCount }, '0'),
                                        r().createElement('div', { className: dd.count }, d),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: dd.seasonPoint },
                                        r().createElement(
                                            K,
                                            {
                                                contentId: R.views.comp7.lobby.tooltips.SeasonPointTooltip('resId'),
                                                args: gd,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Uc, { state: _d, season: l, size: ld(t) }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    vd = R.strings.comp7_ext.yearlyRewards.banner,
                    hd = (0, De.Pi)(({ className: e }) => {
                        const t = yc().model.root.get().bannerState;
                        return r().createElement(
                            'div',
                            { className: b()('StatusBanner_base_a2', e) },
                            r().createElement('div', { className: 'StatusBanner_description_48' }, vd.$dyn(t)),
                        );
                    }),
                    bd = {
                        '--pageContentWidth': '78vw',
                        base: 'Vehicle_base_5a',
                        vehicleBg: 'Vehicle_vehicleBg_13',
                        vehicleBg__inactive: 'Vehicle_vehicleBg__inactive_bd',
                        vehicleBg__2: 'Vehicle_vehicleBg__2_2c',
                        base__selectedIndex_2: 'Vehicle_base__selectedIndex_2_1f',
                        vehicleBg__3: 'Vehicle_vehicleBg__3_ef',
                        base__selectedIndex_3: 'Vehicle_base__selectedIndex_3_c9',
                        vehicleBg__4: 'Vehicle_vehicleBg__4_60',
                        base__selectedIndex_4: 'Vehicle_base__selectedIndex_4_2a',
                        vehicleBg__5: 'Vehicle_vehicleBg__5_d2',
                        base__selectedIndex_5: 'Vehicle_base__selectedIndex_5_aa',
                        fadeIn: 'Vehicle_fadeIn_27',
                        fadeInThreeQuarters: 'Vehicle_fadeInThreeQuarters_4d',
                        fadeInHalf: 'Vehicle_fadeInHalf_43',
                        fadeOut: 'Vehicle_fadeOut_3b',
                        fadeInWithScale: 'Vehicle_fadeInWithScale_5b',
                        slideUp: 'Vehicle_slideUp_c0',
                        scale: 'Vehicle_scale_7b',
                        raysAppearance: 'Vehicle_raysAppearance_24',
                        rotate: 'Vehicle_rotate_72',
                        'reverse-rotate': 'Vehicle_reverse-rotate_02',
                        glowAppearance: 'Vehicle_glowAppearance_79',
                        highlightAppearance: 'Vehicle_highlightAppearance_19',
                        blink: 'Vehicle_blink_c7',
                        slideUpIn: 'Vehicle_slideUpIn_41',
                    },
                    fd = [2, 3, 4, 5],
                    Cd = (0, De.Pi)(({ className: e }) => {
                        const t = yc().model,
                            a = V().model,
                            s = t.root.get().withIntro,
                            i = t.hoveredCardIndex.get(),
                            u = Rc(),
                            l =
                                a.year.state.get() === li.Finished
                                    ? t.computes.maxAchievedCardIndex()
                                    : t.computes.activeCardIndex(),
                            c = !s && fd.includes(l) && -1 === i ? l : i;
                        return (
                            (0, n.useEffect)(() => {
                                !u &&
                                    fd.includes(c) &&
                                    o.O.sound.play.sound(R.sounds.comp_7_annual_reward_tank_emergence_style());
                            }, [u, c, s]),
                            r().createElement(
                                'div',
                                { className: b()(bd.base, bd[`base__selectedIndex_${c}`], e) },
                                r().createElement('div', { className: b()(bd.vehicleBg, bd.vehicleBg__inactive) }),
                                fd.map((e) =>
                                    r().createElement('div', {
                                        className: b()(bd.vehicleBg, bd[`vehicleBg__${e}`]),
                                        key: e,
                                    }),
                                ),
                            )
                        );
                    });
                function Ad() {
                    return (
                        (Ad =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ad.apply(this, arguments)
                    );
                }
                const Dd = (e) => (e >= A.Medium ? Wi.x48 : Wi.x24Metal),
                    wd = { vehicleTypeContainer: 'VehicleInfo_vehicleTypeContainer_35', type: 'VehicleInfo_type_22' },
                    Fd = (0, De.Pi)(({ className: e, classNames: t }) => {
                        const a = F().mediaSize,
                            n = yc().model,
                            s = n.computes.vehicleReward(),
                            o = n.computes.vehicle();
                        return r().createElement(
                            'div',
                            { className: b()('VehicleInfo_base_a0', e) },
                            r().createElement('div', { className: 'VehicleInfo_background_79' }),
                            r().createElement(
                                'div',
                                { className: 'VehicleInfo_content_59' },
                                r().createElement(Fn, {
                                    text: R.strings.comp7_ext.yearlyRewards.mainYearlyRewardTitle(),
                                    binding: {
                                        vehicle: r().createElement(
                                            Xn,
                                            { args: { tooltipId: s.tooltipId }, ignoreShowDelay: !0 },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    Ui,
                                                    Ad({}, o, {
                                                        size: Dd(a),
                                                        className: 'VehicleInfo_vehicleName_d8',
                                                        classNames: wd,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    },
                                    classMix: b()('VehicleInfo_title_3b', null == t ? void 0 : t.title),
                                }),
                            ),
                        );
                    }),
                    Bd = R.strings.comp7_ext.page.heading,
                    Sd = (e) =>
                        window.setTimeout(() => o.O.sound.play.sound(R.sounds.comp_7_annual_reward_rank_points()), e),
                    yd = (0, De.Pi)(() => {
                        const e = yc(),
                            t = e.model,
                            a = e.controls,
                            s = t.root.get(),
                            i = s.hasDataError,
                            u = s.withIntro,
                            l = (0, Ze.useSpring)(gt),
                            c = mc();
                        return (
                            he(pe.n.ESCAPE, () => c.skipAll(), u),
                            Dr(() =>
                                o.O.client.events.mouse.move(([, e]) => {
                                    'outside' !== e || u || a.setHoveredCardIndex(-1);
                                }),
                            ),
                            (0, n.useEffect)(() => {
                                c.rootRef.current && (c.rootRef.current.style.pointerEvents = u ? 'none' : 'auto');
                            }, [c.rootRef, u]),
                            (0, n.useEffect)(() => {
                                if (!u) return;
                                const e = [],
                                    t = (t) => {
                                        switch (
                                            (lc.includes(t) && a.setHoveredCardIndex(lc.findIndex((e) => e === t)), t)
                                        ) {
                                            case uc.firstStageSeasonPoints:
                                            case uc.secondStageSeasonPoints:
                                            case uc.thirdStageSeasonPoints:
                                            case uc.fourthStageSeasonPoints:
                                            case uc.fifthStageSeasonPoints:
                                            case uc.sixthStageSeasonPoints:
                                                e.push(Sd(0), Sd(200), Sd(400));
                                        }
                                    };
                                return (
                                    c.events.on('change', t),
                                    () => {
                                        (c.events.off('change', t), e.forEach((e) => clearTimeout(e)));
                                    }
                                );
                            }, [c.events, a, u]),
                            (0, n.useEffect)(() => {
                                if (!u) return;
                                const e = () => {
                                    (a.setHoveredCardIndex(-1), a.setIntroViewed());
                                };
                                return (
                                    c.events.on('end', e),
                                    () => {
                                        c.events.off('end', e);
                                    }
                                );
                            }, [c.events, c.rootRef, a, u]),
                            r().createElement(
                                'div',
                                { className: 'YearlyRewardsPage_base_cc', ref: c.rootRef },
                                r().createElement(xc, null),
                                r().createElement(
                                    mt,
                                    { className: b()(be, 'YearlyRewardsPage_heading_3d') },
                                    Bd.yearlyRewards(),
                                ),
                                !i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(Cd, { className: 'YearlyRewardsPage_vehicle_1c' }),
                                        r().createElement(ud, { className: 'YearlyRewardsPage_columns_19' }),
                                    ),
                                r().createElement(
                                    Ze.animated.div,
                                    {
                                        style: l,
                                        className: b()(
                                            'YearlyRewardsPage_contentWrapper_7e',
                                            u && 'YearlyRewardsPage_contentWrapper__withIntro_f1',
                                        ),
                                    },
                                    i
                                        ? r().createElement(ki, null)
                                        : r().createElement(
                                              r().Fragment,
                                              null,
                                              r().createElement(
                                                  'div',
                                                  { className: 'YearlyRewardsPage_legend_e9' },
                                                  r().createElement(pd, null),
                                              ),
                                              r().createElement(
                                                  'div',
                                                  { className: 'YearlyRewardsPage_vehicleInfoContainer_e7' },
                                                  r().createElement(Fd, {
                                                      className: 'YearlyRewardsPage_vehicleInfo_91',
                                                  }),
                                              ),
                                              r().createElement(
                                                  'div',
                                                  { className: 'YearlyRewardsPage_status_14' },
                                                  r().createElement(hd, null),
                                              ),
                                          ),
                                ),
                            )
                        );
                    });
                let Nd;
                !(function (e) {
                    ((e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.JustStarted = 1)] = 'JustStarted'),
                        (e[(e.Active = 2)] = 'Active'),
                        (e[(e.EndSoon = 3)] = 'EndSoon'),
                        (e[(e.End = 4)] = 'End'),
                        (e[(e.Disabled = 5)] = 'Disabled'));
                })(Nd || (Nd = {}));
                const xd = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), seasonCards: e.array('seasonCards') },
                                a = (0, Re.Om)(
                                    (e) => {
                                        const a = Te(t.seasonCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, Re.Om)((e) => a(e).season, { equals: M }),
                                r = (0, Re.Om)((e) => n(e).state),
                                s = (0, Re.Om)((e) => r(e) === Nd.NotStarted),
                                o = (0, Re.Om)((e) => a(e).rank),
                                i = (0, Re.Om)((e) => a(e).hasRankReceived);
                            return Object.assign({}, t, {
                                computes: {
                                    seasonCardsLength: (0, Re.Om)(() => t.seasonCards.get().length),
                                    seasonCard: a,
                                    seasonState: r,
                                    seasonScheduleInfo: n,
                                    isSeasonNotStarted: s,
                                    rank: o,
                                    hasRankReceived: i,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            goToSeasonStatistics: e.createCallback(
                                (e) => ({ seasonName: e }),
                                'onGoToSeasonStatistics',
                            ),
                        }),
                    ),
                    Rd = xd[0],
                    kd = xd[1],
                    Pd = R.images.comp7.gui.maps.icons.backgrounds,
                    Id = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = kd().model,
                            n = a.computes.seasonScheduleInfo(e).name,
                            s = a.computes.hasRankReceived(e),
                            o = Pd.$dyn(n),
                            i = s ? ga[a.computes.rank(e)] : 'qualification';
                        return r().createElement('div', {
                            className: b()('Background_base_bf', t),
                            style: { backgroundImage: `url(${o.$dyn(i)})` },
                        });
                    }),
                    Td = {
                        base: 'LaceDivider_base_55',
                        lace: 'LaceDivider_lace_f6',
                        peak: 'LaceDivider_peak_c0',
                        peak__right: 'LaceDivider_peak__right_a7',
                        line: 'LaceDivider_line_20',
                    },
                    Ld = ({ children: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(Td.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Td.lace,
                                        Td.lace__left,
                                        null == a ? void 0 : a.lace,
                                        null == a ? void 0 : a.leftLace,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()(
                                        Td.peak,
                                        Td.peak__left,
                                        null == a ? void 0 : a.peak,
                                        null == a ? void 0 : a.leftPeak,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: b()(
                                        Td.line,
                                        Td.line__left,
                                        null == a ? void 0 : a.line,
                                        null == a ? void 0 : a.leftLine,
                                    ),
                                }),
                            ),
                            e,
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Td.lace,
                                        Td.lace__right,
                                        null == a ? void 0 : a.lace,
                                        null == a ? void 0 : a.rightLace,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()(
                                        Td.line,
                                        Td.line__right,
                                        null == a ? void 0 : a.line,
                                        null == a ? void 0 : a.rightLine,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: b()(
                                        Td.peak,
                                        Td.peak__right,
                                        null == a ? void 0 : a.peak,
                                        null == a ? void 0 : a.rightPeak,
                                    ),
                                }),
                            ),
                        ),
                    Od = R.strings.comp7_ext.yearlyStatistics,
                    Md = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = kd(),
                            n = a.model,
                            s = a.controls,
                            o = n.computes.seasonCard(e).hasStatisticsCalculated,
                            i = n.computes.seasonScheduleInfo(e).name;
                        return r().createElement(
                            'div',
                            { className: b()('CardFooter_base_b1', t) },
                            o
                                ? r().createElement(
                                      'div',
                                      { onClick: () => s.goToSeasonStatistics(i) },
                                      r().createElement(Fn, {
                                          text: Od.goToSeasonStatistics(),
                                          classMix: 'CardFooter_statisticsAvailability_5a',
                                          binding: {
                                              icon: r().createElement('div', { className: 'CardFooter_icon_20' }),
                                          },
                                      }),
                                  )
                                : r().createElement(Fn, {
                                      text: Od.generationOfStatistics(),
                                      classMix: 'CardFooter_generationOfStatistics_2a',
                                  }),
                        );
                    }),
                    $d = 'RankStatus_rank_13',
                    Wd = R.strings.comp7_ext.yearlyStatistics.rankStatus,
                    Hd = (0, De.Pi)(({ index: e }) => {
                        const t = kd().model.computes.seasonCard(e),
                            a = t.hasRankReceived,
                            n = t.rank,
                            s = t.division;
                        return r().createElement(
                            'div',
                            { className: 'RankStatus_base_61' },
                            a
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement(Fn, {
                                          classMix: $d,
                                          text: Wd.received(),
                                          binding: { rank: pa(n) },
                                      }),
                                      fa(n) &&
                                          r().createElement(Fn, { classMix: 'RankStatus_division_18', text: _a(s) }),
                                  )
                                : r().createElement('div', { className: $d }, Wd.notReceived()),
                        );
                    }),
                    zd = R.strings.comp7_ext.yearlyStatistics,
                    Ud = (0, De.Pi)(({ index: e }) => {
                        const t = kd().model.computes.seasonScheduleInfo(e),
                            a = t.endTimestamp,
                            n = t.startTimestamp,
                            s = t.state,
                            o = t.hasTentativeDates;
                        return r().createElement(
                            'div',
                            { className: b()('SeasonStatus_base_45') },
                            (() => {
                                switch (s) {
                                    case Nd.NotStarted:
                                        return r().createElement(
                                            'div',
                                            null,
                                            o
                                                ? zd.seasonDate.$num(e)
                                                : r().createElement(Fn, {
                                                      text: R.strings.comp7_ext.season.range(),
                                                      binding: Zn(n, a),
                                                  }),
                                        );
                                    case Nd.JustStarted:
                                    case Nd.EndSoon:
                                    case Nd.Active:
                                        return r().createElement('div', null, zd.seasonStatus.active());
                                    case Nd.End:
                                        return r().createElement('div', null, zd.seasonStatus.end());
                                    default:
                                        return (console.error(`Unreachable season state ${s}`), null);
                                }
                            })(),
                        );
                    }),
                    Gd = R.strings.comp7_ext,
                    Vd = ({ text: e, value: t, isPercentage: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()('Row_base_fb', a && 'Row_base__percentage_02') },
                            e,
                            r().createElement('div', { className: 'Row_dashes_9b' }),
                            r().createElement(
                                'div',
                                { className: 'Row_value_4c' },
                                (({ value: e, isPercentage: t = !1, fractionDigits: a = 2 }) =>
                                    -1 === e
                                        ? Gd.dash()
                                        : ((e, t, a) => {
                                              const n =
                                                  Number.isInteger(e) || Number.isInteger(10 * e)
                                                      ? q.Z5.getRealFormat(e, q.Gr.WO_ZERO_DIGITS)
                                                      : q.Z5.getRealFormat(parseFloat(e.toFixed(a)), q.Gr.FRACTIONAL);
                                              return t ? aa(Gd.percentage(), { percentageValue: n }) : n;
                                          })(e, t, a))({ value: t, isPercentage: a }),
                            ),
                        ),
                    qd = 'Table_container_e0',
                    jd = R.strings.comp7_ext.yearlyStatistics,
                    Qd = (0, De.Pi)(({ index: e }) => {
                        const t = kd().model.computes.seasonCard(e),
                            a = t.rating,
                            n = t.singleBattlesCount,
                            s = t.singleBattlesWinRate,
                            o = t.superPlatoonBattlesCount,
                            i = t.superPlatoonBattlesWinRate;
                        return r().createElement(
                            'div',
                            { className: b()('Table_base_e3') },
                            r().createElement(
                                'div',
                                { className: qd },
                                r().createElement(Vd, { text: jd.rating(), value: a }),
                            ),
                            r().createElement(
                                'div',
                                { className: qd },
                                r().createElement(Vd, { text: jd.battles(), value: n }),
                                r().createElement(Vd, { text: jd.wins(), value: s, isPercentage: !0 }),
                            ),
                            r().createElement(
                                'div',
                                { className: qd },
                                r().createElement(Vd, { text: jd.superPlatoonBattles(), value: o }),
                                r().createElement(Vd, { text: jd.wins(), value: i, isPercentage: !0 }),
                            ),
                        );
                    }),
                    Yd = (e) => {
                        switch (!0) {
                            case e >= A.ExtraLarge:
                                return Ca.x420;
                            case e >= A.Large:
                                return Ca.x260;
                            case e >= A.Medium:
                                return Ca.x200;
                            default:
                                return Ca.x150;
                        }
                    },
                    Xd = 'SeasonCard_rankImage_d9',
                    Kd = 'SeasonCard_divider_3e',
                    Zd = R.strings.comp7_ext.yearlyStatistics,
                    Jd = [Nd.JustStarted, Nd.Active, Nd.EndSoon],
                    em = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = kd().model,
                            n = a.computes.seasonCard(e),
                            s = n.rank,
                            o = n.division,
                            i = n.hasRankReceived,
                            u = a.computes.seasonScheduleInfo(e),
                            l = u.state,
                            c = u.name,
                            d = F().mediaSize,
                            m = Jd.includes(l);
                        return r().createElement(
                            'div',
                            { className: b()('SeasonCard_base_34', t) },
                            0 === e && r().createElement('div', { className: b()(Kd, 'SeasonCard_divider__left_58') }),
                            r().createElement('div', { className: 'SeasonCard_name_b2' }, Zd.seasonName.$num(e)),
                            r().createElement(Ud, { index: e }),
                            i
                                ? r().createElement(Da, {
                                      rank: s,
                                      size: Yd(d),
                                      seasonName: c,
                                      division: o,
                                      className: Xd,
                                  })
                                : r().createElement(oo, { size: Yd(d), seasonName: c, className: Xd }),
                            r().createElement(Hd, { index: e }),
                            r().createElement(Qd, { index: e }),
                            r().createElement(Ld, {
                                className: 'SeasonCard_laceBase_32',
                                classNames: {
                                    lace: b()(
                                        'SeasonCard_laceContainer_be',
                                        m && 'SeasonCard_laceContainer__active_46',
                                    ),
                                },
                            }),
                            m && r().createElement('div', { className: 'SeasonCard_glow_8b' }),
                            l === Nd.End &&
                                i &&
                                r().createElement(Md, { index: e, className: 'SeasonCard_cardFooter_74' }),
                            r().createElement('div', { className: b()(Kd, 'SeasonCard_divider__right_0a') }),
                        );
                    }),
                    tm = {
                        base: 'YearlyStatisticsPage_base_35',
                        heading: 'YearlyStatisticsPage_heading_64',
                        contentWrapper: 'YearlyStatisticsPage_contentWrapper_ec',
                        cardWrapper: 'YearlyStatisticsPage_cardWrapper_45',
                        cardWrapper__left: 'YearlyStatisticsPage_cardWrapper__left_4e',
                        cardWrapper__right: 'YearlyStatisticsPage_cardWrapper__right_2f',
                        bg__disabled: 'YearlyStatisticsPage_bg__disabled_1e',
                        seasonCard__disabled: 'YearlyStatisticsPage_seasonCard__disabled_d5',
                        seasonCard: 'YearlyStatisticsPage_seasonCard_64',
                    },
                    am = (0, De.Pi)(() => {
                        const e = kd().model.computes,
                            t = (0, Ze.useSpring)(gt);
                        return r().createElement(
                            'div',
                            { className: tm.base },
                            r().createElement(
                                'div',
                                { className: tm.heading },
                                r().createElement(
                                    mt,
                                    { className: be },
                                    R.strings.comp7_ext.page.heading.yearlyStatistics(),
                                ),
                                r().createElement(tr, null),
                            ),
                            r().createElement(
                                Ze.animated.div,
                                { style: t, className: tm.contentWrapper },
                                Zt(e.seasonCardsLength(), (t) => {
                                    const a = e.isSeasonNotStarted(t);
                                    return r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()(
                                                tm.cardWrapper,
                                                0 === t && tm.cardWrapper__left,
                                                t === e.seasonCardsLength() - 1 && tm.cardWrapper__right,
                                            ),
                                        },
                                        r().createElement(Id, {
                                            index: t,
                                            className: b()(tm.bg, a && tm.bg__disabled),
                                        }),
                                        r().createElement(em, {
                                            index: t,
                                            className: b()(tm.seasonCard, a && tm.seasonCard__disabled),
                                        }),
                                    );
                                }),
                            ),
                        );
                    }),
                    nm = {
                        [we.Progression]: () =>
                            r().createElement(mr, { options: xe.PROGRESSION_PAGE }, r().createElement(Ao, null)),
                        [we.RankRewards]: () =>
                            r().createElement(wo, { options: xe.RANK_REWARDS_PAGE }, r().createElement(wi, null)),
                        [we.WeeklyQuests]: () =>
                            r().createElement(El, { options: xe.WEEKLY_QUESTS_PAGE }, r().createElement(ic, null)),
                        [we.Leaderboard]: () =>
                            r().createElement(At, { options: xe.LEADERBOARD_PAGE }, r().createElement(sr, null)),
                        [we.YearlyRewards]: () =>
                            r().createElement(
                                Sc,
                                { options: xe.YEARLY_REWARDS_PAGE },
                                r().createElement(Ec, null, r().createElement(yd, null)),
                            ),
                        [we.Shop]: () => r().createElement(Ni, { options: xe.SHOP_PAGE }, r().createElement(cl, null)),
                        [we.YearlyStatistics]: () =>
                            r().createElement(Rd, { options: xe.YEARLY_STATISTICS_PAGE }, r().createElement(am, null)),
                    },
                    rm = ({ pageView: e }) => {
                        const t = nm[e];
                        return t ? r().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    sm = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_ae',
                        base__qualification: 'App_base__qualification_7e',
                        base__progression: 'App_base__progression_a4',
                        base__leaderboard: 'App_base__leaderboard_54',
                        season__first: 'App_season__first_fd',
                        season__second: 'App_season__second_df',
                        season__third: 'App_season__third_b3',
                        base__rankRewards: 'App_base__rankRewards_6b',
                        base__weeklyQuests: 'App_base__weeklyQuests_ad',
                        base__shop: 'App_base__shop_2a',
                        viewContainer: 'App_viewContainer_a6',
                        sidebar: 'App_sidebar_a2',
                        sidebar__medium: 'App_sidebar__medium_e4',
                        info: 'App_info_01',
                        whatsNewButton: 'App_whatsNewButton_0f',
                        whatsNewIcon: 'App_whatsNewIcon_ad',
                        whatsNewGlow: 'App_whatsNewGlow_99',
                        choiceAward: 'App_choiceAward_da',
                    },
                    om = { base: sm.whatsNewButton, icon: sm.whatsNewIcon, glow: sm.whatsNewGlow },
                    im = (0, De.Pi)(() => {
                        const e = Ie(),
                            t = e.model,
                            a = e.controls,
                            n = V().model,
                            s = Ae(),
                            o = t.root.get().pageViewId,
                            i = t.claimRewardsModel.get(),
                            u = i.isDisabled,
                            l = i.rewardsCount,
                            c = F().mediaSize,
                            d = t.computes.isProgressionInQualification();
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    sm.base,
                                    d && !Ce() && sm.base__qualification,
                                    !d && sm[`base__${Ne[o]}`],
                                    sm[`season__${n.season.name.get()}`],
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: sm.viewContainer },
                                r().createElement(rm, { pageView: o }),
                            ),
                            r().createElement(
                                Ye,
                                { options: xe.TABS },
                                r().createElement(ut, {
                                    pageView: o,
                                    className: b()(sm.sidebar, s.isMedium && sm.sidebar__medium),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: sm.info },
                                r().createElement(Ee, {
                                    caption: R.strings.comp7_ext.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                                r().createElement(Ee, {
                                    caption: R.strings.comp7_ext.whatsNewButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openWhatsNewScreen,
                                    classNames: om,
                                }),
                            ),
                            r().createElement(fe, { onClose: a.close }),
                            l > 0 &&
                                r().createElement(
                                    'div',
                                    { className: sm.choiceAward },
                                    r().createElement(le, {
                                        size: c >= A.Large ? ue.Big : ue.Small,
                                        count: l,
                                        disabled: u,
                                        onClick: a.openRewardsSelectionScreen,
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        r().createElement(
                            I,
                            null,
                            r().createElement(
                                Pe,
                                null,
                                r().createElement(G, { options: xe.SCHEDULE }, r().createElement(im, null)),
                            ),
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, n] = deferred[u], s = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(u--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > n; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 'lobby/MetaRootView/MetaRootView'),
        (() => {
            var e = { 'lobby/MetaRootView/MetaRootView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [s, o, i] = a,
                        u = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); u < s.length; u++)
                        ((r = s[u]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/comp7.vendors'], () => __webpack_require__(1717));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
