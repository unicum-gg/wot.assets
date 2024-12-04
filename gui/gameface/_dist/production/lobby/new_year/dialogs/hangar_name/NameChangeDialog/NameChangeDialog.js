(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => _, off: () => c, on: () => s, onResize: () => i, onScaleUpdated: () => r });
                var a = n(2472),
                    o = n(1176);
                const i = (0, a.E)('clientResized'),
                    r = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, o.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, o.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        r = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            o &&
                                                (r(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (o = !1));
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
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var a = n(527),
                    o = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function o(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => o, G: () => a });
            },
            2472: (e, t, n) => {
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var a = n(5959),
                    o = n(514);
                const i = { view: n(7641), client: a, sound: o.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => r });
                var a = n(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, a.playSound)(o[t])), e), {}),
                    r = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var a = n(2472);
                const o = {
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
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => c,
                        children: () => a,
                        displayStatus: () => o.W,
                        displayStatusIs: () => N,
                        events: () => i.U,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => C,
                        getFontNames: () => T,
                        getScale: () => b,
                        getSize: () => v,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => O,
                        isFocused: () => w,
                        pxToRem: () => E,
                        remToPx: () => f,
                        resize: () => m,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => P,
                    });
                var a = n(3722),
                    o = n(6112),
                    i = n(6538),
                    r = n(8566);
                const s = 15;
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function _(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const T = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    N = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
                        {},
                    ),
                    M = {
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
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const a = ['args'];
                const o = 2,
                    i = 16,
                    r = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? o : r);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let a, o;
                n.d(t, { n: () => a }),
                    (function (e) {
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(o || (o = {}));
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var a = n(3138);
                class o {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, o);
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                o.__instance = void 0;
                const i = o;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, n) => {
                n.d(t, { ry: () => b, Sy: () => f });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
                            this.removeMouseListener();
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
                const o = a;
                var i = n(1358);
                var r = n(8613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = n(5521),
                    v = n(3138);
                const m = ['args'];
                function h(e, t, n, a, o, i, r) {
                    try {
                        var s = e[i](r),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(a, o);
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
                                    return new Promise(function (a, o) {
                                        var i = e.apply(t, n);
                                        function r(e) {
                                            h(i, a, o, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, a, o, r, s, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, m);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = o),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    f = () => E(s.CLOSE),
                    g = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var w = n(7572);
                const y = o.instance,
                    O = {
                        DataTracker: i.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => E(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, o = R.invalid('resId'), i) => {
                            const r = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                _ = c.y,
                                d = c.width,
                                u = c.height,
                                m = {
                                    x: v.O.view.pxToRem(l) + r.x,
                                    y: v.O.view.pxToRem(_) + r.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(u),
                                };
                            E(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: p(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, f);
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
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const o = Object.prototype.toString.call(t[a]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < o.length; t++) n[a].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => a, cy: () => o });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            7533: (e, t, n) => {
                var a = n(6179),
                    o = n.n(a),
                    i = n(493),
                    r = n.n(i),
                    s = n(6483),
                    c = n.n(s);
                function l(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const _ = {
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
                let d, u;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(d || (d = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(u || (u = {}));
                const v = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: i,
                    disabled: r,
                    mixClass: s,
                    soundHover: u,
                    soundClick: v,
                    onMouseEnter: m,
                    onMouseMove: h,
                    onMouseDown: p,
                    onMouseUp: b,
                    onMouseLeave: E,
                    onClick: f,
                }) => {
                    const g = (0, a.useRef)(null),
                        w = (0, a.useState)(n),
                        y = w[0],
                        O = w[1],
                        k = (0, a.useState)(!1),
                        C = k[0],
                        T = k[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                y && null !== g.current && !g.current.contains(e.target) && O(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [y]),
                        (0, a.useEffect)(() => {
                            O(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: c()(
                                    _.base,
                                    _[`base__${i}`],
                                    r && _.base__disabled,
                                    t && _[`base__${t}`],
                                    y && _.base__focus,
                                    C && _.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== u && l(u), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    h && h(e);
                                },
                                onMouseUp: function (e) {
                                    r || (b && b(e), T(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== v && l(v),
                                        p && p(e),
                                        n && (r || (g.current && (g.current.focus(), O(!0)))),
                                        T(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (E && E(e), T(!1));
                                },
                                onClick: function (e) {
                                    r || (f && f(e));
                                },
                            },
                            i !== d.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: _.back }),
                                    o().createElement('span', { className: _.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: c()(_.state, _.state__default) },
                                o().createElement('span', { className: _.stateDisabled }),
                                o().createElement('span', { className: _.stateHighlightHover }),
                                o().createElement('span', { className: _.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: _.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                v.defaultProps = { type: d.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = v;
                let h;
                !(function (e) {
                    (e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z');
                })(h || (h = {}));
                const p = (e = {}) => {
                    (0, a.useEffect)(() => {
                        const t = (t) => {
                            if (!t.altKey && !t.ctrlKey && !t.shiftKey) {
                                const n = e[t.keyCode];
                                'function' == typeof n && n(t);
                            }
                        };
                        return (
                            window.addEventListener('keyup', t),
                            () => {
                                window.removeEventListener('keyup', t);
                            }
                        );
                    }, [e]);
                };
                var b = n(5521),
                    E = n(3403);
                let f;
                !(function (e) {
                    (e[(e.Ultra = 0)] = 'Ultra'),
                        (e[(e.Max = 1)] = 'Max'),
                        (e[(e.Height = 2)] = 'Height'),
                        (e[(e.Medium = 3)] = 'Medium'),
                        (e[(e.Low = 4)] = 'Low'),
                        (e[(e.Min = 5)] = 'Min'),
                        (e[(e.PerfLevelCount = 6)] = 'PerfLevelCount');
                })(f || (f = {}));
                const g = f.Ultra,
                    w = () => g >= f.Low,
                    y = '#fff',
                    O = '#8ab9ff',
                    k = {
                        base: 'HangarName_base_bd',
                        base__large: 'HangarName_base__large_a1',
                        description: 'HangarName_description_83',
                        base__dynamic: 'HangarName_base__dynamic_6f',
                        base__small: 'HangarName_base__small_b6',
                        base__middle: 'HangarName_base__middle_4f',
                        base__additionalEffects: 'HangarName_base__additionalEffects_3a',
                        titleBox: 'HangarName_titleBox_d7',
                        title: 'HangarName_title_70',
                        gradient: 'HangarName_gradient_9e',
                        gradient__title: 'HangarName_gradient__title_cb',
                        gradient__description: 'HangarName_gradient__description_de',
                        line: 'HangarName_line_9d',
                        svg: 'HangarName_svg_8f',
                        slideInFadeIn: 'HangarName_slideInFadeIn_51',
                        fadeOut: 'HangarName_fadeOut_12',
                        fadeIn: 'HangarName_fadeIn_d3',
                        fadeInWithScale: 'HangarName_fadeInWithScale_8e',
                        slideUp: 'HangarName_slideUp_cb',
                        scale: 'HangarName_scale_d2',
                        spin: 'HangarName_spin_c6',
                        blink: 'HangarName_blink_a8',
                        slideInNotification: 'HangarName_slideInNotification_a8',
                    };
                let C, T;
                !(function (e) {
                    (e.Small = 'small'),
                        (e.Middle = 'middle'),
                        (e.Large = 'large'),
                        (e.Dynamic = 'dynamic'),
                        (e.Custom = 'custom'),
                        (e.Default = 'small');
                })(C || (C = {})),
                    (function (e) {
                        (e.Simple = 'simple'), (e.Gradient = 'gradient'), (e.Default = 'simple');
                    })(T || (T = {}));
                const N = o().forwardRef(
                    (
                        {
                            title: e,
                            description: t,
                            size: n = C.Default,
                            type: a = T.Default,
                            hasLine: i = !0,
                            classNames: r,
                        },
                        s,
                    ) => {
                        const l = a === T.Gradient,
                            _ = !w(),
                            d = l ? O : y;
                        return o().createElement(
                            'div',
                            {
                                ref: s,
                                className: c()(
                                    k.base,
                                    k[`base__${a}`],
                                    k[`base__${n}`],
                                    _ && k.base__additionalEffects,
                                    null == r ? void 0 : r.base,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: c()(k.description, null == r ? void 0 : r.description) },
                                t,
                                _ &&
                                    l &&
                                    o().createElement(
                                        'div',
                                        { className: c()(k.gradient, k.gradient__description) },
                                        t,
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(k.titleBox, null == r ? void 0 : r.titleBox) },
                                o().createElement(
                                    'div',
                                    { className: c()(k.title, null == r ? void 0 : r.title) },
                                    e,
                                    _ &&
                                        l &&
                                        o().createElement('div', { className: c()(k.gradient, k.gradient__title) }, e),
                                ),
                                i &&
                                    o().createElement(
                                        'div',
                                        { className: c()(k.line, null == r ? void 0 : r.line) },
                                        o().createElement(
                                            'svg',
                                            {
                                                className: k.svg,
                                                viewBox: '0 0 302 7',
                                                fill: 'none',
                                                preserveAspectRatio: 'none meet',
                                            },
                                            o().createElement('path', {
                                                d: 'M301.384 1.01395C301.349 1.49453 300.953 1.86827 300.471 1.87651L2.76092 6.96329C1.55303 6.98393 0.556593 6.0184 0.539109 4.81042C0.521633 3.60338 1.48832 2.61399 2.69543 2.60348L300.443 0.00972535C300.99 0.00496359 301.425 0.468857 301.384 1.01395Z',
                                                fill: d,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    },
                );
                N.Size = C;
                const M = (e) => {
                        const t = R.strings.ny_hangar_name.title.$num(e);
                        return t || '';
                    },
                    P = (e) => {
                        const t = R.strings.ny_hangar_name.description.$num(e);
                        return t || '';
                    },
                    S = {
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
                    x = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function L() {
                    return (
                        (L = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        L.apply(null, arguments)
                    );
                }
                class A extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && l(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && l(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            i = e.side,
                            r = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            d = e.onMouseDown,
                            u = e.onMouseUp,
                            v =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(e, x)),
                            m = c()(S.base, S[`base__${r}`], S[`base__${i}`], null == s ? void 0 : s.base),
                            h = c()(S.icon, S[`icon__${r}`], S[`icon__${i}`], null == s ? void 0 : s.icon),
                            p = c()(S.glow, null == s ? void 0 : s.glow),
                            b = c()(S.caption, S[`caption__${r}`], null == s ? void 0 : s.caption),
                            E = c()(S.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            L(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(u),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                v,
                            ),
                            'info' !== r && o().createElement('div', { className: S.shine }),
                            o().createElement('div', { className: h }, o().createElement('div', { className: p })),
                            o().createElement('div', { className: b }, t),
                            a && o().createElement('div', { className: E }, a),
                        );
                    }
                }
                A.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var B = n(3138),
                    D = n(9916);
                const H = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function F(e = b.n.NONE, t = H, n = !1, o = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== b.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!o && B.O.view.isEventHandled()) return;
                                B.O.view.setEventHandled(), t(a), n && a.stopPropagation();
                            }
                        }
                    }, [t, e, n, o]);
                }
                function U() {
                    !(function (e = b.n.ESCAPE) {
                        F(e, D.Sy, !0);
                    })(b.n.ESCAPE);
                }
                const I = 'Base_base_c5',
                    G = 'Base_vignette_25',
                    j = 'Base_closeButton_5f',
                    V = 'Base_content_db',
                    W = ({ children: e }) => (
                        U(),
                        o().createElement(
                            'div',
                            { className: I, lang: R.strings.settings.LANGUAGE_CODE() },
                            o().createElement('div', { className: G }),
                            o().createElement(
                                'div',
                                { className: j },
                                o().createElement(A, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: D.Sy,
                                }),
                            ),
                            o().createElement('div', { className: V }, e),
                        )
                    );
                function K() {
                    return !1;
                }
                console.log;
                var q = n(9174);
                function z(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Y(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Y(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const $ = (e) => (0 === e ? window : window.subViews.get(e));
                const Z = ((e, t) => {
                        const n = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: r, children: s, mocks: c }) {
                                const l = (0, a.useRef)([]),
                                    _ = (n, a, o) => {
                                        var i;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = $,
                                                context: a = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const r = (e) => {
                                                    const o = n(t),
                                                        i = a.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${a}.${i}` : a,
                                                            c = B.O.view.addModelObserver(s, t, !0);
                                                        return o.set(c, n), e && n(r(i)), c;
                                                    },
                                                    readByPath: r,
                                                    createCallback: (e, t) => {
                                                        const n = r(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = r(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = z(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            s =
                                                'real' === n
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            _ = (e) => l.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            o = q.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : c(e),
                                                            o = q.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = c(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = q.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                r = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = q.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                r[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            u = { mode: n, model: d, externalModel: s, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(u) : t(u),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    u = (0, a.useState)(i),
                                    v = u[0],
                                    m = u[1],
                                    h = (0, a.useState)(() => _(i, r, c)),
                                    p = h[0],
                                    b = h[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? b(_(v, r, c)) : (d.current = !0);
                                    }, [c, v, r]),
                                    (0, a.useEffect)(() => {
                                        m(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    o().createElement(n.Provider, { value: p }, s)
                                );
                            },
                            () => (0, a.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), hangarName: e.object('hangarName') };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            accept: e.createCallbackNoArgs('onAccept'),
                            cancel: e.createCallbackNoArgs('onCancel'),
                        }),
                    ),
                    X = Z[0],
                    Q = Z[1],
                    J = 'App_base_9e',
                    ee = 'App_content_fb',
                    te = 'App_hangarName_fe',
                    ne = 'App_description_92',
                    ae = 'App_separator_bb',
                    oe = 'App_footer_f1',
                    ie = 'App_button_3a',
                    re = R.strings.ny.hangarNameDialog,
                    se = (0, E.Pi)(() => {
                        const e = Q(),
                            t = e.model,
                            n = e.controls,
                            a = t.root.get().hasChanges,
                            i = t.hangarName.get(),
                            r = i.title,
                            s = i.description;
                        return (
                            p({ [b.n.ENTER]: n.accept, [b.n.SPACE]: n.accept }),
                            o().createElement(
                                W,
                                null,
                                o().createElement(
                                    'div',
                                    { className: J, lang: R.strings.settings.LANGUAGE_CODE() },
                                    o().createElement(
                                        'div',
                                        { className: ee },
                                        o().createElement(N, {
                                            size: C.Large,
                                            title: M(r),
                                            description: P(s),
                                            classNames: { base: te },
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: ne },
                                            a ? re.descriptionNew() : re.descriptionOriginal(),
                                        ),
                                        o().createElement('div', { className: ae }),
                                        o().createElement(
                                            'div',
                                            { className: oe },
                                            o().createElement(
                                                m,
                                                { size: u.medium, mixClass: ie, onClick: () => n.accept() },
                                                re.accept(),
                                            ),
                                            o().createElement(
                                                m,
                                                {
                                                    type: d.secondary,
                                                    size: u.medium,
                                                    mixClass: ie,
                                                    onClick: () => n.cancel(),
                                                },
                                                re.cancel(),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    r().render(
                        o().createElement(X, null, o().createElement(se, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var o = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, a] = deferred[c], i = !0, r = 0; r < t.length; r++)
                        (!1 & a || o >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), a < o && (o = a));
                    if (i) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > a; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 3624),
        (() => {
            var e = { 3624: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        o,
                        [i, r, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        (o = i[c]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(7533));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
