(() => {
    var __webpack_modules__ = {
            184: (u) => {
                u.exports = {
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
            5034: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        mouse: () => c,
                        off: () => l,
                        on: () => o,
                        onMinimize: () => i,
                        onResize: () => r,
                        onScaleUpdated: () => s,
                    }));
                var a = t(8277),
                    n = t(1708);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (0, a.E)('clientMinimized'),
                    o = (u, e) => engine.on(u, e),
                    l = (u, e) => engine.off(u, e),
                    E = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${e}`,
                                        s = E[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, i),
                                                (u.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((u.enabled = !1), a());
                        },
                        enable() {
                            ((u.enabled = !0), a());
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            3157: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = t(5034),
                    n = t(9703);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1708: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            9703: (u, e, t) => {
                'use strict';
                function a(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function n(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => n, G: () => a });
            },
            8277: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            7475: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => s });
                var a = t(3157),
                    n = t(8133),
                    r = t(3925);
                const s = { view: t(7553), client: a, sound: r.ZP, intl: n.N };
            },
            8133: (u, e, t) => {
                'use strict';
                t.d(e, { N: () => a });
                const a = {
                    toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                    toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                };
            },
            3925: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => s });
                var a = t(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, a.playSound)(n[e])), u), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            5544: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            3163: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var a = t(8277);
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
            7553: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => l,
                        arabic2roman: () => R,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => x,
                        events: () => s.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => T,
                        getScale: () => B,
                        getSize: () => _,
                        getViewGlobalPosition: () => D,
                        initExternalPaddings: () => O,
                        isEventHandled: () => b,
                        isFocused: () => h,
                        pxToRem: () => C,
                        remToPx: () => g,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => E,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => L,
                    }));
                var a = t(1308),
                    n = t(5544),
                    r = t(3163),
                    s = t(7576),
                    i = t(2319);
                const o = 15;
                function l(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function c(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function A(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function d(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: g(e.x), y: g(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function g(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const T = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    R = a.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    L = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : s.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function O(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            a = e.right,
                            n = e.bottom,
                            r = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${a}rem`),
                            u.style.setProperty('--external-padding-bottom', `${n}rem`),
                            u.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
            },
            2319: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var a in u)
                                        if ({}.hasOwnProperty.call(u, a)) {
                                            if (-1 !== e.indexOf(a)) continue;
                                            t[a] = u[a];
                                        }
                                    return t;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    l = {
                        close(u) {
                            o('popover' === u ? n : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(u) {
                            o(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4020: (u, e, t) => {
                'use strict';
                t.d(e, { n: () => a });
                let a = (function (u) {
                    return (
                        (u[(u.NONE = -1)] = 'NONE'),
                        (u[(u.ALT = 165)] = 'ALT'),
                        (u[(u.ENTER = 13)] = 'ENTER'),
                        (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                        (u[(u.SPACE = 32)] = 'SPACE'),
                        (u[(u.END = 35)] = 'END'),
                        (u[(u.HOME = 36)] = 'HOME'),
                        (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                        (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                        (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                        (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                        (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                        (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                        (u[(u.PLUS = 187)] = 'PLUS'),
                        (u[(u.MINUS = 189)] = 'MINUS'),
                        (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                        (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                        (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                        (u[(u.DELETE = 46)] = 'DELETE'),
                        (u[(u.TAB = 9)] = 'TAB'),
                        (u[(u.KEY_N = 78)] = 'KEY_N'),
                        (u[(u.KEY_1 = 49)] = 'KEY_1'),
                        (u[(u.KEY_2 = 50)] = 'KEY_2'),
                        (u[(u.KEY_3 = 51)] = 'KEY_3'),
                        (u[(u.KEY_4 = 52)] = 'KEY_4'),
                        (u[(u.KEY_5 = 53)] = 'KEY_5'),
                        (u[(u.KEY_6 = 54)] = 'KEY_6'),
                        (u[(u.KEY_7 = 55)] = 'KEY_7'),
                        (u[(u.KEY_8 = 56)] = 'KEY_8'),
                        (u[(u.KEY_9 = 57)] = 'KEY_9'),
                        u
                    );
                })({});
            },
            1308: (u, e, t) => {
                'use strict';
                t.d(e, { HG: () => i, cg: () => r });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(u) {
                    let e = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; u >= n[t]; ) ((e += a[t]), (u -= n[t]));
                    return e;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (u) => (s ? `${u}` : r(u));
            },
            8973: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(7475);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8973),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(828);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            828: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => m });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                var r = t(8973);
                var s = t(6609);
                let i = (function (u) {
                    return (
                        (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'),
                        u
                    );
                })({});
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(4020),
                    d = t(7475);
                const _ = ['args'];
                function F(u, e, t, a, n, r, s) {
                    try {
                        var i = u[r](s),
                            o = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(o) : Promise.resolve(o).then(a, n);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function s(u) {
                                            F(r, a, n, s, i, 'next', u);
                                        }
                                        function i(u) {
                                            F(r, a, n, s, i, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var a in u)
                                        if ({}.hasOwnProperty.call(u, a)) {
                                            if (-1 !== e.indexOf(a)) continue;
                                            t[a] = u[a];
                                        }
                                    return t;
                                })(e, _);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    C = () => B(i.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(5533);
                const h = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                _ = {
                                    x: d.O.view.pxToRem(l) + s.x,
                                    y: d.O.view.pxToRem(E) + s.y,
                                    width: d.O.view.pxToRem(c),
                                    height: d.O.view.pxToRem(A),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: D(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = w;
            },
            6609: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e, t = 2) => systemLocale.getRealFormat(u, e, t),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            2229: (u, e, t) => {
                'use strict';
                var a = t(7363),
                    n = t.n(a);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(7475);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                function o(u = s.O.client.getSize('rem')) {
                    const e = u.width,
                        t = u.height;
                    return Object.assign(
                        { width: e, height: t },
                        (function (u, e, t) {
                            const a = (function (u, e) {
                                    switch (!0) {
                                        case u >= e.extraLarge.width:
                                            return e.extraLarge.weight;
                                        case u >= e.large.width && u < e.extraLarge.width:
                                            return e.large.weight;
                                        case u >= e.medium.width && u < e.large.width:
                                            return e.medium.weight;
                                        case u >= e.small.width && u < e.medium.width:
                                            return e.small.weight;
                                        default:
                                            return e.extraSmall.weight;
                                    }
                                })(u, t),
                                n = (function (u, e) {
                                    switch (!0) {
                                        case u >= e.extraLarge.height:
                                            return e.extraLarge.weight;
                                        case u >= e.large.height && u < e.extraLarge.height:
                                            return e.large.weight;
                                        case u >= e.medium.height && u < e.large.height:
                                            return e.medium.weight;
                                        case u >= e.small.height && u < e.medium.height:
                                            return e.small.weight;
                                        default:
                                            return e.extraSmall.weight;
                                    }
                                })(e, t),
                                r = Math.min(a, n);
                            return {
                                extraLarge: r === t.extraLarge.weight,
                                large: r === t.large.weight,
                                medium: r === t.medium.weight,
                                small: r === t.small.weight,
                                extraSmall: r === t.extraSmall.weight,
                                extraLargeWidth: a === t.extraLarge.weight,
                                largeWidth: a === t.large.weight,
                                mediumWidth: a === t.medium.weight,
                                smallWidth: a === t.small.weight,
                                extraSmallWidth: a === t.extraSmall.weight,
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(e, t, i),
                    );
                }
                const l = o(),
                    E = (0, a.createContext)(l),
                    c = ['children'];
                (0, a.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var a in u)
                                if ({}.hasOwnProperty.call(u, a)) {
                                    if (-1 !== e.indexOf(a)) continue;
                                    t[a] = u[a];
                                }
                            return t;
                        })(u, c);
                    const n = (0, a.useContext)(E),
                        s = n.extraLarge,
                        i = n.large,
                        o = n.medium,
                        l = n.small,
                        A = n.extraSmall,
                        d = n.extraLargeWidth,
                        _ = n.largeWidth,
                        F = n.mediumWidth,
                        D = n.smallWidth,
                        m = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        w = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return e;
                        if (t.large && i) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && d) return r(e, t, w);
                        if (t.largeWidth && _) return r(e, t, w);
                        if (t.mediumWidth && F) return r(e, t, w);
                        if (t.smallWidth && D) return r(e, t, w);
                        if (t.extraSmallWidth && m) return r(e, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                });
                const A = ({ children: u }) => {
                    const e = (0, a.useState)(o),
                        t = e[0],
                        r = e[1],
                        i = (0, a.useState)(!1),
                        l = i[0],
                        c = i[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function u() {
                                r((u) => {
                                    const e = s.O.client.getSize('rem');
                                    return u.width === e.width && u.height === e.height ? u : o(e);
                                });
                            }
                            return (
                                u(),
                                c(!0),
                                s.O.client.events.on('clientResized', u),
                                s.O.client.events.on('self.onScaleUpdated', u),
                                () => {
                                    (s.O.client.events.off('clientResized', u),
                                        s.O.client.events.off('self.onScaleUpdated', u));
                                }
                            );
                        }, []),
                        n().createElement(E.Provider, { value: t }, l && u)
                    );
                };
                var d = t(9849),
                    _ = t.n(d),
                    F = t(184),
                    D = t.n(F);
                let m = (function (u) {
                        return (
                            (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.width)] = 'Small'),
                            (u[(u.Medium = i.medium.width)] = 'Medium'),
                            (u[(u.Large = i.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                            u
                        );
                    })({}),
                    B = (function (u) {
                        return (
                            (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.width)] = 'Small'),
                            (u[(u.Medium = i.medium.width)] = 'Medium'),
                            (u[(u.Large = i.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                            u
                        );
                    })({}),
                    C = (function (u) {
                        return (
                            (u[(u.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.height)] = 'Small'),
                            (u[(u.Medium = i.medium.height)] = 'Medium'),
                            (u[(u.Large = i.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'),
                            u
                        );
                    })({});
                const g = () => {
                        const u = (0, a.useContext)(E),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return m.ExtraLarge;
                                    case u.large:
                                        return m.Large;
                                    case u.medium:
                                        return m.Medium;
                                    case u.small:
                                        return m.Small;
                                    case u.extraSmall:
                                        return m.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), m.ExtraSmall);
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case u.largeWidth:
                                        return B.Large;
                                    case u.mediumWidth:
                                        return B.Medium;
                                    case u.smallWidth:
                                        return B.Small;
                                    case u.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(u),
                            s = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return C.ExtraLarge;
                                    case u.largeHeight:
                                        return C.Large;
                                    case u.mediumHeight:
                                        return C.Medium;
                                    case u.smallHeight:
                                        return C.Small;
                                    case u.extraSmallHeight:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
                    },
                    p = ['children', 'className'];
                function h() {
                    return (
                        (h = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        h.apply(null, arguments)
                    );
                }
                const w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL_WIDTH,
                        [B.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [B.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    b = {
                        [C.ExtraSmall]: '',
                        [C.Small]: D().SMALL_HEIGHT,
                        [C.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [C.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [C.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    v = {
                        [m.ExtraSmall]: '',
                        [m.Small]: D().SMALL,
                        [m.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [m.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [m.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    f = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (-1 !== e.indexOf(a)) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, p);
                        const r = g(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', h({ className: _()(t, w[s], b[i], v[o]) }, a), e);
                    },
                    T = ['children'];
                const S = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var a in u)
                                if ({}.hasOwnProperty.call(u, a)) {
                                    if (-1 !== e.indexOf(a)) continue;
                                    t[a] = u[a];
                                }
                            return t;
                        })(u, T);
                    return n().createElement(A, null, n().createElement(f, t, e));
                };
                var P = t(1533),
                    y = t.n(P);
                let L = (function (u) {
                    return (
                        (u.BUY_BATTLE_PASS = 'buyBattlePassReason'),
                        (u.BUY_BATTLE_PASS_LEVELS = 'buyBattlePassLevelsReason'),
                        (u.BUY_MULTIPLE_BATTLE_PASS = 'buyMultipleBattlePassReason'),
                        (u.BUY_BATTLE_PASS_WITH_LEVELS = 'buyBattlePassWithLevelsReason'),
                        (u.STYLE_UPGRADE = 'styleUpgradeReason'),
                        (u.DEFAULT = 'defaultReason'),
                        u
                    );
                })({});
                function x(u) {
                    return u;
                }
                function O() {
                    return !1;
                }
                console.log;
                var M = t(3305);
                function N(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return I(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? I(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function I(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const k = (u) => (0 === u ? window : window.subViews.get(u));
                function U(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var G = t(5369);
                const H = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: o, mocks: l }) {
                                const E = (0, a.useRef)([]),
                                    c = (t, a, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = k,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = s.O.view.addModelObserver(o, e, !0);
                                                        return (n.set(l, t), u && t(i(r)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = N(n.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : o.readByPath(u),
                                            c = (u) => E.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (u) => {
                                                        const e = l(u),
                                                            a = M.LO.box(e, { equals: O });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, M.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            n = M.LO.box(a, { equals: O });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, M.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const a = null != e ? e : l(u),
                                                            n = M.LO.box(a, { equals: O });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, M.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const a = l(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = M.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, M.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                r = Object.entries(n),
                                                                s = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = M.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, M.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: A, externalModel: o, cleanup: c };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(d) : e(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    d = (0, a.useState)(r),
                                    _ = d[0],
                                    F = d[1],
                                    D = (0, a.useState)(() => c(r, i, l)),
                                    m = D[0],
                                    B = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? B(c(_, i, l)) : (A.current = !0);
                                    }, [l, _, i]),
                                    (0, a.useEffect)(() => {
                                        F(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), E.current.forEach((u) => u()));
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    root: u.object(),
                                    mainRewards: u.array('mainRewards.items'),
                                    additionalRewards: u.array('additionalRewards.items'),
                                    packageRewards: u.array('packageRewards.items'),
                                    canToOpenAdditionView: M.LO.box(!1),
                                },
                                t = (0, G.Om)(() => e.root.get().reason === L.BUY_BATTLE_PASS),
                                a = (0, G.Om)(() => e.root.get().reason === L.BUY_BATTLE_PASS_WITH_LEVELS),
                                n = (0, G.Om)(() => e.root.get().reason === L.BUY_MULTIPLE_BATTLE_PASS),
                                r = (0, G.Om)(() => t() || n() || a()),
                                s = (0, G.Om)(() => e.root.get().reason === L.STYLE_UPGRADE),
                                i = (0, G.Om)(
                                    () =>
                                        r() && !e.canToOpenAdditionView.get()
                                            ? U(e.packageRewards.get(), x)
                                            : U(e.additionalRewards.get(), x),
                                    { equals: O },
                                ),
                                o = (0, G.Om)(() => i().length),
                                l = (0, G.Om)(() => o() > 0),
                                E = (0, G.Om)(() => U(e.mainRewards.get(), x), { equals: O }),
                                c = (0, G.Om)(() => {
                                    const u = E();
                                    if (1 === u.length) return u;
                                    const e = [...u],
                                        t = e[0];
                                    return ((e[0] = e[1]), (e[1] = t), e);
                                }),
                                A = (0, G.Om)(() => (e.root.get().isFinalReward ? c() : E())),
                                d = (0, G.Om)(() => A().length),
                                _ = (0, G.Om)(() => {
                                    const u = e.root.get().isFinalReward;
                                    return 1 === d() || u;
                                }),
                                F = (0, G.Om)(() => {
                                    const u = e.root.get().isFinalReward;
                                    return (2 !== A().length && u) || r() || s();
                                }),
                                D = [L.BUY_BATTLE_PASS_LEVELS, L.BUY_BATTLE_PASS_WITH_LEVELS, L.DEFAULT].includes(
                                    e.root.get().reason,
                                ),
                                m = (0, G.Om)(() => {
                                    const u = e.root.get(),
                                        t = u.isPostProgressionUnlocked,
                                        a = u.isExtra,
                                        n = u.isFinalReward;
                                    return t && !a && n && D;
                                });
                            return Object.assign({}, e, {
                                computes: {
                                    isReasonBuy: t,
                                    isReasonBuyWithLevels: a,
                                    isMultiplePurchase: n,
                                    isReasonBuyCurrently: r,
                                    isReasonStyleUpgrade: s,
                                    getAdditionalRewards: i,
                                    getAdditionalRewardsLength: o,
                                    hasAdditionalRewards: l,
                                    getRewards: A,
                                    getRewardsLength: d,
                                    hasBigSizeReward: _,
                                    getFinalRewards: c,
                                    hasGlowAnimation: F,
                                    hasPostProgressionBanner: m,
                                },
                            });
                        },
                        ({ model: u, externalModel: e }) => ({
                            enableToOpenAdditionView: (0, M.aD)(() => {
                                u.canToOpenAdditionView.set(!0);
                            }),
                            buy: e.createCallbackNoArgs('onBuyClick'),
                            close: e.createCallbackNoArgs('onClose'),
                            onShowPostProgression: e.createCallbackNoArgs('onShowPostProgression'),
                        }),
                    ),
                    $ = H[0],
                    W = H[1],
                    V = {
                        base: 'TextButton_base_a231c',
                        base__right: 'TextButton_base__right_bfac3',
                        icon: 'TextButton_icon_cdfc0',
                        icon__back: 'TextButton_icon__back_fc1bb',
                        icon__forward: 'TextButton_icon__forward_efa2d',
                        icon__close: 'TextButton_icon__close_e2f0f',
                        icon__info: 'TextButton_icon__info_e32c0',
                        glow: 'TextButton_glow_d6e04',
                        caption: 'TextButton_caption_f4e8d',
                        caption__back: 'TextButton_caption__back_d358d',
                        caption__forward: 'TextButton_caption__forward_ff93d',
                        caption__close: 'TextButton_caption__close_fc554',
                        caption__info: 'TextButton_caption__info_c263a',
                        goto: 'TextButton_goto_d3960',
                        base__left: 'TextButton_base__left_ec79d',
                        shine: 'TextButton_shine_f8873',
                    },
                    z = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function Y() {
                    return (
                        (Y = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Y.apply(null, arguments)
                    );
                }
                const q = (u) => {
                    let e = u.caption,
                        t = u.onClick,
                        r = u.goto,
                        i = u.classNames,
                        o = u.onMouseEnter,
                        l = u.onMouseLeave,
                        E = u.onMouseDown,
                        c = u.onMouseUp,
                        A = u.side,
                        d = void 0 === A ? 'left' : A,
                        F = u.type,
                        D = void 0 === F ? 'back' : F,
                        m = u.soundHover,
                        B = void 0 === m ? 'highlight' : m,
                        C = u.soundClick,
                        g = void 0 === C ? 'play' : C,
                        p = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var a in u)
                                if ({}.hasOwnProperty.call(u, a)) {
                                    if (-1 !== e.indexOf(a)) continue;
                                    t[a] = u[a];
                                }
                            return t;
                        })(u, z);
                    const h = (0, a.useCallback)(
                            (u) => {
                                (null == o || o(u), s.O.sound.play.sound(B));
                            },
                            [o, B],
                        ),
                        w = (0, a.useCallback)(
                            (u) => {
                                null == l || l(u);
                            },
                            [l],
                        ),
                        b = (0, a.useCallback)(
                            (u) => {
                                (null == E || E(u), s.O.sound.play.sound(g));
                            },
                            [E, g],
                        ),
                        v = (0, a.useCallback)(
                            (u) => {
                                null == c || c(u);
                            },
                            [c],
                        );
                    return n().createElement(
                        'div',
                        Y(
                            {
                                className: _()(V.base, V[`base__${D}`], V[`base__${d}`], null == i ? void 0 : i.base),
                                onMouseEnter: h,
                                onMouseLeave: w,
                                onMouseDown: b,
                                onMouseUp: v,
                                onClick: t,
                            },
                            p,
                        ),
                        'info' !== D && n().createElement('div', { className: V.shine }),
                        n().createElement(
                            'div',
                            { className: _()(V.icon, V[`icon__${D}`], V[`icon__${d}`], null == i ? void 0 : i.icon) },
                            n().createElement('div', { className: _()(V.glow, null == i ? void 0 : i.glow) }),
                        ),
                        n().createElement(
                            'div',
                            { className: _()(V.caption, V[`caption__${D}`], null == i ? void 0 : i.caption) },
                            e,
                        ),
                        r && n().createElement('div', { className: _()(V.goto, null == i ? void 0 : i.goto) }, r),
                    );
                };
                var j = t(4020),
                    X = t(828);
                const K = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Q(u = j.n.NONE, e = K, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (!n && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), e(a), t && a.stopPropagation());
                            }
                        }
                    }, [e, u, t, n]);
                }
                var Z = t(8354);
                let J = (function (u) {
                    return ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'), u);
                })({});
                function uu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function eu(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                const tu = (u) => u.replace(/&nbsp;/g, ' '),
                    au = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    nu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    ru = (u, e, t = J.left) => u.split(e).reduce(t === J.left ? au : nu, []),
                    su = (() => {
                        const u = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((u) => u.source)
                                .join('|'),
                            'gum',
                        );
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    iu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ou = (u, e = J.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (iu.includes(t)) return su(u);
                        if ('ja' === t) {
                            return (0, Z.D4)()
                                .parse(u)
                                .map((u) => tu(u));
                        }
                        return ((u, e = J.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = tu(u);
                            return (ru(n, /( )/, e).forEach((u) => (t = t.concat(ru(u, a, J.left)))), t);
                        })(u, e);
                    };
                var lu = t(2041);
                const Eu = (u, e, t = '') => {
                    const a = t.length > 0 ? `_${t}` : t,
                        n = u.$dyn(`c_${e}${a}`),
                        r = String(e).slice(-1),
                        s = u.$dyn(`default_${r}${a}`);
                    return n || s;
                };
                var cu = t(4431);
                let Au = (function (u) {
                        return (
                            (u.Items = 'items'),
                            (u.Equipment = 'equipment'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.Goodies = 'goodies'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Tokens = 'tokens'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.CrewBooks = 'crewBooks'),
                            (u.Customizations = 'customizations'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Tankman = 'tankman'),
                            (u.Tankwoman = 'tankwoman'),
                            (u.TankmenXp = 'tankmenXP'),
                            (u.TankmenXpFactor = 'tankmenXPFactor'),
                            (u.FreeXpFactor = 'freeXPFactor'),
                            (u.BattleToken = 'battleToken'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.FreeXp = 'freeXP'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattlePassSelectToken = 'battlePassSelectToken'),
                            (u.BattlePassTicket = 'lootBox_commonTicket'),
                            (u.BattlePassTaler = 'bptaler'),
                            (u.StyleProgressToken = 'styleProgressToken'),
                            (u.TmanToken = 'tmanToken'),
                            (u.NaturalCover = 'naturalCover'),
                            (u.BpCoin = 'bpcoin'),
                            (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BonusX5 = 'battle_bonus_x5'),
                            (u.CrewBonusX3 = 'crew_bonus_x3'),
                            (u.Vehicles = 'vehicles'),
                            (u.EpicSelectToken = 'epicSelectToken'),
                            (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (u.DeluxeGift = 'deluxe_gift'),
                            (u.BattleBoosterGift = 'battleBooster_gift'),
                            (u.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                            (u.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                            (u.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                            (u.OptionalDevice = 'optionalDevice'),
                            (u.EquipCoin = 'equipCoin'),
                            (u.LootBox = 'lootBox'),
                            (u.BrCoin = 'brcoin'),
                            (u.Attachment = 'attachment'),
                            u
                        );
                    })({}),
                    du = (function (u) {
                        return (
                            (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48'),
                            u
                        );
                    })({}),
                    _u = (function (u) {
                        return (
                            (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'),
                            u
                        );
                    })({}),
                    Fu = (function (u) {
                        return (
                            (u.ATTACHMENT_RARE = 'rare'),
                            (u.ATTACHMENT_EPIC = 'epic'),
                            (u.ATTACHMENT_LEGENDARY = 'legendary'),
                            (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            u
                        );
                    })({}),
                    Du = (function (u) {
                        return ((u.BATTLE_BOOSTER = 'battleBooster'), u);
                    })({}),
                    mu = (function (u) {
                        return (
                            (u.ATTACHMENT_RARE = 'rare'),
                            (u.ATTACHMENT_EPIC = 'epic'),
                            (u.ATTACHMENT_LEGENDARY = 'legendary'),
                            (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            u
                        );
                    })({});
                const Bu = [Au.Attachment];
                const Cu = ({ value: u, format: e = 'integral' }) => {
                        const t = (function (u) {
                                return 'gold' === u ? X.B3.GOLD : X.B3.INTEGRAL;
                            })(e),
                            a = X.Z5.getNumberFormat(u, t);
                        return void 0 !== u && void 0 !== a ? a : null;
                    },
                    gu = [
                        Au.Items,
                        Au.Equipment,
                        Au.Xp,
                        Au.XpFactor,
                        Au.Blueprints,
                        Au.BlueprintsAny,
                        Au.Goodies,
                        Au.Berths,
                        Au.Slots,
                        Au.Tokens,
                        Au.CrewSkins,
                        Au.CrewBooks,
                        Au.Customizations,
                        Au.CreditsFactor,
                        Au.TankmenXp,
                        Au.TankmenXpFactor,
                        Au.FreeXpFactor,
                        Au.BattleToken,
                        Au.LootBox,
                        Au.PremiumUniversal,
                        Au.NaturalCover,
                        Au.BpCoin,
                        Au.BattlePassSelectToken,
                        Au.BattlaPassFinalAchievement,
                        Au.BattleBadge,
                        Au.BattlePassTicket,
                        Au.BonusX5,
                        Au.CrewBonusX3,
                        Au.EpicSelectToken,
                        Au.Comp7TokenWeeklyReward,
                        Au.DeluxeGift,
                        Au.ModernizedDevicesT1Gift,
                        Au.ModernizedDevicesT2Gift,
                        Au.ModernizedDevicesT3Gift,
                        Au.BattleBoosterGift,
                        Au.OptionalDevice,
                        Au.Attachment,
                    ],
                    pu = [Au.Gold, Au.Credits, Au.Crystal, Au.FreeXp],
                    hu = [Au.BattlePassPoints, Au.EquipCoin],
                    wu = [Au.PremiumPlus, Au.Premium],
                    bu = ['engravings', 'backgrounds'],
                    vu = ['engraving', 'background'],
                    fu = (u, e = du.Small) => {
                        const t = u.name,
                            a = u.type,
                            n = u.value,
                            r = u.icon,
                            s = u.item,
                            i = u.dogTagType,
                            o = ((u) => {
                                switch (u) {
                                    case du.S600x450:
                                        return 'c_600x450';
                                    case du.S400x300:
                                        return 'c_400x300';
                                    case du.S296x222:
                                        return 'c_296x222';
                                    case du.S232x174:
                                        return 'c_232x174';
                                    case du.Big:
                                        return 'c_80x80';
                                    case du.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const a = bu[u];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(vu[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, e, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${e}.${r}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${e}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Tu = [du.Small, du.Big],
                    Ru = [
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
                function Su(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const Pu = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: X.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    yu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            s = u.onMouseLeave,
                            i = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            d = u.decoratorId,
                            _ = void 0 === d ? 0 : d,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (-1 !== e.indexOf(a)) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Ru);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            a = R.invalid('resId'),
                                            n = '';
                                        var r;
                                        return (
                                            e &&
                                                ((n =
                                                    (null == (r = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: e, resId: a }
                                        );
                                    })().resId,
                                [B],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Pu(t, _, { isMouseEvent: !0, on: !0, arguments: Su(n) }, w),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, w, C]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Pu(t, _, { on: !1 }, w),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, w, g]),
                            f = (0, a.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && v();
                            }, [D, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return D
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(b, E ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (v(), null == s || s(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === A && v(), null == o || o(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === A && v(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    Lu = ['children'];
                function xu() {
                    return (
                        (xu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        xu.apply(null, arguments)
                    );
                }
                const Ou = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (-1 !== e.indexOf(a)) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Lu);
                        return n().createElement(
                            yu,
                            xu(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    Mu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Nu() {
                    return (
                        (Nu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Nu.apply(null, arguments)
                    );
                }
                const Iu = R.views.common.tooltip_window.simple_tooltip_content,
                    ku = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            s = u.note,
                            i = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var a in u)
                                    if ({}.hasOwnProperty.call(u, a)) {
                                        if (-1 !== e.indexOf(a)) continue;
                                        t[a] = u[a];
                                    }
                                return t;
                            })(u, Mu);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: s, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, r, s, o]);
                        return n().createElement(
                            yu,
                            Nu(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Iu.SimpleTooltipHtmlContent('resId') : Iu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function Uu() {
                    return (
                        (Uu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                  }
                                  return u;
                              }),
                        Uu.apply(null, arguments)
                    );
                }
                const Gu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const a = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(ku, e, a);
                        const r = e.contentId;
                        return r ? n().createElement(yu, Uu({}, e, { contentId: r }), a) : n().createElement(Ou, e, a);
                    },
                    Hu = {
                        base: 'Reward_base_b1fec',
                        base__s48x48: 'Reward_base__s48x48_ea3ee',
                        base__small: 'Reward_base__small_d4940',
                        base__s80x80: 'Reward_base__s80x80_de3ac',
                        base__big: 'Reward_base__big_a4f0e',
                        base__s128x100: 'Reward_base__s128x100_c29f0',
                        base__s180x135: 'Reward_base__s180x135_cb4c8',
                        base__s232x174: 'Reward_base__s232x174_aea24',
                        base__s296x222: 'Reward_base__s296x222_cbf7c',
                        base__s400x300: 'Reward_base__s400x300_bb29d',
                        base__s600x450: 'Reward_base__s600x450_c4f07',
                        tooltipWrapper: 'Reward_tooltipWrapper_af665',
                        icon: 'Reward_icon_b619b',
                        overlay: 'Reward_overlay_dac5c',
                        base__normalize: 'Reward_base__normalize_b8703',
                        highlight: 'Reward_highlight_df36b',
                        image: 'Reward_image_e2997',
                        info: 'Reward_info_b27d2',
                        info__multi: 'Reward_info__multi_e08a5',
                        info__credits: 'Reward_info__credits_ccc0d',
                        info__gold: 'Reward_info__gold_af0a5',
                        info__bptaler: 'Reward_info__bptaler_d4229',
                        info__crystal: 'Reward_info__crystal_b0d9d',
                        info__premiumTank: 'Reward_info__premiumTank_f53be',
                        title: 'Reward_title_ab4e2',
                        timer: 'Reward_timer_c097c',
                    },
                    $u = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: a = du.Big,
                        special: r,
                        value: s,
                        valueType: i,
                        title: o,
                        style: l,
                        className: E,
                        classNames: c,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const F = ((u, e) => {
                                if (void 0 === e || !Tu.includes(u)) return null;
                                switch (e) {
                                    case Fu.BATTLE_BOOSTER:
                                    case Fu.BATTLE_BOOSTER_REPLACE:
                                        return Du.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            D = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case Fu.BATTLE_BOOSTER:
                                        return mu.BATTLE_BOOSTER;
                                    case Fu.BATTLE_BOOSTER_REPLACE:
                                        return mu.BATTLE_BOOSTER_REPLACE;
                                    case Fu.BUILT_IN_EQUIPMENT:
                                        return mu.BUILT_IN_EQUIPMENT;
                                    case Fu.EQUIPMENT_PLUS:
                                        return mu.EQUIPMENT_PLUS;
                                    case Fu.EQUIPMENT_TROPHY_BASIC:
                                        return mu.EQUIPMENT_TROPHY_BASIC;
                                    case Fu.EQUIPMENT_TROPHY_UPGRADED:
                                        return mu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Fu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return mu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Fu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return mu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Fu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return mu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_1:
                                        return mu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_2:
                                        return mu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_3:
                                        return mu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_4:
                                        return mu.PROGRESSION_STYLE_UPGRADED_4;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_5:
                                        return mu.PROGRESSION_STYLE_UPGRADED_5;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_6:
                                        return mu.PROGRESSION_STYLE_UPGRADED_6;
                                    case Fu.ATTACHMENT_RARE:
                                        return mu.ATTACHMENT_RARE;
                                    case Fu.ATTACHMENT_EPIC:
                                        return mu.ATTACHMENT_EPIC;
                                    case Fu.ATTACHMENT_LEGENDARY:
                                        return mu.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            m = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case _u.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case _u.CURRENCY:
                                    case _u.NUMBER:
                                        return n().createElement(Cu, { format: 'integral', value: Number(u) });
                                    case _u.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(s, i);
                        return n().createElement(
                            'div',
                            {
                                className: _()(Hu.base, Hu[`base__${a}`], Bu.includes(u) && Hu.base__normalize, E),
                                style: l,
                            },
                            n().createElement(
                                Gu,
                                { tooltipArgs: A, className: Hu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: _()(Hu.image, null == c ? void 0 : c.image) },
                                        F &&
                                            n().createElement('div', {
                                                className: _()(Hu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            n().createElement('div', {
                                                className: _()(Hu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        D &&
                                            n().createElement('div', {
                                                className: _()(Hu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${D}_overlay)`,
                                                },
                                            }),
                                    ),
                                    m &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: _()(
                                                    Hu.info,
                                                    Hu[`info__${u}`],
                                                    i === _u.MULTI && Hu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            m,
                                        ),
                                    o && n().createElement('div', { className: Hu.title }, o),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Gu,
                                    { tooltipArgs: d },
                                    n().createElement('div', {
                                        className: _()(Hu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Wu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                var Vu = t(1374);
                var zu = t(6609);
                (Date.now(), zu.Ew.getRegionalDateTime, zu.Ew.getFormattedDateTime);
                let Yu = (function (u) {
                    return ((u.style = 'style'), (u.tankman = 'tankman'), u);
                })({});
                (Yu.style, Yu.tankman);
                const qu = (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                    ju = (u) => {
                        const e = u.bigIcon,
                            t = u.overlayType,
                            a = u.name;
                        if ('equipmentTrophyBasic' === t) {
                            const u = `trophyBasic${e.charAt(0).toUpperCase()}${e.slice(1)}`;
                            return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(u)})` };
                        }
                        return a === Au.CrewBooks
                            ? { backgroundImage: `url(R.images.gui.maps.icons.crewBooks.books.${du.S600x450}.${e})` }
                            : a === Au.Attachment
                              ? { backgroundImage: `url(R.images.gui.maps.vehicles.attachments.${du.S600x450}.${e})` }
                              : { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(`${e}`)})` };
                    },
                    Xu = 'AdditionalRewards_base_d0cb8',
                    Ku = 'AdditionalRewards_title_bb5e3',
                    Qu = 'AdditionalRewards_title__updateAnimation_c49b7',
                    Zu = 'AdditionalRewards_reward_d61fb',
                    Ju = 'AdditionalRewards_rewardsList_f65e3',
                    ue = R.strings.battle_pass.battlePassAwardsView,
                    ee = (0, lu.Pi)(({ rewards: u, pageNumber: e, className: t }) => {
                        const a = W().model.canToOpenAdditionView.get(),
                            r = g().mediaSize >= m.Large ? du.Big : du.Small,
                            s = 1 === e ? 1600 - (a ? 800 : 0) : 100,
                            i = (0, Vu.useTransition)(u, {
                                from: { opacity: 0, y: '20rem' },
                                enter: { opacity: 1, y: '0rem' },
                                trail: 100,
                                config: { duration: 300, easing: qu },
                                onStart: () => Wu('bp_reward'),
                                delay: s,
                            });
                        return n().createElement(
                            'div',
                            { className: _()(Xu, t) },
                            n().createElement('div', { className: _()(Ku, a && Qu) }, ue.additionalRewards.subText()),
                            n().createElement(
                                'div',
                                { className: Ju },
                                i((u, e) => {
                                    const t = e.item || e.name,
                                        a = fu(e, r),
                                        s =
                                            ((i = e.name),
                                            gu.includes(i)
                                                ? _u.MULTI
                                                : pu.includes(i)
                                                  ? _u.CURRENCY
                                                  : hu.includes(i)
                                                    ? _u.NUMBER
                                                    : wu.includes(i)
                                                      ? _u.PREMIUM_PLUS
                                                      : _u.STRING);
                                    var i;
                                    const o = ((u, e, t) => {
                                        const a = e && { contentId: e };
                                        return Object.assign(
                                            {
                                                args: u,
                                                isEnabled: Boolean((u && u.tooltipId) || e),
                                                ignoreMouseClick: !0,
                                                ignoreShowDelay: !e,
                                            },
                                            a,
                                            t,
                                        );
                                    })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), { ignoreShowDelay: !0 });
                                    return n().createElement(
                                        Vu.animated.div,
                                        { className: Zu, style: u },
                                        n().createElement($u, {
                                            name: t,
                                            image: a,
                                            special: e.overlayType,
                                            value: e.value,
                                            valueType: s,
                                            size: r,
                                            tooltipArgs: o,
                                        }),
                                    );
                                }),
                            ),
                        );
                    });
                let te = (function (u) {
                    return (
                        (u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'),
                        u
                    );
                })({});
                const ae = {
                    base: 'CButton_base_bb13f',
                    base__main: 'CButton_base__main_dd05d',
                    base__primary: 'CButton_base__primary_c75a2',
                    base__primaryGreen: 'CButton_base__primaryGreen_ae65b',
                    base__primaryRed: 'CButton_base__primaryRed_b1341',
                    base__secondary: 'CButton_base__secondary_f2c20',
                    base__ghost: 'CButton_base__ghost_f452b',
                    base__extraSmall: 'CButton_base__extraSmall_e1273',
                    base__small: 'CButton_base__small_c20a3',
                    base__medium: 'CButton_base__medium_ef59a',
                    base__large: 'CButton_base__large_bafd5',
                    base__disabled: 'CButton_base__disabled_eef7a',
                    back: 'CButton_back_e957b',
                    texture: 'CButton_texture_ccd7e',
                    state: 'CButton_state_f2bb4',
                    base__focus: 'CButton_base__focus_b0875',
                    stateHighlightHover: 'CButton_stateHighlightHover_bd0cb',
                    stateHighlightActive: 'CButton_stateHighlightActive_e9a8a',
                    stateDisabled: 'CButton_stateDisabled_ed209',
                    base__highlightActive: 'CButton_base__highlightActive_db27d',
                    content: 'CButton_content_a99fc',
                };
                let ne = (function (u) {
                        return (
                            (u.main = 'main'),
                            (u.primary = 'primary'),
                            (u.primaryGreen = 'primaryGreen'),
                            (u.primaryRed = 'primaryRed'),
                            (u.secondary = 'secondary'),
                            (u.ghost = 'ghost'),
                            u
                        );
                    })({}),
                    re = (function (u) {
                        return (
                            (u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'),
                            u
                        );
                    })({});
                const se = ({
                    children: u,
                    size: e,
                    disabled: t,
                    mixClass: r,
                    onMouseEnter: s,
                    onMouseMove: i,
                    onMouseDown: o,
                    onMouseUp: l,
                    onMouseLeave: E,
                    onClick: c,
                    isFocused: A = !1,
                    type: d = ne.primary,
                    soundHover: F = 'highlight',
                    soundClick: D = 'play',
                }) => {
                    const m = (0, a.useRef)(null),
                        B = (0, a.useState)(A),
                        C = B[0],
                        g = B[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        w = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function u(u) {
                                C && null !== m.current && !m.current.contains(u.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, a.useEffect)(() => {
                            g(A);
                        }, [A]),
                        n().createElement(
                            'div',
                            {
                                ref: m,
                                className: _()(
                                    ae.base,
                                    ae[`base__${d}`],
                                    t && ae.base__disabled,
                                    e && ae[`base__${e}`],
                                    C && ae.base__focus,
                                    h && ae.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (u) {
                                    t || (null !== F && Wu(F), s && s(u));
                                },
                                onMouseMove: function (u) {
                                    i && i(u);
                                },
                                onMouseUp: function (u) {
                                    t || (l && l(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    if (t) return;
                                    const e = u.button === te.LEFT;
                                    (null !== D && e && Wu(D),
                                        o && o(u),
                                        A && (t || (m.current && (m.current.focus(), g(!0)))),
                                        e && w(!0));
                                },
                                onMouseLeave: function (u) {
                                    t || (E && E(u), w(!1));
                                },
                                onClick: function (u) {
                                    t || (c && c(u));
                                },
                            },
                            d !== ne.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: ae.back }),
                                    n().createElement('span', { className: ae.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: _()(ae.state, ae.state__default) },
                                n().createElement('span', { className: ae.stateDisabled }),
                                n().createElement('span', { className: ae.stateHighlightHover }),
                                n().createElement('span', { className: ae.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: ae.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                const ie = (u = {}) => {
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
                                    const t = u[e.keyCode];
                                    'function' == typeof t && t(e);
                                }
                            };
                            return (
                                window.addEventListener('keyup', e),
                                () => {
                                    window.removeEventListener('keyup', e);
                                }
                            );
                        }, [u]);
                    },
                    oe = 'Banner_base_d9c79',
                    le = 'Banner_content_ee8e5',
                    Ee = 'Banner_icon_ed591',
                    ce = 'Banner_description_e212e',
                    Ae = 'Banner_title_bd882',
                    de = 'Banner_text_ed284',
                    _e = 'Banner_buttonContainer_e0ff9',
                    Fe = 'Banner_buttonWrapper_d99c1',
                    De = 'Banner_buttonGlow_ff23e',
                    me = R.strings.battle_pass.battlePassAwardsView.footer,
                    Be = (0, lu.Pi)(({ className: u, parentRef: e }) => {
                        const t = W(),
                            a = t.model,
                            r = t.controls,
                            s = a.root.get(),
                            i = s.seasonStopped,
                            o = s.currentLevel;
                        ie({ [j.n.ENTER]: r.buy, [j.n.SPACE]: r.buy });
                        const l = g().mediaSize >= m.Medium;
                        return n().createElement(
                            'div',
                            { ref: e, className: _()(oe, u) },
                            n().createElement(
                                'div',
                                { className: le },
                                n().createElement('div', { className: Ee }),
                                n().createElement(
                                    'div',
                                    { className: ce },
                                    n().createElement('div', { className: Ae }, me.bpTitle()),
                                    n().createElement(
                                        'div',
                                        { className: de },
                                        o >= 45 ? me.bpLastStagesTitle() : me.bpInProgressTitle(),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: _e },
                                n().createElement('div', { className: De }),
                                n().createElement(
                                    'div',
                                    { className: Fe },
                                    n().createElement(
                                        se,
                                        { disabled: i, type: ne.main, size: l ? re.medium : re.small, onClick: r.buy },
                                        me.bpButtonTitle(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ce = 'Footer_base_c1678',
                    ge = 'Footer_base__withPostProgressionPath_f5432',
                    pe = 'Footer_postProgressionInfo_f3eea',
                    he = 'Footer_lockImage_a6ac6',
                    we = 'Footer_title_bda5f',
                    be = 'Footer_title__highlight_c68bb',
                    ve = 'Footer_buttonContainer_c8ec6',
                    fe = 'Footer_postProgressionButton_a3664',
                    Te = R.strings.battle_pass.battlePassAwardsView,
                    Re = (0, lu.Pi)(({ button: u, className: e }) => {
                        const t = W(),
                            a = t.model,
                            r = t.controls,
                            s = g().mediaSize,
                            i = a.root.get(),
                            o = i.reason,
                            l = i.chapterID,
                            E = i.isBaseStyleLevel,
                            c = i.isPostProgressionUnlocked,
                            A = a.computes.hasPostProgressionBanner(),
                            d = a.computes.isReasonBuyCurrently(),
                            F = ((u, e, t) => {
                                switch (u) {
                                    case L.BUY_BATTLE_PASS:
                                        return eu(Te.mainReward.bpBuyAwardsCaption(), {
                                            chapter: R.strings.battle_pass.chapter.fullName.$num(e),
                                        });
                                    case L.BUY_BATTLE_PASS_WITH_LEVELS:
                                        return eu(Te.mainReward.bpBuyWithLevels(), {
                                            chapter: R.strings.battle_pass.chapter.fullName.$num(e),
                                        });
                                    case L.BUY_MULTIPLE_BATTLE_PASS:
                                        return Te.footer.allChaptersText();
                                    case L.STYLE_UPGRADE:
                                        return t ? Te.footer.bpDescriptionGotStyle() : '';
                                    default:
                                        return '';
                                }
                            })(o, l, E),
                            D = s >= m.Medium;
                        return n().createElement(
                            'div',
                            { className: _()(Ce, e, c && ge) },
                            A
                                ? n().createElement(
                                      'div',
                                      { className: pe },
                                      n().createElement('div', { className: he }),
                                      n().createElement('div', null, Te.footer.postProgressionText()),
                                  )
                                : Boolean(F.length) && n().createElement('div', { className: _()(we, d && be) }, F),
                            n().createElement(
                                'div',
                                { className: ve },
                                n().createElement(
                                    se,
                                    { type: ne.primary, size: D ? re.medium : re.small, onClick: u.onClick },
                                    u.text,
                                ),
                                A &&
                                    u.hasPostProgressionButton &&
                                    n().createElement(
                                        se,
                                        {
                                            type: ne.secondary,
                                            size: D ? re.medium : re.small,
                                            onClick: r.onShowPostProgression,
                                            mixClass: fe,
                                        },
                                        Te.footer.postProgressionButton(),
                                    ),
                            ),
                        );
                    }),
                    Se = (u, e) => {
                        const t = e.postfix ? `_${e.postfix}` : '';
                        return ((u) => {
                            const e = u.path.$dyn(`${u.name}_${u.id}`),
                                t = u.path.$dyn('default');
                            return e || t;
                        })(u).$dyn(`${e.name}${t}`);
                    };
                let Pe = (function (u) {
                    return ((u.Season = 'season'), (u.Chapter = 'chapter'), u);
                })({});
                const ye = 'ChapterLogo_base_fb389',
                    Le = (0, lu.Pi)(() => {
                        const u = W().model,
                            e = u.root.get().chapterID,
                            t = (() => {
                                if (u.computes.isMultiplePurchase())
                                    return {
                                        backgroundImage:
                                            'url(R.images.gui.maps.icons.battlePass.rewards.bp_icon_triple)',
                                    };
                                const t = {
                                    path: R.images.gui.maps.icons.battlePass.rewards.chapterLogo,
                                    name: Pe.Chapter,
                                    id: e,
                                };
                                return { backgroundImage: `url(${Se(t, { name: 'bp_icon' })})` };
                            })();
                        return n().createElement('div', { className: ye, style: t });
                    }),
                    xe = 'Glow_base_b7019',
                    Oe = 'Glow_glow_b9c55',
                    Me = ({ className: u }) =>
                        n().createElement(
                            'div',
                            { className: _()(xe, u) },
                            n().createElement('img', {
                                className: Oe,
                                src: 'swf://gui/flash/animations/battlePass/rays.swf',
                                alt: '',
                            }),
                        );
                let Ne = (function (u) {
                    return (
                        (u.credits = 'credits'),
                        (u.gold = 'gold'),
                        (u.crystal = 'crystal'),
                        (u.xp = 'xp'),
                        (u.freeXP = 'freeXP'),
                        (u.eliteXP = 'eliteXP'),
                        (u.equipCoin = 'equipCoin'),
                        u
                    );
                })({});
                var Ie = t(5693),
                    ke = t(1308);
                const Ue = {
                        base: 'TankName_base_b6e97',
                        base__wide: 'TankName_base__wide_ef847',
                        type: 'TankName_type_a9ea0',
                    },
                    Ge = (u, e) => ({
                        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.big.${`${u.replace('-', '_')}${e ? '_elite' : ''}`}`})`,
                    }),
                    He = ({ isElite: u, vehicleName: e, vehicleType: t, vehicleLvl: a, isWide: r }) =>
                        n().createElement(
                            'div',
                            { className: _()(Ue.base, r && Ue.base__wide) },
                            n().createElement('div', { className: Ue.level }, (0, ke.HG)(a)),
                            n().createElement('div', { className: Ue.type, style: Ge(t, u) }),
                            n().createElement('div', { className: Ue.name }, e),
                        ),
                    $e = 'FormatText_base_f27a4',
                    We = ({ binding: u, text: e = '', classMix: t, alignment: r = J.left, formatWithBrackets: s }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = s && u ? uu(e, u) : e;
                        return n().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((e, s) =>
                                n().createElement(
                                    'div',
                                    { className: _()($e, t), key: `${e}-${s}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : ou(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => n().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    Ve = 'text_textCenter_aac77',
                    ze = R.strings.battle_pass,
                    Ye = ({ type: u, value: e }) => {
                        switch (u) {
                            case Au.BattlaPassFinalAchievement:
                                return n().createElement(We, {
                                    text: ze.battlePassAwardsView.mainReward.reward(),
                                    binding: { name: e },
                                });
                            case Au.TmanToken:
                                return n().createElement(We, {
                                    classMix: Ve,
                                    text: ze.battlePassAwardsView.mainReward.commander(),
                                    binding: { name: e },
                                });
                            case Au.Gold:
                            case Au.Credits:
                            case Au.Crystal:
                            case Au.EquipCoin:
                                return n().createElement(Cu, { format: 'integral', value: Number(e) });
                            default:
                                return n().createElement(n().Fragment, null, tu(e));
                        }
                    },
                    qe = {
                        base: 'Title_base_ae7ad',
                        title: 'Title_title_f8b43',
                        base__wide: 'Title_base__wide_e4af5',
                        base__credits: 'Title_base__credits_f524b',
                        base__gold: 'Title_base__gold_ab4d2',
                        base__bptaler: 'Title_base__bptaler_f7191',
                        base__crystal: 'Title_base__crystal_e3960',
                        subtitle: 'Title_subtitle_fc931',
                    },
                    je = R.strings.battle_pass,
                    Xe = ({ reward: u, size: e, className: t }) => {
                        const a = u.name,
                            r = u.userName,
                            s = u.vehicleLvl,
                            i = u.vehicleName,
                            o = u.vehicleType,
                            l = u.isElite,
                            E = u.isCollectionEntity,
                            c = a === Au.Vehicles;
                        return n().createElement(
                            'div',
                            { className: _()(qe.base, qe[`base__${e}`], qe[`base__${a}`], t) },
                            n().createElement(
                                'div',
                                { className: qe.title },
                                c && s && i && o
                                    ? n().createElement(He, {
                                          vehicleLvl: s,
                                          vehicleName: i,
                                          vehicleType: o,
                                          isElite: l || !1,
                                          isWide: e === Ze.Wide,
                                      })
                                    : n().createElement(Ye, { type: a, value: r }),
                            ),
                            E && n().createElement('div', { className: qe.subtitle }, je.common.collectionText()),
                        );
                    },
                    Ke = {
                        base: 'Reward_base_b1bd1',
                        imageWrapper: 'Reward_imageWrapper_f3760',
                        image: 'Reward_image_deca3',
                        fadeInWithScale: 'Reward_fadeInWithScale_ac421',
                        base__updateAnimation: 'Reward_base__updateAnimation_e0a64',
                        base__wide: 'Reward_base__wide_de42e',
                        base__small: 'Reward_base__small_b574e',
                        attachment: 'Reward_attachment_fc520',
                        title: 'Reward_title_e87c5',
                        fadeIn: 'Reward_fadeIn_da4c6',
                        count: 'Reward_count_e23b4',
                        fadeOut: 'Reward_fadeOut_dca6f',
                        slideUp: 'Reward_slideUp_a540d',
                        scale: 'Reward_scale_e3ee2',
                        rotate: 'Reward_rotate_b58a3',
                    },
                    Qe = R.strings.battle_pass;
                let Ze = (function (u) {
                    return ((u.Normal = 'normal'), (u.Wide = 'wide'), (u.Small = 'small'), u);
                })({});
                const Je = [Au.BattlaPassFinalAchievement, Au.TmanToken, Au.Vehicles],
                    ut = [
                        Ne.credits,
                        Ne.gold,
                        Ne.crystal,
                        Ne.xp,
                        Ne.freeXP,
                        Ne.equipCoin,
                        Au.BattlaPassFinalAchievement,
                        Au.TmanToken,
                        Au.Vehicles,
                        Au.PremiumPlus,
                        Au.BattlePassTaler,
                    ],
                    et = (0, lu.Pi)(({ reward: u, rewardListIndex: e }) => {
                        const t = W().model,
                            a = t.canToOpenAdditionView.get(),
                            r = t.computes.hasBigSizeReward(),
                            s = t.computes.getRewardsLength(),
                            i = u.overlayType,
                            o = u.tooltipContentId,
                            l = u.tooltipId,
                            E = u.name,
                            c = u.userName,
                            A = u.value,
                            d = ((F = E), !ut.includes(F) && Number(A) > 1);
                        var F;
                        const D = ((u) => Je.includes(u))(E) || (c && c.length > 0),
                            m = () => (r ? (1 === s || 1 === e ? Ze.Wide : Ze.Small) : Ze.Normal);
                        return n().createElement(
                            'div',
                            { className: _()(Ke.base, Ke[`base__${m()}`], a && Ke.base__updateAnimation) },
                            n().createElement(
                                yu,
                                { ignoreShowDelay: !0, contentId: Number(o), args: { tooltipId: l } },
                                n().createElement(
                                    'div',
                                    { className: Ke.imageWrapper },
                                    n().createElement('div', { className: Ke.image, style: ju(u) }),
                                    ((u) => u === Au.Attachment)(E) &&
                                        n().createElement(Ie.I, {
                                            overlayType: i,
                                            rewardSize: du.S600x450,
                                            className: Ke.attachment,
                                        }),
                                    d &&
                                        n().createElement(
                                            'div',
                                            { className: Ke.count },
                                            eu(Qe.common.multiplier(), { multiplier: A }),
                                        ),
                                ),
                            ),
                            D && n().createElement(Xe, { reward: u, size: m(), className: Ke.title }),
                        );
                    }),
                    tt = 'Rewards_base_a678b',
                    at = 'Rewards_base__updateSize_b52d7',
                    nt = (0, lu.Pi)(() => {
                        const u = W().model,
                            e = u.canToOpenAdditionView.get(),
                            t = u.computes.getRewards();
                        return n().createElement(
                            'div',
                            { className: _()(tt, e && at) },
                            t.map((u, e) =>
                                n().createElement(et, { reward: u, key: `reward-${e}`, rewardListIndex: e }),
                            ),
                        );
                    }),
                    rt = 'Ribbon_base_b8e70',
                    st = 'Ribbon_base__indentWide_a7df7',
                    it = (0, lu.Pi)(() => {
                        const u = W().model,
                            e = u.root.get(),
                            t = e.isBattlePassPurchased,
                            a = e.chapterID,
                            r = u.computes.hasBigSizeReward(),
                            s = u.computes.isReasonBuyCurrently(),
                            i = r || s,
                            o = ((u) => {
                                switch (u) {
                                    case m.ExtraSmall:
                                    case m.Small:
                                        return 'small';
                                    case m.Medium:
                                        return 'medium';
                                    default:
                                        return 'large';
                                }
                            })(g().mediaSize),
                            l = (() => {
                                const u = {
                                    path: R.images.gui.maps.icons.battlePass.logo.ribbon,
                                    name: Pe.Chapter,
                                    id: a,
                                };
                                return {
                                    backgroundImage: `url(${Se(u, { name: 'ribbon', postfix: `${o}${t ? '_with_bp' : ''}` })})`,
                                };
                            })();
                        return n().createElement('div', { className: _()(rt, i && st), style: l });
                    }),
                    ot = 'MainRewards_base_f3527',
                    lt = 'MainRewards_glow_dc2ef',
                    Et = 'MainRewards_rays_c2d33',
                    ct = (0, lu.Pi)(({ className: u }) => {
                        const e = W().model,
                            t = e.canToOpenAdditionView.get(),
                            r = e.computes.isReasonBuyCurrently(),
                            s = e.computes.hasGlowAnimation(),
                            i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1],
                            E = (0, Vu.useSpring)({
                                from: { contentOpacity: 1 },
                                contentOpacity: t ? 1 : 0,
                                config: { duration: 400 },
                                onResolve: () => {
                                    t && l(!0);
                                },
                            }).contentOpacity;
                        return n().createElement(
                            'div',
                            { className: _()(ot, u) },
                            s && !t && n().createElement(Me, { className: lt }),
                            n().createElement('div', { className: Et }),
                            n().createElement(it, null),
                            r && !o
                                ? n().createElement(
                                      Vu.animated.div,
                                      { style: { opacity: E.to({ output: [1, 0] }) } },
                                      n().createElement(Le, null),
                                  )
                                : n().createElement(nt, null),
                        );
                    }),
                    At = 'RewardsApp_base_c3e69',
                    dt = 'RewardsApp_overlay_b4cde',
                    _t = 'RewardsApp_overlay__common_ac862',
                    Ft = 'RewardsApp_main_f19a5',
                    Dt = 'RewardsApp_close_e1699',
                    mt = 'RewardsApp_content_f1e48',
                    Bt = 'RewardsApp_header_be34c',
                    Ct = 'RewardsApp_rewards_f2203',
                    gt = 'RewardsApp_rewards__additionalCentring_d0e97',
                    pt = 'RewardsApp_additionalRewards_e5d58',
                    ht = 'RewardsApp_additionalRewards__diffTop_a6eb4',
                    wt = 'RewardsApp_additionalRewards__slideTop_f2eb7',
                    bt = 'RewardsApp_base__buyWithLevels_c0eb6',
                    vt = 'RewardsApp_additionalRewards__animateSlide_f18af',
                    ft = 'RewardsApp_additionalRewards__indentS_f2e5d',
                    Tt = 'RewardsApp_mainRewards_b2c65',
                    Rt = 'RewardsApp_mainRewards__slideTop_d633c',
                    St = 'RewardsApp_mainRewards__animateSlide_c4a45',
                    Pt = 'RewardsApp_footer_ce49c',
                    yt = 'RewardsApp_footer__hide_f15f8',
                    Lt = 'RewardsApp_footer__diffTop_c984c',
                    xt = 'RewardsApp_banner_a4c26',
                    Ot = 'RewardsApp_banner__showPreparation_d35ec',
                    Mt = R.strings.battle_pass,
                    Nt = (u) =>
                        u
                            ? eu(Mt.battlePassAwardsView.header.bpTitle(), {
                                  chapter: Mt.chapter.fullNameUppercased.$num(u),
                              })
                            : Mt.battlePassAwardsView.header.bpTitleWithoutChapter(),
                    It = (u, e) => {
                        switch (u) {
                            case L.BUY_BATTLE_PASS:
                            case L.BUY_MULTIPLE_BATTLE_PASS:
                            case L.BUY_BATTLE_PASS_WITH_LEVELS:
                                return Mt.battlePassAwardsView.header.bpTitleWithoutChapter();
                            case L.BUY_BATTLE_PASS_LEVELS:
                            case L.STYLE_UPGRADE:
                            case L.DEFAULT:
                                return Nt(e);
                        }
                        return (console.warn('Unknown title reason: ', u), Nt(e));
                    },
                    kt = (u, e, t) => {
                        switch (u) {
                            case L.BUY_BATTLE_PASS:
                            case L.BUY_MULTIPLE_BATTLE_PASS:
                            case L.BUY_BATTLE_PASS_WITH_LEVELS:
                                return Mt.battlePassAwardsView.header.bpBoughtText();
                            case L.BUY_BATTLE_PASS_LEVELS:
                                return e
                                    ? Mt.battlePassAwardsView.header.bpFinalLevelText()
                                    : Mt.battlePassAwardsView.header.bpLevelsText();
                            case L.STYLE_UPGRADE:
                                return t
                                    ? Mt.battlePassAwardsView.header.styleReceivedText()
                                    : Mt.battlePassAwardsView.header.styleUpgradedText();
                            case L.DEFAULT:
                                return e
                                    ? Mt.battlePassAwardsView.header.bpFinalLevelText()
                                    : Mt.battlePassAwardsView.header.bpLevelsText();
                        }
                        return (console.warn('Unknown status reason: ', u), '');
                    },
                    Ut = (u, e, t, a, n, r) => {
                        const s = ((u, e, t) =>
                            t
                                ? Mt.battlePassAwardsView.additionalRewards.seeMoreButtonText()
                                : u
                                  ? eu(Mt.battlePassAwardsView.additionalRewards.bpRemainLevelsAwardsText(), {
                                        remainingAwardsCount: e,
                                    })
                                  : Mt.battlePassAwardsView.additionalRewards.button())(
                            n,
                            e > a * (t + 1) ? 10 : e - a * t,
                            u,
                        );
                        return { onClick: r, text: s, hasPostProgressionButton: !u && !n };
                    },
                    Gt = (0, lu.Pi)(() => {
                        const u = W(),
                            e = u.model,
                            t = u.controls,
                            r = e.root.get(),
                            i = r.reason,
                            o = r.chapterID,
                            l = r.isFinalReward,
                            E = r.isBaseStyleLevel,
                            c = r.isNeedToShowOffer,
                            A = e.canToOpenAdditionView.get(),
                            d = e.computes.getAdditionalRewards(),
                            F = e.computes.getAdditionalRewardsLength(),
                            D = e.computes.hasAdditionalRewards(),
                            m = e.computes.isReasonBuyCurrently(),
                            B = e.computes.isReasonBuyWithLevels(),
                            C = e.computes.isReasonStyleUpgrade(),
                            g = e.computes.hasPostProgressionBanner(),
                            p = e.computes.hasBigSizeReward(),
                            h = e.computes.getRewards().length > 0,
                            w = (0, a.useState)(1),
                            b = w[0],
                            v = w[1],
                            f = (0, a.useState)(0),
                            T = f[0],
                            S = f[1],
                            P = (0, a.useState)(!1),
                            y = P[0],
                            L = P[1],
                            x = m && h && !A,
                            O = `${s.O.view.pxToRem(T)}rem`;
                        var M;
                        ((M = t.close), Q(j.n.ESCAPE, M));
                        const N = { title: It(i, o), subtitle: kt(i, l, E) },
                            I = d.slice(10 * (b - 1), 10 * b),
                            k = I.length,
                            U = Math.ceil(F / 10),
                            G = b < U,
                            H = U > 1,
                            $ = c && !C && !G && !g,
                            V = $ && H,
                            z = !$ || V,
                            Y = (0, a.useRef)(null),
                            X = () => {
                                ((u) => {
                                    let e,
                                        t = null;
                                    t = requestAnimationFrame(() => {
                                        t = requestAnimationFrame(() => {
                                            ((t = null), (e = u()));
                                        });
                                    });
                                })(() => {
                                    Y && Y.current && S(Y.current.offsetHeight);
                                });
                            };
                        ((0, a.useEffect)(() => {
                            (X(), L(!1));
                        }, [$, V]),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    (X(), L(!0));
                                };
                                return (
                                    window.addEventListener('resize', u),
                                    () => {
                                        window.removeEventListener('resize', u);
                                    }
                                );
                            }, []));
                        const K = Ut(x, F, b, k, G, () => {
                                x ? t.enableToOpenAdditionView() : G ? v(b + 1) : t.close();
                            }),
                            Z = p && D,
                            J = {
                                backgroundImage: o
                                    ? `url(${Eu(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, o)})`
                                    : 'url(R.images.gui.maps.icons.battlePass.backgrounds.common)',
                                '--banner-height': O,
                            };
                        return n().createElement(
                            'div',
                            { className: _()(At, B && A && bt), style: J },
                            n().createElement('div', { className: _()(dt, !o && _t) }),
                            n().createElement(
                                'div',
                                { className: Ft },
                                n().createElement(
                                    'div',
                                    { className: Dt },
                                    n().createElement(q, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: mt },
                                    n().createElement(
                                        'div',
                                        { className: Bt },
                                        n().createElement(cu.h, { title: N.title, status: N.subtitle }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: _()(Ct, Z && gt) },
                                        n().createElement(ct, { className: _()(Tt, V && Rt, V && !y && St) }),
                                        D &&
                                            n().createElement(ee, {
                                                rewards: I,
                                                pageNumber: b,
                                                className: _()(pt, p && ft, A && ht, V && wt, V && !y && vt),
                                            }),
                                    ),
                                ),
                                z && n().createElement(Re, { button: K, className: _()(Pt, V && yt, !$ && Lt) }),
                                $ && n().createElement(Be, { className: _()(xt, H && Ot), parentRef: Y }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    y().render(
                        n().createElement($, null, n().createElement(S, null, n().createElement(Gt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            5693: (u, e, t) => {
                'use strict';
                t.d(e, { I: () => o });
                var a = t(9849),
                    n = t.n(a),
                    r = t(7363),
                    s = t.n(r);
                const i = 'AttachmentOverlay_base_fd37b',
                    o = ({ overlayType: u, rewardSize: e, className: t }) =>
                        s().createElement('div', {
                            className: n()(i, t),
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${e}.${u})`,
                            },
                        });
            },
            4431: (u, e, t) => {
                'use strict';
                t.d(e, { h: () => l });
                var a = t(7363),
                    n = t.n(a);
                const r = 'Header_base_e1d5e',
                    s = 'Header_title_a4581',
                    i = 'Header_status_b9684',
                    o = 'Header_subtitle_d54f8',
                    l = ({ title: u, status: e, subtitle: t }) =>
                        n().createElement(
                            'div',
                            { className: r },
                            n().createElement('div', { className: s }, u),
                            n().createElement('div', { className: i }, e),
                            t && n().createElement('div', { className: o }, t),
                        );
            },
            7363: (u) => {
                'use strict';
                u.exports = React;
            },
            1533: (u) => {
                'use strict';
                u.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], r = !0, s = 0; s < e.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 1981),
        (() => {
            var u = { 1981: 0, 2570: 0, 2286: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2229));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
