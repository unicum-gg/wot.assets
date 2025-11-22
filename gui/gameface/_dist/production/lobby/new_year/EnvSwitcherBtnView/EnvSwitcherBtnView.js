(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t), n.d(t, { mouse: () => s, onResize: () => i }));
                var o = n(2472),
                    r = n(1176);
                const i = (0, o.E)('clientResized'),
                    a = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') },
                    s = (function () {
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
                                            s = a[t]((e) => n([e, 'outside']));
                                        function c(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, c),
                                            o(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(i, c),
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
                        graphicsQuality: () => a,
                    }));
                var o = n(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
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
                        addPreloadTexture: () => s,
                        children: () => o,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => T,
                        getScale: () => m,
                        getSize: () => u,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => O,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => p,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => M,
                    }));
                var o = n(3722),
                    r = n(6112),
                    i = n(6538),
                    a = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function l(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function w(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(r.W).reduce(
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
                    M = Promise.all([
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
                                a = (function (e, t) {
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
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
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
                n.d(t, { B0: () => c, wU: () => P, ry: () => b, Eu: () => f, SW: () => y, P3: () => T });
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
                var d;
                (((d = c || (c = {}))[(d.UNDEFINED = 0)] = 'UNDEFINED'),
                    (d[(d.TOOLTIP = 1)] = 'TOOLTIP'),
                    (d[(d.POP_OVER = 2)] = 'POP_OVER'),
                    (d[(d.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (d[(d.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (d[(d.MOVE = 16)] = 'MOVE'),
                    (d[(d.CLOSE = 32)] = 'CLOSE'),
                    (d[(d.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    v = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var w = n(5521),
                    E = n(3138);
                const m = ['args'];
                function h(e, t, n, o, r, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        var i = e.apply(t, n);
                                        function a(e) {
                                            h(i, o, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, o, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, t) => {
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
                                })(t, m);
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
                    O = () => g(c.CLOSE),
                    y = () => g(c.POP_OVER, { on: !1 }),
                    T = (e, t, n, o, r = R.invalid('resId'), i) => {
                        const a = E.O.view.getViewGlobalPosition(),
                            s = n.getBoundingClientRect(),
                            d = s.x,
                            l = s.y,
                            _ = s.width,
                            u = s.height,
                            v = {
                                x: E.O.view.pxToRem(d) + a.x,
                                y: E.O.view.pxToRem(l) + a.y,
                                width: E.O.view.pxToRem(_),
                                height: E.O.view.pxToRem(u),
                            };
                        g(c.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: p(v),
                            on: !0,
                            args: i,
                        });
                    },
                    P = () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                    k = (e, t) => {
                        e.keyCode === w.n.ESCAPE && t();
                    };
                var M = n(7572);
                const S = r.instance,
                    C = {
                        DataTracker: i.Z,
                        ViewModel: M.Z,
                        ViewEventType: c,
                        NumberFormatType: l,
                        RealFormatType: _,
                        TimeFormatType: u,
                        DateFormatType: v,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => g(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: O,
                        sendClosePopOverEvent: y,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            g(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: T,
                        addEscapeListener: (e) => {
                            const t = (t) => k(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            k(e, O);
                        },
                        handleViewEvent: g,
                        onBindingsReady: b,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: P,
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
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = C;
            },
            4150: (e, t, n) => {
                var o = n(6179),
                    r = n.n(o),
                    i = n(493),
                    a = n.n(i),
                    s = n(6483),
                    c = n.n(s),
                    d = n(4179);
                const l = [
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
                function _(e) {
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
                const u = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    v = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            c = e.onClick,
                            d = e.ignoreShowDelay,
                            v = void 0 !== d && d,
                            w = e.ignoreMouseClick,
                            E = void 0 !== w && w,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            f = e.targetId,
                            g = void 0 === f ? 0 : f,
                            O = e.onShow,
                            y = e.onHide,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, l);
                        const P = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, o.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            o = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (o = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: o }
                                        );
                                    })().resId,
                                [g],
                            ),
                            M = (0, o.useCallback)(() => {
                                (P.current.isVisible && P.current.timeoutId) ||
                                    (u(n, h, { isMouseEvent: !0, on: !0, arguments: _(r) }, k),
                                    O && O(),
                                    (P.current.isVisible = !0));
                            }, [n, h, r, k, O]),
                            S = (0, o.useCallback)(() => {
                                if (P.current.isVisible || P.current.timeoutId) {
                                    const e = P.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (P.current.timeoutId = 0)),
                                        u(n, h, { on: !1 }, k),
                                        P.current.isVisible && y && y(),
                                        (P.current.isVisible = !1));
                                }
                            }, [n, h, k, y]),
                            C = (0, o.useCallback)((e) => {
                                P.current.isVisible &&
                                    ((P.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (P.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(P.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = P.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', C, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', C, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === b && S();
                            }, [b, S]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ),
                            b
                                ? (0, o.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((L = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((P.current.timeoutId = window.setTimeout(M, v ? 100 : 400)),
                                                          i && i(e),
                                                          L && L(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (S(), null == a || a(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === E && S(), null == c || c(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === E && S(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          T,
                                      ),
                                  )
                                : t
                        );
                        var L;
                    },
                    w = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const m = R.views.common.tooltip_window.simple_tooltip_content,
                    h = (e) => {
                        let t = e.children,
                            n = e.body,
                            i = e.header,
                            a = e.note,
                            s = e.alert,
                            c = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, w);
                        const l = (0, o.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: i, note: a, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, i, a, c]);
                        return r().createElement(
                            v,
                            E(
                                {
                                    contentId:
                                        ((_ = null == c ? void 0 : c.hasHtmlContent),
                                        _ ? m.SimpleTooltipHtmlContent('resId') : m.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                d,
                            ),
                            t,
                        );
                        var _;
                    };
                var p = n(3138);
                const b = (e) => {
                    (0, o.useEffect)(e, []);
                };
                function f(e) {
                    engine.call('PlaySound', e);
                }
                const g = {
                        playHighlight() {
                            f('highlight');
                        },
                        playClick() {
                            f('play');
                        },
                        playYes() {
                            f('yes1');
                        },
                    },
                    O = {
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
                var y;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(y || (y = {}));
                const T = ['__left', '__right', '__top', '__bottom'],
                    P =
                        ((0, o.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: i = {} }, a) => {
                                const s = (0, o.useRef)(null),
                                    l = (0, o.useRef)(null),
                                    _ = (0, o.useRef)(null),
                                    u = (0, o.useState)(window.decorator && window.decorator.directionType),
                                    v = u[0],
                                    w = u[1],
                                    E = (0, o.useCallback)(() => {
                                        (g.playClick(), p.O.view.sendEvent.close());
                                    }, []),
                                    m = (0, o.useCallback)(() => {
                                        g.playHighlight();
                                    }, []),
                                    f = c()(O.arrow, O[`arrow${T[v]}`]);
                                b(
                                    () => (
                                        p.O.client.events.mouse.enableOutside(),
                                        p.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : p.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const y = (0, o.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === s.current || t === _.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const o = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = p.O.client.getMouseGlobalPosition(),
                                                    t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    n =
                                                        e.x < o.boundX ||
                                                        e.x > o.boundX + o.boundWidth ||
                                                        e.y > o.boundY + o.boundHeight ||
                                                        e.y < o.boundY;
                                                if (t && !n) return;
                                            }
                                            n ? n() : p.O.view.sendEvent.close('popover');
                                        },
                                        [s, _, n],
                                    ),
                                    P = (0, o.useCallback)(
                                        () => (
                                            p.O.view.freezeTextureBeforeResize(),
                                            ((e) => {
                                                let t,
                                                    n = null;
                                                return (
                                                    (n = requestAnimationFrame(() => {
                                                        n = requestAnimationFrame(() => {
                                                            ((n = null),
                                                                (t = (() => {
                                                                    if (l.current) {
                                                                        const e = l.current.scrollWidth,
                                                                            t = l.current.scrollHeight;
                                                                        (p.O.view.resize(e, t),
                                                                            w(window.decorator.directionType));
                                                                    }
                                                                })()));
                                                        });
                                                    })),
                                                    () => {
                                                        ('function' == typeof t && t(),
                                                            null !== n && cancelAnimationFrame(n));
                                                    }
                                                );
                                            })()
                                        ),
                                        [],
                                    );
                                return (
                                    (0, o.useImperativeHandle)(a, () => ({ updateSize: P })),
                                    b(() => {
                                        p.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, o.useEffect)(() => {
                                        document.addEventListener('mousedown', y, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((n, o) => {
                                                    e.then((e) => !t && n(e)).catch((e) => !t && o(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, d.Eu)());
                                        return (
                                            !t && e.promise.then(() => P()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', y));
                                            }
                                        );
                                    }, [P, y, t]),
                                    r().createElement(
                                        'div',
                                        { className: O.base, ref: l },
                                        r().createElement(
                                            'div',
                                            { className: O.decorator },
                                            r().createElement(
                                                'div',
                                                { className: O.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        h,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: O.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: m,
                                                            ref: _,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: f, style: i.arrow }),
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
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const M = (e) => {
                        let t = e.contentId,
                            n = e.decoratorId,
                            i = e.direction,
                            a = void 0 === i ? y.Top : i,
                            s = e.targetId,
                            c = e.args,
                            l = e.onClick,
                            _ = e.children,
                            u = e.isEnabled,
                            v = void 0 === u || u,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, P);
                        const E = (0, o.useRef)(null),
                            m = (0, o.useCallback)(() => {
                                if ((0, d.wU)()) return (0, d.SW)();
                                E.current && (0, d.P3)(t, a, E.current, n, s, c);
                            }, [t, a, c, n, s]);
                        return r().createElement(
                            'div',
                            k(
                                {
                                    ref: E,
                                    onClick:
                                        ((h = _.props.onClick),
                                        (e) => {
                                            v && (m(), l && l(e), h && h(e));
                                        }),
                                },
                                w,
                            ),
                            _,
                        );
                        var h;
                    },
                    S = R.strings.ny.environmentSwitcher.buttonTooltip,
                    C = (0, o.memo)(() => {
                        const e = (0, o.useState)(!1),
                            t = e[0],
                            n = e[1],
                            i = (0, o.useState)(!1),
                            a = i[0],
                            s = i[1];
                        return r().createElement(
                            'div',
                            { className: 'EnvironmentSwitcherButton_base_cf' },
                            r().createElement(
                                M,
                                {
                                    contentId: R.views.new_year.lobby.new_year.popovers.EnvSwitcherPopover('resId'),
                                    direction: y.Top,
                                },
                                r().createElement(
                                    v,
                                    {
                                        contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                        args: { header: S.title(), description: S.description() },
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'EnvironmentSwitcherButton_button_cc',
                                            onClick: () => {
                                                g.playClick();
                                            },
                                            onMouseUp: () => {
                                                s(!1);
                                            },
                                            onMouseDown: () => {
                                                s(!0);
                                            },
                                            onMouseLeave: () => {
                                                (n(!1), s(!1));
                                            },
                                            onMouseEnter: () => {
                                                (g.playHighlight(), n(!0));
                                            },
                                        },
                                        r().createElement('div', {
                                            className: c()(
                                                'EnvironmentSwitcherButton_buttonHover_4f',
                                                t && 'EnvironmentSwitcherButton_buttonHover__visible_e1',
                                            ),
                                        }),
                                        r().createElement('div', {
                                            className: c()(
                                                'EnvironmentSwitcherButton_buttonPressed_22',
                                                a && 'EnvironmentSwitcherButton_buttonPressed__visible_44',
                                            ),
                                        }),
                                        r().createElement('div', { className: 'EnvironmentSwitcherButton_icon_a3' }),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    a().render(r().createElement(C, null), document.getElementById('root'));
                });
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
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], i = !0, a = 0; a < t.length; a++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
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
        (__webpack_require__.j = 1405),
        (() => {
            var e = { 1405: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, a, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in a) __webpack_require__.o(a, o) && (__webpack_require__.m[o] = a[o]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        ((r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(d);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(4150));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
