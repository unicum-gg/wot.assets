(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => u, off: () => c, on: () => s, onResize: () => a, onScaleUpdated: () => i }));
                var o = n(2472),
                    r = n(1176);
                const a = (0, o.E)('clientResized'),
                    i = (0, o.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
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
            5959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => o,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var o = n(527),
                    r = n(2493);
                function a(e = 'px') {
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
            1176: (e, t, n) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => o });
            },
            2493: (e, t, n) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => o });
            },
            2472: (e, t, n) => {
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => o });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var o = n(5959),
                    r = n(7698),
                    a = n(514);
                const i = { view: n(7641), client: o, sound: a.ZP, intl: r.N };
            },
            7698: (e, t, n) => {
                n.d(t, { N: () => o });
                const o = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => i });
                var o = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, o.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, a, { sound: o.playSound }), setRTPC: o.setRTPC };
            },
            3722: (e, t, n) => {
                function o(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${o(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => o }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var o = n(2472);
                const r = {
                    onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                    onTextureReady: (0, o.E)('self.onTextureReady'),
                    onDomBuilt: (0, o.E)('self.onDomBuilt'),
                    onLoaded: (0, o.E)('self.onLoaded'),
                    onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, o.E)('children.onAdded'),
                        onLoaded: (0, o.E)('children.onLoaded'),
                        onRemoved: (0, o.E)('children.onRemoved'),
                        onAttached: (0, o.E)('children.onAttached'),
                        onTextureReady: (0, o.E)('children.onTextureReady'),
                        onRequestPosition: (0, o.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => c,
                        arabic2roman: () => L,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => R,
                        events: () => i.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => f,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => M,
                        getExternalPaddingsRem: () => T,
                        getFontNames: () => k,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => S,
                        isEventHandled: () => O,
                        isFocused: () => h,
                        pxToRem: () => E,
                        remToPx: () => w,
                        resize: () => v,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => P,
                    }));
                var o = n(9690),
                    r = n(3722),
                    a = n(6112),
                    i = n(6538),
                    s = n(8566);
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function f() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function M() {
                    return viewEnv.getShowingStatus();
                }
                const k = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    L = o.cg;
                function T() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
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
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function R() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function S(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            o = t.right,
                            r = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const o = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, o);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? r : i);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let o, r;
                (n.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
            9690: (e, t, n) => {
                n.d(t, { cg: () => a });
                const o = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += o[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = o.O.view.addModelObserver(e, n, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, t, n) => {
                n.d(t, { ry: () => b });
                class o {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (o.__instance || (o.__instance = new o()), o.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const r = o;
                var a = n(1358);
                var i = n(8613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    m = n(3138);
                const v = ['args'];
                function g(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        n = arguments;
                                    return new Promise(function (o, r) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            g(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, v);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    w = () => E(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var h = n(7572);
                const y = r.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                u = c.y,
                                d = c.width,
                                _ = c.height,
                                v = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(u) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: f(v),
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
                            p(e, w);
                        },
                        handleViewEvent: E,
                        onBindingsReady: b,
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
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const r = Object.prototype.toString.call(t[o]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < r.length; t++) n[o].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => o, cy: () => r });
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            8812: (e, t, n) => {
                var o = n(7363),
                    r = n.n(o),
                    a = n(1533),
                    i = n.n(a);
                function s() {}
                function c() {
                    return !1;
                }
                console.log;
                var l = n(9174),
                    u = n(3138);
                function d(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return _(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const m = (e) => (0 === e ? window : window.subViews.get(e));
                const v = () => (e, t) => {
                    const n = (0, o.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: i, children: s, mocks: _ }) {
                            const v = (0, o.useRef)([]),
                                g = (n, o, r) => {
                                    var a;
                                    const i = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: n = m,
                                            context: o = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function a(e, t = 0) {
                                                viewEnv.removeDataChangedCallback(e, t)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                    n.forEach((t) => {
                                                        const n = r.get(t);
                                                        void 0 !== n && n(e);
                                                    });
                                                });
                                            });
                                            const i = (e) => {
                                                const r = n(t),
                                                    a = o.split('.').reduce((e, t) => e[t], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? a
                                                    : e.split('.').reduce((e, t) => {
                                                          const n = e[t];
                                                          return 'function' == typeof n ? n.bind(e) : n;
                                                      }, a);
                                            };
                                            return {
                                                subscribe: (n, a) => {
                                                    const s = 'string' == typeof a ? `${o}.${a}` : o,
                                                        c = u.O.view.addModelObserver(s, t, !0);
                                                    return (r.set(c, n), e && n(i(a)), c);
                                                },
                                                readByPath: i,
                                                createCallback: (e, t) => {
                                                    const n = i(t);
                                                    return (...t) => {
                                                        n(e(...t));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const t = i(e);
                                                    return () => {
                                                        t();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, n = d(r.keys()); !(e = n()).done; ) a(e.value, t);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(o),
                                        s =
                                            'real' === n
                                                ? i
                                                : Object.assign({}, i, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                        g = (e) => v.current.push(e),
                                        f = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: s,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = _(e),
                                                        o = l.LO.box(t, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const o = null != t ? t : _(e),
                                                        r = l.LO.box(o, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const o = null != t ? t : _(e),
                                                        r = l.LO.box(o, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const o = _(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = l.LO.box(o[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, l.aD)((t) => {
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
                                                            a = Object.entries(r),
                                                            i = a.reduce(
                                                                (e, [t, n]) => ((e[n] = l.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, l.aD)((e) => {
                                                                        a.forEach(([t, n]) => {
                                                                            i[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: g,
                                        }),
                                        b = { mode: n, model: f, externalModel: s, cleanup: g };
                                    return {
                                        model: f,
                                        controls: 'mocks' === n && r ? r.controls(b) : t(b),
                                        externalModel: s,
                                        mode: n,
                                    };
                                },
                                f = (0, o.useRef)(!1),
                                b = (0, o.useState)(a),
                                E = b[0],
                                w = b[1],
                                p = (0, o.useState)(() => g(a, i, _)),
                                h = p[0],
                                y = p[1];
                            return (
                                (0, o.useEffect)(() => {
                                    f.current ? y(g(E, i, _)) : (f.current = !0);
                                }, [_, E, i]),
                                (0, o.useEffect)(() => {
                                    w(a);
                                }, [a]),
                                (0, o.useEffect)(
                                    () => () => {
                                        (h.externalModel.dispose(), v.current.forEach((e) => e()));
                                    },
                                    [h],
                                ),
                                r().createElement(n.Provider, { value: h }, s)
                            );
                        },
                        () => (0, o.useContext)(n),
                    ];
                };
                var g = n(3946);
                let f, b, E, w;
                (!(function (e) {
                    ((e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded'));
                })(f || (f = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(E || (E = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(w || (w = {})));
                (f.Initialization, b.Initialization);
                const p = (e) => e > 0,
                    h = (e) => !p(e);
                function y(e, t) {
                    var n;
                    if (h(e)) return void console.warn('Invalid id, should be greater than zero', e);
                    const o = 0 === t.scale ? 1e-5 : null != (n = t.scale) ? n : 1;
                    return u.O.view.getBrowserTexturePath(e, Math.max(t.width, 1), Math.max(t.height, 1), o);
                }
                const O = v()(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                n = (0, g.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: n }) {
                                        return t === f.Initialization
                                            ? w.Initialization
                                            : t === f.ForceLoading
                                              ? w.ForceLoading
                                              : t === f.Loading
                                                ? w.BrowserLoading
                                                : e === b.Loaded && t === f.Loaded && n === E.Loaded
                                                  ? w.Loaded
                                                  : n === E.Failed
                                                    ? w.TextureFailed
                                                    : e === b.Failed
                                                      ? w.PageFailed
                                                      : w.PageLoading;
                                    })(t.get()),
                                );
                            return { root: t, getState: n };
                        },
                        ({ externalModel: e }) => ({
                            blur: e.createCallbackNoArgs('unfocus'),
                            focus: e.createCallbackNoArgs('focus'),
                            createWebView: e.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    C = O[0],
                    M = O[1];
                var k = n(3403),
                    L = n(6483),
                    T = n.n(L);
                function x() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                ((e.current = 0), t());
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
                const N = 'BrowserView_base_6b',
                    P = 'BrowserView_texture_17';
                function S(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const B = {
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
                let A, F;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(A || (A = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(F || (F = {})));
                const D = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: a,
                        onMouseEnter: i,
                        onMouseMove: s,
                        onMouseDown: c,
                        onMouseUp: l,
                        onMouseLeave: u,
                        onClick: d,
                        isFocused: _ = !1,
                        type: m = A.primary,
                        soundHover: v = 'highlight',
                        soundClick: g = 'play',
                    }) => {
                        const f = (0, o.useRef)(null),
                            b = (0, o.useState)(_),
                            E = b[0],
                            w = b[1],
                            p = (0, o.useState)(!1),
                            h = p[0],
                            y = p[1];
                        return (
                            (0, o.useEffect)(() => {
                                function e(e) {
                                    E && null !== f.current && !f.current.contains(e.target) && w(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [E]),
                            (0, o.useEffect)(() => {
                                w(_);
                            }, [_]),
                            r().createElement(
                                'div',
                                {
                                    ref: f,
                                    className: T()(
                                        B.base,
                                        B[`base__${m}`],
                                        n && B.base__disabled,
                                        t && B[`base__${t}`],
                                        E && B.base__focus,
                                        h && B.base__highlightActive,
                                        a,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== v && S(v), i && i(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (l && l(e), y(!1));
                                    },
                                    onMouseDown: function (e) {
                                        n ||
                                            (null !== g && S(g),
                                            c && c(e),
                                            _ && (n || (f.current && (f.current.focus(), w(!0)))),
                                            y(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (u && u(e), y(!1));
                                    },
                                    onClick: function (e) {
                                        n || (d && d(e));
                                    },
                                },
                                m !== A.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: B.back }),
                                        r().createElement('span', { className: B.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: T()(B.state, B.state__default) },
                                    r().createElement('span', { className: B.stateDisabled }),
                                    r().createElement('span', { className: B.stateHighlightHover }),
                                    r().createElement('span', { className: B.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: B.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    I = 'Error_base_46',
                    U = 'Error_alertIcon_04',
                    z = 'Error_errorCaption_f2',
                    j = 'Error_button_cd',
                    W = ({ errorBtnClickHandler: e, errorBtnLabel: t, errorMessage: n }) =>
                        r().createElement(
                            'div',
                            { className: I },
                            r().createElement('div', { className: U }),
                            r().createElement('div', { className: z }, n),
                            r().createElement(D, { size: F.medium, mixClass: j, onClick: e }, t),
                        ),
                    V = 'Spinner_base_87',
                    H = 'Spinner_caption_cf',
                    q = 'Spinner_gear_c4',
                    G = 'Spinner_logo_bf',
                    K = ({ message: e, className: t, classNames: n }) =>
                        r().createElement(
                            'div',
                            { className: T()(V, t) },
                            e && r().createElement('div', { className: T()(H, null == n ? void 0 : n.caption) }, e),
                            r().createElement('div', { className: T()(q, null == n ? void 0 : n.gear) }),
                            r().createElement('div', { className: T()(G, null == n ? void 0 : n.logo) }),
                        ),
                    Y = 'Waiting_base_c5',
                    $ = 'Waiting_blackOverlay_55',
                    Z = ({
                        errorBtnClickHandler: e,
                        message: t = '',
                        isError: n = !1,
                        errorMessage: a = '',
                        errorBtnLabel: i = R.strings.dialogs.disconnected.cancel(),
                        overlayAlpha: s = '0.8',
                    }) => {
                        const c = (0, o.createRef)();
                        return (
                            (0, o.useEffect)(() => {
                                const e = c.current;
                                e && s && (e.style.opacity = s);
                            }, [c, s]),
                            r().createElement(
                                'div',
                                { className: Y },
                                r().createElement('div', { className: $, ref: c }),
                                n
                                    ? r().createElement(W, {
                                          errorBtnLabel: i,
                                          errorMessage: a,
                                          errorBtnClickHandler: e,
                                      })
                                    : r().createElement(K, { message: t }),
                            )
                        );
                    },
                    X = 'DisplayBrowserState_base_e7',
                    Q = 'DisplayBrowserState_error_4e',
                    J = 'DisplayBrowserState_alertIcon_c4',
                    ee = 'DisplayBrowserState_errorCaption_dd',
                    te = ({ waitingText: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: T()(X, t) },
                            r().createElement(Z, { errorBtnClickHandler: s, message: e }),
                        ),
                    ne = () =>
                        r().createElement(
                            'div',
                            { className: Q },
                            r().createElement('div', { className: J }),
                            r().createElement(
                                'div',
                                { className: ee },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    oe = () =>
                        r().createElement(
                            'div',
                            { className: Q },
                            r().createElement('div', { className: J }),
                            r().createElement(
                                'div',
                                { className: ee },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: ee },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function re(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (function (e) {
                            return e !== w.BrowserLoading && e !== w.PageLoading;
                        })(e) && (t.current = e),
                        t.current
                    );
                }
                function ae(e) {
                    const t = (function (e) {
                            const t = (0, o.useRef)(!1);
                            return (
                                (e !== w.Loaded && e !== w.PageFailed && e !== w.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        n = re(e);
                    return t ? n : e;
                }
                const ie = ({ viewState: e, waitingText: t, waitingClassName: n }) => {
                        switch (ae(e)) {
                            case w.BrowserLoading:
                            case w.PageLoading:
                            case w.ForceLoading:
                                return r().createElement(te, { waitingText: t, className: n });
                            case w.PageFailed:
                                return r().createElement(ne, null);
                            case w.TextureFailed:
                                return r().createElement(oe, null);
                            default:
                                return null;
                        }
                    },
                    se = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function ce(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function le(e) {
                    const t = (0, o.useState)(ce(e.scale)),
                        n = t[0],
                        r = t[1],
                        a = (function (e) {
                            return se(e) ? y(e.id, e) : void 0;
                        })(Object.assign({}, e, { scale: n })),
                        i = (0, o.useState)(a),
                        s = i[0],
                        c = i[1],
                        l = (0, o.useRef)(!1),
                        u = 'width' in e ? e.width : 0,
                        d = 'height' in e ? e.height : 0,
                        _ = x();
                    return (
                        (0, o.useEffect)(() => {
                            const t = () => {
                                r(ce(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, o.useEffect)(() => {
                            if (void 0 === a || 0 === u || 0 === d || a === s) return;
                            const e = () => {
                                c(a);
                            };
                            if (!1 === l.current) return ((l.current = !0), void e());
                            const t = new Image(),
                                n = () => {
                                    _.run(e);
                                };
                            return (
                                t.addEventListener('load', n),
                                (t.src = a),
                                () => {
                                    (t.removeEventListener('load', n), (t.src = ''));
                                }
                            );
                        }, [a, s]),
                        s
                    );
                }
                const ue = r().memo(function (e) {
                        const t = e.id,
                            n = e.className,
                            o = e.classNameTexture,
                            a = e.waitingClassName,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseWheel,
                            l = e.onMouseMove,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.renderStateDisplay,
                            m = e.viewState,
                            v = e.statusCode,
                            g = e.waitingText,
                            f = e.scrollSpeed,
                            b = void 0 === f ? 20 : f,
                            E = le(e);
                        return r().createElement(
                            'div',
                            { className: T()(N, n), onMouseEnter: i, onMouseLeave: s },
                            E &&
                                r().createElement('div', {
                                    onWheel: c,
                                    onMouseMove: l,
                                    onMouseDown: u,
                                    onMouseUp: d,
                                    className: T()(N, P, o),
                                    'data-browser-id': t,
                                    'data-browser-scroll-speed': b,
                                    style: { backgroundImage: `url(${E})` },
                                }),
                            'function' == typeof _
                                ? _({ viewState: m, statusCode: v, waitingText: g, waitingClassName: a })
                                : r().createElement(ie, {
                                      viewState: m,
                                      statusCode: v,
                                      waitingText: g,
                                      waitingClassName: a,
                                  }),
                        );
                    }),
                    de = 'none-ref',
                    _e = 'measured',
                    me = { type: 'measuring' };
                function ve() {
                    const e = (0, o.useRef)(null),
                        t = (0, o.useState)(me),
                        n = t[0],
                        r = t[1],
                        a = ((e, t = []) => {
                            const n = (0, o.useRef)(),
                                r = (0, o.useCallback)((...t) => {
                                    (n.current && n.current(), (n.current = e(...t)));
                                }, t);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        n.current && n.current();
                                    },
                                    [r],
                                ),
                                r
                            );
                        })(
                            () => (
                                r(me),
                                ((e) => {
                                    let t,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                ((n = null), (t = e()));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                                        }
                                    );
                                })(() => {
                                    e.current
                                        ? r({
                                              type: _e,
                                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                                          })
                                        : r({ type: de });
                                })
                            ),
                            [],
                        );
                    return (
                        (0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                a(),
                                () => window.removeEventListener('resize', a)
                            ),
                            [a],
                        ),
                        [e, n, a]
                    );
                }
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const fe = r().memo(function (e) {
                    const t = ve(),
                        n = t[0],
                        o = t[1];
                    return r().createElement(
                        'div',
                        { ref: n, className: N },
                        r().createElement(
                            ue,
                            ge(
                                {},
                                e,
                                (function (e, t = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                                })(o),
                            ),
                        ),
                    );
                });
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const Ee = (0, k.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            n = e.className,
                            a = e.waitingClassName,
                            i = e.isLazy,
                            s = void 0 === i || i,
                            c = e.displayContentWhenLoading,
                            l = void 0 === c || c,
                            u = e.renderStateDisplay,
                            d = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            m = e.onMouseMove,
                            v = e.onMouseWheel,
                            g = e.onMouseDown,
                            f = e.onMouseUp,
                            b = M(),
                            E = b.model,
                            y = b.controls,
                            O = E.root.get(),
                            C = O.id,
                            k = O.httpStatusCode,
                            L = O.waitingMessage,
                            T = E.getState(),
                            x = l || T === w.Loaded;
                        var N;
                        ((N = () => {
                            s && h(C) && y.createWebView();
                        }),
                            (0, o.useEffect)(N, []),
                            (0, o.useEffect)(() => {
                                p(C) && y.focus();
                            }, [C, y]));
                        const P = (0, o.useMemo)(() => {
                            const e = {
                                onMouseEnter: d,
                                onMouseLeave: _,
                                onMouseMove: m,
                                onMouseWheel: v,
                                onMouseDown: g,
                                onMouseUp: f,
                            };
                            return x
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          (y.focus(), null == d || d(e));
                                      },
                                      onMouseLeave: (e) => {
                                          (y.blur(), null == _ || _(e));
                                      },
                                  })
                                : e;
                        }, [x, y, g, d, _, m, f, v]);
                        if (h(C)) return null;
                        const R = se(e)
                                ? (function (e, t) {
                                      const n = {};
                                      return (
                                          t.forEach((t) => {
                                              n[t] = e[t];
                                          }),
                                          n
                                      );
                                  })(e, ['width', 'height'])
                                : {},
                            S = L.length > 0 ? L : t;
                        return e.isFullSize
                            ? r().createElement(
                                  fe,
                                  be({}, P, {
                                      id: C,
                                      className: n,
                                      waitingClassName: a,
                                      statusCode: k,
                                      viewState: T,
                                      waitingText: S,
                                      renderStateDisplay: u,
                                      onMouseEnter: y.focus,
                                      onMouseLeave: y.blur,
                                  }),
                              )
                            : r().createElement(
                                  ue,
                                  be({}, P, R, {
                                      id: C,
                                      className: n,
                                      waitingClassName: a,
                                      statusCode: k,
                                      viewState: T,
                                      waitingText: S,
                                      renderStateDisplay: u,
                                      onMouseEnter: y.focus,
                                      onMouseLeave: y.blur,
                                  }),
                              );
                    }),
                    we = ['options', 'mocks', 'mode'];
                const pe = (0, o.memo)(function (e) {
                        let t = e.options,
                            n = e.mocks,
                            o = e.mode,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, we);
                        return r().createElement(C, { options: t, mocks: n, mode: o }, r().createElement(Ee, a));
                    }),
                    he = v()(
                        ({ observableModel: e }) => {
                            const t = e.object();
                            return { isClosable: (0, g.Om)(() => !0 === t.get().isClosable) };
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    ye = he[0],
                    Oe = he[1],
                    Ce = {
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
                    Me = [
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
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Le = (e) => {
                        let t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            c = e.onMouseLeave,
                            l = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.side,
                            m = void 0 === _ ? 'left' : _,
                            v = e.type,
                            g = void 0 === v ? 'back' : v,
                            f = e.soundHover,
                            b = void 0 === f ? 'highlight' : f,
                            E = e.soundClick,
                            w = void 0 === E ? 'play' : E,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Me);
                        const h = (0, o.useCallback)(
                                (e) => {
                                    (null == s || s(e), u.O.sound.play.sound(b));
                                },
                                [s, b],
                            ),
                            y = (0, o.useCallback)(
                                (e) => {
                                    null == c || c(e);
                                },
                                [c],
                            ),
                            O = (0, o.useCallback)(
                                (e) => {
                                    (null == l || l(e), u.O.sound.play.sound(w));
                                },
                                [l, w],
                            ),
                            C = (0, o.useCallback)(
                                (e) => {
                                    null == d || d(e);
                                },
                                [d],
                            );
                        return r().createElement(
                            'div',
                            ke(
                                {
                                    className: T()(
                                        Ce.base,
                                        Ce[`base__${g}`],
                                        Ce[`base__${m}`],
                                        null == i ? void 0 : i.base,
                                    ),
                                    onMouseEnter: h,
                                    onMouseLeave: y,
                                    onMouseDown: O,
                                    onMouseUp: C,
                                    onClick: n,
                                },
                                p,
                            ),
                            'info' !== g && r().createElement('div', { className: Ce.shine }),
                            r().createElement(
                                'div',
                                {
                                    className: T()(
                                        Ce.icon,
                                        Ce[`icon__${g}`],
                                        Ce[`icon__${m}`],
                                        null == i ? void 0 : i.icon,
                                    ),
                                },
                                r().createElement('div', { className: T()(Ce.glow, null == i ? void 0 : i.glow) }),
                            ),
                            r().createElement(
                                'div',
                                { className: T()(Ce.caption, Ce[`caption__${g}`], null == i ? void 0 : i.caption) },
                                t,
                            ),
                            a && r().createElement('div', { className: T()(Ce.goto, null == i ? void 0 : i.goto) }, a),
                        );
                    },
                    Te = 'Closable_base_e2',
                    xe = 'Closable_button_01',
                    Ne = (0, k.Pi)(function ({ className: e, classNameButton: t, children: n }) {
                        const o = Oe(),
                            a = o.controls,
                            i = o.model;
                        return r().createElement(
                            'div',
                            { className: T()(Te, e) },
                            n,
                            i.isClosable() &&
                                r().createElement(
                                    'div',
                                    { className: T()(xe, t) },
                                    r().createElement(Le, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: a.close,
                                    }),
                                ),
                        );
                    }),
                    Pe = ['children', 'className', 'classNameButton'];
                const Re = (e) => {
                    let t = e.children,
                        n = e.className,
                        o = e.classNameButton,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Pe);
                    return r().createElement(ye, a, r().createElement(Ne, { className: n, classNameButton: o }, t));
                };
                var Se = n(5521);
                n(9916);
                const Be = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Ae(e = Se.n.NONE, t = Be, n = !1, r = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== Se.n.NONE)
                            return (
                                window.addEventListener('keydown', o, n),
                                () => {
                                    window.removeEventListener('keydown', o, n);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!r && u.O.view.isEventHandled()) return;
                                (u.O.view.setEventHandled(), t(o), n && o.stopPropagation());
                            }
                        }
                    }, [t, e, n, r]);
                }
                const Fe = 'App_base_a4',
                    De = 'App_closeButton_34',
                    Ie = v()(s, ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') })),
                    Ue = Ie[0],
                    ze = Ie[1],
                    je = 'R.images.gui.maps.icons.common.gameface_pattern',
                    We = () => {
                        const e = ze().controls;
                        return (
                            Ae(Se.n.ESCAPE, () => e.close()),
                            r().createElement(
                                'div',
                                {
                                    className: Fe,
                                    style:
                                        ((t = je),
                                        void 0 !== t &&
                                        '' !==
                                            ((e, t) => {
                                                let n = e;
                                                const o = t.split('.');
                                                for (let e = 0; e < o.length; e++) {
                                                    if (!n) return '';
                                                    if (
                                                        ('string' != typeof n && (n = n.$dyn(o[e])),
                                                        'string' == typeof n)
                                                    )
                                                        return n;
                                                }
                                                return '';
                                            })(R.images, t.replace('R.images.', ''))
                                            ? { backgroundImage: `url(${je})` }
                                            : void 0),
                                },
                                r().createElement(
                                    Re,
                                    { classNameButton: De },
                                    r().createElement(pe, { isFullSize: !0, displayContentWhenLoading: !1 }),
                                ),
                            )
                        );
                        var t;
                    },
                    Ve = () => r().createElement(Ue, null, r().createElement(We, null));
                engine.whenReady.then(() => {
                    i().render(r().createElement(Ve, null), document.getElementById('root'));
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > o; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, o];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 194),
        (() => {
            var e = { 194: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        ((r = a[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [127], () => __webpack_require__(8812));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
