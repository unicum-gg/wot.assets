(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t), n.d(t, { mouse: () => a, onResize: () => i }));
                var o = n(2472),
                    r = n(1176);
                const i = (0, o.E)('clientResized'),
                    s = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') },
                    a = (function () {
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
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${t}`,
                                            a = s[t]((e) => n([e, 'outside']));
                                        function _(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, _),
                                            o(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, _),
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
                        return Object.assign({}, i, {
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
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var o = n(527);
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
            1176: (e, t, n) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => o });
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
                n.d(t, { O: () => r });
                var o = n(5959);
                const r = { view: n(7641), client: o };
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => a,
                        children: () => o,
                        displayStatus: () => r.W,
                        displayStatusIs: () => R,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => S,
                        getScale: () => v,
                        getSize: () => u,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => g,
                        isFocused: () => T,
                        pxToRem: () => h,
                        remToPx: () => w,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => P,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => f,
                    }));
                var o = n(3722),
                    r = n(6112),
                    i = n(6538),
                    s = n(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
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
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function P(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function T() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    f = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => i });
                const o = ['args'],
                    r = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, o);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    i = {
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
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
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
                        const i = o.O.view.addModelObserver(e, n, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, t, n) => {
                n.d(t, { B3: () => c, Z5: () => s, ry: () => P });
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
                var i = n(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let _;
                var l;
                (((l = _ || (_ = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    p = n(3138);
                const v = ['args'];
                function h(e, t, n, o, r, i, s) {
                    try {
                        var a = e[i](s),
                            _ = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(_) : Promise.resolve(_).then(o, r);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    P = (function () {
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
                                        var i = e.apply(t, n);
                                        function s(e) {
                                            h(i, o, r, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            h(i, o, r, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    T = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, v);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    b = () => T(_.CLOSE),
                    g = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var O = n(7572);
                const S = r.instance,
                    k = {
                        DataTracker: i.Z,
                        ViewModel: O.Z,
                        ViewEventType: _,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: E,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => T(_.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => T(_.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            T(_.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), i) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                a = n.getBoundingClientRect(),
                                l = a.x,
                                c = a.y,
                                d = a.width,
                                u = a.height,
                                E = {
                                    x: p.O.view.pxToRem(l) + s.x,
                                    y: p.O.view.pxToRem(c) + s.y,
                                    width: p.O.view.pxToRem(d),
                                    height: p.O.view.pxToRem(u),
                                };
                            T(_.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: w(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, b);
                        },
                        handleViewEvent: T,
                        onBindingsReady: P,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(_.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(_.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(_.POP_OVER),
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
                        ClickOutsideManager: S,
                        SystemLocale: s,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = k;
            },
            6620: (e, t, n) => {
                var o = n(6179),
                    r = n.n(o);
                let i, s, a, _, l, c, d, u;
                var E, m, p, v, h;
                (((h = i || (i = {})).Items = 'items'),
                    (h.Equipment = 'equipment'),
                    (h.Xp = 'xp'),
                    (h.XpFactor = 'xpFactor'),
                    (h.Blueprints = 'blueprints'),
                    (h.BlueprintsAny = 'blueprintsAny'),
                    (h.Goodies = 'goodies'),
                    (h.Berths = 'berths'),
                    (h.Slots = 'slots'),
                    (h.Tokens = 'tokens'),
                    (h.CrewSkins = 'crewSkins'),
                    (h.CrewBooks = 'crewBooks'),
                    (h.Customizations = 'customizations'),
                    (h.CreditsFactor = 'creditsFactor'),
                    (h.Currency = 'currency'),
                    (h.TankmenXp = 'tankmenXP'),
                    (h.TankmenXpFactor = 'tankmenXPFactor'),
                    (h.FreeXpFactor = 'freeXPFactor'),
                    (h.BattleToken = 'battleToken'),
                    (h.PremiumUniversal = 'premium_universal'),
                    (h.Gold = 'gold'),
                    (h.Credits = 'credits'),
                    (h.Crystal = 'crystal'),
                    (h.FreeXp = 'freeXP'),
                    (h.Premium = 'premium'),
                    (h.PremiumPlus = 'premium_plus'),
                    (h.BattlePassPoints = 'battlePassPoints'),
                    (h.BattlePassSelectToken = 'battlePassSelectToken'),
                    (h.SelectableBonus = 'selectableBonus'),
                    (h.StyleProgressToken = 'styleProgressToken'),
                    (h.TmanToken = 'tmanToken'),
                    (h.NaturalCover = 'naturalCover'),
                    (h.BpCoin = 'bpcoin'),
                    (h.BattlaPassFinalAchievement = 'dossier_achievement'),
                    (h.BattleBadge = 'dossier_badge'),
                    (h.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                    (h.NewYearFillers = 'ny22Fillers'),
                    (h.NewYearInvoice = 'newYearInvoice'),
                    (h.NewYearToyFragments = 'ny22ToyFragments'),
                    (h.NewYearSlot = 'newYearSlot'),
                    (h.BonusX5 = 'battle_bonus_x5'),
                    (h.CrewBonusX3 = 'crew_bonus_x3'),
                    (h.Vehicles = 'vehicles'),
                    (h.EpicSelectToken = 'epicSelectToken'),
                    (h.CollectionItem = 'collectionItem'),
                    (h.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                    (h.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                    (h.BattleBoosterGift = 'battleBooster_gift'),
                    (h.CosmicLootboxSilver = 'lootBoxToken'),
                    (h.CosmicLootboxCommon = 'cosmic_2024_2'),
                    (h.Branch = 'branch'),
                    (h.VehicleSelect = 'vehicleSelect'),
                    (h.StyleProgress = 'styleProgress'),
                    (h.ParagonsUnlocks = 'paragonsUnlocks'),
                    (h.LootBoxToken = 'lootBoxToken'),
                    (h.GoldenTicket = 'birthday2025_golden_ticket'),
                    (h.PostStamp = 'giftsystem_4_stamp'),
                    (h.Quests = 'quests'),
                    (h.ArmoryCoin = 'armory_coin'),
                    (h.PremiumPlusUniversal = 'premium_plus_universal'),
                    (h.DogTagType = 'dogTagComponents'),
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
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(s || (s = {})),
                    ((v = a || (a = {})).Big = 'big'),
                    (v.Small = 'small'),
                    (v.Mini = 'mini'),
                    (v.S600x450 = 's600x450'),
                    (v.S400x300 = 's400x300'),
                    (v.S296x222 = 's296x222'),
                    (v.S232x174 = 's232x174'),
                    (v.S180x135 = 's180x135'),
                    (v.S128x100 = 's128x100'),
                    (v.S80x80 = 's80x80'),
                    (v.S48x48 = 's48x48'),
                    ((p = _ || (_ = {})).MULTI = 'multi'),
                    (p.CURRENCY = 'currency'),
                    (p.PREMIUM_PLUS = 'premium_plus'),
                    (p.NUMBER = 'number'),
                    (p.STRING = 'string'),
                    ((m = l || (l = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (m.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (m.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (m.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (m.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (m.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (m.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (m.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (m.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (m.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((c || (c = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((E = d || (d = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (E.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (E.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (E.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (E.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (E.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (E.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (E.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (E.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (E.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (E.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (E.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (E.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(u || (u = {})));
                var w = n(4179);
                class P extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? w.B3.GOLD : w.B3.INTEGRAL;
                        const t = w.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                let T, b, g, O, S, R, k, f, y;
                var M, C, A;
                ((P.defaultProps = { format: 'integral' }),
                    i.Items,
                    i.Equipment,
                    i.Xp,
                    i.XpFactor,
                    i.Blueprints,
                    i.BlueprintsAny,
                    i.Goodies,
                    i.Berths,
                    i.Slots,
                    i.Tokens,
                    i.CrewSkins,
                    i.CrewBooks,
                    i.Customizations,
                    i.CreditsFactor,
                    i.TankmenXp,
                    i.TankmenXpFactor,
                    i.FreeXpFactor,
                    i.BattleToken,
                    i.PremiumUniversal,
                    i.NaturalCover,
                    i.BpCoin,
                    i.BattlePassSelectToken,
                    i.BattlaPassFinalAchievement,
                    i.BattleBadge,
                    i.BonusX5,
                    i.CrewBonusX3,
                    i.NewYearFillers,
                    i.NewYearInvoice,
                    i.EpicSelectToken,
                    i.Comp7TokenWeeklyReward,
                    i.Comp7TokenCouponReward,
                    i.BattleBoosterGift,
                    i.CosmicLootboxCommon,
                    i.CosmicLootboxSilver,
                    i.SelectableBonus,
                    i.GoldenTicket,
                    i.PostStamp,
                    i.PremiumPlusUniversal,
                    i.Gold,
                    i.Credits,
                    i.Crystal,
                    i.FreeXp,
                    i.BattlePassPoints,
                    i.PremiumPlus,
                    i.Premium,
                    (function (e) {
                        ((e.s16 = '16'),
                            (e.s32 = '32'),
                            (e.s48 = '48'),
                            (e.s66 = '66'),
                            (e.s80 = '80'),
                            (e.s116 = '116'),
                            (e.s296 = '296'),
                            (e.s360 = '360'),
                            (e.s400 = '400'),
                            (e.s600 = '600'));
                    })(T || (T = {})),
                    ((A = b || (b = {})).Active = 'active'),
                    (A.Paused = 'paused'),
                    (A.Completed = 'completed'),
                    (A.NotStarted = 'notStarted'),
                    (A.Disabled = 'disabled'),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(g || (g = {})),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(O || (O = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(S || (S = {})),
                    ((C = R || (R = {})).AwaitSeason = 'awaitSeason'),
                    (C.Bought = 'bought'),
                    (C.Free = 'free'),
                    (C.Completed = 'completed'),
                    (C.CompletedRightNow = 'completedRightNow'),
                    (C.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (C.NoVehiclesBase = 'noVehiclesBase'),
                    (C.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(k || (k = {})),
                    ((M = f || (f = {})).style = 'style'),
                    (M.tankman = 'tankman'),
                    (M.vehicle = 'vehicle'),
                    (M.mixed = 'mixed'),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(y || (y = {})),
                    f.style,
                    f.tankman);
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (_ = 0; _ < deferred.length; _++) {
                    for (var [t, n, o] = deferred[_], i = !0, s = 0; s < t.length; s++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
                        deferred.splice(_--, 1);
                        var a = n();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var _ = deferred.length; _ > 0 && deferred[_ - 1][2] > o; _--) deferred[_] = deferred[_ - 1];
            deferred[_] = [t, n, o];
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
        (() => {
            var e = { 251: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, s, a] = n,
                        _ = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in s) __webpack_require__.o(s, o) && (__webpack_require__.m[o] = s[o]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (t && t(n); _ < i.length; _++)
                        ((r = i[_]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6620));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
