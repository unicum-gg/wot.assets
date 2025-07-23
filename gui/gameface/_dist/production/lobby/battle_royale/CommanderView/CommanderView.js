(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => d, off: () => c, on: () => s, onResize: () => r, onScaleUpdated: () => a }));
                var o = n(472),
                    i = n(176);
                const r = (0, o.E)('clientResized'),
                    a = (0, o.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, i.R)(!0);
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
                            : (0, i.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const r = `mouse${t}`,
                                        a = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        o(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
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
                        events: () => o,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    }));
                var o = n(527),
                    i = n(493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, n) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => o });
            },
            493: (e, t, n) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => i, G: () => o });
            },
            472: (e, t, n) => {
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
            138: (e, t, n) => {
                n.d(t, { O: () => r });
                var o = n(959),
                    i = n(514);
                const r = { view: n(641), client: o, sound: i.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => a });
                var o = n(959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, o.playSound)(i[t])), e), {}),
                    a = { play: Object.assign({}, r, { sound: o.playSound }), setRTPC: o.setRTPC };
            },
            722: (e, t, n) => {
                function o(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function i(e, t, n) {
                    return `url(${o(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => i, getTextureUrl: () => o }));
            },
            112: (e, t, n) => {
                n.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                n.d(t, { U: () => i });
                var o = n(472);
                const i = {
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
            641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => c,
                        arabic2roman: () => P,
                        children: () => i,
                        displayStatus: () => r.W,
                        displayStatusIs: () => M,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => k,
                        getFontNames: () => R,
                        getScale: () => p,
                        getSize: () => v,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => O,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    }));
                var o = n(690),
                    i = n(722),
                    r = n(112),
                    a = n(538),
                    s = n(566);
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function w(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const R = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    P = o.cg,
                    M = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    S = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const o = ['args'];
                const i = 2,
                    r = 16,
                    a = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        i = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, o);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((i = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? i : a);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            690: (e, t, n) => {
                n.d(t, { cg: () => r });
                const o = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let n = i.length - 1; n >= 0; n--) for (; e >= i[n]; ) ((t += o[n]), (e -= i[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var o = n(138);
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
                        const r = o.O.view.addModelObserver(e, n, i);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                i.__instance = void 0;
                const r = i;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
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
            596: (e, t, n) => {
                n.d(t, { Sw: () => r.Z, B0: () => c, ry: () => g });
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
                const i = o;
                var r = n(358);
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let c;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(c || (c = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let v, m;
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
                })(v || (v = {})),
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
                    })(m || (m = {})));
                var w = n(138);
                const E = ['args'];
                function p(e, t, n, o, i, r, a) {
                    try {
                        var s = e[r](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, i);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (o, i) {
                                        var r = e.apply(t, n);
                                        function a(e) {
                                            p(r, o, i, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(r, o, i, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        i = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, E);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((o = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    f = () => b(c.CLOSE),
                    y = (e, t) => {
                        e.keyCode === v.ESCAPE && t();
                    };
                var O = n(572);
                const T = i.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: O.Z,
                        ViewEventType: c,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => b(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, i = R.invalid('resId'), r) => {
                            const a = w.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                l = s.x,
                                d = s.y,
                                u = s.width,
                                _ = s.height,
                                v = {
                                    x: w.O.view.pxToRem(l) + a.x,
                                    y: w.O.view.pxToRem(d) + a.y,
                                    width: w.O.view.pxToRem(u),
                                    height: w.O.view.pxToRem(_),
                                };
                            b(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: h(v),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => y(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            y(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const i = Object.prototype.toString.call(t[o]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < i.length; t++) n[o].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = k;
            },
        },
        __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return (__webpack_require__.d(t, { a: t }), t);
    }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }));
    var __webpack_exports__ = {};
    (() => {
        const e = React;
        var t = __webpack_require__.n(e);
        const n = ReactDOM;
        var o = __webpack_require__.n(n);
        const i = (e = 1) => {
            const t = new Error().stack;
            let n,
                o = R.invalid('resId'),
                i = '';
            var r;
            t &&
                ((i = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== n && window.subViews[n] && (o = window.subViews[n].id));
            return { callerUrl: i, caller: n, stack: t, resId: o };
        };
        var r = __webpack_require__(596);
        const a = [
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
        function s(e) {
            return Object.entries(e || {}).map(([e, t]) => {
                const n = { __Type: 'GFValueProxy', name: e };
                switch (typeof t) {
                    case 'number':
                        n.number = t;
                        break;
                    case 'boolean':
                        n.bool = t;
                        break;
                    case 'undefined':
                        break;
                    default:
                        n.string = t.toString();
                }
                return n;
            });
        }
        const c = (e, t, n = {}, o = 0) => {
                viewEnv.handleViewEvent(
                    Object.assign(
                        { __Type: 'GFViewEventProxy', type: r.B0.TOOLTIP, contentID: e, decoratorID: t, targetID: o },
                        n,
                    ),
                );
            },
            l = (t) => {
                let n = t.children,
                    o = t.contentId,
                    r = t.args,
                    l = t.onMouseEnter,
                    d = t.onMouseLeave,
                    u = t.onMouseDown,
                    _ = t.onClick,
                    v = t.ignoreShowDelay,
                    m = void 0 !== v && v,
                    w = t.ignoreMouseClick,
                    E = void 0 !== w && w,
                    p = t.decoratorId,
                    h = void 0 === p ? 0 : p,
                    g = t.isEnabled,
                    b = void 0 === g || g,
                    f = t.targetId,
                    y = void 0 === f ? 0 : f,
                    O = t.onShow,
                    T = t.onHide,
                    k = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            o,
                            i = {},
                            r = Object.keys(e);
                        for (o = 0; o < r.length; o++) ((n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(t, a);
                const R = (0, e.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                    P = (0, e.useMemo)(() => y || i().resId, [y]),
                    M = (0, e.useCallback)(() => {
                        (R.current.isVisible && R.current.timeoutId) ||
                            (c(o, h, { isMouseEvent: !0, on: !0, arguments: s(r) }, P),
                            O && O(),
                            (R.current.isVisible = !0));
                    }, [o, h, r, P, O]),
                    S = (0, e.useCallback)(() => {
                        if (R.current.isVisible || R.current.timeoutId) {
                            const e = R.current.timeoutId;
                            (e > 0 && (clearTimeout(e), (R.current.timeoutId = 0)),
                                c(o, h, { on: !1 }, P),
                                R.current.isVisible && T && T(),
                                (R.current.isVisible = !1));
                        }
                    }, [o, h, P, T]),
                    L = (0, e.useCallback)((e) => {
                        R.current.isVisible &&
                            ((R.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                            (R.current.hideTimerId = window.setTimeout(() => {
                                const t = document.elementFromPoint(e.clientX, e.clientY);
                                t && !t.isSameNode(R.current.prevTarget) && S();
                            }, 200)));
                    }, []);
                ((0, e.useEffect)(() => {
                    const e = R.current.hideTimerId;
                    return (
                        document.addEventListener('wheel', L, { capture: !0 }),
                        () => {
                            (document.removeEventListener('wheel', L, { capture: !0 }), e && window.clearTimeout(e));
                        }
                    );
                }, []),
                    (0, e.useEffect)(() => {
                        !1 === b && S();
                    }, [b, S]),
                    (0, e.useEffect)(
                        () => (
                            window.addEventListener('mouseleave', S),
                            () => {
                                (window.removeEventListener('mouseleave', S), S());
                            }
                        ),
                        [S],
                    ));
                return b
                    ? (0, e.cloneElement)(
                          n,
                          Object.assign(
                              {
                                  onMouseEnter:
                                      ((C = n.props.onMouseEnter),
                                      (e) => {
                                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                                              ((R.current.timeoutId = window.setTimeout(M, m ? 100 : 400)),
                                              l && l(e),
                                              C && C(e));
                                      }),
                                  onMouseLeave: ((e) => (t) => {
                                      (S(), null == d || d(t), null == e || e(t));
                                  })(n.props.onMouseLeave),
                                  onClick: ((e) => (t) => {
                                      (!1 === E && S(), null == _ || _(t), null == e || e(t));
                                  })(n.props.onClick),
                                  onMouseDown: ((e) => (t) => {
                                      (!1 === E && S(), null == u || u(t), null == e || e(t));
                                  })(n.props.onMouseDown),
                              },
                              k,
                          ),
                      )
                    : n;
                var C;
            },
            d = ['children'];
        function u() {
            return (
                (u =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }),
                u.apply(this, arguments)
            );
        }
        const _ = (e) => {
                let n = e.children,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            o,
                            i = {},
                            r = Object.keys(e);
                        for (o = 0; o < r.length; o++) ((n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, d);
                return t().createElement(
                    l,
                    u(
                        {
                            contentId:
                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                            ignoreShowDelay: !0,
                        },
                        o,
                    ),
                    n,
                );
            },
            v = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
            m = (t) => {
                const n = (0, e.useRef)(!1);
                n.current || (t(), (n.current = !0));
            },
            w = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
            E = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
            p = (e) =>
                ((e, t) =>
                    e.split('.').reduce((e, n) => {
                        const o = v(`${e}.${n}`, window);
                        return w(o) ? t(e, n, o) : `${e}.${n}`;
                    }))(e, (e, t) => `${e}.${t}.value`),
            h = (e) => {
                const t = ((e) => {
                        const t = i(),
                            n = t.caller,
                            o = t.resId,
                            r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                        return { modelPrefix: r, modelPath: E(r, e || ''), resId: o };
                    })(),
                    n = t.modelPrefix,
                    o = e.split('.');
                if (o.length > 0) {
                    const e = [o[0]];
                    return (
                        o.reduce((t, o) => {
                            const i = v(E(n, `${t}.${o}`), window);
                            return w(i) ? (e.push(i.id), `${t}.${o}.value`) : (e.push(o), `${t}.${o}`);
                        }),
                        e.reduce((e, t) => e + '.' + t)
                    );
                }
                return '';
            };
        const g = () => (window.injected || (window.injected = new Map()), window.injected);
        const b = r.Sw.instance;
        let f;
        !(function (e) {
            ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
        })(f || (f = {}));
        const y = (t = 'model', n = f.Deep) => {
                const o = (0, e.useState)(0),
                    r = (o[0], o[1]),
                    a = (0, e.useMemo)(() => i(), []),
                    s = a.callerUrl,
                    c = a.caller,
                    l = a.resId,
                    d = (0, e.useMemo)(() => {
                        const e = (function (e) {
                            return g().has(e);
                        })(s.replace('.js', '.html'));
                        return window.__feature && window.__feature !== c && !e ? `subViews.${c}.${t}` : t;
                    }, [s, c, t]),
                    u = (0, e.useState)(() =>
                        ((e) => {
                            const t = v(e, window);
                            for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                            return w(t) ? t.value : t;
                        })(p(d)),
                    ),
                    _ = u[0],
                    E = u[1],
                    y = (0, e.useRef)(-1);
                return (
                    m(() => {
                        if (
                            ('boolean' == typeof n &&
                                ((n = n ? f.Deep : f.None),
                                console.warn(
                                    'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                )),
                            n !== f.None)
                        ) {
                            const e = (e) => {
                                    ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                    n === f.Deep
                                        ? (e === _ && r((e) => e + 1), E(e))
                                        : E(Object.assign([], e));
                                },
                                o = h(t);
                            y.current = b.addCallback(o, e, l, n === f.Deep);
                        }
                    }),
                    (0, e.useEffect)(() => {
                        if (n !== f.None)
                            return () => {
                                b.removeCallback(y.current, l);
                            };
                    }, [l, n]),
                    _
                );
            },
            O = 'Perk_base_43',
            T = ({ tooltipID: n, icon: o }) => {
                const i = (0, e.useMemo)(() => ({ backgroundImage: o ? `url(${o})` : '' }), [o]),
                    r = (0, e.useMemo)(() => ({ tooltipId: n }), [n]);
                return t().createElement(_, { args: r, key: n }, t().createElement('div', { className: O, style: i }));
            },
            k = 'App_base_c0',
            P = 'App_commander_d0',
            M = 'App_details_b4',
            S = 'App_member_77',
            L = 'App_type_40',
            C = 'App_name_63',
            I = 'App_description_66',
            D = 'App_flag_d5',
            N = 'App_perks_ff',
            A = () => {
                const n = y(),
                    o = n.nation,
                    i = n.perkList,
                    r = (0, e.useMemo)(() => ({ tooltipId: 'battleRoyaleTankman' }), []),
                    a = (0, e.useMemo)(
                        () => ({
                            backgroundImage: o
                                ? `url('R.images.gui.maps.icons.battleRoyale.hangar.flags.commander.flag_${o}')`
                                : '',
                        }),
                        [o],
                    ),
                    s = (0, e.useMemo)(
                        () => ({
                            backgroundImage: o
                                ? `url('R.images.gui.maps.icons.battleRoyale.hangar.commanders.commander_large_${o}')`
                                : '',
                        }),
                        [o],
                    );
                return t().createElement(
                    'div',
                    { className: k },
                    t().createElement(
                        _,
                        { args: r },
                        t().createElement(
                            'div',
                            { className: P },
                            t().createElement('div', { className: D, style: a }),
                            t().createElement('div', { className: S, style: s }),
                            t().createElement(
                                'div',
                                { className: M },
                                t().createElement(
                                    'div',
                                    { className: L },
                                    R.strings.battle_royale.commanderInfo.commonRank(),
                                ),
                                o.length > 0 &&
                                    t().createElement(
                                        t().Fragment,
                                        null,
                                        t().createElement(
                                            'div',
                                            { className: C },
                                            R.strings.battle_royale.commanderInfo.fullName.$dyn(o),
                                        ),
                                        t().createElement(
                                            'div',
                                            { className: I },
                                            R.strings.battle_royale.commanderInfo.description.$dyn(o),
                                        ),
                                    ),
                            ),
                        ),
                    ),
                    t().createElement(
                        'div',
                        { className: N },
                        i.map(
                            (e) =>
                                e.value &&
                                t().createElement(T, {
                                    key: e.value.tooltipID,
                                    tooltipID: e.value.tooltipID,
                                    icon: e.value.icon,
                                }),
                        ),
                    ),
                );
            };
        engine.whenReady.then(() => {
            o().render(t().createElement(A, null), document.getElementById('root'));
        });
    })();
})();
