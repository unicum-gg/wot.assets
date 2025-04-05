(() => {
    'use strict';
    var __webpack_modules__ = {
            326: (e, t, n) => {
                n.d(t, { O: () => re });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => v, off: () => _, on: () => d, onResize: () => l, onScaleUpdated: () => u });
                var i = {};
                n.r(i),
                    n.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => b,
                        graphicsQuality: () => f,
                        playSound: () => h,
                        setRTPC: () => m,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => O, getTextureUrl: () => S });
                var s = {};
                function o(e) {
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
                        addPreloadTexture: () => A,
                        children: () => a,
                        displayStatus: () => T.W,
                        displayStatusIs: () => ee,
                        events: () => k,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => j,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Q,
                        getFontNames: () => J,
                        getScale: () => q,
                        getSize: () => U,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => Z,
                        isFocused: () => H,
                        pxToRem: () => K,
                        remToPx: () => $,
                        resize: () => V,
                        sendEvent: () => N,
                        setAnimateWindow: () => G,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => ne,
                    });
                const l = o('clientResized'),
                    u = o('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    w = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const v = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        s = w[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
                function m(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(p).reduce((e, t) => ((e[t] = () => h(p[t])), e), {}),
                    y = { play: Object.assign({}, g, { sound: h }), setRTPC: m };
                function S(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function O(e, t, n) {
                    return `url(${S(e, t, n)})`;
                }
                var T = n(112);
                const k = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    x = ['args'];
                const R = 2,
                    P = 16,
                    C = 32,
                    M = 64,
                    L = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, x);
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
                    N = {
                        close(e) {
                            L('popover' === e ? R : C);
                        },
                        minimize() {
                            L(M);
                        },
                        move(e) {
                            L(P, { isMouseEvent: !0, on: e });
                        },
                    },
                    D = 15;
                function A(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, D);
                }
                function I(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, D);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: $(t.x), y: $(t.y) };
                }
                function j() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function K(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function G(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = Object.keys(T.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T.W[t]), e),
                        {},
                    ),
                    te = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ne = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: s, client: i, sound: y };
            },
            112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, n) => {
                let r, i;
                n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(i || (i = {}));
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(326);
                class i {
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
                        return window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, n, i);
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
                i.__instance = void 0;
                const a = i;
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
                n.d(t, { Sw: () => a.Z, ry: () => b });
                class r {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                r.__instance = void 0;
                const i = r;
                var a = n(358);
                var s = n(613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    w = n(326);
                const v = ['args'];
                function h(e, t, n, r, i, a, s) {
                    try {
                        var o = e[a](s),
                            c = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (r, i) {
                                        var a = e.apply(t, n);
                                        function s(e) {
                                            h(a, r, i, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(a, r, i, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, v);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = i),
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
                    f = () => E(o.CLOSE),
                    p = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var g = n(572);
                const y = i.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => E(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, i = R.invalid('resId'), a) => {
                            const s = w.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                u = c.y,
                                d = c.width,
                                _ = c.height,
                                v = {
                                    x: w.O.view.pxToRem(l) + s.x,
                                    y: w.O.view.pxToRem(u) + s.y,
                                    width: w.O.view.pxToRem(d),
                                    height: w.O.view.pxToRem(_),
                                };
                            E(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: m(v),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const i = Object.prototype.toString.call(t[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < i.length; t++) n[r].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = S;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            73: (e, t, n) => {
                var r = n(363),
                    i = n.n(r),
                    a = n(533),
                    s = n.n(a),
                    o = n(483),
                    c = n.n(o),
                    l = n(326);
                const u = [];
                const d = (e) => {
                    (0, r.useEffect)(e, []);
                };
                function _() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
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
                const w = (0, r.createContext)(null);
                const v = (e) => {
                    const t = i().useRef(null),
                        n = _(),
                        a = i().useRef(),
                        s = i().useRef(!1),
                        o = i().useCallback(() => {
                            const e = t.current;
                            if (!e) throw new Error('Element is not defined');
                            return (function (e, t) {
                                if (t.current) {
                                    const n = t.current,
                                        r = n.width,
                                        i = n.height;
                                    if (r === e.offsetWidth && i === e.offsetHeight) return !0;
                                }
                                return !1;
                            })(e, a);
                        }, []),
                        c = (function (e) {
                            const t = (0, r.useRef)(e);
                            return (
                                (0, r.useLayoutEffect)(() => {
                                    t.current = e;
                                }),
                                (0, r.useCallback)((...e) => (0, t.current)(...e), u)
                            );
                        })(() => {
                            n.run(() => {
                                const n = t.current;
                                if (!n || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                const r = o();
                                if (r && !s.current) return;
                                const i = { width: Math.max(1, n.offsetWidth), height: Math.max(1, n.offsetHeight) };
                                (a.current = i),
                                    l.O.view.resize(i.width, i.height),
                                    !1 === r && (null == e.onResize || e.onResize(i));
                            });
                        });
                    d(() =>
                        l.O.view.events.onTextureFrozen(() => {
                            s.current = !0;
                        }),
                    ),
                        d(() =>
                            l.O.view.events.onTextureReady(() => {
                                s.current && a.current && l.O.view.resize(a.current.width, a.current.height),
                                    (s.current = !1);
                            }),
                        ),
                        d(() => (window.addEventListener('resize', c), () => window.removeEventListener('resize', c))),
                        i().useEffect(() => {
                            var t;
                            (null == (t = e.autoUpdate) || t) && c();
                        });
                    const v = i().useMemo(
                        () => ({
                            resize: c,
                            equalSize: o,
                            getLastSize: () => a.current,
                            getCurrentSize: () => {
                                const e = t.current;
                                return e ? { width: e.offsetWidth, height: e.offsetHeight } : { width: 0, height: 0 };
                            },
                            freeze: () => {
                                (s.current = !0), l.O.view.freezeTextureBeforeResize();
                            },
                            isFrozen: () => s.current,
                        }),
                        [o, c],
                    );
                    return i().createElement(w.Provider, { value: v }, e.children(t, c));
                };
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const m = (e) => ({ transitionDelay: e / 20 + 's' }),
                    b = 'SwitcherBullet_base_3d',
                    E = 'SwitcherBullet_container_6e',
                    f = 'SwitcherBullet_base__selected_70',
                    p = 'SwitcherBullet_container__text_b3',
                    g = 'SwitcherBullet_finishedHover_37',
                    y = 'SwitcherBullet_base__finished_dd',
                    S = 'SwitcherBullet_base__hover_2a',
                    O = 'SwitcherBullet_iconSmall_b7',
                    T = 'SwitcherBullet_base__afterCurrent_cd',
                    k = 'SwitcherBullet_iconBig_dc',
                    x = 'SwitcherBullet_base__currentSelected_24',
                    P = 'SwitcherBullet_iconText_11',
                    C = 'SwitcherBullet_iconTextGlow_25',
                    M = 'SwitcherBullet_clickArea_ed',
                    L = 'SwitcherBullet_base__disabled_b9',
                    N = 'SwitcherBullet_disabled_b5',
                    D = 'SwitcherBullet_number_b4',
                    A = 'SwitcherBullet_currentText_f9',
                    B = 'SwitcherBullet_text_37',
                    I = 'SwitcherBullet_texture_1e',
                    F = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: o,
                        currentText: l,
                        isDisabled: u = !1,
                        mouseEnterSound: d,
                        clickSound: _,
                    }) => {
                        const w = t !== n,
                            v = (0, r.useState)(!1),
                            p = v[0],
                            P = v[1],
                            C = (0, r.useCallback)(() => {
                                P(!0), w && h(d);
                            }, [w, d, P]),
                            B = (0, r.useCallback)(() => {
                                w && (h(_), s(e));
                            }, [w, _, e, s]),
                            I = (0, r.useCallback)(() => {
                                P(!1);
                            }, [P]),
                            F = o || 0,
                            z = c()(
                                b,
                                t === n && f,
                                t === n && t === F && x,
                                t > F && t !== n && T,
                                t <= F && y,
                                p && S,
                                u && L,
                            ),
                            U = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? m(0)
                                            : e === n
                                              ? m(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? m(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            V = (0, r.useCallback)(
                                () => ((t === n && t === F) || t === n ? 'big' : 'small'),
                                [t, n, F],
                            ),
                            W = (0, r.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    n = t > F ? 'light' : 'dark';
                                return Object.assign({}, U, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${V()}_${n}`)})`,
                                });
                            }, [t, F, U, V]);
                        return i().createElement(
                            'div',
                            { className: z },
                            i().createElement(
                                'div',
                                { className: E, style: U },
                                i().createElement('div', { className: g, style: U }),
                                i().createElement('div', { className: O, style: U }),
                                i().createElement('div', { className: k, style: U }),
                                i().createElement('div', { className: N }),
                                i().createElement('div', { className: D, style: W }),
                                i().createElement('div', {
                                    className: M,
                                    style: U,
                                    onClick: B,
                                    onMouseEnter: C,
                                    onMouseLeave: I,
                                }),
                            ),
                            l && t === o && i().createElement('div', { className: A }, l),
                        );
                    },
                    z = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: o = 0,
                        isDisabled: l = !1,
                        mouseEnterSound: u,
                        clickSound: d,
                        styleID: _,
                    }) => {
                        const w = t === n,
                            v = (0, r.useState)(!1),
                            g = v[0],
                            O = v[1],
                            k = (0, r.useCallback)(() => {
                                O(!0), w || h(u);
                            }, [w, u, O]),
                            N = (0, r.useCallback)(() => {
                                w || (h(d), s(e));
                            }, [w, d, e, s]),
                            D = (0, r.useCallback)(() => {
                                O(!1);
                            }, [O]),
                            A = R.strings.vehicle_customization.style_switcher.$dyn(`style_${_}`).$dyn(`level${e}`),
                            F = c()(b, w && f, w && t === o && x, t > o && t !== n && T, t <= o && y, g && S, l && L),
                            z = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? m(0)
                                            : e === n
                                              ? m(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? m(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            U = c()(E, p);
                        return i().createElement(
                            'div',
                            { className: F },
                            i().createElement(
                                'div',
                                { className: U, style: z },
                                w && i().createElement('div', { className: I }),
                                !w && i().createElement('div', { className: C }),
                                i().createElement('div', { className: P, style: z }),
                                i().createElement('div', { className: B }, A),
                                i().createElement('div', {
                                    className: M,
                                    style: z,
                                    onClick: N,
                                    onMouseEnter: k,
                                    onMouseLeave: D,
                                }),
                            ),
                        );
                    },
                    U = 'SwitcherSeparator_base_c1',
                    V = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    W = 'SwitcherSeparator_base__notAnimated_58',
                    j = 'SwitcherSeparator_base__scaled_57',
                    q = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    K = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    $ = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    G = ({ index: e, selectedIndex: t, previousSelectedIndex: n, isAnimated: r = !0 }) => {
                        const a = ((e, t, n) =>
                                e === t + 1 || e === t - 1
                                    ? m(0)
                                    : e === n + 1 || e === n - 1
                                      ? m(Math.abs(n - t) - 2)
                                      : (n > t && e > t && e < n + 1) || (n < t && e < t && e > n - 1)
                                        ? m(Math.abs(e - t) - 1)
                                        : void 0)(e, n, t),
                            s = 1 === Math.abs(e - t),
                            o = 1 === Math.abs(e - n),
                            l = ((e, t, n, r) =>
                                e === n + 1 || (e === t + 1 && !r)
                                    ? q
                                    : e === n - 1 || (e === t - 1 && !r)
                                      ? K
                                      : void 0)(e, n, t, s),
                            u = c()(
                                U,
                                r && e < t && V,
                                r && o && s && $,
                                r && (e === t + 1 || e === t - 1) && j,
                                r && l,
                                !r && W,
                            );
                        return i().createElement('div', { className: u, style: a });
                    },
                    H = (e, t, n) => Math.min(Math.max(e, t), n),
                    Y = {
                        base: 'Switcher_base_7a',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_6f',
                        base__small: 'Switcher_base__small_6a',
                        base__isVisible: 'Switcher_base__isVisible_43',
                    };
                let Z;
                !(function (e) {
                    (e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text');
                })(Z || (Z = {}));
                const X = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let Q;
                !(function (e) {
                    e.small = 'small';
                })(Q || (Q = {}));
                const J = ({
                    numberOfBullets: e,
                    selectedNumber: t,
                    onChange: n,
                    currentText: a,
                    currentNumber: s,
                    startNumber: o = 1,
                    isBulletsBeforeCurrentDisabled: l = !1,
                    size: u,
                    mouseEnterSound: d = 'highlight',
                    clickSound: _ = 'play',
                    isArabic: w = !1,
                    hasLightShadows: v = !1,
                    styleID: h = 0,
                    switcherType: m = Z.digital,
                }) => {
                    const b = (0, r.useState)(!1),
                        E = b[0],
                        f = b[1];
                    (0, r.useEffect)(
                        () =>
                            ((e, t) => {
                                let n;
                                const r = setTimeout(() => {
                                    n = e();
                                }, t);
                                return () => {
                                    'function' == typeof n && n(), clearTimeout(r);
                                };
                            })(() => f(!0), 0),
                        [],
                    );
                    const p = o + e - 1,
                        g = H(t, l && s ? s : o, p),
                        y = 'number' == typeof s ? H(s, o, p) : void 0,
                        S = X(g, o),
                        O = X(y, o),
                        T = (0, r.useRef)(S);
                    (0, r.useEffect)(() => {
                        T.current = S;
                    });
                    const k = T.current,
                        x = c()(
                            Y.base,
                            a && void 0 !== O && Y.base__hasCurrentText,
                            u && Y[`base__${u}`],
                            E && Y.base__isVisible,
                        ),
                        R = (0, r.useMemo)(
                            () =>
                                ((e, t) => {
                                    const n = [];
                                    for (let r = e; r <= t; r++) n.push(r);
                                    return n;
                                })(o, p),
                            [p, o],
                        ),
                        P = m === Z.digital;
                    return i().createElement(
                        'div',
                        { className: x },
                        R.map((e, t) => {
                            const r = 2 * t,
                                s = !(!l || !O) && r < O;
                            return i().createElement(
                                i().Fragment,
                                { key: t },
                                t > 0 &&
                                    i().createElement(G, {
                                        index: r - 1,
                                        selectedIndex: S,
                                        previousSelectedIndex: k,
                                        isAnimated: P,
                                    }),
                                P
                                    ? i().createElement(F, {
                                          index: r,
                                          selectedIndex: S,
                                          previousSelectedIndex: k,
                                          numberToDisplay: e,
                                          currentIndex: O,
                                          currentText: a,
                                          onChange: n,
                                          isDisabled: s,
                                          mouseEnterSound: d,
                                          clickSound: _,
                                          isArabic: w,
                                          hasLightShadows: v,
                                      })
                                    : i().createElement(z, {
                                          index: r,
                                          selectedIndex: S,
                                          previousSelectedIndex: k,
                                          numberToDisplay: e,
                                          currentIndex: O,
                                          onChange: n,
                                          isDisabled: s,
                                          mouseEnterSound: d,
                                          clickSound: _,
                                          hasLightShadows: v,
                                          styleID: h,
                                      }),
                            );
                        }),
                    );
                };
                const ee = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            r = R.invalid('resId'),
                            i = '';
                        var a;
                        t &&
                            ((i = (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                            (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (r = window.subViews[n].id));
                        return { callerUrl: i, caller: n, stack: t, resId: r };
                    },
                    te = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ne = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var re = n(916);
                const ie = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ae = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    se = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = te(`${e}.${n}`, window);
                                return ie(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    oe = (e) => {
                        const t = ((e) => {
                                const t = ee(),
                                    n = t.caller,
                                    r = t.resId,
                                    i = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: i, modelPath: ae(i, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const i = te(ae(n, `${t}.${r}`), window);
                                    return ie(i) ? (e.push(i.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ce = () => (window.injected || (window.injected = new Map()), window.injected);
                const le = re.Sw.instance;
                let ue;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(ue || (ue = {}));
                const de = (e = 'model', t = ue.Deep) => {
                        const n = (0, r.useState)(0),
                            i = (n[0], n[1]),
                            a = (0, r.useMemo)(() => ee(), []),
                            s = a.callerUrl,
                            o = a.caller,
                            c = a.resId,
                            l = (0, r.useMemo)(() => {
                                const t = (function (e) {
                                    return ce().has(e);
                                })(s.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !t ? `subViews.${o}.${e}` : e;
                            }, [s, o, e]),
                            u = (0, r.useState)(() =>
                                ((e) => {
                                    const t = te(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return ie(t) ? t.value : t;
                                })(se(l)),
                            ),
                            d = u[0],
                            _ = u[1],
                            w = (0, r.useRef)(-1);
                        return (
                            ne(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? ue.Deep : ue.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== ue.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === ue.Deep
                                                ? (e === d && i((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        r = oe(e);
                                    w.current = le.addCallback(r, n, c, t === ue.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== ue.None)
                                    return () => {
                                        le.removeCallback(w.current, c);
                                    };
                            }, [c, t]),
                            d
                        );
                    },
                    _e = {
                        base: 'App_base_c7',
                        base__text: 'App_base__text_1f',
                        content: 'App_content_8f',
                        content__text: 'App_content__text_41',
                    },
                    we = () => {
                        const e = de(),
                            t = e.currentLevel,
                            n = e.selectedLevel,
                            a = e.numberOfBullets,
                            s = void 0 === a ? 4 : a,
                            o = e.isBulletsBeforeCurrentDisabled,
                            u = e.switcherType,
                            d = e.styleID,
                            _ = e.onChange,
                            w = (0, r.useCallback)((e) => _({ selectedLevel: e }), [_]),
                            h = u === Z.text,
                            m = h ? void 0 : 'small',
                            b = c()(_e.content, h && _e.content__text),
                            E = (function (e, t = []) {
                                const n = (0, r.useRef)(!1);
                                return (0, r.useCallback)(() => {
                                    n.current || (e(), (n.current = !0));
                                }, t);
                            })(() => {
                                const e = h ? 40 : 30;
                                l.O.view.setSidePaddingsRem({ left: 50, right: 50, bottom: e, top: e });
                            }, [h]);
                        return i().createElement(v, { onResize: E }, (e) =>
                            i().createElement(
                                'div',
                                { ref: e, className: c()(_e.base, h && _e.base__text) },
                                i().createElement(
                                    'div',
                                    { className: b },
                                    i().createElement(J, {
                                        numberOfBullets: s,
                                        currentNumber: t,
                                        selectedNumber: n,
                                        onChange: w,
                                        isBulletsBeforeCurrentDisabled: o,
                                        size: m,
                                        switcherType: u,
                                        styleID: d,
                                    }),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(i().createElement(we, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var i = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], a = !0, s = 0; s < t.length; s++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), r < i && (i = r));
                    if (a) {
                        deferred.splice(c--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, r];
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
        (__webpack_require__.j = 407),
        (() => {
            var e = { 407: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, s, o] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        (i = a[c]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(73));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
