(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, i) => {
                (i.r(t),
                    i.d(t, { mouse: () => _, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => o }));
                var r = i(2472),
                    n = i(1176);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${t}`,
                                        o = d[t]((e) => i([e, 'outside']));
                                    function s(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(i)),
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = i(527),
                    n = i(2493);
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
            1176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            2493: (e, t, i) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => n, G: () => r });
            },
            2472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => a });
                var r = i(5959),
                    n = i(514);
                const a = { view: i(7641), client: r, sound: n.ZP };
            },
            514: (e, t, i) => {
                i.d(t, { ZP: () => o });
                var r = i(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, r.playSound)(n[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function n(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                (i.r(t), i.d(t, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => n });
                var r = i(2472);
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
            7641: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => l,
                        arabic2roman: () => T,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => k,
                        events: () => o.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => x,
                        getFontNames: () => L,
                        getScale: () => w,
                        getSize: () => h,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => O,
                        isFocused: () => p,
                        pxToRem: () => E,
                        remToPx: () => f,
                        resize: () => g,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => R,
                    }));
                var r = i(9690),
                    n = i(3722),
                    a = i(6112),
                    o = i(6538),
                    s = i(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function _(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function c(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const L = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = r.cg,
                    k = Object.keys(a.W).reduce(
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
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => d });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]));
                                    return n;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    d = {
                        close(e) {
                            l('popover' === e ? n : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, i) => {
                let r, n;
                (i.d(t, { n: () => r }),
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
            9690: (e, t, i) => {
                i.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let i = n.length - 1; i >= 0; i--) for (; e >= n[i]; ) ((t += r[i]), (e -= n[i]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, i) => {
                i.d(t, { Z: () => a });
                var r = i(3138);
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
                    addCallback(e, t, i = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, i, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(a) : (this._views[i] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const r = this._callbacks[i];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
            9916: (e, t, i) => {
                i.d(t, { ry: () => w, Eu: () => E });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    i();
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
                        const i = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== r)),
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
                var a = i(1358);
                var o = i(8613);
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
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = i(5521),
                    h = i(3138);
                const g = ['args'];
                function m(e, t, i, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void i(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, n);
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
                                        i = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(t, i);
                                        function o(e) {
                                            m(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(a, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]));
                                    return n;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var r;
                    },
                    b = () => f(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var S = i(7572);
                const O = n.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: c,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, r, n = R.invalid('resId'), a) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                l = i.getBoundingClientRect(),
                                d = l.x,
                                _ = l.y,
                                c = l.width,
                                u = l.height,
                                g = {
                                    x: h.O.view.pxToRem(d) + o.x,
                                    y: h.O.view.pxToRem(_) + o.y,
                                    width: h.O.view.pxToRem(c),
                                    height: h.O.view.pxToRem(u),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(g),
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
                            p(e, b);
                        },
                        handleViewEvent: f,
                        onBindingsReady: w,
                        onLayoutReady: E,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        i[r] = [];
                                        for (let t = 0; t < n.length; t++) i[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[r] = e(t[r]))
                                            : (i[r] = t[r]);
                                }
                            return i;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, i) => {
                i.d(t, { Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
                    };
            },
            4894: (e, t, i) => {
                var r = i(7363),
                    n = i.n(r),
                    a = i(6483),
                    o = i.n(a);
                function s(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                var l = i(9916),
                    d = i(3138),
                    _ = i(5521);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function u(e = _.n.NONE, t = c, i = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _.n.NONE)
                            return (
                                window.addEventListener('keydown', r, i),
                                () => {
                                    window.removeEventListener('keydown', r, i);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && d.O.view.isEventHandled()) return;
                                (d.O.view.setEventHandled(), t(r), i && r.stopPropagation());
                            }
                        }
                    }, [t, e, i, n]);
                }
                const h = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
                var g;
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
                })(g || (g = {}));
                const m = d.O.client.getSize('rem'),
                    v = m.width,
                    w = m.height,
                    E = Object.assign(
                        { width: v, height: w },
                        (function (e, t, i) {
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
                                })(e, i),
                                n = (function (e, t) {
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
                                })(t, i),
                                a = Math.min(r, n);
                            return {
                                extraLarge: a === i.extraLarge.weight,
                                large: a === i.large.weight,
                                medium: a === i.medium.weight,
                                small: a === i.small.weight,
                                extraSmall: a === i.extraSmall.weight,
                                extraLargeWidth: r === i.extraLarge.weight,
                                largeWidth: r === i.large.weight,
                                mediumWidth: r === i.medium.weight,
                                smallWidth: r === i.small.weight,
                                extraSmallWidth: r === i.extraSmall.weight,
                                extraLargeHeight: n === i.extraLarge.weight,
                                largeHeight: n === i.large.weight,
                                mediumHeight: n === i.medium.weight,
                                smallHeight: n === i.small.weight,
                                extraSmallHeight: n === i.extraSmall.weight,
                            };
                        })(v, w, {
                            extraLarge: { weight: 4, width: 2560, height: 1440 },
                            large: { weight: 3, width: 1920, height: 1080 },
                            medium: { weight: 2, width: 1600, height: 900 },
                            small: { weight: 1, width: 1366, height: 768 },
                            extraSmall: { weight: 0, width: 1024, height: 768 },
                        }),
                    ),
                    f = (0, r.createContext)(E),
                    b = ['children'];
                const p = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]));
                            return n;
                        })(e, b);
                    const n = (0, r.useContext)(f),
                        a = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        l = n.small,
                        d = n.extraSmall,
                        _ = n.extraLargeWidth,
                        c = n.largeWidth,
                        u = n.mediumWidth,
                        g = n.smallWidth,
                        m = n.extraSmallWidth,
                        v = n.extraLargeHeight,
                        w = n.largeHeight,
                        E = n.mediumHeight,
                        p = n.smallHeight,
                        S = n.extraSmallHeight,
                        O = { extraLarge: v, large: w, medium: E, small: p, extraSmall: S };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && a) return t;
                        if (i.large && o) return t;
                        if (i.medium && s) return t;
                        if (i.small && l) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && _) return h(t, i, O);
                        if (i.largeWidth && c) return h(t, i, O);
                        if (i.mediumWidth && u) return h(t, i, O);
                        if (i.smallWidth && g) return h(t, i, O);
                        if (i.extraSmallWidth && m) return h(t, i, O);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && v) return t;
                            if (i.largeHeight && w) return t;
                            if (i.mediumHeight && E) return t;
                            if (i.smallHeight && p) return t;
                            if (i.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, r.memo)(p);
                const S = {
                    base: 'Slider_base_df',
                    base__carousel: 'Slider_base__carousel_de',
                    trackWrapper: 'Slider_trackWrapper_79',
                    track: 'Slider_track_4c',
                    base__withoutAnimation: 'Slider_base__withoutAnimation_14',
                    base__withoutPointer: 'Slider_base__withoutPointer_01',
                    slide: 'Slider_slide_8b',
                    slide__active: 'Slider_slide__active_97',
                    slide__carousel: 'Slider_slide__carousel_0c',
                    slide__beforeActive: 'Slider_slide__beforeActive_35',
                    slide__afterActive: 'Slider_slide__afterActive_1f',
                    slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_b1',
                    slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_cb',
                    slide__leftEdge: 'Slider_slide__leftEdge_d8',
                    slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_9f',
                    slide__rightEdge: 'Slider_slide__rightEdge_43',
                    slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_71',
                    prev: 'Slider_prev_11',
                    next: 'Slider_next_ae',
                    prev__disabled: 'Slider_prev__disabled_5a',
                    next__disabled: 'Slider_next__disabled_ac',
                    counter: 'Slider_counter_55',
                    base__large: 'Slider_base__large_75',
                    counterDivider: 'Slider_counterDivider_0f',
                    fadeOut: 'Slider_fadeOut_15',
                    fadeIn: 'Slider_fadeIn_2e',
                    fadeInWithScale: 'Slider_fadeInWithScale_67',
                    slideUp: 'Slider_slideUp_a7',
                    scale: 'Slider_scale_ce',
                    rotate: 'Slider_rotate_9f',
                };
                function O(e, t, i, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void i(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                function y(e) {
                    return function () {
                        var t = this,
                            i = arguments;
                        return new Promise(function (r, n) {
                            var a = e.apply(t, i);
                            function o(e) {
                                O(a, r, n, o, s, 'next', e);
                            }
                            function s(e) {
                                O(a, r, n, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const x = (0, r.createContext)({});
                (0, r.memo)(
                    ({
                        children: e,
                        arrowsTopPosition: t,
                        carouselMode: i,
                        disabled: a,
                        withCounter: d,
                        onPrevSlide: c,
                        onNextSlide: h,
                    }) => {
                        const g = (0, r.useRef)(null),
                            m = (0, r.useContext)(f),
                            v = m.medium || m.large || m.extraLarge,
                            w = (0, r.useState)(e),
                            E = w[0],
                            b = w[1],
                            p = (0, r.useState)(0),
                            O = p[0],
                            L = p[1],
                            T = (0, r.useState)(0),
                            k = T[0],
                            P = T[1],
                            R = (0, r.useState)(i ? 3 : 1),
                            C = R[0],
                            M = R[1],
                            W = (0, r.useState)(!1),
                            A = W[0],
                            N = W[1],
                            H = (0, r.useState)(!1),
                            D = H[0],
                            F = H[1],
                            U = E.length,
                            I = 1 === C && !i,
                            V = C === U && !i,
                            q = (0, r.useMemo)(() => ({ isAnimationDisabled: A }), [A]),
                            j = (function () {
                                var e = y(function* () {
                                    if (g && g.current) {
                                        (N(!0), yield (0, l.Eu)());
                                        const e = viewEnv.getScale();
                                        (L(g.current.offsetWidth / e),
                                            P(g.current.querySelector(`.${S.slide__active}`).offsetWidth / e),
                                            setTimeout(() => {
                                                N(!1);
                                            }, 100));
                                    }
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        ((0, r.useEffect)(() => {
                            const t = [];
                            (E.map((i) => {
                                const r = e.find((e) => e.key === i.key);
                                r && t.push(r);
                            }),
                                b(t));
                        }, [e]),
                            (0, r.useEffect)(() => {
                                if (i) {
                                    const e = E.concat();
                                    (e.unshift(...e.splice(-2, E.length)), b(e));
                                }
                            }, []),
                            (0, r.useEffect)(
                                () => (
                                    j(),
                                    window.addEventListener('resize', j),
                                    () => {
                                        window.removeEventListener('resize', j);
                                    }
                                ),
                                [],
                            ));
                        const G = (0, r.useCallback)(
                                y(function* () {
                                    I ||
                                        D ||
                                        a ||
                                        (i && F(!0),
                                        yield (0, l.Eu)(),
                                        c && c(),
                                        M(C - 1),
                                        i &&
                                            setTimeout(
                                                y(function* () {
                                                    N(!0);
                                                    const e = E.concat();
                                                    (e.unshift(e.pop()), b(e), M(C), yield (0, l.Eu)(), N(!1), F(!1));
                                                }),
                                                600,
                                            ),
                                        s('play'),
                                        s('bp_glide_01'));
                                }),
                                [C, M, I, i, c, E, D, a],
                            ),
                            K = (0, r.useCallback)(
                                y(function* () {
                                    V ||
                                        D ||
                                        a ||
                                        (i && F(!0),
                                        yield (0, l.Eu)(),
                                        h && h(),
                                        M(C + 1),
                                        i &&
                                            setTimeout(
                                                y(function* () {
                                                    N(!0);
                                                    const e = E.concat();
                                                    (e.push(e.shift()), b(e), M(C), yield (0, l.Eu)(), N(!1), F(!1));
                                                }),
                                                600,
                                            ),
                                        s('play'),
                                        s('bp_glide_01'));
                                }),
                                [C, M, V, i, h, E, D, a],
                            ),
                            z = () => s('highlight');
                        (u(_.n.ARROW_LEFT, G), u(_.n.ARROW_RIGHT, K));
                        const B = (0, r.useMemo)(() => (i ? { width: 'auto' } : { width: `${O}rem` }), [O, i]),
                            Y = (0, r.useMemo)(
                                () =>
                                    i
                                        ? { transform: `translateX(${-k * C + O / 2 + k / 2}rem)` }
                                        : { transform: `translateX(-${O * (C - 1)}rem)` },
                                [O, k, C, i],
                            ),
                            X = (0, r.useMemo)(() => (t ? { top: t } : {}), [t]),
                            Z = o()(
                                S.base,
                                v && S.base__large,
                                i && S.base__carousel,
                                i && v && S.base__carouselLarge,
                                A && S.base__withoutAnimation,
                                D && S.base__withoutPointer,
                            ),
                            $ = o()(S.prev, I && S.prev__disabled),
                            Q = o()(S.next, V && S.next__disabled);
                        return n().createElement(
                            'div',
                            { className: Z },
                            n().createElement('div', { className: $, onClick: G, onMouseEnter: z, style: X }),
                            n().createElement('div', { className: Q, onClick: K, onMouseEnter: z, style: X }),
                            d &&
                                n().createElement(
                                    'div',
                                    { className: S.counter },
                                    C,
                                    n().createElement('div', { className: S.counterDivider }, '/'),
                                    U,
                                ),
                            n().createElement(
                                'div',
                                { className: S.trackWrapper, ref: g },
                                n().createElement(
                                    'div',
                                    { className: S.track, style: Y },
                                    E.map((e, t) => {
                                        const r = t + 2 === C,
                                            a = t === C;
                                        let s;
                                        a ? (s = K) : r && (s = G);
                                        let l = o()(S.slide, v && S.slide__large, t + 1 === C && S.slide__active);
                                        return (
                                            i &&
                                                (l = o()(
                                                    S.slide,
                                                    S.slide__carousel,
                                                    v && S.slide__large,
                                                    t + 1 === C && S.slide__active,
                                                    r && S.slide__beforeActive,
                                                    r && v && S.slide__beforeActiveLarge,
                                                    a && S.slide__afterActive,
                                                    a && v && S.slide__afterActiveLarge,
                                                    t + 2 < C && S.slide__leftEdge,
                                                    t + 2 < C && v && S.slide__leftEdgeLarge,
                                                    t > C && S.slide__rightEdge,
                                                    t > C && v && S.slide__rightEdgeLarge,
                                                )),
                                            n().createElement(
                                                'div',
                                                { className: l, key: `slide-${t}`, style: B, onClick: s },
                                                n().createElement(x.Provider, { value: q }, e),
                                            )
                                        );
                                    }),
                                ),
                            ),
                        );
                    },
                );
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](i, i.exports, __webpack_require__), i.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, r) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, i, r] = deferred[l], a = !0, o = 0; o < t.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = i();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, i, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (__webpack_require__.j = 7146),
        (() => {
            var e = { 7146: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var r,
                        n,
                        [a, o, s] = i,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(i); l < a.length; l++)
                        ((n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(d);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(4894));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
