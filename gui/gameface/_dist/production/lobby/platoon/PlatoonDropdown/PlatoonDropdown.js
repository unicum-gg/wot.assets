(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => re });
                var o = {};
                (n.r(o),
                    n.d(o, { mouse: () => b, off: () => _, on: () => u, onResize: () => l, onScaleUpdated: () => d }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => h,
                        getSize: () => p,
                        graphicsQuality: () => f,
                        playSound: () => w,
                        setRTPC: () => v,
                    }));
                var a = {};
                (n.r(a), n.d(a, { getBgUrl: () => O, getTextureUrl: () => k }));
                var i = {};
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
                (n.r(i),
                    n.d(i, {
                        addModelObserver: () => D,
                        addPreloadTexture: () => A,
                        arabic2roman: () => ee,
                        children: () => a,
                        displayStatus: () => T,
                        displayStatusIs: () => te,
                        events: () => P,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Q,
                        getFontNames: () => J,
                        getScale: () => q,
                        getSize: () => j,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => X,
                        isFocused: () => Y,
                        pxToRem: () => G,
                        remToPx: () => W,
                        resize: () => H,
                        sendEvent: () => I,
                        setAnimateWindow: () => K,
                        setEventHandled: () => $,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => oe,
                    }));
                const l = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const b = (function () {
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
                                    const a = `mouse${t}`,
                                        i = m[t]((e) => n([e, 'outside']));
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
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function v(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    E = Object.keys(g).reduce((e, t) => ((e[t] = () => w(g[t])), e), {}),
                    y = { play: Object.assign({}, E, { sound: w }), setRTPC: v };
                var C = n(690);
                function k(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function O(e, t, n) {
                    return `url(${k(e, t, n)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
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
                    S = ['args'];
                const R = 2,
                    M = 16,
                    N = 32,
                    L = 64,
                    x = (e, t) => {
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
                                })(t, S);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    I = {
                        close(e) {
                            x('popover' === e ? R : N);
                        },
                        minimize() {
                            x(L);
                        },
                        move(e) {
                            x(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function A(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function D(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function U(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function $() {
                    return viewEnv.setEventHandled();
                }
                function X() {
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
                    ee = C.cg,
                    te = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
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
                    re = { view: i, client: r, sound: y };
            },
            521: (e, t, n) => {
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
            690: (e, t, n) => {
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
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(768);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (e, t, n) => {
                n.d(t, { B0: () => s, ry: () => p, Eu: () => h });
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
                var a = n(358);
                var i = n(613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(768);
                const b = ['args'];
                function w(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            w(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            w(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
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
                                })(t, b);
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
                    g = () => f(s.CLOSE),
                    E = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var y = n(572);
                const C = r.instance,
                    k = {
                        DataTracker: a.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                d = c.y,
                                u = c.width,
                                _ = c.height,
                                b = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(d) + i.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: v(b),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => E(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            E(e, g);
                        },
                        handleViewEvent: f,
                        onBindingsReady: p,
                        onLayoutReady: h,
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
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
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
            822: (e, t, n) => {
                var o = n(363),
                    r = n.n(o),
                    a = n(533),
                    i = n.n(a),
                    s = n(483),
                    c = n.n(s);
                var l = n(916);
                const d = [
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
                const _ = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: l.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    m = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            c = e.onClick,
                            l = e.ignoreShowDelay,
                            m = void 0 !== l && l,
                            b = e.ignoreMouseClick,
                            w = void 0 !== b && b,
                            v = e.decoratorId,
                            p = void 0 === v ? 0 : v,
                            h = e.isEnabled,
                            f = void 0 === h || h,
                            g = e.targetId,
                            E = void 0 === g ? 0 : g,
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
                            })(e, d);
                        const O = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            T = (0, o.useMemo)(
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
                            P = (0, o.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (_(n, p, { isMouseEvent: !0, on: !0, arguments: u(r) }, T),
                                    y && y(),
                                    (O.current.isVisible = !0));
                            }, [n, p, r, T, y]),
                            S = (0, o.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        _(n, p, { on: !1 }, T),
                                        O.current.isVisible && C && C(),
                                        (O.current.isVisible = !1));
                                }
                            }, [n, p, T, C]),
                            M = (0, o.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const e = O.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', M, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', M, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return f
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((O.current.timeoutId = window.setTimeout(P, m ? 100 : 400)),
                                                      a && a(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === w && S(), null == c || c(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === w && S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      k,
                                  ),
                              )
                            : t;
                        var N;
                    },
                    b = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                    p = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            i = e.note,
                            s = e.alert,
                            c = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, b);
                        const d = (0, o.useMemo)(() => {
                            const e = Object.assign({}, c, { body: n, header: a, note: i, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, i, c]);
                        return r().createElement(
                            m,
                            w(
                                {
                                    contentId:
                                        ((u = null == c ? void 0 : c.hasHtmlContent),
                                        u ? v.SimpleTooltipHtmlContent('resId') : v.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                l,
                            ),
                            t,
                        );
                        var u;
                    };
                var h = n(768);
                const f = (e) => {
                    (0, o.useEffect)(e, []);
                };
                function g(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const E = {
                        playHighlight() {
                            g('highlight');
                        },
                        playClick() {
                            g('play');
                        },
                        playYes() {
                            g('yes1');
                        },
                    },
                    y = {
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
                function C() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
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
                }
                var k;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(k || (k = {}));
                const O = ['__left', '__right', '__top', '__bottom'],
                    T = (0, o.forwardRef)(
                        ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, i) => {
                            const s = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                u = (0, o.useRef)(null),
                                _ = (0, o.useState)(window.decorator && window.decorator.directionType),
                                m = _[0],
                                b = _[1],
                                w = (0, o.useCallback)(() => {
                                    (E.playClick(), h.O.view.sendEvent.close());
                                }, []),
                                v = (0, o.useCallback)(() => {
                                    E.playHighlight();
                                }, []),
                                g = c()(y.arrow, y[`arrow${O[m]}`]);
                            f(
                                () => (
                                    h.O.client.events.mouse.enableOutside(),
                                    h.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : h.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const k = (0, o.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === s.current || t === u.current) return;
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
                                    [s, u, n],
                                ),
                                T = C(),
                                P = (0, o.useCallback)(() => {
                                    const e = d.current;
                                    if (e)
                                        return (
                                            h.O.view.freezeTextureBeforeResize(),
                                            T.run(() => {
                                                const t = e.scrollWidth,
                                                    n = e.scrollHeight;
                                                (h.O.view.resize(t, n), b(window.decorator.directionType));
                                            })
                                        );
                                }, [T]);
                            return (
                                (0, o.useImperativeHandle)(i, () => ({ updateSize: P })),
                                f(() => {
                                    h.O.view.setInputPaddingsRem(58);
                                }),
                                (0, o.useEffect)(() => {
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
                                    })((0, l.Eu)());
                                    return (
                                        !t && e.promise.then(() => P()),
                                        () => {
                                            (e.cancel(), document.removeEventListener('mousedown', k));
                                        }
                                    );
                                }, [P, k, t]),
                                r().createElement(
                                    'div',
                                    { className: y.base, ref: d },
                                    r().createElement(
                                        'div',
                                        { className: y.decorator },
                                        r().createElement(
                                            'div',
                                            { className: y.content, ref: s },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                r().createElement(
                                                    p,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    r().createElement('div', {
                                                        className: y.closeBtn,
                                                        onClick: w,
                                                        onMouseEnter: v,
                                                        ref: u,
                                                    }),
                                                ),
                                        ),
                                        r().createElement('div', { className: g, style: a.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                var P = n(521);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function M(e = P.n.NONE, t = S, n = !1, r = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== P.n.NONE)
                            return (
                                window.addEventListener('keydown', o, n),
                                () => {
                                    window.removeEventListener('keydown', o, n);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!r && h.O.view.isEventHandled()) return;
                                (h.O.view.setEventHandled(), t(o), n && o.stopPropagation());
                            }
                        }
                    }, [t, e, n, r]);
                }
                var N = n(403);
                const L = (e) => ({ backgroundImage: `url('${e}')` }),
                    x = 'BonusInfoIcon_bonusInfoIcon_3d',
                    I = () => {
                        const e = (0, o.useMemo)(() => L(R.images.gui.maps.icons.platoon.common.info()), []);
                        return r().createElement(
                            m,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            r().createElement('div', { className: x, style: e }),
                        );
                    },
                    A = {
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
                let V, B;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(V || (V = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(B || (B = {})));
                const D = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: d,
                    onMouseEnter: u,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: b,
                    onMouseLeave: w,
                    onClick: v,
                }) => {
                    const p = (0, o.useRef)(null),
                        h = (0, o.useState)(n),
                        f = h[0],
                        E = h[1],
                        y = (0, o.useState)(!1),
                        C = y[0],
                        k = y[1];
                    return (
                        (0, o.useEffect)(() => {
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
                        (0, o.useEffect)(() => {
                            E(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: c()(
                                    A.base,
                                    A[`base__${a}`],
                                    i && A.base__disabled,
                                    t && A[`base__${t}`],
                                    f && A.base__focus,
                                    C && A.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== l && g(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    i || (b && b(e), k(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== d && g(d),
                                        m && m(e),
                                        n && (i || (p.current && (p.current.focus(), E(!0)))),
                                        k(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (w && w(e), k(!1));
                                },
                                onClick: function (e) {
                                    i || (v && v(e));
                                },
                            },
                            a !== V.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: A.back }),
                                    r().createElement('span', { className: A.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: c()(A.state, A.state__default) },
                                r().createElement('span', { className: A.stateDisabled }),
                                r().createElement('span', { className: A.stateHighlightHover }),
                                r().createElement('span', { className: A.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: A.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                D.defaultProps = { type: V.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const F = D;
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                (0, o.memo)(
                    ({
                        caption: e,
                        isEnabled: t,
                        description: n,
                        children: a,
                        cButtonProps: i,
                        onClick: s,
                        className: c,
                    }) => {
                        const l = (0, o.useCallback)(() => s(), [s]);
                        return r().createElement(
                            p,
                            { isEnabled: !0, header: e, body: n },
                            r().createElement(
                                'div',
                                { className: c },
                                r().createElement(
                                    F,
                                    j({ type: V.primary, size: B.small, onClick: l, disabled: !t }, i),
                                    a || e,
                                ),
                            ),
                        );
                    },
                );
                const H = /<link.*?>/g,
                    U = /\.\.\//g,
                    z = /<script.*?>/g,
                    q = 'default.css',
                    G = (e) => {
                        const t = e.match(U);
                        return t && t.join('');
                    },
                    W = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(q)) return n.href;
                        }
                        return '';
                    },
                    K = (e) => {
                        const t = W(),
                            n = G(t);
                        let o,
                            r = e;
                        for (; null !== (o = z.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(U, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    Y = () => {
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
                    $ = 'SubView_base_df',
                    X = 'subViews.onChanged',
                    Z = Y(),
                    Q = (0, o.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: a }) => {
                        const i = (0, o.useState)(''),
                            s = i[0],
                            d = i[1],
                            u = (0, o.useMemo)(() => ({ __html: K(s) }), [s]),
                            _ = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            m = (0, o.useState)(!1),
                            b = m[0],
                            w = m[1],
                            v = (0, o.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (w(!0), engine.off(X, v), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            p = (0, o.useCallback)((e) => {
                                Z.add(
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
                        ((0, o.useEffect)(() => {
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
                                                        ? (0, l.Eu)().then(() => {
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
                            } else engine.on(X, v);
                        }, [v, p, e, b]),
                            (0, o.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const t = G(W());
                                            let n;
                                            for (; null !== (n = H.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(U, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const h = c()($, a);
                        if (s) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = W(),
                                        o = G(n);
                                    for (; null !== (t = H.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(q) && o) {
                                            const t = o + e[1].replace(U, ''),
                                                n = document.createElement('link');
                                            ((n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n));
                                        }
                                    }
                                })(s),
                                n && n(e),
                                r().createElement('div', { className: h, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? r().createElement('div', { className: h }, r().createElement(t, null)) : null;
                    }),
                    J = 'subViews.onChanged',
                    ee = '.html',
                    te = /^coui:\/\/gui\/.*/,
                    ne = Y(),
                    oe = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    },
                    re =
                        ((0, o.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: n, children: a }) => {
                            const i = (0, o.useRef)(null),
                                s = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                                l = (0, o.useState)(!1),
                                d = l[0],
                                u = l[1],
                                _ = (0, o.useState)(!0),
                                m = _[0],
                                b = _[1],
                                w = (0, o.useCallback)(
                                    (e) => {
                                        e.includes(s) &&
                                            (u(!0), engine.off(J, w), window.subViews.removeChildChangedCallback(s));
                                    },
                                    [s],
                                ),
                                v = (0, o.useCallback)(
                                    (e) => {
                                        ne.add(
                                            () =>
                                                new Promise((n) => {
                                                    const o = new MutationObserver(() => {
                                                        (b(!1), o.disconnect(), n());
                                                    });
                                                    if (i.current) {
                                                        const n = document.getElementById('root');
                                                        (n && n.setAttribute('id', 'bugSubView'),
                                                            i.current.setAttribute('id', 'root'));
                                                        const r = document.createElement('link');
                                                        ((r.href = e.replace(ee, '.css')),
                                                            (r.rel = 'stylesheet'),
                                                            document.head.appendChild(r),
                                                            te.test(e) &&
                                                                oe(
                                                                    e
                                                                        .split('/')
                                                                        .slice(0, -t)
                                                                        .concat(['vendors.js'])
                                                                        .join('/')
                                                                        .replace('/production/', '/production/lib/'),
                                                                ),
                                                            oe(e.replace(ee, '.js')),
                                                            o.observe(i.current, { childList: !0 }));
                                                    }
                                                }),
                                        );
                                    },
                                    [t],
                                );
                            return (
                                (0, o.useEffect)(() => {
                                    if (window.subViews.ids().includes(e)) {
                                        const t = window.subViews.get(e),
                                            n = t.path;
                                        let o = n.split('/').pop();
                                        if (o)
                                            return (
                                                (o = o.split('.')[0]),
                                                (window.subViews[o] = Object.assign({ id: e }, t)),
                                                v(n),
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
                                    } else engine.on(J, w);
                                }, [w, v, e, d]),
                                r().createElement(
                                    'div',
                                    { className: c()($, n) },
                                    m && a,
                                    r().createElement('div', { ref: i }),
                                )
                            );
                        }),
                        'Header_base_a7'),
                    ae = 'Header_header_9f',
                    ie = 'Header_label_af',
                    se = 'Header_description_41',
                    ce = 'Header_bonusInfo_3f',
                    le = 'Header_bonusesIcon_7a',
                    de = 'Header_xp_87',
                    ue = 'Header_credits_82',
                    _e = 'Header_base__fullBonuses_2f',
                    me = ({
                        description: e,
                        backgroundImage: t,
                        hasXpBonus: n,
                        hasCreditBonus: o,
                        subViewComponent: a,
                    }) => {
                        const i = null != a ? a : Q;
                        return r().createElement(
                            'div',
                            { className: c()(re, n && o && _e), style: L(t) },
                            r().createElement(
                                'div',
                                { className: ae },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement('span', { className: ie }, R.strings.platoon.squad()),
                                    r().createElement('span', { className: se }, e),
                                ),
                                (n || o) &&
                                    r().createElement(
                                        'div',
                                        { className: ce },
                                        r().createElement(
                                            'div',
                                            { className: le },
                                            n && r().createElement('div', { className: de }),
                                            o && r().createElement('div', { className: ue }),
                                        ),
                                        r().createElement(I, null),
                                    ),
                            ),
                            r().createElement(i, { id: R.views.lobby.platoon.subViews.TiersLimit('resId') }),
                        );
                    },
                    be = 'Separator_base_98',
                    we = 'Separator_base__horizontal_34',
                    ve = 'Separator_base__vertical_9d',
                    pe = 'Separator_image_5b';
                let he;
                !(function (e) {
                    ((e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom'));
                })(he || (he = {}));
                const fe = [he.right, he.left],
                    ge = ({ position: e }) => {
                        const t = String(R.images.gui.maps.icons.platoon.common.separator.$dyn(e));
                        return r().createElement(
                            'div',
                            { className: c()(be, fe.includes(e) ? ve : we) },
                            r().createElement('div', { className: pe, style: L(t) }),
                        );
                    },
                    Ee = 'ToggleButton_base_b9',
                    ye = 'ToggleButton_content_85',
                    Ce = 'ToggleButton_overlay_0a',
                    ke = 'ToggleButton_base__active_68',
                    Oe = 'ToggleButton_indicator_85',
                    Te = ['active', 'className', 'children', 'size'];
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
                (0, o.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        a = e.size,
                        i = void 0 === a ? B.small : a,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) ((n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Te);
                    const l = c()(Ee, n, t && ke);
                    return r().createElement(
                        'div',
                        { className: l },
                        r().createElement(
                            F,
                            Pe({}, s, { type: 'secondary', size: i }),
                            r().createElement('span', { className: ye }, o),
                        ),
                        r().createElement('div', { className: Ce }),
                        r().createElement('div', { className: Oe }),
                    );
                });
                const Se = (0, o.createContext)(null),
                    Re = () => {
                        const e = (0, o.useContext)(Se);
                        return (
                            null !== e &&
                                console.info(
                                    'useDependencies hook was called with data from PlatoonDropdownDIContext.Provider',
                                ),
                            e
                        );
                    };
                function Me() {
                    return !1;
                }
                console.log;
                var Ne = n(174);
                function Le(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return xe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return xe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function xe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const Ie = (e) => (0 === e ? window : window.subViews.get(e));
                const Ae = ((e, t) => {
                        const n = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: i, children: s, mocks: c }) {
                                const l = (0, o.useRef)([]),
                                    d = (n, o, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Ie,
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
                                                            c = h.O.view.addModelObserver(s, t, !0);
                                                        return (r.set(c, n), e && n(i(a)), c);
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
                                                        for (var e, n = Le(r.keys()); !(e = n()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(o),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            d = (e) => l.current.push(e),
                                            u = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const o = null != t ? t : c(e),
                                                            r = Ne.LO.box(o, { equals: Me });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Ne.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const o = null != t ? t : c(e),
                                                            r = Ne.LO.box(o, { equals: Me });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Ne.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const o = c(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Ne.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Ne.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = Ne.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Ne.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: n, model: u, externalModel: s, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === n && r ? r.controls(_) : t(_),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    u = (0, o.useRef)(!1),
                                    _ = (0, o.useState)(a),
                                    m = _[0],
                                    b = _[1],
                                    w = (0, o.useState)(() => d(a, i, c)),
                                    v = w[0],
                                    p = w[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        u.current ? p(d(m, i, c)) : (u.current = !0);
                                    }, [c, m, i]),
                                    (0, o.useEffect)(() => {
                                        b(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    r().createElement(n.Provider, { value: v }, s)
                                );
                            },
                            () => (0, o.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) =>
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
                            ),
                        ({ externalModel: e }) => ({
                            outside: e.createCallbackNoArgs('onOutsideClick'),
                            find: e.createCallbackNoArgs('findPlatoon.onClick'),
                            create: e.createCallbackNoArgs('createPlatoon.onClick'),
                            createForTwo: e.createCallbackNoArgs('createPlatoonForTwo.onClick'),
                            createForSeven: e.createCallbackNoArgs('createPlatoonForSeven.onClick'),
                        }),
                    ),
                    Ve = Ae[0],
                    Be = Ae[1],
                    De = { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                    Fe = (e, t, n, o = !0) =>
                        e && o
                            ? De
                            : ((e, t, n) => ({
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                  args: { header: e, body: t },
                                  isEnabled: n,
                              }))(t, n, o),
                    je = {
                        base: 'FlatButton_base_bf',
                        background: 'FlatButton_background_5f',
                        base__disabled: 'FlatButton_base__disabled_c0',
                        image: 'FlatButton_image_ce',
                        text: 'FlatButton_text_90',
                        description: 'FlatButton_description_08',
                    };
                let He;
                !(function (e) {
                    ((e[(e.findPlayers = 0)] = 'findPlayers'),
                        (e[(e.createPlatoon = 1)] = 'createPlatoon'),
                        (e[(e.createPlatoonForTwo = 2)] = 'createPlatoonForTwo'),
                        (e[(e.createPlatoonForSeven = 3)] = 'createPlatoonForSeven'));
                })(He || (He = {}));
                const Ue = ({
                    caption: e,
                    onClick: t,
                    isEnabled: n,
                    description: a,
                    type: i,
                    text: s,
                    tooltipCaption: l,
                }) => {
                    const d = i === He.createPlatoonForSeven || i === He.createPlatoonForTwo,
                        u =
                            i === He.findPlayers
                                ? R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.find_players()
                                : R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.create_platoon(),
                        _ = (0, o.useMemo)(() => L(u), [u]),
                        b = c()(je.base, !n && je.base__disabled),
                        w = (0, o.useCallback)(() => g('highlight'), []),
                        v = (0, o.useCallback)(() => {
                            (t(), g(i === He.findPlayers ? R.sounds.gui_platoon_2_find_players() : R.sounds.play()));
                        }, [t, i]),
                        p = (0, o.useCallback)(() => g(R.sounds.play()), []),
                        h = i === He.findPlayers && !n,
                        f = (0, o.useMemo)(() => Fe(h, l, a), [h, l, a]);
                    return r().createElement(
                        m,
                        f,
                        r().createElement(
                            'div',
                            { className: b, onClick: n ? v : void 0, onMouseDown: p, onMouseEnter: w },
                            r().createElement('div', { className: je.background }),
                            r().createElement('div', { className: je.image, style: _ }),
                            r().createElement(
                                'div',
                                { className: je.text },
                                r().createElement('span', { className: je.caption }, e),
                                d && r().createElement('span', { className: je.description }, s),
                            ),
                        ),
                    );
                };
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const qe = (0, N.Pi)(() => {
                        const e = Be(),
                            t = e.model,
                            n = e.controls,
                            o = t.findPlatoon.get(),
                            a = t.createPlatoon.get();
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(Ue, ze({ type: He.findPlayers }, o, { onClick: n.find })),
                            r().createElement(Ue, ze({ type: He.createPlatoon }, a, { onClick: n.create })),
                        );
                    }),
                    Ge = 'SettingsContainer_base_5d',
                    We = 'SettingsContainer_settingsContainer_48',
                    Ke = 'SettingsContainer_base__shown_b7',
                    Ye = 'SettingsContainer_settingsHighlight_22',
                    $e = ({ isVisible: e, storeSettingsHeight: t }) => {
                        var n;
                        const a = (0, o.useRef)(null),
                            i = Re(),
                            s = null != (n = null == i ? void 0 : i.subViewComponent) ? n : Q;
                        return (
                            (0, o.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            n = null;
                                        return (
                                            (n = requestAnimationFrame(() => {
                                                n = requestAnimationFrame(() => {
                                                    ((n = null), (t = e()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                                            }
                                        );
                                    })(() => {
                                        a.current && t(a.current.scrollHeight);
                                    }),
                                [a, t],
                            ),
                            r().createElement(
                                'div',
                                { className: c()(Ge, e && Ke), ref: a },
                                r().createElement(ge, { position: he.top }),
                                r().createElement('div', {
                                    className: Ye,
                                    style: L(R.images.gui.maps.icons.platoon.platoon_dropdown.glow_arrow()),
                                }),
                                r().createElement(s, {
                                    id: R.views.lobby.platoon.subViews.SettingsContent('resId'),
                                    mixClass: We,
                                }),
                                r().createElement(ge, { position: he.bottom }),
                            )
                        );
                    },
                    Xe = 'App_base_79';
                window.decorator = { directionType: k.Bottom, isCloseBtnVisible: !1 };
                const Ze = (0, N.Pi)(() => {
                    var e;
                    const t = Be(),
                        n = t.model,
                        a = t.controls,
                        i = n.isSettingsVisible.get(),
                        s = (0, o.useRef)(i),
                        c = (0, o.useRef)(null),
                        l = Re(),
                        d = (0, o.useRef)(0),
                        u = (0, o.useCallback)((e) => {
                            d.current = e;
                        }, []);
                    (0, o.useEffect)(() => {
                        if (d.current && s.current !== i) {
                            s.current = i;
                            const e = h.O.view.getSize();
                            h.O.view.resize(e.width, e.height + d.current);
                        }
                        if (c.current) return c.current.updateSize();
                    }, [i]);
                    const _ = (0, o.useCallback)(() => {
                        (h.O.view.displayStatusIs.shown() || h.O.view.displayStatusIs.showing()) &&
                            (a.outside(), h.O.view.sendEvent.minimize(), h.O.view.setEventHandled());
                    }, [a]);
                    return (
                        M(P.n.ESCAPE, _),
                        r().createElement(
                            T,
                            { ref: c, disableAutoSizeUpdate: !0, onOutsideClick: _ },
                            r().createElement(
                                'div',
                                { className: Xe },
                                r().createElement(me, {
                                    description: n.battleType.get(),
                                    backgroundImage: n.backgroundImage.get(),
                                    hasXpBonus: n.hasXpBonus.get(),
                                    hasCreditBonus: n.hasCreditsBonus.get(),
                                    subViewComponent: null == l ? void 0 : l.subViewComponent,
                                }),
                                r().createElement($e, { isVisible: i, storeSettingsHeight: u }),
                                null != (e = null == l ? void 0 : l.flatButtonsComponent)
                                    ? e
                                    : r().createElement(qe, null),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(Ve, null, r().createElement(Ze, null)),
                        document.getElementById('root'),
                    );
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
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
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
        (__webpack_require__.j = 878),
        (() => {
            var e = { 878: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        ((r = a[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(822));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
