(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => d, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => i }));
                var o = n(2472),
                    r = n(1176);
                const a = (0, o.E)('clientResized'),
                    i = (0, o.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') },
                    d = (function () {
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
                                            i = c[t]((e) => n([e, 'outside']));
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
                n.d(t, { O: () => a });
                var o = n(5959),
                    r = n(514);
                const a = { view: n(7641), client: o, sound: r.ZP };
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
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        arabic2roman: () => T,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => O,
                        getFontNames: () => P,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => C,
                        isFocused: () => E,
                        pxToRem: () => h,
                        remToPx: () => g,
                        resize: () => v,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => M,
                    }));
                var o = n(9690),
                    r = n(3722),
                    a = n(6112),
                    i = n(6538),
                    s = n(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function w(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function b() {
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
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function E() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const P = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = o.cg,
                    S = Object.keys(a.W).reduce(
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
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => a });
                const o = ['args'],
                    r = (e, t) => {
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
                    a = {
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
                n.d(t, { B0: () => s, ry: () => h, Eu: () => g });
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    v = n(3138);
                const w = ['args'];
                function b(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(o, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (o, r) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            b(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
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
                                })(t, w);
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
                    E = () => f(s.CLOSE),
                    y = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var C = n(7572);
                const k = r.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = v.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                m = {
                                    x: v.O.view.pxToRem(c) + i.x,
                                    y: v.O.view.pxToRem(d) + i.y,
                                    width: v.O.view.pxToRem(u),
                                    height: v.O.view.pxToRem(_),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(m),
                                on: !0,
                                args: a,
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
                            y(e, E);
                        },
                        handleViewEvent: f,
                        onBindingsReady: h,
                        onLayoutReady: g,
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
                        ClickOutsideManager: k,
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
            1191: (e, t, n) => {
                var o = n(6483),
                    r = n.n(o),
                    a = n(9916),
                    i = n(7363),
                    s = n.n(i);
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
                function c(e) {
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
                const d = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    u = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            u = e.onClick,
                            _ = e.ignoreShowDelay,
                            m = void 0 !== _ && _,
                            v = e.ignoreMouseClick,
                            w = void 0 !== v && v,
                            b = e.decoratorId,
                            p = void 0 === b ? 0 : b,
                            h = e.isEnabled,
                            g = void 0 === h || h,
                            f = e.targetId,
                            E = void 0 === f ? 0 : f,
                            y = e.onShow,
                            C = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, l);
                        const O = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, i.useMemo)(
                                () =>
                                    E ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            o = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            t &&
                                                ((r =
                                                    (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (o = window.subViews[n].id)),
                                            { callerUrl: r, caller: n, stack: t, resId: o }
                                        );
                                    })().resId,
                                [E],
                            ),
                            T = (0, i.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (d(n, p, { isMouseEvent: !0, on: !0, arguments: c(o) }, P),
                                    y && y(),
                                    (O.current.isVisible = !0));
                            }, [n, p, o, P, y]),
                            S = (0, i.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        d(n, p, { on: !1 }, P),
                                        O.current.isVisible && C && C(),
                                        (O.current.isVisible = !1));
                                }
                            }, [n, p, P, C]),
                            M = (0, i.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = O.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', M, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', M, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === g && S();
                            }, [g, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ),
                            g
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((N = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((O.current.timeoutId = window.setTimeout(T, m ? 100 : 400)),
                                                          r && r(e),
                                                          N && N(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (S(), null == a || a(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === w && S(), null == u || u(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === w && S(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          k,
                                      ),
                                  )
                                : t
                        );
                        var N;
                    },
                    _ = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const v = R.views.common.tooltip_window.simple_tooltip_content,
                    w = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            r = e.note,
                            a = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, _);
                        const d = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: o, note: r, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, n, o, r, l]);
                        return s().createElement(
                            u,
                            m(
                                {
                                    contentId:
                                        ((w = null == l ? void 0 : l.hasHtmlContent),
                                        w ? v.SimpleTooltipHtmlContent('resId') : v.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var w;
                    };
                var b = n(3138);
                const p = (e) => {
                    (0, i.useEffect)(e, []);
                };
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const g = {
                        playHighlight() {
                            h('highlight');
                        },
                        playClick() {
                            h('play');
                        },
                        playYes() {
                            h('yes1');
                        },
                    },
                    f = {
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
                var E;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(E || (E = {}));
                const y = ['__left', '__right', '__top', '__bottom'],
                    C = (0, i.forwardRef)(
                        ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: o = {} }, l) => {
                            const c = (0, i.useRef)(null),
                                d = (0, i.useRef)(null),
                                u = (0, i.useRef)(null),
                                _ = (0, i.useState)(window.decorator && window.decorator.directionType),
                                m = _[0],
                                v = _[1],
                                h = (0, i.useCallback)(() => {
                                    (g.playClick(), b.O.view.sendEvent.close());
                                }, []),
                                E = (0, i.useCallback)(() => {
                                    g.playHighlight();
                                }, []),
                                C = r()(f.arrow, f[`arrow${y[m]}`]);
                            p(
                                () => (
                                    b.O.client.events.mouse.enableOutside(),
                                    b.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : b.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const k = (0, i.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === c.current || t === u.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const o = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = b.O.client.getMouseGlobalPosition(),
                                                t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                                n =
                                                    e.x < o.boundX ||
                                                    e.x > o.boundX + o.boundWidth ||
                                                    e.y > o.boundY + o.boundHeight ||
                                                    e.y < o.boundY;
                                            if (t && !n) return;
                                        }
                                        n ? n() : b.O.view.sendEvent.close('popover');
                                    },
                                    [c, u, n],
                                ),
                                O = (function () {
                                    const e = (0, i.useRef)(0);
                                    var t;
                                    return (
                                        (t = () => {
                                            window.cancelAnimationFrame(e.current);
                                        }),
                                        (0, i.useEffect)(() => t, []),
                                        (0, i.useMemo)(
                                            () => ({
                                                run: (t) => {
                                                    (window.cancelAnimationFrame(e.current),
                                                        (e.current = window.requestAnimationFrame(() => {
                                                            e.current = window.requestAnimationFrame(() => {
                                                                (t(), (e.current = 0));
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
                                })(),
                                P = (0, i.useCallback)(() => {
                                    const e = d.current;
                                    if (e)
                                        return (
                                            b.O.view.freezeTextureBeforeResize(),
                                            O.run(() => {
                                                const t = e.scrollWidth,
                                                    n = e.scrollHeight;
                                                (b.O.view.resize(t, n), v(window.decorator.directionType));
                                            })
                                        );
                                }, [O]);
                            return (
                                (0, i.useImperativeHandle)(l, () => ({ updateSize: P })),
                                p(() => {
                                    b.O.view.setInputPaddingsRem(58);
                                }),
                                (0, i.useEffect)(() => {
                                    document.addEventListener('mousedown', k, { capture: !0 });
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
                                    })((0, a.Eu)());
                                    return (
                                        !t && e.promise.then(() => P()),
                                        () => {
                                            (e.cancel(), document.removeEventListener('mousedown', k));
                                        }
                                    );
                                }, [P, k, t]),
                                s().createElement(
                                    'div',
                                    { className: f.base, ref: d },
                                    s().createElement(
                                        'div',
                                        { className: f.decorator },
                                        s().createElement(
                                            'div',
                                            { className: f.content, ref: c },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                s().createElement(
                                                    w,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    s().createElement('div', {
                                                        className: f.closeBtn,
                                                        onClick: h,
                                                        onMouseEnter: E,
                                                        ref: u,
                                                    }),
                                                ),
                                        ),
                                        s().createElement('div', { className: C, style: o.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                var k = n(5521);
                const O = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function P(e = k.n.NONE, t = O, n = !1, o = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== k.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!o && b.O.view.isEventHandled()) return;
                                (b.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, o]);
                }
                var T = n(3403);
                const S = (e) => ({ backgroundImage: `url('${e}')` }),
                    M = () => {
                        const e = (0, i.useMemo)(() => S(R.images.gui.maps.icons.platoon.common.info()), []);
                        return s().createElement(
                            u,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            s().createElement('div', { className: 'BonusInfoIcon_bonusInfoIcon_3d', style: e }),
                        );
                    },
                    N = {
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
                let L, x;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(L || (L = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(x || (x = {})));
                const I = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: o,
                    disabled: a,
                    mixClass: l,
                    soundHover: c,
                    soundClick: d,
                    onMouseEnter: u,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: v,
                    onMouseLeave: w,
                    onClick: b,
                }) => {
                    const p = (0, i.useRef)(null),
                        g = (0, i.useState)(n),
                        f = g[0],
                        E = g[1],
                        y = (0, i.useState)(!1),
                        C = y[0],
                        k = y[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                f && null !== p.current && !p.current.contains(e.target) && E(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, i.useEffect)(() => {
                            E(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: r()(
                                    N.base,
                                    N[`base__${o}`],
                                    a && N.base__disabled,
                                    t && N[`base__${t}`],
                                    f && N.base__focus,
                                    C && N.base__highlightActive,
                                    l,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== c && h(c), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    a || (v && v(e), k(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== d && h(d),
                                        m && m(e),
                                        n && (a || (p.current && (p.current.focus(), E(!0)))),
                                        k(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (w && w(e), k(!1));
                                },
                                onClick: function (e) {
                                    a || (b && b(e));
                                },
                            },
                            o !== L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: N.back }),
                                    s().createElement('span', { className: N.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(N.state, N.state__default) },
                                s().createElement('span', { className: N.stateDisabled }),
                                s().createElement('span', { className: N.stateHighlightHover }),
                                s().createElement('span', { className: N.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: N.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                I.defaultProps = { type: L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const A = I;
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                (0, i.memo)(
                    ({
                        caption: e,
                        isEnabled: t,
                        description: n,
                        children: o,
                        cButtonProps: r,
                        onClick: a,
                        className: l,
                    }) => {
                        const c = (0, i.useCallback)(() => a(), [a]);
                        return s().createElement(
                            w,
                            { isEnabled: !0, header: e, body: n },
                            s().createElement(
                                'div',
                                { className: l },
                                s().createElement(
                                    A,
                                    V({ type: L.primary, size: x.small, onClick: c, disabled: !t }, r),
                                    o || e,
                                ),
                            ),
                        );
                    },
                );
                const B = /<link.*?>/g,
                    D = /\.\.\//g,
                    F = /<script.*?>/g,
                    j = 'default.css',
                    H = (e) => {
                        const t = e.match(D);
                        return t && t.join('');
                    },
                    U = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(j)) return n.href;
                        }
                        return '';
                    },
                    z = (e) => {
                        const t = U(),
                            n = H(t);
                        let o,
                            r = e;
                        for (; null !== (o = F.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(D, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    q = () => {
                        const e = [];
                        let t = !1;
                        const n = () => {
                            if (!e.length) return void (t = !1);
                            const o = e.shift();
                            o && ((t = !0), o().then(() => n()));
                        };
                        return {
                            add: (o) => {
                                (e.push(o), t || n());
                            },
                        };
                    },
                    G = 'SubView_base_df',
                    W = 'subViews.onChanged',
                    K = q(),
                    Y = (0, i.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: o }) => {
                        const l = (0, i.useState)(''),
                            c = l[0],
                            d = l[1],
                            u = (0, i.useMemo)(() => ({ __html: z(c) }), [c]),
                            _ = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            m = (0, i.useState)(!1),
                            v = m[0],
                            w = m[1],
                            b = (0, i.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (w(!0), engine.off(W, b), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            p = (0, i.useCallback)((e) => {
                                K.add(
                                    () =>
                                        new Promise((t) => {
                                            d(e);
                                            const n = new MutationObserver(() => {
                                                    (n.disconnect(), t());
                                                }),
                                                o = document.getElementById('root');
                                            o && n.observe(o, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, i.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o;
                                if ((o = n.split('/').pop()))
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${o}`, p),
                                        (({ path: e, name: t }) => {
                                            const n = new XMLHttpRequest();
                                            ((n.onreadystatechange = () => {
                                                4 === n.readyState &&
                                                    (200 === n.status
                                                        ? (0, a.Eu)().then(() => {
                                                              (console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      n.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${n.status} - can't get bundle`,
                                                          ));
                                            }),
                                                n.open('GET', e),
                                                n.send());
                                        })({ name: o, path: n }),
                                        () => {
                                            (o && window.subViews[o] && delete window.subViews[o],
                                                engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${o}`, p),
                                                console.info(`Sub view ${o} is destroyed: ${n}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(W, b);
                        }, [b, p, e, v]),
                            (0, i.useEffect)(
                                () => () => {
                                    c &&
                                        ((e) => {
                                            const t = H(U());
                                            let n;
                                            for (; null !== (n = B.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(D, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(c);
                                },
                                [c],
                            ));
                        const h = r()(G, o);
                        if (c) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = U(),
                                        o = H(n);
                                    for (; null !== (t = B.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(j) && o) {
                                            const t = o + e[1].replace(D, ''),
                                                n = document.createElement('link');
                                            ((n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n));
                                        }
                                    }
                                })(c),
                                n && n(e),
                                s().createElement('div', { className: h, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? s().createElement('div', { className: h }, s().createElement(t, null)) : null;
                    }),
                    $ = 'subViews.onChanged',
                    X = '.html',
                    Z = /^coui:\/\/gui\/.*/,
                    Q = q(),
                    J = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    },
                    ee = (0, i.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: n, children: o }) => {
                        const a = (0, i.useRef)(null),
                            l = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            c = (0, i.useState)(!1),
                            d = c[0],
                            u = c[1],
                            _ = (0, i.useState)(!0),
                            m = _[0],
                            v = _[1],
                            w = (0, i.useCallback)(
                                (e) => {
                                    e.includes(l) &&
                                        (u(!0), engine.off($, w), window.subViews.removeChildChangedCallback(l));
                                },
                                [l],
                            ),
                            b = (0, i.useCallback)(
                                (e) => {
                                    Q.add(
                                        () =>
                                            new Promise((n) => {
                                                const o = new MutationObserver(() => {
                                                    (v(!1), o.disconnect(), n());
                                                });
                                                if (a.current) {
                                                    const n = document.getElementById('root');
                                                    (n && n.setAttribute('id', 'bugSubView'),
                                                        a.current.setAttribute('id', 'root'));
                                                    const r = document.createElement('link');
                                                    ((r.href = e.replace(X, '.css')),
                                                        (r.rel = 'stylesheet'),
                                                        document.head.appendChild(r),
                                                        Z.test(e) &&
                                                            J(
                                                                e
                                                                    .split('/')
                                                                    .slice(0, -t)
                                                                    .concat(['vendors.js'])
                                                                    .join('/')
                                                                    .replace('/production/', '/production/lib/'),
                                                            ),
                                                        J(e.replace(X, '.js')),
                                                        o.observe(a.current, { childList: !0 }));
                                                }
                                            }),
                                    );
                                },
                                [t],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const t = window.subViews.get(e),
                                        n = t.path;
                                    let o = n.split('/').pop();
                                    if (o)
                                        return (
                                            (o = o.split('.')[0]),
                                            (window.subViews[o] = Object.assign({ id: e }, t)),
                                            b(n),
                                            () => {
                                                (o && window.subViews[o] && delete window.subViews[o],
                                                    engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    console.info(`Sub view ${o} is destroyed: ${n}`));
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on($, w);
                            }, [w, b, e, d]),
                            s().createElement(
                                'div',
                                { className: r()(G, n) },
                                m && o,
                                s().createElement('div', { ref: a }),
                            )
                        );
                    }),
                    te = ({
                        description: e,
                        backgroundImage: t,
                        hasXpBonus: n,
                        hasCreditBonus: o,
                        subViewComponent: a,
                    }) => {
                        const i = null != a ? a : Y;
                        return s().createElement(
                            'div',
                            { className: r()('Header_base_a7', n && o && 'Header_base__fullBonuses_2f'), style: S(t) },
                            s().createElement(
                                'div',
                                { className: 'Header_header_9f' },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(
                                        'span',
                                        { className: 'Header_label_af' },
                                        R.strings.platoon.squad(),
                                    ),
                                    s().createElement('span', { className: 'Header_description_41' }, e),
                                ),
                                (n || o) &&
                                    s().createElement(
                                        'div',
                                        { className: 'Header_bonusInfo_3f' },
                                        s().createElement(
                                            'div',
                                            { className: 'Header_bonusesIcon_7a' },
                                            n && s().createElement('div', { className: 'Header_xp_87' }),
                                            o && s().createElement('div', { className: 'Header_credits_82' }),
                                        ),
                                        s().createElement(M, null),
                                    ),
                            ),
                            s().createElement(i, { id: R.views.lobby.platoon.subViews.TiersLimit('resId') }),
                        );
                    };
                let ne;
                !(function (e) {
                    ((e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom'));
                })(ne || (ne = {}));
                const oe = [ne.right, ne.left],
                    re = ({ position: e }) => {
                        const t = String(R.images.gui.maps.icons.platoon.common.separator.$dyn(e));
                        return s().createElement(
                            'div',
                            {
                                className: r()(
                                    'Separator_base_98',
                                    oe.includes(e) ? 'Separator_base__vertical_9d' : 'Separator_base__horizontal_34',
                                ),
                            },
                            s().createElement('div', { className: 'Separator_image_5b', style: S(t) }),
                        );
                    },
                    ae = ['active', 'className', 'children', 'size'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                (0, i.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        a = e.size,
                        i = void 0 === a ? x.small : a,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, ae);
                    const c = r()('ToggleButton_base_b9', n, t && 'ToggleButton_base__active_68');
                    return s().createElement(
                        'div',
                        { className: c },
                        s().createElement(
                            A,
                            ie({}, l, { type: 'secondary', size: i }),
                            s().createElement('span', { className: 'ToggleButton_content_85' }, o),
                        ),
                        s().createElement('div', { className: 'ToggleButton_overlay_0a' }),
                        s().createElement('div', { className: 'ToggleButton_indicator_85' }),
                    );
                });
                const se = (0, i.createContext)(null),
                    le = () => {
                        const e = (0, i.useContext)(se);
                        return (
                            null !== e &&
                                console.info(
                                    'useDependencies hook was called with data from PlatoonDropdownDIContext.Provider',
                                ),
                            e
                        );
                    };
                function ce() {
                    return !1;
                }
                console.log;
                var de = n(9174);
                function ue(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const _e = (e) => (0 === e ? window : window.subViews.get(e)),
                    me = ((e, t) => {
                        const n = (0, i.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: o, children: r, mocks: a }) {
                                const l = (0, i.useRef)([]),
                                    c = (e, n, o) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = _e,
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
                                                            l = b.O.view.addModelObserver(s, t, !0);
                                                        return (r.set(l, n), e && n(i(a)), l);
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
                                                                                    return ue(e, t);
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
                                                                                          ? ue(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var o = 0;
                                                                        return function () {
                                                                            return o >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[o++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
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
                                                              null != (r = null == o ? void 0 : o.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == o ? void 0 : o.getter(t)) : i.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) =>
                                                Object.assign(
                                                    {},
                                                    e.primitives([
                                                        'type',
                                                        'battleType',
                                                        'isSettingsVisible',
                                                        'hasXpBonus',
                                                        'hasCreditsBonus',
                                                        'isRibbonVisible',
                                                        'backgroundImage',
                                                    ]),
                                                    {
                                                        findPlatoon: e.object('findPlatoon'),
                                                        createPlatoon: e.object('createPlatoon'),
                                                        createPlatoonForTwo: e.object('createPlatoonForTwo'),
                                                        createPlatoonForSeven: e.object('createPlatoonForSeven'),
                                                    },
                                                ))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const o = null != n ? n : s(t),
                                                            r = de.LO.box(o, { equals: ce });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, de.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const o = null != n ? n : s(t),
                                                            r = de.LO.box(o, { equals: ce });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, de.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const o = s(n);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = de.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, de.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = de.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, de.aD)((e) => {
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
                                                cleanup: c,
                                            }),
                                            u = { mode: e, model: d, externalModel: i, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && o ? o.controls(u) : t(u),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    d = (0, i.useRef)(!1),
                                    u = (0, i.useState)(e),
                                    _ = u[0],
                                    m = u[1],
                                    v = (0, i.useState)(() => c(e, o, a)),
                                    w = v[0],
                                    p = v[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        d.current ? p(c(_, o, a)) : (d.current = !0);
                                    }, [a, _, o]),
                                    (0, i.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (w.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [w],
                                    ),
                                    s().createElement(n.Provider, { value: w }, r)
                                );
                            },
                            () => (0, i.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        outside: e.createCallbackNoArgs('onOutsideClick'),
                        find: e.createCallbackNoArgs('findPlatoon.onClick'),
                        create: e.createCallbackNoArgs('createPlatoon.onClick'),
                        createForTwo: e.createCallbackNoArgs('createPlatoonForTwo.onClick'),
                        createForSeven: e.createCallbackNoArgs('createPlatoonForSeven.onClick'),
                    })),
                    ve = me[0],
                    we = me[1],
                    be = { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                    pe = {
                        base: 'FlatButton_base_bf',
                        background: 'FlatButton_background_5f',
                        base__disabled: 'FlatButton_base__disabled_c0',
                        image: 'FlatButton_image_ce',
                        text: 'FlatButton_text_90',
                        description: 'FlatButton_description_08',
                    };
                let he;
                !(function (e) {
                    ((e[(e.findPlayers = 0)] = 'findPlayers'),
                        (e[(e.createPlatoon = 1)] = 'createPlatoon'),
                        (e[(e.createPlatoonForTwo = 2)] = 'createPlatoonForTwo'),
                        (e[(e.createPlatoonForSeven = 3)] = 'createPlatoonForSeven'));
                })(he || (he = {}));
                const ge = ({
                    caption: e,
                    onClick: t,
                    isEnabled: n,
                    description: o,
                    type: a,
                    text: l,
                    tooltipCaption: c,
                }) => {
                    const d = a === he.createPlatoonForSeven || a === he.createPlatoonForTwo,
                        _ =
                            a === he.findPlayers
                                ? R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.find_players()
                                : R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.create_platoon(),
                        m = (0, i.useMemo)(() => S(_), [_]),
                        v = r()(pe.base, !n && pe.base__disabled),
                        w = (0, i.useCallback)(() => h('highlight'), []),
                        b = (0, i.useCallback)(() => {
                            (t(), h(a === he.findPlayers ? R.sounds.gui_platoon_2_find_players() : R.sounds.play()));
                        }, [t, a]),
                        p = (0, i.useCallback)(() => h(R.sounds.play()), []),
                        g = a === he.findPlayers && !n,
                        f = (0, i.useMemo)(
                            () =>
                                ((e, t, n, o = !0) =>
                                    e && o
                                        ? be
                                        : ((e, t, n) => ({
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              args: { header: e, body: t },
                                              isEnabled: n,
                                          }))(t, n, o))(g, c, o),
                            [g, c, o],
                        );
                    return s().createElement(
                        u,
                        f,
                        s().createElement(
                            'div',
                            { className: v, onClick: n ? b : void 0, onMouseDown: p, onMouseEnter: w },
                            s().createElement('div', { className: pe.background }),
                            s().createElement('div', { className: pe.image, style: m }),
                            s().createElement(
                                'div',
                                { className: pe.text },
                                s().createElement('span', { className: pe.caption }, e),
                                d && s().createElement('span', { className: pe.description }, l),
                            ),
                        ),
                    );
                };
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const Ee = (0, T.Pi)(() => {
                        const e = we(),
                            t = e.model,
                            n = e.controls,
                            o = t.findPlatoon.get(),
                            r = t.createPlatoon.get();
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(ge, fe({ type: he.findPlayers }, o, { onClick: n.find })),
                            s().createElement(ge, fe({ type: he.createPlatoon }, r, { onClick: n.create })),
                        );
                    }),
                    ye = ({ isVisible: e, storeSettingsHeight: t }) => {
                        var n;
                        const o = (0, i.useRef)(null),
                            a = le(),
                            l = null != (n = null == a ? void 0 : a.subViewComponent) ? n : Y;
                        return (
                            (0, i.useEffect)(
                                () =>
                                    ((e) => {
                                        let n,
                                            r = null;
                                        return (
                                            (r = requestAnimationFrame(() => {
                                                r = requestAnimationFrame(() => {
                                                    ((r = null), (n = void (o.current && t(o.current.scrollHeight))));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof n && n(), null !== r && cancelAnimationFrame(r));
                                            }
                                        );
                                    })(),
                                [o, t],
                            ),
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        'SettingsContainer_base_5d',
                                        e && 'SettingsContainer_base__shown_b7',
                                    ),
                                    ref: o,
                                },
                                s().createElement(re, { position: ne.top }),
                                s().createElement('div', {
                                    className: 'SettingsContainer_settingsHighlight_22',
                                    style: S(R.images.gui.maps.icons.platoon.platoon_dropdown.glow_arrow()),
                                }),
                                s().createElement(l, {
                                    id: R.views.lobby.platoon.subViews.SettingsContent('resId'),
                                    mixClass: 'SettingsContainer_settingsContainer_48',
                                }),
                                s().createElement(re, { position: ne.bottom }),
                            )
                        );
                    };
                window.decorator = { directionType: E.Bottom, isCloseBtnVisible: !1 };
                const Ce = (0, T.Pi)(() => {
                    var e;
                    const t = we(),
                        n = t.model,
                        o = t.controls,
                        r = n.isSettingsVisible.get(),
                        a = (0, i.useRef)(r),
                        l = (0, i.useRef)(null),
                        c = le(),
                        d = (0, i.useRef)(0),
                        u = (0, i.useCallback)((e) => {
                            d.current = e;
                        }, []);
                    (0, i.useEffect)(() => {
                        if (d.current && a.current !== r) {
                            a.current = r;
                            const e = b.O.view.getSize();
                            b.O.view.resize(e.width, e.height + d.current);
                        }
                        if (l.current) return l.current.updateSize();
                    }, [r]);
                    const _ = (0, i.useCallback)(() => {
                        (b.O.view.displayStatusIs.shown() || b.O.view.displayStatusIs.showing()) &&
                            (o.outside(), b.O.view.sendEvent.minimize(), b.O.view.setEventHandled());
                    }, [o]);
                    return (
                        P(k.n.ESCAPE, _),
                        s().createElement(
                            C,
                            { ref: l, disableAutoSizeUpdate: !0, onOutsideClick: _ },
                            s().createElement(
                                'div',
                                { className: 'App_base_79' },
                                s().createElement(te, {
                                    description: n.battleType.get(),
                                    backgroundImage: n.backgroundImage.get(),
                                    hasXpBonus: n.hasXpBonus.get(),
                                    hasCreditBonus: n.hasCreditsBonus.get(),
                                    subViewComponent: null == c ? void 0 : c.subViewComponent,
                                }),
                                s().createElement(ye, { isVisible: r, storeSettingsHeight: u }),
                                null != (e = null == c ? void 0 : c.flatButtonsComponent)
                                    ? e
                                    : s().createElement(Ee, null),
                            ),
                        )
                    );
                });
                var ke = n(1533),
                    Oe = n.n(ke);
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const Te = (0, T.Pi)(() => {
                        const e = we(),
                            t = e.model,
                            n = e.controls,
                            o = t.createPlatoonForTwo.get(),
                            r = t.createPlatoonForSeven.get();
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(ge, Pe({ type: he.createPlatoonForTwo }, o, { onClick: n.createForTwo })),
                            s().createElement(
                                ge,
                                Pe({ type: he.createPlatoonForSeven }, r, { onClick: n.createForSeven }),
                            ),
                        );
                    }),
                    Se = ({ children: e }) =>
                        s().createElement(
                            se.Provider,
                            {
                                value: {
                                    flatButtonsComponent: s().createElement(Te, null),
                                    subViewComponent: (e) => s().createElement(ee, e),
                                },
                            },
                            e,
                        );
                engine.whenReady.then(() => {
                    Oe().render(
                        s().createElement(Se, null, s().createElement(ve, null, s().createElement(Ce, null))),
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
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, o] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > o; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, o];
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
        (__webpack_require__.j = 'lobby/PlatoonDropdown/PlatoonDropdown'),
        (() => {
            var e = { 'lobby/PlatoonDropdown/PlatoonDropdown': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        ((r = a[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/comp7.vendors'], () => __webpack_require__(1191));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
