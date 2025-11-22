(() => {
    'use strict';
    var __webpack_modules__ = {
            70: (e, u, t) => {
                t.d(u, { O: () => ie });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => _, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => D,
                        graphicsQuality: () => p,
                        playSound: () => A,
                        setRTPC: () => F,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => h, getTextureUrl: () => w }));
                var a = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => z,
                        addPreloadTexture: () => R,
                        arabic2roman: () => ue,
                        children: () => o,
                        displayStatus: () => y,
                        displayStatusIs: () => ne,
                        enableFullScreenModeSupported: () => ae,
                        events: () => N,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => Q,
                        getExternalPaddingsRem: () => te,
                        getFontNames: () => ee,
                        getScale: () => U,
                        getSize: () => V,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => se,
                        isEventHandled: () => Z,
                        isFocused: () => Y,
                        pxToRem: () => G,
                        remToPx: () => q,
                        resize: () => $,
                        sendEvent: () => x,
                        setAnimateWindow: () => K,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => oe,
                    }));
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
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
                            : i(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${u}`,
                                        a = m[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(o, s),
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
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function F(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    B = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(b).reduce((e, u) => ((e[u] = () => A(b[u])), e), {}),
                    g = { play: Object.assign({}, f, { sound: A }), setRTPC: F };
                var v = t(690);
                function w(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function h(e, u, t) {
                    return `url(${w(e, u, t)})`;
                }
                const y = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    N = {
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
                const S = 2,
                    T = 16,
                    P = 32,
                    O = 64,
                    M = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, k);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    x = {
                        close(e) {
                            M('popover' === e ? S : P);
                        },
                        minimize() {
                            M(O);
                        },
                        move(e) {
                            M(T, { isMouseEvent: !0, on: e });
                        },
                    };
                function R(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function L(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function z(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function j(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: q(u.x), y: q(u.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const ee = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = v.cg;
                function te() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ne = Object.keys(y).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === y[u]), e), {}),
                    re = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : N.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ae() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function se(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            o = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
                const ie = { view: a, client: r, sound: g, intl: B };
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
            690: (e, u, t) => {
                t.d(u, { cg: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function o(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, u, t) => {
                t.d(u, { Z: () => o });
                var n = t(70);
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
                        const o = n.O.view.addModelObserver(e, t, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                const o = r;
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
                t.d(u, { c1: () => g, Sw: () => o.Z, B0: () => s, c9: () => p, ry: () => D, Eu: () => C });
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
                var o = t(358);
                var a = t(613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    m = t(70);
                const _ = ['args'];
                function A(e, u, t, n, r, o, a) {
                    try {
                        var s = e[o](a),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                        var o = e.apply(u, t);
                                        function a(e) {
                                            A(o, n, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(o, n, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    B = () => p(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(572);
                const g = r.instance,
                    v = {
                        DataTracker: o.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), o) => {
                            const a = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                E = i.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + a.x,
                                    y: m.O.view.pxToRem(c) + a.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, B);
                        },
                        handleViewEvent: p,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: g,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                t.d(u, { Ew: () => o, Z5: () => n, cy: () => r });
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
                    o = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            740: (e, u, t) => {
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => Ct,
                        Bar: () => At,
                        DefaultScroll: () => Dt,
                        Direction: () => Qu,
                        defaultSettings: () => et,
                        useHorizontalScrollApi: () => tt,
                    }));
                var r = {};
                function o(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                (t.r(r), t.d(r, { Area: () => Rt, Bar: () => Ot, Default: () => xt, useVerticalScrollApi: () => pt }));
                const a = {
                    playHighlight() {
                        o('highlight');
                    },
                    playClick() {
                        o('play');
                    },
                    playYes() {
                        o('yes1');
                    },
                };
                var s = t(363),
                    i = t.n(s),
                    l = t(533),
                    c = t.n(l),
                    d = t(483),
                    E = t.n(d),
                    m = t(70);
                function _() {
                    const e = (0, s.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => u, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                ((e.current = 0), u());
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
                const A = ['children'];
                const F = i().createContext(null),
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        return i().createElement(F.Provider, { value: t }, u);
                    },
                    C = {
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
                let p, B;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(p || (p = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(B || (B = {})));
                const b = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: n,
                        onMouseEnter: r,
                        onMouseMove: a,
                        onMouseDown: l,
                        onMouseUp: c,
                        onMouseLeave: d,
                        onClick: m,
                        isFocused: _ = !1,
                        type: A = p.primary,
                        soundHover: F = 'highlight',
                        soundClick: D = 'play',
                    }) => {
                        const B = (0, s.useRef)(null),
                            b = (0, s.useState)(_),
                            f = b[0],
                            g = b[1],
                            v = (0, s.useState)(!1),
                            w = v[0],
                            h = v[1];
                        return (
                            (0, s.useEffect)(() => {
                                function e(e) {
                                    f && null !== B.current && !B.current.contains(e.target) && g(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [f]),
                            (0, s.useEffect)(() => {
                                g(_);
                            }, [_]),
                            i().createElement(
                                'div',
                                {
                                    ref: B,
                                    className: E()(
                                        C.base,
                                        C[`base__${A}`],
                                        t && C.base__disabled,
                                        u && C[`base__${u}`],
                                        f && C.base__focus,
                                        w && C.base__highlightActive,
                                        n,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== F && o(F), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        a && a(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (c && c(e), h(!1));
                                    },
                                    onMouseDown: function (e) {
                                        t ||
                                            (null !== D && o(D),
                                            l && l(e),
                                            _ && (t || (B.current && (B.current.focus(), g(!0)))),
                                            h(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (d && d(e), h(!1));
                                    },
                                    onClick: function (e) {
                                        t || (m && m(e));
                                    },
                                },
                                A !== p.ghost &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', { className: C.back }),
                                        i().createElement('span', { className: C.texture }),
                                    ),
                                i().createElement(
                                    'span',
                                    { className: E()(C.state, C.state__default) },
                                    i().createElement('span', { className: C.stateDisabled }),
                                    i().createElement('span', { className: C.stateHighlightHover }),
                                    i().createElement('span', { className: C.stateHighlightActive }),
                                ),
                                i().createElement(
                                    'span',
                                    { className: C.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    f = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let g;
                !(function (e) {
                    ((e.Minimize = 'minimize'), (e.Close = 'close'));
                })(g || (g = {}));
                const v = ({ onClick: e, type: u }) => {
                        const t = (0, s.useCallback)(() => {
                                a.playHighlight();
                            }, []),
                            n = (0, s.useCallback)((e) => e.stopPropagation(), []),
                            r = E()(f.base, f[`base__${u}`]);
                        return i().createElement('div', { className: r, onClick: e, onMouseEnter: t, onMouseDown: n });
                    },
                    w = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            r = '';
                        var o;
                        u &&
                            ((r = (null == (o = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : o[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: r, caller: t, stack: u, resId: n };
                    };
                var h = t(916);
                const y = [
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
                function N(e) {
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
                const k = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: h.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    S = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            a = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            p = e.onShow,
                            B = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, y);
                        const f = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, s.useMemo)(() => C || w().resId, [C]),
                            v = (0, s.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (k(t, _, { isMouseEvent: !0, on: !0, arguments: N(n) }, g),
                                    p && p(),
                                    (f.current.isVisible = !0));
                            }, [t, _, n, g, p]),
                            h = (0, s.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        k(t, _, { on: !1 }, g),
                                        f.current.isVisible && B && B(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, _, g, B]),
                            S = (0, s.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && h();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === F && h();
                            }, [F, h]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', h),
                                    () => {
                                        (window.removeEventListener('mouseleave', h), h());
                                    }
                                ),
                                [h],
                            ));
                        return F
                            ? (0, s.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(f.current.timeoutId),
                                                      (f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (h(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && h(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && h(), null == a || a(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var T;
                    },
                    T = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const O = R.views.common.tooltip_window.simple_tooltip_content,
                    M = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            a = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, T);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, a, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, a]);
                        return i().createElement(
                            S,
                            P(
                                {
                                    contentId:
                                        ((d = null == a ? void 0 : a.hasHtmlContent),
                                        d ? O.SimpleTooltipHtmlContent('resId') : O.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    x = 'Info_base_7b',
                    I = ({ tooltipHeader: e, tooltipBody: u, tooltipContentId: t }) =>
                        t
                            ? i().createElement(S, { contentId: t }, i().createElement('div', { className: x }))
                            : i().createElement(
                                  M,
                                  { isEnabled: !0, header: e, body: u },
                                  i().createElement('div', { className: x }),
                              ),
                    L = 'Title_base_44',
                    z = ({ title: e, infoTooltipHeader: u, infoTooltipBody: t, tooltipContentId: n }) => {
                        const r = Boolean(u && t) || void 0 !== n;
                        return i().createElement(
                            'div',
                            { className: L },
                            e,
                            r && i().createElement(I, { tooltipContentId: n, tooltipHeader: u, tooltipBody: t }),
                        );
                    },
                    H = 'Header_base_ff',
                    V = 'Header_base__grabbing_dc',
                    $ = 'Header_icon_6e',
                    j = 'Header_icon__reload_c2',
                    W = 'Header_reloadButton_19',
                    U = ({
                        title: e,
                        showMinimizeBtn: u,
                        onMinimize: t,
                        onClose: n,
                        onReload: r,
                        tooltipContentId: o,
                        infoTooltipHeader: l,
                        infoTooltipBody: c,
                    }) => {
                        const d = (0, s.useState)(!1),
                            _ = d[0],
                            A = d[1],
                            F = (0, s.useCallback)((e) => {
                                const u = () => {
                                    (m.O.view.sendEvent.move(!1), A(!1), document.removeEventListener('mouseup', u));
                                };
                                0 === e.button &&
                                    (m.O.view.sendEvent.move(!0), A(!0), document.addEventListener('mouseup', u));
                            }, []);
                        return i().createElement(
                            'div',
                            { className: E()(H, _ && V), onMouseDown: F },
                            i().createElement(z, {
                                title: e,
                                tooltipContentId: o,
                                infoTooltipBody: c,
                                infoTooltipHeader: l,
                            }),
                            r &&
                                i().createElement(
                                    b,
                                    {
                                        mixClass: W,
                                        onClick: (e) => {
                                            (a.playClick(), null == r || r(e));
                                        },
                                    },
                                    i().createElement('div', { className: E()($, j) }),
                                ),
                            u &&
                                i().createElement(v, {
                                    type: g.Minimize,
                                    onClick: (e) => {
                                        (a.playClick(), t ? t(e) : m.O.view.sendEvent.minimize());
                                    },
                                }),
                            i().createElement(v, {
                                type: g.Close,
                                onClick: (e) => {
                                    (a.playClick(), n ? n(e) : m.O.view.sendEvent.close());
                                },
                            }),
                        );
                    },
                    G = 'WindowDecorator_base_6a',
                    q = 'WindowDecorator_frame_b5',
                    K = 'WindowDecorator_frame__focused_af',
                    Y = 'WindowDecorator_container_1d',
                    X = 'WindowDecorator_contentDecorations_be',
                    Z = 'WindowDecorator_content_0b',
                    J = i().forwardRef(
                        (
                            {
                                title: e,
                                showMinimizeBtn: u,
                                onClose: t,
                                onReload: n,
                                onMinimize: r,
                                onFocusChange: o,
                                tooltipContentId: a,
                                infoTooltipHeader: l,
                                infoTooltipBody: c,
                                className: d,
                                children: A,
                            },
                            F,
                        ) => {
                            const C = (0, s.useRef)(null),
                                p = (0, s.useRef)(null),
                                B = (0, s.useState)(!0),
                                b = B[0],
                                f = B[1],
                                g = _(),
                                v = () => {
                                    g.run(() => {
                                        h();
                                    });
                                },
                                w = () => {
                                    window.requestAnimationFrame(() => {
                                        h();
                                    });
                                },
                                h = () => {
                                    const e = C.current,
                                        u = p.current;
                                    if (!e || !u) return;
                                    const t = m.O.view.pxToRem(e.offsetWidth),
                                        n = m.O.view.pxToRem(e.offsetHeight);
                                    ((u.style.width = `${t}rem`), (u.style.height = `${n}rem`));
                                    const r = t + 10 + 26,
                                        o = 28 + n + 5 + 26;
                                    (m.O.view.setInputPaddingsRem(13), m.O.view.resize(r, o, 'rem'));
                                };
                            var y;
                            return (
                                (y = () => (
                                    v(),
                                    window.addEventListener('resize', w),
                                    () => window.removeEventListener('resize', w)
                                )),
                                (0, s.useEffect)(y, []),
                                (0, s.useEffect)(
                                    () =>
                                        m.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && b
                                                ? (f(!1), null == o || o(!1))
                                                : 'inside' !== e || b || (f(!0), null == o || o(!0));
                                        }),
                                    [b, o],
                                ),
                                i().createElement(
                                    D,
                                    { updateSizes: v },
                                    i().createElement(
                                        'div',
                                        { className: E()(G, d), style: { '--outer-shadow-width': '13rem' }, ref: F },
                                        i().createElement('div', { className: E()(q, b && K) }),
                                        i().createElement(U, {
                                            title: e,
                                            tooltipContentId: a,
                                            infoTooltipHeader: l,
                                            infoTooltipBody: c,
                                            onClose: t,
                                            onMinimize: r,
                                            onReload: n,
                                            showMinimizeBtn: u,
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: Y, ref: p },
                                            i().createElement('div', { className: X }),
                                            i().createElement('div', { className: Z, ref: C }, A),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Q = t(281);
                let ee;
                function ue(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ee || (ee = {}));
                const te = (e) => e.replace(/&nbsp;/g, ' '),
                    ne = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    re = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    oe = (e, u, t = ee.left) => e.split(u).reduce(t === ee.left ? ne : re, []),
                    ae = (() => {
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
                    se = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ie = (e, u = ee.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (se.includes(t)) return ae(e);
                        if ('ja' === t) {
                            return (0, Q.D4)()
                                .parse(e)
                                .map((e) => te(e));
                        }
                        return ((e, u = ee.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = te(e);
                            return (oe(r, /( )/, u).forEach((e) => (t = t.concat(oe(e, n, ee.left)))), t);
                        })(e, u);
                    };
                var le = t(613);
                (Date.now(), le.Ew.getRegionalDateTime, le.Ew.getFormattedDateTime);
                const ce = (e, u) => {
                        const t = (0, s.useRef)();
                        return (
                            (0, s.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    },
                    de = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Ee = (e) => {
                        const u = (0, s.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    me = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    _e = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Ae = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = de(`${e}.${t}`, window);
                                return me(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Fe = (e) => {
                        const u = ((e) => {
                                const u = w(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: _e(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = de(_e(t, `${u}.${n}`), window);
                                    return me(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const De = () => (window.injected || (window.injected = new Map()), window.injected);
                const Ce = h.Sw.instance;
                let pe;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(pe || (pe = {}));
                const Be = (e = 'model', u = pe.Deep) => {
                        const t = (0, s.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, s.useMemo)(() => w(), []),
                            o = r.callerUrl,
                            a = r.caller,
                            i = r.resId,
                            l = (0, s.useMemo)(() => {
                                const u = (function (e) {
                                    return De().has(e);
                                })(o.replace('.js', '.html'));
                                return window.__feature && window.__feature !== a && !u ? `subViews.${a}.${e}` : e;
                            }, [o, a, e]),
                            c = (0, s.useState)(() =>
                                ((e) => {
                                    const u = de(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return me(u) ? u.value : u;
                                })(Ae(l)),
                            ),
                            d = c[0],
                            E = c[1],
                            m = (0, s.useRef)(-1);
                        return (
                            Ee(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? pe.Deep : pe.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== pe.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === pe.Deep
                                                ? (e === d && n((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        r = Fe(e);
                                    m.current = Ce.addCallback(r, t, i, u === pe.Deep);
                                }
                            }),
                            (0, s.useEffect)(() => {
                                if (u !== pe.None)
                                    return () => {
                                        Ce.removeCallback(m.current, i);
                                    };
                            }, [i, u]),
                            d
                        );
                    },
                    be = (h.Sw.instance, ce);
                var fe = t(521);
                const ge = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ve(e = fe.n.NONE, u = ge, t = !1, n = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== fe.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && m.O.view.isEventHandled()) return;
                                (m.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const we = /<link.*?>/g,
                    he = /\.\.\//g,
                    ye = /<script.*?>/g,
                    Ne = 'default.css',
                    ke = (e) => {
                        const u = e.match(he);
                        return u && u.join('');
                    },
                    Se = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(Ne)) return t.href;
                        }
                        return '';
                    },
                    Te = (e) => {
                        const u = Se(),
                            t = ke(u);
                        let n,
                            r = e;
                        for (; null !== (n = ye.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(he, '');
                                r = r.replace(e[2], u);
                            }
                        }
                        return r;
                    },
                    Pe = () => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                (e.push(n), u || t());
                            },
                        };
                    },
                    Oe = 'SubView_base_df',
                    Me = 'subViews.onChanged',
                    xe = Pe(),
                    Re = (0, s.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: n }) => {
                        const r = (0, s.useState)(''),
                            o = r[0],
                            a = r[1],
                            l = (0, s.useMemo)(() => ({ __html: Te(o) }), [o]),
                            c = (0, s.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, s.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, s.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (_(!0), engine.off(Me, A), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            F = (0, s.useCallback)((e) => {
                                xe.add(
                                    () =>
                                        new Promise((u) => {
                                            a(e);
                                            const t = new MutationObserver(() => {
                                                    (t.disconnect(), u());
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, s.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`subView:inject->${n}`, F),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            ((t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, h.Eu)().then(() => {
                                                              (console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send());
                                        })({ name: n, path: t }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, F),
                                                console.info(`Sub view ${n} is destroyed: ${t}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(Me, A);
                        }, [A, F, e, m]),
                            (0, s.useEffect)(
                                () => () => {
                                    o &&
                                        ((e) => {
                                            const u = ke(Se());
                                            let t;
                                            for (; null !== (t = we.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(he, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(o);
                                },
                                [o],
                            ));
                        const D = E()(Oe, n);
                        if (o) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = Se(),
                                        n = ke(t);
                                    for (; null !== (u = we.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(Ne) && n) {
                                            const u = n + e[1].replace(he, ''),
                                                t = document.createElement('link');
                                            ((t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t));
                                        }
                                    }
                                })(o),
                                t && t(e),
                                i().createElement('div', { className: D, dangerouslySetInnerHTML: l })
                            );
                        }
                        return u ? i().createElement('div', { className: D }, i().createElement(u, null)) : null;
                    }),
                    Ie = 'subViews.onChanged',
                    Le = '.html',
                    ze = /^coui:\/\/gui\/.*/,
                    He = Pe(),
                    Ve = (e) => {
                        const u = document.createElement('script');
                        ((u.src = e), (u.defer = !0), document.head.appendChild(u));
                    },
                    $e =
                        ((0, s.memo)(({ id: e, bundleLevelPath: u = 3, mixClass: t, children: n }) => {
                            const r = (0, s.useRef)(null),
                                o = (0, s.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                                a = (0, s.useState)(!1),
                                l = a[0],
                                c = a[1],
                                d = (0, s.useState)(!0),
                                m = d[0],
                                _ = d[1],
                                A = (0, s.useCallback)(
                                    (e) => {
                                        e.includes(o) &&
                                            (c(!0), engine.off(Ie, A), window.subViews.removeChildChangedCallback(o));
                                    },
                                    [o],
                                ),
                                F = (0, s.useCallback)(
                                    (e) => {
                                        He.add(
                                            () =>
                                                new Promise((t) => {
                                                    const n = new MutationObserver(() => {
                                                        (_(!1), n.disconnect(), t());
                                                    });
                                                    if (r.current) {
                                                        const t = document.getElementById('root');
                                                        (t && t.setAttribute('id', 'bugSubView'),
                                                            r.current.setAttribute('id', 'root'));
                                                        const o = document.createElement('link');
                                                        ((o.href = e.replace(Le, '.css')),
                                                            (o.rel = 'stylesheet'),
                                                            document.head.appendChild(o),
                                                            ze.test(e) &&
                                                                Ve(
                                                                    e
                                                                        .split('/')
                                                                        .slice(0, -u)
                                                                        .concat(['vendors.js'])
                                                                        .join('/')
                                                                        .replace('/production/', '/production/lib/'),
                                                                ),
                                                            Ve(e.replace(Le, '.js')),
                                                            n.observe(r.current, { childList: !0 }));
                                                    }
                                                }),
                                        );
                                    },
                                    [u],
                                );
                            return (
                                (0, s.useEffect)(() => {
                                    if (window.subViews.ids().includes(e)) {
                                        const u = window.subViews.get(e),
                                            t = u.path;
                                        let n = t.split('/').pop();
                                        if (n)
                                            return (
                                                (n = n.split('.')[0]),
                                                (window.subViews[n] = Object.assign({ id: e }, u)),
                                                F(t),
                                                () => {
                                                    (n && window.subViews[n] && delete window.subViews[n],
                                                        engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                        window.__dataTracker &&
                                                            window.__dataTracker.clearViewCallbacks &&
                                                            window.__dataTracker.clearViewCallbacks(e),
                                                        console.info(`Sub view ${n} is destroyed: ${t}`));
                                                }
                                            );
                                        console.error("subView: can't get View component name");
                                    } else engine.on(Ie, A);
                                }, [A, F, e, l]),
                                i().createElement(
                                    'div',
                                    { className: E()(Oe, t) },
                                    m && n,
                                    i().createElement('div', { ref: r }),
                                )
                            );
                        }),
                        (e) => ({ backgroundImage: `url('${e}')` })),
                    je = 'BonusInfoIcon_bonusInfoIcon_3d',
                    We = () => {
                        const e = (0, s.useMemo)(() => $e(R.images.gui.maps.icons.platoon.common.info()), []);
                        return i().createElement(
                            S,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            i().createElement('div', { className: je, style: e }),
                        );
                    };
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const Ge = (0, s.memo)(
                        ({
                            caption: e,
                            isEnabled: u,
                            description: t,
                            children: n,
                            cButtonProps: r,
                            onClick: o,
                            className: a,
                        }) => {
                            const l = (0, s.useCallback)(() => o(), [o]);
                            return i().createElement(
                                M,
                                { isEnabled: !0, header: e, body: t },
                                i().createElement(
                                    'div',
                                    { className: a },
                                    i().createElement(
                                        b,
                                        Ue({ type: p.primary, size: B.small, onClick: l, disabled: !u }, r),
                                        n || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    qe = 'Separator_base_98',
                    Ke = 'Separator_base__horizontal_34',
                    Ye = 'Separator_base__vertical_9d',
                    Xe = 'Separator_image_5b';
                let Ze;
                !(function (e) {
                    ((e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom'));
                })(Ze || (Ze = {}));
                const Je = [Ze.right, Ze.left],
                    Qe = ({ position: e }) => {
                        const u = String(R.images.gui.maps.icons.platoon.common.separator.$dyn(e));
                        return i().createElement(
                            'div',
                            { className: E()(qe, Je.includes(e) ? Ye : Ke) },
                            i().createElement('div', { className: Xe, style: $e(u) }),
                        );
                    },
                    eu = {
                        base: 'ToggleButton_base_b9',
                        content: 'ToggleButton_content_85',
                        overlay: 'ToggleButton_overlay_0a',
                        base__active: 'ToggleButton_base__active_68',
                        indicator: 'ToggleButton_indicator_85',
                        button: 'ToggleButton_button_4f',
                    },
                    uu = ['active', 'className', 'children', 'size', 'mixClass'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const nu = (e) => {
                        let u = e.active,
                            t = e.className,
                            n = e.children,
                            r = e.size,
                            o = void 0 === r ? B.small : r,
                            a = e.mixClass,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, uu);
                        const l = E()(eu.base, t, u && eu.base__active);
                        return i().createElement(
                            'div',
                            { className: l },
                            i().createElement(
                                b,
                                tu({}, s, { type: 'secondary', size: o, mixClass: eu[`${a}`] }),
                                i().createElement('span', { className: eu.content }, n),
                            ),
                            i().createElement('div', { className: eu.overlay }),
                            i().createElement('div', { className: eu.indicator }),
                        );
                    },
                    ru = ((0, s.memo)(nu), (0, s.createContext)(null)),
                    ou = () => {
                        const e = (0, s.useContext)(ru);
                        return (
                            null !== e &&
                                console.info(
                                    'useDependencies hook was called with data from MembersWindowDIContext.Provider',
                                ),
                            e
                        );
                    },
                    au = { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                    su = (e, u, t, n = !0) =>
                        e && n
                            ? au
                            : ((e, u, t) => ({
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                  args: { header: e, body: u },
                                  isEnabled: t,
                              }))(u, t, n),
                    iu = 'CommanderControls_left_98',
                    lu = 'CommanderControls_tiersLimit_2c',
                    cu = 'CommanderControls_findPlayers_c1';
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Eu = () => {
                        var e;
                        const u = Be().shouldShowFindPlayersButton,
                            t = Be('model.btnInviteFriends'),
                            n = Be('model.btnFindPlayers'),
                            r = ou(),
                            o = null != (e = null == r ? void 0 : r.subViewComponent) ? e : Re;
                        return i().createElement(
                            i().Fragment,
                            null,
                            u &&
                                i().createElement(
                                    'div',
                                    { className: iu },
                                    i().createElement(
                                        S,
                                        su(!n.isEnabled, n.caption, n.description, n.hasTooltip),
                                        i().createElement(
                                            'div',
                                            null,
                                            i().createElement(
                                                b,
                                                {
                                                    type: n.isLight ? p.primary : p.secondary,
                                                    size: B.small,
                                                    onClick: n.isEnabled
                                                        ? () => {
                                                              (n.onClick(),
                                                                  n.soundClickName &&
                                                                      m.O.sound.play.sound(n.soundClickName));
                                                          }
                                                        : void 0,
                                                    disabled: !n.isEnabled,
                                                    mixClass: cu,
                                                },
                                                n.caption,
                                            ),
                                        ),
                                    ),
                                    i().createElement(o, {
                                        id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                        mixClass: lu,
                                    }),
                                ),
                            i().createElement(Ge, du({}, t, { cButtonProps: { type: p.secondary } })),
                        );
                    },
                    mu = 'Footer_base_d0',
                    _u = 'Footer_message_3d',
                    Au = 'Footer_message__alert_64',
                    Fu = () => {
                        const e = Be('model.btnSwitchReady'),
                            u = e.onClick,
                            t = e.caption,
                            n = e.description,
                            r = e.tooltipHeader,
                            o = e.isRed,
                            a = e.isEnabled,
                            l = Be(),
                            c = l.footerMessage,
                            d = l.isFooterMessageGrey,
                            m = E()(_u, !d && Au),
                            _ = (0, s.useCallback)(() => u(), [u]),
                            A = o ? p.primaryRed : p.primary;
                        return i().createElement(
                            'div',
                            { className: mu },
                            i().createElement('div', { className: m }, c),
                            i().createElement(
                                M,
                                { header: r, body: n },
                                i().createElement(b, { onClick: _, size: B.small, type: A, disabled: !a }, t),
                            ),
                        );
                    },
                    Du = 'Bonus_base_96',
                    Cu = 'Bonus_currencyImage_16',
                    pu = 'Bonus_caption_7e',
                    Bu = ({ currency: e, amount: u }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(e),
                            n = (0, s.useMemo)(() => $e(t), [t]);
                        return i().createElement(
                            'div',
                            { className: Du },
                            i().createElement('div', { className: Cu, style: n }),
                            i().createElement('span', { className: pu }, `+${u}%`),
                        );
                    },
                    bu = 'Bonuses_base_6f',
                    fu = () => {
                        const e = Be('model.header.bonuses');
                        return 0 === e.length
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: bu },
                                  e
                                      .filter((e) => e)
                                      .map(({ value: e }) =>
                                          i().createElement(Bu, {
                                              currency: e.currency,
                                              amount: e.amount,
                                              key: e.currency,
                                          }),
                                      ),
                              );
                    },
                    gu = 'FormatText_base_d0',
                    vu = ({ binding: e, text: u = '', classMix: t, alignment: n = ee.left, formatWithBrackets: r }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = r && e ? ue(u, e) : u;
                        return i().createElement(
                            s.Fragment,
                            null,
                            o.split('\n').map((u, r) =>
                                i().createElement(
                                    'div',
                                    { className: E()(gu, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : ie(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => i().createElement(s.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    wu = 'NoBonus_textContainer_ef',
                    hu = 'NoBonus_textMix_ff',
                    yu = 'NoBonus_icon_69',
                    Nu = () => {
                        const e = Be('model.header.noBonusPlaceholder'),
                            u = e.text,
                            t = e.icon,
                            n = t && $e(t);
                        return s.createElement(
                            s.Fragment,
                            null,
                            u &&
                                s.createElement(
                                    'div',
                                    { className: wu },
                                    s.createElement(vu, { text: u, classMix: hu, alignment: ee.right }),
                                ),
                            n && s.createElement('div', { style: n, className: yu }),
                        );
                    },
                    ku = (e, u) => {
                        const t = Array.isArray(e) ? e : [e];
                        return !u && t.length > 1 ? t.slice(0, 1) : t;
                    },
                    Su = ['children'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Pu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Su);
                    return i().createElement(
                        S,
                        Tu(
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
                };
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Mu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = i().createElement('div', { className: t }, e);
                        if (u.header || u.body) return i().createElement(M, u, n);
                        const r = u.contentId;
                        return r ? i().createElement(S, Ou({}, u, { contentId: r }), n) : i().createElement(Pu, u, n);
                    },
                    xu = (e) => {
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
                    Ru = [];
                function Iu(e) {
                    const u = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, u.current)(...e), Ru)
                    );
                }
                let Lu, zu;
                (!(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected'));
                })(Lu || (Lu = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(zu || (zu = {})));
                const Hu = 'TextOverflow_base_3b',
                    Vu = ['content', 'classMix', 'className'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const ju = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Vu);
                        const o = (0, s.useRef)(null),
                            a = (0, s.useState)(!0),
                            l = a[0],
                            c = a[1];
                        return (
                            (0, s.useEffect)(() =>
                                xu(() => {
                                    const e = o.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            i().createElement(
                                M,
                                { isEnabled: l, body: u },
                                i().createElement('div', $u({}, r, { ref: o, className: E()(Hu, n, t) }), u),
                            )
                        );
                    },
                    Wu = {
                        base: 'DropDownControl_base_46',
                        base__extraSmall: 'DropDownControl_base__extraSmall_a3',
                        base__small: 'DropDownControl_base__small_22',
                        base__medium: 'DropDownControl_base__medium_09',
                        base__disabled: 'DropDownControl_base__disabled_37',
                        base__focused: 'DropDownControl_base__focused_63',
                        base__selected: 'DropDownControl_base__selected_46',
                        stateHighlight: 'DropDownControl_stateHighlight_16',
                        base__over: 'DropDownControl_base__over_e7',
                        base__down: 'DropDownControl_base__down_1c',
                        base__open: 'DropDownControl_base__open_e3',
                        label: 'DropDownControl_label_12',
                        label__extraSmall: 'DropDownControl_label__extraSmall_3d',
                        label__small: 'DropDownControl_label__small_e7',
                        label__medium: 'DropDownControl_label__medium_0b',
                        label__placeholder: 'DropDownControl_label__placeholder_98',
                        button: 'DropDownControl_button_cb',
                        button__extraSmall: 'DropDownControl_button__extraSmall_d2',
                        button__small: 'DropDownControl_button__small_b5',
                        button__medium: 'DropDownControl_button__medium_14',
                        gradient: 'DropDownControl_gradient_b5',
                        disabled: 'DropDownControl_disabled_4e',
                        arrow: 'DropDownControl_arrow_de',
                        arrow__extraSmall: 'DropDownControl_arrow__extraSmall_eb',
                        arrow__small: 'DropDownControl_arrow__small_77',
                        arrow__medium: 'DropDownControl_arrow__medium_3d',
                        alert: 'DropDownControl_alert_75',
                        blink: 'DropDownControl_blink_68',
                    };
                let Uu;
                !(function (e) {
                    ((e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down'));
                })(Uu || (Uu = {}));
                const Gu = (0, s.memo)(
                        ({
                            parentId: e,
                            variant: u = Lu.Basic,
                            size: t = zu.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: a = '',
                            classMix: l,
                            onClick: c,
                            soundHover: d,
                            soundClick: m,
                            customControl: _,
                        }) => {
                            const A = (0, s.useState)(Uu.Out),
                                F = A[0],
                                D = A[1],
                                C = (0, s.useState)(!1),
                                p = C[0],
                                B = C[1],
                                b = u === Lu.Disabled,
                                f = b || u === Lu.Basic,
                                g = (0, s.useCallback)(() => {
                                    b || (D(Uu.Over), d && o(d));
                                }, [b, d]),
                                v = (0, s.useCallback)(() => D(Uu.Out), []);
                            return (
                                (0, s.useEffect)(() => {
                                    f || B(!1);
                                }, [u, f]),
                                (0, s.useEffect)(() => {
                                    b && v();
                                }, [b, v]),
                                i().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: E()(
                                            Wu.base,
                                            n && Wu.base__open,
                                            Wu[`base__${F}`],
                                            (f || !p) && Wu[`base__${u}`],
                                            l,
                                        ),
                                        onMouseEnter: g,
                                        onMouseUp: () => {
                                            (!b && D(Uu.Over), !f && B(!0));
                                        },
                                        onMouseDown: () => {
                                            b || (D(Uu.Down), m && o(m));
                                        },
                                        onMouseLeave: v,
                                        onClick: c,
                                    },
                                    i().createElement('div', { className: Wu.stateHighlight }),
                                    !p && u === Lu.Alert && i().createElement('div', { className: Wu.alert }),
                                    i().createElement(
                                        'div',
                                        { className: E()(Wu.label, Wu[`label__${t}`], !a && Wu.label__placeholder) },
                                        _ || i().createElement(ju, { content: a || r }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: E()(Wu.button, Wu[`button__${t}`]) },
                                        i().createElement('div', { className: E()(Wu.arrow, Wu[`arrow__${t}`]) }),
                                        i().createElement('div', { className: Wu.gradient }),
                                        b && i().createElement('div', { className: Wu.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    qu = (e, u, t) => (t < e ? e : t > u ? u : t);
                function Ku(e, u, t = []) {
                    const n = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, s.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, s.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        r,
                    ];
                }
                function Yu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Xu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Xu(e, u);
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
                function Xu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Zu(e, u, t) {
                    const n = (0, s.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    o = !1,
                                    a = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - a;
                                    function d() {
                                        ((a = Date.now()), t.apply(l, i));
                                    }
                                    o ||
                                        (n && !r && d(),
                                        s(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        (s(), (o = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, s.useEffect)(() => n.cancel, [n]), n);
                }
                var Ju = t(30);
                let Qu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Qu || (Qu = {}));
                const et = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ut = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const a = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                o = n[1];
                            return o <= r ? 0 : qu(r, o, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? et : l,
                                d = (0, s.useRef)(null),
                                E = (0, s.useRef)(null),
                                m = (0, s.useRef)(!1),
                                _ = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = Yu(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, s.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = Zu(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Ju.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), o && m.current && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                p = (0, s.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            o = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return a(e, u * t + o + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                B = (0, s.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            C.start({
                                                scrollPosition: a(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: a(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, D.scrollPosition],
                                ),
                                b = (0, s.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            o = p(u, e, n);
                                        B(o);
                                    },
                                    [B, p, c.step],
                                ),
                                f = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(n(e)),
                                            d.current && _.trigger('mouseWheel', e, D.scrollPosition, u(d.current)));
                                    },
                                    [D.scrollPosition, b, _],
                                ),
                                g = ((e, u = []) => {
                                    const t = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        xu(() => {
                                            const e = d.current;
                                            e &&
                                                (B(a(e, D.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, D.scrollPosition.goal],
                                ),
                                v = Iu(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = a(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            ((0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', g),
                                    () => {
                                        window.removeEventListener('resize', g);
                                    }
                                ),
                                [g],
                            ),
                                (0, s.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !o) return;
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
                                }, [d]));
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: a,
                                    handleMouseWheel: f,
                                    applyScroll: B,
                                    applyStepTo: b,
                                    contentRef: d,
                                    wrapperRef: E,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [D.scrollPosition, B, b, _.off, _.on, v, f, C, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    tt = ut({
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
                            var t;
                            e.style.transform = `translateX(-${0 | (null != (t = u.value.scrollPosition) ? t : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Qu.Next : Qu.Prev),
                        forceTriggerMouseMove: m.O.view.forceTriggerMouseMove,
                    }),
                    nt = 'HorizontalBar_base_49',
                    rt = 'HorizontalBar_base__active_5e',
                    ot = 'HorizontalBar_leftButton_5f',
                    at = 'HorizontalBar_rightButton_03',
                    st = 'HorizontalBar_track_0d',
                    it = 'HorizontalBar_thumb_fd',
                    lt = 'HorizontalBar_rail_32',
                    ct = 'disable',
                    dt = { pending: !1, offset: 0 },
                    Et = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    mt = () => {},
                    _t = (e, u) => Math.max(20, e.offsetWidth * u),
                    At = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Et, onDrag: n = mt }) => {
                        const r = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            A = (0, s.useState)(dt),
                            F = A[0],
                            D = A[1],
                            C = (0, s.useCallback)(
                                (e) => {
                                    (D(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            p = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = qu(0, 1, o / (r - n)),
                                    E = (u.offsetWidth - _t(u, s)) * i;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    a.current.classList.add(ct),
                                                    void l.current.classList.remove(ct)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(ct),
                                                    void l.current.classList.add(ct)
                                                );
                                            var u, t;
                                            (a.current.classList.remove(ct), l.current.classList.remove(ct));
                                        }
                                    })(E));
                            },
                            B = Iu(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && u && n && t)) return;
                                    const a = Math.min(1, n / o);
                                    ((u.style.width = `${_t(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== a ? r.current.classList.add(rt) : r.current.classList.remove(rt)));
                                })(),
                                    p());
                            });
                        ((0, s.useEffect)(() => xu(B)),
                            (0, s.useEffect)(
                                () =>
                                    xu(() => {
                                        const u = () => {
                                            p();
                                        };
                                        let t = mt;
                                        const n = () => {
                                            (t(), (t = xu(B)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!F.pending) return;
                                const u = m.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const o = e.contentRef.current,
                                            a = e.wrapperRef.current;
                                        if (!o || !a) return;
                                        const s = c.current,
                                            i = d.current;
                                        if (!s || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - F.offset - s.getBoundingClientRect().x,
                                            E = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: E }));
                                    }),
                                    t = m.O.client.events.mouse.up(() => {
                                        (u(), C(dt));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, C]));
                        const b = Ku((u) => e.applyStepTo(u), _, [e]),
                            f = b[0],
                            g = b[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const v = (e) => {
                            e.target.classList.contains(ct) || o('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: E()(nt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: E()(ot, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ct) || 0 !== e.button || (o('play'), f(Qu.Next));
                                },
                                onMouseUp: g,
                                ref: a,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: E()(st, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((o('play'), u.target === n))
                                                C({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const o = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + o * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Qu.Prev : Qu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: d, className: E()(it, u.thumb) }),
                                i().createElement('div', { className: E()(lt, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: E()(at, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ct) || 0 !== e.button || (o('play'), f(Qu.Prev));
                                },
                                onMouseUp: g,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Ft = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Dt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: a,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: E()(Ft.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: E()(Ft.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: E()(Ft.defaultScrollArea, r) },
                                i().createElement(Ct, { className: a, api: m, classNames: o }, e),
                            ),
                            i().createElement(At, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Ct = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, s.useEffect)(() => xu(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: E()(Ft.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: E()(Ft.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: E()(Ft.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((Ct.Bar = At), (Ct.Default = Dt));
                const pt = ut({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Qu.Next : Qu.Prev),
                    }),
                    Bt = 'VerticalBar_base_f3',
                    bt = 'VerticalBar_base__active_72',
                    ft = 'VerticalBar_topButton_d7',
                    gt = 'VerticalBar_bottomButton_06',
                    vt = 'VerticalBar_track_df',
                    wt = 'VerticalBar_thumb_32',
                    ht = 'VerticalBar_rail_43',
                    yt = 'disable',
                    Nt = () => {},
                    kt = { pending: !1, offset: 0 },
                    St = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Tt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Pt = (e, u) => Math.max(20, e.offsetHeight * u),
                    Ot = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = St, onDrag: n = Nt }) => {
                        const r = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            A = (0, s.useState)(kt),
                            F = A[0],
                            D = A[1],
                            C = (0, s.useCallback)(
                                (e) => {
                                    (D(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            p = Iu(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && u && t)) return;
                                const a = Math.min(1, n / o);
                                return (
                                    (u.style.height = `${Pt(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== a ? r.current.classList.add(bt) : r.current.classList.remove(bt)),
                                    a
                                );
                            }),
                            B = Iu(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = qu(0, 1, o / (r - n)),
                                    E = (u.offsetHeight - Pt(u, s)) * i;
                                ((t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    a.current.classList.add(yt),
                                                    void l.current.classList.remove(yt)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(yt),
                                                    void l.current.classList.add(yt)
                                                );
                                            var u, t;
                                            (a.current.classList.remove(yt), l.current.classList.remove(yt));
                                        }
                                    })(E));
                            }),
                            b = Iu(() => {
                                Tt(e, () => {
                                    (p(), B());
                                });
                            });
                        ((0, s.useEffect)(() => xu(b)),
                            (0, s.useEffect)(() => {
                                const u = () => {
                                    Tt(e, () => {
                                        B();
                                    });
                                };
                                let t = Nt;
                                const n = () => {
                                    (t(), (t = xu(b)));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!F.pending) return;
                                const u = m.O.client.events.mouse.up(() => {
                                        C(kt);
                                    }),
                                    t = m.O.client.events.mouse.move(([u]) => {
                                        Tt(e, (t) => {
                                            const r = c.current,
                                                o = d.current,
                                                a = e.getContainerSize();
                                            if (!r || !o || !a) return;
                                            const s = u.screenY - F.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * a;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, C]));
                        const f = Ku((u) => e.applyStepTo(u), _, [e]),
                            g = f[0],
                            v = f[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const w = (e) => {
                            e.target.classList.contains(yt) || o('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: E()(Bt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: E()(ft, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(yt) || 0 !== e.button || (o('play'), g(Qu.Next));
                                },
                                ref: a,
                                onMouseEnter: w,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: E()(vt, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((o('play'), u.target === n))
                                                C({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        Tt(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                o = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(o);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Qu.Prev : Qu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: w,
                                },
                                i().createElement('div', { ref: d, className: E()(wt, u.thumb) }),
                                i().createElement('div', { className: E()(ht, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: E()(gt, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(yt) || 0 !== e.button || (o('play'), g(Qu.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Mt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    xt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: a,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: E()(Mt.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: E()(Mt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: E()(Mt.area, r) },
                                i().createElement(Rt, { className: o, classNames: a, api: m }, e),
                            ),
                            i().createElement(Ot, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Rt = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, s.useEffect)(() => xu(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: E()(Mt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: E()(Mt.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Rt.Default = xt;
                const It = { Vertical: r, Horizontal: n },
                    Lt = 'VerticalAutoScroll_base_db',
                    zt = { base: 'VerticalAutoScroll_barBase_93' },
                    Ht = { content: 'VerticalAutoScroll_content_47' },
                    Vt = ({
                        children: e,
                        isEnabled: u = !0,
                        selectedItemId: t,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: o,
                    }) => {
                        const a = (0, s.useState)(!1),
                            l = a[0],
                            c = a[1],
                            d = (0, s.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, s.useRef)(null),
                            F = (0, s.useRef)(null),
                            D = pt(),
                            C = Iu(() => {
                                c(!0);
                            }),
                            p = (0, s.useCallback)(() => {
                                c(!1);
                            }, []),
                            B = (0, s.useCallback)(() => {
                                const e = F.current,
                                    u = A.current;
                                if (e && D && u) {
                                    const t = e.offsetTop + 0.5 * (e.offsetHeight - u.offsetHeight);
                                    (r && D.events.on('rest', C), D.applyScroll(t));
                                }
                            }, [C, D, r]);
                        ((0, s.useEffect)(
                            () => () => {
                                D.events.off('rest', C);
                            },
                            [C, D.events, r],
                        ),
                            (0, s.useEffect)(() => {
                                if (u && null !== t) return xu(B);
                            }, [n, B, t, u]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    const e = D.getContainerSize(),
                                        u = D.getWrapperSize();
                                    e && u && _(e > u);
                                };
                                return (
                                    D.events.on('recalculateContent', e),
                                    () => {
                                        D.events.off('recalculateContent', e);
                                    }
                                );
                            }, [m, D]));
                        const b = {
                                scrollContainerRef: A,
                                selectedItemRef: F,
                                selectedItemId: t,
                                isScrollComplete: l,
                                scrollbarActive: m,
                                onScrollAnimationComplete: p,
                            },
                            f = (0, s.cloneElement)(e, b);
                        return i().createElement(
                            'div',
                            { className: E()(Lt, o), ref: A },
                            i().createElement(It.Vertical.Area, { api: D, key: n, classNames: Ht }, f),
                            i().createElement(It.Vertical.Bar, { api: D, classNames: zt }),
                        );
                    },
                    $t = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    jt = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const Wt = (0, s.memo)((e) => {
                        let u = e.size,
                            t = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, jt);
                        const l = a.id,
                            c = a.isSelected,
                            d = a.isDisabled,
                            m = a.label,
                            _ = a.soundHover,
                            A = a.soundClick,
                            F = (0, s.useCallback)(
                                (e) => {
                                    d || (n && n(e, l));
                                },
                                [l, d, n],
                            ),
                            D = (0, s.useCallback)(() => {
                                d || (_ && o(_));
                            }, [d, _]),
                            C = (0, s.useCallback)(() => {
                                d || (A && o(A));
                            }, [d, A]),
                            p = E()($t.base, u && $t[`base__${u}`], c && $t.base__selected, d && $t.base__disabled, t);
                        return i().createElement(
                            'div',
                            { className: p, onMouseEnter: D, onMouseDown: C, onClick: F },
                            r ? r(a) : m,
                        );
                    }),
                    Ut = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const qt = ({
                        size: e,
                        items: u,
                        selectedIds: t,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: o,
                        parentId: a,
                        soundHover: s,
                        soundClick: l,
                        itemClassMix: c,
                        itemRenderer: d,
                        scrollbarActive: m,
                    }) =>
                        i().createElement(
                            'div',
                            { className: E()(Ut.base, m && Ut.base__withScroll) },
                            u.map((u) => {
                                const E = `${a}_${u.id}`;
                                return i().createElement(
                                    'div',
                                    { id: a ? E : void 0, key: E, ref: u.id === n ? r : null },
                                    i().createElement(
                                        Wt,
                                        Gt({ size: e, soundHover: s, soundClick: l, classMix: c, itemRenderer: d }, u, {
                                            onClick: o,
                                            isSelected: t.includes(u.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Kt = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Yt = ({
                        parentId: e,
                        size: u = zu.Medium,
                        items: t,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: o,
                        classMix: a,
                        itemClassMix: l,
                        itemRenderer: c,
                        onClick: d,
                        soundHover: m,
                        soundClick: _,
                    }) => {
                        const A = (0, s.useState)(null),
                            F = A[0],
                            D = A[1],
                            C = be(r);
                        (0, s.useEffect)(() => {
                            if (r && !C) {
                                const e = ((e, u) => {
                                    if (!u.length) return null;
                                    const t = e.find((e) => u.includes(e.id));
                                    return t ? t.id : null;
                                })(t, n);
                                null !== e && D(e);
                            }
                            r || D(null);
                        }, [r, t, n, C]);
                        const p = e ? `${e}_list` : void 0;
                        return i().createElement(
                            'div',
                            { id: p, className: E()(Kt.base, Kt[`base__${u}`], a) },
                            i().createElement(
                                Vt,
                                { selectedItemId: F, isEnabled: o },
                                i().createElement(qt, {
                                    parentId: e,
                                    items: t,
                                    size: u,
                                    selectedIds: n,
                                    onClick: d,
                                    soundHover: m,
                                    soundClick: _,
                                    itemClassMix: l,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    Xt = {
                        base: 'PureDropDown_base_fc',
                        base__extraSmall: 'PureDropDown_base__extraSmall_31',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    Zt = (0, s.memo)(
                        ({
                            componentId: e,
                            containerRef: u,
                            items: t,
                            selected: n = [],
                            variant: r = Lu.Basic,
                            size: o = zu.Medium,
                            multiple: a = !1,
                            autoScroll: l = !0,
                            placeholder: c,
                            classMix: d,
                            className: m,
                            controlRenderer: _,
                            itemRenderer: A,
                            open: F,
                            tooltipArgs: D,
                            onChanges: C,
                            onOpen: p,
                            onClose: B,
                            onClick: b,
                            onClickOutside: f,
                            onMouseEnter: g,
                            onMouseDown: v,
                            onMouseUp: w,
                            onMouseLeave: y,
                            soundHover: N = 'highlight',
                            soundClick: k = 'play',
                            soundItemHover: S,
                            soundItemClick: T,
                        }) => {
                            const P = (0, s.useRef)(null),
                                O = (0, s.useRef)(null),
                                M = (0, s.useRef)({ open: !1, listAbove: !1 }),
                                x = (0, s.useState)(!1),
                                R = x[0],
                                I = x[1],
                                L = (0, s.useState)(!1),
                                z = L[0],
                                H = L[1],
                                V = ku(n, a),
                                $ = r !== Lu.Disabled,
                                j = void 0 === F,
                                W = Boolean(j ? R : F),
                                U = Iu(() => {
                                    M.current.open && ((M.current.open = !1), I(!1), null == B || B());
                                });
                            ve(W ? fe.n.ESCAPE : fe.n.NONE, U, W);
                            const G = Iu(() => {
                                (null == f || f(), j && (I(!1), (M.current.open = !1), null == B || B()));
                            });
                            ((0, s.useEffect)(() => {
                                const e = P.current;
                                if (e && W)
                                    return (
                                        h.c1.register(e, G),
                                        () => {
                                            h.c1.unregister(e, G);
                                        }
                                    );
                            }, [W, G]),
                                (0, s.useEffect)(() => {
                                    void 0 !== F && (M.current.open = F);
                                }, [F]));
                            const q = (0, s.useCallback)(() => {
                                if (!P.current || !O.current) return;
                                const e = u && u.current,
                                    t = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        P.current.getBoundingClientRect().bottom +
                                            O.current.getBoundingClientRect().height >
                                        t;
                                n !== M.current.listAbove && ((M.current.listAbove = n), H(n));
                            }, [u]);
                            (0, s.useEffect)(() => xu(() => xu(q)), [q, o, t.length]);
                            const K = (0, s.useCallback)(
                                    (e) => {
                                        const u = V.findIndex((u) => u === e) > -1;
                                        let t = [];
                                        ((t = a ? (u ? V.filter((u) => u !== e) : [e, ...V]) : u ? [] : [e]),
                                            null == C || C(t));
                                    },
                                    [a, C, V],
                                ),
                                Y = (0, s.useCallback)(() => {
                                    j &&
                                        ((M.current.open = !M.current.open),
                                        I(M.current.open),
                                        M.current.open ? null == p || p() : null == B || B());
                                }, [j, p, B]),
                                X = (0, s.useCallback)(
                                    (e) => {
                                        ($ && Y(), null == b || b(e));
                                    },
                                    [$, b, Y],
                                ),
                                Z = (0, s.useCallback)(
                                    (e, u) => {
                                        (null == b || b(e, u), K(u), a || Y());
                                    },
                                    [b, a, Y, K],
                                ),
                                J = (0, s.useMemo)(
                                    () =>
                                        t
                                            .filter((e) => V.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [t, V],
                                ),
                                Q = (0, s.useMemo)(() => t.filter((e) => V.includes(e.id)), [t, V]),
                                ee = _ ? _(Q) : void 0;
                            return i().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: P,
                                    className: E()(Xt.base, Xt[`base__${o}`], m, null == d ? void 0 : d.base),
                                    onMouseEnter: g,
                                    onMouseUp: w,
                                    onMouseDown: v,
                                    onMouseLeave: y,
                                },
                                i().createElement(
                                    'div',
                                    { className: E()(Xt.control, W && Xt.control__down) },
                                    i().createElement(
                                        Mu,
                                        { tooltipArgs: D },
                                        i().createElement(Gu, {
                                            parentId: e,
                                            size: o,
                                            variant: r,
                                            isOpen: W,
                                            placeholder: c,
                                            label: J,
                                            classMix: d && d.control,
                                            onClick: X,
                                            soundHover: N,
                                            soundClick: k,
                                            customControl: ee,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    {
                                        ref: O,
                                        className: E()(
                                            Xt.list,
                                            W ? Xt.list__down : Xt.list__up,
                                            z ? Xt.list__above : Xt.list__under,
                                        ),
                                    },
                                    i().createElement(Yt, {
                                        parentId: e,
                                        size: o,
                                        items: t,
                                        selectedIds: V,
                                        isOpen: W,
                                        autoScroll: l,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: A,
                                        onClick: Z,
                                        soundHover: S || N,
                                        soundClick: T || k,
                                    }),
                                ),
                            );
                        },
                    ),
                    Jt = ['items', 'selected', 'multiple', 'onChanges'];
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
                const en = (e) => {
                        let u = e.items,
                            t = e.selected,
                            n = void 0 === t ? [] : t,
                            r = e.multiple,
                            o = void 0 !== r && r,
                            a = e.onChanges,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Jt);
                        const c = (0, s.useMemo)(() => ku(n, o), [JSON.stringify(n), o]),
                            d = (0, s.useState)(c),
                            E = d[0],
                            m = d[1],
                            _ = (0, s.useCallback)(
                                (e) => {
                                    0 !== e.length && (m(e), null == a || a(u.filter((u) => e.includes(u.id))));
                                },
                                [u, a],
                            ),
                            A = be(c);
                        return (
                            (0, s.useEffect)(() => {
                                var e, u;
                                ((e = A || []), (u = c), JSON.stringify(e) !== JSON.stringify(u) && m(c));
                            }, [A, c]),
                            i().createElement(Zt, Qt({ onChanges: _, items: u, selected: E, multiple: o }, l))
                        );
                    },
                    un = ['modelPath', 'pure'];
                function tn() {
                    return (
                        (tn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tn.apply(this, arguments)
                    );
                }
                const nn = (0, s.memo)((e) => {
                        let u = e.modelPath,
                            t = e.pure,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, un);
                        const r = Be(u),
                            o = r.onChange,
                            a = r.multiple,
                            l = Be(`${u}.items`),
                            c = Be(`${u}.selected`),
                            d = l.map(({ value: e }) => e),
                            E = c.map(({ value: e }) => e),
                            m = (0, s.useCallback)(
                                (e) => {
                                    const u = e ? e.map(({ id: e }) => e).join(', ') : '';
                                    o({ selectedIds: u });
                                },
                                [o],
                            ),
                            _ = (0, s.useCallback)(
                                (e) => {
                                    o({ selectedIds: e ? e.join(', ') : '' });
                                },
                                [o],
                            );
                        return t
                            ? i().createElement(Zt, tn({ items: d, selected: E, multiple: a, onChanges: _ }, n))
                            : i().createElement(en, tn({ items: d, selected: E, multiple: a, onChanges: m }, n));
                    }),
                    rn = 'DropDown_memberCountDropdown_67',
                    on = 'DropDown_memberCountDescription_8a',
                    an = 'DropDown_memberCountDropdownItem_f5',
                    sn = (e) => {
                        var u;
                        const t = null == (u = e.meta) ? void 0 : u.tooltipText;
                        return i().createElement(
                            M,
                            { isEnabled: t, body: t },
                            i().createElement('span', null, e.label),
                        );
                    },
                    ln = () => {
                        const e = Be('model.header.memberCountDropdown'),
                            u = e.isDisabled,
                            t = e.tooltipText,
                            n = { body: t };
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(nn, {
                                modelPath: 'model.header.memberCountDropdown',
                                classMix: { base: rn, item: an },
                                size: zu.Small,
                                itemRenderer: sn,
                                variant: u ? Lu.Disabled : Lu.Basic,
                                tooltipArgs: t ? n : void 0,
                                pure: !0,
                            }),
                            i().createElement(
                                'div',
                                { className: on },
                                R.strings.platoon.membersWindow.memberCountDropdown.description(),
                            ),
                        );
                    },
                    cn = 'Header_base_26',
                    dn = 'Header_base__wide_be',
                    En = 'Header_buttonContainer_84',
                    mn = 'Header_topLeftButtonsWrapper_75',
                    _n = 'Header_leavePlatoonButton_e4',
                    An = 'Header_dropdowns_f3',
                    Fn = 'Header_muteButtonContainer_7e',
                    Dn = 'Header_muteIcon_54';
                function Cn() {
                    return (
                        (Cn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Cn.apply(this, arguments)
                    );
                }
                const pn = () => {
                    var e;
                    const u = Be('model.header.btnLeavePlatoon'),
                        t = Be('model.header.btnMuteAll'),
                        n = Be('model.header'),
                        r = n.backgroundImage,
                        a = n.showNoBonusPlaceholder,
                        l = n.showInfoIcon,
                        c = ou(),
                        d = null != (e = null == c ? void 0 : c.hasDropDown) && e,
                        m = (0, s.useCallback)(() => {
                            (u.onClick(), o(R.sounds.gui_platoon_2_leave()));
                        }, [u]),
                        _ = (0, s.useCallback)(() => t.onClick(), [t]);
                    return i().createElement(
                        'div',
                        { className: E()(cn, d && dn), style: $e(r) },
                        i().createElement(
                            'div',
                            { className: En },
                            i().createElement(
                                'div',
                                { className: mn },
                                i().createElement(
                                    Ge,
                                    Cn({}, u, { onClick: m, cButtonProps: { type: p.secondary }, className: _n }),
                                ),
                                t.isVisible &&
                                    i().createElement(
                                        M,
                                        { header: t.tooltipHeader, body: t.tooltipBody },
                                        i().createElement(
                                            'div',
                                            { className: Fn },
                                            i().createElement(
                                                nu,
                                                { onClick: _, active: t.isSelected },
                                                i().createElement('div', { className: Dn }),
                                            ),
                                        ),
                                    ),
                            ),
                            d && i().createElement('div', { className: An }, i().createElement(ln, null)),
                        ),
                        a ? i().createElement(Nu, null) : i().createElement(fu, null),
                        l && i().createElement(We, null),
                    );
                };
                let Bn;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Bn || (Bn = {}));
                const bn = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const l = (0, s.useCallback)(() => {
                                ((0, h.c9)(h.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    a.playYes());
                            }, [r, u, t, n]),
                            c = (0, s.useCallback)(() => {
                                (0, h.c9)(h.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, n]),
                            d = (0, s.useCallback)(
                                (e) => {
                                    (i && i(e), ((e) => e.button === Bn.RIGHT)(e) && l());
                                },
                                [i, l],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                !1 === o && c();
                            }, [o, c]),
                            o ? (0, s.cloneElement)(e, { onMouseDown: d }) : e
                        );
                    },
                    fn = ['children'];
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const vn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, fn);
                        return i().createElement(
                            bn,
                            gn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    wn = 'SlotLabel_formattedText_e8',
                    hn = ({ slotLabelElements: e }) => {
                        const u = (0, s.useMemo)(() => (e) => ('' === e ? {} : JSON.parse(e)), []);
                        return i().createElement(
                            i().Fragment,
                            null,
                            e.map(({ value: e }, t) =>
                                i().createElement(
                                    'div',
                                    { key: e.content + t, style: u(e.styleJson) },
                                    i().createElement(vu, { text: e.content, classMix: wn }),
                                ),
                            ),
                        );
                    },
                    yn = {
                        base: 'NoPlayer_base_42',
                        base__disabled: 'NoPlayer_base__disabled_98',
                        central: 'NoPlayer_central_8a',
                        image: 'NoPlayer_image_41',
                        image__disabled: 'NoPlayer_image__disabled_14',
                        image__empty: 'NoPlayer_image__empty_b1',
                        image__spinner: 'NoPlayer_image__spinner_bd',
                        spinner: 'NoPlayer_spinner_44',
                        footer: 'NoPlayer_footer_68',
                    };
                let Nn;
                !(function (e) {
                    ((e.spinner = 'spinner'), (e.disabled = 'disabled'), (e.empty = 'empty'));
                })(Nn || (Nn = {}));
                const kn = ({ text: e, type: u, slotLabelElements: t }) => {
                    const n = E()(yn.base, u === Nn.disabled && yn.base__disabled),
                        r = E()(yn.image, yn[`image__${u}`]);
                    return i().createElement(
                        'div',
                        { className: n },
                        i().createElement(
                            'div',
                            { className: yn.central },
                            i().createElement('div', { className: r }),
                            e,
                        ),
                        i().createElement(
                            'div',
                            { className: yn.footer },
                            t.length > 0 && i().createElement(hn, { slotLabelElements: t }),
                        ),
                    );
                };
                let Sn, Tn;
                (!(function (e) {
                    ((e.Squad = 'squad'),
                        (e.Event = 'event'),
                        (e.Comp7 = 'comp7'),
                        (e.BattleRoyal = 'battle_royal'),
                        (e.Epic = 'epic'),
                        (e.MapBox = 'mapbox'));
                })(Sn || (Sn = {})),
                    (function (e) {
                        ((e[(e.None = 0)] = 'None'), (e[(e.ModeOffline = 1)] = 'ModeOffline'));
                    })(Tn || (Tn = {})));
                const Pn = 'WTRInfo_wtr_5e',
                    On = 'WTRInfo_wtrIcon_a9',
                    Mn = 'WTRInfo_wtrValue_80',
                    xn = ({ rating: e }) =>
                        i().createElement(
                            'div',
                            { className: Pn },
                            i().createElement('div', { className: On }),
                            i().createElement('span', { className: Mn }, e),
                        ),
                    Rn = (e) => e.replace('-', '_'),
                    In = (e, u) =>
                        String(
                            u
                                ? R.images.gui.maps.icons.vehicleTypes.elite.$dyn(Rn(e))
                                : R.images.gui.maps.icons.vehicleTypes.$dyn(Rn(e)),
                        ),
                    Ln = (e, u) => String(R.images.gui.maps.icons.vehicle.c_420x307.$dyn(Rn(u).toLowerCase())),
                    zn = (e, u) =>
                        String(R.images.gui.maps.icons.battleRoyale.vehicles.c_210x153.$dyn(Rn(u).toLowerCase())),
                    Hn = 'MutedIcon_base_d2',
                    Vn = () => {
                        const e = R.strings.platoon.members.card.muted.caption(),
                            u = R.strings.platoon.members.card.muted.description();
                        return i().createElement(
                            M,
                            { header: e, body: u },
                            i().createElement('div', { className: Hn }),
                        );
                    };
                let $n;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })($n || ($n = {}));
                const jn = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Wn = { [$n.default]: 'c_24x24', [$n.x48]: 'c_48x48', [$n.x80]: 'c_80x80', [$n.x220]: 'c_220x220' },
                    Un = ({ badgeID: e, size: u = $n.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(Wn[u]);
                        return i().createElement('div', {
                            className: E()(jn.base, jn[`base__${u}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Gn = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    qn = (0, s.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, s.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(t[e.slice(u, -u)]);
                                    })
                                );
                                var u, t;
                            }, [e]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return i().createElement(
                            M,
                            { header: u, body: t },
                            i().createElement('div', { className: Gn.anonymizedIcon }),
                        );
                    });
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                const Yn = { [$n.default]: 'c_64x24', [$n.x48]: 'c_68x28' },
                    Xn = { [$n.default]: 'c_48x48', [$n.x48]: 'c_48x48' },
                    Zn = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: o = !1,
                        isFakeNameVisible: a = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = $n.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const A = R.images.gui.maps.icons.library.badges.strips.$dyn(Yn[d]),
                            F = (0, s.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, A],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn(Xn[d]),
                            C = (0, s.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, D],
                            ),
                            p = u ? `[${u}]` : '',
                            B = E()(Gn.base, Gn[`base__${d}`], o && Gn.base__inverted),
                            b = E()(Gn.userName, m),
                            f = E()(Gn.clanTag, _),
                            g = e !== c,
                            v = a ? `${c}${p}` : c,
                            w = Boolean(n.badgeID) && i().createElement(Un, Kn({ size: d }, n, { key: 'badge' })),
                            h = Date.now(),
                            y = [
                                w,
                                [
                                    i().createElement(
                                        'div',
                                        { className: b, key: 'userName' },
                                        i().createElement(ju, { content: e, key: h }),
                                    ),
                                    !a && Boolean(p) && i().createElement('div', { className: f, key: 'clanTag' }, p),
                                ],
                                0 !== t && i().createElement('div', { className: Gn.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    i().createElement(
                                        'div',
                                        { className: Gn.suffixBadgeWrapper, key: 'suffixBadge' },
                                        i().createElement('div', { className: Gn.suffixBadgeStripe, style: F }),
                                        i().createElement('div', { className: Gn.suffixBadge, style: C }),
                                    ),
                                l && g && i().createElement(qn, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return i().createElement('div', { className: B }, o ? y.reverse() : y);
                    },
                    Jn = 'PlayerName_userName_c9',
                    Qn = { badgeID: '' },
                    er = ({ name: e, badgeID: u, clanTag: t, color: n, className: r }) => {
                        const o = (0, s.useMemo)(() => ({ badgeID: u || '' }), [u]),
                            a = (0, s.useMemo)(() => ({ color: n }), [n]);
                        return i().createElement(
                            'div',
                            { style: a, className: r },
                            i().createElement(Zn, {
                                userName: e,
                                badge: o,
                                suffixBadge: Qn,
                                clanAbbrev: t,
                                userNameClassName: Jn,
                            }),
                        );
                    };
                let ur;
                !(function (e) {
                    ((e.IRON = 'iron'),
                        (e.BRONZE = 'bronze'),
                        (e.SILVER = 'silver'),
                        (e.GOLD = 'gold'),
                        (e.ENAMEL = 'enamel'),
                        (e.MAXIMUM = 'prestige'),
                        (e.UNDEFINED = 'undefined'));
                })(ur || (ur = {}));
                var tr = t(690);
                const nr = {
                        base: 'PrestigeProgressTab_base_7c',
                        icon: 'PrestigeProgressTab_icon_0a',
                        base__left: 'PrestigeProgressTab_base__left_55',
                        level: 'PrestigeProgressTab_level_ba',
                        base__right: 'PrestigeProgressTab_base__right_5d',
                        base__iron: 'PrestigeProgressTab_base__iron_03',
                        base__bronze: 'PrestigeProgressTab_base__bronze_b8',
                        base__silver: 'PrestigeProgressTab_base__silver_ef',
                        base__gold: 'PrestigeProgressTab_base__gold_b6',
                        base__enamel: 'PrestigeProgressTab_base__enamel_39',
                    },
                    rr = 'right',
                    or = R.strings.prestige.tooltip.tab,
                    ar = R.images.gui.maps.icons.prestige.tab,
                    sr = (e) => {
                        if (e.type === ur.MAXIMUM) return ar.prestige();
                        var u;
                        return ar
                            .$dyn(e.type)
                            .$dyn((u = e.level) < 10 ? 'short' : u < 100 ? 'medium' : 'long')
                            .$dyn(`c_${e.grade}`);
                    },
                    ir = ({ emblem: e, direction: u = rr, isTooltipEnabled: t = !1 }) =>
                        e.type === ur.UNDEFINED
                            ? null
                            : i().createElement(
                                  M,
                                  { header: or.header(), body: or.body(), isEnabled: t },
                                  i().createElement(
                                      'div',
                                      { className: E()(nr.base, nr[`base__${e.type}`], nr[`base__${u}`]) },
                                      i().createElement('div', {
                                          className: nr.icon,
                                          style: { backgroundImage: `url(${sr(e)})` },
                                      }),
                                      e.type !== ur.MAXIMUM &&
                                          i().createElement('div', { className: nr.level }, e.level),
                                  ),
                              ),
                    lr = {
                        base: 'VehicleDescription_base_1b',
                        vehicleType: 'VehicleDescription_vehicleType_a1',
                        vehicleType__elite: 'VehicleDescription_vehicleType__elite_71',
                        prestigeTab__short: 'VehicleDescription_prestigeTab__short_c8',
                        prestigeTab__medium: 'VehicleDescription_prestigeTab__medium_37',
                        prestigeTab__long: 'VehicleDescription_prestigeTab__long_dd',
                    },
                    cr = ({
                        type: e,
                        isPremium: u,
                        name: t,
                        tier: n,
                        className: r,
                        prebattleType: o,
                        isPrestigeAvailable: a,
                        prestigeEmblem: s,
                    }) => {
                        const l = a && s.type !== ur.UNDEFINED;
                        return i().createElement(
                            'div',
                            { className: E()(lr.base, r) },
                            o !== Sn.BattleRoyal && (0, tr.cg)(n),
                            i().createElement('div', {
                                className: E()(lr.vehicleType, u && lr.vehicleType__elite),
                                style: $e(In(e, u)),
                            }),
                            t,
                            l &&
                                i().createElement(
                                    'div',
                                    {
                                        className: E()(
                                            lr.prestigeTab,
                                            ((c = s),
                                            c.type === ur.MAXIMUM
                                                ? lr.prestigeTab__medium
                                                : c.level < 10
                                                  ? lr.prestigeTab__short
                                                  : c.level < 100
                                                    ? lr.prestigeTab__medium
                                                    : lr.prestigeTab__long),
                                        ),
                                    },
                                    i().createElement(ir, { emblem: s, isTooltipEnabled: !0 }),
                                ),
                        );
                        var c;
                    },
                    dr = (0, s.memo)(({ src: e, className: u, autoPlay: t = !1, loop: n = !1 }) => {
                        const r = (0, s.useRef)(null);
                        return (
                            (0, s.useEffect)(() => {
                                engine.on('clientMinimized', (e) => {
                                    r.current && (e ? r.current.pause() : r.current.play());
                                });
                            }, []),
                            i().createElement('video', { ref: r, className: u, src: e, autoPlay: t, loop: n })
                        );
                    });
                dr.displayName = 'Video';
                const Er = 'VoiceAnimation_talkingAnimation_c4',
                    mr = 'VoiceAnimation_talkingAnimation__visible_18',
                    _r = ({ visible: e }) => {
                        const u = E()(Er, e && mr);
                        return i().createElement(dr, {
                            src: R.videos.platoon.VoiceChat(),
                            autoPlay: !0,
                            loop: !0,
                            className: u,
                        });
                    },
                    Ar = ({ estimatedTime: e }) =>
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement('div', null, R.strings.platoon.members.card.searching()),
                            i().createElement('span', null, '(', e, ')'),
                        ),
                    Fr = (e, u, t, n) => {
                        let r = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                        if (n && n !== Sn.Squad) {
                            const e = r.$dyn(n.toString());
                            e && (r = e);
                        }
                        let o = null;
                        return (
                            (o = e
                                ? r.$dyn('in_battle')
                                : u
                                  ? t
                                      ? r.$dyn('ready_player')
                                      : r.$dyn('ready')
                                  : t
                                    ? r.$dyn('not_ready_player')
                                    : r.$dyn('not_ready')),
                            o || Fr(e, u, t)
                        );
                    },
                    Dr = 'Player_base_7d',
                    Cr = 'Player_topping_6c',
                    pr = 'Player_toppingBack_cd',
                    Br = 'Player_topping__isPlayer_03',
                    br = 'Player_topping__isCommander_b9',
                    fr = 'Player_toppingPremiumIcon_20',
                    gr = 'Player_toppingPlayerIcon_0b',
                    vr = 'Player_mutedContainer_69',
                    wr = 'Player_name_11',
                    hr = 'Player_footer_1a',
                    yr = 'Player_readiness_f9',
                    Nr = 'Player_readiness__isReady_c9',
                    kr = 'Player_vehicleImage_42',
                    Sr = 'Player_flagImage_4e';
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const Pr = ({ player: e, isInBattle: u, infoText: t, prebattleType: n }) => {
                        const r = E()(yr, e.isReady && !u && Nr),
                            o = n === Sn.BattleRoyal ? zn : Ln,
                            a = e.isReady ? o(e.vehicle.nation, e.vehicle.techName) : '',
                            l = e.isReady
                                ? String(
                                      R.images.gui.maps.icons.platoon.members_window.tall_slot.flags.$dyn(
                                          e.vehicle.nation,
                                      ),
                                  )
                                : '',
                            c = (0, s.useMemo)(
                                () => Fr(u, e.isReady, e.isCurrentUser, n),
                                [u, e.isReady, e.isCurrentUser, n],
                            ),
                            d = E()(Cr, e.isCommander ? br : Br);
                        return i().createElement(
                            'div',
                            { className: Dr, style: $e(c) },
                            i().createElement(
                                'div',
                                { className: d },
                                i().createElement('div', { className: pr }),
                                e.isPrem && i().createElement('div', { className: fr }),
                                i().createElement(_r, { visible: e.voice.isSpeaking }),
                                i().createElement('div', { className: gr }),
                            ),
                            !u &&
                                e.isReady &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Sr, style: $e(l) }),
                                    i().createElement('div', { className: kr, style: $e(a) }),
                                ),
                            e.isIgnored &&
                                i().createElement('div', {
                                    className: Sr,
                                    style: $e(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                                }),
                            i().createElement(
                                'div',
                                { className: vr },
                                e.voice.isMutedByUser && i().createElement(Vn, null),
                            ),
                            i().createElement('div', { className: wr }, i().createElement(er, e.commonData)),
                            '' !== e.commonData.rating && i().createElement(xn, { rating: e.commonData.rating }),
                            i().createElement(
                                'div',
                                { className: hr },
                                e.isReady && !u
                                    ? i().createElement(
                                          cr,
                                          Tr({}, e.vehicle, {
                                              prebattleType: n,
                                              isPrestigeAvailable: e.isPrestigeAvailable,
                                              prestigeEmblem: e.prestigeEmblem,
                                          }),
                                      )
                                    : t,
                            ),
                            i().createElement('div', { className: r }),
                        );
                    },
                    Or = (e) => {
                        const u = (0, s.useMemo)(
                            () =>
                                e.isEmpty
                                    ? ((e) =>
                                          e.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: Nn.disabled,
                                                    slotLabelElements: e.slotLabelElements,
                                                }
                                              : e.isSearching
                                                ? {
                                                      text: i().createElement(Ar, { estimatedTime: e.estimatedTime }),
                                                      type: Nn.spinner,
                                                      slotLabelElements: e.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: Nn.empty,
                                                      slotLabelElements: e.slotLabelElements,
                                                  })(e)
                                    : {
                                          isInBattle: e.isInBattle,
                                          player: e.player,
                                          infoText: e.infoText,
                                          prebattleType: e.prebattleType,
                                      },
                            [e],
                        );
                        return (0, s.useMemo)(() => (e) => void 0 !== e.isInBattle, [])(u)
                            ? i().createElement(Pr, u)
                            : i().createElement(kn, u);
                    },
                    Mr = R.images.gui.maps.icons.platoon.members_window.wide_slot,
                    xr = Mr.cards,
                    Rr = R.strings.platoon.members.card,
                    Ir = 'Vehicle_base_9f',
                    Lr = 'Vehicle_vehicle_15',
                    zr = 'Vehicle_description_4f';
                function Hr() {
                    return (
                        (Hr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Hr.apply(this, arguments)
                    );
                }
                const Vr = ({ vehicle: e, prebattleType: u, isPrestigeAvailable: t, prestigeEmblem: n }) => {
                        const r =
                            ((o = e.nation),
                            (a = e.techName),
                            String(R.images.gui.maps.icons.vehicle.$dyn(`${o}_${Rn(a)}`)));
                        var o, a;
                        return i().createElement(
                            'div',
                            { className: Ir },
                            i().createElement(
                                cr,
                                Hr({}, e, {
                                    className: zr,
                                    prebattleType: u,
                                    isPrestigeAvailable: t,
                                    prestigeEmblem: n,
                                }),
                            ),
                            i().createElement('div', { className: Lr, style: $e(r) }),
                        );
                    },
                    $r = {
                        base: 'WideSlot_base_9b',
                        mutedContainer: 'WideSlot_mutedContainer_0d',
                        icon: 'WideSlot_icon_5b',
                        memberType: 'WideSlot_memberType_68',
                        spinner: 'WideSlot_spinner_6c',
                        badge: 'WideSlot_badge_5c',
                        mainContent: 'WideSlot_mainContent_76',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_62',
                        flag: 'WideSlot_flag_65',
                        detailsContainer: 'WideSlot_detailsContainer_30',
                        readiness: 'WideSlot_readiness_6d',
                    },
                    jr = (e) => {
                        const u = e.player,
                            t = ou(),
                            n = (0, s.useMemo)(() => {
                                const t = (({ slot: e, player: u }) => {
                                    const t = e.isInBattle,
                                        n = e.isEmpty,
                                        r = e.isDisabled,
                                        o = e.errorType,
                                        a = u.isReady,
                                        s = u.isCurrentUser;
                                    return o
                                        ? xr.$dyn('error_' + o)
                                        : t
                                          ? xr.in_battle_wide()
                                          : n
                                            ? xr.empty_wide()
                                            : r
                                              ? xr.disable_wide()
                                              : a
                                                ? s
                                                    ? xr.ready_player()
                                                    : xr.ready()
                                                : a
                                                  ? void 0
                                                  : s
                                                    ? xr.not_ready_player()
                                                    : xr.not_ready_wide();
                                })({ slot: e, player: u });
                                return (
                                    'string' != typeof t &&
                                        console.error('frameImage in WideSlot is not correct image resource'),
                                    `${t}`
                                );
                            }, [u, e]),
                            r = (0, s.useMemo)(
                                () =>
                                    (({ slot: e, player: u }) => {
                                        const t = e.isSearching,
                                            n = e.isEmpty,
                                            r = e.isDisabled,
                                            o = u.isCommander,
                                            a = u.isPrem;
                                        return t
                                            ? Mr.spinner()
                                            : r
                                              ? Mr.disabled()
                                              : n
                                                ? Mr.empty()
                                                : o
                                                  ? a
                                                      ? Mr.commander_prem()
                                                      : Mr.commander()
                                                  : o
                                                    ? void 0
                                                    : a
                                                      ? Mr.member_prem()
                                                      : Mr.member();
                                    })({ slot: e, player: u }),
                                [u, e],
                            ),
                            o = (0, s.useMemo)(() => ({ slotId: e.slotId }), [e.slotId]),
                            a =
                                !u.isReady || e.isInBattle
                                    ? e.infoText
                                    : i().createElement(Vr, {
                                          vehicle: u.vehicle,
                                          prebattleType: e.prebattleType,
                                          isPrestigeAvailable: u.isPrestigeAvailable,
                                          prestigeEmblem: u.prestigeEmblem,
                                      }),
                            l = !e.isInBattle && u.vehicle.nation;
                        return i().createElement(
                            S,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== u.commonData.rating,
                                args: o,
                            },
                            i().createElement(
                                'div',
                                { className: $r.base, style: $e(n) },
                                l &&
                                    i().createElement('div', {
                                        className: $r.flag,
                                        style: $e(
                                            `${R.images.gui.maps.icons.platoon.members_window.wide_slot.flags.$dyn(u.vehicle.nation)}`,
                                        ),
                                    }),
                                i().createElement(
                                    'div',
                                    { className: $r.mutedContainer },
                                    u.voice.isMutedByUser && i().createElement(Vn, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: E()($r.memberType, e.isDisabled && $r.isDisabled) },
                                    i().createElement(_r, { visible: u.voice.isSpeaking }),
                                    i().createElement('div', {
                                        style: $e(r),
                                        className: E()($r.icon, e.isSearching && $r.spinner),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: E()($r.mainContent, e.isEmpty && $r.mainContent__isEmpty) },
                                    ((e, u) =>
                                        e.isSearching
                                            ? `${Rr.searching()} (${e.estimatedTime})`
                                            : e.isDisabled
                                              ? Rr.disabledVertical()
                                              : e.isEmpty
                                                ? Rr.empty()
                                                : u
                                                  ? u(e)
                                                  : i().createElement(er, e.player.commonData))(
                                        e,
                                        null == t ? void 0 : t.slotMainContent,
                                    ),
                                ),
                                !e.isEmpty && i().createElement('div', { className: $r.detailsContainer }, a),
                                u.isReady &&
                                    !e.isInBattle &&
                                    i().createElement('div', {
                                        className: E()($r.readiness, u.isReady && $r.readiness__isReady),
                                    }),
                            ),
                        );
                    },
                    Wr = 'SlotContainer_base__short_e7';
                function Ur() {
                    return (
                        (Ur =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ur.apply(this, arguments)
                    );
                }
                const Gr = ({ slot: e, isHorizontal: u, isShort: t }) => {
                        const n = u ? Or : jr,
                            r = e.player.commonData.name,
                            o = (0, s.useMemo)(() => ({ userName: r }), [r]),
                            a = i().createElement(
                                'div',
                                { className: E()(t && Wr) },
                                i().createElement(n, Ur({ key: e.slotId }, e)),
                            );
                        return e.player.isCurrentUser || e.isEmpty
                            ? a
                            : i().createElement(vn, { args: o, key: e.slotId }, a);
                    },
                    qr = 'Slots_base_7e',
                    Kr = 'Slots_base__isHorizontal_aa',
                    Yr = 'Slots_base__isHorizontal__short_ba',
                    Xr = () => {
                        const e = Be(),
                            u = e.isHorizontal,
                            t = e.isShort,
                            n = Be('model.slots'),
                            r = E()(qr, u && Kr, u && t && Yr);
                        return i().createElement(
                            'div',
                            { className: r },
                            n.map((e) =>
                                i().createElement(Gr, {
                                    slot: e.value,
                                    isHorizontal: u,
                                    isShort: t,
                                    key: e.value.slotId,
                                }),
                            ),
                        );
                    },
                    Zr = 'App_base_8b',
                    Jr = 'App_base__isHorizontal_81',
                    Qr = 'App_base__isHorizontal__short_0d',
                    eo = 'App_base__isVertical_d1',
                    uo = 'App_base__isExtendedVertical_ce',
                    to = 'App_chatContainer_f7',
                    no = 'App_commanderControls_b5',
                    ro = 'App_commanderControls__center_32',
                    oo = 'App_platoon_ef',
                    ao = 'App_slots_c4',
                    so = (e, u, t) => (e ? uo : u ? [Jr, t && Qr] : eo),
                    io = () => {
                        var e, u, t;
                        const n = Be(),
                            r = n.canMinimize,
                            o = n.isCommander,
                            a = n.isHorizontal,
                            l = n.isShort,
                            c = n.onClosed,
                            d = n.onMinimized,
                            _ = n.onFocusChange,
                            A = n.windowTooltipHeader,
                            F = n.windowTooltipBody,
                            D = n.rawTitle,
                            C = n.shouldShowFindPlayersButton,
                            p = ou(),
                            B = null != (e = null == p ? void 0 : p.subViewComponent) ? e : Re,
                            b = null != (u = null == p ? void 0 : p.isExtendedVertical) && u,
                            f = (0, s.useCallback)(() => {
                                (m.O.view.setEventHandled(), c());
                            }, [c]),
                            g = (0, s.useCallback)(() => d(), [d]),
                            v = (0, s.useCallback)(
                                (e) => {
                                    _({ isFocused: e });
                                },
                                [_],
                            );
                        return (
                            ve(fe.n.ESCAPE, () => f()),
                            i().createElement(
                                J,
                                {
                                    showMinimizeBtn: r,
                                    title: D,
                                    infoTooltipHeader: A,
                                    infoTooltipBody: F,
                                    tooltipContentId: null == p ? void 0 : p.tooltipContentId,
                                    onClose: f,
                                    onMinimize: g,
                                    onFocusChange: v,
                                },
                                i().createElement(
                                    'div',
                                    { className: E()(Zr, so(b, a, l)) },
                                    i().createElement(
                                        'div',
                                        { className: oo },
                                        i().createElement(pn, null),
                                        i().createElement(Qe, { position: Ze.top }),
                                        i().createElement('div', { className: ao }, i().createElement(Xr, null)),
                                        !(null != p && p.hideCommanderControls) &&
                                            i().createElement(
                                                'div',
                                                { className: E()(no, !C && ro) },
                                                o && i().createElement(Eu, null),
                                            ),
                                        i().createElement(Qe, { position: Ze.bottom }),
                                        null != (t = null == p ? void 0 : p.footerComponent)
                                            ? t
                                            : i().createElement(Fu, null),
                                    ),
                                    i().createElement(Qe, { position: Ze.left }),
                                    i().createElement(B, {
                                        id: R.views.lobby.platoon.subViews.Chat('resId'),
                                        mixClass: to,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    (c().render(i().createElement(io, null), document.getElementById('root')),
                        o(R.sounds.gui_platoon_2_created()));
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], o = !0, a = 0; a < u.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 699),
        (() => {
            var e = { 699: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [o, a, s] = t,
                        i = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < o.length; i++)
                        ((r = o[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(740));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
