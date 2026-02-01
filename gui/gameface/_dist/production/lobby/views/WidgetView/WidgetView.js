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
                    r.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => o }));
                var n = r(2472),
                    i = r(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, i.R)(!1);
                        }
                        function r() {
                            e.enabled && (0, i.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : (0, i.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const a = `mouse${t}`,
                                            o = d[t]((e) => r([e, 'outside']));
                                        function s(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                i &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
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
                                e.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, i.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    }));
                var n = r(527),
                    i = r(2493);
                function a(e = 'px') {
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
            1176: (e, t, r) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => n });
            },
            2493: (e, t, r) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => i, G: () => n });
            },
            2472: (e, t, r) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => n });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => o });
                var n = r(5959),
                    i = r(7698),
                    a = r(514);
                const o = { view: r(7641), client: n, sound: a.ZP, intl: i.N };
            },
            7698: (e, t, r) => {
                'use strict';
                r.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var n = r(5959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, n.playSound)(i[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function n(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function i(e, t, r) {
                    return `url(${n(e, t, r)})`;
                }
                (r.r(t), r.d(t, { getBgUrl: () => i, getTextureUrl: () => n }));
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => i });
                var n = r(2472);
                const i = {
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
            7641: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        arabic2roman: () => T,
                        children: () => i,
                        displayStatus: () => a.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => W,
                        events: () => o.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getExternalPaddingsRem: () => M,
                        getFontNames: () => O,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => h,
                        initExternalPaddings: () => H,
                        isEventHandled: () => x,
                        isFocused: () => p,
                        pxToRem: () => w,
                        remToPx: () => b,
                        resize: () => g,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => L,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => k,
                    }));
                var n = r(9690),
                    i = r(3722),
                    a = r(6112),
                    o = r(6538),
                    s = r(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function u(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
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
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
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
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const O = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = n.cg;
                function M() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function W() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function H(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            r = t.top,
                            n = t.right,
                            i = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${r}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => a });
                const n = ['args'],
                    i = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                    return i;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                        var i;
                    },
                    a = {
                        close(e) {
                            i('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(e) {
                            i(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, r) => {
                'use strict';
                let n, i;
                (r.d(t, { n: () => n }),
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
                    })(i || (i = {})));
            },
            9690: (e, t, r) => {
                'use strict';
                r.d(t, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let r = i.length - 1; r >= 0; r--) for (; e >= i[r]; ) ((t += n[r]), (e -= i[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => a });
                var n = r(3138);
                class i {
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
                        return (window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, r = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, r, i);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(a) : (this._views[r] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const a = i;
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
                r.d(t, { B0: () => s, ry: () => w });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
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
                        const r = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                const i = n;
                var a = r(1358),
                    o = r(8613);
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = r(5521),
                    g = r(3138);
                const h = ['args'];
                function E(e, t, r, n, i, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, i);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                    return new Promise(function (n, i) {
                                        var a = e.apply(t, r);
                                        function o(e) {
                                            E(a, n, i, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(a, n, i, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                    return i;
                                })(t, h);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, a, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    f = () => b(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var L = r(7572);
                const x = i.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: L.Z,
                        ViewEventType: s,
                        NumberFormatType: d,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: m,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, i = R.invalid('resId'), a) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
                                d = l.x,
                                c = l.y,
                                u = l.width,
                                m = l.height,
                                _ = {
                                    x: g.O.view.pxToRem(d) + o.x,
                                    y: g.O.view.pxToRem(c) + o.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(m),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: v(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: w,
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
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const i = Object.prototype.toString.call(t[n]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < i.length; t++) r[n].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => n, cy: () => i });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            4145: (e, t, r) => {
                'use strict';
                var n = r(7363),
                    i = r.n(n);
                const a = (e, t, r) =>
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
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e = o.O.client.getSize('rem')) {
                    const t = e.width,
                        r = e.height;
                    return Object.assign(
                        { width: t, height: r },
                        (function (e, t, r) {
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
                                })(e, r),
                                i = (function (e, t) {
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
                                a = Math.min(n, i);
                            return {
                                extraLarge: a === r.extraLarge.weight,
                                large: a === r.large.weight,
                                medium: a === r.medium.weight,
                                small: a === r.small.weight,
                                extraSmall: a === r.extraSmall.weight,
                                extraLargeWidth: n === r.extraLarge.weight,
                                largeWidth: n === r.large.weight,
                                mediumWidth: n === r.medium.weight,
                                smallWidth: n === r.small.weight,
                                extraSmallWidth: n === r.extraSmall.weight,
                                extraLargeHeight: i === r.extraLarge.weight,
                                largeHeight: i === r.large.weight,
                                mediumHeight: i === r.medium.weight,
                                smallHeight: i === r.small.weight,
                                extraSmallHeight: i === r.extraSmall.weight,
                            };
                        })(t, r, s),
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
                })(l || (l = {}));
                const c = d(),
                    u = (0, n.createContext)(c),
                    m = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                            return i;
                        })(e, m);
                    const i = (0, n.useContext)(u),
                        o = i.extraLarge,
                        s = i.large,
                        l = i.medium,
                        d = i.small,
                        c = i.extraSmall,
                        _ = i.extraLargeWidth,
                        g = i.largeWidth,
                        h = i.mediumWidth,
                        E = i.smallWidth,
                        v = i.extraSmallWidth,
                        w = i.extraLargeHeight,
                        b = i.largeHeight,
                        f = i.mediumHeight,
                        p = i.smallHeight,
                        L = i.extraSmallHeight,
                        x = { extraLarge: w, large: b, medium: f, small: p, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && s) return t;
                        if (r.medium && l) return t;
                        if (r.small && d) return t;
                        if (r.extraSmall && c) return t;
                    } else {
                        if (r.extraLargeWidth && _) return a(t, r, x);
                        if (r.largeWidth && g) return a(t, r, x);
                        if (r.mediumWidth && h) return a(t, r, x);
                        if (r.smallWidth && E) return a(t, r, x);
                        if (r.extraSmallWidth && v) return a(t, r, x);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && b) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && L) return t;
                        }
                    }
                    return null;
                });
                const _ = ({ children: e }) => {
                    const t = (0, n.useState)(d),
                        r = t[0],
                        a = t[1],
                        s = (0, n.useState)(!1),
                        l = s[0],
                        c = s[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = o.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : d(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        i().createElement(u.Provider, { value: r }, l && e)
                    );
                };
                var g = r(6483),
                    h = r.n(g),
                    E = r(926),
                    v = r.n(E);
                let w, b, f;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(f || (f = {})));
                const p = () => {
                        const e = (0, n.useContext)(u),
                            t = e.width,
                            r = e.height,
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return w.ExtraLarge;
                                    case e.large:
                                        return w.Large;
                                    case e.medium:
                                        return w.Medium;
                                    case e.small:
                                        return w.Small;
                                    case e.extraSmall:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: i, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    L = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL_WIDTH,
                        [b.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [b.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL_HEIGHT,
                        [f.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [f.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL,
                        [w.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [w.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [w.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                return i;
                            })(e, L);
                        const a = p(),
                            o = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', x({ className: h()(r, S[o], y[s], O[l]) }, n), t);
                    },
                    M = ['children'],
                    P = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                return i;
                            })(e, M);
                        return i().createElement(_, null, i().createElement(T, r, t));
                    };
                var k = r(1533),
                    W = r.n(k),
                    H = r(9916);
                const I = [
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
                function A(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const C = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: H.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    D = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            i = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            d = e.ignoreShowDelay,
                            c = void 0 !== d && d,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            h = e.isEnabled,
                            E = void 0 === h || h,
                            v = e.targetId,
                            w = void 0 === v ? 0 : v,
                            b = e.onShow,
                            f = e.onHide,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                                return i;
                            })(e, I);
                        const L = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, n.useMemo)(
                                () =>
                                    w ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let r,
                                            n = R.invalid('resId'),
                                            i = '';
                                        var a;
                                        return (
                                            t &&
                                                ((i =
                                                    (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== r &&
                                                    window.subViews[r] &&
                                                    (n = window.subViews[r].id)),
                                            { callerUrl: i, caller: r, stack: t, resId: n }
                                        );
                                    })().resId,
                                [w],
                            ),
                            S = (0, n.useCallback)(() => {
                                (L.current.isVisible && L.current.timeoutId) ||
                                    (C(r, g, { isMouseEvent: !0, on: !0, arguments: A(i) }, x),
                                    b && b(),
                                    (L.current.isVisible = !0));
                            }, [r, g, i, x, b]),
                            y = (0, n.useCallback)(() => {
                                if (L.current.isVisible || L.current.timeoutId) {
                                    const e = L.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (L.current.timeoutId = 0)),
                                        C(r, g, { on: !1 }, x),
                                        L.current.isVisible && f && f(),
                                        (L.current.isVisible = !1));
                                }
                            }, [r, g, x, f]),
                            O = (0, n.useCallback)((e) => {
                                L.current.isVisible &&
                                    ((L.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (L.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(L.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = L.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', O, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', O, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === E && y();
                            }, [E, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ),
                            E
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(L.current.timeoutId),
                                                          (L.current.timeoutId = window.setTimeout(S, c ? 100 : 400)),
                                                          a && a(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (y(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && y(), null == l || l(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && y(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : t
                        );
                        var T;
                    };
                let N, G;
                (!(function (e) {
                    ((e.InProgress = 'inProgress'), (e.Completed = 'completed'));
                })(N || (N = {})),
                    (function (e) {
                        ((e.None = 'none'), (e.Blink = 'blink'));
                    })(G || (G = {})));
                var U = r(3403);
                function F() {
                    return !1;
                }
                console.log;
                var V = r(9174);
                function j(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const B = (e) => (0 === e ? window : window.subViews.get(e)),
                    $ = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: s, mocks: l }) {
                                const d = (0, n.useRef)([]),
                                    c = (e, r, n) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = B,
                                                context: n = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = i.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const i = r(t),
                                                        a = n.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (r, a) => {
                                                        const l = 'string' == typeof a ? `${n}.${a}` : n,
                                                            d = o.O.view.addModelObserver(l, t, !0);
                                                        return (i.set(d, r), e && r(s(a)), d);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const r = s(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return j(e, t);
                                                                                var r = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? j(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
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
                                                                })(i.keys());
                                                            !(e = r()).done;
                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : s.readByPath(t),
                                            c = (e) => d.current.push(e),
                                            u = (({ observableModel: e }) => ({ root: e.object() }))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const r = l(t),
                                                            n = V.LO.box(r, { equals: F });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (t, r) => {
                                                        const n = null != r ? r : l(t),
                                                            i = V.LO.box(n, { equals: F });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const n = null != r ? r : l(t),
                                                            i = V.LO.box(n, { equals: F });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, V.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const n = l(r);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = V.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, V.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                a = Object.entries(i),
                                                                o = a.reduce(
                                                                    (e, [t, r]) => ((e[r] = V.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, V.aD)((e) => {
                                                                            a.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && n ? n.controls(m) : t(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, n.useRef)(!1),
                                    m = (0, n.useState)(e),
                                    _ = m[0],
                                    g = m[1],
                                    h = (0, n.useState)(() => c(e, a, l)),
                                    E = h[0],
                                    v = h[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        u.current ? v(c(_, a, l)) : (u.current = !0);
                                    }, [l, _, a]),
                                    (0, n.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (E.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [E],
                                    ),
                                    i().createElement(r.Provider, { value: E }, s)
                                );
                            },
                            () => (0, n.useContext)(r),
                        ];
                    })(0, function () {}),
                    q = $[0],
                    z = $[1],
                    K = 'Label_text_52',
                    Y = 'Label_textGlow_4e',
                    X = ({ level: e, inProgress: t }) =>
                        i().createElement(
                            'div',
                            { className: h()('Label_base_b1', t && 'Label_base__inProgress_ba') },
                            i().createElement('div', { className: h()(K, Y) }, e),
                            i().createElement('div', { className: h()(K, Y, 'Label_textGlow__inner_7b') }, e),
                            i().createElement(
                                'div',
                                { className: 'Label_textWithBlend_07' },
                                i().createElement('div', { className: K }, e),
                                i().createElement('div', { className: 'Label_textMask_f7' }),
                            ),
                        ),
                    Z = {
                        base: 'Widget_base_55',
                        icon: 'Widget_icon_de',
                        icon__inProgress: 'Widget_icon__inProgress_e5',
                        icon__completed: 'Widget_icon__completed_4d',
                        icon__animationWidget: 'Widget_icon__animationWidget_5f',
                        icon__alertMode: 'Widget_icon__alertMode_c7',
                        inProgressWidget: 'Widget_inProgressWidget_6c',
                        show: 'Widget_show_79',
                        flash: 'Widget_flash_98',
                        'show-flash': 'Widget_show-flash_8c',
                        label: 'Widget_label_be',
                        backgroundImage: 'Widget_backgroundImage_04',
                    },
                    Q = (e, t) => (t === G.Blink && e === N.InProgress ? 'animationWidget' : e),
                    J = (0, U.Pi)(() => {
                        const e = z().model.root.get(),
                            t = e.battleStatus,
                            r = e.currentProgression,
                            n = e.isAlertMode,
                            a = e.animation,
                            s = p().mediaSize;
                        return (
                            i().useEffect(
                                () =>
                                    ((e) => {
                                        let t,
                                            r = null;
                                        return (
                                            (r = requestAnimationFrame(() => {
                                                r = requestAnimationFrame(() => {
                                                    ((r = null),
                                                        (t = void (s >= w.Small
                                                            ? (o.O.view.setSidePaddingsRem({
                                                                  left: 40,
                                                                  right: 40,
                                                                  top: 0,
                                                                  bottom: 17,
                                                              }),
                                                              o.O.view.resize(152, 152, 'rem'))
                                                            : (o.O.view.setSidePaddingsRem({
                                                                  left: 30,
                                                                  right: 30,
                                                                  top: 0,
                                                                  bottom: 12,
                                                              }),
                                                              o.O.view.resize(132, 132, 'rem')))));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof t && t(), null !== r && cancelAnimationFrame(r));
                                            }
                                        );
                                    })(),
                                [s],
                            ),
                            i().createElement(
                                'div',
                                { className: Z.base },
                                i().createElement(
                                    'div',
                                    { className: h()(Z.icon, Z[`icon__${Q(t, a)}`], n && Z.icon__alertMode) },
                                    t === N.InProgress &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: Z.inProgressWidget }),
                                            i().createElement('div', { className: Z.flash }),
                                            i().createElement(
                                                'div',
                                                { className: Z.label },
                                                i().createElement(X, { level: r, inProgress: !n }),
                                            ),
                                        ),
                                ),
                            )
                        );
                    }),
                    ee = () =>
                        i().createElement(
                            D,
                            { contentId: R.views.battle_royale.lobby.tooltips.WidgetTooltipView('resId') },
                            i().createElement('div', { className: 'App_base_06' }, i().createElement(J, null)),
                        );
                engine.whenReady.then(() => {
                    W().render(
                        i().createElement(P, null, i().createElement(q, null, i().createElement(ee, null))),
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
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](r, r.exports, __webpack_require__), r.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], a = !0, o = 0; o < t.length; o++)
                        (!1 & n || i >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), n < i && (i = n));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
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
        (__webpack_require__.j = 'lobby/views/WidgetView/WidgetView'),
        (() => {
            var e = { 'lobby/views/WidgetView/WidgetView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [a, o, s] = r,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(r); l < a.length; l++)
                        ((i = a[l]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/battle_royale.vendors'], () =>
        __webpack_require__(4145),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
