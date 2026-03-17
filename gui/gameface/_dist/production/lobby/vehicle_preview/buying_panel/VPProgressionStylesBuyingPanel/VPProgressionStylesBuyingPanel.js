(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => d, off: () => l, on: () => o, onResize: () => a, onScaleUpdated: () => s }));
                var r = n(472),
                    i = n(176);
                const a = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, i.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, i.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        s = c[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
            959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    }));
                var r = n(527),
                    i = n(493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => i, G: () => r });
            },
            472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            138: (e, t, n) => {
                n.d(t, { O: () => s });
                var r = n(959),
                    i = n(698),
                    a = n(514);
                const s = { view: n(641), client: r, sound: a.ZP, intl: i.N };
            },
            698: (e, t, n) => {
                n.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => s });
                var r = n(959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, r.playSound)(i[t])), e), {}),
                    s = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function i(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => i, getTextureUrl: () => r }));
            },
            112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                n.d(t, { U: () => i });
                var r = n(472);
                const i = {
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
            641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        arabic2roman: () => k,
                        children: () => i,
                        displayStatus: () => a.W,
                        displayStatusIs: () => C,
                        enableFullScreenModeSupported: () => M,
                        events: () => s.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => O,
                        getExternalPaddingsRem: () => L,
                        getFontNames: () => T,
                        getScale: () => v,
                        getSize: () => h,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => N,
                        isEventHandled: () => x,
                        isFocused: () => p,
                        pxToRem: () => b,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => R,
                    }));
                var r = n(690),
                    i = n(722),
                    a = n(112),
                    s = n(538),
                    o = n(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const T = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = r.cg;
                function L() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const C = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    P = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function M() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            i = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const r = ['args'];
                const i = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? i : s);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            690: (e, t, n) => {
                n.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let n = i.length - 1; n >= 0; n--) for (; e >= i[n]; ) ((t += r[n]), (e -= i[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(138);
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
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, n, i);
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const a = i;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(976);
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
            976: (e, t, n) => {
                n.d(t, { Sw: () => a.Z, ry: () => b });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                const i = r;
                var a = n(358);
                var s = n(613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let _, h;
                (!(function (e) {
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
                })(_ || (_ = {})),
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
                    })(h || (h = {})));
                var m = n(138);
                const g = ['args'];
                function w(e, t, n, r, i, a, s) {
                    try {
                        var o = e[a](s),
                            l = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(r, i);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (r, i) {
                                        var a = e.apply(t, n);
                                        function s(e) {
                                            w(a, r, i, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            w(a, r, i, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, g);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    f = () => E(o.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.ESCAPE && t();
                    };
                var S = n(572);
                const x = i.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => E(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, i = R.invalid('resId'), a) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                h = {
                                    x: m.O.view.pxToRem(c) + s.x,
                                    y: m.O.view.pxToRem(d) + s.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            E(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: v(h),
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const i = Object.prototype.toString.call(t[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < i.length; t++) n[r].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, n = 2) => systemLocale.getRealFormat(e, t, n),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            664: (e, t, n) => {
                var r = n(363),
                    i = n.n(r),
                    a = n(533),
                    s = n.n(a);
                const o = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var l = n(138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function u(e = l.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign(
                        { width: t, height: n },
                        (function (e, t, n) {
                            const r = (function (e, t) {
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
                                })(e, n),
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
                                })(t, n),
                                a = Math.min(r, i);
                            return {
                                extraLarge: a === n.extraLarge.weight,
                                large: a === n.large.weight,
                                medium: a === n.medium.weight,
                                small: a === n.small.weight,
                                extraSmall: a === n.extraSmall.weight,
                                extraLargeWidth: r === n.extraLarge.weight,
                                largeWidth: r === n.large.weight,
                                mediumWidth: r === n.medium.weight,
                                smallWidth: r === n.small.weight,
                                extraSmallWidth: r === n.extraSmall.weight,
                                extraLargeHeight: i === n.extraLarge.weight,
                                largeHeight: i === n.large.weight,
                                mediumHeight: i === n.medium.weight,
                                smallHeight: i === n.small.weight,
                                extraSmallHeight: i === n.extraSmall.weight,
                            };
                        })(t, n, c),
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
                })(d || (d = {}));
                const _ = u(),
                    h = (0, r.createContext)(_),
                    m = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                            return i;
                        })(e, m);
                    const i = (0, r.useContext)(h),
                        a = i.extraLarge,
                        s = i.large,
                        l = i.medium,
                        c = i.small,
                        d = i.extraSmall,
                        u = i.extraLargeWidth,
                        _ = i.largeWidth,
                        g = i.mediumWidth,
                        w = i.smallWidth,
                        v = i.extraSmallWidth,
                        b = i.extraLargeHeight,
                        E = i.largeHeight,
                        f = i.mediumHeight,
                        p = i.smallHeight,
                        S = i.extraSmallHeight,
                        x = { extraLarge: b, large: E, medium: f, small: p, extraSmall: S };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && a) return t;
                        if (n.large && s) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && u) return o(t, n, x);
                        if (n.largeWidth && _) return o(t, n, x);
                        if (n.mediumWidth && g) return o(t, n, x);
                        if (n.smallWidth && w) return o(t, n, x);
                        if (n.extraSmallWidth && v) return o(t, n, x);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && E) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && p) return t;
                            if (n.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const t = (0, r.useState)(u),
                        n = t[0],
                        a = t[1],
                        s = (0, r.useState)(!1),
                        o = s[0],
                        c = s[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = l.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : u(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                l.O.client.events.on('clientResized', e),
                                l.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (l.O.client.events.off('clientResized', e),
                                        l.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        i().createElement(h.Provider, { value: n }, o && e)
                    );
                };
                var w = n(483),
                    v = n.n(w);
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const E = (e) => ({ transitionDelay: e / 20 + 's' }),
                    f = 'SwitcherBullet_base_3d',
                    p = 'SwitcherBullet_container_6e',
                    S = 'SwitcherBullet_base__selected_70',
                    x = 'SwitcherBullet_container__text_b3',
                    y = 'SwitcherBullet_finishedHover_37',
                    O = 'SwitcherBullet_base__finished_dd',
                    T = 'SwitcherBullet_base__hover_2a',
                    k = 'SwitcherBullet_iconSmall_b7',
                    L = 'SwitcherBullet_base__afterCurrent_cd',
                    C = 'SwitcherBullet_iconBig_dc',
                    P = 'SwitcherBullet_base__currentSelected_24',
                    M = 'SwitcherBullet_iconText_11',
                    N = 'SwitcherBullet_iconTextGlow_25',
                    D = 'SwitcherBullet_clickArea_ed',
                    A = 'SwitcherBullet_base__disabled_b9',
                    I = 'SwitcherBullet_disabled_b5',
                    W = 'SwitcherBullet_number_b4',
                    B = 'SwitcherBullet_currentText_f9',
                    H = 'SwitcherBullet_text_37',
                    F = 'SwitcherBullet_texture_1e',
                    U = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: o,
                        currentText: l,
                        isDisabled: c = !1,
                        mouseEnterSound: d,
                        clickSound: u,
                    }) => {
                        const _ = t !== n,
                            h = (0, r.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, r.useCallback)(() => {
                                (g(!0), _ && b(d));
                            }, [_, d, g]),
                            x = (0, r.useCallback)(() => {
                                _ && (b(u), s(e));
                            }, [_, u, e, s]),
                            M = (0, r.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            N = o || 0,
                            H = v()(
                                f,
                                t === n && S,
                                t === n && t === N && P,
                                t > N && t !== n && L,
                                t <= N && O,
                                m && T,
                                c && A,
                            ),
                            F = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? E(0)
                                            : e === n
                                              ? E(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? E(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            U = (0, r.useCallback)(
                                () => ((t === n && t === N) || t === n ? 'big' : 'small'),
                                [t, n, N],
                            ),
                            V = (0, r.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    n = t > N ? 'light' : 'dark';
                                return Object.assign({}, F, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${U()}_${n}`)})`,
                                });
                            }, [t, N, F, U]);
                        return i().createElement(
                            'div',
                            { className: H },
                            i().createElement(
                                'div',
                                { className: p, style: F },
                                i().createElement('div', { className: y, style: F }),
                                i().createElement('div', { className: k, style: F }),
                                i().createElement('div', { className: C, style: F }),
                                i().createElement('div', { className: I }),
                                i().createElement('div', { className: W, style: V }),
                                i().createElement('div', {
                                    className: D,
                                    style: F,
                                    onClick: x,
                                    onMouseEnter: w,
                                    onMouseLeave: M,
                                }),
                            ),
                            l && t === o && i().createElement('div', { className: B }, l),
                        );
                    },
                    V = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: o = 0,
                        isDisabled: l = !1,
                        mouseEnterSound: c,
                        clickSound: d,
                        styleID: u,
                    }) => {
                        const _ = t === n,
                            h = (0, r.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, r.useCallback)(() => {
                                (g(!0), _ || b(c));
                            }, [_, c, g]),
                            y = (0, r.useCallback)(() => {
                                _ || (b(d), s(e));
                            }, [_, d, e, s]),
                            k = (0, r.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            C = R.strings.vehicle_customization.style_switcher.$dyn(`style_${u}`).$dyn(`level${e}`),
                            I = v()(f, _ && S, _ && t === o && P, t > o && t !== n && L, t <= o && O, m && T, l && A),
                            W = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? E(0)
                                            : e === n
                                              ? E(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? E(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            B = v()(p, x);
                        return i().createElement(
                            'div',
                            { className: I },
                            i().createElement(
                                'div',
                                { className: B, style: W },
                                _ && i().createElement('div', { className: F }),
                                !_ && i().createElement('div', { className: N }),
                                i().createElement('div', { className: M, style: W }),
                                i().createElement('div', { className: H }, C),
                                i().createElement('div', {
                                    className: D,
                                    style: W,
                                    onClick: y,
                                    onMouseEnter: w,
                                    onMouseLeave: k,
                                }),
                            ),
                        );
                    },
                    j = 'SwitcherSeparator_base_c1',
                    q = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    $ = 'SwitcherSeparator_base__notAnimated_58',
                    z = 'SwitcherSeparator_base__scaled_57',
                    G = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    K = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    Y = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    Z = ({ index: e, selectedIndex: t, previousSelectedIndex: n, isAnimated: r = !0 }) => {
                        const a = ((e, t, n) =>
                                e === t + 1 || e === t - 1
                                    ? E(0)
                                    : e === n + 1 || e === n - 1
                                      ? E(Math.abs(n - t) - 2)
                                      : (n > t && e > t && e < n + 1) || (n < t && e < t && e > n - 1)
                                        ? E(Math.abs(e - t) - 1)
                                        : void 0)(e, n, t),
                            s = 1 === Math.abs(e - t),
                            o = 1 === Math.abs(e - n),
                            l = ((e, t, n, r) =>
                                e === n + 1 || (e === t + 1 && !r)
                                    ? G
                                    : e === n - 1 || (e === t - 1 && !r)
                                      ? K
                                      : void 0)(e, n, t, s),
                            c = v()(
                                j,
                                r && e < t && q,
                                r && o && s && Y,
                                r && (e === t + 1 || e === t - 1) && z,
                                r && l,
                                !r && $,
                            );
                        return i().createElement('div', { className: c, style: a });
                    },
                    X = (e, t, n) => Math.min(Math.max(e, t), n),
                    Q = {
                        base: 'Switcher_base_7a',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_6f',
                        base__small: 'Switcher_base__small_6a',
                        base__isVisible: 'Switcher_base__isVisible_43',
                    };
                let J;
                !(function (e) {
                    ((e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text'));
                })(J || (J = {}));
                const ee = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let te;
                !(function (e) {
                    e.small = 'small';
                })(te || (te = {}));
                const ne = ({
                        numberOfBullets: e,
                        selectedNumber: t,
                        onChange: n,
                        currentText: a,
                        currentNumber: s,
                        startNumber: o = 1,
                        isBulletsBeforeCurrentDisabled: l = !1,
                        size: c,
                        mouseEnterSound: d = 'highlight',
                        clickSound: u = 'play',
                        isArabic: _ = !1,
                        hasLightShadows: h = !1,
                        styleID: m = 0,
                        switcherType: g = J.digital,
                    }) => {
                        const w = (0, r.useState)(!1),
                            b = w[0],
                            E = w[1];
                        (0, r.useEffect)(
                            () =>
                                ((e, t) => {
                                    let n;
                                    const r = setTimeout(() => {
                                        n = e();
                                    }, t);
                                    return () => {
                                        ('function' == typeof n && n(), clearTimeout(r));
                                    };
                                })(() => E(!0), 0),
                            [],
                        );
                        const f = o + e - 1,
                            p = X(t, l && s ? s : o, f),
                            S = 'number' == typeof s ? X(s, o, f) : void 0,
                            x = ee(p, o),
                            y = ee(S, o),
                            O = (0, r.useRef)(x);
                        (0, r.useEffect)(() => {
                            O.current = x;
                        });
                        const T = O.current,
                            k = v()(
                                Q.base,
                                a && void 0 !== y && Q.base__hasCurrentText,
                                c && Q[`base__${c}`],
                                b && Q.base__isVisible,
                            ),
                            L = (0, r.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const n = [];
                                        for (let r = e; r <= t; r++) n.push(r);
                                        return n;
                                    })(o, f),
                                [f, o],
                            ),
                            C = g === J.digital;
                        return i().createElement(
                            'div',
                            { className: k },
                            L.map((e, t) => {
                                const r = 2 * t,
                                    s = !(!l || !y) && r < y;
                                return i().createElement(
                                    i().Fragment,
                                    { key: t },
                                    t > 0 &&
                                        i().createElement(Z, {
                                            index: r - 1,
                                            selectedIndex: x,
                                            previousSelectedIndex: T,
                                            isAnimated: C,
                                        }),
                                    C
                                        ? i().createElement(U, {
                                              index: r,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              currentText: a,
                                              onChange: n,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              isArabic: _,
                                              hasLightShadows: h,
                                          })
                                        : i().createElement(V, {
                                              index: r,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              onChange: n,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              hasLightShadows: h,
                                              styleID: m,
                                          }),
                                );
                            }),
                        );
                    },
                    re = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            r = R.invalid('resId'),
                            i = '';
                        var a;
                        t &&
                            ((i = (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                            (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (r = window.subViews[n].id));
                        return { callerUrl: i, caller: n, stack: t, resId: r };
                    },
                    ie = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ae = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var se = n(976);
                const oe = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    le = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ce = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = ie(`${e}.${n}`, window);
                                return oe(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    de = (e) => {
                        const t = ((e) => {
                                const t = re(),
                                    n = t.caller,
                                    r = t.resId,
                                    i = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: i, modelPath: le(i, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const i = ie(le(n, `${t}.${r}`), window);
                                    return oe(i) ? (e.push(i.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ue = () => (window.injected || (window.injected = new Map()), window.injected);
                const _e = se.Sw.instance;
                let he;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(he || (he = {}));
                const me = (e = 'model', t = he.Deep) => {
                        const n = (0, r.useState)(0),
                            i = (n[0], n[1]),
                            a = (0, r.useMemo)(() => re(), []),
                            s = a.callerUrl,
                            o = a.caller,
                            l = a.resId,
                            c = (0, r.useMemo)(() => {
                                const t = (function (e) {
                                    return ue().has(e);
                                })(s.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !t ? `subViews.${o}.${e}` : e;
                            }, [s, o, e]),
                            d = (0, r.useState)(() =>
                                ((e) => {
                                    const t = ie(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return oe(t) ? t.value : t;
                                })(ce(c)),
                            ),
                            u = d[0],
                            _ = d[1],
                            h = (0, r.useRef)(-1);
                        return (
                            ae(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? he.Deep : he.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== he.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === he.Deep
                                                ? (e === u && i((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        r = de(e);
                                    h.current = _e.addCallback(r, n, l, t === he.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== he.None)
                                    return () => {
                                        _e.removeCallback(h.current, l);
                                    };
                            }, [l, t]),
                            u
                        );
                    },
                    ge = {
                        base: 'Content_base_47',
                        base__shown: 'Content_base__shown_3f',
                        content: 'Content_content_54',
                        notification: 'Content_notification_6e',
                        base__small: 'Content_base__small_fa',
                        notificationIcon: 'Content_notificationIcon_f8',
                    },
                    we = R.strings.vehicle_preview.buyingPanel.progressionStyles.currentLevel(),
                    ve = () => {
                        const e = me(),
                            t = e.currentLevel,
                            n = e.selectedLevel,
                            a = e.isReady,
                            s = e.onChange,
                            o = e.numberOfBullets,
                            l = void 0 === o ? 4 : o,
                            c = e.isBulletsBeforeCurrentDisabled,
                            d = e.switcherType,
                            u = e.styleID,
                            _ = (0, r.useContext)(h),
                            m = _.smallHeight || _.extraSmallHeight,
                            g = _.smallWidth || _.extraSmallWidth,
                            w =
                                d === J.text
                                    ? R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.rewind_enable.text()
                                    : R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.text(),
                            b = (0, r.useCallback)((e) => s({ selectedLevel: e }), [s]),
                            E = v()(ge.base, m && g && ge.base__small, a && ge.base__shown),
                            f = v()(ge.content, d === J.text && ge.content__text);
                        return (
                            (0, r.useEffect)(
                                () =>
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
                                        m && g && viewEnv.setInputArea(176, 50, 400, 150);
                                    }),
                                [m, g],
                            ),
                            i().createElement(
                                'div',
                                { className: E },
                                i().createElement(
                                    'div',
                                    { className: f },
                                    i().createElement('div', { className: ge.notification }, w),
                                    i().createElement(ne, {
                                        numberOfBullets: l,
                                        currentNumber: t,
                                        selectedNumber: n,
                                        onChange: b,
                                        currentText: systemLocale.toUpperCase(we),
                                        clickSound: 'bp_style_reward_view',
                                        isBulletsBeforeCurrentDisabled: c,
                                        switcherType: d,
                                        styleID: u,
                                    }),
                                ),
                            )
                        );
                    },
                    be = () => i().createElement(g, null, i().createElement(ve, null));
                engine.whenReady.then(() => {
                    s().render(i().createElement(be, null), document.getElementById('root'));
                });
            },
            363: (e) => {
                e.exports = React;
            },
            533: (e) => {
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], a = !0, s = 0; s < t.length; s++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), r < i && (i = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
        (__webpack_require__.j = 469),
        (() => {
            var e = { 469: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, s, o] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        ((i = a[l]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [294], () => __webpack_require__(664));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
