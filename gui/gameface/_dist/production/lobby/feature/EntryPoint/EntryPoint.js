(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => i }));
                var r = n(2472),
                    o = n(1176);
                const a = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, o.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, o.R)(!0);
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
                                : (0, o.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const a = `mouse${t}`,
                                            i = d[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                o &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (o = !1));
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
                                e.enabled && (0, o.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, o.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    }));
                var r = n(527),
                    o = n(2493);
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
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function o(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => o, G: () => r });
            },
            2472: (e, t, n) => {
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
            3138: (e, t, n) => {
                n.d(t, { O: () => a });
                var r = n(5959),
                    o = n(514);
                const a = { view: n(7641), client: r, sound: o.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => i });
                var r = n(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, r.playSound)(o[t])), e), {}),
                    i = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => r }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var r = n(2472);
                const o = {
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
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        arabic2roman: () => C,
                        children: () => o,
                        displayStatus: () => a.W,
                        displayStatusIs: () => T,
                        events: () => i.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getFontNames: () => k,
                        getScale: () => v,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => O,
                        isFocused: () => w,
                        pxToRem: () => h,
                        remToPx: () => f,
                        resize: () => g,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => A,
                    }));
                var r = n(9690),
                    o = n(3722),
                    a = n(6112),
                    i = n(6538),
                    s = n(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
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
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
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
                function P() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const k = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    C = r.cg,
                    T = Object.keys(a.W).reduce(
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
                    A = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => a });
                const r = ['args'],
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    a = {
                        close(e) {
                            o('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            o(64);
                        },
                        move(e) {
                            o(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let r, o;
                (n.d(t, { n: () => r }),
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
                    })(o || (o = {})));
            },
            9690: (e, t, n) => {
                n.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let n = o.length - 1; n >= 0; n--) for (; e >= o[n]; ) ((t += r[n]), (e -= o[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(3138);
                class o {
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
                        return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, n, o);
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
                o.__instance = void 0;
                const a = o;
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
                n.d(t, { B0: () => s, ry: () => h });
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
                const o = r;
                var a = n(1358),
                    i = n(8613);
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    g = n(3138);
                const b = ['args'];
                function p(e, t, n, r, o, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, o);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (r, o) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            p(a, r, o, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(a, r, o, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, b);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = o),
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
                    E = () => f(s.CLOSE),
                    w = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = n(7572);
                const O = o.instance,
                    P = {
                        DataTracker: a.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: d,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), a) => {
                            const i = g.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                d = l.x,
                                c = l.y,
                                u = l.width,
                                _ = l.height,
                                m = {
                                    x: g.O.view.pxToRem(d) + i.x,
                                    y: g.O.view.pxToRem(c) + i.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(_),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, E);
                        },
                        handleViewEvent: f,
                        onBindingsReady: h,
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
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const o = Object.prototype.toString.call(t[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < o.length; t++) n[r].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = P;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => o });
                const r = {
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
            7704: (e, t, n) => {
                var r = n(7363),
                    o = n.n(r),
                    a = n(1533),
                    i = n.n(a),
                    s = n(6483),
                    l = n.n(s),
                    d = n(9916);
                const c = [
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
                function u(e) {
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
                const _ = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    m = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            d = e.ignoreShowDelay,
                            m = void 0 !== d && d,
                            g = e.ignoreMouseClick,
                            b = void 0 !== g && g,
                            p = e.decoratorId,
                            v = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            f = void 0 === h || h,
                            E = e.targetId,
                            w = void 0 === E ? 0 : E,
                            y = e.onShow,
                            O = e.onHide,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, c);
                        const S = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, r.useMemo)(
                                () =>
                                    w ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId'),
                                            o = '';
                                        var a;
                                        return (
                                            t &&
                                                ((o =
                                                    (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { callerUrl: o, caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [w],
                            ),
                            C = (0, r.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (_(n, v, { isMouseEvent: !0, on: !0, arguments: u(o) }, k),
                                    y && y(),
                                    (S.current.isVisible = !0));
                            }, [n, v, o, k, y]),
                            T = (0, r.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        _(n, v, { on: !1 }, k),
                                        S.current.isVisible && O && O(),
                                        (S.current.isVisible = !1));
                                }
                            }, [n, v, k, O]),
                            A = (0, r.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = S.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', A, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', A, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && T();
                            }, [f, T]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        (window.removeEventListener('mouseleave', T), T());
                                    }
                                ),
                                [T],
                            ),
                            f
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((M = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((S.current.timeoutId = window.setTimeout(C, m ? 100 : 400)),
                                                          a && a(e),
                                                          M && M(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (T(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === b && T(), null == l || l(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === b && T(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          P,
                                      ),
                                  )
                                : t
                        );
                        var M;
                    };
                function g(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                var b = n(3403);
                let p, v;
                (!(function (e) {
                    ((e[(e.Active = 0)] = 'Active'),
                        (e[(e.Forbidden = 1)] = 'Forbidden'),
                        (e[(e.Paused = 2)] = 'Paused'),
                        (e[(e.Completed = 3)] = 'Completed'),
                        (e[(e.NotStarted = 4)] = 'NotStarted'),
                        (e[(e.SoldOut = 5)] = 'SoldOut'));
                })(p || (p = {})),
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Forbidden = 'forbidden'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            (e.SoldOut = 'soldOut'));
                    })(v || (v = {})));
                const h = {
                    [p.Active]: v.Active,
                    [p.Forbidden]: v.Forbidden,
                    [p.Paused]: v.Paused,
                    [p.Completed]: v.Completed,
                    [p.NotStarted]: v.NotStarted,
                    [p.SoldOut]: v.SoldOut,
                };
                function f() {
                    return !1;
                }
                console.log;
                var E = n(9174),
                    w = n(3138);
                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const O = (e) => (0 === e ? window : window.subViews.get(e)),
                    P = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: i, mocks: s }) {
                                const l = (0, r.useRef)([]),
                                    d = (e, n, r) => {
                                        var o;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = O,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(e, t = 0) {
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
                                                const i = (e) => {
                                                    const o = n(t),
                                                        a = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = w.O.view.addModelObserver(s, t, !0);
                                                        return (o.set(l, n), e && n(i(a)), l);
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
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return y(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? y(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;

                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            i =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : i.readByPath(t),
                                            d = (e) => l.current.push(e),
                                            c = (({ observableModel: e }) =>
                                                Object.assign(
                                                    {},
                                                    e.primitives([
                                                        'progress',
                                                        'eventState',
                                                        'prevProgress',
                                                        'prevEventState',
                                                    ]),
                                                ))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            o = E.LO.box(r, { equals: f });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, E.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            o = E.LO.box(r, { equals: f });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, E.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = s(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = E.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, E.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                a = Object.entries(o),
                                                                s = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = E.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, E.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            u = { mode: e, model: c, externalModel: i, cleanup: d };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(u) : t(u),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    u = (0, r.useState)(e),
                                    _ = u[0],
                                    m = u[1],
                                    g = (0, r.useState)(() => d(e, a, s)),
                                    b = g[0],
                                    p = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? p(d(_, a, s)) : (c.current = !0);
                                    }, [s, _, a]),
                                    (0, r.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    o().createElement(n.Provider, { value: b }, i)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({ showProgression: e.createCallbackNoArgs('showProgression') })),
                    S = P[0],
                    k = P[1],
                    C = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let T, A;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(T || (T = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(A || (A = {})));
                const M = ({ size: e = T.Default }) => {
                        const t = l()(C.background, C[`background__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    L = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            ('function' == typeof n && n(), clearTimeout(r));
                        };
                    };
                let D, I;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(D || (D = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(I || (I = {})));
                const x = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    N = ({ size: e }) => {
                        const t = l()(x.base, x[`base__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    F = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                        }) => {
                            const c = s < a,
                                u = (0, r.useState)(I.Idle),
                                _ = u[0],
                                m = u[1],
                                g = _ === I.In,
                                b = _ === I.End,
                                p = _ === I.Idle,
                                v = (0, r.useCallback)(
                                    (e) => {
                                        (m(e), d && d(e));
                                    },
                                    [d],
                                );
                            ((0, r.useEffect)(() => {
                                if (p && !n)
                                    return L(() => {
                                        v(I.In);
                                    }, t);
                            }, [v, n, p, t]),
                                (0, r.useEffect)(() => {
                                    if (g)
                                        return L(() => {
                                            (l && l(), v(I.End));
                                        }, e + t);
                                }, [v, g, l, t, e]));
                            const h = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                E = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${c ? s : a}%` }),
                                    [a, c, s],
                                );
                            return b
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: E },
                                      o().createElement(
                                          'div',
                                          { style: p ? h : f, className: 'ProgressBarDeltaSimple_delta_99' },
                                          o().createElement(N, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    B = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    z = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: a, withoutBounce: i }) => {
                            const s = l()(
                                    B.base,
                                    B[`base__${e}`],
                                    n && B.base__disabled,
                                    a && B.base__finished,
                                    i && B.base__withoutBounce,
                                ),
                                d = !n && !a;
                            return o().createElement(
                                'div',
                                { className: s, style: r, ref: t },
                                o().createElement('div', { className: B.pattern }),
                                o().createElement('div', { className: B.gradient }),
                                d && o().createElement(N, { size: e }),
                            );
                        },
                    ),
                    j = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: d,
                            onEndAnimation: c,
                        }) => {
                            const u = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(z, {
                                    size: t,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    o().createElement(F, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: d,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    V = (e) => (e ? { left: 0 } : { right: 0 }),
                    U = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    G = (e) => ({ transitionDuration: `${e}ms` }),
                    $ = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: d,
                            onChangeAnimationState: c,
                            className: u,
                        }) => {
                            const _ = s < a,
                                m = (0, r.useState)(D.Idle),
                                g = m[0],
                                b = m[1],
                                p = g === D.End,
                                v = g === D.Idle,
                                h = g === D.Grow,
                                f = g === D.Shrink,
                                E = (0, r.useCallback)(
                                    (e) => {
                                        (b(e), c && c(e));
                                    },
                                    [c],
                                ),
                                w = (0, r.useCallback)(
                                    (e, t) =>
                                        L(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, r.useEffect)(() => {
                                if (!n)
                                    return v
                                        ? w(D.Grow, t)
                                        : h
                                          ? w(D.Shrink, e)
                                          : f
                                            ? w(D.End, e)
                                            : void (p && d && d());
                            }, [w, n, p, h, v, f, d, t, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, G(e), V(_)), [_, e]),
                                O = (0, r.useMemo)(() => Object.assign({ width: '0%' }, G(e), V(_)), [_, e]),
                                P = (0, r.useMemo)(() => Object.assign({ width: '0%' }, U(_, a), G(e)), [a, _, e]),
                                S = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, U(_, a), G(e)),
                                    [a, _, s, e],
                                );
                            if (p) return null;
                            const k = l()(
                                'ProgressBarDeltaGrow_base_7e',
                                u,
                                _ && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return o().createElement(
                                'div',
                                { style: v ? P : S, className: k },
                                o().createElement(
                                    'div',
                                    { style: f ? O : y, className: 'ProgressBarDeltaGrow_glow_68' },
                                    o().createElement(N, { size: i }),
                                ),
                            );
                        },
                    ),
                    W = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: d,
                            onChangeAnimationState: c,
                        }) => {
                            const u = e < n,
                                _ = (0, r.useState)(!1),
                                m = _[0],
                                g = _[1],
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (e === D.Shrink && g(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                v = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(z, {
                                    size: t,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: m ? v : p,
                                }),
                                n >= 0 &&
                                    o().createElement($, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: b,
                                        freezed: l.freezed,
                                        onEndAnimation: d,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    K = ['onComplete', 'onEndAnimation'];
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const H = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, K);
                        const i = (0, r.useState)(!1),
                            s = i[0],
                            l = i[1],
                            d = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== s && l(e), e && t && t(), n && n());
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case A.Simple:
                                return o().createElement(j, q({}, a, { onEndAnimation: d, isComplete: s }));
                            case A.Growing:
                                return o().createElement(W, q({}, a, { onEndAnimation: d, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Y = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: i }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && i && i();
                            }, [l, i]),
                            o().createElement(z, { size: e, disabled: a, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    X = ['onEndAnimation'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const Q = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                            return o;
                        })(e, X);
                    const a = (0, r.useRef)({}),
                        i = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        o().createElement(
                            H,
                            Z({}, n, {
                                onEndAnimation: i,
                                key: `${s}-${n.to}-${null == n ? void 0 : n.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: a,
                            additionalKey: i,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                            onComplete: c,
                        }) => {
                            if (a === t)
                                return o().createElement(Y, {
                                    key: `${a}-${t}-${i}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const u = {
                                from: a,
                                to: t,
                                size: e,
                                additionalKey: i,
                                lineRef: n,
                                disabled: r,
                                animationSettings: s,
                                onComplete: c,
                                onEndAnimation: l,
                                onChangeAnimationState: d,
                            };
                            return s.withStack
                                ? o().createElement(Q, u)
                                : o().createElement(H, J({ key: `${a}-${t}-${i}` }, u));
                        },
                    ),
                    te = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    ne = (e, t, n) => (n < e ? e : n > t ? t : n),
                    re = (e, t, n) => ('number' == typeof n ? (ne(0, t, n) / t) * 100 : e),
                    oe = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    ae = {
                        freezed: !1,
                        withStack: !1,
                        type: A.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ie = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = oe,
                            size: n = T.Default,
                            animationSettings: a = ae,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: d,
                            deltaFrom: c,
                            additionalKey: u,
                            lineRef: _,
                            onChangeAnimationState: m,
                            onEndAnimation: g,
                            onComplete: b,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, r.useMemo)(() => {
                                    const r = (ne(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: re(r, t, n) };
                                }, [n, t, e]))(d, e, c);
                            return o().createElement(
                                'div',
                                { className: l()(C.base, C[`base__${n}`]), style: te(t) },
                                !s && o().createElement(M, { size: n }),
                                o().createElement(ee, {
                                    size: n,
                                    lineRef: _,
                                    disabled: i,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    additionalKey: u,
                                    animationSettings: a,
                                    onEndAnimation: g,
                                    onChangeAnimationState: m,
                                    onComplete: b,
                                }),
                            );
                        },
                    ),
                    se = 'Progress_value_58',
                    le = ({ value: e, deltaFrom: t, className: n, hasAnimation: r }) =>
                        o().createElement(
                            'div',
                            { className: l()('Progress_base_d0', n) },
                            o().createElement(ie, { size: T.Small, value: e, deltaFrom: t }),
                            o().createElement(
                                'div',
                                { className: 'Progress_percent_e0' },
                                r
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: l()(se, 'Progress_value__crt_1b') },
                                              e,
                                              '%',
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: l()(se, 'Progress_value__pre_81') },
                                              t,
                                              '%',
                                          ),
                                      )
                                    : o().createElement('div', { className: se }, e, '%'),
                            ),
                        ),
                    de = {
                        base: 'Flag_base_a4',
                        base__active: 'Flag_base__active_0f',
                        base__notStarted: 'Flag_base__notStarted_1b',
                        base__soldOut: 'Flag_base__soldOut_1d',
                        base__forbidden: 'Flag_base__forbidden_05',
                        base__paused: 'Flag_base__paused_31',
                        base__completed: 'Flag_base__completed_03',
                        hover: 'Flag_hover_5d',
                        emblem: 'Flag_emblem_98',
                        state: 'Flag_state_f1',
                        state__show: 'Flag_state__show_60',
                        fadeInScale: 'Flag_fadeInScale_5f',
                        progress: 'Flag_progress_4c',
                    },
                    ce = ({
                        type: e,
                        progress: t,
                        deltaFrom: n,
                        hasProgressAnimation: r,
                        hasChangeStateAnimation: a,
                        className: i,
                    }) =>
                        o().createElement(
                            'div',
                            { className: l()(de.base, de[`base__${e}`], i) },
                            o().createElement('div', { className: de.hover }),
                            o().createElement('div', { className: de.emblem }),
                            e === v.Active
                                ? o().createElement(le, {
                                      value: t,
                                      deltaFrom: n,
                                      className: de.progress,
                                      hasAnimation: r,
                                  })
                                : o().createElement('div', { className: l()(de.state, a && de.state__show) }),
                        ),
                    ue = {
                        base: 'App_base_85',
                        flag: 'App_flag_f1',
                        flag__hide: 'App_flag__hide_47',
                        fadeOut: 'App_fadeOut_14',
                        flag__hideDelay: 'App_flag__hideDelay_71',
                        fadeIn: 'App_fadeIn_36',
                        fadeInWithScale: 'App_fadeInWithScale_d1',
                        slideUp: 'App_slideUp_e2',
                        slideUpCenter: 'App_slideUpCenter_74',
                        blink: 'App_blink_78',
                    },
                    _e = (0, b.Pi)(() => {
                        const e = k(),
                            t = e.model,
                            n = e.controls,
                            a = t.prevProgress.get(),
                            i = t.progress.get(),
                            s = t.prevEventState.get(),
                            d = t.eventState.get(),
                            c = (e) => h[e],
                            u = i !== a,
                            _ = d !== s,
                            b = c(d),
                            p = c(s),
                            f = u && p === v.Active,
                            E = f && b === v.Completed,
                            w = f ? 'hideDelay' : 'hide',
                            y = (0, r.useCallback)(() => {
                                g('highlight');
                            }, []);
                        return o().createElement(
                            m,
                            { contentId: R.views.resource_well.lobby.feature.tooltips.EntryPointTooltip('resId') },
                            o().createElement(
                                'div',
                                {
                                    className: ue.base,
                                    onClick: () => {
                                        b !== v.Paused && b !== v.NotStarted && (g('play'), n.showProgression());
                                    },
                                    onMouseEnter: y,
                                },
                                o().createElement(ce, {
                                    type: b,
                                    progress: i,
                                    deltaFrom: a,
                                    hasProgressAnimation: u,
                                    hasChangeStateAnimation: E,
                                    className: ue.flag,
                                }),
                                _ &&
                                    o().createElement(ce, {
                                        type: p,
                                        progress: i,
                                        deltaFrom: a,
                                        hasProgressAnimation: u,
                                        className: l()(ue.flag, ue[`flag__${w}`]),
                                    }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        o().createElement(S, null, o().createElement(_e, null)),
                        document.getElementById('root'),
                    );
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var o = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), r < o && (o = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 'lobby/feature/EntryPoint/EntryPoint'),
        (() => {
            var e = { 'lobby/feature/EntryPoint/EntryPoint': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        ((o = a[l]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return __webpack_require__.O(d);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/resource_well.vendors'], () =>
        __webpack_require__(7704),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
