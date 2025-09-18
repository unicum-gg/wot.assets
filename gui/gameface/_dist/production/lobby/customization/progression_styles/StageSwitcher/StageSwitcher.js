(() => {
    'use strict';
    var __webpack_modules__ = {
            105: (e, t, n) => {
                n.d(t, { O: () => ue });
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => v, off: () => _, on: () => u, onResize: () => l, onScaleUpdated: () => d }));
                var i = {};
                (n.r(i),
                    n.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => p,
                        getSize: () => b,
                        graphicsQuality: () => E,
                        playSound: () => h,
                        setRTPC: () => m,
                    }));
                var s = {};
                (n.r(s), n.d(s, { getBgUrl: () => C, getTextureUrl: () => x }));
                var a = {};
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
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => U,
                        arabic2roman: () => ie,
                        children: () => s,
                        displayStatus: () => P.W,
                        displayStatusIs: () => ae,
                        enableFullScreenModeSupported: () => le,
                        events: () => M,
                        extraSize: () => oe,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => V,
                        getDisplayStatus: () => ne,
                        getExternalPaddingsRem: () => se,
                        getFontNames: () => re,
                        getScale: () => H,
                        getSize: () => $,
                        getViewGlobalPosition: () => K,
                        initExternalPaddings: () => de,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => q,
                        sendEvent: () => F,
                        setAnimateWindow: () => X,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => z,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => ce,
                    }));
                const l = o('clientResized'),
                    d = o('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
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
                                    const s = `mouse${t}`,
                                        a = w[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(s, o),
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(g).reduce((e, t) => ((e[t] = () => h(g[t])), e), {}),
                    S = { play: Object.assign({}, y, { sound: h }), setRTPC: m },
                    O = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    T = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e) {
                    let t = '';
                    for (let n = T.length - 1; n >= 0; n--) for (; e >= T[n]; ) ((t += O[n]), (e -= T[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function x(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function C(e, t, n) {
                    return `url(${x(e, t, n)})`;
                }
                var P = n(112);
                const M = {
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
                    L = ['args'];
                const N = 2,
                    D = 16,
                    A = 32,
                    B = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, L);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    F = {
                        close(e) {
                            I('popover' === e ? N : A);
                        },
                        minimize() {
                            I(B);
                        },
                        move(e) {
                            I(D, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function V(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function j(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function K(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Z(t.x), y: Z(t.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function X(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = k;
                function se() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ae = Object.keys(P.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P.W[t]), e),
                        {},
                    ),
                    oe = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function le() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function de(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            i = t.bottom,
                            s = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${s}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ue = { view: a, client: i, sound: S, intl: f };
            },
            112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, n) => {
                let r, i;
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
                    })(i || (i = {})));
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => s });
                var r = n(105);
                class i {
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
                        return (window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = r.O.view.addModelObserver(e, n, i);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                const s = i;
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
                n.d(t, { Sw: () => s.Z, ry: () => b });
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
                const i = r;
                var s = n(358);
                var a = n(613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    w = n(105);
                const v = ['args'];
                function h(e, t, n, r, i, s, a) {
                    try {
                        var o = e[s](a),
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
                                        var s = e.apply(t, n);
                                        function a(e) {
                                            h(s, r, i, a, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(s, r, i, a, o, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, v);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    E = () => p(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var g = n(572);
                const y = i.instance,
                    S = {
                        DataTracker: s.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, i = R.invalid('resId'), s) => {
                            const a = w.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                d = c.y,
                                u = c.width,
                                _ = c.height,
                                v = {
                                    x: w.O.view.pxToRem(l) + a.x,
                                    y: w.O.view.pxToRem(d) + a.y,
                                    width: w.O.view.pxToRem(u),
                                    height: w.O.view.pxToRem(_),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: m(v),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, E);
                        },
                        handleViewEvent: p,
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
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
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
                    s = n(533),
                    a = n.n(s),
                    o = n(483),
                    c = n.n(o),
                    l = n(105);
                const d = [];
                const u = (e) => {
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
                const w = (0, r.createContext)(null);
                const v = (e) => {
                    const t = i().useRef(null),
                        n = _(),
                        s = i().useRef(),
                        a = i().useRef(!1),
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
                            })(e, s);
                        }, []),
                        c = (function (e) {
                            const t = (0, r.useRef)(e);
                            return (
                                (0, r.useLayoutEffect)(() => {
                                    t.current = e;
                                }),
                                (0, r.useCallback)((...e) => (0, t.current)(...e), d)
                            );
                        })(() => {
                            n.run(() => {
                                const n = t.current;
                                if (!n || !1 === (null == e.needUpdate ? void 0 : e.needUpdate())) return;
                                const r = o();
                                if (r && !a.current) return;
                                const i = { width: Math.max(1, n.offsetWidth), height: Math.max(1, n.offsetHeight) };
                                ((s.current = i),
                                    l.O.view.resize(i.width, i.height),
                                    !1 === r && (null == e.onResize || e.onResize(i)));
                            });
                        });
                    (u(() =>
                        l.O.view.events.onTextureFrozen(() => {
                            a.current = !0;
                        }),
                    ),
                        u(() =>
                            l.O.view.events.onTextureReady(() => {
                                (a.current && s.current && l.O.view.resize(s.current.width, s.current.height),
                                    (a.current = !1));
                            }),
                        ),
                        u(() => (window.addEventListener('resize', c), () => window.removeEventListener('resize', c))),
                        i().useEffect(() => {
                            var t;
                            (null == (t = e.autoUpdate) || t) && c();
                        }));
                    const v = i().useMemo(
                        () => ({
                            resize: c,
                            equalSize: o,
                            getLastSize: () => s.current,
                            getCurrentSize: () => {
                                const e = t.current;
                                return e ? { width: e.offsetWidth, height: e.offsetHeight } : { width: 0, height: 0 };
                            },
                            freeze: () => {
                                ((a.current = !0), l.O.view.freezeTextureBeforeResize());
                            },
                            isFrozen: () => a.current,
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
                    p = 'SwitcherBullet_container_6e',
                    E = 'SwitcherBullet_base__selected_70',
                    f = 'SwitcherBullet_container__text_b3',
                    g = 'SwitcherBullet_finishedHover_37',
                    y = 'SwitcherBullet_base__finished_dd',
                    S = 'SwitcherBullet_base__hover_2a',
                    O = 'SwitcherBullet_iconSmall_b7',
                    T = 'SwitcherBullet_base__afterCurrent_cd',
                    k = 'SwitcherBullet_iconBig_dc',
                    x = 'SwitcherBullet_base__currentSelected_24',
                    C = 'SwitcherBullet_iconText_11',
                    P = 'SwitcherBullet_iconTextGlow_25',
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
                        previousSelectedIndex: s,
                        onChange: a,
                        currentIndex: o,
                        currentText: l,
                        isDisabled: d = !1,
                        mouseEnterSound: u,
                        clickSound: _,
                    }) => {
                        const w = t !== n,
                            v = (0, r.useState)(!1),
                            f = v[0],
                            C = v[1],
                            P = (0, r.useCallback)(() => {
                                (C(!0), w && h(u));
                            }, [w, u, C]),
                            B = (0, r.useCallback)(() => {
                                w && (h(_), a(e));
                            }, [w, _, e, a]),
                            I = (0, r.useCallback)(() => {
                                C(!1);
                            }, [C]),
                            F = o || 0,
                            U = c()(
                                b,
                                t === n && E,
                                t === n && t === F && x,
                                t > F && t !== n && T,
                                t <= F && y,
                                f && S,
                                d && L,
                            ),
                            z = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? m(0)
                                            : e === n
                                              ? m(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? m(Math.abs(e - t) - 1)
                                                : void 0)(t, s, n),
                                [t, s, n],
                            ),
                            V = (0, r.useCallback)(
                                () => ((t === n && t === F) || t === n ? 'big' : 'small'),
                                [t, n, F],
                            ),
                            j = (0, r.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    n = t > F ? 'light' : 'dark';
                                return Object.assign({}, z, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${V()}_${n}`)})`,
                                });
                            }, [t, F, z, V]);
                        return i().createElement(
                            'div',
                            { className: U },
                            i().createElement(
                                'div',
                                { className: p, style: z },
                                i().createElement('div', { className: g, style: z }),
                                i().createElement('div', { className: O, style: z }),
                                i().createElement('div', { className: k, style: z }),
                                i().createElement('div', { className: N }),
                                i().createElement('div', { className: D, style: j }),
                                i().createElement('div', {
                                    className: M,
                                    style: z,
                                    onClick: B,
                                    onMouseEnter: P,
                                    onMouseLeave: I,
                                }),
                            ),
                            l && t === o && i().createElement('div', { className: A }, l),
                        );
                    },
                    U = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: s,
                        onChange: a,
                        currentIndex: o = 0,
                        isDisabled: l = !1,
                        mouseEnterSound: d,
                        clickSound: u,
                        styleID: _,
                    }) => {
                        const w = t === n,
                            v = (0, r.useState)(!1),
                            g = v[0],
                            O = v[1],
                            k = (0, r.useCallback)(() => {
                                (O(!0), w || h(d));
                            }, [w, d, O]),
                            N = (0, r.useCallback)(() => {
                                w || (h(u), a(e));
                            }, [w, u, e, a]),
                            D = (0, r.useCallback)(() => {
                                O(!1);
                            }, [O]),
                            A = R.strings.vehicle_customization.style_switcher.$dyn(`style_${_}`).$dyn(`level${e}`),
                            F = c()(b, w && E, w && t === o && x, t > o && t !== n && T, t <= o && y, g && S, l && L),
                            U = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? m(0)
                                            : e === n
                                              ? m(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? m(Math.abs(e - t) - 1)
                                                : void 0)(t, s, n),
                                [t, s, n],
                            ),
                            z = c()(p, f);
                        return i().createElement(
                            'div',
                            { className: F },
                            i().createElement(
                                'div',
                                { className: z, style: U },
                                w && i().createElement('div', { className: I }),
                                !w && i().createElement('div', { className: P }),
                                i().createElement('div', { className: C, style: U }),
                                i().createElement('div', { className: B }, A),
                                i().createElement('div', {
                                    className: M,
                                    style: U,
                                    onClick: N,
                                    onMouseEnter: k,
                                    onMouseLeave: D,
                                }),
                            ),
                        );
                    },
                    z = 'SwitcherSeparator_base_c1',
                    V = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    j = 'SwitcherSeparator_base__notAnimated_58',
                    W = 'SwitcherSeparator_base__scaled_57',
                    $ = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    q = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    K = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    G = ({ index: e, selectedIndex: t, previousSelectedIndex: n, isAnimated: r = !0 }) => {
                        const s = ((e, t, n) =>
                                e === t + 1 || e === t - 1
                                    ? m(0)
                                    : e === n + 1 || e === n - 1
                                      ? m(Math.abs(n - t) - 2)
                                      : (n > t && e > t && e < n + 1) || (n < t && e < t && e > n - 1)
                                        ? m(Math.abs(e - t) - 1)
                                        : void 0)(e, n, t),
                            a = 1 === Math.abs(e - t),
                            o = 1 === Math.abs(e - n),
                            l = ((e, t, n, r) =>
                                e === n + 1 || (e === t + 1 && !r)
                                    ? $
                                    : e === n - 1 || (e === t - 1 && !r)
                                      ? q
                                      : void 0)(e, n, t, a),
                            d = c()(
                                z,
                                r && e < t && V,
                                r && o && a && K,
                                r && (e === t + 1 || e === t - 1) && W,
                                r && l,
                                !r && j,
                            );
                        return i().createElement('div', { className: d, style: s });
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
                    ((e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text'));
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
                    currentText: s,
                    currentNumber: a,
                    startNumber: o = 1,
                    isBulletsBeforeCurrentDisabled: l = !1,
                    size: d,
                    mouseEnterSound: u = 'highlight',
                    clickSound: _ = 'play',
                    isArabic: w = !1,
                    hasLightShadows: v = !1,
                    styleID: h = 0,
                    switcherType: m = Z.digital,
                }) => {
                    const b = (0, r.useState)(!1),
                        p = b[0],
                        E = b[1];
                    (0, r.useEffect)(
                        () =>
                            ((e, t) => {
                                let n;
                                const r = setTimeout(() => {
                                    n = e();
                                }, t);
                                return () => {
                                    ('function' == typeof n && n(), clearTimeout(r));
                                };
                            })(() => E(!0), 0),
                        [],
                    );
                    const f = o + e - 1,
                        g = H(t, l && a ? a : o, f),
                        y = 'number' == typeof a ? H(a, o, f) : void 0,
                        S = X(g, o),
                        O = X(y, o),
                        T = (0, r.useRef)(S);
                    (0, r.useEffect)(() => {
                        T.current = S;
                    });
                    const k = T.current,
                        x = c()(
                            Y.base,
                            s && void 0 !== O && Y.base__hasCurrentText,
                            d && Y[`base__${d}`],
                            p && Y.base__isVisible,
                        ),
                        R = (0, r.useMemo)(
                            () =>
                                ((e, t) => {
                                    const n = [];
                                    for (let r = e; r <= t; r++) n.push(r);
                                    return n;
                                })(o, f),
                            [f, o],
                        ),
                        C = m === Z.digital;
                    return i().createElement(
                        'div',
                        { className: x },
                        R.map((e, t) => {
                            const r = 2 * t,
                                a = !(!l || !O) && r < O;
                            return i().createElement(
                                i().Fragment,
                                { key: t },
                                t > 0 &&
                                    i().createElement(G, {
                                        index: r - 1,
                                        selectedIndex: S,
                                        previousSelectedIndex: k,
                                        isAnimated: C,
                                    }),
                                C
                                    ? i().createElement(F, {
                                          index: r,
                                          selectedIndex: S,
                                          previousSelectedIndex: k,
                                          numberToDisplay: e,
                                          currentIndex: O,
                                          currentText: s,
                                          onChange: n,
                                          isDisabled: a,
                                          mouseEnterSound: u,
                                          clickSound: _,
                                          isArabic: w,
                                          hasLightShadows: v,
                                      })
                                    : i().createElement(U, {
                                          index: r,
                                          selectedIndex: S,
                                          previousSelectedIndex: k,
                                          numberToDisplay: e,
                                          currentIndex: O,
                                          onChange: n,
                                          isDisabled: a,
                                          mouseEnterSound: u,
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
                        var s;
                        t &&
                            ((i = (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) || ''),
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
                    se = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ae = (e) =>
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
                                return { modelPrefix: i, modelPath: se(i, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const i = te(se(n, `${t}.${r}`), window);
                                    return ie(i) ? (e.push(i.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ce = () => (window.injected || (window.injected = new Map()), window.injected);
                const le = re.Sw.instance;
                let de;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(de || (de = {}));
                const ue = (e = 'model', t = de.Deep) => {
                        const n = (0, r.useState)(0),
                            i = (n[0], n[1]),
                            s = (0, r.useMemo)(() => ee(), []),
                            a = s.callerUrl,
                            o = s.caller,
                            c = s.resId,
                            l = (0, r.useMemo)(() => {
                                const t = (function (e) {
                                    return ce().has(e);
                                })(a.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !t ? `subViews.${o}.${e}` : e;
                            }, [a, o, e]),
                            d = (0, r.useState)(() =>
                                ((e) => {
                                    const t = te(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return ie(t) ? t.value : t;
                                })(ae(l)),
                            ),
                            u = d[0],
                            _ = d[1],
                            w = (0, r.useRef)(-1);
                        return (
                            ne(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? de.Deep : de.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== de.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === de.Deep
                                                ? (e === u && i((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        r = oe(e);
                                    w.current = le.addCallback(r, n, c, t === de.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== de.None)
                                    return () => {
                                        le.removeCallback(w.current, c);
                                    };
                            }, [c, t]),
                            u
                        );
                    },
                    _e = {
                        base: 'App_base_c7',
                        base__text: 'App_base__text_1f',
                        content: 'App_content_8f',
                        content__text: 'App_content__text_41',
                    },
                    we = () => {
                        const e = ue(),
                            t = e.currentLevel,
                            n = e.selectedLevel,
                            s = e.numberOfBullets,
                            a = void 0 === s ? 4 : s,
                            o = e.isBulletsBeforeCurrentDisabled,
                            d = e.switcherType,
                            u = e.styleID,
                            _ = e.onChange,
                            w = (0, r.useCallback)((e) => _({ selectedLevel: e }), [_]),
                            h = d === Z.text,
                            m = h ? void 0 : 'small',
                            b = c()(_e.content, h && _e.content__text),
                            p = (function (e, t = []) {
                                const n = (0, r.useRef)(!1);
                                return (0, r.useCallback)(() => {
                                    n.current || (e(), (n.current = !0));
                                }, t);
                            })(() => {
                                const e = h ? 40 : 30;
                                l.O.view.setSidePaddingsRem({ left: 50, right: 50, bottom: e, top: e });
                            }, [h]);
                        return i().createElement(v, { onResize: p }, (e) =>
                            i().createElement(
                                'div',
                                { ref: e, className: c()(_e.base, h && _e.base__text) },
                                i().createElement(
                                    'div',
                                    { className: b },
                                    i().createElement(J, {
                                        numberOfBullets: a,
                                        currentNumber: t,
                                        selectedNumber: n,
                                        onChange: w,
                                        isBulletsBeforeCurrentDisabled: o,
                                        size: m,
                                        switcherType: d,
                                        styleID: u,
                                    }),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    a().render(i().createElement(we, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var i = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], s = !0, a = 0; a < t.length; a++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((s = !1), r < i && (i = r));
                    if (s) {
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
        (__webpack_require__.j = 407),
        (() => {
            var e = { 407: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [s, a, o] = n,
                        c = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); c < s.length; c++)
                        ((i = s[c]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(73));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
