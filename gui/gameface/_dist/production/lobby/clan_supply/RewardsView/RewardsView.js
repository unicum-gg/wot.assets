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
            326: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => ae });
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => g, off: () => _, on: () => d, onResize: () => c, onScaleUpdated: () => u }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => v,
                        getSize: () => p,
                        graphicsQuality: () => f,
                        playSound: () => E,
                        setRTPC: () => h,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => S, getTextureUrl: () => R }));
                var s = {};
                function o(e) {
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
                (r.r(s),
                    r.d(s, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => I,
                        arabic2roman: () => ee,
                        children: () => i,
                        displayStatus: () => O.W,
                        displayStatusIs: () => te,
                        events: () => x,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Z,
                        getFontNames: () => J,
                        getScale: () => V,
                        getSize: () => G,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => K,
                        isFocused: () => Y,
                        pxToRem: () => j,
                        remToPx: () => q,
                        resize: () => W,
                        sendEvent: () => A,
                        setAnimateWindow: () => z,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => ne,
                    }));
                const c = o('clientResized'),
                    u = o('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function r() {
                        e.enabled && l(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        s = m[t]((e) => r([e, 'outside']));
                                    function o(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    w = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(w).reduce((e, t) => ((e[t] = () => E(w[t])), e), {}),
                    T = { play: Object.assign({}, b, { sound: E }), setRTPC: h };
                var y = r(690);
                function R(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function S(e, t, r) {
                    return `url(${R(e, t, r)})`;
                }
                var O = r(112);
                const x = {
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
                    P = ['args'];
                const L = 2,
                    M = 16,
                    k = 32,
                    C = 64,
                    N = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, P);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    A = {
                        close(e) {
                            N('popover' === e ? L : k);
                        },
                        minimize() {
                            N(C);
                        },
                        move(e) {
                            N(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function H(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function j(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const J = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ee = y.cg,
                    te = Object.keys(O.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O.W[t]), e),
                        {},
                    ),
                    re = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ne = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ae = { view: s, client: a, sound: T };
            },
            112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, r) => {
                'use strict';
                let n, a;
                (r.d(t, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})));
            },
            690: (e, t, r) => {
                'use strict';
                r.d(t, { HG: () => o, cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let r = a.length - 1; r >= 0; r--) for (; e >= a[r]; ) ((t += n[r]), (e -= a[r]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (s ? `${e}` : i(e));
            },
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var n = r(326);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, r = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, r, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
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
            916: (e, t, r) => {
                'use strict';
                r.d(t, { B3: () => l, Z5: () => s.Z5, B0: () => o, ry: () => p });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const r = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                n.__instance = void 0;
                const a = n;
                var i = r(358);
                var s = r(613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = r(521),
                    m = r(326);
                const g = ['args'];
                function E(e, t, r, n, a, i, s) {
                    try {
                        var o = e[i](s),
                            l = o.value;
                    } catch (e) {
                        return void r(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        r = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, r);
                                        function s(e) {
                                            E(i, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(i, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    f = () => v(o.CLOSE),
                    w = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = r(572);
                const T = a.instance,
                    y = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                _ = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + s.x,
                                    y: m.O.view.pxToRem(u) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: h(g),
                                on: !0,
                                args: i,
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
                            w(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: p,
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
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < a.length; t++) r[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            917: (e, t, r) => {
                'use strict';
                var n = r(363),
                    a = r.n(n);
                const i = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var s = r(326);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, r) {
                    const n = (function (e, t) {
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
                        })(e, r),
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
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
                    };
                }
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
                })(l || (l = {}));
                const u = s.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, o)),
                    g = (0, n.createContext)(m),
                    E = ['children'];
                const h = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, E);
                    const a = (0, n.useContext)(g),
                        s = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        c = a.small,
                        u = a.extraSmall,
                        d = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        h = a.smallWidth,
                        p = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        f = a.largeHeight,
                        w = a.mediumHeight,
                        b = a.smallHeight,
                        T = a.extraSmallHeight,
                        y = { extraLarge: v, large: f, medium: w, small: b, extraSmall: T };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && s) return t;
                        if (r.large && o) return t;
                        if (r.medium && l) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && d) return i(t, r, y);
                        if (r.largeWidth && _) return i(t, r, y);
                        if (r.mediumWidth && m) return i(t, r, y);
                        if (r.smallWidth && h) return i(t, r, y);
                        if (r.extraSmallWidth && p) return i(t, r, y);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && w) return t;
                            if (r.smallHeight && b) return t;
                            if (r.extraSmallHeight && T) return t;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, n.memo)(h);
                const p = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = ({ children: e }) => {
                        const t = (0, n.useContext)(g),
                            r = (0, n.useState)(t),
                            i = r[0],
                            l = r[1],
                            u = (0, n.useCallback)((e, t) => {
                                const r = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(t);
                                l(Object.assign({ width: r, height: n }, c(r, n, o)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                u(e.width, e.height);
                            }, [u]);
                        (p(() => {
                            (s.O.client.events.on('clientResized', u), s.O.client.events.on('self.onScaleUpdated', d));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (s.O.client.events.off('clientResized', u),
                                        s.O.client.events.off('self.onScaleUpdated', d));
                                },
                                [u, d],
                            ));
                        const _ = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(g.Provider, { value: _ }, e);
                    };
                var f = r(483),
                    w = r.n(f),
                    b = r(926),
                    T = r.n(b);
                let y, S, O;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(y || (y = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(O || (O = {})));
                const x = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            r = e.height,
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
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return O.ExtraLarge;
                                    case e.largeHeight:
                                        return O.Large;
                                    case e.mediumHeight:
                                        return O.Medium;
                                    case e.smallHeight:
                                        return O.Small;
                                    case e.extraSmallHeight:
                                        return O.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), O.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: t, remScreenHeight: r };
                    },
                    P = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const M = {
                        [S.ExtraSmall]: '',
                        [S.Small]: T().SMALL_WIDTH,
                        [S.Medium]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH}`,
                        [S.Large]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH} ${T().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [O.ExtraSmall]: '',
                        [O.Small]: T().SMALL_HEIGHT,
                        [O.Medium]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT}`,
                        [O.Large]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT} ${T().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [y.ExtraSmall]: '',
                        [y.Small]: T().SMALL,
                        [y.Medium]: `${T().SMALL} ${T().MEDIUM}`,
                        [y.Large]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE}`,
                        [y.ExtraLarge]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE} ${T().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, P);
                        const i = x(),
                            s = i.mediaWidth,
                            o = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', L({ className: w()(r, M[s], k[o], C[l]) }, n), t);
                    },
                    A = ['children'];
                const I = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, A);
                    return a().createElement(v, null, a().createElement(N, r, t));
                };
                var D = r(533),
                    B = r.n(D);
                const H = 'App_base_35',
                    U = 'App_closeButton_43',
                    G = 'Body_base_20',
                    W = 'Body_header_c1',
                    F = 'Body_main_9b';
                function $(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const V = {
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
                let j, q;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(j || (j = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(q || (q = {})));
                const z = ({
                    children: e,
                    size: t,
                    isFocused: r,
                    type: i,
                    disabled: s,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: g,
                    onClick: E,
                }) => {
                    const h = (0, n.useRef)(null),
                        p = (0, n.useState)(r),
                        v = p[0],
                        f = p[1],
                        b = (0, n.useState)(!1),
                        T = b[0],
                        y = b[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                v && null !== h.current && !h.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, n.useEffect)(() => {
                            f(r);
                        }, [r]),
                        a().createElement(
                            'div',
                            {
                                ref: h,
                                className: w()(
                                    V.base,
                                    V[`base__${i}`],
                                    s && V.base__disabled,
                                    t && V[`base__${t}`],
                                    v && V.base__focus,
                                    T && V.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== l && $(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && $(c),
                                        _ && _(e),
                                        r && (s || (h.current && (h.current.focus(), f(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (g && g(e), y(!1));
                                },
                                onClick: function (e) {
                                    s || (E && E(e));
                                },
                            },
                            i !== j.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: V.back }),
                                    a().createElement('span', { className: V.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: w()(V.state, V.state__default) },
                                a().createElement('span', { className: V.stateDisabled }),
                                a().createElement('span', { className: V.stateHighlightHover }),
                                a().createElement('span', { className: V.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: V.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                z.defaultProps = { type: j.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Y = z;
                var X = r(515),
                    K = r(946);
                function Q() {}
                function Z() {
                    return !1;
                }
                console.log;
                var J = r(174);
                function ee(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return te(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return te(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const re = (e) => (0 === e ? window : window.subViews.get(e));
                const ne = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: o, children: l, mocks: c }) {
                                const u = (0, n.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = re,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const a = r(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const l = 'string' == typeof i ? `${n}.${i}` : n,
                                                            c = s.O.view.addModelObserver(l, t, !0);
                                                        return (a.set(c, r), e && r(o(i)), c);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const r = o(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = ee(a.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            l =
                                                'real' === r
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = J.LO.box(n, { equals: Z });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = J.LO.box(n, { equals: Z });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = J.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((t) => {
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
                                                                s = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = J.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                s[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: r, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === r && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: r,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(i),
                                    g = m[0],
                                    E = m[1],
                                    h = (0, n.useState)(() => d(i, o, c)),
                                    p = h[0],
                                    v = h[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? v(d(g, o, c)) : (_.current = !0);
                                    }, [c, g, o]),
                                    (0, n.useEffect)(() => {
                                        E(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    a().createElement(r.Provider, { value: p }, l)
                                );
                            },
                            () => (0, n.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                rewards: e.array('rewards'),
                                additionalRewards: e.array('additionalRewards'),
                                isFooterShown: J.LO.box(!1),
                                isCButtonOpensPreview: J.LO.box(!1),
                            };
                            return Object.assign({}, t, {
                                computes: {
                                    hasAdditionalRewards: (0, K.Om)(() => Boolean(t.additionalRewards.get().length)),
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            showFooter: (0, J.aD)(() => {
                                t.isFooterShown.set(!0);
                            }),
                            changeCButtonToVehiclePreview: (0, J.aD)(() => {
                                t.isCButtonOpensPreview.set(!0);
                            }),
                        }),
                    ),
                    ae = ne[0],
                    ie = ne[1],
                    se = 'Footer_base_56',
                    oe = 'Footer_base__shown_f7',
                    le = 'Footer_button_ec',
                    ce = R.strings.clan_supply.rewardsView.button,
                    ue = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            r = e.controls,
                            n = t.isFooterShown.get(),
                            i = t.isCButtonOpensPreview.get();
                        return a().createElement(
                            'div',
                            { className: w()(se, n && oe) },
                            a().createElement(
                                Y,
                                {
                                    disabled: !n,
                                    mixClass: le,
                                    type: 'primary',
                                    soundClick: 'yes',
                                    onClick: () => {
                                        i ? r.goToHangar() : r.close();
                                    },
                                },
                                i ? ce.showInHangar() : ce.confirm(),
                            ),
                        );
                    }),
                    de = 'Header_base_d2',
                    _e = 'Header_subheading_6a',
                    me = 'Header_heading_98',
                    ge = R.strings.clan_supply.rewardsView,
                    Ee = () =>
                        a().createElement(
                            'div',
                            { className: de },
                            a().createElement('div', { className: _e }, ge.subheading()),
                            a().createElement('div', { className: me }, ge.heading()),
                        );
                let he;
                !(function (e) {
                    ((e[(e.COMMON = 0)] = 'COMMON'),
                        (e[(e.ELITE = 1)] = 'ELITE'),
                        (e[(e.ELITE_WITH_VEHICLE = 2)] = 'ELITE_WITH_VEHICLE'));
                })(he || (he = {}));
                const pe = 'Main_base_5e',
                    ve = 'Main_ribbonWrapper_dd',
                    fe = 'Main_ribbon_0a',
                    we = 'Main_base__includesVehicle_de',
                    be = 'Main_glow_6e',
                    Te = 'Main_radialLinesWrapper_55',
                    ye = 'Main_radialLinesFadeInWrapper_10',
                    Re = 'Main_radialLines_54',
                    Se = 'Main_rewards_f4';
                let Oe, xe, Pe, Le, Me, ke, Ce, Ne;
                (!(function (e) {
                    ((e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.BattlePassTicket = 'lootBox_commonTicket'),
                        (e.BattlePassTaler = 'bptaler'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'),
                        (e.Attachment = 'attachment'));
                })(Oe || (Oe = {})),
                    (function (e) {
                        ((e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(xe || (xe = {})),
                    (function (e) {
                        ((e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(Pe || (Pe = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Le || (Le = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(Me || (Me = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ke || (ke = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(Ce || (Ce = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Ne || (Ne = {})));
                const Ae = [Oe.Attachment];
                var Ie = r(916);
                class De extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Ie.B3.GOLD;
                        else e = Ie.B3.INTEGRAL;
                        const t = Ie.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                De.defaultProps = { format: 'integral' };
                const Be = [
                        Oe.Items,
                        Oe.Equipment,
                        Oe.Xp,
                        Oe.XpFactor,
                        Oe.Blueprints,
                        Oe.BlueprintsAny,
                        Oe.Goodies,
                        Oe.Berths,
                        Oe.Slots,
                        Oe.Tokens,
                        Oe.CrewSkins,
                        Oe.CrewBooks,
                        Oe.Customizations,
                        Oe.CreditsFactor,
                        Oe.TankmenXp,
                        Oe.TankmenXpFactor,
                        Oe.FreeXpFactor,
                        Oe.BattleToken,
                        Oe.LootBox,
                        Oe.PremiumUniversal,
                        Oe.NaturalCover,
                        Oe.BpCoin,
                        Oe.BattlePassSelectToken,
                        Oe.BattlaPassFinalAchievement,
                        Oe.BattleBadge,
                        Oe.BattlePassTicket,
                        Oe.BonusX5,
                        Oe.CrewBonusX3,
                        Oe.EpicSelectToken,
                        Oe.Comp7TokenWeeklyReward,
                        Oe.DeluxeGift,
                        Oe.ModernizedDevicesT1Gift,
                        Oe.ModernizedDevicesT2Gift,
                        Oe.ModernizedDevicesT3Gift,
                        Oe.BattleBoosterGift,
                        Oe.OptionalDevice,
                        Oe.Attachment,
                    ],
                    He = [Oe.Gold, Oe.Credits, Oe.Crystal, Oe.FreeXp],
                    Ue = [Oe.BattlePassPoints, Oe.EquipCoin],
                    Ge = [Oe.PremiumPlus, Oe.Premium],
                    We = (e) =>
                        Be.includes(e)
                            ? Le.MULTI
                            : He.includes(e)
                              ? Le.CURRENCY
                              : Ue.includes(e)
                                ? Le.NUMBER
                                : Ge.includes(e)
                                  ? Le.PREMIUM_PLUS
                                  : Le.STRING,
                    Fe = ['engravings', 'backgrounds'],
                    $e = ['engraving', 'background'],
                    Ve = (e, t = Pe.Small) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            i = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case Pe.S600x450:
                                        return 'c_600x450';
                                    case Pe.S400x300:
                                        return 'c_400x300';
                                    case Pe.S296x222:
                                        return 'c_296x222';
                                    case Pe.S232x174:
                                        return 'c_232x174';
                                    case Pe.Big:
                                        return 'c_80x80';
                                    case Pe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'dogTagComponents':
                                return ((e, t, r) => {
                                    const n = Fe[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            i = a.$dyn(r);
                                        return i ? `${i}` : `${a.$dyn($e[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${i}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${i}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${i}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${i}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                        }
                    },
                    je = (e, t, r) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            r,
                        );
                    },
                    qe = [Pe.Small, Pe.Big],
                    ze = [
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
                function Ye(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const Xe = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ie.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    Ke = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            h = void 0 === E || E,
                            p = e.targetId,
                            v = void 0 === p ? 0 : p,
                            f = e.onShow,
                            w = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, ze);
                        const T = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, n.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let r,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var i;
                                        return (
                                            t &&
                                                ((a =
                                                    (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== r &&
                                                    window.subViews[r] &&
                                                    (n = window.subViews[r].id)),
                                            { callerUrl: a, caller: r, stack: t, resId: n }
                                        );
                                    })().resId,
                                [v],
                            ),
                            S = (0, n.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (Xe(r, g, { isMouseEvent: !0, on: !0, arguments: Ye(a) }, y),
                                    f && f(),
                                    (T.current.isVisible = !0));
                            }, [r, g, a, y, f]),
                            O = (0, n.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        Xe(r, g, { on: !1 }, y),
                                        T.current.isVisible && w && w(),
                                        (T.current.isVisible = !1));
                                }
                            }, [r, g, y, w]),
                            x = (0, n.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && O();
                            }, [h, O]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        (window.removeEventListener('mouseleave', O), O());
                                    }
                                ),
                                [O],
                            ));
                        return h
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((P = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(S, u ? 100 : 400)),
                                                      i && i(e),
                                                      P && P(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (O(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && O(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && O(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var P;
                    },
                    Qe = ['children'];
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Je = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Qe);
                        return a().createElement(
                            Ke,
                            Ze(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                r,
                            ),
                            t,
                        );
                    },
                    et = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const rt = R.views.common.tooltip_window.simple_tooltip_content,
                    nt = (e) => {
                        let t = e.children,
                            r = e.body,
                            i = e.header,
                            s = e.note,
                            o = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, et);
                        const u = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: r, header: i, note: s, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, r, i, s, l]);
                        return a().createElement(
                            Ke,
                            tt(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? rt.SimpleTooltipHtmlContent('resId') : rt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const it = ({ children: e, tooltipArgs: t, className: r }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: r }, e);
                        if (t.header || t.body) return a().createElement(nt, t, n);
                        const i = t.contentId;
                        return i ? a().createElement(Ke, at({}, t, { contentId: i }), n) : a().createElement(Je, t, n);
                    },
                    st = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        base__normalize: 'Reward_base__normalize_a6',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    ot = ({
                        name: e,
                        image: t,
                        isPeriodic: r = !1,
                        size: n = Pe.Big,
                        special: i,
                        value: s,
                        valueType: o,
                        title: l,
                        style: c,
                        className: u,
                        classNames: d,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !qe.includes(e)) return null;
                                switch (t) {
                                    case Me.BATTLE_BOOSTER:
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return ke.BATTLE_BOOSTER;
                                }
                            })(n, i),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Me.BATTLE_BOOSTER:
                                        return Ce.BATTLE_BOOSTER;
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return Ce.BATTLE_BOOSTER_REPLACE;
                                    case Me.BUILT_IN_EQUIPMENT:
                                        return Ce.BUILT_IN_EQUIPMENT;
                                    case Me.EQUIPMENT_PLUS:
                                        return Ce.EQUIPMENT_PLUS;
                                    case Me.EQUIPMENT_TROPHY_BASIC:
                                        return Ce.EQUIPMENT_TROPHY_BASIC;
                                    case Me.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ce.EQUIPMENT_TROPHY_UPGRADED;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ce.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ce.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ce.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ce.PROGRESSION_STYLE_UPGRADED_1;
                                    case Me.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ce.PROGRESSION_STYLE_UPGRADED_2;
                                    case Me.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ce.PROGRESSION_STYLE_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ce.PROGRESSION_STYLE_UPGRADED_4;
                                    case Me.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ce.PROGRESSION_STYLE_UPGRADED_5;
                                    case Me.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ce.PROGRESSION_STYLE_UPGRADED_6;
                                    case Me.ATTACHMENT_RARE:
                                        return Ce.ATTACHMENT_RARE;
                                    case Me.ATTACHMENT_EPIC:
                                        return Ce.ATTACHMENT_EPIC;
                                    case Me.ATTACHMENT_LEGENDARY:
                                        return Ce.ATTACHMENT_LEGENDARY;
                                }
                            })(i),
                            h = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Le.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Le.CURRENCY:
                                    case Le.NUMBER:
                                        return a().createElement(De, { format: 'integral', value: Number(e) });
                                    case Le.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return a().createElement(
                            'div',
                            {
                                className: w()(st.base, st[`base__${n}`], Ae.includes(e) && st.base__normalize, u),
                                style: c,
                            },
                            a().createElement(
                                it,
                                { tooltipArgs: _, className: st.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: w()(st.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: w()(st.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: w()(st.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            a().createElement('div', {
                                                className: w()(st.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    h &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: w()(
                                                    st.info,
                                                    st[`info__${e}`],
                                                    o === Le.MULTI && st.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            h,
                                        ),
                                    l && a().createElement('div', { className: st.title }, l),
                                ),
                            ),
                            r &&
                                a().createElement(
                                    it,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: w()(st.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function lt(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, n) => t(null == e ? void 0 : e.value, r, n));
                }
                var ct = r(30);
                const ut = 'AnimatedReward_base_f5',
                    dt = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    _t = 800,
                    mt = 400,
                    gt = 'equipCoin',
                    Et = ({ index: e = 0, delay: t = 0, onEnd: r, isCompensation: n, children: i }) => {
                        const s = (0, ct.useSpring)({
                            from: { transform: 'translateY(20rem) scale(1.2)', opacity: 0 },
                            to: { transform: 'translateY(0rem) scale(1)', opacity: 1 },
                            delay: t + 200 * e,
                            config: { duration: mt, easing: dt },
                            onStart: () => {
                                ($('gui_random_reward_appear'), n && $('gui_reward_screen_compensation'));
                            },
                            onRest: r,
                        });
                        return a().createElement(ct.animated.div, { className: ut, style: s }, i);
                    },
                    ht = (e, t, r) => () => {
                        e === t.length - 1 && r();
                    },
                    pt = {
                        base: 'Rewards_base_a4',
                        labelWrapper: 'Rewards_labelWrapper_05',
                        label: 'Rewards_label_bb',
                        info: 'Rewards_info_60',
                        info__currency: 'Rewards_info__currency_fe',
                        info__compensation: 'Rewards_info__compensation_1b',
                        info__hidden: 'Rewards_info__hidden_13',
                        overlay: 'Rewards_overlay_90',
                        overlay__battleBooster: 'Rewards_overlay__battleBooster_57',
                    },
                    vt = 'CommonRewards_base_bd';
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const wt = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            r = e.controls,
                            n = ((e) => {
                                switch (e) {
                                    case y.ExtraSmall:
                                    case y.Small:
                                        return Pe.S232x174;
                                    case y.Medium:
                                        return Pe.S296x222;
                                    case y.Large:
                                    case y.ExtraLarge:
                                        return Pe.S400x300;
                                }
                            })(x().mediaSize);
                        return a().createElement(
                            'div',
                            { className: vt },
                            lt(t.rewards.get(), (e, t, i) => {
                                const s = e.tooltipId,
                                    o = je({ tooltipId: s }, Number(e.tooltipContentId)),
                                    l = We(e.name),
                                    c = l === Le.CURRENCY || e.name === gt;
                                return a().createElement(
                                    Et,
                                    { key: t, index: t, delay: _t, onEnd: ht(t, i, r.showFooter) },
                                    a().createElement(
                                        ot,
                                        ft({}, e, {
                                            image: Ve(e, n),
                                            size: n,
                                            special: e.overlayType,
                                            valueType: l,
                                            tooltipArgs: o,
                                            classNames: {
                                                info: w()(pt.info, c && pt.info__currency),
                                                overlay: w()(pt.overlay, pt[`overlay__${e.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !c &&
                                        a().createElement(
                                            'div',
                                            { className: pt.labelWrapper },
                                            a().createElement('div', { className: pt.label }, e.label),
                                        ),
                                );
                            }),
                        );
                    }),
                    bt = 'StyleReward_base_16',
                    Tt = 'StyleReward_image_4f',
                    yt = 'StyleReward_text_ed',
                    Rt = R.strings.clan_supply.rewardsView.style,
                    St = ({ id: e, size: t, tooltipArgs: r }) => {
                        const n = R.images.gui.maps.icons.clanSupply.rewardsView.rewards.$dyn(`c_${e}`);
                        return a().createElement(
                            it,
                            { tooltipArgs: r },
                            a().createElement(
                                'div',
                                { className: bt },
                                t &&
                                    a().createElement('div', {
                                        className: Tt,
                                        style: { backgroundImage: `url(${n.$dyn(t)})` },
                                    }),
                                a().createElement('div', { className: yt }, Rt.$dyn(`c_${e}`)),
                            ),
                        );
                    },
                    Ot = 'EliteRewards_base_df';
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const Pt = (0, X.Pi)(() => {
                    const e = ie(),
                        t = e.model,
                        r = e.controls,
                        n = ((e) => {
                            switch (e) {
                                case y.ExtraSmall:
                                case y.Small:
                                    return Pe.S232x174;
                                case y.Medium:
                                case y.Large:
                                case y.ExtraLarge:
                                    return Pe.S400x300;
                            }
                        })(x().mediaSize);
                    return a().createElement(
                        'div',
                        { className: Ot },
                        lt(t.rewards.get(), (e, t, i) => {
                            const s = e.tooltipId,
                                o = je({ tooltipId: s }, Number(e.tooltipContentId)),
                                l = We(e.name),
                                c = l === Le.CURRENCY || e.name === gt,
                                u = e.name === Oe.Customizations;
                            return a().createElement(
                                Et,
                                { key: t, index: t, delay: _t, onEnd: ht(t, i, r.showFooter) },
                                u
                                    ? a().createElement(St, { id: e.value, tooltipArgs: o, size: n })
                                    : a().createElement(
                                          ot,
                                          xt({}, e, {
                                              image: Ve(e, n),
                                              size: n,
                                              special: e.overlayType,
                                              valueType: l,
                                              tooltipArgs: o,
                                              classNames: {
                                                  info: w()(pt.info, c && pt.info__currency),
                                                  overlay: w()(pt.overlay, pt[`overlay__${e.overlayType}`]),
                                              },
                                          }),
                                      ),
                                !c &&
                                    !u &&
                                    a().createElement(
                                        'div',
                                        { className: pt.labelWrapper },
                                        a().createElement('div', { className: pt.label }, e.label),
                                    ),
                            );
                        }),
                    );
                });
                var Lt = r(690);
                const Mt = 'VehicleReward_base_60',
                    kt = 'VehicleReward_image_85',
                    Ct = 'VehicleReward_name_0d',
                    Nt = 'VehicleReward_typeIcon_ae',
                    At = ({ tooltipArgs: e }) =>
                        a().createElement(
                            it,
                            { tooltipArgs: e },
                            a().createElement(
                                'div',
                                { className: Mt },
                                a().createElement('div', { className: kt }),
                                a().createElement(
                                    'div',
                                    { className: Ct },
                                    (0, Lt.HG)(10),
                                    a().createElement('div', { className: Nt }),
                                    R.strings.italy_vehicles.It20_Carro_Combattimento_45t(),
                                ),
                            ),
                        ),
                    It = 'EliteWithVehicleRewards_base_49',
                    Dt = 'EliteWithVehicleRewards_wrapper_65',
                    Bt = 'EliteWithVehicleRewards_iconCompensation_9e',
                    Ht = 'EliteWithVehicleRewards_mainRewards_ee',
                    Ut = 'EliteWithVehicleRewards_additionalRewards_f5',
                    Gt = 'AdditionalRewards_base_f6',
                    Wt = 'AdditionalRewards_title_ab',
                    Ft = 'AdditionalRewards_content_f9';
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Vt = (0, X.Pi)(({ showDelay: e }) => {
                    const t = ie(),
                        r = t.model,
                        n = t.controls,
                        i = ((e) => {
                            switch (e) {
                                case y.ExtraSmall:
                                case y.Small:
                                    return Pe.Small;
                                case y.Medium:
                                case y.Large:
                                case y.ExtraLarge:
                                    return Pe.Big;
                            }
                        })(x().mediaSize);
                    return a().createElement(
                        'div',
                        { className: Gt },
                        a().createElement(
                            'div',
                            {
                                className: Wt,
                                style: {
                                    '--additionalTitleDelay': `${e + 200}ms`,
                                    '--additionalTitleDuration': '400ms',
                                },
                            },
                            R.strings.clan_supply.rewardsView.additionalRewards(),
                        ),
                        a().createElement(
                            'div',
                            { className: Ft },
                            lt(r.additionalRewards.get(), (t, r, s) => {
                                const o = t.tooltipId,
                                    l = je({ tooltipId: o }, Number(t.tooltipContentId)),
                                    c = We(t.name),
                                    u = c === Le.CURRENCY || t.name === gt,
                                    d = t.name === Oe.Customizations;
                                return a().createElement(
                                    Et,
                                    { key: r, index: r, delay: e + 200 + mt, onEnd: ht(r, s, n.showFooter) },
                                    a().createElement(
                                        ot,
                                        $t({}, t, {
                                            image: Ve(t, i),
                                            size: i,
                                            special: t.overlayType,
                                            valueType: c,
                                            tooltipArgs: l,
                                            classNames: {
                                                info: w()(pt.info, u && pt.info__currency, d && pt.info__hidden),
                                                overlay: w()(pt.overlay, pt[`overlay__${t.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !u &&
                                        !d &&
                                        a().createElement(
                                            'div',
                                            { className: pt.labelWrapper },
                                            a().createElement('div', { className: pt.label }, t.label),
                                        ),
                                );
                            }),
                        ),
                    );
                });
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const qt = (e) => {
                        switch (e) {
                            case 0:
                                return 1;
                            case 1:
                                return 0;
                            default:
                                return e;
                        }
                    },
                    zt = R.views.common.tooltip_window,
                    Yt = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            r = e.controls,
                            n = t.computes.hasAdditionalRewards(),
                            i = ((e) => {
                                switch (e) {
                                    case y.ExtraSmall:
                                    case y.Small:
                                    case y.Medium:
                                        return Pe.S400x300;
                                    case y.Large:
                                    case y.ExtraLarge:
                                        return Pe.S600x450;
                                }
                            })(x().mediaSize),
                            s = ((o = t.rewards.get().length), _t + o * mt);
                        var o;
                        return a().createElement(
                            'div',
                            { className: It },
                            a().createElement(
                                'div',
                                { className: Ht },
                                lt(t.rewards.get(), (e, t, s) => {
                                    const o = e.tooltipId,
                                        l = ((e, t) => {
                                            const r = Number(e),
                                                n =
                                                    r ===
                                                    zt.loot_box_compensation_tooltip.LootBoxVehicleCompensationTooltipContent(
                                                        'resId',
                                                    )
                                                        ? zt.tooltip_window.TooltipWindow('resId')
                                                        : void 0;
                                            return je({ tooltipId: t }, r, { decoratorId: n, ignoreShowDelay: !0 });
                                        })(e.tooltipContentId, o),
                                        c = e.name === Oe.Vehicles;
                                    return (
                                        c && r.changeCButtonToVehiclePreview(),
                                        a().createElement(
                                            Et,
                                            {
                                                key: t,
                                                index: qt(t),
                                                delay: _t,
                                                onEnd: n ? void 0 : ht(t, s, r.showFooter),
                                                isCompensation: e.isCompensation,
                                            },
                                            c
                                                ? a().createElement(At, { tooltipArgs: l })
                                                : a().createElement(
                                                      'div',
                                                      { className: Dt },
                                                      a().createElement(
                                                          ot,
                                                          jt({}, e, {
                                                              image: Ve(e, i),
                                                              size: i,
                                                              valueType: We(e.name),
                                                              tooltipArgs: l,
                                                              classNames: {
                                                                  info: w()(
                                                                      pt.info,
                                                                      e.isCompensation && pt.info__compensation,
                                                                  ),
                                                                  overlay: w()(
                                                                      pt.overlay,
                                                                      pt[`overlay__${e.overlayType}`],
                                                                  ),
                                                              },
                                                          }),
                                                      ),
                                                      e.isCompensation && a().createElement('div', { className: Bt }),
                                                  ),
                                        )
                                    );
                                }),
                            ),
                            n && a().createElement('div', { className: Ut }, a().createElement(Vt, { showDelay: s })),
                        );
                    }),
                    Xt = (0, X.Pi)(() => {
                        switch (ie().model.root.get().type) {
                            case he.COMMON:
                                return a().createElement(wt, null);
                            case he.ELITE_WITH_VEHICLE:
                                return a().createElement(Yt, null);
                            case he.ELITE:
                                return a().createElement(Pt, null);
                            default:
                                return null;
                        }
                    }),
                    Kt = (0, X.Pi)(() => {
                        const e = ie().model.root.get().type === he.ELITE_WITH_VEHICLE;
                        return a().createElement(
                            'div',
                            { className: w()(pe, e && we) },
                            a().createElement(
                                'div',
                                { className: ve },
                                a().createElement('div', { className: be }),
                                a().createElement('div', { className: fe }),
                                a().createElement(
                                    'div',
                                    { className: ye },
                                    a().createElement(
                                        'div',
                                        { className: Te },
                                        a().createElement('div', { className: Re }),
                                    ),
                                ),
                                a().createElement('div', { className: Se }, a().createElement(Xt, null)),
                            ),
                        );
                    }),
                    Qt = () =>
                        a().createElement(
                            'div',
                            { className: G },
                            a().createElement('div', { className: W }, a().createElement(Ee, null)),
                            a().createElement('div', { className: F }, a().createElement(Kt, null)),
                            a().createElement(ue, null),
                        ),
                    Zt = {
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
                    Jt = [
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
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                class tr extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && $(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && $(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            r = e.onClick,
                            n = e.goto,
                            i = e.side,
                            s = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(e, Jt)),
                            m = w()(Zt.base, Zt[`base__${s}`], Zt[`base__${i}`], null == o ? void 0 : o.base),
                            g = w()(Zt.icon, Zt[`icon__${s}`], Zt[`icon__${i}`], null == o ? void 0 : o.icon),
                            E = w()(Zt.glow, null == o ? void 0 : o.glow),
                            h = w()(Zt.caption, Zt[`caption__${s}`], null == o ? void 0 : o.caption),
                            p = w()(Zt.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            er(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: r,
                                },
                                _,
                            ),
                            'info' !== s && a().createElement('div', { className: Zt.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: E })),
                            a().createElement('div', { className: h }, t),
                            n && a().createElement('div', { className: p }, n),
                        );
                    }
                }
                tr.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var rr = r(521);
                const nr = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ar(e = rr.n.NONE, t = nr, r = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== rr.n.NONE)
                            return (
                                window.addEventListener('keydown', n, r),
                                () => {
                                    window.removeEventListener('keydown', n, r);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), t(n), r && n.stopPropagation());
                            }
                        }
                    }, [t, e, r, a]);
                }
                const ir = (0, X.Pi)(() => {
                    const e = ie().controls;
                    var t;
                    return (
                        (t = e.close),
                        ar(rr.n.ESCAPE, t),
                        a().createElement(tr, {
                            type: 'close',
                            side: 'right',
                            caption: R.strings.clan_supply.rewardsView.button.close(),
                            onClick: e.close,
                        })
                    );
                });
                var sr = r(112);
                const or = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function lr() {
                    return (
                        (lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        lr.apply(this, arguments)
                    );
                }
                const cr = (0, n.forwardRef)(function (e, t) {
                        let r = e.src,
                            i = e.className,
                            o = e.autoplay,
                            l = void 0 !== o && o,
                            c = e.style,
                            u = e.loop,
                            d = void 0 !== u && u,
                            _ = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            g = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, or);
                        const h = t,
                            p = (0, n.useRef)(null);
                        var v;
                        return (
                            (v = () =>
                                s.O.view.events.onDisplayChanged((e, t) => {
                                    var r, n;
                                    (t === sr.W.hidden && (null == (r = p.current) || r.pause()),
                                        t === sr.W.shown && (null == (n = p.current) || n.play()));
                                })),
                            (0, n.useEffect)(v, []),
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            r = null;
                                        return (
                                            (r = requestAnimationFrame(() => {
                                                r = requestAnimationFrame(() => {
                                                    ((r = null), (t = e()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof t && t(), null !== r && cancelAnimationFrame(r));
                                            }
                                        );
                                    })(() => {
                                        const e = p.current;
                                        if (!h || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, h],
                            ),
                            (0, n.useEffect)(() => {
                                if (h && p.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Q },
                                        t = () => {
                                            let t = 0;
                                            const r = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function r() {
                                                            (e(), (t = requestAnimationFrame(r)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (p.current) {
                                                        const r = p.current,
                                                            n = r.currentTime,
                                                            a = r.duration;
                                                        if (
                                                            (t !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: a }),
                                                                ),
                                                                (t = n)),
                                                            p.current.paused || !h || !_)
                                                        )
                                                            return;
                                                        const i = p.current.cohGetKeyframeTimestamps();
                                                        i.forEach((t, r) => {
                                                            n > i[r] - 0.02 &&
                                                                n < i[r] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != m ? m : {})[r];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${m ? n : `Point_${r}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = r[0],
                                                a = r[1];
                                            return (n(), a);
                                        };
                                    e.changeTimeLoop = t();
                                    const r = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const r = e.changeTimeHandlers,
                                                    n = r.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : r.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const r = e.changeKeyframeHandlers,
                                                    n = r.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : r.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            var t, r, n;
                                            p.current &&
                                                (p.current.currentTime =
                                                    ((t = 0),
                                                    (r = p.current.duration),
                                                    (n = e) < t ? t : n > r ? r : n));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        l = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            (l(), s(0));
                                        },
                                        u = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = p.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (s(e), o());
                                        },
                                        g = (e) => {
                                            (s(e), l());
                                        },
                                        E = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        v = (e, t) => {
                                            var r;
                                            return (
                                                null == (r = p.current) || r.addEventListener(e, t),
                                                () => {
                                                    var r;
                                                    return null == (r = p.current)
                                                        ? void 0
                                                        : r.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        f = (e, t) => {
                                            var r;
                                            return (
                                                null == (r = p.current) || r.removeEventListener(e, t),
                                                () => {
                                                    var r;
                                                    return null == (r = p.current)
                                                        ? void 0
                                                        : r.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (h.current = {
                                            on: v,
                                            off: f,
                                            play: o,
                                            pause: l,
                                            stop: c,
                                            cleanup: E,
                                            getCurrentTime: a,
                                            getDuration: i,
                                            getCachedKeyframes: u,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: s,
                                            domRef: p.current,
                                            onChangeTime: r,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (E(), (h.current = null));
                                        }
                                    );
                                }
                            }, [m, h, _]),
                            (0, n.useEffect)(() => {
                                p.current && l && p.current.play();
                            }, [l, d]),
                            (0, n.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                lr({ src: r, className: i, style: c, loop: d, ref: p, onClick: g }, E),
                            )
                        );
                    }),
                    ur = (0, n.memo)(cr),
                    dr = 'VideoBack_base_e2',
                    _r = 'VideoBack_video_ac',
                    mr = (e, t) => {
                        const r = e.$dyn(t);
                        if ('string' == typeof r) return r;
                        throw new Error(`Video filename ${t} is invalid`);
                    },
                    gr = () => {
                        const e = x().mediaWidth;
                        return a().createElement(
                            'div',
                            { className: dr, key: e },
                            a().createElement(ur, {
                                className: _r,
                                src: mr(R.videos.clan_supply, `clouds_${e}`),
                                loop: !0,
                                autoplay: !0,
                            }),
                        );
                    },
                    Er = 'Background_base_f5',
                    hr = 'Background_base__2x_1b',
                    pr = 'Background_base__shaded_0f',
                    vr = 'Background_shadow_ba',
                    fr = 'Background_videoBack_d9',
                    wr = ({ isShaded: e = !1, withVideo: t = !1 }) => {
                        const r = 2 === s.O.view.getScale();
                        return a().createElement(
                            'div',
                            { className: w()(Er, r && hr, e && pr) },
                            e && a().createElement('div', { className: vr }),
                            t && a().createElement('div', { className: fr }, a().createElement(gr, null)),
                        );
                    },
                    br = () =>
                        a().createElement(
                            'div',
                            { className: H },
                            a().createElement(wr, { isShaded: !0 }),
                            a().createElement('div', { className: U }, a().createElement(ir, null)),
                            a().createElement(Qt, null),
                        );
                engine.whenReady.then(() => {
                    B().render(
                        a().createElement(ae, null, a().createElement(I, null, a().createElement(br, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (e) => {
                'use strict';
                e.exports = React;
            },
            533: (e) => {
                'use strict';
                e.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](r, r.exports, __webpack_require__), r.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var o = r();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 477),
        (() => {
            var e = { 477: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        a,
                        [i, s, o] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        ((a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [687], () => __webpack_require__(917));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
