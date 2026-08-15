(() => {
    var __webpack_modules__ = {
            184: (e) => {
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
            5034: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        mouse: () => d,
                        off: () => l,
                        on: () => s,
                        onMinimize: () => i,
                        onResize: () => a,
                        onScaleUpdated: () => o,
                    }));
                var n = t(8277),
                    r = t(1708);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (0, n.E)('clientMinimized'),
                    s = (e, u) => engine.on(e, u),
                    l = (e, u) => engine.off(e, u),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        o = c[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
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
            3157: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(5034),
                    r = t(9703);
                function a(e = 'px') {
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
            1708: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            9703: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
            },
            8277: (e, u, t) => {
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
            7475: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => o });
                var n = t(3157),
                    r = t(8133),
                    a = t(3925);
                const o = { view: t(7553), client: n, sound: a.ZP, intl: r.N };
            },
            8133: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var n = t(3157);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            5544: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            3163: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(8277);
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
            7553: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => l,
                        arabic2roman: () => x,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => T,
                        enableFullScreenModeSupported: () => M,
                        events: () => o.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => y,
                        getScale: () => f,
                        getSize: () => _,
                        getViewGlobalPosition: () => F,
                        initExternalPaddings: () => L,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => k,
                    }));
                var n = t(1308),
                    r = t(5544),
                    a = t(3163),
                    o = t(7576),
                    i = t(2319);
                const s = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function d(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
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
                    x = n.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const T = Object.keys(a.W).reduce(
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
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function M() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            2319: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    i = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (-1 !== u.indexOf(n)) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4020: (e, u, t) => {
                'use strict';
                t.d(u, { n: () => n });
                let n = (function (e) {
                    return (
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
                        (e[(e.KEY_9 = 57)] = 'KEY_9'),
                        e
                    );
                })({});
            },
            1308: (e, u, t) => {
                'use strict';
                t.d(u, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t];) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            8973: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(7475);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
            828: (e, u, t) => {
                'use strict';
                t.d(u, { B0: () => i, ry: () => g });
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
                const r = n;
                var a = t(8973);
                var o = t(6609);
                let i = (function (e) {
                    return (
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'),
                        e
                    );
                })({});
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(4020),
                    m = t(7475);
                const _ = ['args'];
                function A(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            A(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    f = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (-1 !== u.indexOf(n)) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    D = () => f(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(5533);
                const p = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => f(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => f(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            f(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            f(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, D);
                        },
                        handleViewEvent: f,
                        onBindingsReady: g,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = b;
            },
            6609: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            7732: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => tu,
                        Bar: () => Je,
                        DefaultScroll: () => uu,
                        Direction: () => Ne,
                        defaultSettings: () => He,
                        useHorizontalScrollApi: () => We,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Bu, Bar: () => gu, Default: () => Du, useVerticalScrollApi: () => nu }));
                var a = t(7363),
                    o = t.n(a),
                    i = t(1533),
                    s = t.n(i),
                    l = t(9849),
                    c = t.n(l),
                    d = t(7475);
                const E = {
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
                    m = [
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
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const A = (e) => {
                        let u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.classNames,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            l = e.onMouseDown,
                            A = e.onMouseUp,
                            F = e.side,
                            g = void 0 === F ? 'left' : F,
                            f = e.type,
                            D = void 0 === f ? 'back' : f,
                            B = e.soundHover,
                            C = void 0 === B ? 'highlight' : B,
                            p = e.soundClick,
                            b = void 0 === p ? 'play' : p,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, m);
                        const v = (0, a.useCallback)(
                                (e) => {
                                    (null == i || i(e), d.O.sound.play.sound(C));
                                },
                                [i, C],
                            ),
                            w = (0, a.useCallback)(
                                (e) => {
                                    null == s || s(e);
                                },
                                [s],
                            ),
                            y = (0, a.useCallback)(
                                (e) => {
                                    (null == l || l(e), d.O.sound.play.sound(b));
                                },
                                [l, b],
                            ),
                            x = (0, a.useCallback)(
                                (e) => {
                                    null == A || A(e);
                                },
                                [A],
                            );
                        return o().createElement(
                            'div',
                            _(
                                {
                                    className: c()(
                                        E.base,
                                        E[`base__${D}`],
                                        E[`base__${g}`],
                                        null == r ? void 0 : r.base,
                                    ),
                                    onMouseEnter: v,
                                    onMouseLeave: w,
                                    onMouseDown: y,
                                    onMouseUp: x,
                                    onClick: t,
                                },
                                h,
                            ),
                            'info' !== D && o().createElement('div', { className: E.shine }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(
                                        E.icon,
                                        E[`icon__${D}`],
                                        E[`icon__${g}`],
                                        null == r ? void 0 : r.icon,
                                    ),
                                },
                                o().createElement('div', { className: c()(E.glow, null == r ? void 0 : r.glow) }),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(E.caption, E[`caption__${D}`], null == r ? void 0 : r.caption) },
                                u,
                            ),
                            n && o().createElement('div', { className: c()(E.goto, null == r ? void 0 : r.goto) }, n),
                        );
                    },
                    F = (e) => {
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
                var g = t(4020),
                    f = t(828);
                const D = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function B(e = g.n.NONE, u = D, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== g.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && d.O.view.isEventHandled()) return;
                                (d.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const C = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
                var p = t(2041);
                const b = (e, u, t = '') => {
                    const n = t.length > 0 ? `_${t}` : t,
                        r = e.$dyn(`c_${u}${n}`),
                        a = String(u).slice(-1),
                        o = e.$dyn(`default_${a}${n}`);
                    return r || o;
                };
                function h() {
                    return !1;
                }
                console.log;
                var v = t(3305);
                function w(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return y(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? y(e, u)
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
                function y(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const x = (e) => (0 === e ? window : window.subViews.get(e));
                const S = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: n = 'real', options: r, children: i, mocks: s }) {
                            const l = (0, a.useRef)([]),
                                c = (t, n, r) => {
                                    var a;
                                    const o = (function ({
                                            initializer: e = !0,
                                            rootId: u = 0,
                                            getRoot: t = x,
                                            context: n = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function a(e, u = 0) {
                                                viewEnv.removeDataChangedCallback(e, u)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                    t.forEach((u) => {
                                                        const t = r.get(u);
                                                        void 0 !== t && t(e);
                                                    });
                                                });
                                            });
                                            const o = (e) => {
                                                const r = t(u),
                                                    a = n.split('.').reduce((e, u) => e[u], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? a
                                                    : e.split('.').reduce((e, u) => {
                                                          const t = e[u];
                                                          return 'function' == typeof t ? t.bind(e) : t;
                                                      }, a);
                                            };
                                            return {
                                                subscribe: (t, a) => {
                                                    const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                        s = d.O.view.addModelObserver(i, u, !0);
                                                    return (r.set(s, t), e && t(o(a)), s);
                                                },
                                                readByPath: o,
                                                createCallback: (e, u) => {
                                                    const t = o(u);
                                                    return (...u) => {
                                                        t(e(...u));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const u = o(e);
                                                    return () => {
                                                        u();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, t = w(r.keys()); !(e = t()).done;) a(e.value, u);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(n),
                                        i =
                                            'real' === t
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        s = (e) =>
                                            'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                        c = (e) => l.current.push(e),
                                        E = e({
                                            mode: t,
                                            readByPath: s,
                                            externalModel: i,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = s(e),
                                                        n = v.LO.box(u, { equals: h });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, v.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const n = null != u ? u : s(e),
                                                        r = v.LO.box(n, { equals: h });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, v.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : s(e),
                                                        r = v.LO.box(n, { equals: h });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, v.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = s(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = v.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, v.aD)((u) => {
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
                                                            a = Object.entries(r),
                                                            o = a.reduce(
                                                                (e, [u, t]) => ((e[t] = v.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, v.aD)((e) => {
                                                                        a.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: c,
                                        }),
                                        m = { mode: t, model: E, externalModel: i, cleanup: c };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                        externalModel: i,
                                        mode: t,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                m = (0, a.useState)(n),
                                _ = m[0],
                                A = m[1],
                                F = (0, a.useState)(() => c(n, r, s)),
                                g = F[0],
                                f = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? f(c(_, r, s)) : (E.current = !0);
                                }, [s, _, r]),
                                (0, a.useEffect)(() => {
                                    A(n);
                                }, [n]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                o().createElement(t.Provider, { value: g }, i)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
                function T(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const k = T;
                function M(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, k(e, t), t, e);
                    }
                    return n;
                }
                var L = t(5369);
                let P = (function (e) {
                    return ((e.None = 'none'), (e.Accepting = 'accepting'), e);
                })({});
                const O = S()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    rewards: e.array('rewards'),
                                    animationState: v.LO.box(P.None),
                                },
                                t = (0, L.Om)((e) => k(u.tabs.get(), e), { equals: h }),
                                n = (0, L.Om)((e) => k(u.rewards.get(), e), { equals: h }),
                                r = (0, L.Om)(() => M(u.tabs.get(), (e, u) => e + u.limit, 0));
                            return Object.assign({}, u, {
                                computes: { tabByIndex: t, rewardByIndex: n, rewardsToClaimTotal: r },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = (0, v.aD)((e) => u.animationState.set(e));
                            return {
                                close: e.createCallbackNoArgs('onCloseClick'),
                                submit: e.createCallbackNoArgs('onOkClick'),
                                reduceReward: e.createCallback((e) => ({ type: e }), 'onRewardReduce'),
                                addReward: e.createCallback((e) => ({ type: e }), 'onRewardAdd'),
                                openTab: e.createCallback((e) => ({ type: e }), 'onTabClick'),
                                setAnimationState: t,
                            };
                        },
                    ),
                    N = O[0],
                    H = O[1],
                    I = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    W = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                function z(e = d.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
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
                                })(u, t),
                                a = Math.min(n, r);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: n === t.extraLarge.weight,
                                largeWidth: n === t.large.weight,
                                mediumWidth: n === t.medium.weight,
                                smallWidth: n === t.small.weight,
                                extraSmallWidth: n === t.extraSmall.weight,
                                extraLargeHeight: r === t.extraLarge.weight,
                                largeHeight: r === t.large.weight,
                                mediumHeight: r === t.medium.weight,
                                smallHeight: r === t.small.weight,
                                extraSmallHeight: r === t.extraSmall.weight,
                            };
                        })(u, t, W),
                    );
                }
                const $ = z(),
                    U = (0, a.createContext)($),
                    G = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== u.indexOf(n)) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, G);
                    const n = (0, a.useContext)(U),
                        r = n.extraLarge,
                        o = n.large,
                        i = n.medium,
                        s = n.small,
                        l = n.extraSmall,
                        c = n.extraLargeWidth,
                        d = n.largeWidth,
                        E = n.mediumWidth,
                        m = n.smallWidth,
                        _ = n.extraSmallWidth,
                        A = n.extraLargeHeight,
                        F = n.largeHeight,
                        g = n.mediumHeight,
                        f = n.smallHeight,
                        D = n.extraSmallHeight,
                        B = { extraLarge: A, large: F, medium: g, small: f, extraSmall: D };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return I(u, t, B);
                        if (t.largeWidth && d) return I(u, t, B);
                        if (t.mediumWidth && E) return I(u, t, B);
                        if (t.smallWidth && m) return I(u, t, B);
                        if (t.extraSmallWidth && _) return I(u, t, B);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && f) return u;
                            if (t.extraSmallHeight && D) return u;
                        }
                    }
                    return null;
                });
                const V = ({ children: e }) => {
                    const u = (0, a.useState)(z),
                        t = u[0],
                        n = u[1],
                        r = (0, a.useState)(!1),
                        i = r[0],
                        s = r[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                n((e) => {
                                    const u = d.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : z(u);
                                });
                            }
                            return (
                                e(),
                                s(!0),
                                d.O.client.events.on('clientResized', e),
                                d.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (d.O.client.events.off('clientResized', e),
                                        d.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        o().createElement(U.Provider, { value: t }, i && e)
                    );
                };
                var j = t(184),
                    q = t.n(j);
                let X = (function (e) {
                        return (
                            (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.width)] = 'Small'),
                            (e[(e.Medium = W.medium.width)] = 'Medium'),
                            (e[(e.Large = W.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    Y = (function (e) {
                        return (
                            (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.width)] = 'Small'),
                            (e[(e.Medium = W.medium.width)] = 'Medium'),
                            (e[(e.Large = W.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    K = (function (e) {
                        return (
                            (e[(e.ExtraSmall = W.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.height)] = 'Small'),
                            (e[(e.Medium = W.medium.height)] = 'Medium'),
                            (e[(e.Large = W.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const Z = () => {
                        const e = (0, a.useContext)(U),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return X.ExtraLarge;
                                    case e.large:
                                        return X.Large;
                                    case e.medium:
                                        return X.Medium;
                                    case e.small:
                                        return X.Small;
                                    case e.extraSmall:
                                        return X.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), X.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Y.ExtraLarge;
                                    case e.largeWidth:
                                        return Y.Large;
                                    case e.mediumWidth:
                                        return Y.Medium;
                                    case e.smallWidth:
                                        return Y.Small;
                                    case e.extraSmallWidth:
                                        return Y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Y.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return K.ExtraLarge;
                                    case e.largeHeight:
                                        return K.Large;
                                    case e.mediumHeight:
                                        return K.Medium;
                                    case e.smallHeight:
                                        return K.Small;
                                    case e.extraSmallHeight:
                                        return K.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), K.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    Q = ['children', 'className'];
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
                const ee = {
                        [Y.ExtraSmall]: '',
                        [Y.Small]: q().SMALL_WIDTH,
                        [Y.Medium]: `${q().SMALL_WIDTH} ${q().MEDIUM_WIDTH}`,
                        [Y.Large]: `${q().SMALL_WIDTH} ${q().MEDIUM_WIDTH} ${q().LARGE_WIDTH}`,
                        [Y.ExtraLarge]: `${q().SMALL_WIDTH} ${q().MEDIUM_WIDTH} ${q().LARGE_WIDTH} ${q().EXTRA_LARGE_WIDTH}`,
                    },
                    ue = {
                        [K.ExtraSmall]: '',
                        [K.Small]: q().SMALL_HEIGHT,
                        [K.Medium]: `${q().SMALL_HEIGHT} ${q().MEDIUM_HEIGHT}`,
                        [K.Large]: `${q().SMALL_HEIGHT} ${q().MEDIUM_HEIGHT} ${q().LARGE_HEIGHT}`,
                        [K.ExtraLarge]: `${q().SMALL_HEIGHT} ${q().MEDIUM_HEIGHT} ${q().LARGE_HEIGHT} ${q().EXTRA_LARGE_HEIGHT}`,
                    },
                    te = {
                        [X.ExtraSmall]: '',
                        [X.Small]: q().SMALL,
                        [X.Medium]: `${q().SMALL} ${q().MEDIUM}`,
                        [X.Large]: `${q().SMALL} ${q().MEDIUM} ${q().LARGE}`,
                        [X.ExtraLarge]: `${q().SMALL} ${q().MEDIUM} ${q().LARGE} ${q().EXTRA_LARGE}`,
                    },
                    ne = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Q);
                        const r = Z(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', J({ className: c()(t, ee[a], ue[i], te[s]) }, n), u);
                    },
                    re = ['children'];
                const ae = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, re);
                        return o().createElement(V, null, o().createElement(ne, t, u));
                    },
                    oe = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                let ie = (function (e) {
                        return (
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
                            (e.Attachment = 'attachment'),
                            e
                        );
                    })({}),
                    se = (function (e) {
                        return (
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
                            (e.S48x48 = 's48x48'),
                            e
                        );
                    })({});
                ie.Attachment;
                const le = [
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
                function ce(e) {
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
                const de = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: f.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ee = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            f = void 0 === g ? 0 : g,
                            D = e.onShow,
                            B = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, le);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    f ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [f],
                            ),
                            h = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (de(t, _, { isMouseEvent: !0, on: !0, arguments: ce(n) }, b),
                                    D && D(),
                                    (p.current.isVisible = !0));
                            }, [t, _, n, b, D]),
                            v = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        de(t, _, { on: !1 }, b),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, _, b, B]),
                            w = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(p.current.timeoutId),
                                                      (p.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (v(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && v(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && v(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    me = ['children'];
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const Ae = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== u.indexOf(n)) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, me);
                    return o().createElement(
                        Ee,
                        _e(
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
                };
                t(8354);
                function Fe(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                const ge = (e) => e.replace(/&nbsp;/g, ' ');
                (() => {
                    const e = new RegExp(
                        [
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                            /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                            /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                        ]
                            .map((e) => e.source)
                            .join('|'),
                        'gum',
                    );
                })();
                function fe(e) {
                    const u = e.match(/(?:_(?:t|tier))?(\d+)\b/);
                    return u ? parseInt(u[1], 10) : null;
                }
                let De = (function (e) {
                    return (
                        (e.None = 'none'),
                        (e.Trophy = 'trophy'),
                        (e.Deluxe = 'deluxe'),
                        (e.Modernized = 'modernized_device'),
                        (e.BattleBooster = 'battleBooster'),
                        e
                    );
                })({});
                function Be(e) {
                    return e.includes('delux')
                        ? De.Deluxe
                        : e.includes('modernized')
                          ? De.Modernized
                          : e.includes(De.Trophy)
                            ? De.Trophy
                            : e.toLowerCase().endsWith(De.BattleBooster.toLowerCase())
                              ? De.BattleBooster
                              : De.None;
                }
                function Ce(e, u) {
                    return u && u !== De.None ? u : e;
                }
                const pe = (e, u = se.Small, t) => {
                    if (t === De.Modernized) {
                        const t = fe(e);
                        if (t) return `R.images.gui.maps.icons.quests.bonuses.${u}.modernized_devices_t${t}_gift`;
                    }
                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${Ce(e, t)}_gift`;
                };
                function be(e, u) {
                    if (u === De.Modernized) {
                        const u = fe(e);
                        if (u)
                            return `R.images.gui.maps.icons.selectableReward.reward.optDeviceType.modernized_devices_t${u}`;
                    }
                    return R.images.gui.maps.icons.selectableReward.reward.optDeviceType.$dyn(u);
                }
                const he = (e, u = 's180x135', t = 'R.images.gui.maps.icons.selectableReward.reward') =>
                        `${t}.${u}.${e}`,
                    ve = {
                        base: 'Category_base_ff10f',
                        glow: 'Category_glow_db090',
                        glow__show: 'Category_glow__show_f0d5a',
                        title: 'Category_title_d5dba',
                        base__selected: 'Category_base__selected_ae206',
                        imageContainer: 'Category_imageContainer_fbe0c',
                        image: 'Category_image_af6ae',
                        base__completed: 'Category_base__completed_ed34a',
                        base__accepting: 'Category_base__accepting_c097c',
                        blink: 'Category_blink_f8ede',
                        check: 'Category_check_a088b',
                        counter: 'Category_counter_bb102',
                        slideUp: 'Category_slideUp_d5b40',
                        show: 'Category_show_ae560',
                    },
                    we = R.strings.selectable_reward.tabs,
                    ye = (0, p.Pi)(({ index: e, className: u, classNames: t }) => {
                        const n = Z().mediaSize,
                            r = H(),
                            a = r.model,
                            i = r.controls,
                            s = a.animationState.get(),
                            l = a.computes.tabByIndex(e),
                            E = l.count === l.limit,
                            m = a.root.get().selectedTab === l.type,
                            _ = n >= X.Medium ? se.Big : se.Small,
                            A = Be(l.type);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    ve.base,
                                    E && ve.base__completed,
                                    m ? ve.base__selected : l.count && ve[`base__${s}`],
                                    u,
                                ),
                                onClick: () => {
                                    (d.O.sound.play.sound('bp_click'), i.openTab(l.type));
                                },
                                onMouseEnter: () => d.O.sound.play.sound('bp_highlight'),
                            },
                            o().createElement('div', { className: c()(ve.glow, m && ve.glow__show) }),
                            o().createElement(
                                'div',
                                { className: c()(ve.title, null == t ? void 0 : t.title) },
                                Fe(
                                    ((e, u) => {
                                        const t = e.match(/^offer:([^:]+):/);
                                        return t
                                            ? `${R.strings.selectable_reward.tabs.items.$dyn(t[1])}`
                                            : `${R.strings.selectable_reward.tabs.items.$dyn(Ce(e, u))}`;
                                    })(l.type, A),
                                    { equipmentType: R.strings.selectable_reward.tabs.items.$dyn(A) },
                                ),
                            ),
                            o().createElement(
                                Ae,
                                { args: { type: l.type } },
                                o().createElement(
                                    'div',
                                    { className: ve.imageContainer },
                                    o().createElement('div', {
                                        className: ve.image,
                                        style: { backgroundImage: `url(${pe(l.type, _, A)})` },
                                    }),
                                    o().createElement('div', { className: ve.check }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: ve.counter },
                                Fe(we.counter(), { count: l.count, limit: l.limit }),
                            ),
                        );
                    }),
                    xe = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Se = [];
                function Te(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Se)
                    );
                }
                function Re(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (0 !== n.current && r(), (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        r,
                    ];
                }
                function ke(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                function Me(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return Le(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Le(e, u)
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
                function Le(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Pe(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function d() {
                                        ((o = Date.now()), t.apply(l, s));
                                    }
                                    a ||
                                        (n && !r && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
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
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        (i(), (a = !0));
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => n.cancel, [n]), n);
                }
                var Oe = t(1374);
                let Ne = (function (e) {
                    return ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e);
                })({});
                const He = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ie = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : xe(r, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? He : l,
                                d = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                m = (0, a.useRef)(!1),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = Me(u(e).values()); !(n = r()).done;) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = Pe(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Oe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), o && m.current && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                f = g[0],
                                D = g[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = f.scrollPosition.get(),
                                            a = (null != (n = f.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [f.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, f.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, f.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = B(u, e, n);
                                        C(a);
                                    },
                                    [C, B, c.step],
                                ),
                                b = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(n(e)),
                                            d.current && _.trigger('mouseWheel', e, f.scrollPosition, u(d.current)));
                                    },
                                    [f.scrollPosition, p, _],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        F(() => {
                                            const e = d.current;
                                            e &&
                                                (C(i(e, f.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, f.scrollPosition.goal],
                                ),
                                v = Te(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, f.scrollPosition.goal);
                                    (u !== f.scrollPosition.goal && C(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            ),
                                (0, a.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !o) return;
                                    const u = () => {
                                            m.current = !0;
                                        },
                                        t = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [d]));
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: b,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: E,
                                    scrollPosition: D,
                                    animationScroll: f,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [f.scrollPosition, C, p, _.off, _.on, v, b, D, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    We = Ie({
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
                            var t;
                            e.style.transform = `translateX(-${0 | (null != (t = u.value.scrollPosition) ? t : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ne.Next : Ne.Prev),
                        forceTriggerMouseMove: d.O.view.forceTriggerMouseMove,
                    }),
                    ze = 'HorizontalBar_base_fa517',
                    $e = 'HorizontalBar_base__active_ad89b',
                    Ue = 'HorizontalBar_leftButton_eb8c3',
                    Ge = 'HorizontalBar_rightButton_f5116',
                    Ve = 'HorizontalBar_track_fd3af',
                    je = 'HorizontalBar_thumb_bb7e0',
                    qe = 'HorizontalBar_rail_a3d9e',
                    Xe = 'disable',
                    Ye = { pending: !1, offset: 0 },
                    Ke = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ze = () => {},
                    Qe = (e, u) => Math.max(20, e.offsetWidth * u),
                    Je = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ke, onDrag: n = Ze }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(Ye),
                            A = _[0],
                            g = _[1],
                            f = (0, a.useCallback)(
                                (e) => {
                                    (g(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            D = () => {
                                const u = l.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    c = xe(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - Qe(u, o)) * c;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(Xe),
                                                    void s.current.classList.remove(Xe)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Xe),
                                                    void s.current.classList.add(Xe)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(Xe), s.current.classList.remove(Xe));
                                        }
                                    })(d));
                            },
                            B = Te(() => {
                                ((() => {
                                    const u = E.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    ((u.style.width = `${Qe(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== o ? r.current.classList.add($e) : r.current.classList.remove($e)));
                                })(),
                                    D());
                            });
                        ((0, a.useEffect)(() => F(B)),
                            (0, a.useEffect)(
                                () =>
                                    F(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Ze;
                                        const n = () => {
                                            (t(), (t = F(B)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = d.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = l.current,
                                            s = E.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - A.offset - i.getBoundingClientRect().x,
                                            d = (c / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: c, contentOffset: d }));
                                    }),
                                    t = d.O.client.events.mouse.up(() => {
                                        (u(), f(Ye));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, A.offset, A.pending, n, f]));
                        const C = Re((u) => e.applyStepTo(u), m, [e]),
                            p = C[0],
                            b = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Xe) || ke('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(ze, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(Ue, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xe) || 0 !== e.button || (ke('play'), p(Ne.Next));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(Ve, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((ke('play'), u.target === n))
                                                f({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Ne.Prev : Ne.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: E, className: c()(je, u.thumb) }),
                                o().createElement('div', { className: c()(qe, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(Ge, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xe) || 0 !== e.button || (ke('play'), p(Ne.Prev));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    eu = {
                        base: 'HorizontalScroll_base_a33a9',
                        wrapper: 'HorizontalScroll_wrapper_b622e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a2315',
                    },
                    uu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(eu.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(eu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(eu.defaultScrollArea, r) },
                                o().createElement(tu, { className: s, api: m, classNames: i }, e),
                            ),
                            o().createElement(Je, { getStepByRailClick: l, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    tu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => F(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(eu.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: c()(eu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(eu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((tu.Bar = Je), (tu.Default = uu));
                const nu = Ie({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ne.Next : Ne.Prev),
                    }),
                    ru = 'VerticalBar_base_b5610',
                    au = 'VerticalBar_base__active_be260',
                    ou = 'VerticalBar_topButton_c2227',
                    iu = 'VerticalBar_bottomButton_ef09b',
                    su = 'VerticalBar_track_e3345',
                    lu = 'VerticalBar_thumb_a34e7',
                    cu = 'VerticalBar_rail_ff232',
                    du = 'disable',
                    Eu = () => {},
                    mu = { pending: !1, offset: 0 },
                    _u = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Au = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Fu = (e, u) => Math.max(20, e.offsetHeight * u),
                    gu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = _u, onDrag: n = Eu }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(mu),
                            A = _[0],
                            g = _[1],
                            f = (0, a.useCallback)(
                                (e) => {
                                    (g(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            D = Te(() => {
                                const u = E.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Fu(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== o ? r.current.classList.add(au) : r.current.classList.remove(au)),
                                    o
                                );
                            }),
                            B = Te(() => {
                                const u = l.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    c = xe(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - Fu(u, o)) * c;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(du),
                                                    void s.current.classList.remove(du)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(du),
                                                    void s.current.classList.add(du)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(du), s.current.classList.remove(du));
                                        }
                                    })(d));
                            }),
                            C = Te(() => {
                                Au(e, () => {
                                    (D(), B());
                                });
                            });
                        ((0, a.useEffect)(() => F(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Au(e, () => {
                                        B();
                                    });
                                };
                                let t = Eu;
                                const n = () => {
                                    (t(), (t = F(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = d.O.client.events.mouse.up(() => {
                                        f(mu);
                                    }),
                                    t = d.O.client.events.mouse.move(([u]) => {
                                        Au(e, (t) => {
                                            const r = l.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - A.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, A.offset, A.pending, n, f]));
                        const p = Re((u) => e.applyStepTo(u), m, [e]),
                            b = p[0],
                            h = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(du) || ke('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(ru, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(ou, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(du) || 0 !== e.button || (ke('play'), b(Ne.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(su, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((ke('play'), u.target === n))
                                                f({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        Au(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Ne.Prev : Ne.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: c()(lu, u.thumb) }),
                                o().createElement('div', { className: c()(cu, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(iu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(du) || 0 !== e.button || (ke('play'), b(Ne.Prev));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    fu = {
                        content: 'VerticalScroll_content_fe263',
                        defaultScroll: 'VerticalScroll_defaultScroll_e27f5',
                        bar: 'VerticalScroll_bar_b8700',
                        area: 'VerticalScroll_area_b5a82',
                    },
                    Du = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(fu.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(fu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fu.area, r) },
                                o().createElement(Bu, { className: i, classNames: s, api: m }, e),
                            ),
                            o().createElement(gu, { getStepByRailClick: l, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    Bu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => F(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(fu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Bu.Default = Du;
                const Cu = { Vertical: r, Horizontal: n },
                    pu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function bu() {
                    return (
                        (bu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        bu.apply(null, arguments)
                    );
                }
                const hu = R.views.common.tooltip_window.simple_tooltip_content,
                    vu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, pu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, s]);
                        return o().createElement(
                            Ee,
                            bu(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? hu.SimpleTooltipHtmlContent('resId') : hu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    wu = 'state_normal',
                    yu = 'state_limited',
                    xu = {
                        base: 'Reward_base_ee9bc',
                        base__selected: 'Reward_base__selected_ccab5',
                        reward: 'Reward_reward_e5c17',
                        image: 'Reward_image_ba802',
                        base__stateReceived: 'Reward_base__stateReceived_a99f7',
                        base__stateLimited: 'Reward_base__stateLimited_a58f7',
                        base__accepting: 'Reward_base__accepting_b6464',
                        blink: 'Reward_blink_a26c8',
                        optDeviceType: 'Reward_optDeviceType_b68c9',
                        disabled: 'Reward_disabled_aa070',
                        packSize: 'Reward_packSize_cfada',
                        label: 'Reward_label_f9078',
                        storage: 'Reward_storage_eca25',
                        storage__hidden: 'Reward_storage__hidden_dc458',
                        storageIcon: 'Reward_storageIcon_feccd',
                        countText: 'Reward_countText_fa788',
                        select: 'Reward_select_c96ad',
                        state: 'Reward_state_e0dd4',
                        stateText: 'Reward_stateText_c0962',
                        stateIcon: 'Reward_stateIcon_c504c',
                        glow: 'Reward_glow_c2637',
                        base__stateNormal: 'Reward_base__stateNormal_dee98',
                        slideUp: 'Reward_slideUp_c09f8',
                        show: 'Reward_show_a37f9',
                    },
                    Su = {
                        base: 'SelectButton_base_b24f9',
                        base__plus: 'SelectButton_base__plus_f2768',
                        base__disabled: 'SelectButton_base__disabled_e320a',
                        base__minus: 'SelectButton_base__minus_cff82',
                    };
                let Tu = (function (e) {
                    return ((e.Plus = 'plus'), (e.Minus = 'minus'), e);
                })({});
                const Ru = ({ type: e = Tu.Plus, isEnabled: u = !0, onClick: t }) =>
                        o().createElement('div', {
                            className: c()(Su.base, Su[`base__${e}`], !u && Su.base__disabled),
                            onClick: (e) => {
                                (e.stopPropagation(), u && t(e));
                            },
                        }),
                    ku = R.strings.selectable_reward.reward,
                    Mu = (0, p.Pi)(({ index: e }) => {
                        const u = H(),
                            t = u.model,
                            n = u.controls,
                            r = t.animationState.get(),
                            a = t.computes.rewardByIndex(e),
                            i = a.type,
                            s = a.count,
                            l = a.state,
                            E = a.storageCount,
                            m = a.packSize,
                            _ = n.addReward,
                            A = n.reduceReward,
                            F = s > 0 && 'state_received' !== l,
                            g = r === P.Accepting && F,
                            f = Be(i);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    xu.base,
                                    F && xu.base__selected,
                                    g && xu.base__accepting,
                                    xu[`base__${((D = l), D.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                ),
                                onClick: () => {
                                    l === wu
                                        ? (d.O.sound.play.sound('bp_click'), _(i))
                                        : l === yu && d.O.sound.play.sound('bp_click_limit');
                                },
                                onMouseEnter: () => d.O.sound.play.sound('bp_highlight'),
                            },
                            o().createElement(
                                'div',
                                { className: c()(xu.storage, E <= 0 && xu.storage__hidden) },
                                o().createElement('div', { className: xu.storageIcon }),
                                E,
                            ),
                            o().createElement(
                                Ae,
                                { args: { type: i } },
                                o().createElement(
                                    'div',
                                    { className: xu.reward },
                                    o().createElement('div', {
                                        className: xu.image,
                                        style: { backgroundImage: `url(${he(i)})` },
                                    }),
                                    f !== De.None &&
                                        o().createElement('div', {
                                            className: xu.optDeviceType,
                                            style: { backgroundImage: `url(${be(i, f)})` },
                                        }),
                                    !F &&
                                        l !== wu &&
                                        o().createElement('div', {
                                            className: xu.disabled,
                                            style: { maskImage: `url(${he(i)})` },
                                        }),
                                    m > 1 &&
                                        o().createElement(
                                            'div',
                                            { className: xu.packSize },
                                            Fe(ku.packSizeCount(), { packSize: m }),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: xu.label },
                                ((e) => {
                                    var u;
                                    const t = e.split('_')[1],
                                        n = t && R.strings.blueprints.nations.$dyn(t),
                                        r = null == (u = R.strings.artefacts.$dyn(e)) ? void 0 : u.$dyn('name');
                                    return (
                                        n ||
                                        (r && 'string' == typeof r
                                            ? ge(r)
                                            : void console.error('title for reward is not provided'))
                                    );
                                })(i),
                            ),
                            F || l === wu
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement('span', { className: xu.countText }, s),
                                      o().createElement(
                                          'div',
                                          { className: xu.select },
                                          o().createElement(Ru, {
                                              type: Tu.Minus,
                                              isEnabled: F,
                                              onClick: () => {
                                                  (d.O.sound.play.sound('bp_click_minus'), A(i));
                                              },
                                          }),
                                          o().createElement(Ru, {
                                              type: Tu.Plus,
                                              isEnabled: l === wu,
                                              onClick: () => {
                                                  l === wu && (d.O.sound.play.sound('bp_click_plus'), _(i));
                                              },
                                          }),
                                      ),
                                  )
                                : o().createElement(
                                      vu,
                                      l === yu && 0 === s
                                          ? {
                                                header: ku.tooltip.state_limited.header(),
                                                body: ku.tooltip.state_limited.body(),
                                            }
                                          : { isEnabled: !1 },
                                      o().createElement(
                                          'div',
                                          { className: xu.state },
                                          o().createElement('div', { className: xu.stateText }, ku.$dyn(l)),
                                          o().createElement('div', { className: xu.stateIcon }),
                                      ),
                                  ),
                            o().createElement('div', { className: xu.glow }),
                        );
                        var D;
                    }),
                    Lu = 'ContentGrid_base_a0b9d',
                    Pu = 'ContentGrid_scrollArea_ae898',
                    Ou = 'ContentGrid_scrollAreaInner_d7aca',
                    Nu = 'ContentGrid_reward_e2eca',
                    Hu = {
                        base: 'Lip_base_f05b1',
                        base__top: 'Lip_base__top_ef04e',
                        base__bottom: 'Lip_base__bottom_fd801',
                        base__show: 'Lip_base__show_fbf30',
                    };
                let Iu = (function (e) {
                    return ((e.Top = 'top'), (e.Bottom = 'bottom'), e);
                })({});
                const Wu = ({ position: e, visible: u }) =>
                        o().createElement('div', { className: c()(Hu.base, Hu[`base__${e}`], u && Hu.base__show) }),
                    zu = (0, p.Pi)(({ className: e }) => {
                        const u = H().model,
                            t = u.root.get().selectedTab,
                            n = u.rewards.get(),
                            r = nu(),
                            i = (0, a.useState)('default'),
                            s = i[0],
                            l = i[1],
                            d = Te(() => {
                                const e = r.getBounds(),
                                    u = e[0],
                                    t = e[1],
                                    n = r.animationScroll.scrollPosition.goal,
                                    a = r.getContainerSize(),
                                    o = r.getWrapperSize();
                                if (a && o)
                                    if (a !== o)
                                        switch (n) {
                                            case u:
                                                l('start');
                                                break;
                                            case t:
                                                l('end');
                                                break;
                                            default:
                                                l('default');
                                        }
                                    else l('hidden');
                            });
                        return (
                            (0, a.useEffect)(
                                () => (
                                    r.events.on('change', d),
                                    r.events.on('recalculateContent', d),
                                    r.events.on('resizeHandled', d),
                                    () => {
                                        (r.events.off('change', d),
                                            r.events.off('recalculateContent', d),
                                            r.events.off('resizeHandled', d));
                                    }
                                ),
                                [r.events, d],
                            ),
                            (0, a.useEffect)(
                                () =>
                                    F(() => {
                                        r.applyScroll(0);
                                    }),
                                [r, t],
                            ),
                            o().createElement(
                                'div',
                                { className: c()(Lu, e) },
                                o().createElement(
                                    Cu.Vertical.Area.Default,
                                    { api: r, key: 'area', className: Pu },
                                    o().createElement(
                                        'div',
                                        { className: Ou },
                                        oe(n.length, (e) =>
                                            o().createElement(
                                                'div',
                                                { key: e, className: Nu },
                                                o().createElement(Mu, { index: e }),
                                            ),
                                        ),
                                    ),
                                ),
                                'hidden' !== s &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(Wu, { position: Iu.Top, visible: 'start' !== s }),
                                        o().createElement(Wu, { position: Iu.Bottom, visible: 'end' !== s }),
                                    ),
                            )
                        );
                    });
                let $u = (function (e) {
                    return (
                        (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'),
                        e
                    );
                })({});
                const Uu = {
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
                let Gu = (function (e) {
                        return (
                            (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'),
                            e
                        );
                    })({}),
                    Vu = (function (e) {
                        return (
                            (e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            e
                        );
                    })({});
                const ju = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: r,
                    onMouseMove: i,
                    onMouseDown: s,
                    onMouseUp: l,
                    onMouseLeave: d,
                    onClick: E,
                    isFocused: m = !1,
                    type: _ = Gu.primary,
                    soundHover: A = 'highlight',
                    soundClick: F = 'play',
                }) => {
                    const g = (0, a.useRef)(null),
                        f = (0, a.useState)(m),
                        D = f[0],
                        B = f[1],
                        C = (0, a.useState)(!1),
                        p = C[0],
                        b = C[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                D && null !== g.current && !g.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, a.useEffect)(() => {
                            B(m);
                        }, [m]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: c()(
                                    Uu.base,
                                    Uu[`base__${_}`],
                                    t && Uu.base__disabled,
                                    u && Uu[`base__${u}`],
                                    D && Uu.base__focus,
                                    p && Uu.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== A && ke(A), r && r(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    t || (l && l(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    if (t) return;
                                    const u = e.button === $u.LEFT;
                                    (null !== F && u && ke(F),
                                        s && s(e),
                                        m && (t || (g.current && (g.current.focus(), B(!0)))),
                                        u && b(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (d && d(e), b(!1));
                                },
                                onClick: function (e) {
                                    t || (E && E(e));
                                },
                            },
                            _ !== Gu.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Uu.back }),
                                    o().createElement('span', { className: Uu.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: c()(Uu.state, Uu.state__default) },
                                o().createElement('span', { className: Uu.stateDisabled }),
                                o().createElement('span', { className: Uu.stateHighlightHover }),
                                o().createElement('span', { className: Uu.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Uu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                const qu = 'Footer_base_d50d9',
                    Xu = 'Footer_description_adb06',
                    Yu = 'Footer_selectRewards_cabea',
                    Ku = 'Footer_rewardsSelected_ac19a',
                    Zu = 'Footer_rewardsSelectedCount_e9662',
                    Qu = 'Footer_rewardsSelectedIcon_dbf0d',
                    Ju = 'Footer_buttons_c7287',
                    et = 'Footer_cButton_f3772',
                    ut = (0, p.Pi)(({ buttonsSize: e, classNames: u }) => {
                        const t = H(),
                            n = t.model,
                            r = t.controls,
                            i = n.root.get().totalRewardCount,
                            s = i > 0,
                            l = Z().mediaSize,
                            d = null != e ? e : ((e) => (e > X.Small ? Vu.medium : Vu.small))(l),
                            E = c()(et, null == u ? void 0 : u.button),
                            m = (function () {
                                const e = (0, a.useRef)(0);
                                return (
                                    C(() => {
                                        window.clearTimeout(e.current);
                                    }),
                                    (0, a.useMemo)(
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
                            })(),
                            _ = n.computes.rewardsToClaimTotal();
                        return o().createElement(
                            'div',
                            { className: qu },
                            o().createElement(
                                'div',
                                { className: Xu },
                                s
                                    ? o().createElement(
                                          'div',
                                          { className: Ku },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          o().createElement('span', { className: Zu }, i),
                                          o().createElement(
                                              Ee,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              o().createElement('div', { className: Qu }),
                                          ),
                                      )
                                    : o().createElement(
                                          'div',
                                          { className: Yu },
                                          1 === n.tabs.get().length
                                              ? R.strings.selectable_reward.footer.singleCategory.selectRewards(_)
                                              : R.strings.selectable_reward.footer.multipleCategories.selectRewards(_),
                                      ),
                            ),
                            o().createElement(
                                'div',
                                { className: Ju },
                                o().createElement(
                                    ju,
                                    {
                                        size: d,
                                        type: Gu.primary,
                                        disabled: !s,
                                        mixClass: E,
                                        onClick: () => {
                                            (r.setAnimationState(P.Accepting), m.run(r.submit, 600));
                                        },
                                    },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                o().createElement(
                                    ju,
                                    { size: d, type: Gu.secondary, mixClass: E, onClick: r.close },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    }),
                    tt = {
                        base: 'Content_base_b7304',
                        base__accepting: 'Content_base__accepting_ee065',
                        heading: 'Content_heading_cfd48',
                        slideUp: 'Content_slideUp_b49ad',
                        title: 'Content_title_ca76b',
                        subTitle: 'Content_subTitle_ee16f',
                        wrapper: 'Content_wrapper_d3067',
                        show: 'Content_show_e1b1a',
                        wrapper__shown: 'Content_wrapper__shown_e03ff',
                        categories: 'Content_categories_cee7a',
                        footer: 'Content_footer_cda32',
                        base__windowed: 'Content_base__windowed_b3670',
                        blink: 'Content_blink_dd03a',
                    },
                    nt = (0, p.Pi)(({ title: e, subTitle: u, classNames: t, buttonsSize: n }) => {
                        const r = (0, a.useState)(!1),
                            i = r[0],
                            s = r[1],
                            l = H().model,
                            d = l.tabs.get(),
                            E = l.animationState.get();
                        return (
                            (0, a.useEffect)(() => {
                                if (!i)
                                    return ((e, u) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = e();
                                        }, u);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(n));
                                        };
                                    })(() => {
                                        s(!0);
                                    }, 600);
                            }, [i]),
                            o().createElement(
                                'div',
                                { className: c()(tt.base, tt[`base__${E}`]) },
                                o().createElement(
                                    'div',
                                    { className: c()(tt.heading, null == t ? void 0 : t.heading) },
                                    o().createElement(
                                        'div',
                                        { className: c()(tt.title, null == t ? void 0 : t.title) },
                                        e,
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: c()(tt.subTitle, null == t ? void 0 : t.subTitle) },
                                        u,
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: c()(tt.wrapper, i && tt.wrapper__shown) },
                                    o().createElement(
                                        'div',
                                        { className: tt.categories },
                                        oe(d.length, (e) =>
                                            o().createElement(ye, {
                                                key: e,
                                                index: e,
                                                className: null == t ? void 0 : t.category,
                                                classNames: { title: null == t ? void 0 : t.categoryTitle },
                                            }),
                                        ),
                                    ),
                                    o().createElement(zu, { className: null == t ? void 0 : t.contentGrid }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: c()(tt.footer, null == t ? void 0 : t.footer) },
                                    o().createElement(ut, {
                                        buttonsSize: n,
                                        classNames: null == t ? void 0 : t.footerClassNames,
                                    }),
                                ),
                            )
                        );
                    }),
                    rt = 'Error_base_d9657',
                    at = 'Error_image_b711a',
                    ot = 'Error_title_be4a8',
                    it = 'Error_description_c20e2',
                    st = 'Error_footer_ff86e',
                    lt = 'Error_button_b751b',
                    ct = R.strings.selectable_reward.error,
                    dt = (0, p.Pi)(() => {
                        const e = H().controls;
                        return o().createElement(
                            'div',
                            { className: rt },
                            o().createElement('div', { className: at }),
                            o().createElement('div', { className: ot }, ct.title()),
                            o().createElement('div', { className: it }, ct.description()),
                            o().createElement(
                                'div',
                                { className: st },
                                o().createElement(
                                    ju,
                                    { mixClass: lt, type: Gu.primary, size: Vu.medium, onClick: e.close },
                                    ct.button(),
                                ),
                            ),
                        );
                    }),
                    Et = 'RewardSelection_base_c61e8',
                    mt = (0, p.Pi)(({ title: e, subTitle: u, classNames: t, buttonsSize: n }) => {
                        const r = H().model.tabs.get();
                        return o().createElement(
                            ae,
                            { className: Et },
                            r.length > 0
                                ? o().createElement(nt, { title: e, subTitle: u, classNames: t, buttonsSize: n })
                                : o().createElement(dt, null),
                        );
                    }),
                    _t = ({ title: e, subTitle: u, modelProviderContext: t }) =>
                        o().createElement(
                            N,
                            { options: { context: t } },
                            o().createElement(mt, { title: e, subTitle: u }),
                        ),
                    At = S()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object() };
                            return Object.assign({}, u);
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('selectableRewardModel.onCloseClick'),
                        }),
                    ),
                    Ft = At[0],
                    gt = At[1],
                    ft = 'App_base_c5499',
                    Dt = 'App_base__hide_a3f3d',
                    Bt = 'App_content_e202d',
                    Ct = 'App_background_d1992',
                    pt = 'App_backgroundBlur_be1c7',
                    bt = 'App_shadow_f7bf9',
                    ht = 'App_close_d74ba',
                    vt = R.strings.battle_pass.rewardChoice,
                    wt = (e, u) =>
                        u
                            ? {
                                  backgroundImage: `url(${b(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})`,
                              }
                            : ((e) => {
                                  const u = R.images.gui.maps.icons.battlePass.backgrounds;
                                  return e
                                      ? { backgroundImage: `url(${b(u.progression, e)})` }
                                      : { backgroundImage: `url(${u.$dyn('common')})` };
                              })(),
                    yt = (0, p.Pi)(() => {
                        const e = gt(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            r = n.chapterID,
                            i = n.level,
                            s = Boolean(i),
                            l = (0, a.useState)(!1),
                            E = l[0],
                            m = l[1],
                            _ = (0, a.useState)(!1),
                            f = _[0],
                            D = _[1],
                            p = (0, a.useCallback)(() => {
                                if ((d.O.view.setEventHandled(), f)) return;
                                D(!0);
                                const e = setTimeout(t.close, 800);
                                return () => clearTimeout(e);
                            }, [t.close, f]);
                        var b;
                        (C(() => p),
                            (b = p),
                            B(g.n.ESCAPE, b),
                            (0, a.useEffect)(
                                () =>
                                    F(() => {
                                        m(!0);
                                    }),
                                [],
                            ));
                        const h = wt(r, s);
                        return o().createElement(
                            'div',
                            { className: c()(ft, f && Dt) },
                            o().createElement(
                                'div',
                                { className: Ct, style: h },
                                o().createElement('div', { className: pt }),
                            ),
                            o().createElement('div', { className: bt }),
                            E &&
                                o().createElement(
                                    'div',
                                    { className: Bt },
                                    o().createElement(
                                        'div',
                                        { className: ht },
                                        o().createElement(A, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: p,
                                        }),
                                    ),
                                    o().createElement(_t, {
                                        modelProviderContext: 'model.selectableRewardModel',
                                        title: vt.title(),
                                        subTitle: vt.subTitle(),
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    s().render(
                        o().createElement(Ft, null, o().createElement(yt, null)),
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 2016),
        (() => {
            var e = { 2016: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(7732));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
