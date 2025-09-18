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
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => a, onScaleUpdated: () => o }));
                var r = t(472),
                    n = t(176);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        o = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
            959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = t(527),
                    n = t(493);
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
            176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            493: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => r });
            },
            472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => o });
                var r = t(959),
                    n = t(698),
                    a = t(514);
                const o = { view: t(641), client: r, sound: a.ZP, intl: n.N };
            },
            698: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var r = t(959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, r.playSound)(n[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        arabic2roman: () => y,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => P,
                        events: () => o.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        initExternalPaddings: () => k,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => R,
                    }));
                var r = t(690),
                    n = t(722),
                    a = t(112),
                    o = t(538),
                    i = t(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = r.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    T = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function P() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function k(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            r = u.right,
                            n = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    i = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? n : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
            690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => i, cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t]; ) ((u += r[t]), (e -= n[t]));
                    return u;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (o ? `${e}` : a(e));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(138);
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
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(179);
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
            179: (e, u, t) => {
                'use strict';
                t.d(u, {
                    B3: () => l,
                    Z5: () => o,
                    B0: () => s,
                    wU: () => v,
                    ry: () => C,
                    Eu: () => B,
                    SW: () => h,
                    P3: () => f,
                });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    A = t(138);
                const m = ['args'];
                function F(e, u, t, r, n, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(r, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            F(a, r, n, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(a, r, n, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    p = () => g(s.CLOSE),
                    h = () => g(s.POP_OVER, { on: !1 }),
                    f = (e, u, t, r, n = R.invalid('resId'), a) => {
                        const o = A.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            E = i.width,
                            d = i.height,
                            _ = {
                                x: A.O.view.pxToRem(l) + o.x,
                                y: A.O.view.pxToRem(c) + o.y,
                                width: A.O.view.pxToRem(E),
                                height: A.O.view.pxToRem(d),
                            };
                        g(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: D(_),
                            on: !0,
                            args: a,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var w = t(572);
                const y = n.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: h,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: f,
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: v,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = S;
            },
            843: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => dr,
                        Bar: () => lr,
                        DefaultScroll: () => Er,
                        Direction: () => Xt,
                        defaultSettings: () => qt,
                        useHorizontalScrollApi: () => Kt,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => Tr, Bar: () => yr, Default: () => xr, useVerticalScrollApi: () => _r }));
                var a = t(363),
                    o = t.n(a);
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
                var s = t(138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e = s.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
                            const r = (function (e, u) {
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
                                n = (function (e, u) {
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
                                a = Math.min(r, n);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: r === t.extraLarge.weight,
                                largeWidth: r === t.large.weight,
                                mediumWidth: r === t.medium.weight,
                                smallWidth: r === t.small.weight,
                                extraSmallWidth: r === t.extraSmall.weight,
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(u, t, l),
                    );
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
                })(c || (c = {}));
                const d = E(),
                    _ = (0, a.createContext)(d),
                    A = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, A);
                    const r = (0, a.useContext)(_),
                        n = r.extraLarge,
                        o = r.large,
                        s = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        d = r.largeWidth,
                        m = r.mediumWidth,
                        F = r.smallWidth,
                        D = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        B = r.largeHeight,
                        g = r.mediumHeight,
                        p = r.smallHeight,
                        h = r.extraSmallHeight,
                        f = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && o) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return i(u, t, f);
                        if (t.largeWidth && d) return i(u, t, f);
                        if (t.mediumWidth && m) return i(u, t, f);
                        if (t.smallWidth && F) return i(u, t, f);
                        if (t.extraSmallWidth && D) return i(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const u = (0, a.useState)(E),
                        t = u[0],
                        r = u[1],
                        n = (0, a.useState)(!1),
                        i = n[0],
                        l = n[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const u = s.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : E(u);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                s.O.client.events.on('clientResized', e),
                                s.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (s.O.client.events.off('clientResized', e),
                                        s.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        o().createElement(_.Provider, { value: t }, i && e)
                    );
                };
                var F = t(483),
                    D = t.n(F),
                    C = t(926),
                    B = t.n(C);
                let g, p, h;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(g || (g = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(h || (h = {})));
                const f = () => {
                        const e = (0, a.useContext)(_),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return g.ExtraLarge;
                                    case e.large:
                                        return g.Large;
                                    case e.medium:
                                        return g.Medium;
                                    case e.small:
                                        return g.Small;
                                    case e.extraSmall:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
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
                                        return h.ExtraLarge;
                                    case e.largeHeight:
                                        return h.Large;
                                    case e.mediumHeight:
                                        return h.Medium;
                                    case e.smallHeight:
                                        return h.Small;
                                    case e.extraSmallHeight:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    v = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const w = {
                        [p.ExtraSmall]: '',
                        [p.Small]: B().SMALL_WIDTH,
                        [p.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [p.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [h.ExtraSmall]: '',
                        [h.Small]: B().SMALL_HEIGHT,
                        [h.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [h.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [h.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [g.ExtraSmall]: '',
                        [g.Small]: B().SMALL,
                        [g.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [g.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [g.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, v);
                        const n = f(),
                            a = n.mediaWidth,
                            i = n.mediaHeight,
                            s = n.mediaSize;
                        return o().createElement('div', b({ className: D()(t, w[a], y[i], S[s]) }, r), u);
                    },
                    T = ['children'];
                const P = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, T);
                    return o().createElement(m, null, o().createElement(x, t, u));
                };
                var k = t(533),
                    L = t.n(k);
                const M = {
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
                    N = [
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
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const I = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        r = e.goto,
                        n = e.classNames,
                        i = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        E = e.onMouseUp,
                        d = e.side,
                        _ = void 0 === d ? 'left' : d,
                        A = e.type,
                        m = void 0 === A ? 'back' : A,
                        F = e.soundHover,
                        C = void 0 === F ? 'highlight' : F,
                        B = e.soundClick,
                        g = void 0 === B ? 'play' : B,
                        p = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, N);
                    const h = (0, a.useCallback)(
                            (e) => {
                                (null == i || i(e), s.O.sound.play.sound(C));
                            },
                            [i, C],
                        ),
                        f = (0, a.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        v = (0, a.useCallback)(
                            (e) => {
                                (null == c || c(e), s.O.sound.play.sound(g));
                            },
                            [c, g],
                        ),
                        b = (0, a.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return o().createElement(
                        'div',
                        O(
                            {
                                className: D()(M.base, M[`base__${m}`], M[`base__${_}`], null == n ? void 0 : n.base),
                                onMouseEnter: h,
                                onMouseLeave: f,
                                onMouseDown: v,
                                onMouseUp: b,
                                onClick: t,
                            },
                            p,
                        ),
                        'info' !== m && o().createElement('div', { className: M.shine }),
                        o().createElement(
                            'div',
                            { className: D()(M.icon, M[`icon__${m}`], M[`icon__${_}`], null == n ? void 0 : n.icon) },
                            o().createElement('div', { className: D()(M.glow, null == n ? void 0 : n.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: D()(M.caption, M[`caption__${m}`], null == n ? void 0 : n.caption) },
                            u,
                        ),
                        r && o().createElement('div', { className: D()(M.goto, null == n ? void 0 : n.goto) }, r),
                    );
                };
                var H = t(521),
                    W = t(179);
                const G = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function U(e = H.n.NONE, u = G, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, r]);
                }
                function z(e) {
                    U(H.n.ESCAPE, e);
                }
                var V = t(403);
                const $ = (e) => {
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
                let j;
                !(function (e) {
                    ((e[(e.Pending = 0)] = 'Pending'),
                        (e[(e.Success = 1)] = 'Success'),
                        (e[(e.Failure = 2)] = 'Failure'));
                })(j || (j = {}));
                const X = 'vehicleLevel';
                let q;
                !(function (e) {
                    ((e.VEHICLE = 'vehicle'), (e.COMPENSATION = 'compensation'));
                })(q || (q = {}));
                function Y() {
                    return !1;
                }
                console.log;
                var K = t(174);
                function Z(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Q(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Q(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Q(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const J = (e) => (0 === e ? window : window.subViews.get(e));
                function ee(e) {
                    return e;
                }
                function ue(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const te = ue;
                function re(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var ne = t(946);
                const ae = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, r, n) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = J,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (n.set(l, t), e && t(o(a)), l);
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
                                                        for (var e, t = Z(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            r = K.LO.box(u, { equals: Y });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, K.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = K.LO.box(r, { equals: Y });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, K.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = K.LO.box(r, { equals: Y });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, K.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = K.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, K.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = K.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, K.aD)((e) => {
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
                                                cleanup: E,
                                            }),
                                            _ = { mode: t, model: d, externalModel: i, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && n ? n.controls(_) : u(_),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(r),
                                    A = _[0],
                                    m = _[1],
                                    F = (0, a.useState)(() => E(r, n, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? C(E(A, n, l)) : (d.current = !0);
                                    }, [l, A, n]),
                                    (0, a.useEffect)(() => {
                                        m(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    o().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = K.LO.box(''),
                                t = {
                                    primitives: e.primitives(['totalRewardsCount', 'selectedRewardsCount']),
                                    categories: e.array('categories'),
                                    selectableRewards: e.array('selectableRewards'),
                                },
                                r = (0, ne.Om)(
                                    () => {
                                        const e = re(t.categories.get(), ee);
                                        return e.find((e) => e.isSelected) || e[0];
                                    },
                                    { equals: Y },
                                ),
                                n = (0, ne.Om)(() => {
                                    if (r().isCompensation) return re(t.selectableRewards.get(), ee);
                                    const e = u.get();
                                    return (function (e, u) {
                                        if (Array.isArray(e)) return e.filter(u);
                                        const t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            var r;
                                            const a = null == (r = e[n]) ? void 0 : r.value;
                                            u(a, n, e) && t.push(a);
                                        }
                                        return t;
                                    })(t.selectableRewards.get(), (u) =>
                                        systemLocale.toLowerCase(u.userName).includes(e && systemLocale.toLowerCase(e)),
                                    );
                                }),
                                a = (0, ne.Om)(() => n().length),
                                o = (0, ne.Om)(() => a() < t.primitives.totalRewardsCount.get());
                            return Object.assign({}, t.primitives, {
                                categories: t.categories,
                                filterQuery: u,
                                computes: {
                                    selectedCategory: r,
                                    selectableRewards: n,
                                    selectableRewardsLength: a,
                                    isFilterApplied: o,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = e.createCallback((e) => ({ [X]: e }), 'onCategorySelect'),
                                r = e.createCallbackNoArgs('onFilterReset');
                            return {
                                handleCategorySelect: (0, K.aD)((e) => {
                                    (u.filterQuery.set(''), t(e));
                                }),
                                selectReward: e.createCallback((e) => ({ rewardIndex: e }), 'onSelectReward'),
                                close: e.createCallbackNoArgs('onClose'),
                                confirm: e.createCallbackNoArgs('onConfirm'),
                                setFilterQuery: (0, K.aD)((e) => u.filterQuery.set(e)),
                                resetFilter: (0, K.aD)(() => {
                                    (u.filterQuery.set(''), r());
                                }),
                            };
                        },
                    ),
                    oe = ae[0],
                    ie = ae[1],
                    se = 'App_base_e5',
                    le = 'App_base__error_45',
                    ce = 'App_base__hidden_48',
                    Ee = 'App_closeButton_2b',
                    de = 'App_container_ff',
                    _e = 'App_footer_0a';
                function Ae(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const me = {
                        playHighlight() {
                            Ae('highlight');
                        },
                        playClick() {
                            Ae('play');
                        },
                        playYes() {
                            Ae('yes1');
                        },
                    },
                    Fe = {
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
                let De, Ce;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(De || (De = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Ce || (Ce = {})));
                const Be = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: r,
                    onMouseEnter: n,
                    onMouseMove: i,
                    onMouseDown: s,
                    onMouseUp: l,
                    onMouseLeave: c,
                    onClick: E,
                    isFocused: d = !1,
                    type: _ = De.primary,
                    soundHover: A = 'highlight',
                    soundClick: m = 'play',
                }) => {
                    const F = (0, a.useRef)(null),
                        C = (0, a.useState)(d),
                        B = C[0],
                        g = C[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        f = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            g(d);
                        }, [d]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: D()(
                                    Fe.base,
                                    Fe[`base__${_}`],
                                    t && Fe.base__disabled,
                                    u && Fe[`base__${u}`],
                                    B && Fe.base__focus,
                                    h && Fe.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== A && Ae(A), n && n(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    t || (l && l(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== m && Ae(m),
                                        s && s(e),
                                        d && (t || (F.current && (F.current.focus(), g(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (c && c(e), f(!1));
                                },
                                onClick: function (e) {
                                    t || (E && E(e));
                                },
                            },
                            _ !== De.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Fe.back }),
                                    o().createElement('span', { className: Fe.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: D()(Fe.state, Fe.state__default) },
                                o().createElement('span', { className: Fe.stateDisabled }),
                                o().createElement('span', { className: Fe.stateHighlightHover }),
                                o().createElement('span', { className: Fe.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Fe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                var ge = t(281);
                let pe;
                function he(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function fe(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(pe || (pe = {}));
                const ve = (e) => e.replace(/&nbsp;/g, ' '),
                    be = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    we = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ye = (e, u, t = pe.left) => e.split(u).reduce(t === pe.left ? be : we, []),
                    Se = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    xe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Te = (e, u = pe.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (xe.includes(t)) return Se(e);
                        if ('ja' === t) {
                            return (0, ge.D4)()
                                .parse(e)
                                .map((e) => ve(e));
                        }
                        return ((e, u = pe.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = ve(e);
                            return (ye(n, /( )/, u).forEach((e) => (t = t.concat(ye(e, r, pe.left)))), t);
                        })(e, u);
                    },
                    Re = 'FormatText_base_d0',
                    Pe = ({ binding: e, text: u = '', classMix: t, alignment: r = pe.left, formatWithBrackets: n }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = n && e ? he(u, e) : u;
                        return o().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((u, n) =>
                                o().createElement(
                                    'div',
                                    { className: D()(Re, t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Te(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => o().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ke = 'ErrorScreen_base_51',
                    Le = 'ErrorScreen_icon_24',
                    Me = 'ErrorScreen_title_e0',
                    Ne = 'ErrorScreen_description_15',
                    Oe = 'ErrorScreen_button_47',
                    Ie = R.strings.winback.winbackSelectableRewardView.error,
                    He = (0, V.Pi)(() => {
                        const e = ie().controls;
                        return o().createElement(
                            'div',
                            { className: ke },
                            o().createElement('div', { className: Le }),
                            o().createElement(Pe, { classMix: Me, text: Ie.title() }),
                            o().createElement(Pe, { classMix: Ne, text: Ie.description() }),
                            o().createElement(Be, { mixClass: Oe, onClick: e.close }, Ie.button()),
                        );
                    }),
                    We = [
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
                function Ge(e) {
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
                const Ue = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    ze = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            m = e.isEnabled,
                            F = void 0 === m || m,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, We);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId'),
                                            n = '';
                                        var a;
                                        return (
                                            u &&
                                                ((n =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [C],
                            ),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ue(t, A, { isMouseEvent: !0, on: !0, arguments: Ge(r) }, f),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, A, r, f, B]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ue(t, A, { on: !1 }, f),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, A, f, g]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
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
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      n && n(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (b(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === d && b(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === d && b(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Ve = 'Footer_base_65',
                    $e = 'Footer_infoIcon_1d',
                    je = 'Footer_amountRewards_4c',
                    Xe = 'Footer_text_30',
                    qe = 'Footer_text__active_52',
                    Ye = 'Footer_actions_78',
                    Ke = 'Footer_button_29',
                    Ze = R.strings.winback.winbackSelectableRewardView,
                    Qe = (0, V.Pi)(({ className: e }) => {
                        const u = ie(),
                            t = u.controls,
                            r = u.model.selectedRewardsCount.get();
                        return o().createElement(
                            'div',
                            { className: D()(Ve, e) },
                            r
                                ? o().createElement(Pe, {
                                      text: Ze.footer.actionText.active(),
                                      binding: {
                                          infoIcon: o().createElement(
                                              ze,
                                              {
                                                  contentId:
                                                      R.views.lobby.winback.tooltips.SelectedRewardsTooltip('resId'),
                                              },
                                              o().createElement('div', { className: $e }),
                                          ),
                                          amountRewards: o().createElement('div', { className: je }, r),
                                      },
                                      classMix: D()(Xe, Boolean(r) && qe),
                                  })
                                : o().createElement('div', { className: Xe }, Ze.footer.actionText.disable()),
                            o().createElement(
                                'div',
                                { className: Ye },
                                o().createElement(
                                    Be,
                                    {
                                        size: Ce.medium,
                                        mixClass: Ke,
                                        type: De.primary,
                                        disabled: !r,
                                        onClick: t.confirm,
                                    },
                                    Ze.buttons.confirm(),
                                ),
                                o().createElement(
                                    Be,
                                    { size: Ce.medium, mixClass: Ke, type: De.secondary, onClick: t.close },
                                    Ze.buttons.cancel(),
                                ),
                            ),
                        );
                    }),
                    Je = ['children'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Je);
                        return o().createElement(
                            ze,
                            eu(
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
                    tu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const nu = R.views.common.tooltip_window.simple_tooltip_content,
                    au = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, tu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, n, s]);
                        return o().createElement(
                            ze,
                            ru(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? nu.SimpleTooltipHtmlContent('resId') : nu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const iu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(au, u, r);
                        const n = u.contentId;
                        return n ? o().createElement(ze, ou({}, u, { contentId: n }), r) : o().createElement(uu, u, r);
                    },
                    su = 'Categories_base_51',
                    lu = 'Categories_tab_75',
                    cu = 'Categories_separator_cb';
                var Eu = t(690);
                const du = 'Tab_base_bc',
                    _u = 'Tab_title_14',
                    Au = 'Tab_base__selected_2a',
                    mu = 'Tab_vehicle_0c',
                    Fu = 'Tab_base__hasSelectedRewards_24',
                    Du = 'Tab_discount_f7',
                    Cu = 'Tab_vehicleLevel_28',
                    Bu = 'Tab_check_4d',
                    gu = 'Tab_counterContainer_11',
                    pu = 'Tab_counter_1a',
                    hu = 'Tab_glow_f0',
                    fu = R.strings.winback.winbackSelectableRewardView.category,
                    vu = ({ isDiscount: e, isSelected: u, vehicleLevel: t, rewardsSelected: r, onClick: n }) => {
                        const a = r > 0,
                            i = (0, Eu.HG)(t);
                        return o().createElement(
                            'div',
                            {
                                onClick: () => {
                                    (me.playClick(), n(t));
                                },
                                onMouseEnter: me.playHighlight,
                                className: D()(du, u && Au, a && Fu),
                            },
                            e
                                ? o().createElement(Pe, { classMix: _u, text: fu.title() })
                                : o().createElement(Pe, {
                                      classMix: _u,
                                      text: fu.titleDiscount(),
                                      binding: { vehicleLevel: i },
                                  }),
                            o().createElement('div', { className: mu }),
                            o().createElement('div', { className: Cu }, i),
                            e && o().createElement('div', { className: Du }),
                            o().createElement('div', { className: Bu }),
                            o().createElement(
                                'div',
                                { className: gu },
                                o().createElement(Pe, {
                                    classMix: pu,
                                    text: fu.rewardsAvailabilityCounter(),
                                    binding: { rewardsSelected: r, rewardsAvailable: 1 },
                                }),
                                o().createElement('div', { className: hu }),
                            ),
                        );
                    };
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const wu = (0, V.Pi)(({ className: e }) => {
                        const u = ie(),
                            t = u.model,
                            r = u.controls;
                        return o().createElement(
                            'div',
                            { className: D()(su, e) },
                            re(t.categories.get(), (e, u, t) =>
                                o().createElement(
                                    'div',
                                    { className: lu, key: u },
                                    o().createElement(
                                        iu,
                                        {
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.lobby.winback.tooltips.SelectableRewardTooltip('resId'),
                                                args: { [X]: e.vehicleLevel },
                                            },
                                        },
                                        o().createElement(vu, bu({ onClick: r.handleCategorySelect }, e)),
                                    ),
                                    u !== t.length - 1 && o().createElement('div', { className: cu }),
                                ),
                            ),
                        );
                    }),
                    yu = 'default',
                    Su = 'search',
                    xu = 'email',
                    Tu = 'password',
                    Ru = 'normal',
                    Pu = 'disabled',
                    ku = 'alert',
                    Lu = 'error',
                    Mu = 'medium',
                    Nu = {
                        [yu]: '',
                        [xu]: R.strings.common.input.placeholder.email(),
                        [Su]: R.strings.common.input.placeholder.search(),
                        [Tu]: R.strings.common.input.placeholder.password(),
                    },
                    Ou = { [yu]: 'text', [xu]: 'text', [Su]: 'text', [Tu]: 'password' },
                    Iu = { [yu]: '', [xu]: 'Invalid email', [Su]: '', [Tu]: '' },
                    Hu = R.images.gui.maps.icons.components.input;
                function Wu(e, u) {
                    return (
                        u !== xu ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                const Gu = {
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
                    Uu = o().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = yu,
                            size: r = Mu,
                            variant: n = Ru,
                            placeholder: i = '',
                            highlighted: s,
                            withClear: l,
                            selectOnFocus: c = !0,
                            maxLength: E,
                            iconSource: d,
                            classMix: _,
                            onMouseEnter: A,
                            onMouseLeave: m,
                            onMouseDown: F,
                            onMouseUp: C,
                            onClick: B,
                            onChange: g,
                            onClear: p,
                            onFocus: h,
                            onBlur: f,
                        }) => {
                            const v = (0, a.useState)(!1),
                                b = v[0],
                                w = v[1],
                                y = (0, a.useRef)(null),
                                S = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                x = n !== Pu,
                                T = (0, a.useCallback)(
                                    (e) => {
                                        x && (w(!0), h && h(e));
                                    },
                                    [x, h],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        x && !S.current.mouseOver && (w(!1), f && f(e));
                                    },
                                    [x, f],
                                );
                            (0, a.useEffect)(() => {
                                x && b && c && y.current && y.current.select();
                            }, [c, b, x]);
                            const P = (0, a.useCallback)(
                                    (e) => {
                                        x && g && g(e.target.value);
                                    },
                                    [x, g],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        x && ((S.current.mouseOver = !0), A && A(e));
                                    },
                                    [x, A],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        x &&
                                            y.current &&
                                            (S.current.mouseDown && y.current.focus(),
                                            (S.current.mouseOver = !1),
                                            m && m(e));
                                    },
                                    [x, m],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        x && ((S.current.mouseDown = !0), F && F(e));
                                    },
                                    [x, F],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        x && ((S.current.mouseDown = !1), C && C(e));
                                    },
                                    [x, C],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        if (x && y.current) {
                                            ((!b || (b && e.target !== y.current)) && y.current.focus(), B && B(e));
                                        }
                                    },
                                    [b, x, B],
                                ),
                                I = i || Nu[t],
                                H = Boolean(d),
                                W = D()(
                                    Gu.base,
                                    Gu[`base__${r}`],
                                    s && Gu[`base__${n}`],
                                    b && Gu.base__focused,
                                    H && Gu.base__withIcon,
                                    _,
                                ),
                                G = (0, a.useMemo)(() => (d ? { backgroundImage: `url(${d})` } : null), [d]),
                                U = D()(Gu.input, Gu[`input__${t}`]),
                                z = D()(Gu.icon, Gu[`icon__${t}`]),
                                V = D()(Gu.placeholder, Gu[`placeholder__${t}`]);
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: k,
                                    onMouseDown: M,
                                    onMouseUp: N,
                                    onMouseLeave: L,
                                    onClick: O,
                                },
                                !x && o().createElement('div', { className: Gu.disabled }),
                                G && o().createElement('div', { style: G, className: z }),
                                o().createElement('input', {
                                    ref: y,
                                    className: U,
                                    type: Ou[t],
                                    value: u,
                                    onChange: P,
                                    disabled: !x,
                                    onFocus: T,
                                    onBlur: R,
                                    maxLength: E,
                                }),
                                I && !u && !b && o().createElement('div', { className: V }, I),
                                l &&
                                    o().createElement('div', {
                                        className: Gu.clear,
                                        onClick: (e) => {
                                            (me.playClick(), p && p(e));
                                        },
                                        onMouseEnter: me.playHighlight,
                                    }),
                            );
                        },
                    ),
                    zu = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Vu = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: n }) => {
                        const i = (0, a.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return e === ku ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            s = D()(zu.base, u && zu.base__shown),
                            l = D()(zu.message, zu[`message__${e}`], n);
                        return o().createElement(
                            'div',
                            { className: s },
                            i && o().createElement('div', { className: zu.icon, style: i }),
                            o().createElement('div', { className: l }, t),
                        );
                    },
                    $u = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    ju = [
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
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const qu = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Yu = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? yu : t,
                            n = e.variant,
                            i = void 0 === n ? Ru : n,
                            s = e.size,
                            l = void 0 === s ? Mu : s,
                            c = e.value,
                            E = e.tooltipArgs,
                            d = e.helperText,
                            _ = void 0 === d ? '' : d,
                            A = e.isValidated,
                            m = void 0 === A || A,
                            F = e.showHelper,
                            C = void 0 === F || F,
                            B = e.error,
                            g = e.options,
                            p = e.onFocus,
                            h = e.onMouseEnter,
                            f = e.onMouseLeave,
                            v = e.onMouseUp,
                            b = e.onMouseDown,
                            w = e.onChange,
                            y = e.classMix,
                            S = e.controlClassMix,
                            x = e.helperClassMix,
                            T = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ju);
                        const R = (0, a.useState)(c),
                            P = R[0],
                            k = R[1],
                            L = (0, a.useState)(m),
                            M = L[0],
                            N = L[1],
                            O = (0, a.useMemo)(() => Object.assign({}, qu, g), [g]),
                            I = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, a.useCallback)((e) => {
                                e !== I.current.value &&
                                    ((I.current.value = e), (I.current.isChangeHandled = !1), k(e));
                            }, []),
                            W = (0, a.useCallback)(
                                (e) => {
                                    let u = !0;
                                    (O.performChangeValidation &&
                                        (u = O.changesValidator ? O.changesValidator(e) : Wu(e, I.current.type)),
                                        w && w(e, u));
                                },
                                [w, O],
                            ),
                            G = (0, a.useCallback)(() => {
                                I.current.debounceTimeout &&
                                    (window.clearTimeout(I.current.debounceTimeout), (I.current.debounceTimeout = 0));
                            }, []),
                            U = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => G(), [G]);
                        const z = (0, a.useCallback)(
                            (e) => {
                                (G(),
                                    O.debounceTime
                                        ? (I.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, O.debounceTime))
                                        : W(e));
                            },
                            [W, G, O.debounceTime],
                        );
                        ((0, a.useEffect)(() => {
                            I.current.isChangeHandled ||
                                I.current.value !== P ||
                                (z(I.current.value), (I.current.isChangeHandled = !0));
                        }, [P, z]),
                            (0, a.useEffect)(() => {
                                (I.current.isChangeHandled && c !== I.current.value && ((I.current.value = c), k(c)),
                                    (I.current.type = r));
                            }, [c, r]),
                            (0, a.useEffect)(() => {
                                N(m);
                            }, [m, i]));
                        const V = (0, a.useCallback)((e) => h && h(e), [h]),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    (O.disableHighlightOnFocus && M && N(!1), p && p(e));
                                },
                                [M, p, O.disableHighlightOnFocus],
                            ),
                            j = (0, a.useCallback)((e) => v && v(e), [v]),
                            X = (0, a.useCallback)((e) => b && b(e), [b]),
                            q = (0, a.useCallback)((e) => f && f(e), [f]),
                            Y = (0, a.useMemo)(
                                () =>
                                    O.withTypeIcon
                                        ? (function (e, u) {
                                              return e === Su ? Hu.$dyn(`search_${u}`) : '';
                                          })(r, l)
                                        : '',
                                [r, l, O.withTypeIcon],
                            ),
                            K = _ || Iu[r],
                            Z = Boolean(P),
                            Q = B ? Lu : i,
                            J = Boolean(B) || M,
                            ee = (0, a.useMemo)(
                                () => ('boolean' == typeof O.withClear ? Z && O.withClear : Z && r === Su),
                                [r, Z, O],
                            ),
                            ue = D()($u.base, $u[`base__${l}`], $u[`base__${i}`], y);
                        return o().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: V, onMouseDown: X, onMouseUp: j, onMouseLeave: q },
                            o().createElement(
                                iu,
                                { tooltipArgs: E },
                                o().createElement(
                                    Uu,
                                    Xu(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: l,
                                            type: r,
                                            variant: Q,
                                            value: P,
                                            withClear: ee,
                                            highlighted: J,
                                            selectOnFocus: O.selectOnFocus,
                                            maxLength: O.maxLength,
                                            classMix: S,
                                            onFocus: $,
                                            onChange: H,
                                            onClear: U,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            K &&
                                o().createElement(
                                    'div',
                                    { className: $u.helper },
                                    o().createElement(Vu, {
                                        variant: Q,
                                        show: C && (O.isPermanentHelper || J),
                                        helperText: B || K,
                                        helperIcon: O.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    },
                    Ku = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    Zu = {
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
                function Qu() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (u(), (e.current = 0));
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
                var Ju;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(Ju || (Ju = {}));
                const et = ['__left', '__right', '__top', '__bottom'],
                    ut =
                        ((0, a.forwardRef)(
                            (
                                {
                                    children: e,
                                    disableAutoSizeUpdate: u,
                                    onOutsideClick: t,
                                    className: r,
                                    customStyles: n = {},
                                },
                                i,
                            ) => {
                                const l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    E = (0, a.useRef)(null),
                                    d = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    _ = d[0],
                                    A = d[1],
                                    m = (0, a.useCallback)(() => {
                                        (me.playClick(), s.O.view.sendEvent.close());
                                    }, []),
                                    F = (0, a.useCallback)(() => {
                                        me.playHighlight();
                                    }, []),
                                    C = D()(Zu.arrow, Zu[`arrow${et[_]}`]);
                                Ku(
                                    () => (
                                        s.O.client.events.mouse.enableOutside(),
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const B = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === l.current || u === E.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = s.O.client.getMouseGlobalPosition(),
                                                    u = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < r.boundX ||
                                                        e.x > r.boundX + r.boundWidth ||
                                                        e.y > r.boundY + r.boundHeight ||
                                                        e.y < r.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : s.O.view.sendEvent.close('popover');
                                        },
                                        [l, E, t],
                                    ),
                                    g = (0, a.useCallback)(() => {
                                        A(window.decorator.directionType);
                                    }, []),
                                    p = Qu(),
                                    h = (0, a.useCallback)(() => {
                                        const e = c.current;
                                        if (e)
                                            return (
                                                s.O.view.freezeTextureBeforeResize(),
                                                p.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    (s.O.view.resize(u, t), g());
                                                })
                                            );
                                    }, [p, g]);
                                return (
                                    (0, a.useImperativeHandle)(
                                        i,
                                        () => ({ updateSize: h, updateDirection: g, elementRef: c }),
                                        [h, g],
                                    ),
                                    Ku(() => {
                                        s.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', B, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && r(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, W.Eu)());
                                        return (
                                            !u && e.promise.then(() => h()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', B));
                                            }
                                        );
                                    }, [h, B, u]),
                                    o().createElement(
                                        'div',
                                        { className: D()(Zu.base, r), ref: c },
                                        o().createElement(
                                            'div',
                                            { className: Zu.decorator },
                                            o().createElement(
                                                'div',
                                                { className: Zu.content, ref: l },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        au,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: Zu.closeBtn,
                                                            onClick: m,
                                                            onMouseEnter: F,
                                                            ref: E,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: C, style: n.arrow }),
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
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const rt = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            n = void 0 === r ? Ju.Top : r,
                            i = e.targetId,
                            s = e.args,
                            l = e.onClick,
                            c = e.children,
                            E = e.isEnabled,
                            d = void 0 === E || E,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ut);
                        const A = (0, a.useRef)(null),
                            m = (0, a.useCallback)(() => {
                                if ((0, W.wU)()) return (0, W.SW)();
                                A.current && (0, W.P3)(u, n, A.current, t, i, s);
                            }, [u, n, s, t, i]);
                        return o().createElement(
                            'div',
                            tt(
                                {
                                    ref: A,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            d && (m(), l && l(e), F && F(e));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var F;
                    },
                    nt = 'Filter_base_87',
                    at = 'Filter_wrapper_23',
                    ot = 'Filter_controls_07',
                    it = 'Filter_input_ec',
                    st = 'Filter_button_3a',
                    lt = 'Filter_buttonIcon_82',
                    ct = 'Filter_compensationPlaceholder_8b',
                    Et = {
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
                    dt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    _t = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    At = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    mt = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let i = dt.exec(e),
                            s = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                a = _t.exec(t),
                                c = At.exec(t),
                                E = i[1];
                            if (a && c) {
                                const e = a[0],
                                    i = e + l++ + e;
                                ((s = s.replace(t, `%(${i})`)),
                                    (n[i] = Et[e]
                                        ? o().createElement(
                                              'span',
                                              { className: Et[e] },
                                              o().createElement(Pe, { text: E, binding: u }),
                                          )
                                        : o().createElement(
                                              'span',
                                              { style: r(e) },
                                              o().createElement(Pe, { text: E, binding: u }),
                                          )));
                            }
                            i = dt.exec(e);
                        }
                        return o().createElement(Pe, { text: s, classMix: t, binding: n });
                    }),
                    Ft = 'SearchDetails_base_62',
                    Dt = 'SearchDetails_shown_5a',
                    Ct = 'SearchDetails_searchResults_12',
                    Bt = 'SearchDetails_searchResults__empty_9b',
                    gt = 'SearchDetails_glow_a3',
                    pt = 'SearchDetails_glow__shown_a4',
                    ht = 'SearchDetails_button_7f',
                    ft = 'SearchDetails_buttonGradient_4b',
                    vt = 'SearchDetails_buttonIcon_5e',
                    bt = 'SearchDetails_noResults_0f',
                    wt = R.strings.winback.winbackSelectableRewardView.filter,
                    yt = (0, V.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = u.totalRewardsCount.get(),
                            n = u.computes.isFilterApplied(),
                            a = u.computes.selectableRewardsLength();
                        return o().createElement(
                            'div',
                            { className: Ft },
                            o().createElement(Pe, { classMix: Dt, text: wt.shown() }),
                            o().createElement(
                                'div',
                                { className: D()(Ct, !a && Bt) },
                                n
                                    ? o().createElement(mt, {
                                          text: wt.searchResult(),
                                          binding: {
                                              itemsShown: a || o().createElement('span', { className: bt }, a),
                                              itemsAvailable: r,
                                          },
                                      })
                                    : o().createElement('span', null, r),
                                o().createElement('div', { className: D()(gt, n && pt) }),
                            ),
                            n &&
                                o().createElement(
                                    au,
                                    { header: wt.tooltip.header(), body: wt.tooltip.body() },
                                    o().createElement(
                                        'div',
                                        {
                                            className: ht,
                                            onClick: () => {
                                                (me.playClick(), t.resetFilter());
                                            },
                                            onMouseEnter: me.playHighlight,
                                        },
                                        o().createElement('div', { className: ft }),
                                        o().createElement('div', { className: vt }),
                                    ),
                                ),
                        );
                    }),
                    St = R.strings.winback.winbackSelectableRewardView.filter,
                    xt = (0, V.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = u.computes.selectedCategory();
                        return o().createElement(
                            'div',
                            { className: nt },
                            r.isCompensation
                                ? o().createElement(Pe, {
                                      classMix: ct,
                                      text: St.allTheVehiclesHaveBeenExplored(),
                                      binding: { vehicleLevel: (0, Eu.HG)(r.vehicleLevel) },
                                  })
                                : o().createElement(
                                      'div',
                                      { className: at },
                                      o().createElement(yt, null),
                                      o().createElement(
                                          'div',
                                          { className: ot },
                                          o().createElement(Yu, {
                                              value: u.filterQuery.get(),
                                              type: Su,
                                              placeholder: St.placeholder(),
                                              classMix: it,
                                              onChange: t.setFilterQuery,
                                          }),
                                          o().createElement(
                                              rt,
                                              {
                                                  contentId:
                                                      R.views.lobby.battle_matters.popovers.BattleMattersFilterPopoverView(
                                                          'resId',
                                                      ),
                                                  direction: Ju.Bottom,
                                              },
                                              o().createElement(
                                                  Be,
                                                  { mixClass: st },
                                                  o().createElement('div', { className: lt }),
                                              ),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    Tt = 'Header_base_7b',
                    Rt = 'Header_title_2e',
                    Pt = 'Header_categories_ab',
                    kt = 'Title_base_e5',
                    Lt = 'Title_title_46',
                    Mt = 'Title_additionTitle_d3',
                    Nt = R.strings.winback.winbackSelectableRewardView,
                    Ot = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: D()(kt, e) },
                            o().createElement('div', { className: Mt }, Nt.title.additionText()),
                            o().createElement('div', { className: Lt }, Nt.title.text()),
                        ),
                    It = () =>
                        o().createElement(
                            'div',
                            { className: Tt },
                            o().createElement(Ot, { className: Rt }),
                            o().createElement(wu, { className: Pt }),
                            o().createElement(xt, null),
                        ),
                    Ht = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Wt = [];
                function Gt(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Wt)
                    );
                }
                function Ut(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        n,
                    ];
                }
                function zt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Vt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Vt(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Vt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                function $t(e, u, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let n,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        ((o = Date.now()), t.apply(l, s));
                                    }
                                    a ||
                                        (r && !n && E(),
                                        i(),
                                        void 0 === r && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        (i(), (a = !0));
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                }
                var jt = t(30);
                let Xt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Xt || (Xt = {}));
                const qt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Yt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: o,
                    }) => {
                        const i = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : Ht(n, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? qt : l,
                                E = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                _ = (0, a.useRef)(!1),
                                A = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var r, n = zt(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                m = $t(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, jt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), A.trigger('change', e), o && _.current && m());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return i(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            C.start({
                                                scrollPosition: i(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, D.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = B(u, e, r);
                                        g(a);
                                    },
                                    [g, B, c.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && p(r(e)),
                                            E.current && A.trigger('mouseWheel', e, D.scrollPosition, u(E.current)));
                                    },
                                    [D.scrollPosition, p, A],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        $(() => {
                                            const e = E.current;
                                            e &&
                                                (g(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                v = Gt(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        A.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            ),
                                (0, a.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !o) return;
                                    const u = () => {
                                            _.current = !0;
                                        },
                                        t = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [E]));
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, g, p, A.off, A.on, v, h, C, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Kt = Yt({
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
                        getDirection: (e) => (e.deltaY > 1 ? Xt.Next : Xt.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    Zt = 'HorizontalBar_base_49',
                    Qt = 'HorizontalBar_base__active_5e',
                    Jt = 'HorizontalBar_leftButton_5f',
                    er = 'HorizontalBar_rightButton_03',
                    ur = 'HorizontalBar_track_0d',
                    tr = 'HorizontalBar_thumb_fd',
                    rr = 'HorizontalBar_rail_32',
                    nr = 'disable',
                    ar = { pending: !1, offset: 0 },
                    or = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ir = () => {},
                    sr = (e, u) => Math.max(20, e.offsetWidth * u),
                    lr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = or, onDrag: r = ir }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, a.useState)(ar),
                            A = _[0],
                            m = _[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    (m(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            C = () => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    s = Ht(0, 1, a / (n - r)),
                                    d = (u.offsetWidth - sr(u, o)) * s;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(nr),
                                                    void l.current.classList.remove(nr)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(nr),
                                                    void l.current.classList.add(nr)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(nr), l.current.classList.remove(nr));
                                        }
                                    })(d));
                            },
                            B = Gt(() => {
                                ((() => {
                                    const u = E.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((u.style.width = `${sr(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 !== o ? n.current.classList.add(Qt) : n.current.classList.remove(Qt)));
                                })(),
                                    C());
                            });
                        ((0, a.useEffect)(() => $(B)),
                            (0, a.useEffect)(
                                () =>
                                    $(() => {
                                        const u = () => {
                                            C();
                                        };
                                        let t = ir;
                                        const r = () => {
                                            (t(), (t = $(B)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            s = E.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - A.offset - i.getBoundingClientRect().x,
                                            d = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: d }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (u(), F(ar));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, A.offset, A.pending, r, F]));
                        const g = Ut((u) => e.applyStepTo(u), d, [e]),
                            p = g[0],
                            h = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(nr) || Ae('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: D()(Zt, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: D()(Jt, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nr) || 0 !== e.button || (Ae('play'), p(Xt.Next));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: D()(ur, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if ((Ae('play'), u.target === r))
                                                F({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = E.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? Xt.Prev : Xt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: E, className: D()(tr, u.thumb) }),
                                o().createElement('div', { className: D()(rr, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: D()(er, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nr) || 0 !== e.button || (Ae('play'), p(Xt.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    cr = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Er = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: D()(cr.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: D()(cr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: D()(cr.defaultScrollArea, n) },
                                o().createElement(dr, { className: s, api: d, classNames: i }, e),
                            ),
                            o().createElement(lr, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    dr = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => $(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: D()(cr.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: D()(cr.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: D()(cr.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((dr.Bar = lr), (dr.Default = Er));
                const _r = Yt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Xt.Next : Xt.Prev),
                    }),
                    Ar = 'VerticalBar_base_f3',
                    mr = 'VerticalBar_base__active_72',
                    Fr = 'VerticalBar_topButton_d7',
                    Dr = 'VerticalBar_bottomButton_06',
                    Cr = 'VerticalBar_track_df',
                    Br = 'VerticalBar_thumb_32',
                    gr = 'VerticalBar_rail_43',
                    pr = 'disable',
                    hr = () => {},
                    fr = { pending: !1, offset: 0 },
                    vr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    br = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    wr = (e, u) => Math.max(20, e.offsetHeight * u),
                    yr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = vr, onDrag: r = hr }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, a.useState)(fr),
                            A = _[0],
                            m = _[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    (m(e),
                                        E.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            C = Gt(() => {
                                const u = E.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${wr(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 !== o ? n.current.classList.add(mr) : n.current.classList.remove(mr)),
                                    o
                                );
                            }),
                            B = Gt(() => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    s = Ht(0, 1, a / (n - r)),
                                    d = (u.offsetHeight - wr(u, o)) * s;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(pr),
                                                    void l.current.classList.remove(pr)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(pr),
                                                    void l.current.classList.add(pr)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(pr), l.current.classList.remove(pr));
                                        }
                                    })(d));
                            }),
                            g = Gt(() => {
                                br(e, () => {
                                    (C(), B());
                                });
                            });
                        ((0, a.useEffect)(() => $(g)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    br(e, () => {
                                        B();
                                    });
                                };
                                let t = hr;
                                const r = () => {
                                    (t(), (t = $(g)));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        F(fr);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        br(e, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const i = u.screenY - A.offset - n.getBoundingClientRect().y,
                                                s = (i / n.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, A.offset, A.pending, r, F]));
                        const p = Ut((u) => e.applyStepTo(u), d, [e]),
                            h = p[0],
                            f = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains(pr) || Ae('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: D()(Ar, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: D()(Fr, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pr) || 0 !== e.button || (Ae('play'), h(Xt.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: D()(Cr, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if ((Ae('play'), u.target === r))
                                                F({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        br(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? Xt.Prev : Xt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: D()(Br, u.thumb) }),
                                o().createElement('div', { className: D()(gr, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: D()(Dr, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pr) || 0 !== e.button || (Ae('play'), h(Xt.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Sr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    xr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: D()(Sr.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: D()(Sr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: D()(Sr.area, n) },
                                o().createElement(Tr, { className: i, classNames: s, api: d }, e),
                            ),
                            o().createElement(yr, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Tr = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => $(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: D()(Sr.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: D()(Sr.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Tr.Default = xr;
                const Rr = { Vertical: n, Horizontal: r };
                let Pr;
                !(function (e) {
                    ((e[(e.WithoutScroll = 0)] = 'WithoutScroll'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'));
                })(Pr || (Pr = {}));
                const kr = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? W.B3.GOLD : W.B3.INTEGRAL;
                        })(u),
                        r = W.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== r ? r : null;
                };
                let Lr, Mr, Nr, Or, Ir, Hr, Wr, Gr;
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
                        (e.Attachment = 'attachment'),
                        (e.Stamp = 'stamp'),
                        (e.WtEventLootbox = 'wtevent_lootBox'),
                        (e.WtEventTicket = 'wtevent_ticket'));
                })(Lr || (Lr = {})),
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
                    })(Mr || (Mr = {})),
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
                    })(Nr || (Nr = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Or || (Or = {})),
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
                    })(Ir || (Ir = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Hr || (Hr = {})),
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
                    })(Wr || (Wr = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Gr || (Gr = {})));
                (Lr.Attachment,
                    Lr.Items,
                    Lr.Equipment,
                    Lr.Xp,
                    Lr.XpFactor,
                    Lr.Blueprints,
                    Lr.BlueprintsAny,
                    Lr.Goodies,
                    Lr.Berths,
                    Lr.Slots,
                    Lr.Tokens,
                    Lr.CrewSkins,
                    Lr.CrewBooks,
                    Lr.Customizations,
                    Lr.CreditsFactor,
                    Lr.TankmenXp,
                    Lr.TankmenXpFactor,
                    Lr.FreeXpFactor,
                    Lr.BattleToken,
                    Lr.LootBox,
                    Lr.PremiumUniversal,
                    Lr.NaturalCover,
                    Lr.BpCoin,
                    Lr.BattlePassSelectToken,
                    Lr.BattlaPassFinalAchievement,
                    Lr.BattleBadge,
                    Lr.BattlePassTicket,
                    Lr.BonusX5,
                    Lr.CrewBonusX3,
                    Lr.EpicSelectToken,
                    Lr.Comp7TokenWeeklyReward,
                    Lr.DeluxeGift,
                    Lr.ModernizedDevicesT1Gift,
                    Lr.ModernizedDevicesT2Gift,
                    Lr.ModernizedDevicesT3Gift,
                    Lr.BattleBoosterGift,
                    Lr.OptionalDevice,
                    Lr.Attachment,
                    Lr.Stamp,
                    Lr.WtEventLootbox,
                    Lr.WtEventTicket,
                    Lr.Gold,
                    Lr.Credits,
                    Lr.Crystal,
                    Lr.FreeXp,
                    Lr.BattlePassPoints,
                    Lr.EquipCoin,
                    Lr.PremiumPlus,
                    Lr.Premium);
                const Ur = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    zr = (Nr.Small, Nr.Big, 'tooltipId');
                let Vr, $r;
                (!(function (e) {
                    ((e.WELCOME = 'welcome'),
                        (e.PROGRESSION_STEP = 'progressionStep'),
                        (e.SELECTED_REWARDS = 'selectedRewards'),
                        (e.WINBACK_PROGRESSION_COMPLETED = 'winbackProgressionCompleted'),
                        (e.REGULAR_PROGRESSION_COMPLETED = 'regularProgressionCompleted'));
                })(Vr || (Vr = {})),
                    (function (e) {
                        ((e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                            (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                            (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                            (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                            (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'));
                    })($r || ($r = {})));
                const jr = 'Card_base_13',
                    Xr = 'Card_base__active_c0',
                    qr = 'Card_base__lastInRow_96',
                    Yr = (e) => {
                        switch (!0) {
                            case e >= g.ExtraLarge:
                                return 6;
                            case e >= g.Medium:
                                return 5;
                            case e >= g.Small:
                                return 4;
                            default:
                                return 3;
                        }
                    },
                    Kr = (0, V.Pi)(({ children: e, isSelected: u, index: t }) => {
                        const r = ie().controls,
                            n = f().mediaSize;
                        return o().createElement(
                            'div',
                            {
                                className: D()(jr, u && Xr, (t + 1) % Yr(n) == 0 && qr),
                                onClick: () => {
                                    (me.playClick(), r.selectReward(t));
                                },
                                onMouseEnter: me.playHighlight,
                            },
                            e,
                        );
                    }),
                    Zr = 'BluePrintReward_bluePrintIcon_0a',
                    Qr = 'BluePrintReward_nationText_eb',
                    Jr = 'BluePrintReward_hangarInformation_26',
                    en = 'BluePrintReward_hangarIcon_d2',
                    un = 'BluePrintReward_countInHangar_1f',
                    tn = 'BluePrintReward_count_51',
                    rn = ({
                        tooltipId: e,
                        tooltipContentId: u,
                        icon: t,
                        amountInStorage: r,
                        value: n,
                        isSelected: a,
                        index: i,
                    }) => {
                        const s = R.images.gui.maps.icons.blueprints.fragment.s180x135.$dyn(`${t}`);
                        return o().createElement(
                            iu,
                            { tooltipArgs: Ur({ [zr]: e }, Number(u), { ignoreShowDelay: !0 }) },
                            o().createElement(
                                Kr,
                                { isSelected: a, index: i },
                                o().createElement('div', { className: Zr, style: { backgroundImage: `url(${s})` } }),
                                o().createElement('div', { className: Qr }, R.strings.blueprints.nations.$dyn(`${t}`)),
                                Boolean(r) &&
                                    o().createElement(
                                        'div',
                                        { className: Jr },
                                        o().createElement('div', { className: en }),
                                        o().createElement('div', { className: un }, r),
                                    ),
                                o().createElement(Pe, {
                                    text: R.strings.winback.winbackSelectableRewardView.bluePrintReward.value(),
                                    binding: { value: n },
                                    classMix: tn,
                                }),
                            ),
                        );
                    },
                    nn = 'Cards_base_ef',
                    an = 'Cards_discount_64',
                    on = 'Cards_forGift_7b',
                    sn = {
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
                let ln, cn, En;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(ln || (ln = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(cn || (cn = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(En || (En = {})));
                const dn = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: r,
                            value: n,
                            discountValue: a,
                            showPlus: i,
                            isEnough: s = !0,
                            stockBackgroundName: l = En.Red,
                            className: c,
                            classNames: E,
                        }) =>
                            o().createElement(
                                'span',
                                { className: D()(sn.base, sn[`base__${t}`], c) },
                                o().createElement(
                                    'span',
                                    {
                                        className: D()(
                                            sn.value,
                                            sn[`value__${r}`],
                                            !s && sn.value__notEnough,
                                            null == E ? void 0 : E.value,
                                        ),
                                    },
                                    i && n > 0 && '+',
                                    o().createElement(kr, { value: n, format: r === cn.gold ? 'gold' : 'integral' }),
                                ),
                                o().createElement('span', {
                                    className: D()(sn.icon, sn[`icon__${r}-${t}`], null == E ? void 0 : E.icon),
                                }),
                                e &&
                                    o().createElement(
                                        'span',
                                        {
                                            className: D()(
                                                sn.stock,
                                                a && sn.stock__indent,
                                                u && sn.stock__interactive,
                                                null == E ? void 0 : E.stock,
                                            ),
                                        },
                                        o().createElement('span', {
                                            className: sn.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(a) && a,
                                    ),
                            ),
                    ),
                    _n = 'Discount_contentTitle_e0',
                    An = 'Discount_vehicleName_65',
                    mn = 'Discount_columns_1c',
                    Fn = 'Discount_column_55',
                    Dn = 'Discount_title_22',
                    Cn = 'Discount_customCurrency_5f',
                    Bn = 'Discount_oldData_6e',
                    gn = 'Discount_strikethrough_64',
                    pn = R.strings.winback.winbackSelectableRewardView,
                    hn = ({ vehicle: e, price: u, experience: t, className: r }) =>
                        o().createElement(
                            'div',
                            { className: r },
                            o().createElement(
                                'div',
                                { className: _n },
                                o().createElement(mt, {
                                    text: pn.vehicleName(),
                                    binding: {
                                        type: pn.vehicleType.$dyn(fe(e.type)),
                                        level: (0, Eu.HG)(e.level),
                                        name: e.userName,
                                    },
                                    classMix: An,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: mn },
                                o().createElement(
                                    'div',
                                    { className: Fn },
                                    o().createElement('div', { className: Dn }, pn.tabs.exp()),
                                    o().createElement(
                                        'div',
                                        { className: Cn },
                                        o().createElement(dn, {
                                            value: t.new,
                                            size: ln.small,
                                            type: cn.xp,
                                            stockBackgroundName: En.Blue,
                                            isEnough: !0,
                                            isDiscount: !0,
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Bn },
                                        o().createElement(kr, { value: t.old }),
                                        o().createElement('div', { className: gn }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Fn },
                                    o().createElement('div', { className: Dn }, pn.tabs.buy()),
                                    o().createElement(
                                        'div',
                                        { className: Cn },
                                        o().createElement(dn, {
                                            value: u.new,
                                            size: ln.small,
                                            type: cn.credits,
                                            isEnough: !0,
                                            isDiscount: !0,
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Bn },
                                        o().createElement(kr, { value: u.old }),
                                        o().createElement('span', { className: gn }),
                                    ),
                                ),
                            ),
                        ),
                    fn = 'ForGift_base_3d',
                    vn = 'ForGift_vehicleName_3c',
                    bn = R.strings.winback.winbackSelectableRewardView,
                    wn = ({ vehicle: e, className: u }) =>
                        o().createElement(
                            'div',
                            { className: D()(fn, u) },
                            o().createElement(mt, {
                                text: bn.vehicleName(),
                                binding: {
                                    type: bn.vehicleType.$dyn(fe(e.type)),
                                    level: (0, Eu.HG)(e.level),
                                    name: e.userName,
                                },
                                classMix: vn,
                            }),
                        ),
                    yn = 'VehicleReward_nationImage_60',
                    Sn = 'VehicleReward_vehicleImage_8f',
                    xn = ({ children: e, tooltipId: u, tooltipContentId: t, vehicle: r, isSelected: n, index: a }) => {
                        const i = R.images.gui.maps.shop.vehicles.c_360x270.$dyn(fe(r.name)),
                            s = R.images.gui.maps.shop.nations.$dyn(`flag_${r.nation}`);
                        return o().createElement(
                            iu,
                            { tooltipArgs: Ur({ [zr]: u }, Number(t), { ignoreShowDelay: !0 }) },
                            o().createElement(
                                Kr,
                                { isSelected: n, index: a },
                                o().createElement('div', { className: yn, style: { backgroundImage: `url(${s})` } }),
                                o().createElement('div', { className: Sn, style: { backgroundImage: `url(${i})` } }),
                                e,
                            ),
                        );
                    };
                function Tn() {
                    return (
                        (Tn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Tn.apply(this, arguments)
                    );
                }
                const Rn = (e) => ({ old: e.oldPrice, new: e.newPrice }),
                    Pn = (e) => ({ old: e.oldExp, new: e.newExp }),
                    kn = (0, V.Pi)(
                        ({ className: e }, u) => {
                            const t = ie().model,
                                r = t.computes.selectedCategory(),
                                n = r.isDiscount,
                                a = r.isCompensation,
                                i = t.computes.selectableRewards();
                            return o().createElement(
                                'div',
                                { className: D()(nn, e), ref: u },
                                i.map((e) => {
                                    if (a) {
                                        const u = ((e) => {
                                            if (((e) => 'amountInStorage' in e && 'isSelected' in e)(e)) return e;
                                            throw new Error('Variable amountInStorage or isSelected does not exist');
                                        })(e);
                                        return o().createElement(
                                            rn,
                                            Tn({ key: e.icon }, u, { isSelected: u.isSelected, index: u.index }),
                                        );
                                    }
                                    {
                                        const t = ((e) => {
                                                if (
                                                    ((e) =>
                                                        'isElite' in e &&
                                                        'vehicleName' in e &&
                                                        'userName' in e &&
                                                        'vehicleType' in e &&
                                                        'nation' in e &&
                                                        'vehicleLvl' in e)(e)
                                                )
                                                    return e;
                                                throw new Error('Vehicle is missing some props');
                                            })(e),
                                            r = {
                                                name: (u = t).vehicleName,
                                                type: u.vehicleType,
                                                nation: u.nation,
                                                level: u.vehicleLvl,
                                                userName: u.userName,
                                            },
                                            a = ((e) => {
                                                if (
                                                    ((e) =>
                                                        'oldPrice' in e &&
                                                        'newPrice' in e &&
                                                        'oldExp' in e &&
                                                        'newExp' in e)(e)
                                                )
                                                    return e;
                                                throw new Error('Variable oldPrice or newPrice does not exist');
                                            })(e);
                                        return o().createElement(
                                            xn,
                                            {
                                                key: t.userName,
                                                tooltipId: t.tooltipId,
                                                tooltipContentId: t.tooltipContentId,
                                                vehicle: r,
                                                isSelected: t.isSelected,
                                                index: t.index,
                                            },
                                            n
                                                ? o().createElement(hn, {
                                                      vehicle: r,
                                                      price: Rn(a),
                                                      experience: Pn(a),
                                                      className: an,
                                                  })
                                                : o().createElement(wn, { vehicle: r, className: on }),
                                        );
                                    }
                                    var u;
                                }),
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    Ln = 'NoFilteredVehicles_base_0a',
                    Mn = 'NoFilteredVehicles_info_9c',
                    Nn = 'NoFilteredVehicles_alertIcon_7a',
                    On = 'NoFilteredVehicles_text_9a',
                    In = 'NoFilteredVehicles_button_a5',
                    Hn = R.strings.winback.winbackSelectableRewardView,
                    Wn = (0, V.Pi)(({ className: e }) => {
                        const u = ie().controls;
                        return o().createElement(
                            'div',
                            { className: D()(Ln, e) },
                            o().createElement(
                                'div',
                                { className: Mn },
                                o().createElement('div', { className: Nn }),
                                o().createElement('div', { className: On }, Hn.resetInf.text()),
                            ),
                            o().createElement(
                                Be,
                                { size: Ce.medium, mixClass: In, type: De.secondary, onClick: u.resetFilter },
                                Hn.buttons.reset(),
                            ),
                        );
                    }),
                    Gn = 'ScrollableCards_base_9b',
                    Un = 'ScrollableCards_shadow_b3',
                    zn = 'ScrollableCards_shadow__visible_74',
                    Vn = 'ScrollableCards_shadow__top_f2',
                    $n = 'ScrollableCards_shadow__bottom_ce',
                    jn = 'ScrollableCards_noFilteredVehicles_8e',
                    Xn = 'ScrollableCards_cards_f2',
                    qn = 'ScrollableCards_scrollBar_dc',
                    Yn = 'ScrollableCards_barThumb_d1',
                    Kn = 'ScrollableCards_barRail_e9',
                    Zn = [Pr.Start, Pr.WithoutScroll],
                    Qn = [Pr.End, Pr.WithoutScroll],
                    Jn = (0, V.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = _r(),
                            n = u.computes.selectableRewardsLength(),
                            i = f(),
                            s = i.remScreenWidth,
                            l = i.remScreenHeight,
                            c = ((e, u = []) => {
                                const t = e.animationScroll,
                                    r = e.getContainerSize,
                                    n = e.getWrapperSize,
                                    o = e.events,
                                    i = (0, a.useState)(Pr.WithoutScroll),
                                    s = i[0],
                                    l = i[1],
                                    c = (0, a.useCallback)(() => {
                                        const e = t.scrollPosition.get(),
                                            u = r(),
                                            a = n();
                                        l(
                                            !u || !a || u <= a
                                                ? Pr.WithoutScroll
                                                : e <= 10
                                                  ? Pr.Start
                                                  : e >= u - a - 10
                                                    ? Pr.End
                                                    : Pr.Between,
                                        );
                                    }, [t.scrollPosition, r, n]);
                                return (
                                    (0, a.useEffect)(() => (o.on('change', c), () => o.off('change', c)), [o, c]),
                                    (0, a.useEffect)(() => $(c), [c, ...u]),
                                    s
                                );
                            })(r, [n, s, l]),
                            E = (0, a.useRef)(null),
                            d = Qu();
                        z(t.close);
                        const _ = !1 === Zn.includes(c),
                            A = !1 === Qn.includes(c);
                        return (
                            (0, a.useEffect)(() => {
                                const e = (0, K.U5)(
                                    () => u.computes.selectedCategory(),
                                    () => {
                                        const e = (function (e, u) {
                                            for (let t = 0; t < e.length; t++) if (u(te(e, t), t, e)) return t;
                                        })(
                                            u.computes.selectableRewards(),
                                            (e) =>
                                                ((e) => {
                                                    if (((e) => 'isSelected' in e)(e)) return e;
                                                    throw new Error('isSelected property is missing in the reward');
                                                })(e).isSelected,
                                        );
                                        d.run(() => {
                                            if (E.current)
                                                if (void 0 !== e) {
                                                    const u = E.current.children[e];
                                                    u instanceof HTMLElement &&
                                                        ((e) => {
                                                            const u = r.wrapperRef.current;
                                                            if (u) {
                                                                const t =
                                                                    e.offsetTop + (e.offsetHeight - u.offsetHeight);
                                                                r.applyScroll(t);
                                                            }
                                                        })(u);
                                                } else r.applyScroll(0, { immediate: !0 });
                                        });
                                    },
                                );
                                return () => {
                                    e();
                                };
                            }, [r, u, d]),
                            o().createElement(
                                'div',
                                { className: Gn },
                                o().createElement('div', { className: D()(Un, Vn, _ && zn) }),
                                0 === n
                                    ? o().createElement(Wn, { className: jn })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              Rr.Vertical.Area,
                                              { api: r },
                                              o().createElement(kn, { className: Xn, ref: E }),
                                          ),
                                          o().createElement(Rr.Vertical.Bar, {
                                              api: r,
                                              classNames: { base: qn, thumb: Yn, rail: Kn },
                                          }),
                                      ),
                                o().createElement('div', { className: D()(Un, $n, A && zn) }),
                            )
                        );
                    }),
                    ea = R.strings.winback.winbackSelectableRewardView,
                    ua = [R.images.gui.maps.icons.winback.selectableRewardView.background()],
                    ta = (0, V.Pi)(() => {
                        const e = ie(),
                            u = e.model,
                            t = e.controls,
                            r = 0 === u.categories.get().length;
                        z(t.close);
                        const n =
                            ((e) => {
                                const u = (0, a.useState)(j.Pending),
                                    t = u[0],
                                    r = u[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const u = { errors: 0, loaded: 0 },
                                            t = () => {
                                                u.errors + u.loaded === e.length
                                                    ? r(u.errors ? j.Failure : j.Success)
                                                    : r(j.Pending);
                                            };
                                        return $(() => {
                                            e.forEach((e) => {
                                                const r = new Image();
                                                ((r.src = e),
                                                    r.addEventListener('load', () => {
                                                        ((u.loaded += 1), t());
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        ((u.errors += 1), t());
                                                    }));
                                            });
                                        });
                                    }, [e]),
                                    t
                                );
                            })(ua) !== j.Pending;
                        return o().createElement(
                            'div',
                            { className: D()(se, r && le, !n && ce) },
                            n &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: Ee },
                                        o().createElement(I, {
                                            caption: ea.buttons.close(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: t.close,
                                        }),
                                    ),
                                    r
                                        ? o().createElement(He, null)
                                        : o().createElement(
                                              'div',
                                              { className: de },
                                              o().createElement(It, null),
                                              o().createElement(Jn, null),
                                              o().createElement(Qe, { className: _e }),
                                          ),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        o().createElement(oe, null, o().createElement(P, null, o().createElement(ta, null))),
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, r] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, r];
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
        (__webpack_require__.j = 782),
        (() => {
            var e = { 782: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [241], () => __webpack_require__(843));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
