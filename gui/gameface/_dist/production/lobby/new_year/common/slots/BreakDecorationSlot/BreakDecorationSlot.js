(() => {
    'use strict';
    var __webpack_modules__ = {
            7078: (e, t, n) => {
                (n(6179), n(2056));
            },
            957: (e, t, n) => {
                let o;
                (n(6179),
                    n(7078),
                    n(6373),
                    n(2056),
                    n(3415),
                    (function (e) {
                        ((e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple'));
                    })(o || (o = {})));
            },
            3415: (e, t, n) => {
                (n(6179), n(7078), n(6373), n(2056));
            },
            6373: (e, t, n) => {
                (n(2056), n(6179), R.views.common.tooltip_window.simple_tooltip_content);
            },
            2056: (e, t, n) => {
                (n(4179), n(6179));
            },
            527: (e, t, n) => {
                (n.r(t), n.d(t, { mouse: () => a, onResize: () => i }));
                var o = n(2472),
                    r = n(1176);
                const i = (0, o.E)('clientResized'),
                    _ = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') },
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
                                            a = _[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            o(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, s),
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
                        graphicsQuality: () => _,
                    }));
                var o = n(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
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
                        addModelObserver: () => l,
                        addPreloadTexture: () => a,
                        children: () => o,
                        displayStatus: () => r.W,
                        displayStatusIs: () => C,
                        events: () => i.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => E,
                        getSize: () => u,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => f,
                        isFocused: () => w,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => v,
                        sendEvent: () => _.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var o = n(3722),
                    r = n(6112),
                    i = n(6538),
                    _ = n(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function l(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const C = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    T = Promise.all([
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
                                _ = (function (e, t) {
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
                                      Object.assign({ __Type: n, type: e }, _, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, _));
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
            1641: (e, t, n) => {
                let o;
                (n.d(t, { t: () => o }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(o || (o = {})));
            },
            7727: (e, t, n) => {
                function o(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { G: () => o });
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
                n.d(t, { B3: () => l, Z5: () => _, ry: () => p });
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
                const _ = {
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
                let s;
                var c;
                (((c = s || (s = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    v = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    g = n(3138);
                const E = ['args'];
                function b(e, t, n, o, r, i, _) {
                    try {
                        var a = e[i](_),
                            s = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(s) : Promise.resolve(s).then(o, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        function _(e) {
                                            b(i, o, r, _, a, 'next', e);
                                        }
                                        function a(e) {
                                            b(i, o, r, _, a, 'throw', e);
                                        }
                                        _(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
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
                                })(t, E);
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
                    y = () => w(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var k = n(7572);
                const S = r.instance,
                    C = {
                        DataTracker: i.Z,
                        ViewModel: k.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: v,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: y,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), i) => {
                            const _ = g.O.view.getViewGlobalPosition(),
                                a = n.getBoundingClientRect(),
                                c = a.x,
                                l = a.y,
                                d = a.width,
                                u = a.height,
                                v = {
                                    x: g.O.view.pxToRem(c) + _.x,
                                    y: g.O.view.pxToRem(l) + _.y,
                                    width: g.O.view.pxToRem(d),
                                    height: g.O.view.pxToRem(u),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: h(v),
                                on: !0,
                                args: i,
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
                            f(e, y);
                        },
                        handleViewEvent: w,
                        onBindingsReady: p,
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
                        ClickOutsideManager: S,
                        SystemLocale: _,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = C;
            },
            440: (e, t, n) => {
                var o = n(6483),
                    r = n.n(o),
                    i = (n(957), n(7727)),
                    _ = n(6179),
                    a = n.n(_);
                (n(9377), n(8416));
                const s = {
                    base: 'ToySlot_base_48',
                    hint: 'ToySlot_hint_8c',
                    shadow: 'ToySlot_shadow_e0',
                    slot: 'ToySlot_slot_8b',
                    inner: 'ToySlot_inner_62',
                    slot__transitionEnabled: 'ToySlot_slot__transitionEnabled_2c',
                    notice: 'ToySlot_notice_fc',
                    plus: 'ToySlot_plus_11',
                    frame: 'ToySlot_frame_75',
                    image: 'ToySlot_image_d4',
                    hoverBlock: 'ToySlot_hoverBlock_d8',
                    selectedBlock: 'ToySlot_selectedBlock_c7',
                    slot__selected: 'ToySlot_slot__selected_a7',
                    particles: 'ToySlot_particles_5e',
                    selectedParticles: 'ToySlot_selectedParticles_6f',
                    animation: 'ToySlot_animation_32',
                };
                var c, l;
                (!(function (e) {
                    e.Default = 'default';
                })(c || (c = {})),
                    (function (e) {
                        e.Default = 'default';
                    })(l || (l = {})));
                const d = ({
                    slotId: e,
                    icon: t,
                    name: n,
                    rank: o,
                    onMouseLeave: d,
                    onMouseEnter: u,
                    Indicator: v,
                    isSelected: m,
                    folder: g = 'R.images.new_year.gui.maps.icons.newYear.decoration_types.craft',
                    size: E = l.Default,
                    style: b = c.Default,
                }) => {
                    const h = (0, _.useState)(!0),
                        p = h[0],
                        w = h[1],
                        y = { backgroundImage: t ? `url(${t})` : `url(${g}.${n})` },
                        f = {
                            backgroundImage: t
                                ? `url('R.images.new_year.gui.maps.icons.newYear.decoration_ranks.level_${o - 1}')`
                                : '',
                        };
                    return a().createElement(
                        'div',
                        {
                            className: r()(s.base, s[`base__${E}`], s[`base__${b}`]),
                            onMouseEnter: () => {
                                ((0, i.G)(R.sounds.hangar_newyear_slot_over()), null == u || u({ slotId: e }));
                            },
                            onMouseLeave: () => {
                                ((0, i.G)(R.sounds.hangar_newyear_slot_over_off()),
                                    w(!0),
                                    null == d || d({ slotId: e }));
                            },
                            onMouseDown: () => {
                                w(!1);
                            },
                            onClick: () => {
                                (0, i.G)(R.sounds.highlight_red_butt());
                            },
                        },
                        v && a().createElement(v, null),
                        a().createElement(
                            'div',
                            { className: r()(s.slot, p && s.slot__transitionEnabled, m && s.slot__selected) },
                            a().createElement(
                                'div',
                                { className: s.inner },
                                a().createElement(
                                    'div',
                                    { className: s.hoverBlock },
                                    a().createElement('div', { className: s.particles }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: s.selectedBlock },
                                    a().createElement('div', { className: s.selectedParticles }),
                                ),
                            ),
                            a().createElement('div', { className: s.image, style: y }),
                            a().createElement('div', { className: s.shadow }),
                            a().createElement('div', { className: s.rank, style: f }),
                        ),
                    );
                };
                var u;
                ((d.Style = c),
                    (d.Size = l),
                    (function (e) {
                        ((e[(e.Init = 0)] = 'Init'), (e[(e.Active = 1)] = 'Active'), (e[(e.Done = 2)] = 'Done'));
                    })(u || (u = {})));
            },
            9377: (e, t, n) => {
                var o = n(6483),
                    r = n.n(o),
                    i = n(1641),
                    _ = n(6179),
                    a = n.n(_);
                const s = {
                    base: 'DecorationSlot_base_f3',
                    base__large: 'DecorationSlot_base__large_b6',
                    base__huge: 'DecorationSlot_base__huge_f4',
                    base__locked: 'DecorationSlot_base__locked_cc',
                    base__defaultCursor: 'DecorationSlot_base__defaultCursor_ec',
                    border__hover: 'DecorationSlot_border__hover_ea',
                    border__hover__large: 'DecorationSlot_border__hover__large_f7',
                    border__hover__huge: 'DecorationSlot_border__hover__huge_ff',
                    border__hover__left: 'DecorationSlot_border__hover__left_98',
                    border__hover__right: 'DecorationSlot_border__hover__right_37',
                    border__multi: 'DecorationSlot_border__multi_a7',
                    selection: 'DecorationSlot_selection_a8',
                    selection__breaking: 'DecorationSlot_selection__breaking_a5',
                    selection__storage: 'DecorationSlot_selection__storage_79',
                    selection__large: 'DecorationSlot_selection__large_00',
                    selection__huge: 'DecorationSlot_selection__huge_af',
                    multiSelection: 'DecorationSlot_multiSelection_6e',
                    multiSelection__breaking: 'DecorationSlot_multiSelection__breaking_1a',
                    multiSelection__storage: 'DecorationSlot_multiSelection__storage_02',
                    multiSelection__popover: 'DecorationSlot_multiSelection__popover_ca',
                    iconCheck: 'DecorationSlot_iconCheck_3d',
                    iconCheck__pet: 'DecorationSlot_iconCheck__pet_7b',
                    image: 'DecorationSlot_image_4e',
                    image__selected: 'DecorationSlot_image__selected_85',
                    iconLocked: 'DecorationSlot_iconLocked_4d',
                    price: 'DecorationSlot_price_49',
                    iconPlay: 'DecorationSlot_iconPlay_a3',
                };
                var c = n(8416);
                let l, d, u;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(l || (l = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(d || (d = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(u || (u = {})));
                var v = n(4179);
                class m extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? v.B3.GOLD : v.B3.INTEGRAL;
                        const t = v.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                m.defaultProps = { format: 'integral' };
                const g = {
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
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    E = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: o,
                        isEnough: i,
                        value: _,
                        discountValue: s,
                        showPlus: c,
                        stockBackgroundName: l = u.Red,
                    }) => {
                        const v = r()(g.value, g[`value__${o}`], !i && g.value__notEnough),
                            E = r()(g.icon, g[`icon__${o}-${n}`]),
                            b = r()(g.stock, s && g.stock__indent, t && g.stock__interactive),
                            h = c && _ > 0 && '+',
                            p = r()(g.base, g[`base__${n}`]);
                        return a().createElement(
                            'span',
                            { className: p },
                            a().createElement(
                                'span',
                                { className: v },
                                h,
                                a().createElement(m, { value: _, format: o === d.gold ? 'gold' : 'integral' }),
                            ),
                            a().createElement('span', { className: E }),
                            e &&
                                a().createElement(
                                    'span',
                                    { className: b },
                                    a().createElement('span', {
                                        className: g.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(s) && s,
                                ),
                        );
                    };
                E.defaultProps = { isEnough: !0 };
                const b = a().memo(E);
                (0, _.memo)(
                    ({
                        id: e,
                        size: t = c.c.Medium,
                        variant: n = c.q.Storage,
                        isSelected: o = !1,
                        isMulti: u = !1,
                        isNotInteractive: v = !1,
                        isPet: m = !1,
                        model: g,
                        onSelected: E,
                        onMouseEnter: h,
                        onMouseLeave: p,
                    }) => {
                        const w = g.toyID,
                            y = g.imageName,
                            f = g.goldPrice,
                            k = g.count,
                            S = void 0 === e ? w : e,
                            C = (0, _.useRef)(!1),
                            P = t === c.c.Huge || t === c.c.Large ? 'large' : 'medium',
                            T = (0, _.useState)(!1),
                            O = T[0],
                            L = T[1],
                            M = k <= 0,
                            D = {
                                backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.toys.c_2025.${P}.${y})`,
                            },
                            R = r()(s.base, M && !m && s.base__locked, v && s.base__defaultCursor),
                            N = r()(s.border, u && s.border__multi, O && s.border__hover),
                            A = r()(s.iconCheck, s[`iconCheck__${n}`], m && s.iconCheck__pet),
                            x = r()(s.image, o && n === c.q.Breaking && s.image__selected);
                        return a().createElement(
                            'div',
                            {
                                className: R,
                                onMouseDown: (e) => {
                                    e.button === i.t.LEFT && (C.current = !0);
                                },
                                onMouseUp: (e) => {
                                    if (C.current) {
                                        const t = m || (!m && !M);
                                        (E && t && E(e, S), (C.current = !1));
                                    }
                                },
                                onMouseEnter: () => {
                                    (h && h(S), L(!0));
                                },
                                onMouseLeave: () => {
                                    (p && p(S), L(!1));
                                },
                            },
                            a().createElement(
                                'div',
                                { className: N },
                                a().createElement('div', { className: s.border__hover__left }),
                                a().createElement('div', { className: s.border__hover__right }),
                            ),
                            a().createElement('div', { className: x, style: D }),
                            o && a().createElement('div', { className: A }),
                            o && m && a().createElement('div', { className: s.iconPlay }),
                            !o && M && !m && a().createElement('div', { className: s.iconLocked }),
                            !o &&
                                M &&
                                m &&
                                a().createElement(
                                    'div',
                                    { className: s.price },
                                    a().createElement(b, { size: l.small, type: d.gold, value: f }),
                                ),
                        );
                    },
                );
            },
            8416: (e, t, n) => {
                let o, r;
                (n.d(t, { c: () => r, q: () => o }),
                    (function (e) {
                        ((e.Storage = 'storage'),
                            (e.Popover = 'popover'),
                            (e.Breaking = 'breaking'),
                            (e.Installation = 'installation'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.Medium = 'medium'), (e.Large = 'large'), (e.Huge = 'huge'));
                    })(r || (r = {})));
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, n, o] = deferred[s], i = !0, _ = 0; _ < t.length; _++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[_]))
                            ? t.splice(_--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
                        deferred.splice(s--, 1);
                        var a = n();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > o; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, n, o];
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
        (__webpack_require__.j = 7303),
        (() => {
            var e = { 7303: 0, 6584: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, _, a] = n,
                        s = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in _) __webpack_require__.o(_, o) && (__webpack_require__.m[o] = _[o]);
                        if (a) var c = a(__webpack_require__);
                    }
                    for (t && t(n); s < i.length; s++)
                        ((r = i[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(440));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
