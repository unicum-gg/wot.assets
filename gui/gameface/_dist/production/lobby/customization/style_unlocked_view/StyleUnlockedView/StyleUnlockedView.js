(() => {
    'use strict';
    var __webpack_modules__ = {
            105: (e, t, n) => {
                n.d(t, { O: () => ue });
                var i = {};
                (n.r(i),
                    n.d(i, { mouse: () => h, off: () => _, on: () => u, onResize: () => c, onScaleUpdated: () => d }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => p,
                        getSize: () => v,
                        graphicsQuality: () => b,
                        playSound: () => g,
                        setRTPC: () => w,
                    }));
                var a = {};
                (n.r(a), n.d(a, { getBgUrl: () => T, getTextureUrl: () => S }));
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
                (n.r(o),
                    n.d(o, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => U,
                        arabic2roman: () => re,
                        children: () => a,
                        displayStatus: () => L.W,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => ce,
                        events: () => M,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => ne,
                        getExternalPaddingsRem: () => ae,
                        getFontNames: () => ie,
                        getScale: () => K,
                        getSize: () => z,
                        getViewGlobalPosition: () => q,
                        initExternalPaddings: () => de,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => Y,
                        remToPx: () => X,
                        resize: () => G,
                        sendEvent: () => B,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => le,
                    }));
                const c = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        o = m[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        i(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                i(),
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
                            ((e.enabled = !1), i());
                        },
                        enable() {
                            ((e.enabled = !0), i());
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function g(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    E = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(E).reduce((e, t) => ((e[t] = () => g(E[t])), e), {}),
                    k = { play: Object.assign({}, y, { sound: g }), setRTPC: w },
                    x = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    C = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function O(e) {
                    let t = '';
                    for (let n = C.length - 1; n >= 0; n--) for (; e >= C[n]; ) ((t += x[n]), (e -= C[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function S(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function T(e, t, n) {
                    return `url(${S(e, t, n)})`;
                }
                var L = n(112);
                const M = {
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
                    P = ['args'];
                const N = 2,
                    H = 16,
                    D = 32,
                    A = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, P);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((i = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    B = {
                        close(e) {
                            I('popover' === e ? N : D);
                        },
                        minimize() {
                            I(A);
                        },
                        move(e) {
                            I(H, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: X(t.x), y: X(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function X(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, t) {
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
                const ie = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    re = O;
                function ae() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(L.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L.W[t]), e),
                        {},
                    ),
                    se = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ce() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function de(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            i = t.right,
                            r = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${i}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ue = { view: o, client: r, sound: k, intl: f };
            },
            112: (e, t, n) => {
                n.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, n) => {
                let i, r;
                (n.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var i = n(105);
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
                        const a = i.O.view.addModelObserver(e, n, r);
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
                            const i = this._callbacks[n];
                            void 0 !== i && i(e, t);
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
                n.d(t, { Sw: () => a.Z, B0: () => s, ry: () => v, Sy: () => b });
                class i {
                    constructor() {
                        ((this.entries = []),
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
                            }));
                    }
                    static get instance() {
                        return (i.__instance || (i.__instance = new i()), i.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            i = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== i)),
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
                i.__instance = void 0;
                const r = i;
                var a = n(358);
                var o = n(613);
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(105);
                const h = ['args'];
                function g(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(i, r);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (i, r) {
                                        var a = e.apply(t, n);
                                        function o(e) {
                                            g(a, i, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, i, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, h);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((i = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    b = () => p(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var E = n(572);
                const y = r.instance,
                    k = {
                        DataTracker: a.Z,
                        ViewModel: E.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                h = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(d) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: w(h),
                                on: !0,
                                args: a,
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
                            f(e, b);
                        },
                        handleViewEvent: p,
                        onBindingsReady: v,
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
                                    const r = Object.prototype.toString.call(t[i]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < r.length; t++) n[i].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = k;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => i, cy: () => r });
                const i = {
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
            422: (e, t, n) => {
                var i = n(363),
                    r = n.n(i),
                    a = n(533),
                    o = n.n(a);
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
                var l = n(105);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function u(e = l.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign(
                        { width: t, height: n },
                        (function (e, t, n) {
                            const i = (function (e, t) {
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
                                r = (function (e, t) {
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
                                a = Math.min(i, r);
                            return {
                                extraLarge: a === n.extraLarge.weight,
                                large: a === n.large.weight,
                                medium: a === n.medium.weight,
                                small: a === n.small.weight,
                                extraSmall: a === n.extraSmall.weight,
                                extraLargeWidth: i === n.extraLarge.weight,
                                largeWidth: i === n.large.weight,
                                mediumWidth: i === n.medium.weight,
                                smallWidth: i === n.small.weight,
                                extraSmallWidth: i === n.extraSmall.weight,
                                extraLargeHeight: r === n.extraLarge.weight,
                                largeHeight: r === n.large.weight,
                                mediumHeight: r === n.medium.weight,
                                smallHeight: r === n.small.weight,
                                extraSmallHeight: r === n.extraSmall.weight,
                            };
                        })(t, n, c),
                    );
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
                })(d || (d = {}));
                const _ = u(),
                    m = (0, i.createContext)(_),
                    h = ['children'];
                (0, i.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                a = Object.keys(e);
                            for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, h);
                    const r = (0, i.useContext)(m),
                        a = r.extraLarge,
                        o = r.large,
                        l = r.medium,
                        c = r.small,
                        d = r.extraSmall,
                        u = r.extraLargeWidth,
                        _ = r.largeWidth,
                        g = r.mediumWidth,
                        w = r.smallWidth,
                        v = r.extraSmallWidth,
                        p = r.extraLargeHeight,
                        b = r.largeHeight,
                        f = r.mediumHeight,
                        E = r.smallHeight,
                        y = r.extraSmallHeight,
                        k = { extraLarge: p, large: b, medium: f, small: E, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && a) return t;
                        if (n.large && o) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && u) return s(t, n, k);
                        if (n.largeWidth && _) return s(t, n, k);
                        if (n.mediumWidth && g) return s(t, n, k);
                        if (n.smallWidth && w) return s(t, n, k);
                        if (n.extraSmallWidth && v) return s(t, n, k);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && b) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && E) return t;
                            if (n.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const t = (0, i.useState)(u),
                        n = t[0],
                        a = t[1],
                        o = (0, i.useState)(!1),
                        s = o[0],
                        c = o[1];
                    return (
                        (0, i.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = l.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : u(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                l.O.client.events.on('clientResized', e),
                                l.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (l.O.client.events.off('clientResized', e),
                                        l.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        r().createElement(m.Provider, { value: n }, s && e)
                    );
                };
                var w = n(483),
                    v = n.n(w),
                    p = n(916),
                    b = n(521);
                const f = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function E(e = b.n.NONE, t = f, n = !1, r = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== b.n.NONE)
                            return (
                                window.addEventListener('keydown', i, n),
                                () => {
                                    window.removeEventListener('keydown', i, n);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (!r && l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), t(i), n && i.stopPropagation());
                            }
                        }
                    }, [t, e, n, r]);
                }
                const y = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            i = R.invalid('resId'),
                            r = '';
                        var a;
                        t &&
                            ((r = (null == (a = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                            (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (i = window.subViews[n].id));
                        return { callerUrl: r, caller: n, stack: t, resId: i };
                    },
                    k = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    x = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    C = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    O = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    S = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const i = k(`${e}.${n}`, window);
                                return C(i) ? t(e, n, i) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    T = (e) => {
                        const t = ((e) => {
                                const t = y(),
                                    n = t.caller,
                                    i = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: O(r, e || ''), resId: i };
                            })(),
                            n = t.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((t, i) => {
                                    const r = k(O(n, `${t}.${i}`), window);
                                    return C(r) ? (e.push(r.id), `${t}.${i}.value`) : (e.push(i), `${t}.${i}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const L = () => (window.injected || (window.injected = new Map()), window.injected);
                const M = p.Sw.instance;
                let P;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(P || (P = {}));
                const N = (e = 'model', t = P.Deep) => {
                        const n = (0, i.useState)(0),
                            r = (n[0], n[1]),
                            a = (0, i.useMemo)(() => y(), []),
                            o = a.callerUrl,
                            s = a.caller,
                            l = a.resId,
                            c = (0, i.useMemo)(() => {
                                const t = (function (e) {
                                    return L().has(e);
                                })(o.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !t ? `subViews.${s}.${e}` : e;
                            }, [o, s, e]),
                            d = (0, i.useState)(() =>
                                ((e) => {
                                    const t = k(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return C(t) ? t.value : t;
                                })(S(c)),
                            ),
                            u = d[0],
                            _ = d[1],
                            m = (0, i.useRef)(-1);
                        return (
                            x(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? P.Deep : P.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== P.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === P.Deep
                                                ? (e === u && r((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        i = T(e);
                                    m.current = M.addCallback(i, n, l, t === P.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (t !== P.None)
                                    return () => {
                                        M.removeCallback(m.current, l);
                                    };
                            }, [l, t]),
                            u
                        );
                    },
                    H = {
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
                    D = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const I = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        a = e.goto,
                        o = e.classNames,
                        s = e.onMouseEnter,
                        c = e.onMouseLeave,
                        d = e.onMouseDown,
                        u = e.onMouseUp,
                        _ = e.side,
                        m = void 0 === _ ? 'left' : _,
                        h = e.type,
                        g = void 0 === h ? 'back' : h,
                        w = e.soundHover,
                        p = void 0 === w ? 'highlight' : w,
                        b = e.soundClick,
                        f = void 0 === b ? 'play' : b,
                        E = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                a = Object.keys(e);
                            for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, D);
                    const y = (0, i.useCallback)(
                            (e) => {
                                (null == s || s(e), l.O.sound.play.sound(p));
                            },
                            [s, p],
                        ),
                        k = (0, i.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        ),
                        x = (0, i.useCallback)(
                            (e) => {
                                (null == d || d(e), l.O.sound.play.sound(f));
                            },
                            [d, f],
                        ),
                        C = (0, i.useCallback)(
                            (e) => {
                                null == u || u(e);
                            },
                            [u],
                        );
                    return r().createElement(
                        'div',
                        A(
                            {
                                className: v()(H.base, H[`base__${g}`], H[`base__${m}`], null == o ? void 0 : o.base),
                                onMouseEnter: y,
                                onMouseLeave: k,
                                onMouseDown: x,
                                onMouseUp: C,
                                onClick: n,
                            },
                            E,
                        ),
                        'info' !== g && r().createElement('div', { className: H.shine }),
                        r().createElement(
                            'div',
                            { className: v()(H.icon, H[`icon__${g}`], H[`icon__${m}`], null == o ? void 0 : o.icon) },
                            r().createElement('div', { className: v()(H.glow, null == o ? void 0 : o.glow) }),
                        ),
                        r().createElement(
                            'div',
                            { className: v()(H.caption, H[`caption__${g}`], null == o ? void 0 : o.caption) },
                            t,
                        ),
                        a && r().createElement('div', { className: v()(H.goto, null == o ? void 0 : o.goto) }, a),
                    );
                };
                function B(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const U = {
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
                let V, W;
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
                    })(W || (W = {})));
                const F = ({
                        children: e,
                        size: t,
                        disabled: n,
                        mixClass: a,
                        onMouseEnter: o,
                        onMouseMove: s,
                        onMouseDown: l,
                        onMouseUp: c,
                        onMouseLeave: d,
                        onClick: u,
                        isFocused: _ = !1,
                        type: m = V.primary,
                        soundHover: h = 'highlight',
                        soundClick: g = 'play',
                    }) => {
                        const w = (0, i.useRef)(null),
                            p = (0, i.useState)(_),
                            b = p[0],
                            f = p[1],
                            E = (0, i.useState)(!1),
                            y = E[0],
                            k = E[1];
                        return (
                            (0, i.useEffect)(() => {
                                function e(e) {
                                    b && null !== w.current && !w.current.contains(e.target) && f(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [b]),
                            (0, i.useEffect)(() => {
                                f(_);
                            }, [_]),
                            r().createElement(
                                'div',
                                {
                                    ref: w,
                                    className: v()(
                                        U.base,
                                        U[`base__${m}`],
                                        n && U.base__disabled,
                                        t && U[`base__${t}`],
                                        b && U.base__focus,
                                        y && U.base__highlightActive,
                                        a,
                                    ),
                                    onMouseEnter: function (e) {
                                        n || (null !== h && B(h), o && o(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        n || (c && c(e), k(!1));
                                    },
                                    onMouseDown: function (e) {
                                        n ||
                                            (null !== g && B(g),
                                            l && l(e),
                                            _ && (n || (w.current && (w.current.focus(), f(!0)))),
                                            k(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        n || (d && d(e), k(!1));
                                    },
                                    onClick: function (e) {
                                        n || (u && u(e));
                                    },
                                },
                                m !== V.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: U.back }),
                                        r().createElement('span', { className: U.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: v()(U.state, U.state__default) },
                                    r().createElement('span', { className: U.stateDisabled }),
                                    r().createElement('span', { className: U.stateHighlightHover }),
                                    r().createElement('span', { className: U.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: U.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    j = [
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
                function z(e) {
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
                const G = (e, t, n = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: p.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                n,
                            ),
                        );
                    },
                    q = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            _ = void 0 !== u && u,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            w = void 0 === g || g,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            b = e.onShow,
                            f = e.onHide,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, j);
                        const k = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, i.useMemo)(() => p || y().resId, [p]),
                            C = (0, i.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (G(n, h, { isMouseEvent: !0, on: !0, arguments: z(r) }, x),
                                    b && b(),
                                    (k.current.isVisible = !0));
                            }, [n, h, r, x, b]),
                            O = (0, i.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        G(n, h, { on: !1 }, x),
                                        k.current.isVisible && f && f(),
                                        (k.current.isVisible = !1));
                                }
                            }, [n, h, x, f]),
                            S = (0, i.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = k.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === w && O();
                            }, [w, O]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        (window.removeEventListener('mouseleave', O), O());
                                    }
                                ),
                                [O],
                            ));
                        return w
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(k.current.timeoutId),
                                                      (k.current.timeoutId = window.setTimeout(C, d ? 100 : 400)),
                                                      a && a(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (O(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && O(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && O(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      E,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    $ = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        K.apply(this, arguments)
                    );
                }
                const Y = R.views.common.tooltip_window.simple_tooltip_content,
                    X = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, $);
                        const d = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: a, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, o, l]);
                        return r().createElement(
                            q,
                            K(
                                {
                                    contentId:
                                        ((u = null == l ? void 0 : l.hasHtmlContent),
                                        u ? Y.SimpleTooltipHtmlContent('resId') : Y.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var u;
                    },
                    Z = 'ItemAnimation_base_ba',
                    Q = 'ItemAnimation_boxHolder_7f',
                    J = 'ItemAnimation_boxHolder__large_bb',
                    ee = 'ItemAnimation_box_3f',
                    te = 'ItemAnimation_box__large_19',
                    ne = 'ItemAnimation_inner_20',
                    ie = 'ItemAnimation_inner__large_7f',
                    re = ({ onStart: e, onComplete: t }) => {
                        const n = (0, i.useContext)(m),
                            a = n.large || n.extraLarge,
                            o = v()(Q, a && J),
                            s = v()(ee, a && te),
                            l = v()(ne, a && ie),
                            c = r().createRef();
                        return (
                            (0, i.useEffect)(() => {
                                const n = c.current;
                                n &&
                                    ((n.style.animationDelay = '1s'),
                                    (n.style.animationDuration = '0.3s'),
                                    e &&
                                        setTimeout(() => {
                                            e();
                                        }, 1e3),
                                    t &&
                                        setTimeout(() => {
                                            t();
                                        }, 1300));
                            }, [c, t, e]),
                            r().createElement(
                                'div',
                                { className: Z },
                                r().createElement(
                                    'div',
                                    { className: o },
                                    r().createElement(
                                        'div',
                                        { className: s, ref: c },
                                        r().createElement('div', { className: l }),
                                    ),
                                ),
                            )
                        );
                    },
                    ae = 'Header_base_0d',
                    oe = 'Header_tankTypeIcon_d6',
                    se = 'Header_contentContainer_85',
                    le = 'Header_spaceAtTheEnd_c0',
                    ce = ({ name: e, level: t, extraText: n, type: i, className: a }) => {
                        const o = n ? n.replace('{tankLevel}', t) : `${t} {tankName}`,
                            s = { backgroundImage: `url(${i})` };
                        return r().createElement(
                            'div',
                            { className: v()(ae, a) },
                            r().createElement(
                                'div',
                                { className: se },
                                o
                                    .split('{tankName}')
                                    .map((t, n) =>
                                        1 === n
                                            ? [
                                                  r().createElement('span', { key: 'icon', className: oe, style: s }),
                                                  r().createElement('span', { key: 'name', className: le }, e),
                                                  r().createElement('span', { key: n }, t),
                                              ]
                                            : r().createElement('span', { key: n }, t),
                                    ),
                            ),
                        );
                    };
                ce.defaultProps = { extraText: '' };
                const de = 'StyleUnlockedViewContent_base_ce',
                    ue = 'StyleUnlockedViewContent_closeBtnPosition_3d',
                    _e = 'StyleUnlockedViewContent_cButton_54',
                    me = 'StyleUnlockedViewContent_main_d7',
                    he = 'StyleUnlockedViewContent_main__large_9a',
                    ge = 'StyleUnlockedViewContent_header_47',
                    we = 'StyleUnlockedViewContent_header__large_d8',
                    ve = 'StyleUnlockedViewContent_title_46',
                    pe = 'StyleUnlockedViewContent_title__large_d7',
                    be = 'StyleUnlockedViewContent_description_28',
                    fe = 'StyleUnlockedViewContent_description__large_ba',
                    Ee = 'StyleUnlockedViewContent_content_79',
                    ye = 'StyleUnlockedViewContent_iconContent_9b',
                    ke = 'StyleUnlockedViewContent_iconContent__large_8b',
                    xe = 'StyleUnlockedViewContent_actions_29',
                    Ce = 'StyleUnlockedViewContent_actionsSecondaryBtn_3d',
                    Oe = 'StyleUnlockedViewContent_sparksContainer_60',
                    Se = 'StyleUnlockedViewContent_sparksContainer__large_be',
                    Te = 'StyleUnlockedViewContent_sparks_bd',
                    Le = () => {
                        const e = (0, i.useContext)(m),
                            t = e.large || e.extraLarge,
                            n = v()(me, t && he),
                            a = v()(ge, t && we),
                            o = v()(ve, t && pe),
                            s = v()(be, t && fe),
                            l = v()(ye, t && ke),
                            c = v()(Oe, t && Se);
                        E(b.n.ESCAPE, p.Sy);
                        const d = N('model', P.None),
                            u = d.tankLevel,
                            _ = d.tankTypeIcon,
                            h = d.tankName,
                            g = d.secondaryButtonTooltip,
                            w = d.secondaryButtonEnabled,
                            f = d.onOkClick,
                            y = d.onSecondaryClick,
                            k = d.onAnimationSound,
                            x = (0, i.useCallback)(() => {
                                f && f();
                            }, [f]),
                            C = (0, i.useCallback)(() => {
                                y && y();
                            }, [y]),
                            O = (0, i.useCallback)(() => {
                                k && k();
                            }, [k]);
                        return r().createElement(
                            'div',
                            { className: de },
                            r().createElement(
                                'div',
                                { className: c },
                                r().createElement('img', {
                                    className: Te,
                                    id: 'swfImg',
                                    src: R.animations.customization.divine_glow(),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: ue },
                                r().createElement(I, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: p.Sy,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(ce, { className: a, name: h, level: u, type: _ }),
                                r().createElement(
                                    'span',
                                    { className: o },
                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.title(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Ee },
                                    r().createElement('div', { className: l }, r().createElement(re, { onStart: O })),
                                ),
                                r().createElement(
                                    'span',
                                    { className: s },
                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.main(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: xe },
                                    r().createElement(
                                        F,
                                        { type: V.primary, mixClass: _e, onClick: x },
                                        R.strings.vehicle_customization.progression.requiredStyleUnlocked.okBtnLabel(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Ce },
                                        r().createElement(
                                            X,
                                            { body: g, isEnabled: '' !== g },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    F,
                                                    { type: V.secondary, mixClass: _e, disabled: !w, onClick: C },
                                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.secondaryBtnLabel(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Me = document.createElement('div');
                ((window.onload = () => {
                    (document.body.appendChild(Me), document.body.setAttribute('style', 'margin: 0'));
                }),
                    engine.whenReady.then(() => {
                        o().render(r().createElement(g, null, r().createElement(Le, null)), Me);
                    }));
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
        (__webpack_require__.O = (e, t, n, i) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, i] = deferred[l], a = !0, o = 0; o < t.length; o++)
                        (!1 & i || r >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), i < r && (r = i));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, i];
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
        (__webpack_require__.j = 165),
        (() => {
            var e = { 165: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        r,
                        [a, o, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        ((r = a[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(422));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
