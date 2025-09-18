(() => {
    'use strict';
    var __webpack_modules__ = {
            105: (e, u, t) => {
                t.d(u, { O: () => Ee });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => F, off: () => A, on: () => E, onResize: () => l, onScaleUpdated: () => c }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => B,
                        graphicsQuality: () => _,
                        playSound: () => d,
                        setRTPC: () => D,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => S, getTextureUrl: () => y }));
                var o = {};
                function i(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(o),
                    t.d(o, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => z,
                        arabic2roman: () => re,
                        children: () => a,
                        displayStatus: () => x.W,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => le,
                        events: () => k,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => te,
                        getExternalPaddingsRem: () => ae,
                        getFontNames: () => ne,
                        getScale: () => K,
                        getSize: () => $,
                        getViewGlobalPosition: () => G,
                        initExternalPaddings: () => ce,
                        isEventHandled: () => ee,
                        isFocused: () => Q,
                        pxToRem: () => Y,
                        remToPx: () => X,
                        resize: () => U,
                        sendEvent: () => I,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => V,
                        whenTutorialReady: () => se,
                    }));
                const l = i('clientResized'),
                    c = i('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    A = (e, u) => engine.off(e, u),
                    m = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const F = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : s(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        o = m[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function d(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function D(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(f).reduce((e, u) => ((e[u] = () => d(f[u])), e), {}),
                    h = { play: Object.assign({}, p, { sound: d }), setRTPC: D },
                    v = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    w = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function b(e) {
                    let u = '';
                    for (let t = w.length - 1; t >= 0; t--) for (; e >= w[t]; ) ((u += v[t]), (e -= w[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function y(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function S(e, u, t) {
                    return `url(${y(e, u, t)})`;
                }
                var x = t(112);
                const k = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    P = ['args'];
                const T = 2,
                    N = 16,
                    O = 32,
                    L = 64,
                    M = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, P);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    I = {
                        close(e) {
                            M('popover' === e ? T : O);
                        },
                        minimize() {
                            M(L);
                        },
                        move(e) {
                            M(N, { isMouseEvent: !0, on: e });
                        },
                    };
                function z(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function j(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function G(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: X(u.x), y: X(u.y) };
                }
                function q() {
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
                function Z(e, u) {
                    viewEnv.setAnimateWindow(e, u);
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
                function ue() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const ne = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    re = b;
                function ae() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(x.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === x.W[u]), e),
                        {},
                    ),
                    ie = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function le() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ce(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const Ee = { view: o, client: r, sound: h, intl: g };
            },
            112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, u, t) => {
                let n, r;
                (t.d(u, { n: () => n }),
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
                    })(r || (r = {})));
            },
            358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(105);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
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
            916: (e, u, t) => {
                t.d(u, { Sw: () => a.Z, B0: () => i, ry: () => B, Sy: () => _ });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                const r = n;
                var a = t(358);
                var o = t(613);
                let i;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    m = t(105);
                const F = ['args'];
                function d(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            d(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            d(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    _ = () => C(i.CLOSE),
                    g = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var f = t(572);
                const p = r.instance,
                    h = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(A),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, _);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = h;
            },
            613: (e, u, t) => {
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            515: (e, u, t) => {
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => ee,
                        Bar: () => Z,
                        DefaultScroll: () => J,
                        Direction: () => O,
                        defaultSettings: () => L,
                        useHorizontalScrollApi: () => I,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Ce, Bar: () => de, Default: () => Be, useVerticalScrollApi: () => ue }));
                var a = t(105),
                    o = t(363),
                    i = t.n(o),
                    s = t(533),
                    l = t.n(s);
                const c = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    E = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var A;
                function m(e = a.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
                            const n = (function (e, u) {
                                    switch (!0) {
                                        case e >= u.extraLarge.width:
                                            return u.extraLarge.weight;
                                        case e >= u.large.width && e < u.extraLarge.width:
                                            return u.large.weight;
                                        case e >= u.medium.width && e < u.large.width:
                                            return u.medium.weight;
                                        case e >= u.small.width && e < u.medium.width:
                                            return u.small.weight;
                                        default:
                                            return u.extraSmall.weight;
                                    }
                                })(e, t),
                                r = (function (e, u) {
                                    switch (!0) {
                                        case e >= u.extraLarge.height:
                                            return u.extraLarge.weight;
                                        case e >= u.large.height && e < u.extraLarge.height:
                                            return u.large.weight;
                                        case e >= u.medium.height && e < u.large.height:
                                            return u.medium.weight;
                                        case e >= u.small.height && e < u.medium.height:
                                            return u.small.weight;
                                        default:
                                            return u.extraSmall.weight;
                                    }
                                })(u, t),
                                a = Math.min(n, r);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: n === t.extraLarge.weight,
                                largeWidth: n === t.large.weight,
                                mediumWidth: n === t.medium.weight,
                                smallWidth: n === t.small.weight,
                                extraSmallWidth: n === t.extraSmall.weight,
                                extraLargeHeight: r === t.extraLarge.weight,
                                largeHeight: r === t.large.weight,
                                mediumHeight: r === t.medium.weight,
                                smallHeight: r === t.small.weight,
                                extraSmallHeight: r === t.extraSmall.weight,
                            };
                        })(u, t, E),
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
                })(A || (A = {}));
                const F = m(),
                    d = (0, o.createContext)(F),
                    D = ['children'];
                (0, o.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, D);
                    const n = (0, o.useContext)(d),
                        r = n.extraLarge,
                        a = n.large,
                        i = n.medium,
                        s = n.small,
                        l = n.extraSmall,
                        E = n.extraLargeWidth,
                        A = n.largeWidth,
                        m = n.mediumWidth,
                        F = n.smallWidth,
                        B = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        _ = n.largeHeight,
                        g = n.mediumHeight,
                        f = n.smallHeight,
                        p = n.extraSmallHeight,
                        h = { extraLarge: C, large: _, medium: g, small: f, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && a) return u;
                        if (t.medium && i) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && E) return c(u, t, h);
                        if (t.largeWidth && A) return c(u, t, h);
                        if (t.mediumWidth && m) return c(u, t, h);
                        if (t.smallWidth && F) return c(u, t, h);
                        if (t.extraSmallWidth && B) return c(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && _) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && f) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                });
                const B = ({ children: e }) => {
                        const u = (0, o.useState)(m),
                            t = u[0],
                            n = u[1],
                            r = (0, o.useState)(!1),
                            s = r[0],
                            l = r[1];
                        return (
                            (0, o.useLayoutEffect)(() => {
                                function e() {
                                    n((e) => {
                                        const u = a.O.client.getSize('rem');
                                        return e.width === u.width && e.height === u.height ? e : m(u);
                                    });
                                }
                                return (
                                    e(),
                                    l(!0),
                                    a.O.client.events.on('clientResized', e),
                                    a.O.client.events.on('self.onScaleUpdated', e),
                                    () => {
                                        (a.O.client.events.off('clientResized', e),
                                            a.O.client.events.off('self.onScaleUpdated', e));
                                    }
                                );
                            }, []),
                            i().createElement(d.Provider, { value: t }, s && e)
                        );
                    },
                    C = 'App_base_aa',
                    _ = 'App_contentWrapper_bf',
                    g = 'App_offset_1c';
                var f = t(483),
                    p = t.n(f);
                const h = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (u = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    v = (e, u, t) => (t < e ? e : t > u ? u : t),
                    w = [];
                function b(e) {
                    const u = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, u.current)(...e), w)
                    );
                }
                function y(e, u, t = []) {
                    const n = (0, o.useRef)(0),
                        r = (0, o.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, o.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, o.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, a),
                        r,
                    ];
                }
                function S(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const x = {
                    playHighlight() {
                        S('highlight');
                    },
                    playClick() {
                        S('play');
                    },
                    playYes() {
                        S('yes1');
                    },
                };
                function k(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return P(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return P(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function P(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function T(e, u, t) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        ((o = Date.now()), t.apply(l, s));
                                    }
                                    a ||
                                        (n && !r && E(),
                                        i(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        (i(), (a = !0));
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, o.useEffect)(() => n.cancel, [n]), n);
                }
                var N = t(30);
                let O;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(O || (O = {}));
                const L = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    M = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: a,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : v(r, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? L : l,
                                E = (0, o.useRef)(null),
                                A = (0, o.useRef)(null),
                                m = (0, o.useRef)(!1),
                                F = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = k(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, o.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                d = T(
                                    () => {
                                        a && a();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, N.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), F.trigger('change', e), a && m.current && d());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                B = D[0],
                                C = D[1],
                                _ = (0, o.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = B.scrollPosition.get(),
                                            a = (null != (n = B.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [B.scrollPosition],
                                ),
                                g = (0, o.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            C.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, B.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, B.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = _(u, e, n);
                                        g(a);
                                    },
                                    [g, _, c.step],
                                ),
                                p = (0, o.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && f(n(e)),
                                            E.current && F.trigger('mouseWheel', e, B.scrollPosition, u(E.current)));
                                    },
                                    [B.scrollPosition, f, F],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, o.useRef)(),
                                        n = (0, o.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        h(() => {
                                            const e = E.current;
                                            e &&
                                                (g(i(e, B.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [g, B.scrollPosition.goal],
                                ),
                                w = b(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, B.scrollPosition.goal);
                                    (u !== B.scrollPosition.goal && g(u, { immediate: !0 }),
                                        F.trigger('recalculateContent'));
                                });
                            ((0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            ),
                                (0, o.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !a) return;
                                    const u = () => {
                                            m.current = !0;
                                        },
                                        t = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [E]));
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? r(A.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: f,
                                    contentRef: E,
                                    wrapperRef: A,
                                    scrollPosition: C,
                                    animationScroll: B,
                                    recalculateContent: w,
                                    events: { on: F.on, off: F.off },
                                }),
                                [B.scrollPosition, g, f, F.off, F.on, w, p, C, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    I = M({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? O.Next : O.Prev),
                        forceTriggerMouseMove: a.O.view.forceTriggerMouseMove,
                    }),
                    z = 'HorizontalBar_base_49',
                    H = 'HorizontalBar_base__active_5e',
                    W = 'HorizontalBar_leftButton_5f',
                    j = 'HorizontalBar_rightButton_03',
                    V = 'HorizontalBar_track_0d',
                    $ = 'HorizontalBar_thumb_fd',
                    U = 'HorizontalBar_rail_32',
                    G = 'disable',
                    q = { pending: !1, offset: 0 },
                    K = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Y = () => {},
                    X = (e, u) => Math.max(20, e.offsetWidth * u),
                    Z = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = K, onDrag: n = Y }) => {
                        const r = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            E = (0, o.useRef)(null),
                            A = e.stepTimeout || 100,
                            m = (0, o.useState)(q),
                            F = m[0],
                            d = m[1],
                            D = (0, o.useCallback)(
                                (e) => {
                                    (d(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            B = () => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = v(0, 1, a / (r - n)),
                                    A = (u.offsetWidth - X(u, o)) * i;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return (s.current.classList.add(G), void l.current.classList.remove(G));
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (s.current.classList.remove(G), void l.current.classList.add(G));
                                            var u, t;
                                            (s.current.classList.remove(G), l.current.classList.remove(G));
                                        }
                                    })(A));
                            },
                            C = b(() => {
                                ((() => {
                                    const u = E.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    ((u.style.width = `${X(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== o ? r.current.classList.add(H) : r.current.classList.remove(H)));
                                })(),
                                    B());
                            });
                        ((0, o.useEffect)(() => h(C)),
                            (0, o.useEffect)(
                                () =>
                                    h(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = Y;
                                        const n = () => {
                                            (t(), (t = h(C)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!F.pending) return;
                                const u = a.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            s = E.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - F.offset - i.getBoundingClientRect().x,
                                            A = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: A }));
                                    }),
                                    t = a.O.client.events.mouse.up(() => {
                                        (u(), D(q));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, D]));
                        const _ = y((u) => e.applyStepTo(u), A, [e]),
                            g = _[0],
                            f = _[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const w = (e) => {
                            e.target.classList.contains(G) || S('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(z, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(W, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(G) || 0 !== e.button || (S('play'), g(O.Next));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: w,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(V, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((S('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? O.Prev : O.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: w,
                                },
                                i().createElement('div', { ref: E, className: p()($, u.thumb) }),
                                i().createElement('div', { className: p()(U, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(j, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(G) || 0 !== e.button || (S('play'), g(O.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Q = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    J = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(Q.base, e.base) });
                            }, [n]),
                            A = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(Q.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(Q.defaultScrollArea, r) },
                                i().createElement(ee, { className: s, api: A, classNames: a }, e),
                            ),
                            i().createElement(Z, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    ee = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, o.useEffect)(() => h(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(Q.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: p()(Q.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: p()(Q.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((ee.Bar = Z), (ee.Default = J));
                const ue = M({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? O.Next : O.Prev),
                    }),
                    te = 'VerticalBar_base_f3',
                    ne = 'VerticalBar_base__active_72',
                    re = 'VerticalBar_topButton_d7',
                    ae = 'VerticalBar_bottomButton_06',
                    oe = 'VerticalBar_track_df',
                    ie = 'VerticalBar_thumb_32',
                    se = 'VerticalBar_rail_43',
                    le = 'disable',
                    ce = () => {},
                    Ee = { pending: !1, offset: 0 },
                    Ae = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    me = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Fe = (e, u) => Math.max(20, e.offsetHeight * u),
                    de = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ae, onDrag: n = ce }) => {
                        const r = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            E = (0, o.useRef)(null),
                            A = e.stepTimeout || 100,
                            m = (0, o.useState)(Ee),
                            F = m[0],
                            d = m[1],
                            D = (0, o.useCallback)(
                                (e) => {
                                    (d(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            B = b(() => {
                                const u = E.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Fe(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== o ? r.current.classList.add(ne) : r.current.classList.remove(ne)),
                                    o
                                );
                            }),
                            C = b(() => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = v(0, 1, a / (r - n)),
                                    A = (u.offsetHeight - Fe(u, o)) * i;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    s.current.classList.add(le),
                                                    void l.current.classList.remove(le)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(le),
                                                    void l.current.classList.add(le)
                                                );
                                            var u, t;
                                            (s.current.classList.remove(le), l.current.classList.remove(le));
                                        }
                                    })(A));
                            }),
                            _ = b(() => {
                                me(e, () => {
                                    (B(), C());
                                });
                            });
                        ((0, o.useEffect)(() => h(_)),
                            (0, o.useEffect)(() => {
                                const u = () => {
                                    me(e, () => {
                                        C();
                                    });
                                };
                                let t = ce;
                                const n = () => {
                                    (t(), (t = h(_)));
                                };
                                return (
                                    e.events.on('recalculateContent', _),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', _),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!F.pending) return;
                                const u = a.O.client.events.mouse.up(() => {
                                        D(Ee);
                                    }),
                                    t = a.O.client.events.mouse.move(([u]) => {
                                        me(e, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - F.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, D]));
                        const g = y((u) => e.applyStepTo(u), A, [e]),
                            f = g[0],
                            w = g[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const x = (e) => {
                            e.target.classList.contains(le) || S('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(te, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(re, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || (S('play'), f(O.Next));
                                },
                                ref: s,
                                onMouseEnter: x,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(oe, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((S('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        me(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? O.Prev : O.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: x,
                                },
                                i().createElement('div', { ref: E, className: p()(ie, u.thumb) }),
                                i().createElement('div', { className: p()(se, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(ae, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || (S('play'), f(O.Prev));
                                },
                                onMouseUp: w,
                                ref: l,
                                onMouseEnter: x,
                            }),
                        );
                    }),
                    De = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Be = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(De.base, e.base) });
                            }, [n]),
                            A = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(De.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(De.area, r) },
                                i().createElement(Ce, { className: a, classNames: s, api: A }, e),
                            ),
                            i().createElement(de, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Ce = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, o.useEffect)(() => h(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(De.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(De.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Ce.Default = Be;
                const _e = { Vertical: r, Horizontal: n },
                    ge = {
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
                    fe = [
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
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        n = e.goto,
                        r = e.classNames,
                        s = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        E = e.onMouseUp,
                        A = e.side,
                        m = void 0 === A ? 'left' : A,
                        F = e.type,
                        d = void 0 === F ? 'back' : F,
                        D = e.soundHover,
                        B = void 0 === D ? 'highlight' : D,
                        C = e.soundClick,
                        _ = void 0 === C ? 'play' : C,
                        g = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, fe);
                    const f = (0, o.useCallback)(
                            (e) => {
                                (null == s || s(e), a.O.sound.play.sound(B));
                            },
                            [s, B],
                        ),
                        h = (0, o.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        v = (0, o.useCallback)(
                            (e) => {
                                (null == c || c(e), a.O.sound.play.sound(_));
                            },
                            [c, _],
                        ),
                        w = (0, o.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return i().createElement(
                        'div',
                        pe(
                            {
                                className: p()(
                                    ge.base,
                                    ge[`base__${d}`],
                                    ge[`base__${m}`],
                                    null == r ? void 0 : r.base,
                                ),
                                onMouseEnter: f,
                                onMouseLeave: h,
                                onMouseDown: v,
                                onMouseUp: w,
                                onClick: t,
                            },
                            g,
                        ),
                        'info' !== d && i().createElement('div', { className: ge.shine }),
                        i().createElement(
                            'div',
                            {
                                className: p()(
                                    ge.icon,
                                    ge[`icon__${d}`],
                                    ge[`icon__${m}`],
                                    null == r ? void 0 : r.icon,
                                ),
                            },
                            i().createElement('div', { className: p()(ge.glow, null == r ? void 0 : r.glow) }),
                        ),
                        i().createElement(
                            'div',
                            { className: p()(ge.caption, ge[`caption__${d}`], null == r ? void 0 : r.caption) },
                            u,
                        ),
                        n && i().createElement('div', { className: p()(ge.goto, null == r ? void 0 : r.goto) }, n),
                    );
                };
                var ve = t(521),
                    we = t(916);
                const be = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ye(e = ve.n.NONE, u = be, t = !1, n = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== ve.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && a.O.view.isEventHandled()) return;
                                (a.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Se = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            r = '';
                        var a;
                        u &&
                            ((r = (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: r, caller: t, stack: u, resId: n };
                    },
                    xe = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    ke = (e) => {
                        const u = (0, o.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    Pe = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Te = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Ne = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = xe(`${e}.${t}`, window);
                                return Pe(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Oe = (e) => {
                        const u = ((e) => {
                                const u = Se(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: Te(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = xe(Te(t, `${u}.${n}`), window);
                                    return Pe(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const Re = () => (window.injected || (window.injected = new Map()), window.injected);
                const Le = we.Sw.instance;
                let Me;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Me || (Me = {}));
                const Ie = (e = 'model', u = Me.Deep) => {
                    const t = (0, o.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, o.useMemo)(() => Se(), []),
                        a = r.callerUrl,
                        i = r.caller,
                        s = r.resId,
                        l = (0, o.useMemo)(() => {
                            const u = (function (e) {
                                return Re().has(e);
                            })(a.replace('.js', '.html'));
                            return window.__feature && window.__feature !== i && !u ? `subViews.${i}.${e}` : e;
                        }, [a, i, e]),
                        c = (0, o.useState)(() =>
                            ((e) => {
                                const u = xe(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return Pe(u) ? u.value : u;
                            })(Ne(l)),
                        ),
                        E = c[0],
                        A = c[1],
                        m = (0, o.useRef)(-1);
                    return (
                        ke(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? Me.Deep : Me.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== Me.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === Me.Deep
                                            ? (e === E && n((e) => e + 1), A(e))
                                            : A(Object.assign([], e));
                                    },
                                    r = Oe(e);
                                m.current = Le.addCallback(r, t, s, u === Me.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (u !== Me.None)
                                return () => {
                                    Le.removeCallback(m.current, s);
                                };
                        }, [s, u]),
                        E
                    );
                };
                function ze(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const He = ze;
                const We = ['children', 'top', 'bottom'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ve = (e) => {
                    let u = e.children,
                        t = e.top,
                        n = e.bottom,
                        r = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, We);
                    return i().createElement(
                        'div',
                        je({}, r, { style: Object.assign({ marginTop: `${t}rem`, marginBottom: `${n}rem` }, r.style) }),
                        u,
                    );
                };
                const $e = 'ProgressionHeader_base_d3',
                    Ue = 'ProgressionHeader_base__large_26',
                    Ge = 'ProgressionHeader_line_60',
                    qe = 'ProgressionHeader_title_3f',
                    Ke = ({ title: e, className: u }) => {
                        const t = (0, o.useContext)(d),
                            n = p()($e, (t.large || t.extraLarge) && Ue, u);
                        return i().createElement(
                            'div',
                            { className: n },
                            i().createElement('div', { className: Ge }),
                            i().createElement(
                                'span',
                                { className: qe },
                                R.strings.common.common.open_quotes(),
                                e,
                                R.strings.common.common.close_quotes(),
                            ),
                            i().createElement('div', { className: Ge }),
                        );
                    };
                var Ye = t(281);
                let Xe;
                function Ze(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Xe || (Xe = {}));
                const Qe = (e) => e.replace(/&nbsp;/g, ' '),
                    Je = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    eu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    uu = (e, u, t = Xe.left) => e.split(u).reduce(t === Xe.left ? Je : eu, []),
                    tu = (() => {
                        const e = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((e) => e.source)
                                .join('|'),
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    nu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ru = (e, u = Xe.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (nu.includes(t)) return tu(e);
                        if ('ja' === t) {
                            return (0, Ye.D4)()
                                .parse(e)
                                .map((e) => Qe(e));
                        }
                        return ((e, u = Xe.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = Qe(e);
                            return (uu(r, /( )/, u).forEach((e) => (t = t.concat(uu(e, n, Xe.left)))), t);
                        })(e, u);
                    };
                var au = t(613);
                (Date.now(), au.Ew.getRegionalDateTime, au.Ew.getFormattedDateTime);
                we.Sw.instance;
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const iu = [
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
                function su(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const lu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: we.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    cu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            A = void 0 !== E && E,
                            m = e.decoratorId,
                            F = void 0 === m ? 0 : m,
                            d = e.isEnabled,
                            D = void 0 === d || d,
                            B = e.targetId,
                            C = void 0 === B ? 0 : B,
                            _ = e.onShow,
                            g = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, iu);
                        const p = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, o.useMemo)(() => C || Se().resId, [C]),
                            v = (0, o.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (lu(t, F, { isMouseEvent: !0, on: !0, arguments: su(n) }, h),
                                    _ && _(),
                                    (p.current.isVisible = !0));
                            }, [t, F, n, h, _]),
                            w = (0, o.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        lu(t, F, { on: !1 }, h),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, F, h, g]),
                            b = (0, o.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', b, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return D
                            ? (0, o.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(p.current.timeoutId),
                                                      (p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (w(), null == a || a(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === A && w(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === A && w(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Eu = ['children'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const mu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Eu);
                        return i().createElement(
                            cu,
                            Au(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Fu = 'HoverContent_base_5c',
                    du = 'HoverContent_icon_99',
                    Du = 'HoverContent_text_e7',
                    Bu = ({ className: e }) => {
                        const u = (0, o.useMemo)(() => R.strings.vehicle_customization.progression.item.hover(), []);
                        return i().createElement(
                            'span',
                            { className: p()(Fu, e) },
                            i().createElement('span', { className: du }),
                            i().createElement('span', { className: Du }, u),
                        );
                    },
                    Cu = 'Icon_base_d5',
                    _u = 'Icon_base__placeholder_9c',
                    gu = 'Icon_imageTemp_1f',
                    fu = ({ src: e, alt: u, onClick: t, onLoad: n, className: r }) => {
                        const a = (0, o.useState)(!0),
                            s = a[0],
                            l = a[1],
                            c = (0, o.useState)(!1),
                            E = c[0],
                            A = c[1];
                        (0, o.useEffect)(() => {
                            A(!0);
                        }, []);
                        const m = (0, o.useCallback)(() => {
                                (l(!1), n && n());
                            }, [n]),
                            F = i().createElement('img', {
                                className: p()(r, s && gu),
                                src: e,
                                onClick: t,
                                onLoad: m,
                                alt: u,
                            });
                        return E
                            ? s
                                ? i().createElement(
                                      'div',
                                      { className: p()(r, Cu) },
                                      s && i().createElement('div', { className: _u }),
                                      F,
                                  )
                                : F
                            : null;
                    },
                    pu = 'Item_base_50',
                    hu = 'Item_base__first_a0',
                    vu = 'Item_base__firstSmall_e6',
                    wu = 'Item_base__firstLarge_53',
                    bu = 'Item_content_bb',
                    yu = 'Item_content__small_9a',
                    Su = 'Item_content__large_a3',
                    xu = 'Item_image_f0',
                    ku = 'Item_image__small_9c',
                    Pu = 'Item_image__large_38',
                    Tu = 'Item_image__locked_0f',
                    Nu = 'Item_image__progress_21',
                    Ou = 'Item_imageContainer_8f',
                    Ru = 'Item_imageContainer__small_6c',
                    Lu = 'Item_imageContainer__large_17',
                    Mu = 'Item_hoverContent_51',
                    Iu = 'Item_itemProgression_d8',
                    zu = 'Item_itemProgression__small_2e',
                    Hu = 'Item_itemProgression__large_34',
                    Wu = 'Item_itemProgressionWithBar_f5',
                    ju = 'Item_itemProgressionWithBar__small_20',
                    Vu = 'Item_itemProgressionWithBar__large_ab',
                    $u = 'Item_itemSeparator_1f',
                    Uu = 'Item_itemSeparator__small_94',
                    Gu = 'Item_itemSeparator__large_ba',
                    qu = 'ItemBlockDone_base_b5',
                    Ku = 'ItemBlockDone_base__large_69',
                    Yu = 'ItemBlockDone_contentContainer_04',
                    Xu = 'ItemBlockDone_contentContainer__small_61',
                    Zu = 'ItemBlockDone_contentContainer__large_b2',
                    Qu = ({ levelText: e }) => {
                        const u = (0, o.useContext)(d),
                            t = u.small,
                            n = u.large || u.extraLarge,
                            r = p()(qu, n && Ku),
                            a = p()(Yu, t && Xu, n && Zu);
                        return i().createElement(
                            'div',
                            { className: r },
                            i().createElement('div', { className: a }, e),
                        );
                    },
                    Ju = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let et, ut;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(et || (et = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(ut || (ut = {})));
                const tt = ({ size: e = et.Default }) => {
                        const u = p()(Ju.background, Ju[`background__${e}`]);
                        return i().createElement('div', { className: u });
                    },
                    nt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    rt = ({ size: e }) => {
                        const u = p()(nt.base, nt[`base__${e}`]);
                        return i().createElement('div', { className: u });
                    },
                    at = {
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
                    ot = (0, o.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const o = p()(
                                    at.base,
                                    at[`base__${e}`],
                                    t && at.base__disabled,
                                    r && at.base__finished,
                                    a && at.base__withoutBounce,
                                ),
                                s = !t && !r;
                            return i().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                i().createElement('div', { className: at.pattern }),
                                i().createElement('div', { className: at.gradient }),
                                s && i().createElement(rt, { size: e }),
                            );
                        },
                    ),
                    it = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let st, lt;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(st || (st = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(lt || (lt = {})));
                const ct = 'ProgressBarDeltaGrow_base_7e',
                    Et = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    At = 'ProgressBarDeltaGrow_glow_68',
                    mt = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ft = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    dt = (e) => ({ transitionDuration: `${e}ms` }),
                    Dt = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: a,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = a < n,
                                A = (0, o.useState)(st.Idle),
                                m = A[0],
                                F = A[1],
                                d = m === st.End,
                                D = m === st.Idle,
                                B = m === st.Grow,
                                C = m === st.Shrink,
                                _ = (0, o.useCallback)(
                                    (e) => {
                                        (F(e), l && l(e));
                                    },
                                    [l],
                                ),
                                g = (0, o.useCallback)(
                                    (e, u) =>
                                        it(() => {
                                            _(e);
                                        }, u),
                                    [_],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? g(st.Grow, u)
                                        : B
                                          ? g(st.Shrink, e)
                                          : C
                                            ? g(st.End, e)
                                            : void (d && s && s());
                            }, [g, t, d, B, D, C, s, u, e]);
                            const f = (0, o.useMemo)(() => Object.assign({ width: '100%' }, dt(e), mt(E)), [E, e]),
                                h = (0, o.useMemo)(() => Object.assign({ width: '0%' }, dt(e), mt(E)), [E, e]),
                                v = (0, o.useMemo)(() => Object.assign({ width: '0%' }, Ft(E, n), dt(e)), [n, E, e]),
                                w = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(a - n)}%` }, Ft(E, n), dt(e)),
                                    [n, E, a, e],
                                );
                            if (d) return null;
                            const b = p()(ct, c, E && 0 === a && Et);
                            return i().createElement(
                                'div',
                                { style: D ? v : w, className: b },
                                i().createElement(
                                    'div',
                                    { style: C ? h : f, className: At },
                                    i().createElement(rt, { size: r }),
                                ),
                            );
                        },
                    ),
                    Bt = (0, o.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: a,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                A = (0, o.useState)(!1),
                                m = A[0],
                                F = A[1],
                                d = (0, o.useCallback)(
                                    (e) => {
                                        (e === st.Shrink && F(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                D = (0, o.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                B = (0, o.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(ot, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: a,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: m ? B : D,
                                }),
                                t >= 0 &&
                                    i().createElement(Dt, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ct = 'ProgressBarDeltaSimple_base_6c',
                    _t = 'ProgressBarDeltaSimple_delta_99',
                    gt = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: a,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = a < n,
                                E = (0, o.useState)(lt.Idle),
                                A = E[0],
                                m = E[1],
                                F = A === lt.In,
                                d = A === lt.End,
                                D = A === lt.Idle,
                                B = (0, o.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, o.useEffect)(() => {
                                if (D && !t) {
                                    return it(() => {
                                        B(lt.In);
                                    }, u);
                                }
                            }, [B, t, D, u]),
                                (0, o.useEffect)(() => {
                                    if (F) {
                                        return it(() => {
                                            (s && s(), B(lt.End));
                                        }, e + u);
                                    }
                                }, [B, F, s, u, e]));
                            const C = (0, o.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                _ = (0, o.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, o.useMemo)(
                                    () => ({ width: `${Math.abs(n - a)}%`, left: `${c ? a : n}%` }),
                                    [n, c, a],
                                );
                            return d
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: Ct, style: g },
                                      i().createElement(
                                          'div',
                                          { style: D ? C : _, className: _t },
                                          i().createElement(rt, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    ft = (0, o.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: a,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, o.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(ot, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: a,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    i().createElement(gt, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    pt = ['onComplete', 'onEndAnimation'];
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                const vt = (0, o.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, pt);
                        const r = (0, o.useState)(!1),
                            a = r[0],
                            s = r[1],
                            l = (0, o.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== a && s(e), e && u && u(), t && t());
                            }, [a, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case ut.Simple:
                                return i().createElement(ft, ht({}, n, { onEndAnimation: l, isComplete: a }));
                            case ut.Growing:
                                return i().createElement(Bt, ht({}, n, { onEndAnimation: l, isComplete: a }));
                            default:
                                return null;
                        }
                    }),
                    wt = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: r }) => {
                        const a = (0, o.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, o.useEffect)(() => {
                                s && r && r();
                            }, [s, r]),
                            i().createElement(ot, { size: e, disabled: n, baseStyles: a, isComplete: s, lineRef: t })
                        );
                    },
                    bt = ['onEndAnimation'];
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const St = (0, o.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, bt);
                    const n = (0, o.useRef)({}),
                        r = (0, o.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        a = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = a),
                        i().createElement(
                            vt,
                            yt({}, t, {
                                onEndAnimation: r,
                                key: `${a}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: a,
                            }),
                        )
                    );
                });
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const kt = (0, o.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            additionalKey: a,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === u)
                                return i().createElement(wt, {
                                    key: `${r}-${u}-${a}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const E = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: a,
                                lineRef: t,
                                disabled: n,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? i().createElement(St, E)
                                : i().createElement(vt, xt({ key: `${r}-${u}-${a}` }, E));
                        },
                    ),
                    Pt = (e) => {
                        var u, t, n, r, a, o, i, s, l, c, E, A, m, F, d, D, B, C, _, g;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (n = null == (r = e.bg) ? void 0 : r.heightSmall) ? n : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (a = e.line.filter) ? a : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (s = e.pattern.gradient)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (E = null == (A = e.glowSettings) ? void 0 : A.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (m = null == (F = e.glowSettings) ? void 0 : F.height) ? m : '100rem',
                            '--progress-glow-small-width':
                                null != (d = null == (D = e.glowSettings) ? void 0 : D.smallWidth) ? d : '44rem',
                            '--progress-glow-small-height':
                                null != (B = null == (C = e.glowSettings) ? void 0 : C.smallHeight) ? B : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (_ = null == (g = e.glowSettings) ? void 0 : g.mixBlendMode) ? _ : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    Tt = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (v(0, u, t) / u) * 100;
                        }
                        return e;
                    };
                const Nt = {
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
                    Ot = {
                        freezed: !1,
                        withStack: !1,
                        type: ut.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Rt = (0, o.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Nt,
                            size: t = et.Default,
                            animationSettings: n = Ot,
                            disabled: r = !1,
                            withoutBackground: a = !1,
                            value: s,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: E,
                            onChangeAnimationState: A,
                            onEndAnimation: m,
                            onComplete: F,
                            className: d,
                        }) => {
                            const D = (function (e, u, t) {
                                return (0, o.useMemo)(() => {
                                    const n = (v(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: Tt(n, u, t) };
                                }, [t, u, e]);
                            })(s, e, l);
                            return i().createElement(
                                'div',
                                { className: p()(Ju.base, d, Ju[`base__${t}`]), style: Pt(u) },
                                !a && i().createElement(tt, { size: t }),
                                i().createElement(kt, {
                                    size: t,
                                    lineRef: E,
                                    disabled: r,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: A,
                                    onComplete: F,
                                }),
                            );
                        },
                    ),
                    Lt = 'ItemBlockProgression_base_19',
                    Mt = 'ItemBlockProgression_base__small_02',
                    It = 'ItemBlockProgression_text_d9',
                    zt = 'ItemBlockProgression_text__large_7e',
                    Ht = 'ItemBlockProgression_text__score_9d',
                    Wt = 'ItemBlockProgression_count_b1',
                    jt = 'ItemBlockProgression_description_b2',
                    Vt = ({
                        unlockCondition: e,
                        progressionVal: u,
                        maxProgressionVal: t,
                        hideProgressBarAndString: n,
                        className: r,
                    }) => {
                        const a = (0, o.useMemo)(() => `/ ${t}`, [t]),
                            s = (0, o.useContext)(d),
                            l = p()(Lt, (s.small || s.medium || s.large || s.extraLarge) && Mt, r),
                            c = p()(It, (s.large || s.extraLarge) && zt);
                        return i().createElement(
                            'div',
                            { className: l },
                            !n &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'span',
                                        { className: p()(Wt, c) },
                                        i().createElement('span', { className: Ht }, u),
                                        a,
                                    ),
                                    i().createElement(Rt, { value: u, size: et.Small, maxValue: t }),
                                ),
                            i().createElement('span', { className: p()(jt, c) }, e),
                        );
                    },
                    $t = 'Separator_base_44',
                    Ut = 'Separator_lock_98',
                    Gt = 'Separator_lockImage_6c',
                    qt = 'Separator_arrow_12',
                    Kt = ({ unlocked: e, className: u }) =>
                        i().createElement(
                            'span',
                            { className: p()($t, u) },
                            i().createElement('span', { className: qt }),
                            !e &&
                                i().createElement(
                                    'span',
                                    { className: Ut },
                                    i().createElement('img', {
                                        src: 'R.images.gui.maps.icons.customization.progeression_screen.lockx2',
                                        className: Gt,
                                    }),
                                ),
                        );
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                const Xt = (function (e, u, t) {
                        if (!u && !t) throw new Error('You should define at least one helper function');
                        return function (n) {
                            var r, a;
                            return (
                                (a = r =
                                    class extends i().Component {
                                        constructor(n) {
                                            super(n);
                                            let r = {};
                                            const a = Se().caller,
                                                o =
                                                    window.__feature && window.__feature !== a
                                                        ? `subViews.${a}.${e}`
                                                        : e,
                                                i = xe(o, window);
                                            if ((u && (r = Object.assign({}, r, u(i))), t)) {
                                                const e = t(i);
                                                for (const u in e)
                                                    Object.prototype.hasOwnProperty.call(e, u) && (r[u] = e[u].bind(i));
                                            }
                                            this.state = r;
                                        }
                                        render() {
                                            return i().createElement(n, ou({}, this.props, this.state));
                                        }
                                    }),
                                (r.displayName = `InjectProps(${(function (e) {
                                    return e.displayName || e.name || 'Component';
                                })(n)})`),
                                a
                            );
                        };
                    })('model', void 0, (e) => ({ onSelectItem: (u, t) => e.onSelectItem({ intCD: u, level: t }) }))(
                        ({
                            itemId: e,
                            onSelectItem: u,
                            inProgress: t,
                            unlocked: n,
                            progressBlock: r,
                            icon: a,
                            level: s,
                            levelText: l,
                            isFirst: c,
                        }) => {
                            const E = (0, o.useContext)(d),
                                A = E.small,
                                m = E.medium || E.large || E.extraLarge,
                                F = (0, o.useMemo)(() => p()(pu, c && hu, c && A && vu, c && m && wu), [c, A, m]),
                                D = (0, o.useMemo)(
                                    () => p()(xu, (t || !n) && Tu, t && Nu, A && ku, m && Pu),
                                    [t, n, A, m],
                                ),
                                B = p()(bu, A && yu, m && Su),
                                C = p()(Ou, A && Ru, m && Lu),
                                _ = p()($u, A && Uu, m && Gu);
                            let g;
                            g = r.hideProgressBarAndString ? p()(Iu, A && zu, m && Hu) : p()(Wu, A && ju, m && Vu);
                            const f = (0, o.useCallback)(() => {
                                    (S('cust_progress_exiting'), u(e, s));
                                }, [e, s, u]),
                                h = (0, o.useCallback)(() => {
                                    n && x.playHighlight();
                                }, [n]),
                                v = (0, o.useMemo)(
                                    () => ({
                                        id: e,
                                        tooltip: 'techCustomizationItem',
                                        showInventoryBlock: !1,
                                        level: s,
                                    }),
                                    [e, s],
                                );
                            return i().createElement(
                                'div',
                                { className: F },
                                !c && i().createElement(Kt, { unlocked: n || t, className: _ }),
                                i().createElement(
                                    'div',
                                    { className: B },
                                    i().createElement(
                                        'div',
                                        { className: C, onMouseEnter: h },
                                        i().createElement(
                                            'div',
                                            { className: C, onMouseEnter: h },
                                            i().createElement(
                                                mu,
                                                { args: v, isEnabled: -1 !== e },
                                                i().createElement(
                                                    'div',
                                                    null,
                                                    i().createElement(fu, { className: D, src: a || '', onClick: f }),
                                                    n && i().createElement(Bu, { className: Mu }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    t && i().createElement(Vt, Yt({}, r, { className: g })),
                                    n && i().createElement(Qu, { levelText: l }),
                                ),
                            );
                        },
                    ),
                    Zt = 'List_base_37';
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = ({ eachLevelInfo: e, itemId: u, scaleFactor: t }) =>
                        i().createElement(
                            'div',
                            { className: Zt },
                            i().createElement(
                                Xt,
                                Qt(
                                    { key: e.items[0].value.level, itemId: u, scaleFactor: t, isFirst: !0 },
                                    e.items[0].value,
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: Zt },
                                e.items.map(
                                    ({ value: e }, n) =>
                                        0 !== n &&
                                        i().createElement(Xt, Qt({ key: e.level, itemId: u, scaleFactor: t }, e)),
                                ),
                            ),
                        ),
                    en = 'ProgressionSequence_base_d9',
                    un = 'ProgressionSequence_base__small_c3',
                    tn = 'ProgressionSequence_base__large_44',
                    nn = 'ProgressionSequence_header_30',
                    rn = ['itemUserString'];
                const an = (e) => {
                        let u = e.itemUserString,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, rn);
                        const n = (0, o.useContext)(d),
                            r = p()(en, n.small && un, (n.medium || n.large || n.extraLarge) && tn);
                        return i().createElement(
                            'div',
                            { className: r },
                            i().createElement(Ke, { title: u, className: nn }),
                            i().createElement(Jt, t),
                        );
                    },
                    on = 'Grid_base_d1',
                    sn = 'Grid_content_ec',
                    ln = 'Grid_content__small_a4',
                    cn = 'Grid_content__large_c3';
                function En() {
                    return (
                        (En =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        En.apply(this, arguments)
                    );
                }
                const An = ({ items: e }) => {
                        const u = (0, o.useContext)(d),
                            t = p()(sn, u.small && ln, (u.medium || u.large || u.extraLarge) && cn);
                        return i().createElement(
                            'div',
                            { className: on },
                            i().createElement(
                                'div',
                                { className: t },
                                e.map(({ value: e }) => i().createElement(an, En({ key: e.itemId }, e))),
                            ),
                        );
                    },
                    mn = 'Header_base_0d',
                    Fn = 'Header_tankTypeIcon_d6',
                    dn = 'Header_contentContainer_85',
                    Dn = 'Header_spaceAtTheEnd_c0',
                    Bn = ({ name: e, level: u, extraText: t, type: n, className: r }) => {
                        const a = t ? t.replace('{tankLevel}', u) : `${u} {tankName}`,
                            o = { backgroundImage: `url(${n})` };
                        return i().createElement(
                            'div',
                            { className: p()(mn, r) },
                            i().createElement(
                                'div',
                                { className: dn },
                                a
                                    .split('{tankName}')
                                    .map((u, t) =>
                                        1 === t
                                            ? [
                                                  i().createElement('span', { key: 'icon', className: Fn, style: o }),
                                                  i().createElement('span', { key: 'name', className: Dn }, e),
                                                  i().createElement('span', { key: t }, u),
                                              ]
                                            : i().createElement('span', { key: t }, u),
                                    ),
                            ),
                        );
                    };
                Bn.defaultProps = { extraText: '' };
                const Cn = {
                        base: 'ProgressiveItemsViewContent_base_54',
                        fadeIn: 'ProgressiveItemsViewContent_fadeIn_8f',
                        overlay: 'ProgressiveItemsViewContent_overlay_2e',
                        overlay__lowSettings: 'ProgressiveItemsViewContent_overlay__lowSettings_b6',
                        closeBtn: 'ProgressiveItemsViewContent_closeBtn_c6',
                        infoBtn: 'ProgressiveItemsViewContent_infoBtn_f4',
                        infoBtn__externalPaddings: 'ProgressiveItemsViewContent_infoBtn__externalPaddings_b8',
                        header: 'ProgressiveItemsViewContent_header_b1',
                        grid: 'ProgressiveItemsViewContent_grid_96',
                        scroll: 'ProgressiveItemsViewContent_scroll_7d',
                        lip: 'ProgressiveItemsViewContent_lip_6e',
                        lip__show: 'ProgressiveItemsViewContent_lip__show_ea',
                    },
                    _n = R.strings.vehicle_customization.progression.about(),
                    gn = R.strings.menu.viewHeader.closeBtn.label(),
                    fn = R.strings.vehicle_customization.progression.tankHeader(),
                    pn = () => {
                        (S(R.sounds.cust_progress_exiting()), (0, we.Sy)());
                    },
                    hn = ({ scrollPositionRef: e, onAboutClick: u }) => {
                        const t = Ie('model'),
                            n = t.isRendererPipelineDeferred,
                            r = t.itemToScroll,
                            s = t.tankName,
                            l = t.tankLevel,
                            c = t.tankType,
                            E = t.progressiveItems,
                            A = (0, o.useRef)(null),
                            m = (0, o.useRef)(null),
                            F = (function () {
                                const e = (0, o.useState)({ top: 0, bottom: 0, left: 0, right: 0 }),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        const e = () => {
                                            t(a.O.view.getExternalPaddingsRem());
                                        };
                                        return (
                                            e(),
                                            engine.on('self.onPaddingsUpdated', e),
                                            () => {
                                                engine.off('self.onPaddingsUpdated', e);
                                            }
                                        );
                                    }, []),
                                    { paddings: u, externalPaddingsExisted: 0 !== u.top || 0 !== u.bottom }
                                );
                            })(),
                            d = ue();
                        var D;
                        return (
                            (0, o.useEffect)(() => {
                                S(R.sounds.cust_progress_entering());
                            }, []),
                            (D = pn),
                            ye(ve.n.ESCAPE, D),
                            (0, o.useEffect)(
                                () =>
                                    h(() => {
                                        const u = A.current,
                                            t = d.contentRef.current;
                                        if (!u || !t) return;
                                        const n = (function (e, u) {
                                            for (let t = 0; t < e.length; t++) if (u(He(e, t), t, e)) return t;
                                        })(E.items, (e) => e.itemId === r);
                                        if (void 0 !== n) {
                                            const e = Math.round((u.offsetHeight / E.items.length) * n) - 30;
                                            d.applyScroll(e);
                                        } else e.current > 0 && d.applyScroll(e.current, { immediate: !0 });
                                    }),
                                [r, E.items, d, e],
                            ),
                            (0, o.useEffect)(() => {
                                const u = (u) => {
                                        e.current = u.value.scrollPosition;
                                    },
                                    t = (e) => {
                                        m.current &&
                                            (0 === e.value.scrollPosition
                                                ? m.current.classList.remove(Cn.lip__show)
                                                : m.current.classList.add(Cn.lip__show));
                                    };
                                return (
                                    d.events.on('change', u),
                                    d.events.on('change', t),
                                    () => {
                                        (d.events.off('change', u), d.events.off('change', t));
                                    }
                                );
                            }, [d.events, e]),
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: p()(Cn.overlay, !n && Cn.overlay__lowSettings) }),
                                i().createElement(
                                    Ve,
                                    { top: F.paddings.top, bottom: F.paddings.bottom },
                                    i().createElement(
                                        'div',
                                        { className: Cn.base },
                                        i().createElement(
                                            'div',
                                            { className: Cn.header },
                                            i().createElement(Bn, { extraText: fn, name: s, level: l, type: c }),
                                        ),
                                        i().createElement('div', { ref: m, className: p()(Cn.lip, Cn.lip__hidden) }),
                                        i().createElement(
                                            _e.Vertical.Default,
                                            { className: Cn.scroll, api: d },
                                            i().createElement(
                                                'div',
                                                { ref: A, className: Cn.grid },
                                                i().createElement(An, { items: E.items }),
                                            ),
                                        ),
                                        i().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    Cn.infoBtn,
                                                    F.externalPaddingsExisted && Cn.infoBtn__externalPaddings,
                                                ),
                                            },
                                            i().createElement(he, {
                                                caption: _n,
                                                type: 'info',
                                                onClick: u,
                                                side: F.externalPaddingsExisted ? 'right' : 'left',
                                            }),
                                        ),
                                        !F.externalPaddingsExisted &&
                                            i().createElement(
                                                'div',
                                                { className: Cn.closeBtn },
                                                i().createElement(he, {
                                                    caption: gn,
                                                    type: 'close',
                                                    side: 'right',
                                                    onClick: pn,
                                                }),
                                            ),
                                    ),
                                ),
                            )
                        );
                    },
                    vn = ({ withDescription: e, onClick: u }) =>
                        i().createElement(he, {
                            caption: R.strings.vehicle_customization.customizationHeader.back(),
                            goto: e ? R.strings.vehicle_customization.customizationHeader.toDecales() : '',
                            onClick: u,
                        }),
                    wn = 'Tutorial_base_56',
                    bn = 'Tutorial_overlay_5e',
                    yn = 'Tutorial_overlay__lowSettings_b4',
                    Sn = 'Tutorial_scroll_fc',
                    xn = 'Tutorial_goBackContainer_3d',
                    kn = 'FormatText_base_d0',
                    Pn = ({ binding: e, text: u = '', classMix: t, alignment: n = Xe.left, formatWithBrackets: r }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const a = r && e ? Ze(u, e) : u;
                        return i().createElement(
                            o.Fragment,
                            null,
                            a.split('\n').map((u, r) =>
                                i().createElement(
                                    'div',
                                    { className: p()(kn, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : ru(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => i().createElement(o.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Tn = 'PlayVideoButton_base_93',
                    Nn = 'PlayVideoButton_hoverPreload_b8',
                    On = ({ className: e, onClick: u }) => {
                        const t = p()(e, Tn);
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement('div', { className: Nn }),
                            i().createElement('div', { className: t, onClick: u }),
                        );
                    },
                    Rn = 'TutorialElement_base__small_19',
                    Ln = 'TutorialElement_base__medium_e2',
                    Mn = 'TutorialElement_icon__small_2e',
                    In = 'TutorialElement_icon__medium_3d',
                    zn = 'TutorialElement_elementTitle_15',
                    Hn = 'TutorialElement_elementTitle_container_66',
                    Wn = 'TutorialElement_elementDescription_82',
                    jn = ({ elementType: e, isSmall: u = !1 }) => {
                        const t = u ? Rn : Ln,
                            n = u ? Mn : In,
                            r = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.customization.progression_tutorial.${e})`,
                                }),
                                [e],
                            );
                        return i().createElement(
                            'div',
                            { className: t },
                            i().createElement('div', { className: n, style: r }),
                            i().createElement(
                                'div',
                                { className: Hn },
                                i().createElement(
                                    'div',
                                    { className: zn },
                                    R.strings.vehicle_customization.progressionTutorial.$dyn(e).title(),
                                ),
                            ),
                            i().createElement(Pn, {
                                classMix: Wn,
                                text: R.strings.vehicle_customization.progressionTutorial.$dyn(e).description(),
                            }),
                        );
                    },
                    Vn = 'TutorialContent_base_cf',
                    $n = 'TutorialContent_main_03',
                    Un = 'TutorialContent_mainTitle_38',
                    Gn = 'TutorialContent_mainTitleContainer_ef',
                    qn = 'TutorialContent_mainDescription_8b',
                    Kn = 'TutorialContent_mainDescriptionContainer_f5',
                    Yn = 'TutorialContent_videoBlock_66',
                    Xn = 'TutorialContent_videoContainer_a3',
                    Zn = 'TutorialContent_playBtn_63',
                    Qn = 'TutorialContent_elementsBlock_6c',
                    Jn = 'TutorialContent_elementsTitle_31',
                    er = 'TutorialContent_elementsTitleContainer_40',
                    ur = 'TutorialContent_elementsDescription_be',
                    tr = 'TutorialContent_elementsDescriptionContainer_36',
                    nr = 'TutorialContent_elementsContainer_68',
                    rr = 'TutorialContent_elementContainer__small_a7',
                    ar = 'TutorialContent_elementContainer__medium_ad',
                    or = () => {
                        const e = Ie('model.tutorial', Me.None).showVideo,
                            u = (0, o.useCallback)(() => {
                                e();
                            }, [e]);
                        return i().createElement(
                            'div',
                            { className: Vn },
                            i().createElement(
                                'div',
                                { className: $n },
                                i().createElement(
                                    'div',
                                    { className: Gn },
                                    i().createElement(
                                        'div',
                                        { className: Un },
                                        R.strings.vehicle_customization.progressionTutorial.title(),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Kn },
                                    i().createElement(
                                        'div',
                                        { className: qn },
                                        R.strings.vehicle_customization.progressionTutorial.description(),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Yn },
                                    i().createElement(
                                        'div',
                                        { className: Xn },
                                        i().createElement(On, { className: Zn, onClick: u }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Qn },
                                    i().createElement(
                                        'div',
                                        { className: er },
                                        i().createElement(
                                            'div',
                                            { className: Jn },
                                            R.strings.vehicle_customization.progressionTutorial.howto.title(),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: tr },
                                        i().createElement(Pn, {
                                            classMix: ur,
                                            text: R.strings.vehicle_customization.progressionTutorial.howto.description(),
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: nr },
                                        i().createElement(
                                            'div',
                                            { className: ar },
                                            i().createElement(jn, { elementType: 'improvement' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: ar },
                                            i().createElement(jn, { elementType: 'interaction' }),
                                        ),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Qn },
                                    i().createElement(
                                        'div',
                                        { className: er },
                                        i().createElement(
                                            'div',
                                            { className: Jn },
                                            R.strings.vehicle_customization.progressionTutorial.features.title(),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: nr },
                                        i().createElement(
                                            'div',
                                            { className: rr },
                                            i().createElement(jn, { isSmall: !0, elementType: 'vehicles' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: rr },
                                            i().createElement(jn, { isSmall: !0, elementType: 'quests' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: rr },
                                            i().createElement(jn, { isSmall: !0, elementType: 'modes' }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    ir = ({ onBackClick: e }) => {
                        const u = !(0, o.useContext)(d).extraSmall,
                            t = Ie('model', Me.None).isRendererPipelineDeferred,
                            n = ue();
                        return (
                            ye(ve.n.ESCAPE, e),
                            i().createElement(
                                'div',
                                { className: wn },
                                i().createElement('div', { className: p()(bn, !t && yn) }),
                                i().createElement(
                                    _e.Vertical.Default,
                                    { className: Sn, api: n },
                                    i().createElement(or, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: xn },
                                    i().createElement(vn, { onClick: e, withDescription: u }),
                                ),
                            )
                        );
                    },
                    sr = ({ isTutorialShown: e, onBackClick: u, onAboutClick: t }) => {
                        const n = (0, o.useRef)(0);
                        return e
                            ? i().createElement(ir, { onBackClick: u })
                            : i().createElement(hn, { scrollPositionRef: n, onAboutClick: t });
                    },
                    lr = () => {
                        const e = (0, o.useState)(!1),
                            u = e[0],
                            t = e[1],
                            n = (0, o.useCallback)(() => t(!1), []),
                            r = (0, o.useCallback)(() => t(!0), []);
                        return i().createElement(
                            B,
                            null,
                            i().createElement(
                                'div',
                                { className: C },
                                i().createElement(
                                    'div',
                                    { className: _ },
                                    i().createElement(sr, { onBackClick: n, onAboutClick: r, isTutorialShown: u }),
                                ),
                                i().createElement('div', { className: g }),
                            ),
                        );
                    };
                (model.progressiveItems &&
                    model.progressiveItems.items.forEach(({ value: e }) => {
                        e.eachLevelInfo.items.forEach(({ value: e }) => {
                            e.icon && a.O.view.addPreloadTexture(e.icon);
                        });
                    }),
                    engine.whenReady.then(() => {
                        l().render(i().createElement(lr, null), document.getElementById('root'));
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 987),
        (() => {
            var e = { 987: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(515));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
