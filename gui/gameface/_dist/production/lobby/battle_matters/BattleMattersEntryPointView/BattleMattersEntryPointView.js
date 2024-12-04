(() => {
    var __webpack_modules__ = {
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            768: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => re });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => g, off: () => m, on: () => u, onResize: () => c, onScaleUpdated: () => d });
                var a = {};
                n.r(a),
                    n.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => v,
                        getSize: () => w,
                        graphicsQuality: () => p,
                        playSound: () => h,
                        setRTPC: () => E,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => x, getTextureUrl: () => L });
                var o = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(o),
                    n.d(o, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => H,
                        children: () => i,
                        displayStatus: () => y,
                        displayStatusIs: () => ee,
                        events: () => O,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => Q,
                        getFontNames: () => J,
                        getScale: () => U,
                        getSize: () => F,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => X,
                        isFocused: () => K,
                        pxToRem: () => j,
                        remToPx: () => V,
                        resize: () => B,
                        sendEvent: () => R,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => ne,
                    });
                const c = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    _ = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = _[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(f).reduce((e, t) => ((e[t] = () => h(f[t])), e), {}),
                    S = { play: Object.assign({}, b, { sound: h }), setRTPC: E };
                function L(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function x(e, t, n) {
                    return `url(${L(e, t, n)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
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
                    M = ['args'];
                const T = 2,
                    k = 16,
                    P = 32,
                    A = 64,
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, M);
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
                    R = {
                        close(e) {
                            C('popover' === e ? T : P);
                        },
                        minimize() {
                            C(A);
                        },
                        move(e) {
                            C(k, { isMouseEvent: !0, on: e });
                        },
                    },
                    I = 15;
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, I);
                }
                function W(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function N(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, I);
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function $(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function j(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Y() {
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
                    ee = Object.keys(y).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === y[t]), e), {}),
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
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    re = { view: o, client: a, sound: S };
            },
            521: (e, t, n) => {
                'use strict';
                let r, a;
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
                    })(a || (a = {}));
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var r = n(768);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, n, a);
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
                'use strict';
                n.d(t, { B0: () => s, ry: () => w });
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
                const a = r;
                var i = n(358);
                var o = n(613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(521),
                    _ = n(768);
                const g = ['args'];
                function h(e, t, n, r, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            h(i, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, r, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    p = () => v(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var b = n(572);
                const S = a.instance,
                    L = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                m = l.height,
                                g = {
                                    x: _.O.view.pxToRem(c) + o.x,
                                    y: _.O.view.pxToRem(d) + o.y,
                                    width: _.O.view.pxToRem(u),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: E(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: v,
                        onBindingsReady: w,
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
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = L;
            },
            613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => a });
                const r = {
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
            },
            627: (e, t, n) => {
                'use strict';
                var r = n(179),
                    a = n.n(r),
                    i = n(493),
                    o = n.n(i);
                const s = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var l = n(768);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function u(e, t, n) {
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
                        })(e, n),
                        a = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(r, a);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
                    };
                }
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
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
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(d || (d = {}));
                const m = l.O.client.getSize('rem'),
                    _ = m.width,
                    g = m.height,
                    h = Object.assign({ width: _, height: g }, u(_, g, c)),
                    E = (0, r.createContext)(h),
                    w = ['children'];
                const v = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, w);
                    const a = (0, r.useContext)(E),
                        i = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        c = a.small,
                        d = a.extraSmall,
                        u = a.extraLargeWidth,
                        m = a.largeWidth,
                        _ = a.mediumWidth,
                        g = a.smallWidth,
                        h = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        p = a.largeHeight,
                        f = a.mediumHeight,
                        b = a.smallHeight,
                        S = a.extraSmallHeight,
                        L = { extraLarge: v, large: p, medium: f, small: b, extraSmall: S };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && i) return t;
                        if (n.large && o) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && u) return s(t, n, L);
                        if (n.largeWidth && m) return s(t, n, L);
                        if (n.mediumWidth && _) return s(t, n, L);
                        if (n.smallWidth && g) return s(t, n, L);
                        if (n.extraSmallWidth && h) return s(t, n, L);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && v) return t;
                            if (n.largeHeight && p) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                v.defaultProps = {
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
                (0, r.memo)(v);
                const p = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = ({ children: e }) => {
                        const t = (0, r.useContext)(E),
                            n = (0, r.useState)(t),
                            i = n[0],
                            o = n[1],
                            s = (0, r.useCallback)((e, t) => {
                                const n = l.O.view.pxToRem(e),
                                    r = l.O.view.pxToRem(t);
                                o(Object.assign({ width: n, height: r }, u(n, r, c)));
                            }, []),
                            d = (0, r.useCallback)(() => {
                                const e = l.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        p(() => {
                            l.O.client.events.on('clientResized', s), l.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', s),
                                        l.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [s, d],
                            );
                        const m = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(E.Provider, { value: m }, e);
                    };
                var b = n(483),
                    S = n.n(b),
                    L = n(926),
                    x = n.n(L);
                let y, O, M;
                !(function (e) {
                    (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.small.width)] = 'Small'),
                        (e[(e.Medium = c.medium.width)] = 'Medium'),
                        (e[(e.Large = c.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                })(y || (y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.width)] = 'Small'),
                            (e[(e.Medium = c.medium.width)] = 'Medium'),
                            (e[(e.Large = c.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                    })(O || (O = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.height)] = 'Small'),
                            (e[(e.Medium = c.medium.height)] = 'Medium'),
                            (e[(e.Large = c.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge');
                    })(M || (M = {}));
                const T = () => {
                        const e = (0, r.useContext)(E),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return y.ExtraLarge;
                                    case e.large:
                                        return y.Large;
                                    case e.medium:
                                        return y.Medium;
                                    case e.small:
                                        return y.Small;
                                    case e.extraSmall:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return O.ExtraLarge;
                                    case e.largeWidth:
                                        return O.Large;
                                    case e.mediumWidth:
                                        return O.Medium;
                                    case e.smallWidth:
                                        return O.Small;
                                    case e.extraSmallWidth:
                                        return O.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), O.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return M.ExtraLarge;
                                    case e.largeHeight:
                                        return M.Large;
                                    case e.mediumHeight:
                                        return M.Medium;
                                    case e.smallHeight:
                                        return M.Small;
                                    case e.extraSmallHeight:
                                        return M.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), M.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    k = ['children', 'className'];
                function P() {
                    return (
                        (P = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        P.apply(null, arguments)
                    );
                }
                const A = {
                        [O.ExtraSmall]: '',
                        [O.Small]: x().SMALL_WIDTH,
                        [O.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [O.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [O.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [M.ExtraSmall]: '',
                        [M.Small]: x().SMALL_HEIGHT,
                        [M.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [M.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [M.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    I = {
                        [y.ExtraSmall]: '',
                        [y.Small]: x().SMALL,
                        [y.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [y.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [y.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    H = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, k);
                        const i = T(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', P({ className: S()(n, A[o], C[s], I[l]) }, r), t);
                    },
                    D = ['children'];
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, D);
                    return a().createElement(f, null, a().createElement(H, n, t));
                };
                let N;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.HasToken = 1)] = 'HasToken'), (e[(e.Error = 2)] = 'Error');
                })(N || (N = {}));
                function G() {
                    return !1;
                }
                console.log;
                var F = n(174);
                function B(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return $(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? $(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const z = (e) => (0 === e ? window : window.subViews.get(e));
                var U = n(946);
                const j = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: o, children: s, mocks: c }) {
                                const d = (0, r.useRef)([]),
                                    u = (n, r, a) => {
                                        var i;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = z,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const a = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = l.O.view.addModelObserver(s, t, !0);
                                                        return a.set(c, n), e && n(o(i)), c;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const n = o(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = B(a.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            u = (e) => d.current.push(e),
                                            m = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = F.LO.box(r, { equals: G });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, F.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = F.LO.box(r, { equals: G });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, F.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = F.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, F.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                i = Object.entries(a),
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = F.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, F.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            _ = { mode: n, model: m, externalModel: s, cleanup: u };
                                        return {
                                            model: m,
                                            controls: 'mocks' === n && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(i),
                                    g = _[0],
                                    h = _[1],
                                    E = (0, r.useState)(() => u(i, o, c)),
                                    w = E[0],
                                    v = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? v(u(g, o, c)) : (m.current = !0);
                                    }, [c, g, o]),
                                    (0, r.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            w.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [w],
                                    ),
                                    a().createElement(n.Provider, { value: w }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, {
                                computes: {
                                    hasProgress: (0, U.Om)(() => {
                                        const e = t.root.get(),
                                            n = e.maxProgress,
                                            r = e.state,
                                            a = e.isCompleted;
                                        return n > 0 && r !== N.Error && !a;
                                    }),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
                    ),
                    V = j[0],
                    q = j[1],
                    K = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Y, X;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Y || (Y = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(X || (X = {}));
                const Z = ({ size: e = Y.Default }) => {
                        const t = S()(K.background, K[`background__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    Q = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    J = ({ size: e }) => {
                        const t = S()(Q.base, Q[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    ee = {
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
                    te = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: i, withoutBounce: o }) => {
                            const s = S()(
                                    ee.base,
                                    ee[`base__${e}`],
                                    n && ee.base__disabled,
                                    i && ee.base__finished,
                                    o && ee.base__withoutBounce,
                                ),
                                l = !n && !i;
                            return a().createElement(
                                'div',
                                { className: s, style: r, ref: t },
                                a().createElement('div', { className: ee.pattern }),
                                a().createElement('div', { className: ee.gradient }),
                                l && a().createElement(J, { size: e }),
                            );
                        },
                    ),
                    ne = ({ size: e, value: t, lineRef: n, disabled: i, onComplete: o }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            a().createElement(te, { size: e, disabled: i, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    re = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(r);
                        };
                    };
                let ae, ie;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(ae || (ae = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(ie || (ie = {}));
                const oe = 'ProgressBarDeltaSimple_base_6c',
                    se = 'ProgressBarDeltaSimple_delta_99',
                    le = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = s < i,
                                u = (0, r.useState)(ie.Idle),
                                m = u[0],
                                _ = u[1],
                                g = m === ie.In,
                                h = m === ie.End,
                                E = m === ie.Idle,
                                w = (0, r.useCallback)(
                                    (e) => {
                                        _(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, r.useEffect)(() => {
                                if (E && !n) {
                                    return re(() => {
                                        w(ie.In);
                                    }, t);
                                }
                            }, [w, n, E, t]),
                                (0, r.useEffect)(() => {
                                    if (g) {
                                        return re(() => {
                                            l && l(), w(ie.End);
                                        }, e + t);
                                    }
                                }, [w, g, l, t, e]);
                            const v = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                p = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(i - s)}%`, left: `${d ? s : i}%` }),
                                    [i, d, s],
                                );
                            return h
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: oe, style: f },
                                      a().createElement(
                                          'div',
                                          { style: E ? v : p, className: se },
                                          a().createElement(J, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    ce = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(te, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    a().createElement(le, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    de = 'ProgressBarDeltaGrow_base_7e',
                    ue = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    me = 'ProgressBarDeltaGrow_glow_68',
                    _e = (e) => (e ? { left: 0 } : { right: 0 }),
                    ge = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    he = (e) => ({ transitionDuration: `${e}ms` }),
                    Ee = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const u = s < i,
                                m = (0, r.useState)(ae.Idle),
                                _ = m[0],
                                g = m[1],
                                h = _ === ae.End,
                                E = _ === ae.Idle,
                                w = _ === ae.Grow,
                                v = _ === ae.Shrink,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        g(e), c && c(e);
                                    },
                                    [c],
                                ),
                                f = (0, r.useCallback)(
                                    (e, t) =>
                                        re(() => {
                                            p(e);
                                        }, t),
                                    [p],
                                );
                            (0, r.useEffect)(() => {
                                if (!n)
                                    return E
                                        ? f(ae.Grow, t)
                                        : w
                                          ? f(ae.Shrink, e)
                                          : v
                                            ? f(ae.End, e)
                                            : void (h && l && l());
                            }, [f, n, h, w, E, v, l, t, e]);
                            const b = (0, r.useMemo)(() => Object.assign({ width: '100%' }, he(e), _e(u)), [u, e]),
                                L = (0, r.useMemo)(() => Object.assign({ width: '0%' }, he(e), _e(u)), [u, e]),
                                x = (0, r.useMemo)(() => Object.assign({ width: '0%' }, ge(u, i), he(e)), [i, u, e]),
                                y = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - i)}%` }, ge(u, i), he(e)),
                                    [i, u, s, e],
                                );
                            if (h) return null;
                            const O = S()(de, d, u && 0 === s && ue);
                            return a().createElement(
                                'div',
                                { style: E ? x : y, className: O },
                                a().createElement(
                                    'div',
                                    { style: v ? L : b, className: me },
                                    a().createElement(J, { size: o }),
                                ),
                            );
                        },
                    ),
                    we = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < n,
                                m = (0, r.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                h = (0, r.useCallback)(
                                    (e) => {
                                        e === ae.Shrink && g(!0), d && d(e);
                                    },
                                    [d],
                                ),
                                E = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                w = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(te, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: _ ? w : E,
                                }),
                                n >= 0 &&
                                    a().createElement(Ee, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: h,
                                        freezed: l.freezed,
                                        onEndAnimation: c,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    ve = ['onComplete', 'onEndAnimation'];
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const fe = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, ve);
                        const o = (0, r.useState)(!1),
                            s = o[0],
                            l = o[1],
                            c = (0, r.useCallback)(() => {
                                const e = 100 === i.to;
                                e !== s && l(e), e && t && t(), n && n();
                            }, [s, t, n, i.to]);
                        switch (i.animationSettings.type) {
                            case X.Simple:
                                return a().createElement(ce, pe({}, i, { onEndAnimation: c, isComplete: s }));
                            case X.Growing:
                                return a().createElement(we, pe({}, i, { onEndAnimation: c, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    be = ['onEndAnimation'];
                function Se() {
                    return (
                        (Se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Se.apply(null, arguments)
                    );
                }
                const Le = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, be);
                    const i = (0, r.useRef)({}),
                        o = (0, r.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof i.current.from ? i.current.from : n.from;
                    return (
                        (i.current.from = s),
                        a().createElement(fe, Se({}, n, { onEndAnimation: o, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function xe() {
                    return (
                        (xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        xe.apply(null, arguments)
                    );
                }
                const ye = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: i,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (i === t)
                                return a().createElement(ne, {
                                    key: `${i}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const d = {
                                from: i,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: r,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? a().createElement(Le, d)
                                : a().createElement(fe, xe({ key: `${i}-${t}` }, d));
                        },
                    ),
                    Oe = (e) => ({
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
                    Me = (e, t, n) => (n < e ? e : n > t ? t : n),
                    Te = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (Me(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ke = {
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
                    Pe = {
                        freezed: !1,
                        withStack: !1,
                        type: X.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Ae = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ke,
                            size: n = Y.Default,
                            animationSettings: i = Pe,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: c,
                            lineRef: d,
                            onChangeAnimationState: u,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const g = ((e, t, n) =>
                                (0, r.useMemo)(() => {
                                    const r = (Me(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: Te(r, t, n) };
                                }, [n, t, e]))(l, e, c);
                            return a().createElement(
                                'div',
                                { className: S()(K.base, K[`base__${n}`]), style: Oe(t) },
                                !s && a().createElement(Z, { size: n }),
                                a().createElement(ye, {
                                    size: n,
                                    lineRef: d,
                                    disabled: o,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: i,
                                    onEndAnimation: m,
                                    onChangeAnimationState: u,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                var Ce = n(916);
                const Re = [
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
                function Ie(e) {
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
                const He = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ce.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    De = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            h = e.isEnabled,
                            E = void 0 === h || h,
                            w = e.targetId,
                            v = void 0 === w ? 0 : w,
                            p = e.onShow,
                            f = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Re);
                        const S = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, r.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [v],
                            ),
                            x = (0, r.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (He(n, g, { isMouseEvent: !0, on: !0, arguments: Ie(a) }, L),
                                    p && p(),
                                    (S.current.isVisible = !0));
                            }, [n, g, a, L, p]),
                            y = (0, r.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        He(n, g, { on: !1 }, L),
                                        S.current.isVisible && f && f(),
                                        (S.current.isVisible = !1);
                                }
                            }, [n, g, L, f]),
                            O = (0, r.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === E && y();
                            }, [E, y]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return E
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((S.current.timeoutId = window.setTimeout(x, d ? 100 : 400)),
                                                      i && i(e),
                                                      M && M(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && y(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && y(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var M;
                    };
                function We(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Ne = {
                    playHighlight() {
                        We('highlight');
                    },
                    playClick() {
                        We('play');
                    },
                    playYes() {
                        We('yes1');
                    },
                };
                var Ge = n(403);
                const Fe = 'App_base_a7',
                    Be = 'App_base__disabled_00',
                    $e = 'App_bg_c0',
                    ze = 'App_hover_ba',
                    Ue = 'App_icon_b7',
                    je = 'App_icon__logo_43',
                    Ve = 'App_icon__done_58',
                    qe = 'App_icon__token_1e',
                    Ke = 'App_icon__error_f7',
                    Ye = 'App_level_e6',
                    Xe = 'App_progress_ad',
                    Ze = 'App_blinkContainer_69',
                    Qe = 'App_shine_ed',
                    Je = 'App_shine__left_b4',
                    et = 'App_shine__right_db',
                    tt = 'App_shine__appear_4e',
                    nt = 'App_blink_c1',
                    rt = 'Level_base_5f',
                    at = 'Level_mask_e6',
                    it = ({ value: e }) =>
                        a().createElement('div', { className: rt }, e, a().createElement('div', { className: at }, e)),
                    ot = (0, Ge.Pi)(() => {
                        const e = q(),
                            t = e.controls,
                            n = e.model,
                            r = n.root.get(),
                            i = r.state,
                            o = r.questNumber,
                            s = r.isCompleted,
                            l = r.currentProgress,
                            c = r.maxProgress,
                            d = S()(Fe, i === N.Error && Be);
                        return a().createElement(
                            De,
                            { contentId: R.views.lobby.battle_matters.tooltips.BattleMattersEntryTooltipView('resId') },
                            a().createElement(
                                'div',
                                {
                                    className: d,
                                    id: 'battle-matters-entry-point',
                                    onClick: () => {
                                        t.onClick(), Ne.playClick();
                                    },
                                    onMouseEnter: () => {
                                        Ne.playHighlight();
                                    },
                                },
                                a().createElement('div', { className: $e }),
                                a().createElement('div', { className: ze }),
                                a().createElement('div', { className: S()(Ue, je) }),
                                s
                                    ? a().createElement('div', { className: S()(Ue, Ve) })
                                    : a().createElement('div', { className: Ye }, a().createElement(it, { value: o })),
                                n.computes.hasProgress() &&
                                    a().createElement(
                                        'div',
                                        { className: Xe },
                                        a().createElement(Ae, { size: Y.Small, value: l, maxValue: c }),
                                    ),
                                i !== N.Error &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: S()(Qe, tt, Je) }),
                                        a().createElement('div', { className: S()(Qe, tt, et) }),
                                    ),
                                i === N.HasToken &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: S()(Ue, qe) }),
                                        a().createElement('div', { className: S()(Qe, Je) }),
                                        a().createElement('div', { className: S()(Qe, et) }),
                                        a().createElement(
                                            'div',
                                            { className: Ze },
                                            a().createElement('div', { className: nt }),
                                        ),
                                    ),
                                i === N.Error && a().createElement('div', { className: S()(Ue, Ke) }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        a().createElement(W, null, a().createElement(V, null, a().createElement(ot, null))),
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), r < a && (a = r));
                    if (i) {
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
        (__webpack_require__.j = 642),
        (() => {
            var e = { 642: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [965], () => __webpack_require__(627));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
