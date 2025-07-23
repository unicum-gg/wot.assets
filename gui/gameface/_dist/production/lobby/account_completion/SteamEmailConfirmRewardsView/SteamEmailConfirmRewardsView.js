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
            99: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => oe });
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => g, off: () => _, on: () => d, onResize: () => c, onScaleUpdated: () => u }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => v,
                        getSize: () => p,
                        graphicsQuality: () => w,
                        playSound: () => E,
                        setRTPC: () => h,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => L, getTextureUrl: () => O }));
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
                        addModelObserver: () => W,
                        addPreloadTexture: () => U,
                        arabic2roman: () => ne,
                        children: () => i,
                        displayStatus: () => y,
                        displayStatusIs: () => ae,
                        events: () => M,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => te,
                        getFontNames: () => re,
                        getScale: () => z,
                        getSize: () => $,
                        getViewGlobalPosition: () => j,
                        isEventHandled: () => J,
                        isFocused: () => Q,
                        pxToRem: () => X,
                        remToPx: () => V,
                        resize: () => q,
                        sendEvent: () => B,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => se,
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
                const w = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(b).reduce((e, t) => ((e[t] = () => E(b[t])), e), {}),
                    T = { play: Object.assign({}, f, { sound: E }), setRTPC: h },
                    S = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    x = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function P(e) {
                    let t = '';
                    for (let r = x.length - 1; r >= 0; r--) for (; e >= x[r]; ) ((t += S[r]), (e -= x[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function O(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function L(e, t, r) {
                    return `url(${O(e, t, r)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    M = {
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
                    k = ['args'];
                const A = 2,
                    D = 16,
                    I = 32,
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
                                })(t, k);
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
                    B = {
                        close(e) {
                            N('popover' === e ? A : I);
                        },
                        minimize() {
                            N(C);
                        },
                        move(e) {
                            N(D, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function G(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function W(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ne = P,
                    ae = Object.keys(y).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === y[t]), e), {}),
                    ie = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    oe = { view: s, client: a, sound: T };
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
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var n = r(99);
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
                    m = r(99);
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
                    w = () => v(o.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var f = r(572);
                const T = a.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
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
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, w);
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
                window.ViewEnvHelper = S;
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
            502: (e, t, r) => {
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
                var s = r(99);
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
                        w = a.largeHeight,
                        b = a.mediumHeight,
                        f = a.smallHeight,
                        T = a.extraSmallHeight,
                        R = { extraLarge: v, large: w, medium: b, small: f, extraSmall: T };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && s) return t;
                        if (r.large && o) return t;
                        if (r.medium && l) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && d) return i(t, r, R);
                        if (r.largeWidth && _) return i(t, r, R);
                        if (r.mediumWidth && m) return i(t, r, R);
                        if (r.smallWidth && h) return i(t, r, R);
                        if (r.extraSmallWidth && p) return i(t, r, R);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && w) return t;
                            if (r.mediumHeight && b) return t;
                            if (r.smallHeight && f) return t;
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
                var w = r(483),
                    b = r.n(w),
                    f = r(926),
                    T = r.n(f);
                let S, x, P;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(S || (S = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(x || (x = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(P || (P = {})));
                const O = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return S.ExtraLarge;
                                    case e.large:
                                        return S.Large;
                                    case e.medium:
                                        return S.Medium;
                                    case e.small:
                                        return S.Small;
                                    case e.extraSmall:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return x.ExtraLarge;
                                    case e.largeWidth:
                                        return x.Large;
                                    case e.mediumWidth:
                                        return x.Medium;
                                    case e.smallWidth:
                                        return x.Small;
                                    case e.extraSmallWidth:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return P.ExtraLarge;
                                    case e.largeHeight:
                                        return P.Large;
                                    case e.mediumHeight:
                                        return P.Medium;
                                    case e.smallHeight:
                                        return P.Small;
                                    case e.extraSmallHeight:
                                        return P.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), P.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: t, remScreenHeight: r };
                    },
                    L = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const M = {
                        [x.ExtraSmall]: '',
                        [x.Small]: T().SMALL_WIDTH,
                        [x.Medium]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH}`,
                        [x.Large]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${T().SMALL_WIDTH} ${T().MEDIUM_WIDTH} ${T().LARGE_WIDTH} ${T().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [P.ExtraSmall]: '',
                        [P.Small]: T().SMALL_HEIGHT,
                        [P.Medium]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT}`,
                        [P.Large]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT}`,
                        [P.ExtraLarge]: `${T().SMALL_HEIGHT} ${T().MEDIUM_HEIGHT} ${T().LARGE_HEIGHT} ${T().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [S.ExtraSmall]: '',
                        [S.Small]: T().SMALL,
                        [S.Medium]: `${T().SMALL} ${T().MEDIUM}`,
                        [S.Large]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE}`,
                        [S.ExtraLarge]: `${T().SMALL} ${T().MEDIUM} ${T().LARGE} ${T().EXTRA_LARGE}`,
                    },
                    D = (e) => {
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
                            })(e, L);
                        const i = O(),
                            s = i.mediaWidth,
                            o = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', y({ className: b()(r, M[s], k[o], A[l]) }, n), t);
                    },
                    I = ['children'];
                const C = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, I);
                    return a().createElement(v, null, a().createElement(D, r, t));
                };
                var N = r(533),
                    B = r.n(N);
                function U(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const H = {
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
                let G, W;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(G || (G = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(W || (W = {})));
                const F = ({
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
                        w = p[1],
                        f = (0, n.useState)(!1),
                        T = f[0],
                        S = f[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                v && null !== h.current && !h.current.contains(e.target) && w(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, n.useEffect)(() => {
                            w(r);
                        }, [r]),
                        a().createElement(
                            'div',
                            {
                                ref: h,
                                className: b()(
                                    H.base,
                                    H[`base__${i}`],
                                    s && H.base__disabled,
                                    t && H[`base__${t}`],
                                    v && H.base__focus,
                                    T && H.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== l && U(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), S(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && U(c),
                                        _ && _(e),
                                        r && (s || (h.current && (h.current.focus(), w(!0)))),
                                        S(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (g && g(e), S(!1));
                                },
                                onClick: function (e) {
                                    s || (E && E(e));
                                },
                            },
                            i !== G.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: H.back }),
                                    a().createElement('span', { className: H.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: b()(H.state, H.state__default) },
                                a().createElement('span', { className: H.stateDisabled }),
                                a().createElement('span', { className: H.stateHighlightHover }),
                                a().createElement('span', { className: H.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: H.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                F.defaultProps = { type: G.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = F,
                    q = {
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
                    j = [
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
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                class z extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick));
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
                                })(e, j)),
                            m = b()(q.base, q[`base__${s}`], q[`base__${i}`], null == o ? void 0 : o.base),
                            g = b()(q.icon, q[`icon__${s}`], q[`icon__${i}`], null == o ? void 0 : o.icon),
                            E = b()(q.glow, null == o ? void 0 : o.glow),
                            h = b()(q.caption, q[`caption__${s}`], null == o ? void 0 : o.caption),
                            p = b()(q.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            Y(
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
                            'info' !== s && a().createElement('div', { className: q.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: E })),
                            a().createElement('div', { className: h }, t),
                            n && a().createElement('div', { className: p }, n),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const X = [];
                var V = r(521),
                    K = r(916);
                const Q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Z(e = V.n.NONE, t = Q, r = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== V.n.NONE)
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
                var J = r(403);
                class ee extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = K.B3.GOLD;
                        else e = K.B3.INTEGRAL;
                        const t = K.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                let te, re, ne, ae, ie, se, oe, le;
                ((ee.defaultProps = { format: 'integral' }),
                    (function (e) {
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
                    })(te || (te = {})),
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
                    })(re || (re = {})),
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
                    })(ne || (ne = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ae || (ae = {})),
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
                    })(ie || (ie = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(se || (se = {})),
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
                    })(oe || (oe = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(le || (le = {})));
                const ce = [te.Attachment],
                    ue = [
                        te.Items,
                        te.Equipment,
                        te.Xp,
                        te.XpFactor,
                        te.Blueprints,
                        te.BlueprintsAny,
                        te.Goodies,
                        te.Berths,
                        te.Slots,
                        te.Tokens,
                        te.CrewSkins,
                        te.CrewBooks,
                        te.Customizations,
                        te.CreditsFactor,
                        te.TankmenXp,
                        te.TankmenXpFactor,
                        te.FreeXpFactor,
                        te.BattleToken,
                        te.LootBox,
                        te.PremiumUniversal,
                        te.NaturalCover,
                        te.BpCoin,
                        te.BattlePassSelectToken,
                        te.BattlaPassFinalAchievement,
                        te.BattleBadge,
                        te.BattlePassTicket,
                        te.BonusX5,
                        te.CrewBonusX3,
                        te.EpicSelectToken,
                        te.Comp7TokenWeeklyReward,
                        te.DeluxeGift,
                        te.ModernizedDevicesT1Gift,
                        te.ModernizedDevicesT2Gift,
                        te.ModernizedDevicesT3Gift,
                        te.BattleBoosterGift,
                        te.OptionalDevice,
                        te.Attachment,
                    ],
                    de = [te.Gold, te.Credits, te.Crystal, te.FreeXp],
                    _e = [te.BattlePassPoints, te.EquipCoin],
                    me = [te.PremiumPlus, te.Premium],
                    ge = ['engravings', 'backgrounds'],
                    Ee = ['engraving', 'background'],
                    he = (e, t = ne.Small) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            i = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case ne.S600x450:
                                        return 'c_600x450';
                                    case ne.S400x300:
                                        return 'c_400x300';
                                    case ne.S296x222:
                                        return 'c_296x222';
                                    case ne.S232x174:
                                        return 'c_232x174';
                                    case ne.Big:
                                        return 'c_80x80';
                                    case ne.Small:
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
                                    const n = ge[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            i = a.$dyn(r);
                                        return i ? `${i}` : `${a.$dyn(Ee[e])}`;
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
                    pe = (e, t, r) => {
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
                    ve = [ne.Small, ne.Big];
                function we() {
                    return !1;
                }
                console.log;
                var be = r(174);
                function fe(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Te(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return Te(e, t);
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
                function Te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const Re = (e) => (0 === e ? window : window.subViews.get(e));
                var Se = r(946);
                const xe = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: o, children: l, mocks: c }) {
                                const u = (0, n.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Re,
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
                                                        for (var e, r = fe(a.keys()); !(e = r()).done; ) i(e.value, t);
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
                                                            a = be.LO.box(n, { equals: we });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, be.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = be.LO.box(n, { equals: we });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, be.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = be.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, be.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = be.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, be.aD)((e) => {
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
                            const t = { rewards: e.array('bonuses') },
                                r = (0, Se.Om)(() => {
                                    return (
                                        (e = t.rewards.get()),
                                        (r = (e) => {
                                            return {
                                                index: (t = e).index,
                                                name: t.name,
                                                image: (e) => he(t, e),
                                                value: t.value,
                                                valueType:
                                                    ((r = t.name),
                                                    ue.includes(r)
                                                        ? ae.MULTI
                                                        : de.includes(r)
                                                          ? ae.CURRENCY
                                                          : _e.includes(r)
                                                            ? ae.NUMBER
                                                            : me.includes(r)
                                                              ? ae.PREMIUM_PLUS
                                                              : ae.STRING),
                                                special: t.overlayType,
                                                tooltipArgs: pe({ tooltipId: t.tooltipId }),
                                            };
                                            var t, r;
                                        }),
                                        Array.isArray(e)
                                            ? e.map(r)
                                            : e.map((e, t, n) => r(null == e ? void 0 : e.value, t, n))
                                    );
                                    var e, r;
                                });
                            return Object.assign({}, t, { computes: { getRewards: r } });
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    Pe = xe[0],
                    Oe = xe[1],
                    Le = 'App_base_91',
                    ye = 'App_closeButton_f9',
                    Me = 'App_header_b0',
                    ke = 'App_title_35',
                    Ae = 'App_subTitle_78',
                    De = 'App_rewards_07',
                    Ie = 'App_confirmButton_f7',
                    Ce = 'App_confirmButton__showed_0f',
                    Ne = [
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
                function Be(e) {
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
                const Ue = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    He = (e) => {
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
                            w = e.onShow,
                            b = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Ne);
                        const T = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(
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
                            x = (0, n.useCallback)(() => {
                                (T.current.isVisible && T.current.timeoutId) ||
                                    (Ue(r, g, { isMouseEvent: !0, on: !0, arguments: Be(a) }, S),
                                    w && w(),
                                    (T.current.isVisible = !0));
                            }, [r, g, a, S, w]),
                            P = (0, n.useCallback)(() => {
                                if (T.current.isVisible || T.current.timeoutId) {
                                    const e = T.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (T.current.timeoutId = 0)),
                                        Ue(r, g, { on: !1 }, S),
                                        T.current.isVisible && b && b(),
                                        (T.current.isVisible = !1));
                                }
                            }, [r, g, S, b]),
                            O = (0, n.useCallback)((e) => {
                                T.current.isVisible &&
                                    ((T.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (T.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(T.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = T.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && P();
                            }, [h, P]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return h
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((T.current.timeoutId = window.setTimeout(x, u ? 100 : 400)),
                                                      i && i(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (P(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && P(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && P(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var L;
                    },
                    Ge = ['children'];
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                const Fe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Ge);
                        return a().createElement(
                            He,
                            We(
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
                    $e = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function qe() {
                    return (
                        (qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        qe.apply(this, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    Ye = (e) => {
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
                            })(e, $e);
                        const u = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: r, header: i, note: s, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, r, i, s, l]);
                        return a().createElement(
                            He,
                            qe(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const Xe = ({ children: e, tooltipArgs: t, className: r }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: r }, e);
                        if (t.header || t.body) return a().createElement(Ye, t, n);
                        const i = t.contentId;
                        return i ? a().createElement(He, ze({}, t, { contentId: i }), n) : a().createElement(Fe, t, n);
                    },
                    Ve = {
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
                    Ke = ({
                        name: e,
                        image: t,
                        isPeriodic: r = !1,
                        size: n = ne.Big,
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
                                if (void 0 === t || !ve.includes(e)) return null;
                                switch (t) {
                                    case ie.BATTLE_BOOSTER:
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return se.BATTLE_BOOSTER;
                                }
                            })(n, i),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ie.BATTLE_BOOSTER:
                                        return oe.BATTLE_BOOSTER;
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER_REPLACE;
                                    case ie.BUILT_IN_EQUIPMENT:
                                        return oe.BUILT_IN_EQUIPMENT;
                                    case ie.EQUIPMENT_PLUS:
                                        return oe.EQUIPMENT_PLUS;
                                    case ie.EQUIPMENT_TROPHY_BASIC:
                                        return oe.EQUIPMENT_TROPHY_BASIC;
                                    case ie.EQUIPMENT_TROPHY_UPGRADED:
                                        return oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_1:
                                        return oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case ie.PROGRESSION_STYLE_UPGRADED_2:
                                        return oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case ie.PROGRESSION_STYLE_UPGRADED_3:
                                        return oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_4:
                                        return oe.PROGRESSION_STYLE_UPGRADED_4;
                                    case ie.PROGRESSION_STYLE_UPGRADED_5:
                                        return oe.PROGRESSION_STYLE_UPGRADED_5;
                                    case ie.PROGRESSION_STYLE_UPGRADED_6:
                                        return oe.PROGRESSION_STYLE_UPGRADED_6;
                                    case ie.ATTACHMENT_RARE:
                                        return oe.ATTACHMENT_RARE;
                                    case ie.ATTACHMENT_EPIC:
                                        return oe.ATTACHMENT_EPIC;
                                    case ie.ATTACHMENT_LEGENDARY:
                                        return oe.ATTACHMENT_LEGENDARY;
                                }
                            })(i),
                            h = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ae.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ae.CURRENCY:
                                    case ae.NUMBER:
                                        return a().createElement(ee, { format: 'integral', value: Number(e) });
                                    case ae.PREMIUM_PLUS: {
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
                                className: b()(Ve.base, Ve[`base__${n}`], ce.includes(e) && Ve.base__normalize, u),
                                style: c,
                            },
                            a().createElement(
                                Xe,
                                { tooltipArgs: _, className: Ve.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: b()(Ve.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: b()(Ve.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: b()(Ve.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            a().createElement('div', {
                                                className: b()(Ve.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    h &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    Ve.info,
                                                    Ve[`info__${e}`],
                                                    o === ae.MULTI && Ve.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            h,
                                        ),
                                    l && a().createElement('div', { className: Ve.title }, l),
                                ),
                            ),
                            r &&
                                a().createElement(
                                    Xe,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: b()(Ve.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Qe = 'Rewards_base_09',
                    Ze = 'Rewards_rewardsRow_3c',
                    Je = 'Rewards_lines_cd',
                    et = 'Rewards_ribbonWrapper_39',
                    tt = 'Rewards_ribbon_4b',
                    rt = 'Rewards_reward_b4';
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const at = { info: 'Rewards_rewardInfo_d2' },
                    it = (0, J.Pi)(({ onLastRewardShowed: e }) => {
                        const t = Oe().model,
                            r = O().mediaSize,
                            i = t.computes.getRewards(),
                            s = ((e) => (e >= S.ExtraLarge ? ne.S600x450 : e >= S.Medium ? ne.S400x300 : ne.S296x222))(
                                r,
                            );
                        return (
                            (0, n.useEffect)(() => {
                                0 === i.length && (e(), console.error('There are no rewards in the model'));
                            }, [e, i.length]),
                            a().createElement(
                                'div',
                                { className: Qe },
                                a().createElement(
                                    'div',
                                    { className: Ze },
                                    a().createElement(
                                        'div',
                                        { className: et },
                                        a().createElement('div', { className: tt }),
                                    ),
                                    a().createElement('div', { className: Je }),
                                    i.map((t, r) =>
                                        a().createElement(
                                            'div',
                                            {
                                                onAnimationEnd: r === i.length - 1 ? e : void 0,
                                                onAnimationStart: () => U('gui_random_reward_appear'),
                                                style: { animationDelay: 1200 + 100 * r + 'ms' },
                                                className: rt,
                                                key: t.index,
                                            },
                                            a().createElement(
                                                Ke,
                                                nt({}, t, { size: s, image: t.image(s), classNames: at }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    st = R.strings.account_completion.rewards,
                    ot = (0, J.Pi)(() => {
                        const e = Oe().controls,
                            t = (0, n.useState)(!1),
                            r = t[0],
                            i = t[1],
                            s = (function (e) {
                                const t = (0, n.useRef)(e);
                                return (
                                    (0, n.useLayoutEffect)(() => {
                                        t.current = e;
                                    }),
                                    (0, n.useCallback)((...e) => (0, t.current)(...e), X)
                                );
                            })(() => i(!0));
                        var o;
                        return (
                            (o = e.close),
                            Z(V.n.ESCAPE, o),
                            a().createElement(
                                'div',
                                { className: Le },
                                a().createElement(
                                    'div',
                                    { className: ye },
                                    a().createElement(z, {
                                        caption: st.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: e.close,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Me },
                                    a().createElement('div', { className: ke }, st.title()),
                                    a().createElement('div', { className: Ae }, st.subTitle()),
                                ),
                                a().createElement(
                                    'div',
                                    { className: De },
                                    a().createElement(it, { onLastRewardShowed: s }),
                                ),
                                a().createElement(
                                    $,
                                    { onClick: e.close, mixClass: b()(Ie, r && Ce) },
                                    st.buttons.confirm(),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    B().render(
                        a().createElement(Pe, null, a().createElement(C, null, a().createElement(ot, null))),
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
        (__webpack_require__.j = 641),
        (() => {
            var e = { 641: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [235], () => __webpack_require__(502));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
