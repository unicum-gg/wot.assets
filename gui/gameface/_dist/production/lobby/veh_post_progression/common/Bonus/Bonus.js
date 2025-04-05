(() => {
    'use strict';
    var __webpack_modules__ = {
            9768: (e, t, n) => {
                n.d(t, { O: () => oe });
                var i = {};
                n.r(i),
                    n.d(i, { mouse: () => E, off: () => u, on: () => _, onResize: () => d, onScaleUpdated: () => l });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => i,
                        getMouseGlobalPosition: () => g,
                        getSize: () => m,
                        graphicsQuality: () => b,
                        playSound: () => h,
                        setRTPC: () => w,
                    });
                var r = {};
                n.r(r), n.d(r, { getBgUrl: () => P, getTextureUrl: () => y });
                var a = {};
                function s(e) {
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
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => N,
                        arabic2roman: () => ee,
                        children: () => r,
                        displayStatus: () => R,
                        displayStatusIs: () => te,
                        events: () => L,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => U,
                        getDisplayStatus: () => Q,
                        getFontNames: () => J,
                        getScale: () => z,
                        getSize: () => K,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => Z,
                        isFocused: () => q,
                        pxToRem: () => j,
                        remToPx: () => H,
                        resize: () => B,
                        sendEvent: () => D,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ie,
                    });
                const d = s('clientResized'),
                    l = s('self.onScaleUpdated'),
                    _ = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    v = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
                    }
                    function i() {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${t}`,
                                        a = v[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        i(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(p).reduce((e, t) => ((e[t] = () => h(p[t])), e), {}),
                    T = { play: Object.assign({}, O, { sound: h }), setRTPC: w };
                var f = n(9690);
                function y(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function P(e, t, n) {
                    return `url(${y(e, t, n)})`;
                }
                const R = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const M = 2,
                    S = 16,
                    C = 32,
                    x = 64,
                    A = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, k);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    D = {
                        close(e) {
                            A('popover' === e ? M : C);
                        },
                        minimize() {
                            A(x);
                        },
                        move(e) {
                            A(S, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function U(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function V(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function K(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: H(t.x), y: H(t.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function j(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = f.cg,
                    te = Object.keys(R).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === R[t]), e), {}),
                    ne = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ie = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    oe = { view: a, client: o, sound: T };
            },
            5521: (e, t, n) => {
                let i, o;
                n.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            9690: (e, t, n) => {
                n.d(t, { cg: () => r });
                const i = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let n = o.length - 1; n >= 0; n--) for (; e >= o[n]; ) (t += i[n]), (e -= o[n]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var i = n(9768);
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
                        const r = i.O.view.addModelObserver(e, n, o);
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
                            const i = this._callbacks[n];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                o.__instance = void 0;
                const r = o;
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
                n.d(t, { ry: () => m });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== i)),
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
                i.__instance = void 0;
                const o = i;
                var r = n(1358);
                var a = n(8613);
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
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = n(5521),
                    v = n(9768);
                const E = ['args'];
                function h(e, t, n, i, o, r, a) {
                    try {
                        var s = e[r](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(i, o);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    m = (function () {
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
                                    return new Promise(function (i, o) {
                                        var r = e.apply(t, n);
                                        function a(e) {
                                            h(r, i, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(r, i, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    g = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, E);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = o),
                                              Object.entries(i).map(([e, t]) => {
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
                        var i;
                    },
                    b = () => g(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var O = n(7572);
                const T = o.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: O.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: l,
                        DateFormatType: _,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, o = R.invalid('resId'), r) => {
                            const a = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                d = c.x,
                                l = c.y,
                                _ = c.width,
                                u = c.height,
                                E = {
                                    x: v.O.view.pxToRem(d) + a.x,
                                    y: v.O.view.pxToRem(l) + a.y,
                                    width: v.O.view.pxToRem(_),
                                    height: v.O.view.pxToRem(u),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: w(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, b);
                        },
                        handleViewEvent: g,
                        onBindingsReady: m,
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
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const o = Object.prototype.toString.call(t[i]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < o.length; t++) n[i].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => i, cy: () => o });
                const i = {
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
            7363: (e) => {
                e.exports = React;
            },
        },
        __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.d = (e, t) => {
        for (var n in t)
            __webpack_require__.o(t, n) &&
                !__webpack_require__.o(e, n) &&
                Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        });
    var __webpack_exports__ = {};
    __webpack_require__(7363), __webpack_require__(9916);
})();
