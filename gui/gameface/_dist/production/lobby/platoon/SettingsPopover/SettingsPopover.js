(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => re });
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => v, off: () => _, on: () => u, onResize: () => d, onScaleUpdated: () => l });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => p,
                        getSize: () => b,
                        graphicsQuality: () => E,
                        playSound: () => m,
                        setRTPC: () => h,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => T, getTextureUrl: () => k });
                var s = {};
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(s),
                    n.d(s, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => D,
                        arabic2roman: () => ee,
                        children: () => i,
                        displayStatus: () => C,
                        displayStatusIs: () => te,
                        events: () => P,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => Q,
                        getFontNames: () => J,
                        getScale: () => W,
                        getSize: () => B,
                        getViewGlobalPosition: () => H,
                        isEventHandled: () => $,
                        isFocused: () => Y,
                        pxToRem: () => z,
                        remToPx: () => G,
                        resize: () => U,
                        sendEvent: () => A,
                        setAnimateWindow: () => K,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => oe,
                    });
                const d = a('clientResized'),
                    l = a('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    w = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const v = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        s = w[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        o(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(i, a),
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function m(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(f).reduce((e, t) => ((e[t] = () => m(f[t])), e), {}),
                    y = { play: Object.assign({}, g, { sound: m }), setRTPC: h };
                var O = n(690);
                function k(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function T(e, t, n) {
                    return `url(${k(e, t, n)})`;
                }
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    S = ['args'];
                const R = 2,
                    M = 16,
                    L = 32,
                    V = 64,
                    x = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, S);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
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
                    A = {
                        close(e) {
                            x('popover' === e ? R : L);
                        },
                        minimize() {
                            x(V);
                        },
                        move(e) {
                            x(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function H(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: G(t.x), y: G(t.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function z(e) {
                    return viewEnv.pxToRem(e);
                }
                function G(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = O.cg,
                    te = Object.keys(C).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === C[t]), e), {}),
                    ne = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: s, client: r, sound: y };
            },
            521: (e, t, n) => {
                let o, r;
                n.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
                    })(r || (r = {}));
            },
            690: (e, t, n) => {
                n.d(t, { cg: () => i });
                const o = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) (t += o[n]), (e -= r[n]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var o = n(768);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (e, t, n) => {
                n.d(t, { B0: () => a, ry: () => b, Eu: () => p, Sy: () => f });
                class o {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return o.__instance || (o.__instance = new o()), o.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const r = o;
                var i = n(358);
                var s = n(613);
                let a;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(a || (a = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    w = n(768);
                const v = ['args'];
                function m(e, t, n, o, r, i, s) {
                    try {
                        var a = e[i](s),
                            c = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        function s(e) {
                                            m(i, o, r, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            m(i, o, r, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
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
                    f = () => E(a.CLOSE),
                    g = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var y = n(572);
                const O = r.instance,
                    k = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: a,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: l,
                        DateFormatType: u,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => E(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), i) => {
                            const s = w.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                d = c.x,
                                l = c.y,
                                u = c.width,
                                _ = c.height,
                                v = {
                                    x: w.O.view.pxToRem(d) + s.x,
                                    y: w.O.view.pxToRem(l) + s.y,
                                    width: w.O.view.pxToRem(u),
                                    height: w.O.view.pxToRem(_),
                                };
                            E(a.POP_OVER, {
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
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
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
                        ClickOutsideManager: O,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = k;
            },
            613: (e, t, n) => {
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
            489: (e, t, n) => {
                var o = n(483),
                    r = n.n(o);
                var i = n(916),
                    s = n(363),
                    a = n.n(s);
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
                function d(e) {
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
                const l = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: i.B0.TOOLTIP,
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
                            i = e.onMouseLeave,
                            a = e.onMouseDown,
                            u = e.onClick,
                            _ = e.ignoreShowDelay,
                            w = void 0 !== _ && _,
                            v = e.ignoreMouseClick,
                            m = void 0 !== v && v,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            p = e.isEnabled,
                            E = void 0 === p || p,
                            f = e.targetId,
                            g = void 0 === f ? 0 : f,
                            y = e.onShow,
                            O = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const T = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, s.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            o = R.invalid('resId'),
                                            r = '';
                                        var i;
                                        return (
                                            t &&
                                                ((r =
                                                    (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (o = window.subViews[n].id)),
                                            { callerUrl: r, caller: n, stack: t, resId: o }
                                        );
                                    })().resId,
                                [g],
                            ),
                            P = (0, s.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (l(n, b, { isMouseEvent: !0, on: !0, arguments: d(o) }, C),
                                    y && y(),
                                    (T.current.isVisible = !0));
                            }, [n, b, o, C, y]),
                            S = (0, s.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        l(n, b, { on: !1 }, C),
                                        T.current.isVisible && O && O(),
                                        (T.current.isVisible = !1);
                                }
                            }, [n, b, C, O]),
                            M = (0, s.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === E && S();
                            }, [E, S]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return E
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(P, w ? 100 : 400)),
                                                      r && r(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && S(), null == u || u(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && S(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      k,
                                  ),
                              )
                            : t;
                        var L;
                    },
                    _ = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const v = R.views.common.tooltip_window.simple_tooltip_content,
                    m = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            r = e.note,
                            i = e.alert,
                            c = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, _);
                        const l = (0, s.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: o, note: r, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, n, o, r, c]);
                        return a().createElement(
                            u,
                            w(
                                {
                                    contentId:
                                        ((m = null == c ? void 0 : c.hasHtmlContent),
                                        m ? v.SimpleTooltipHtmlContent('resId') : v.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                d,
                            ),
                            t,
                        );
                        var m;
                    };
                var h = n(768);
                const b = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function p(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const E = {
                        playHighlight() {
                            p('highlight');
                        },
                        playClick() {
                            p('play');
                        },
                        playYes() {
                            p('yes1');
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
                function g() {
                    const e = (0, s.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => t, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var y;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(y || (y = {}));
                const O = ['__left', '__right', '__top', '__bottom'],
                    k = (0, s.forwardRef)(
                        ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: o = {} }, c) => {
                            const d = (0, s.useRef)(null),
                                l = (0, s.useRef)(null),
                                u = (0, s.useRef)(null),
                                _ = (0, s.useState)(window.decorator && window.decorator.directionType),
                                w = _[0],
                                v = _[1],
                                p = (0, s.useCallback)(() => {
                                    E.playClick(), h.O.view.sendEvent.close();
                                }, []),
                                y = (0, s.useCallback)(() => {
                                    E.playHighlight();
                                }, []),
                                k = r()(f.arrow, f[`arrow${O[w]}`]);
                            b(
                                () => (
                                    h.O.client.events.mouse.enableOutside(),
                                    h.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : h.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const T = (0, s.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === d.current || t === u.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const o = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = h.O.client.getMouseGlobalPosition(),
                                                t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                                n =
                                                    e.x < o.boundX ||
                                                    e.x > o.boundX + o.boundWidth ||
                                                    e.y > o.boundY + o.boundHeight ||
                                                    e.y < o.boundY;
                                            if (t && !n) return;
                                        }
                                        n ? n() : h.O.view.sendEvent.close('popover');
                                    },
                                    [d, u, n],
                                ),
                                C = g(),
                                P = (0, s.useCallback)(() => {
                                    const e = l.current;
                                    if (e)
                                        return (
                                            h.O.view.freezeTextureBeforeResize(),
                                            C.run(() => {
                                                const t = e.scrollWidth,
                                                    n = e.scrollHeight;
                                                h.O.view.resize(t, n), v(window.decorator.directionType);
                                            })
                                        );
                                }, [C]);
                            return (
                                (0, s.useImperativeHandle)(c, () => ({ updateSize: P })),
                                b(() => {
                                    h.O.view.setInputPaddingsRem(58);
                                }),
                                (0, s.useEffect)(() => {
                                    document.addEventListener('mousedown', T, { capture: !0 });
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
                                    })((0, i.Eu)());
                                    return (
                                        !t && e.promise.then(() => P()),
                                        () => {
                                            e.cancel(), document.removeEventListener('mousedown', T);
                                        }
                                    );
                                }, [P, T, t]),
                                a().createElement(
                                    'div',
                                    { className: f.base, ref: l },
                                    a().createElement(
                                        'div',
                                        { className: f.decorator },
                                        a().createElement(
                                            'div',
                                            { className: f.content, ref: d },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                a().createElement(
                                                    m,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    a().createElement('div', {
                                                        className: f.closeBtn,
                                                        onClick: p,
                                                        onMouseEnter: y,
                                                        ref: u,
                                                    }),
                                                ),
                                        ),
                                        a().createElement('div', { className: k, style: o.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                var T = n(521);
                const C = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function P(e = T.n.NONE, t = C, n = !1, o = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== T.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!o && h.O.view.isEventHandled()) return;
                                h.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, o]);
                }
                function S() {
                    !(function (e = T.n.ESCAPE) {
                        P(e, i.Sy, !0);
                    })(T.n.ESCAPE);
                }
                const M = /<link.*?>/g,
                    L = /\.\.\//g,
                    V = /<script.*?>/g,
                    x = 'default.css',
                    A = (e) => {
                        const t = e.match(L);
                        return t && t.join('');
                    },
                    D = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(x)) return n.href;
                        }
                        return '';
                    },
                    I = (e) => {
                        const t = D(),
                            n = A(t);
                        let o,
                            r = e;
                        for (; null !== (o = V.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(L, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    N = () => {
                        const e = [];
                        let t = !1;
                        const n = () => {
                            if (!e.length) return void (t = !1);
                            const o = e.shift();
                            o && ((t = !0), o().then(() => n()));
                        };
                        return {
                            add: (o) => {
                                e.push(o), t || n();
                            },
                        };
                    },
                    F = 'SubView_base_df',
                    j = 'subViews.onChanged',
                    B = N(),
                    U = (0, s.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: o }) => {
                        const c = (0, s.useState)(''),
                            d = c[0],
                            l = c[1],
                            u = (0, s.useMemo)(() => ({ __html: I(d) }), [d]),
                            _ = (0, s.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            w = (0, s.useState)(!1),
                            v = w[0],
                            m = w[1],
                            h = (0, s.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (m(!0), engine.off(j, h), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            b = (0, s.useCallback)((e) => {
                                B.add(
                                    () =>
                                        new Promise((t) => {
                                            l(e);
                                            const n = new MutationObserver(() => {
                                                    n.disconnect(), t();
                                                }),
                                                o = document.getElementById('root');
                                            o && n.observe(o, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, s.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o;
                                if ((o = n.split('/').pop()))
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${o}`, b),
                                        (({ path: e, name: t }) => {
                                            const n = new XMLHttpRequest();
                                            (n.onreadystatechange = () => {
                                                4 === n.readyState &&
                                                    (200 === n.status
                                                        ? (0, i.Eu)().then(() => {
                                                              console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      n.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${n.status} - can't get bundle`,
                                                          ));
                                            }),
                                                n.open('GET', e),
                                                n.send();
                                        })({ name: o, path: n }),
                                        () => {
                                            o && window.subViews[o] && delete window.subViews[o],
                                                engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${o}`, b),
                                                console.info(`Sub view ${o} is destroyed: ${n}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(j, h);
                        }, [h, b, e, v]),
                            (0, s.useEffect)(
                                () => () => {
                                    d &&
                                        ((e) => {
                                            const t = A(D());
                                            let n;
                                            for (; null !== (n = M.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(L, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(d);
                                },
                                [d],
                            );
                        const p = r()(F, o);
                        if (d) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = D(),
                                        o = A(n);
                                    for (; null !== (t = M.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(x) && o) {
                                            const t = o + e[1].replace(L, ''),
                                                n = document.createElement('link');
                                            (n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n);
                                        }
                                    }
                                })(d),
                                n && n(e),
                                a().createElement('div', { className: p, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? a().createElement('div', { className: p }, a().createElement(t, null)) : null;
                    }),
                    H = 'subViews.onChanged',
                    q = '.html',
                    W = /^coui:\/\/gui\/.*/,
                    z = N(),
                    G = (e) => {
                        const t = document.createElement('script');
                        (t.src = e), (t.defer = !0), document.head.appendChild(t);
                    };
                (0, s.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: n, children: o }) => {
                    const i = (0, s.useRef)(null),
                        c = (0, s.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        d = (0, s.useState)(!1),
                        l = d[0],
                        u = d[1],
                        _ = (0, s.useState)(!0),
                        w = _[0],
                        v = _[1],
                        m = (0, s.useCallback)(
                            (e) => {
                                e.includes(c) &&
                                    (u(!0), engine.off(H, m), window.subViews.removeChildChangedCallback(c));
                            },
                            [c],
                        ),
                        h = (0, s.useCallback)(
                            (e) => {
                                z.add(
                                    () =>
                                        new Promise((n) => {
                                            const o = new MutationObserver(() => {
                                                v(!1), o.disconnect(), n();
                                            });
                                            if (i.current) {
                                                const n = document.getElementById('root');
                                                n && n.setAttribute('id', 'bugSubView'),
                                                    i.current.setAttribute('id', 'root');
                                                const r = document.createElement('link');
                                                (r.href = e.replace(q, '.css')),
                                                    (r.rel = 'stylesheet'),
                                                    document.head.appendChild(r),
                                                    W.test(e) &&
                                                        G(
                                                            e
                                                                .split('/')
                                                                .slice(0, -t)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    G(e.replace(q, '.js')),
                                                    o.observe(i.current, { childList: !0 });
                                            }
                                        }),
                                );
                            },
                            [t],
                        );
                    return (
                        (0, s.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o = n.split('/').pop();
                                if (o)
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        h(n),
                                        () => {
                                            o && window.subViews[o] && delete window.subViews[o],
                                                engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${o} is destroyed: ${n}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(H, m);
                        }, [m, h, e, l]),
                        a().createElement('div', { className: r()(F, n) }, w && o, a().createElement('div', { ref: i }))
                    );
                });
                var K = n(533),
                    Y = n.n(K);
                const X = 'SettingsPopover_base_e3',
                    $ = () => {
                        const e = (0, s.useRef)(null),
                            t = (0, s.useCallback)(() => {
                                if (e.current) {
                                    const t = requestAnimationFrame(() => {
                                        e.current && e.current.updateSize();
                                    });
                                    return () => cancelAnimationFrame(t);
                                }
                            }, []);
                        return (
                            S(),
                            a().createElement(
                                k,
                                { ref: e, disableAutoSizeUpdate: !0 },
                                a().createElement(
                                    'div',
                                    { className: X },
                                    a().createElement(U, {
                                        id: R.views.lobby.platoon.subViews.SettingsContent('resId'),
                                        onLoadCallback: t,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    Y().render(a().createElement($, null), document.getElementById('root'));
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
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], i = !0, s = 0; s < t.length; s++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
                        deferred.splice(c--, 1);
                        var a = n();
                        void 0 !== a && (e = a);
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
        (__webpack_require__.j = 108),
        (() => {
            var e = { 108: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [i, s, a] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in s) __webpack_require__.o(s, o) && (__webpack_require__.m[o] = s[o]);
                        if (a) var d = a(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        (r = i[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(d);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(489));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
